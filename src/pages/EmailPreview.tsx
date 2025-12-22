import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Eye, Mail, RefreshCw } from "lucide-react";

const EmailPreview = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [previewData, setPreviewData] = useState({
    name: "John Doe",
    email: "john@example.com",
    subject: "Project Inquiry",
    message: "Hello! I came across your portfolio and I'm impressed with your work.\n\nI'd love to discuss a potential collaboration opportunity. Let me know if you're available for a quick call this week.\n\nBest regards,\nJohn",
  });
  const [previewType, setPreviewType] = useState<"notification" | "confirmation" | "both">("both");
  const [emailPreviews, setEmailPreviews] = useState<{
    notificationEmail?: { subject: string; html: string };
    confirmationEmail?: { subject: string; html: string };
    config?: Record<string, unknown>;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPreviewData({ ...previewData, [e.target.name]: e.target.value });
  };

  const fetchPreview = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          ...previewData,
          _preview: true,
          _previewType: previewType,
        },
      });

      if (error) throw error;
      setEmailPreviews(data);
      toast({
        title: "Preview loaded",
        description: "Email templates rendered successfully.",
      });
    } catch (error: unknown) {
      console.error("Error fetching preview:", error);
      toast({
        title: "Error loading preview",
        description: error instanceof Error ? error.message : "Failed to load email preview",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl font-semibold text-foreground mb-2">
            Email Template Preview
          </h1>
          <p className="text-muted-foreground font-body">
            Test and preview email templates before sending
          </p>
        </div>

        {/* Input Form */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-8">
          <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            Sample Data
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={previewData.name}
                onChange={handleChange}
                className="form-input w-full px-4 py-2 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={previewData.email}
                onChange={handleChange}
                className="form-input w-full px-4 py-2 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-body text-sm font-medium text-foreground mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={previewData.subject}
              onChange={handleChange}
              className="form-input w-full px-4 py-2 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block font-body text-sm font-medium text-foreground mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={previewData.message}
              onChange={handleChange}
              rows={4}
              className="form-input w-full px-4 py-2 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none resize-none"
            />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="font-body text-sm font-medium text-foreground">
                Preview Type:
              </label>
              <select
                value={previewType}
                onChange={(e) => setPreviewType(e.target.value as typeof previewType)}
                className="px-3 py-2 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none"
              >
                <option value="both">Both Templates</option>
                <option value="notification">Notification Only</option>
                <option value="confirmation">Confirmation Only</option>
              </select>
            </div>
            <button
              onClick={fetchPreview}
              disabled={loading}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-lg font-body font-medium transition-all hover:shadow-lg disabled:opacity-50"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
              {loading ? "Loading..." : "Generate Preview"}
            </button>
          </div>
        </div>

        {/* Preview Results */}
        {emailPreviews && (
          <div className="space-y-8">
            {emailPreviews.notificationEmail && (
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="bg-secondary/50 px-6 py-4 border-b border-border">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Notification Email (sent to you)
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    Subject: {emailPreviews.notificationEmail.subject}
                  </p>
                </div>
                <div className="p-6 bg-white">
                  <iframe
                    srcDoc={emailPreviews.notificationEmail.html}
                    className="w-full min-h-[400px] border-0"
                    title="Notification Email Preview"
                  />
                </div>
              </div>
            )}

            {emailPreviews.confirmationEmail && (
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="bg-secondary/50 px-6 py-4 border-b border-border">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Confirmation Email (sent to sender)
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    Subject: {emailPreviews.confirmationEmail.subject}
                  </p>
                </div>
                <div className="p-6 bg-white">
                  <iframe
                    srcDoc={emailPreviews.confirmationEmail.html}
                    className="w-full min-h-[500px] border-0"
                    title="Confirmation Email Preview"
                  />
                </div>
              </div>
            )}

            {emailPreviews.config && (
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Current Email Configuration
                </h3>
                <pre className="bg-secondary/30 p-4 rounded-lg overflow-x-auto text-sm font-mono text-foreground">
                  {JSON.stringify(emailPreviews.config, null, 2)}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailPreview;
