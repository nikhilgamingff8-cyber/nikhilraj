import { Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Testimonials = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const testimonials = [
    {
      quote: "Nikhil delivered an outstanding website that exceeded our expectations. His attention to detail and commitment to quality is remarkable.",
      name: "Rahul Sharma",
      role: "Project Lead",
      company: "Tech Startup",
    },
    {
      quote: "Working with Nikhil was a great experience. He understood our requirements perfectly and delivered a clean, responsive design.",
      name: "Priya Patel",
      role: "Business Owner",
      company: "Local Business",
    },
    {
      quote: "Exceptional problem-solving skills and a great team player. Nikhil always goes the extra mile to ensure project success.",
      name: "Amit Kumar",
      role: "Senior Developer",
      company: "Software Company",
    },
  ];

  return (
    <section 
      id="testimonials" 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            What People <span className="text-gradient italic">Say</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-card border border-border rounded-2xl p-8 hover-lift relative reveal-scale ${isVisible ? 'visible' : ''} stagger-${index + 1}`}
            >
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-primary/20" />
              </div>
              
              <div className="mb-6">
                <p className="text-muted-foreground font-body leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display text-lg font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
