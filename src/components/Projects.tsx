import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Projects = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const projects = [
    {
      title: "This Portfolio",
      category: "First Project",
      description: "My very first web project! Built this portfolio to showcase my learning journey and connect with others.",
      tags: ["React", "Tailwind CSS", "TypeScript"],
      link: null,
      status: "live",
    },
    {
      title: "Learning HTML & CSS",
      category: "In Progress",
      description: "Currently mastering the fundamentals of web development through hands-on practice and tutorials.",
      tags: ["HTML5", "CSS3", "Responsive Design"],
      link: null,
      status: "learning",
    },
    {
      title: "JavaScript Basics",
      category: "Coming Soon",
      description: "Next on my learning path - diving into JavaScript to add interactivity to my projects.",
      tags: ["JavaScript", "DOM", "ES6"],
      link: null,
      status: "planned",
    },
    {
      title: "Future Projects",
      category: "Roadmap",
      description: "Excited to build real-world projects as I grow. Stay tuned for updates on my journey!",
      tags: ["React", "Node.js", "APIs"],
      link: null,
      status: "planned",
    },
  ];

  return (
    <section 
      id="projects" 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-secondary/30"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Featured <span className="text-gradient italic">Projects</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article 
              key={index}
              className={`group bg-card border border-border rounded-2xl overflow-hidden hover-lift cursor-pointer reveal-scale ${isVisible ? 'visible' : ''} stagger-${index + 1}`}
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
                {project.status === "live" && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-green-500/90 text-white text-xs font-medium rounded-full">
                    Live
                  </div>
                )}
                {project.status === "learning" && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-yellow-500/90 text-white text-xs font-medium rounded-full">
                    Learning
                  </div>
                )}
                {project.status === "planned" && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-muted-foreground/50 text-white text-xs font-medium rounded-full">
                    Coming Soon
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl opacity-30">
                    {project.status === "live" ? "🚀" : project.status === "learning" ? "📚" : "💡"}
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-primary font-body text-sm tracking-wide mb-2">
                  {project.category}
                </p>
                <h3 className="font-display text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-body rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
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
