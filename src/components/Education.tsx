import { GraduationCap, Calendar, MapPin, Award, BookOpen, Target, School } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Education = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section 
      id="education" 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Education
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Academic <span className="text-gradient italic">Journey</span>
          </h2>
        </div>
        
        <div className={`max-w-4xl mx-auto space-y-8 reveal-scale ${isVisible ? 'visible' : ''} stagger-2`}>
          {/* Main Education Card - B.Tech */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 hover-lift relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-10 h-10 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-green-500/20 text-green-500 text-xs font-medium rounded-full">
                      Currently Pursuing
                    </span>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                      3rd Semester
                    </span>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                      CGPA: 6.8 / 10
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold mb-2">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <p className="text-primary font-body text-lg font-medium">
                    Material Science & Metallurgical Engineering
                  </p>
                </div>
              </div>

              {/* Institute Info */}
              <div className="bg-secondary/50 rounded-xl p-6 mb-8">
                <h4 className="font-display text-xl font-semibold mb-4 text-foreground">
                  Maulana Azad National Institute of Technology (MANIT)
                </h4>
                <div className="flex flex-wrap gap-6 text-muted-foreground font-body">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Bhopal, Madhya Pradesh, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>2025 - 2029 (Expected)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span>NIT (Institute of National Importance)</span>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                I am currently pursuing my B.Tech in Metallurgical and Materials Science Engineering at Maulana Azad National Institute of Technology (MANIT), Bhopal.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                Alongside my engineering studies, I actively build responsive websites and real-world web applications. I enjoy learning modern web technologies through practical projects and continuously improving my frontend development skills.
              </p>
              
              {/* Three Column Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary/30 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <h5 className="font-display text-base font-semibold text-foreground">
                      Current Subjects
                    </h5>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Physical Metallurgy",
                      "Materials Characterization",
                      "Manufacturing Processes",
                      "Entrepreneurship",
                      "Probability & Statistics",
                    ].map((course, index) => (
                      <li 
                        key={index}
                        className="flex items-center gap-2 text-muted-foreground font-body text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-secondary/30 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-5 h-5 text-primary" />
                    <h5 className="font-display text-base font-semibold text-foreground">
                      Achievements
                    </h5>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Selected for MANIT Bhopal",
                      "India International Science Festival (IISF) 2022",
                      "INSPIRE MANAK Award Selection",
                      "NVS Level Wrestling Participant",
                      "Built Multiple Live Websites",
                    ].map((achievement, index) => (
                      <li 
                        key={index}
                        className="flex items-center gap-2 text-muted-foreground font-body text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-secondary/30 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-5 h-5 text-primary" />
                    <h5 className="font-display text-base font-semibold text-foreground">
                      Goals
                    </h5>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Master Google Ads",
                      "Learn Facebook/Meta Ads",
                      "Get Ads Certified",
                      "Get Marketing Internship",
                      "Run Real Ad Campaigns",
                    ].map((goal, index) => (
                      <li 
                        key={index}
                        className="flex items-center gap-2 text-muted-foreground font-body text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Class 12 Card */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover-lift relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <School className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-500 text-xs font-medium rounded-full">
                      Completed
                    </span>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                      Class 12th
                    </span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold mb-1">
                    Higher Secondary Education
                  </h3>
                  <p className="text-primary font-body font-medium">
                    Jawahar Navodaya Vidyalaya, Beekar Datia
                  </p>
                </div>
                <div className="md:text-right">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                    85.2%
                  </div>
                  <p className="text-sm text-muted-foreground font-body">CBSE Board</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-border/50 text-muted-foreground font-body text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Datia, Madhya Pradesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span>CBSE Board</span>
                </div>
              </div>
            </div>
          </div>

          {/* Class 10 Card */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover-lift relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <School className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-500 text-xs font-medium rounded-full">
                      Completed
                    </span>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                      Class 10th
                    </span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold mb-1">
                    Secondary Education
                  </h3>
                  <p className="text-primary font-body font-medium">
                    Jawahar Navodaya Vidyalaya, Beekar Datia
                  </p>
                </div>
                <div className="md:text-right">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                    89.4%
                  </div>
                  <p className="text-sm text-muted-foreground font-body">CBSE Board</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-border/50 text-muted-foreground font-body text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Datia, Madhya Pradesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>2022</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span>CBSE Board</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
