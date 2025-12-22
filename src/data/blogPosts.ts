export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "my-first-steps-in-web-development",
    title: "My First Steps in Web Development",
    excerpt: "How I discovered my passion for coding and decided to pursue a career in web development. From curiosity to commitment.",
    date: "December 2024",
    readTime: "3 min read",
    category: "Journey",
    featured: true,
    content: `
# My First Steps in Web Development

It all started with a simple question: *"How do websites actually work?"*

## The Spark of Curiosity

I remember the exact moment when I became fascinated with web development. I was browsing a beautifully designed website and thought to myself, "Someone actually built this. How?"

That curiosity led me down a rabbit hole that I'm still happily exploring today.

## Taking the First Step

The hardest part of any journey is taking that first step. For me, it was opening a text editor and typing my first line of HTML:

\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
\`\`\`

Seeing those words appear in my browser was magical. It was the moment I knew I wanted to do this.

## What I've Learned So Far

1. **Start small** - Don't try to build Facebook on day one
2. **Be consistent** - 30 minutes daily beats 5 hours once a week
3. **Embrace confusion** - It means you're learning something new
4. **Build things** - Theory without practice is forgotten quickly

## Looking Forward

I'm incredibly excited about what's ahead. Every day brings new challenges and new victories. Whether it's finally understanding a concept that's been confusing me or successfully implementing a feature, each small win keeps me motivated.

> "Every expert was once a beginner."

This quote keeps me going when things get tough. I know that with persistence and passion, I can achieve my goals in web development.

---

*Thanks for reading about my journey. Stay tuned for more updates as I continue to learn and grow!*
    `,
  },
  {
    slug: "understanding-html-semantics",
    title: "Understanding HTML Semantics",
    excerpt: "Why semantic HTML matters for accessibility and SEO. Learning to structure web pages the right way from day one.",
    date: "December 2024",
    readTime: "4 min read",
    category: "Technical",
    featured: false,
    content: `
# Understanding HTML Semantics

When I first started learning HTML, I thought it was just about making things appear on the screen. I couldn't have been more wrong.

## What is Semantic HTML?

Semantic HTML means using HTML elements that clearly describe their meaning and purpose. Instead of using generic \`<div>\` tags for everything, we use elements like:

- \`<header>\` - For introductory content
- \`<nav>\` - For navigation links
- \`<main>\` - For the main content
- \`<article>\` - For self-contained content
- \`<section>\` - For thematic groupings
- \`<footer>\` - For footer content

## Why Does It Matter?

### 1. Accessibility

Screen readers use semantic HTML to help visually impaired users navigate websites. When you use proper semantics, you're making the web accessible to everyone.

### 2. SEO Benefits

Search engines understand semantic HTML better. Using the right elements helps search engines index your content properly.

### 3. Code Readability

Compare these two examples:

**Non-semantic (Bad):**
\`\`\`html
<div class="header">
  <div class="nav">
    <div class="nav-item">Home</div>
  </div>
</div>
\`\`\`

**Semantic (Good):**
\`\`\`html
<header>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>
\`\`\`

The semantic version is clearer and more maintainable.

## Key Takeaways

- Always choose semantic elements over generic divs when possible
- Think about the meaning of your content, not just its appearance
- Test your pages with a screen reader to understand accessibility

---

*Learning semantic HTML from the start has been one of the best decisions in my learning journey.*
    `,
  },
  {
    slug: "css-flexbox-beginners-guide",
    title: "CSS Flexbox: A Beginner's Guide",
    excerpt: "Breaking down CSS Flexbox concepts that finally made layout design click for me. Tips and tricks I wish I knew earlier.",
    date: "December 2024",
    readTime: "5 min read",
    category: "Technical",
    featured: false,
    content: `
# CSS Flexbox: A Beginner's Guide

Flexbox was the CSS feature that finally made layouts *click* for me. Before Flexbox, I was using floats and margins, and everything felt like a hack.

## The Basics

Flexbox works with two main concepts:

1. **Flex Container** - The parent element with \`display: flex\`
2. **Flex Items** - The direct children of the flex container

\`\`\`css
.container {
  display: flex;
}
\`\`\`

That's it! With just this one line, your layout changes fundamentally.

## Main Axis vs Cross Axis

This concept took me a while to grasp:

- **Main axis** - The direction items flow (default: horizontal)
- **Cross axis** - Perpendicular to the main axis

Use \`flex-direction\` to change the main axis:

\`\`\`css
.container {
  display: flex;
  flex-direction: column; /* Now main axis is vertical */
}
\`\`\`

## Essential Properties

### justify-content (Main Axis)

\`\`\`css
.container {
  justify-content: center;      /* Center items */
  justify-content: space-between; /* Space between items */
  justify-content: space-around;  /* Space around items */
}
\`\`\`

### align-items (Cross Axis)

\`\`\`css
.container {
  align-items: center;    /* Center vertically */
  align-items: flex-start; /* Align to top */
  align-items: flex-end;   /* Align to bottom */
}
\`\`\`

## The Holy Grail: Centering

Before Flexbox, centering was notoriously difficult. Now:

\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
\`\`\`

That's all you need to perfectly center content!

## My Tips

1. **Use DevTools** - Browser developer tools show you the flex container and items visually
2. **Practice with games** - Try Flexbox Froggy to learn interactively
3. **Start simple** - Master the basics before diving into complex layouts

---

*Flexbox transformed how I think about layouts. If you're struggling with CSS, learn Flexbox - it's a game changer.*
    `,
  },
  {
    slug: "building-my-first-portfolio",
    title: "Building My First Portfolio",
    excerpt: "The process of creating this very portfolio you're viewing. Challenges faced, lessons learned, and what's next.",
    date: "December 2024",
    readTime: "6 min read",
    category: "Project",
    featured: false,
    content: `
# Building My First Portfolio

You're looking at it right now! This portfolio represents countless hours of learning, experimenting, and refining. Here's the story behind it.

## Why Build a Portfolio?

As a beginner, I asked myself: "Should I wait until I'm more experienced to build a portfolio?"

The answer is a resounding **no**. Here's why:

1. **It's a learning project** - Building something real teaches you faster than tutorials
2. **It shows initiative** - Having a portfolio demonstrates commitment
3. **It documents growth** - You can update it as you learn more

## The Tech Stack

I chose to build this portfolio using:

- **React** - For component-based architecture
- **TypeScript** - For type safety (still learning!)
- **Tailwind CSS** - For rapid styling
- **Framer Motion** - For smooth animations

## Challenges I Faced

### 1. Design Decisions

Without a design background, deciding on colors, typography, and layout was challenging. I solved this by:

- Studying portfolios I admired
- Learning basic design principles
- Keeping things simple and clean

### 2. Responsive Design

Making the site look good on all devices required careful planning. Tailwind's responsive utilities made this much easier.

### 3. Performance

I learned about:

- Lazy loading images
- Optimizing assets
- Minimizing JavaScript bundles

## What I'm Proud Of

- **The animations** - Subtle motion that enhances the experience
- **Accessibility** - Semantic HTML and proper contrast ratios
- **The blog section** - Documenting my journey as I go

## What's Next?

This portfolio will continue to evolve:

- [ ] Add more projects as I build them
- [ ] Improve the blog with categories and search
- [ ] Add dark/light mode toggle
- [ ] Implement a contact form

## Key Lessons

1. **Done is better than perfect** - Ship it and iterate
2. **Details matter** - Small touches make big differences
3. **Get feedback** - Fresh eyes catch what you miss

---

*Building this portfolio has been an incredible learning experience. I can't wait to see how it evolves as I continue my journey!*
    `,
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};
