const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">0x</span>
            </div>
            <span className="font-semibold">xdeca</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            CC-BY, xdeca, Australia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
