import { Quote, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Testimonials = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const inspirations = [
    {
      quote: "Every expert was once a beginner. Every pro was once an amateur.",
      author: "Robin Sharma",
      context: "Author & Leadership Expert",
    },
    {
      quote: "The only way to learn a new programming language is by writing programs in it.",
      author: "Dennis Ritchie",
      context: "Creator of C Language",
    },
    {
      quote: "First, solve the problem. Then, write the code.",
      author: "John Johnson",
      context: "Programming Wisdom",
    },
  ];

  return (
    <section 
      id="inspiration" 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            What Inspires Me
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Words That <span className="text-gradient italic">Motivate</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto mt-4">
            Quotes from developers and thinkers that keep me going on my learning journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {inspirations.map((item, index) => (
            <div 
              key={index}
              className={`bg-card border border-border rounded-2xl p-8 hover-lift relative reveal-scale ${isVisible ? 'visible' : ''} stagger-${index + 1}`}
            >
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-primary/20" />
              </div>
              
              <div className="mb-6">
                <p className="text-foreground font-body leading-relaxed italic text-lg">
                  "{item.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body font-medium text-foreground">
                    {item.author}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {item.context}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Note */}
        <div className={`mt-12 text-center reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-block bg-card border border-border rounded-2xl px-8 py-6 max-w-2xl">
            <p className="text-muted-foreground font-body italic">
              "As I grow and work with real clients, this section will feature their testimonials. 
              For now, these quotes remind me why I started this journey."
            </p>
            <p className="text-primary font-body text-sm mt-3">— Nikhil Raj</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
