const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">T</span>
            </div>
            <span className="font-semibold">TenGPT</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TenGPT. Built with AI + Engineering in Australia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
