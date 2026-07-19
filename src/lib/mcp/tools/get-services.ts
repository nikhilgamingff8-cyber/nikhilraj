import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_services",
  title: "Get services",
  description: "List digital advertising services Nikhil Raj offers.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const services = [
      "Google Ads campaign setup & management",
      "Facebook & Instagram Ads management",
      "PPC strategy & optimization",
      "Audience targeting & retargeting",
      "Ad creative & copywriting",
      "Analytics, tracking & reporting",
    ];
    return {
      content: [{ type: "text", text: services.map((s) => `- ${s}`).join("\n") }],
      structuredContent: { services },
    };
  },
});
