import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "ABOUT", to: "/about" },
  { label: "CAPABILITIES", to: "/capabilities" },
  { label: "BRANDS", to: "/brands" },
  { label: "GALLERY", to: "/gallery" },
  { label: "CAREERS", to: "/careers" },
  { label: "CONTACT", to: "/contact" },
];

const SiteHeader = () => {
  const location = useLocation();

  return (
    <header className="bg-background border-b border-border">
      <div className="flex items-center justify-between px-8 md:px-12 py-5">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display text-lg font-semibold">S</span>
          </div>
          <span className="hidden md:block text-[10px] tracking-[0.2em] uppercase text-foreground font-body font-medium">
            SOHOAPPAREL
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link text-foreground ${location.pathname === item.to ? "nav-link-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu - simple dropdown */}
        <MobileMenu />
      </div>
    </header>
  );
};

const MobileMenu = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)} className="text-foreground p-1" aria-label="Menu">
        <div className="flex flex-col gap-1.5">
          <span className={`block w-5 h-px bg-foreground transition-all duration-300 ${open ? "rotate-45 translate-y-[4px]" : ""}`} />
          <span className={`block w-5 h-px bg-foreground transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-foreground transition-all duration-300 ${open ? "-rotate-45 -translate-y-[4px]" : ""}`} />
        </div>
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border z-50 py-6 flex flex-col items-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link text-foreground ${location.pathname === item.to ? "nav-link-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

import { useState } from "react";

export default SiteHeader;
