import { BookOpen, Code, Palette, Zap, Target, CheckCircle, TrendingUp, Megaphone, MousePointerClick, GitBranch } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Learning = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const completedSkills = [
    {
      skill: "HTML5",
      category: "Markup",
      icon: Code,
      description: "Semantic elements, forms, accessibility, and best practices",
    },
    {
      skill: "CSS3",
      category: "Styling",
      icon: Palette,
      description: "Flexbox, Grid, animations, responsive design, and modern layouts",
    },
    {
      skill: "JavaScript",
      category: "Programming",
      icon: Zap,
      description: "Fundamentals, DOM manipulation, ES6+, and async programming",
    },
    {
      skill: "Git & GitHub",
      category: "Version Control",
      icon: GitBranch,
      description: "Repositories, commits, branches, pull requests, and collaboration",
    },
  ];

  const currentlyLearning = [
    {
      skill: "Google Ads",
      category: "Advertising",
      progress: 40,
      icon: Megaphone,
      description: "Search campaigns, display ads, and keyword optimization",
    },
    {
      skill: "Facebook/Meta Ads",
      category: "Social Advertising",
      progress: 30,
      icon: MousePointerClick,
      description: "Audience targeting, pixel setup, and campaign optimization",
    },
    {
      skill: "Analytics & Tracking",
      category: "Data",
      progress: 25,
      icon: TrendingUp,
      description: "Google Analytics, conversion tracking, and ROI measurement",
    },
  ];

  const learningGoals = [
    { goal: "Get Google Ads Certified", status: "in-progress" },
    { goal: "Master Facebook Ads Manager", status: "in-progress" },
    { goal: "Learn conversion optimization", status: "planned" },
    { goal: "Build client portfolio", status: "planned" },
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
            My <span className="text-gradient italic">Journey</span>
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto">
            Completed web fundamentals and now transitioning to become a digital ads expert.
          </p>
        </div>

        {/* Completed Skills */}
        <div className={`mb-12 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <h3 className="font-display text-xl font-semibold">Completed Skills</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {completedSkills.map((item, index) => (
              <div
                key={index}
                className={`bg-card border border-green-500/30 rounded-2xl p-6 hover-lift reveal-scale ${isVisible ? 'visible' : ''} stagger-${index + 1}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display text-lg font-semibold">{item.skill}</h3>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Learning - Ads */}
        <div className={`mb-12 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h3 className="font-display text-xl font-semibold">Currently Learning - Becoming an Ads Expert</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
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
        </div>

        {/* Learning Goals */}
        <div className={`bg-card border border-border rounded-2xl p-8 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-primary" />
            <h3 className="font-display text-xl font-semibold">Ads Expert Goals</h3>
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
              </div>
            ))}
          </div>
        </div>

        {/* Motivation Quote */}
        <div className={`mt-12 text-center reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-body text-primary">
              "From code to conversions - building my path to ads mastery"
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;
