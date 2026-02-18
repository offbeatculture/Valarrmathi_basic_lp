const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="container mx-auto px-6 text-center text-sm text-muted-foreground font-body">
        <p>© {new Date().getFullYear()} Dr. Valarrmathi Srinivasan. All rights reserved.</p>
        <p className="mt-1">Breath Chakra Reset • Wellness Coach</p>
      </div>
    </footer>
  );
};

export default Footer;
