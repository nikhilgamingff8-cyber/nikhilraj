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
          "- B.Tech, Metallurgical and Materials Science Engineering — MANIT Bhopal (2025-2029), 3rd semester, CGPA 6.8",
          "- Class XII — Jawahar Navodaya Vidyalaya, CBSE, 2024, 85.2%",
          "- Class X — Jawahar Navodaya Vidyalaya, CBSE, 2022, 89.4%",
          "",
          "Achievements: INSPIRE MANAK Award, IISF 2022 participant, NVS Wrestling participant, built multiple live websites.",
          "",
          "Next goal: Become a skilled Frontend Web Developer and secure a frontend internship.",
        ].join("\n"),
      },
    ],
  }),
});
