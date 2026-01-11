const Footer = () => {
  return (
    <footer className="py-6 px-5 bg-secondary/50 border-t border-border">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
