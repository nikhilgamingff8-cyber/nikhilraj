import { useScrollReveal } from "@/hooks/useScrollReveal";

const Skills = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const skills = [
    { name: "HTML5", level: 40, status: "Learning" },
    { name: "CSS3", level: 30, status: "Learning" },
    { name: "JavaScript", level: 15, status: "Beginner" },
    { name: "Responsive Design", level: 25, status: "Learning" },
    { name: "React", level: 10, status: "Beginner" },
    { name: "Tailwind CSS", level: 20, status: "Learning" },
  ];

  const toolsAndSoftSkills = [
    {
      title: "Tools I Use",
      items: ["VS Code", "Chrome DevTools", "GitHub", "Lovable"],
    },
    {
      title: "Soft Skills",
      items: ["Quick Learner", "Problem Solving", "Dedication", "Curiosity"],
    },
    {
      title: "Next to Learn",
      items: ["Git Commands", "Node.js", "TypeScript", "APIs"],
    },
  ];

  const getLevelColor = (level: number) => {
    if (level >= 40) return "from-green-500 to-emerald-400";
    if (level >= 25) return "from-yellow-500 to-amber-400";
    return "from-blue-500 to-cyan-400";
  };

  return (
    <section 
      id="skills" 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            My Progress
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            Skills & <span className="text-gradient italic">Growth</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Honest progress bars showing where I am in my learning journey. 
            Every expert was once a beginner!
          </p>
        </div>

        {/* Technical Skills with Progress Bars */}
        <div className={`bg-card border border-border rounded-2xl p-8 mb-8 reveal ${isVisible ? 'visible' : ''}`}>
          <h3 className="font-display text-2xl font-semibold mb-8">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-body font-medium">{skill.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      skill.status === "Learning" 
                        ? "bg-yellow-500/20 text-yellow-500" 
                        : "bg-blue-500/20 text-blue-500"
                    }`}>
                      {skill.status}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tools and Soft Skills */}
        <div className="grid md:grid-cols-3 gap-8">
          {toolsAndSoftSkills.map((category, index) => (
            <div 
              key={index}
              className={`bg-card border border-border rounded-2xl p-8 hover-lift reveal-scale ${isVisible ? 'visible' : ''} stagger-${index + 1}`}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-primary font-display text-xl font-semibold">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-6">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    className="flex items-center gap-3 text-muted-foreground font-body"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
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
