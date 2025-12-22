import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Clock, BookOpen } from "lucide-react";
import { getPostBySlug, blogPosts } from "@/data/blogPosts";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl mx-auto text-center">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
            <h1 className="font-display text-4xl font-semibold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              to="/#blog"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

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

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${getCategoryColor(post.category)}`}>
              {post.category}
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              {post.title}
            </h1>
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
          </header>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-pre:bg-card prose-pre:border prose-pre:border-border prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-li:text-muted-foreground prose-hr:border-border">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {/* Author Card */}
          <div className="mt-16 p-8 bg-card border border-border rounded-2xl">
            <div className="flex items-center gap-4">
              <img
                src="/profile-photo.jpeg"
                alt="Nithya R"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-display text-lg font-semibold">Nithya R</h3>
                <p className="text-sm text-muted-foreground">
                  Aspiring Web Developer documenting the learning journey
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="font-display text-2xl font-semibold mb-6">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    className="bg-card border border-border rounded-2xl p-6 hover-lift group"
                  >
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${getCategoryColor(relatedPost.category)}`}>
                      {relatedPost.category}
                    </span>
                    <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default BlogPost;
