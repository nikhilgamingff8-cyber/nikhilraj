import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  type: "circle" | "square" | "triangle";
}

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      const types: ("circle" | "square" | "triangle")[] = ["circle", "square", "triangle"];
      
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 4,
          duration: Math.random() * 20 + 15,
          delay: Math.random() * 5,
          opacity: Math.random() * 0.3 + 0.1,
          type: types[Math.floor(Math.random() * types.length)],
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const renderShape = (particle: Particle) => {
    const baseStyles = {
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      animationDuration: `${particle.duration}s`,
      animationDelay: `${particle.delay}s`,
      opacity: particle.opacity,
    };

    switch (particle.type) {
      case "circle":
        return (
          <div
            key={particle.id}
            className="absolute rounded-full bg-primary animate-float"
            style={{
              ...baseStyles,
              width: particle.size,
              height: particle.size,
            }}
          />
        );
      case "square":
        return (
          <div
            key={particle.id}
            className="absolute bg-primary/50 animate-float-rotate"
            style={{
              ...baseStyles,
              width: particle.size,
              height: particle.size,
            }}
          />
        );
      case "triangle":
        return (
          <div
            key={particle.id}
            className="absolute animate-float-slow"
            style={{
              ...baseStyles,
              width: 0,
              height: 0,
              borderLeft: `${particle.size / 2}px solid transparent`,
              borderRight: `${particle.size / 2}px solid transparent`,
              borderBottom: `${particle.size}px solid hsl(var(--primary) / ${particle.opacity})`,
            }}
          />
        );
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => renderShape(particle))}
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/4 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
    </div>
  );
};

export default FloatingParticles;
