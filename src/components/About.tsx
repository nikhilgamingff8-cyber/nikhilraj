const About = () => {
  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-8 leading-tight">
              Crafting digital <span className="text-gradient italic">experiences</span> with purpose
            </h2>
            <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
              <p>
                I'm a creative developer based in San Francisco, passionate about 
                building beautiful, functional, and user-centered digital experiences. 
                With a background in both design and development, I bridge the gap 
                between aesthetics and functionality.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design trends, 
                contributing to open-source projects, or enjoying a good cup of coffee 
                while sketching new ideas.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] bg-secondary rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                    <span className="font-display text-4xl text-gradient">NR</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-card border border-border rounded-2xl p-6 shadow-lg">
              <div className="flex gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="font-display text-3xl font-semibold text-gradient">
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
        </div>
      </div>
    </section>
  );
};

export default About;
