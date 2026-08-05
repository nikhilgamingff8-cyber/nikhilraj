import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target } from "lucide-react";

const Skills = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const skillCategories = [
    {
      title: "Programming",
      items: ["HTML5", "CSS3", "JavaScript", "Python", "C"],
    },
    {
      title: "Web Development",
      items: [
        "Responsive Web Design",
        "Landing Page Development",
        "Website Deployment",
        "Mobile First Design",
      ],
    },
    {
      title: "Tools",
      items: [
        "VS Code",
        "Git",
        "GitHub",
        "Netlify",
        "Google AI Studio",
        "Canva",
        "Google Sheets",
      ],
    },
    {
      title: "Currently Learning",
      items: ["Advanced JavaScript", "React.js", "AI Assisted Development"],
    },
  ];

  const careerGoals = [
    "Build Production Ready Websites",
    "Secure Frontend Internship",
    "Contribute to Open Source",
    "Build SaaS Projects",
    "Improve UI/UX Skills",
  ];

  return (
    <section 
      id="skills" 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            My Toolkit
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            Technical <span className="text-gradient italic">Skills</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            The languages, tools and practices I use to build responsive websites
            and modern web applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {skillCategories.map((category, index) => (
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

        {/* Career Goals */}
        <div className={`bg-card border border-border rounded-2xl p-8 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-primary" />
            <h3 className="font-display text-xl font-semibold">Career Goals</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {careerGoals.map((goal, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="font-body text-sm">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
