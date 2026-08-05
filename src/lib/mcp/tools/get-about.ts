import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_about",
  title: "Get about",
  description: "Get Nikhil Raj's bio, background, and frontend web development journey.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: [
          "Nikhil Raj — Frontend Web Developer.",
          "",
          "Education: B.Tech in Metallurgical and Materials Science Engineering at MANIT Bhopal (2025-2029), currently in the 3rd semester with a CGPA of 6.8.",
          "",
          "Background: Studied at Jawahar Navodaya Vidyalaya (JNV) and represented JNV in wrestling, which built discipline and consistency.",
          "",
          "Skills: HTML, CSS, JavaScript, Python, C, Git & GitHub, Netlify deployment, responsive and mobile-first design, AI-assisted development tools.",
          "",
          "Current focus: Building responsive websites, landing pages, and modern web applications, and learning advanced JavaScript and React.js.",
        ].join("\n"),
      },
    ],
  }),
});
