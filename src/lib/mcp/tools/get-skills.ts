import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_skills",
  title: "Get skills",
  description: "List Nikhil Raj's technical skills across programming, web development, and tools.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const skills = {
      programming: ["HTML5", "CSS3", "JavaScript", "Python", "C"],
      web_development: [
        "Responsive Web Design",
        "Landing Page Development",
        "Website Deployment",
        "Mobile First Design",
      ],
      tools: [
        "VS Code",
        "Git",
        "GitHub",
        "Netlify",
        "Google AI Studio",
        "Canva",
        "Google Sheets",
      ],
      currently_learning: ["Advanced JavaScript", "React.js", "AI Assisted Development"],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(skills, null, 2) }],
      structuredContent: skills,
    };
  },
});
