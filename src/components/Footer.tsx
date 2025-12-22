const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-muted-foreground text-sm">
          © {new Date().getFullYear()} Nithya R. All rights reserved.
        </p>
        <p className="font-body text-muted-foreground text-sm">
          Designed & Built with <span className="text-primary">♥</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
