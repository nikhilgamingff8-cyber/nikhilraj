import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_about",
  title: "Get about",
  description: "Get Nikhil Raj's bio, background, and journey into digital advertising.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: [
          "Nikhil Raj — aspiring digital ads expert.",
          "",
          "Background: Studied at Jawahar Navodaya Vidyalaya (JNV). Represented at the national level in wrestling during 12th class, which built discipline and resilience.",
          "",
          "Web foundations: Completed HTML, CSS, JavaScript, and Git & GitHub.",
          "",
          "Current focus: Transitioning from web development into digital advertising — learning Google Ads, Facebook Ads, and PPC campaign strategy to become an ads expert.",
        ].join("\n"),
      },
    ],
  }),
});
