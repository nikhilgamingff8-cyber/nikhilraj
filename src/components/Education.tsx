import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Education
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Academic <span className="text-gradient italic">Background</span>
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 hover-lift relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold mb-2">
                    Bachelor of Technology
                  </h3>
                  <p className="text-primary font-body text-lg">
                    Material Science & Metallurgical Engineering
                  </p>
                </div>
              </div>
              
              <div className="pl-0 md:pl-18">
                <h4 className="font-display text-xl font-medium mb-4 text-foreground">
                  Maulana Azad National Institute of Technology (MANIT)
                </h4>
                
                <div className="flex flex-wrap gap-6 text-muted-foreground font-body">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Bhopal, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Currently Pursuing</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-muted-foreground font-body leading-relaxed">
                    Pursuing a comprehensive engineering degree while simultaneously 
                    developing skills in web development. Focused on bridging technical 
                    engineering knowledge with modern software development practices.
                  </p>
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
