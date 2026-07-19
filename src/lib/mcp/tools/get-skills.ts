import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_skills",
  title: "Get skills",
  description: "List Nikhil Raj's current skills across web basics and digital advertising tools.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const skills = {
      web: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
      advertising_learning: [
        "Google Ads",
        "Facebook Ads",
        "PPC campaign management",
        "Audience targeting",
        "Ad copywriting",
        "Analytics & tracking",
      ],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(skills, null, 2) }],
      structuredContent: skills,
    };
  },
});
