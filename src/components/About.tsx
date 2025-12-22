import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Rocket, Heart, Target, BookOpen } from "lucide-react";

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  
  const stats = [
    { number: "Day 1", label: "My Journey" },
    { number: "100%", label: "Dedication" },
    { number: "∞", label: "Curiosity" },
  ];

  const motivations = [
    {
      icon: Rocket,
      title: "The Beginning",
      description: "I started my coding journey today, and I am excited to see where it takes me.",
    },
    {
      icon: Heart,
      title: "Why I Code",
      description: "I love creating things from scratch and seeing my ideas come to life on screen.",
    },
    {
      icon: Target,
      title: "My Goal",
      description: "To become a skilled web developer and build products that solve real problems.",
    },
    {
      icon: BookOpen,
      title: "Always Learning",
      description: "Every day is a new opportunity to learn something new and grow as a developer.",
    },
  ];

  return (
    <section 
      id="about" 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className={`reveal-left ${isVisible ? 'visible' : ''}`}>
            <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-8 leading-tight">
              A beginner with <span className="text-gradient italic">big dreams</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
              <p>
                Hi, I am Nikhil Raj, a B.Tech undergraduate in Material Science and 
                Metallurgical Engineering at MANIT Bhopal. I have just started my 
                journey into web development, and I could not be more excited!
              </p>
              <p>
                What motivates me? The magic of turning lines of code into something 
                visual and interactive. The idea that I can build websites and apps 
                that people actually use is incredibly inspiring.
              </p>
              <p>
                I know I am at the very beginning, but I believe that consistency 
                and dedication will take me far. Every expert was once a beginner, 
                and I am ready to put in the work to achieve my goals.
              </p>
            </div>

            {/* Stats Card */}
            <div className="mt-8 bg-card border border-border rounded-2xl p-6">
              <div className="flex gap-8 justify-center">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="font-display text-2xl md:text-3xl font-semibold text-gradient">
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
          
          {/* Motivations Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 reveal-right ${isVisible ? 'visible' : ''}`}>
            {motivations.map((item, index) => (
              <div 
                key={index}
                className={`bg-card border border-border rounded-2xl p-6 hover-lift stagger-${index + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
