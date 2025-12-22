import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A modern shopping experience with seamless checkout and real-time inventory.",
      tags: ["React", "Node.js", "Stripe"],
    },
    {
      title: "Finance Dashboard",
      category: "UI/UX Design",
      description: "Intuitive analytics dashboard for tracking investments and market trends.",
      tags: ["Figma", "React", "D3.js"],
    },
    {
      title: "Travel App",
      category: "Mobile Design",
      description: "A travel companion app with personalized recommendations and booking.",
      tags: ["React Native", "Firebase"],
    },
    {
      title: "SaaS Landing Page",
      category: "Web Design",
      description: "High-converting landing page with micro-interactions and animations.",
      tags: ["Next.js", "Framer Motion"],
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
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
              className="group bg-card border border-border rounded-2xl overflow-hidden hover-lift cursor-pointer"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 text-primary-foreground" />
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
