import { Code, Palette, Smartphone, Zap, Globe, Wrench } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Services = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building modern, clean, and functional websites using HTML, CSS, and JavaScript with best practices.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Creating websites that look great and work seamlessly across all devices and screen sizes.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing intuitive and visually appealing user interfaces that enhance user experience.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing websites for speed and performance to ensure fast loading times.",
    },
    {
      icon: Globe,
      title: "Landing Pages",
      description: "Crafting high-converting landing pages that capture attention and drive results.",
    },
    {
      icon: Wrench,
      title: "Website Maintenance",
      description: "Providing ongoing support and updates to keep your website running smoothly.",
    },
  ];

  return (
    <section 
      id="services" 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-secondary/30"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            What I Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            My <span className="text-gradient italic">Services</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            I offer a range of web development services to help bring your ideas to life 
            with clean code and beautiful designs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group bg-card border border-border rounded-2xl p-8 hover-lift cursor-pointer reveal-scale ${isVisible ? 'visible' : ''} stagger-${Math.min(index + 1, 4)}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
