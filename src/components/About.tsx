import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Rocket, Dumbbell, Target, Megaphone } from "lucide-react";

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  
  const stats = [
    { number: "JNV National", label: "Wrestling" },
    { number: "HTML/CSS/JS", label: "Completed" },
    { number: "Ads Expert", label: "Next Goal" },
  ];

  const motivations = [
    {
      icon: Rocket,
      title: "My Journey",
      description: "From JNV student to national-level wrestler, then self-taught coder, now aspiring ads expert.",
    },
    {
      icon: Dumbbell,
      title: "Sports & Discipline",
      description: "Represented my school at the national level in wrestling during 12th class — building resilience and focus.",
    },
    {
      icon: Megaphone,
      title: "Ads Expert Goal",
      description: "Learning Google Ads, Facebook Ads, and PPC strategies to help businesses grow through targeted advertising.",
    },
    {
      icon: Target,
      title: "My Vision",
      description: "Master digital advertising through discipline and data-driven campaigns that deliver real results.",
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
              From code to <span className="text-gradient italic">conversions</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
              <p>
                Hi, I am Nikhil Raj, a B.Tech undergraduate in Material Science and 
                Metallurgical Engineering at MANIT Bhopal. I come from a JNV (Jawahar 
                Navodaya Vidyalaya) background and represented my school at the national 
                level in wrestling during 12th class.
              </p>
              <p>
                I started my tech journey by completing web development fundamentals — 
                HTML, CSS, JavaScript, and Git & GitHub. This gave me a strong foundation 
                in building things from scratch.
              </p>
              <p>
                Now I am focused on becoming an ads expert, learning Google Ads, 
                Facebook/Meta Ads, and PPC campaign management. My wrestling discipline 
                drives me to push harder and achieve my goals in digital advertising.
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
