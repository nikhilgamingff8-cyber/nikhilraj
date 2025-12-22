import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-5xl">
        <p 
          className="text-muted-foreground font-body text-lg md:text-xl mb-4 animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          Hello, I'm
        </p>
        
        <h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight mb-6 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="text-foreground">Alex </span>
          <span className="text-gradient">Morgan</span>
        </h1>
        
        <p 
          className="font-display text-2xl md:text-3xl lg:text-4xl text-secondary-foreground italic mb-8 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          Creative Developer & Designer
        </p>
        
        <p 
          className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed mb-12 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          I craft digital experiences that blend aesthetics with functionality. 
          Passionate about creating interfaces that inspire and delight.
        </p>
        
        <div 
          className="flex gap-6 animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          <a 
            href="#projects" 
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            View My Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-full font-body font-medium transition-all duration-300 hover:bg-secondary hover:border-secondary"
          >
            Get in Touch
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
