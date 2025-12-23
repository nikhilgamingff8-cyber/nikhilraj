import { useEffect, useState, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Code, Layers, Clock, Trophy, Coffee, Zap } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: StatItem[] = [
  { icon: Layers, value: 10, suffix: "+", label: "Projects Completed", color: "from-primary to-primary/60" },
  { icon: Code, value: 8, suffix: "+", label: "Technologies Learned", color: "from-blue-500 to-blue-400" },
  { icon: Clock, value: 500, suffix: "+", label: "Hours of Coding", color: "from-green-500 to-green-400" },
  { icon: Trophy, value: 5, suffix: "+", label: "Achievements", color: "from-yellow-500 to-yellow-400" },
  { icon: Coffee, value: 100, suffix: "+", label: "Cups of Coffee", color: "from-orange-500 to-orange-400" },
  { icon: Zap, value: 50, suffix: "+", label: "Problems Solved", color: "from-purple-500 to-purple-400" },
];

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
};

const StatCard = ({ stat, index, isVisible }: { stat: StatItem; index: number; isVisible: boolean }) => {
  const count = useCountUp(stat.value, 2000, isVisible);
  const Icon = stat.icon;

  return (
    <div
      className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.6s ease ${index * 0.1}s`
      }}
    >
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
      
      <div className="relative z-10">
        <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        
        <div className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            {count}
          </span>
          <span className="text-primary">{stat.suffix}</span>
        </div>
        
        <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
      </div>
    </div>
  );
};

const AnimatedStats = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div ref={ref as React.RefObject<HTMLDivElement>} className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-14 ${isVisible ? 'reveal active' : 'reveal'}`}>
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            By The Numbers
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            My <span className="text-gradient italic">Journey</span> So Far
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
