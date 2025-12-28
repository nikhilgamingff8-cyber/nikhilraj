import { Megaphone, Target, TrendingUp, BarChart3, MousePointerClick, Search } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Services = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const services = [
    {
      icon: Search,
      title: "Google Ads Management",
      description: "Search campaigns, display ads, and keyword optimization to drive targeted traffic and increase conversions.",
      status: "Learning",
    },
    {
      icon: Megaphone,
      title: "Facebook & Meta Ads",
      description: "Audience targeting, custom audiences, and retargeting campaigns to reach your ideal customers on social platforms.",
      status: "Learning",
    },
    {
      icon: MousePointerClick,
      title: "PPC Campaign Management",
      description: "Pay-per-click advertising strategies to maximize ROI and minimize cost per acquisition.",
      status: "Learning",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Google Analytics setup, conversion tracking, and detailed performance reports to measure campaign success.",
      status: "Soon",
    },
    {
      icon: Target,
      title: "Audience Research",
      description: "In-depth market research and audience analysis to create highly targeted ad campaigns.",
      status: "Soon",
    },
    {
      icon: TrendingUp,
      title: "Conversion Optimization",
      description: "A/B testing, landing page optimization, and funnel analysis to improve conversion rates.",
      status: "Future",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Learning":
        return "bg-yellow-500/20 text-yellow-500";
      case "Soon":
        return "bg-blue-500/20 text-blue-500";
      case "Future":
        return "bg-purple-500/20 text-purple-500";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section 
      id="services" 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-secondary/30"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Digital Advertising
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Ads <span className="text-gradient italic">Services</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Building my expertise in digital advertising to help businesses grow through 
            targeted paid campaigns and data-driven strategies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group bg-card border border-border rounded-2xl p-8 hover-lift cursor-pointer reveal-scale ${isVisible ? 'visible' : ''} stagger-${Math.min(index + 1, 4)}`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                  {service.status}
                </span>
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
