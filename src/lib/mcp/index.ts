import { defineMcp } from "@lovable.dev/mcp-js";
import getAbout from "./tools/get-about";
import getEducation from "./tools/get-education";
import getProjects from "./tools/get-projects";
import getSkills from "./tools/get-skills";
import sendContactMessage from "./tools/send-contact-message";

export default defineMcp({
  name: "nikhil-raj-portfolio-mcp",
  title: "Nikhil Raj Portfolio",
  version: "0.1.0",
  instructions:
    "Tools for Nikhil Raj's portfolio. Read the about, education, projects, and skills, or send a contact message via `send_contact_message`.",
  tools: [getAbout, getEducation, getProjects, getSkills, sendContactMessage],
});
