import { Calendar, Clock, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Journey":
        return "bg-primary/20 text-primary";
      case "Technical":
        return "bg-blue-500/20 text-blue-600 dark:text-blue-400";
      case "Project":
        return "bg-green-500/20 text-green-600 dark:text-green-400";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section
      id="blog"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Learning Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            My <span className="text-gradient italic">Blog</span>
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto">
            Documenting my progress, sharing what I learn, and reflecting on the challenges and victories along the way.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post, index) => (
          <div
            key={index}
            className={`mb-12 reveal ${isVisible ? 'visible' : ''}`}
          >
            <Link
              to={`/blog/${post.slug}`}
              className="block relative bg-gradient-to-br from-primary/10 via-card to-card border border-primary/20 rounded-3xl p-8 md:p-12 overflow-hidden hover-lift group"
            >
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/20 rounded-full">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-primary">Featured</span>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span>Read More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        ))}

        {/* Other Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className={`bg-card border border-border rounded-2xl p-6 hover-lift group reveal-scale ${isVisible ? 'visible' : ''} stagger-${index + 1}`}
            >
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${getCategoryColor(post.category)}`}>
                {post.category}
              </span>
              <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon Note */}
        <div className={`mt-12 text-center reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-body text-primary">
              More articles coming soon as I continue learning!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
