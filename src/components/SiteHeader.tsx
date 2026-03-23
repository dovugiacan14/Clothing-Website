import { Link, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo.jpg";

const navItems = [
  { label: "ABOUT", to: "/about" },
  { label: "CAPABILITIES", to: "/capabilities" },
  // { label: "BRANDS", to: "/brands" },
  { label: "GALLERY", to: "/gallery" },
  { label: "CAREERS", to: "/careers" },
  { label: "CONTACT", to: "/contact" },
];

const SiteHeader = () => {
  const location = useLocation();

  return (
    <header className="bg-background border-b border-border">
      <div className="flex items-center px-8 md:px-12 py-5">
        <Link to="/" className="flex items-center gap-3 shrink-0 mr-auto">
          <img src={logoImg} alt="Central Apparel logo" className="w-10 h-10 rounded-full object-cover" />
          <span className="hidden md:block text-[10px] tracking-[0.2em] uppercase text-foreground font-body font-medium">
            CENTRAL APPAREL
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm tracking-[0.2em] uppercase font-body font-medium text-foreground transition-opacity duration-300 hover:opacity-60 ${location.pathname === item.to ? "underline underline-offset-4" : ""}`}
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
