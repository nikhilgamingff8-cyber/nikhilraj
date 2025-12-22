import { BookOpen, Code, Palette, Zap, Target, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Learning = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const currentlyLearning = [
    {
      skill: "HTML5",
      category: "Markup",
      progress: 60,
      icon: Code,
      description: "Semantic elements, forms, and accessibility",
    },
    {
      skill: "CSS3",
      category: "Styling",
      progress: 45,
      icon: Palette,
      description: "Flexbox, Grid, animations, and responsive design",
    },
    {
      skill: "JavaScript",
      category: "Programming",
      progress: 25,
      icon: Zap,
      description: "Fundamentals, DOM manipulation, and ES6+",
    },
    {
      skill: "React",
      category: "Framework",
      progress: 15,
      icon: Code,
      description: "Components, hooks, and state management",
    },
  ];

  const learningGoals = [
    { goal: "Build 5 mini projects", status: "in-progress" },
    { goal: "Complete JavaScript basics", status: "in-progress" },
    { goal: "Learn Git & GitHub", status: "planned" },
    { goal: "Create a full-stack app", status: "planned" },
  ];

  return (
    <section
      id="learning"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-secondary/30"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Growth Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Currently <span className="text-gradient italic">Learning</span>
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto">
            I'm at the beginning of my web development journey, actively learning and building every day.
          </p>
        </div>

        {/* Skills Progress */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {currentlyLearning.map((item, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-2xl p-6 hover-lift reveal-scale ${isVisible ? 'visible' : ''} stagger-${index + 1}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-display text-lg font-semibold">{item.skill}</h3>
                    <span className="text-sm text-primary font-medium">{item.progress}%</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{item.description}</p>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: isVisible ? `${item.progress}%` : '0%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Goals */}
        <div className={`bg-card border border-border rounded-2xl p-8 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-primary" />
            <h3 className="font-display text-xl font-semibold">Learning Goals</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {learningGoals.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl"
              >
                <div className={`w-3 h-3 rounded-full shrink-0 ${
                  item.status === 'in-progress' 
                    ? 'bg-yellow-500 animate-pulse' 
                    : 'bg-muted-foreground/30'
                }`} />
                <span className="font-body text-sm">{item.goal}</span>
                {item.status === 'in-progress' && (
                  <Clock className="w-4 h-4 text-yellow-500 ml-auto" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Motivation Quote */}
        <div className={`mt-12 text-center reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-body text-primary">
              "Every expert was once a beginner"
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;
