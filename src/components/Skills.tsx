const Skills = () => {
  const skillCategories = [
    {
      title: "Design",
      skills: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Prototyping", "Design Systems"],
    },
    {
      title: "Development",
      skills: ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Tools",
      skills: ["Git", "VS Code", "Vercel", "AWS", "Docker"],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Expertise
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Skills & <span className="text-gradient italic">Technologies</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover-lift"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-primary font-display text-xl font-semibold">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold mb-6">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="flex items-center gap-3 text-muted-foreground font-body"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
