import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_education",
  title: "Get education",
  description: "Get Nikhil Raj's education history and academic achievements.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: [
          "Education:",
          "- Jawahar Navodaya Vidyalaya (JNV) — schooling",
          "- Class 12: Represented at national level in wrestling",
          "- Completed HTML, CSS, JavaScript, and Git & GitHub self-learning tracks",
          "",
          "Next goal: Become a digital advertising expert (Google Ads, Facebook Ads, PPC).",
        ].join("\n"),
      },
    ],
  }),
});
