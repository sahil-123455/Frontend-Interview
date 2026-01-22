const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-[1600px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

        {/* BRAND */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-lg font-extrabold">
            <span className="px-2 py-1 rounded bg-gradient-to-tr from-teal-400 to-purple-500 text-black">
              CA
            </span>
            <span>MONK</span>
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-xs">
            Empowering the next generation of financial leaders through
            knowledge, community, and insights.
          </p>

          <p className="text-xs text-muted-foreground pt-4">
            © {new Date().getFullYear()} CA Monk. All rights reserved.
          </p>
        </div>

        {/* RESOURCES */}
        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-4 text-foreground">
            Resources
          </h4>
          <ul className="space-y-3 text-muted-foreground">
            <li className="hover:text-primary transition">Blog</li>
            <li className="hover:text-primary transition">Webinars</li>
            <li className="hover:text-primary transition">Case Studies</li>
          </ul>
        </div>

        {/* PLATFORM */}
        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-4">
            Platform
          </h4>
          <ul className="space-y-3 text-muted-foreground">
            <li className="hover:text-primary transition">Job Board</li>
            <li className="hover:text-primary transition">Practice Tests</li>
            <li className="hover:text-primary transition">Mentorship</li>
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-4">
            Connect
          </h4>
          <ul className="space-y-3 text-muted-foreground">
            <li className="hover:text-primary transition">LinkedIn</li>
            <li className="hover:text-primary transition">Twitter</li>
            <li className="hover:text-primary transition">Instagram</li>
          </ul>

          <div className="flex gap-4 mt-6 text-xs text-muted-foreground">
            <span className="hover:text-primary cursor-pointer">Privacy</span>
            <span className="hover:text-primary cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
