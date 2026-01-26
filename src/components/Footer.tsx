const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-semibold">xdeca</span>
          
          <p className="text-sm text-muted-foreground">
            <a 
              href="https://creativecommons.org/licenses/by/4.0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              CC-BY
            </a>, xdeca, Australia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
