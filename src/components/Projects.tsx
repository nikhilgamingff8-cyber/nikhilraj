import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import campusxImage from "@/assets/project-campusx.jpg";
import portfolioImage from "@/assets/project-portfolio.jpg";
import collegeImage from "@/assets/project-college.jpg";
import htmlPracticeImage from "@/assets/project-html-practice.jpg";

const Projects = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const featuredProject = {
    title: "The CampusX – Student Cashback & Verified Campaign Platform",
    category: "⭐ Featured Project",
    description:
      "The CampusX is a modern web platform built for students to discover verified cashback campaigns, referral offers, and earning opportunities in one place. The platform provides detailed step-by-step campaign guides, tracker links, FAQs, payment proof galleries, and regular campaign updates to help users participate with confidence.",
    features: [
      "Verified Cashback Campaigns",
      "Step-by-Step Campaign Guides",
      "Campaign Tracker Links",
      "Community Payment Proof Gallery",
      "FAQ Section",
      "Responsive Mobile-First Design",
      "Fast Loading Performance",
      "Regular Campaign Updates",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Google AI Studio", "GitHub", "Netlify"],
    image: campusxImage,
    liveUrl: "https://thecampusx.netlify.app/",
    repoUrl: "https://github.com/nikhilgamingff8-cyber/thecampusx",
    status: "live",
  };

  const projects = [
    {
      title: "Personal Portfolio Website",
      category: "Web Project",
      description:
        "Designed and developed a responsive personal portfolio website to showcase my projects, technical skills, achievements, and contact information.",
      tags: ["HTML", "CSS", "JavaScript", "Netlify"],
      image: portfolioImage,
      liveUrl: "https://nikhilrajnitb.netlify.app/",
      repoUrl: "https://github.com/nikhilgamingff8-cyber/nikhilraj",
      status: "live",
    },
    {
      title: "College Website",
      category: "Web Project",
      description:
        "Developed a responsive college website with modern layouts, clean UI, responsive design, and structured content presentation.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: collegeImage,
      liveUrl: null,
      repoUrl: null,
      status: "completed",
    },
    {
      title: "HTML Practice Projects",
      category: "Learning Project",
      description:
        "Built multiple responsive web pages while learning HTML, CSS, semantic elements, forms, tables, and modern frontend development concepts.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: htmlPracticeImage,
      liveUrl: null,
      repoUrl: null,
      status: "completed",
    },
  ];

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-secondary/30"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 reveal ${isVisible ? "visible" : ""}`}
        >
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Featured <span className="text-gradient italic">Projects</span>
          </h2>
        </div>

        {/* Featured Project */}
        <article
          className={`group bg-card border border-border rounded-2xl overflow-hidden hover-lift reveal-scale ${isVisible ? "visible" : ""} stagger-1 mb-8 md:mb-12`}
        >
          <div className="aspect-video md:aspect-[21/9] relative overflow-hidden">
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              width={1216}
              height={522}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
            <div className="absolute top-4 left-4 p-2 bg-primary/90 text-primary-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-4 h-4" />
            </div>
            <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/90 text-white text-xs font-medium rounded-full">
              Live
            </div>
          </div>

          <div className="p-6 md:p-10">
            <p className="text-primary font-body text-sm tracking-wide mb-2">
              {featuredProject.category}
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4 group-hover:text-primary transition-colors">
              {featuredProject.title}
            </h3>
            <p className="text-muted-foreground font-body mb-6 max-w-4xl">
              {featuredProject.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-2 mb-8">
              {featuredProject.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                  <span className="text-primary">•</span>
                  {feature}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {featuredProject.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-body rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => openLink(featuredProject.liveUrl)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-body text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                🚀 Live Demo
              </button>
              <button
                onClick={() => openLink(featuredProject.repoUrl)}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border bg-card text-foreground rounded-full font-body text-sm font-medium hover:bg-secondary transition-colors"
              >
                <Github className="w-4 h-4" />
                💻 Source Code
              </button>
            </div>
          </div>
        </article>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className={`group bg-card border border-border rounded-2xl overflow-hidden hover-lift reveal-scale ${isVisible ? "visible" : ""} stagger-${index + 2}`}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={384}
                  height={216}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60" />
                {project.liveUrl && (
                  <div className="absolute top-3 left-3 p-2 bg-primary/90 text-primary-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                )}
                {project.status === "live" && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-green-500/90 text-white text-xs font-medium rounded-full">
                    Live
                  </div>
                )}
                {project.status === "completed" && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-blue-500/90 text-white text-xs font-medium rounded-full">
                    Completed
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8">
                <p className="text-primary font-body text-sm tracking-wide mb-2">
                  {project.category}
                </p>
                <h3 className="font-display text-xl md:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body mb-6 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-body rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <button
                      onClick={() => openLink(project.liveUrl!)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-full font-body text-xs font-medium hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </button>
                  )}
                  {project.repoUrl && (
                    <button
                      onClick={() => openLink(project.repoUrl!)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 border border-border bg-card text-foreground rounded-full font-body text-xs font-medium hover:bg-secondary transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
