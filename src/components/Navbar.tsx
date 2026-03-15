import { useState, useEffect } from "react";

const navItems = [
  { label: "GIỚI THIỆU", href: "#about" },
  { label: "NĂNG LỰC", href: "#capabilities" },
  { label: "THƯƠNG HIỆU", href: "#brands" },
  { label: "BỘ SƯU TẬP", href: "#gallery" },
  { label: "TUYỂN DỤNG", href: "#careers" },
  { label: "LIÊN HỆ", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-16">
        <a href="#hero" className="font-display text-xl tracking-[0.15em] text-primary-foreground font-light">
          SOHO APPAREL
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link text-primary-foreground">
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-px bg-primary-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
            <span className={`block w-6 h-px bg-primary-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-primary-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-96 mt-4" : "max-h-0"}`}>
        <div className="flex flex-col items-center gap-6 py-6 bg-primary/95 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-primary-foreground"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
