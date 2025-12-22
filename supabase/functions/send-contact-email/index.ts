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
  _preview?: boolean; // Preview mode - returns HTML without sending
  _previewType?: "notification" | "confirmation" | "both"; // Which template to preview
}

// ==========================================
// EMAIL TEMPLATE CONFIGURATION
// Customize these settings to match your branding
// ==========================================

const EMAIL_CONFIG = {
  // Sender Information
  senderName: "Nikhil Raj",
  senderTitle: "Computer Science Student @ MANIT Bhopal",
  senderEmail: "nikhilgamingff8@gmail.com",
  
  // Branding Colors (use hex codes)
  colors: {
    primary: "#d97706",        // Main brand color (amber/gold)
    primaryLight: "#f59e0b",   // Lighter variant for gradients
    textDark: "#1f2937",       // Dark text color
    textMedium: "#374151",     // Medium text color
    textLight: "#6b7280",      // Light/muted text color
    textMuted: "#9ca3af",      // Very muted text
    background: "#ffffff",     // Email background
    cardBg: "#f9fafb",         // Card/section background
    border: "#e5e7eb",         // Border color
  },
  
  // Email Content
  notificationSubjectPrefix: "New Contact:",
  confirmationSubject: "Thank you for reaching out!",
  
  // Response Time Promise
  responseTime: "24-48 hours",
  
  // Social Links (optional - set to null to hide)
  socialLinks: {
    github: "https://github.com/nikhilgamingff8-cyber",
    linkedin: "https://www.linkedin.com/in/nikhil-raj-513a22393",
    twitter: "https://x.com/Nikhilraj302",
  },
};

// ==========================================
// EMAIL TEMPLATE FUNCTIONS
// ==========================================

interface EmailTemplateData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Generate notification email HTML (sent to you)
function generateNotificationEmail(data: EmailTemplateData): string {
  const { name, email, subject, message } = data;
  const { colors, senderName } = EMAIL_CONFIG;
  
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: ${colors.background};">
      <div style="background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight}); padding: 20px; border-radius: 8px 8px 0 0;">
        <h2 style="color: ${colors.background}; margin: 0;">New Contact Form Submission</h2>
      </div>
      <div style="padding: 20px; border: 1px solid ${colors.border}; border-top: none; border-radius: 0 0 8px 8px;">
        <div style="background: ${colors.cardBg}; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <p style="margin: 8px 0; color: ${colors.textDark};"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin: 8px 0; color: ${colors.textDark};"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color: ${colors.primary};">${escapeHtml(email)}</a></p>
          <p style="margin: 8px 0; color: ${colors.textDark};"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        </div>
        <div style="background: ${colors.background}; padding: 20px; border: 1px solid ${colors.border}; border-radius: 8px;">
          <h3 style="margin-top: 0; color: ${colors.textDark};">Message:</h3>
          <p style="white-space: pre-wrap; color: ${colors.textMedium};">${escapeHtml(message)}</p>
        </div>
        <p style="color: ${colors.textLight}; font-size: 12px; margin-top: 20px;">
          Reply directly to this email to respond to ${escapeHtml(name)}.
        </p>
      </div>
    </div>
  `;
}

// Generate confirmation email HTML (sent to sender)
function generateConfirmationEmail(data: EmailTemplateData): string {
  const { name, subject, message } = data;
  const { colors, senderName, senderTitle, responseTime, socialLinks } = EMAIL_CONFIG;
  
  // Build social links HTML if available
  let socialLinksHtml = '';
  if (socialLinks) {
    const links = [];
    if (socialLinks.github) links.push(`<a href="${socialLinks.github}" style="color: ${colors.primary}; text-decoration: none; margin-right: 15px;">GitHub</a>`);
    if (socialLinks.linkedin) links.push(`<a href="${socialLinks.linkedin}" style="color: ${colors.primary}; text-decoration: none; margin-right: 15px;">LinkedIn</a>`);
    if (socialLinks.twitter) links.push(`<a href="${socialLinks.twitter}" style="color: ${colors.primary}; text-decoration: none;">Twitter</a>`);
    if (links.length > 0) {
      socialLinksHtml = `
        <div style="margin-top: 20px;">
          <p style="color: ${colors.textLight}; font-size: 14px; margin-bottom: 8px;">Connect with me:</p>
          <p>${links.join('')}</p>
        </div>
      `;
    }
  }
  
  // Truncate message for summary
  const messageSummary = message.length > 200 ? message.substring(0, 200) + '...' : message;
  
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: ${colors.background};">
      <div style="background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight}); padding: 30px; border-radius: 8px 8px 0 0;">
        <h1 style="color: ${colors.background}; margin: 0; font-size: 24px;">Thank you, ${escapeHtml(name)}!</h1>
      </div>
      <div style="padding: 30px; border: 1px solid ${colors.border}; border-top: none; border-radius: 0 0 8px 8px;">
        <p style="color: ${colors.textMedium}; font-size: 16px; line-height: 1.6;">
          I've received your message and appreciate you taking the time to reach out. 
          I'll review your inquiry and get back to you as soon as possible, usually within ${responseTime}.
        </p>
        
        <div style="background: ${colors.cardBg}; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: ${colors.textDark}; margin-top: 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Your Message Summary</h3>
          <p style="color: ${colors.textLight}; margin: 8px 0;"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p style="color: ${colors.textLight}; margin: 8px 0; white-space: pre-wrap;"><strong>Message:</strong> ${escapeHtml(messageSummary)}</p>
        </div>
        
        <p style="color: ${colors.textMedium}; font-size: 16px; line-height: 1.6;">
          In the meantime, feel free to connect with me on social media or check out my portfolio.
        </p>
        
        ${socialLinksHtml}
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid ${colors.border};">
          <p style="color: ${colors.textLight}; font-size: 14px; margin: 0;">
            Best regards,<br>
            <strong style="color: ${colors.textDark};">${senderName}</strong><br>
            <span style="color: ${colors.primary};">${senderTitle}</span>
          </p>
        </div>
        
        <p style="color: ${colors.textMuted}; font-size: 12px; margin-top: 30px; text-align: center;">
          This is an automated confirmation email. Please do not reply directly to this message.
        </p>
      </div>
    </div>
  `;
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

  try {
    const rawData = await req.json();

    // ==========================================
    // PREVIEW MODE - Returns HTML without sending
    // ==========================================
    if (rawData._preview === true) {
      console.log("Preview mode activated");
      
      // Use sample data if not provided
      const previewData: EmailTemplateData = {
        name: rawData.name || "John Doe",
        email: rawData.email || "john@example.com",
        subject: rawData.subject || "Sample Subject Line",
        message: rawData.message || "This is a sample message to preview how the email template will look. It includes enough text to show the layout properly.\n\nYou can customize the content by passing name, email, subject, and message in your request.",
      };

      const previewType = rawData._previewType || "both";
      
      let response: Record<string, unknown> = {
        preview: true,
        config: EMAIL_CONFIG,
      };

      if (previewType === "notification" || previewType === "both") {
        response.notificationEmail = {
          subject: `${EMAIL_CONFIG.notificationSubjectPrefix} ${previewData.subject}`,
          html: generateNotificationEmail(previewData),
        };
      }

      if (previewType === "confirmation" || previewType === "both") {
        response.confirmationEmail = {
          subject: EMAIL_CONFIG.confirmationSubject,
          html: generateConfirmationEmail(previewData),
        };
      }

      return new Response(
        JSON.stringify(response),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // ==========================================
    // NORMAL MODE - Send emails
    // ==========================================
    
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

    // Prepare template data
    const templateData: EmailTemplateData = { name, email, subject, message };

    // Send notification email to you
    const notificationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `Portfolio Contact <onboarding@resend.dev>`,
        to: [EMAIL_CONFIG.senderEmail],
        subject: `${EMAIL_CONFIG.notificationSubjectPrefix} ${escapeHtml(subject)}`,
        html: generateNotificationEmail(templateData),
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
        from: `${EMAIL_CONFIG.senderName} <onboarding@resend.dev>`,
        to: [email],
        subject: EMAIL_CONFIG.confirmationSubject,
        html: generateConfirmationEmail(templateData),
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
