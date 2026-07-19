import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "send_contact_message",
  title: "Send contact message",
  description: "Send a message to Nikhil Raj via the portfolio contact form.",
  inputSchema: {
    name: z.string().trim().min(1).describe("Sender's full name"),
    email: z.string().trim().email().describe("Sender's email address"),
    subject: z.string().trim().min(1).describe("Message subject"),
    message: z.string().trim().min(1).describe("Message body"),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: true },
  handler: async ({ name, email, subject, message }) => {
    const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env ?? {};
    const url = env.SUPABASE_URL;
    const anon = env.SUPABASE_PUBLISHABLE_KEY ?? env.SUPABASE_ANON_KEY;
    if (!url || !anon) {
      return {
        content: [{ type: "text", text: "Contact service is not configured." }],
        isError: true,
      };
    }
    try {
      const res = await fetch(`${url}/functions/v1/send-contact-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${anon}`,
          apikey: anon,
        },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const text = await res.text();
      if (!res.ok) {
        return {
          content: [{ type: "text", text: `Failed to send message: ${text}` }],
          isError: true,
        };
      }
      return {
        content: [{ type: "text", text: "Message sent successfully. Nikhil will get back to you soon." }],
      };
    } catch (err) {
      return {
        content: [{ type: "text", text: `Error sending message: ${(err as Error).message}` }],
        isError: true,
      };
    }
  },
});
