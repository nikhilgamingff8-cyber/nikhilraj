import { ArrowDown, Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import FloatingParticles from "./FloatingParticles";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  const typedText = useTypingAnimation({
    words: [
      "Aspiring Web Developer",
      "Frontend Enthusiast",
      "B.Tech Student",
      "Problem Solver",
    ],
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 2000,
  });

  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24 overflow-hidden">
      <FloatingParticles />
      
      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text Content */}
        <div className="flex-1">
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
            <span className="text-foreground">Nikhil </span>
            <span className="text-gradient">Raj</span>
          </h1>
          
          <p 
            className="font-display text-2xl md:text-3xl lg:text-4xl text-secondary-foreground italic mb-8 animate-fade-up h-12 md:h-14"
            style={{ animationDelay: '0.3s' }}
          >
            <span>{typedText}</span>
            <span className="inline-block w-0.5 h-8 md:h-10 bg-primary ml-1 animate-pulse" />
          </p>
          
          <p 
            className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed mb-12 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            B.Tech student passionate about building clean, responsive, and user-friendly websites. 
            Driven by continuous learning and practical problem-solving.
          </p>

          <div 
            className="flex items-center gap-4 mb-8 animate-fade-up"
            style={{ animationDelay: '0.45s' }}
          >
            <a 
              href="https://github.com/nikhilgamingff8-cyber" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/nikhil-raj-513a22393" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:nikhilgamingff8@gmail.com"
              className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://x.com/Nikhilraj302" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Twitter/X Profile"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          
          <div 
            className="flex flex-wrap gap-4 md:gap-6 animate-fade-up"
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
            <a 
              href="/resume.pdf" 
              download="Nikhil_Raj_Resume.pdf"
              className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-full font-body font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>

        {/* Profile Photo */}
        <div 
          className="shrink-0 animate-fade-up flex justify-center w-full lg:w-auto"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="relative animate-float">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-[6px] border-foreground/30 ring-[6px] ring-primary/50 animate-glow-pulse">
              <img 
                src={profilePhoto} 
                alt="Nikhil Raj - Aspiring Web Developer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
