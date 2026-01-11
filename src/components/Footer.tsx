const Footer = () => {
  return (
    <footer className="py-8 px-5 bg-secondary/50 border-t border-border">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-xs text-muted-foreground leading-relaxed">
          This site is not affiliated with, endorsed by, or connected to Costco Wholesale Corporation. 
          All trademarks and brand names belong to their respective owners.
        </p>
        <p className="text-xs text-muted-foreground mt-3">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
