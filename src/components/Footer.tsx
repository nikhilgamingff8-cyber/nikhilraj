const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-muted-foreground text-sm">
          &copy; 2026 Nikhil Raj. All rights reserved.
        </p>
        <p className="font-body text-muted-foreground text-sm">
          Designed &amp; Developed by <span className="text-primary">Nikhil Raj</span>
        </p>
        <p className="font-body text-muted-foreground text-sm">
          Built using HTML, CSS and JavaScript
        </p>
      </div>
    </footer>
  );
};

export default Footer;
