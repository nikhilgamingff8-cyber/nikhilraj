import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  
  const stats = [
    { number: "3+", label: "Technologies" },
    { number: "10+", label: "Projects Built" },
    { number: "∞", label: "Learning Goals" },
  ];

  return (
    <section 
      id="about" 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`reveal-left ${isVisible ? 'visible' : ''}`}>
            <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-8 leading-tight">
              Crafting digital <span className="text-gradient italic">experiences</span> with purpose
            </h2>
            <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
              <p>
                I am Nikhil, a B.Tech undergraduate in Material Science and 
                Metallurgical Engineering at MANIT Bhopal. I am currently developing 
                skills in web development, with a focus on building clean, responsive, 
                and user-friendly websites using HTML, CSS, and JavaScript.
              </p>
              <p>
                I am motivated by continuous learning and practical problem-solving, 
                and I aim to apply my technical skills to real-world projects and 
                professional opportunities.
              </p>
            </div>
          </div>
          
          <div className={`relative reveal-right ${isVisible ? 'visible' : ''}`}>
            <div className="aspect-[4/5] bg-secondary rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                    <span className="font-display text-4xl text-gradient">NR</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-card border border-border rounded-2xl p-6 shadow-lg">
              <div className="flex gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="font-display text-3xl font-semibold text-gradient">
                      {stat.number}
                    </p>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
