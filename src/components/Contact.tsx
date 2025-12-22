import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/nikhil-raj-513a22393" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
          Get in Touch
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-8">
          Let's create something <span className="text-gradient italic">amazing</span> together
        </h2>
        <p className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl mx-auto mb-12">
          I'm always open to discussing new projects, creative ideas, or 
          opportunities to be part of your vision.
        </p>
        
        <a 
          href="mailto:nikhilraj1662@gmail.com"
          className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-full font-body font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 mb-16"
        >
          <Mail className="w-5 h-5" />
          nikhilraj1662@gmail.com
        </a>
        
        <div className="flex items-center justify-center gap-2 text-muted-foreground font-body mb-8">
          <MapPin className="w-4 h-4" />
          <span>MANIT Bhopal, India</span>
        </div>
        
        <div className="flex justify-center gap-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
