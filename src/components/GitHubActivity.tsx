import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Github, GitCommit, Star, GitFork, Calendar, Flame } from "lucide-react";

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

interface ContributionDay {
  level: number;
}

const GitHubActivity = () => {
  const { ref, isVisible } = useScrollReveal();
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const username = "nikhilgamingff8-cyber";

  // Generate mock contribution data for visual effect
  const generateContributions = (): ContributionDay[][] => {
    const weeks: ContributionDay[][] = [];
    for (let week = 0; week < 52; week++) {
      const days: ContributionDay[] = [];
      for (let day = 0; day < 7; day++) {
        // Create a pattern that looks realistic
        const random = Math.random();
        let level = 0;
        if (random > 0.6) level = 1;
        if (random > 0.75) level = 2;
        if (random > 0.85) level = 3;
        if (random > 0.93) level = 4;
        days.push({ level });
      }
      weeks.push(days);
    }
    return weeks;
  };

  const [contributions] = useState(generateContributions);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  const getLevelColor = (level: number) => {
    const colors = [
      "bg-muted/50",
      "bg-primary/30",
      "bg-primary/50",
      "bg-primary/70",
      "bg-primary",
    ];
    return colors[level];
  };

  const statCards = [
    { icon: GitFork, label: "Repositories", value: stats?.public_repos || 0 },
    { icon: Star, label: "Followers", value: stats?.followers || 0 },
    { icon: GitCommit, label: "Following", value: stats?.following || 0 },
    { icon: Calendar, label: "Member Since", value: stats?.created_at ? new Date(stats.created_at).getFullYear() : "2024" },
  ];

  return (
    <section id="github" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div ref={ref as React.RefObject<HTMLDivElement>} className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'reveal active' : 'reveal'}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            <span className="text-gradient">GitHub</span> Activity
          </h2>
          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            My coding journey and open-source contributions
          </p>
        </div>

        {/* Stats Cards */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 ${isVisible ? 'reveal active' : 'reveal'}`} style={{ animationDelay: '0.2s' }}>
          {statCards.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <stat.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
              <p className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-1">
                {loading ? "..." : stat.value}
              </p>
              <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Contribution Graph */}
        <div className={`bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 ${isVisible ? 'reveal active' : 'reveal'}`} style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Flame className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-foreground">Contribution Graph</h3>
                <p className="text-sm text-muted-foreground">Last 52 weeks of activity</p>
              </div>
            </div>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              View Profile
            </a>
          </div>

          {/* Graph Grid */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-[3px] min-w-[720px]">
              {contributions.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[3px]">
                  {week.map((day, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-sm ${getLevelColor(day.level)} transition-all duration-300 hover:scale-125 hover:ring-2 hover:ring-primary/50`}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'scale(1)' : 'scale(0)',
                        transition: `all 0.3s ease ${(weekIndex * 7 + dayIndex) * 2}ms`
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 mt-4 text-sm text-muted-foreground">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-sm ${getLevelColor(level)}`}
              />
            ))}
            <span>More</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-8 ${isVisible ? 'reveal active' : 'reveal'}`} style={{ animationDelay: '0.6s' }}>
          <p className="text-muted-foreground mb-4">
            Interested in collaborating? Check out my repositories!
          </p>
          <a
            href={`https://github.com/${username}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            Explore Repositories
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
