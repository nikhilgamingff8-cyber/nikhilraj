import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Rocket, Trophy, Code, Target } from "lucide-react";

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  
  const stats = [
    { number: "Frontend", label: "Developer" },
    { number: "HTML/CSS/JS", label: "Foundation" },
    { number: "Projects", label: "Live" },
  ];

  const motivations = [
    {
      icon: Rocket,
      title: "My Journey",
      description: "Started learning web development from scratch and now building real-world projects.",
    },
    {
      icon: Trophy,
      title: "Sports & Discipline",
      description: "Represented Jawahar Navodaya Vidyalaya in Wrestling which taught me discipline and consistency.",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive websites, landing pages and modern web applications.",
    },
    {
      icon: Target,
      title: "Vision",
      description: "Become a skilled Frontend Web Developer and build useful products for students.",
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
              Building Through <span className="text-gradient italic">Code</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
              <p>
                Hi, I'm Nikhil Raj, a B.Tech student in Metallurgical and Materials Science
                Engineering at MANIT Bhopal.
              </p>
              <p>
                I enjoy building responsive websites and modern web applications using HTML, CSS,
                JavaScript, GitHub, Netlify and AI-assisted development tools.
              </p>
              <p>
                I love solving real-world problems through technology and continuously improving
                my skills by building practical projects.
              </p>
            </div>


            {/* Stats Card */}
            <div className="mt-8 bg-card border border-border rounded-2xl p-6">
              <div className="flex gap-8 justify-center">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="font-display text-xl md:text-2xl font-semibold text-gradient">
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
