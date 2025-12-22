import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  _hp?: string; // Honeypot field
  _ts?: number; // Time spent on form (ms)
}

const MIN_FORM_TIME_MS = 3000; // Minimum 3 seconds to fill form

// Rate limiting configuration
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3; // Max 3 requests per minute per IP

// In-memory rate limit store (resets when function cold starts)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Clean up expired entries periodically
function cleanupRateLimitStore() {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}

// Check rate limit for an IP
function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  cleanupRateLimitStore();
  
  const now = Date.now();
  const record = rateLimitStore.get(ip);
  
  if (!record || now > record.resetTime) {
    // First request or window expired - create new record
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }
  
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    // Rate limit exceeded
    const retryAfter = Math.ceil((record.resetTime - now) / 1000);
    return { allowed: false, retryAfter };
  }
  
  // Increment count
  record.count++;
  return { allowed: true };
}

// HTML escape function to prevent XSS attacks
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Input validation function
function validateInput(data: ContactFormRequest): { valid: boolean; error?: string } {
  const { name, email, subject, message } = data;

  // Check required fields
  if (!name || !email || !subject || !message) {
    return { valid: false, error: "All fields are required" };
  }

  // Trim and validate name
  const trimmedName = name.trim();
  if (trimmedName.length === 0) {
    return { valid: false, error: "Name cannot be empty" };
  }
  if (trimmedName.length > 100) {
    return { valid: false, error: "Name must be less than 100 characters" };
  }

  // Trim and validate email
  const trimmedEmail = email.trim();
  if (!emailRegex.test(trimmedEmail)) {
    return { valid: false, error: "Invalid email format" };
  }
  if (trimmedEmail.length > 255) {
    return { valid: false, error: "Email must be less than 255 characters" };
  }

  // Trim and validate subject
  const trimmedSubject = subject.trim();
  if (trimmedSubject.length === 0) {
    return { valid: false, error: "Subject cannot be empty" };
  }
  if (trimmedSubject.length > 200) {
    return { valid: false, error: "Subject must be less than 200 characters" };
  }

  // Trim and validate message
  const trimmedMessage = message.trim();
  if (trimmedMessage.length === 0) {
    return { valid: false, error: "Message cannot be empty" };
  }
  if (trimmedMessage.length > 5000) {
    return { valid: false, error: "Message must be less than 5000 characters" };
  }

  return { valid: true };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Get client IP for rate limiting
  const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                   req.headers.get("x-real-ip") || 
                   "unknown";
  
  // Check rate limit
  const rateLimit = checkRateLimit(clientIP);
  if (!rateLimit.allowed) {
    console.log(`Rate limit exceeded for IP: ${clientIP}`);
    return new Response(
      JSON.stringify({ 
        error: "Too many requests. Please try again later.",
        retryAfter: rateLimit.retryAfter 
      }),
      {
        status: 429,
        headers: { 
          "Content-Type": "application/json", 
          "Retry-After": String(rateLimit.retryAfter),
          ...corsHeaders 
        },
      }
    );
  }

  try {
    const rawData = await req.json();
    
    // Honeypot check - if filled, silently reject (appears successful to bots)
    if (rawData._hp && rawData._hp.trim() !== "") {
      console.log("Honeypot triggered - likely bot submission");
      return new Response(
        JSON.stringify({ success: true, message: "Message sent successfully" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Time-based check - reject if submitted too quickly (bots fill forms instantly)
    if (typeof rawData._ts === "number" && rawData._ts < MIN_FORM_TIME_MS) {
      console.log("Time-based check failed - form submitted too quickly:", rawData._ts, "ms");
      return new Response(
        JSON.stringify({ success: true, message: "Message sent successfully" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    // Validate input
    const validation = validateInput(rawData);
    if (!validation.valid) {
      console.log("Validation failed:", validation.error);
      return new Response(
        JSON.stringify({ error: validation.error }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Sanitize and trim inputs
    const name = rawData.name.trim();
    const email = rawData.email.trim().toLowerCase();
    const subject = rawData.subject.trim();
    const message = rawData.message.trim();

    // Log without sensitive data (no email address)
    console.log("Received contact form submission from:", name);

    // Send notification email to you (this always works with test domain)
    const notificationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["nikhilgamingff8@gmail.com"],
        subject: `New Contact: ${escapeHtml(subject)}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #d97706;">New Contact Form Submission</h2>
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${escapeHtml(name)}</p>
              <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
              <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
            </div>
            <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h3 style="margin-top: 0;">Message:</h3>
              <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
            </div>
            <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
              Reply directly to this email to respond to ${escapeHtml(name)}.
            </p>
          </div>
        `,
        reply_to: email,
      }),
    });

    const notificationData = await notificationResponse.json();
    console.log("Notification email sent successfully");

    if (!notificationResponse.ok) {
      console.error("Failed to send notification email:", notificationData);
      throw new Error(notificationData.message || "Failed to send email");
    }

    // Send confirmation email to the sender
    const confirmationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Nikhil Raj <onboarding@resend.dev>",
        to: [email],
        subject: "Thank you for reaching out!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
            <div style="background: linear-gradient(135deg, #d97706, #f59e0b); padding: 30px; border-radius: 8px 8px 0 0;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Thank you, ${escapeHtml(name)}!</h1>
            </div>
            <div style="padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
              <p style="color: #374151; font-size: 16px; line-height: 1.6;">
                I've received your message and appreciate you taking the time to reach out. 
                I'll review your inquiry and get back to you as soon as possible, usually within 24-48 hours.
              </p>
              
              <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #1f2937; margin-top: 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Your Message Summary</h3>
                <p style="color: #6b7280; margin: 8px 0;"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
                <p style="color: #6b7280; margin: 8px 0; white-space: pre-wrap;"><strong>Message:</strong> ${escapeHtml(message.substring(0, 200))}${message.length > 200 ? '...' : ''}</p>
              </div>
              
              <p style="color: #374151; font-size: 16px; line-height: 1.6;">
                In the meantime, feel free to connect with me on social media or check out my portfolio.
              </p>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 14px; margin: 0;">
                  Best regards,<br>
                  <strong style="color: #1f2937;">Nikhil Raj</strong><br>
                  <span style="color: #d97706;">Computer Science Student @ MANIT Bhopal</span>
                </p>
              </div>
              
              <p style="color: #9ca3af; font-size: 12px; margin-top: 30px; text-align: center;">
                This is an automated confirmation email. Please do not reply directly to this message.
              </p>
            </div>
          </div>
        `,
      }),
    });

    const confirmationData = await confirmationResponse.json();
    
    if (!confirmationResponse.ok) {
      // Log but don't fail - the main notification was sent
      console.error("Failed to send confirmation email:", confirmationData);
    } else {
      console.log("Confirmation email sent successfully");
    }

    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error.message);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
