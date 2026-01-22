import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Dashboard", path: "/" },
  { name: "Articles", path: "/articles" },
  { name: "Network", path: "/communities" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-14 h-20 flex items-center">

        {/* LEFT: LOGO */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="bg-primary text-primary-foreground w-11 h-11 rounded-2xl flex items-center justify-center font-black text-xl shadow-[0_0_30px_-6px_rgba(var(--primary),0.6)] group-hover:scale-110 transition-transform">
            C
          </div>
          <div className="leading-tight">
            <p className="font-extrabold tracking-tight text-lg">CA MONK</p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold">
              INSIGHTS
            </p>
          </div>
        </Link>

        {/* CENTER: NAV LINKS */}
        <div className="flex-1 flex justify-center">
          <div className="hidden lg:flex items-center gap-14">
            {navLinks.map((link) => {
              const isActive =
                link.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.path);

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "relative text-sm font-extrabold uppercase tracking-[0.18em] transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.name}

                  {/* Underline */}
                  <span
                    className={cn(
                      "absolute -bottom-2 left-1/2 h-[2px] bg-primary transition-all duration-300",
                      isActive
                        ? "w-8 -translate-x-1/2"
                        : "w-0 -translate-x-1/2 group-hover:w-8"
                    )}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {/* RIGHT: ACTIONS */}
        <div className="flex items-center gap-6">
          <Link to="/create">
            <Button className="rounded-full px-9 h-11 text-xs font-extrabold uppercase tracking-widest shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all">
              New Story
            </Button>
          </Link>

          <ModeToggle />

          {/* Profile */}
          <Link to="/profile">
            <div className="w-11 h-11 rounded-2xl overflow-hidden border border-border/60 hover:border-primary/50 transition">
              <img
                src="https://ui.shadcn.com/avatars/02.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
