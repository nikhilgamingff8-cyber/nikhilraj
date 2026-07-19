import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_projects",
  title: "Get projects",
  description: "List Nikhil Raj's public projects and GitHub repositories.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const projects = [
      {
        name: "Contact Form",
        description: "HTML/CSS/JS contact form built while learning web basics.",
        repo: "https://github.com/nikhilgamingff8-cyber/contact-form",
      },
      {
        name: "HTML Day 1",
        description: "First HTML/CSS/JS practice project.",
        repo: "https://github.com/nikhilgamingff8-cyber/HTML-day-1",
      },
      {
        name: "Portfolio",
        description: "This portfolio site.",
        repo: "https://github.com/nikhilgamingff8-cyber",
      },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(projects, null, 2) }],
      structuredContent: { projects },
    };
  },
});
