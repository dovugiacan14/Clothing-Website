import { Link } from "react-router-dom";

const navItems = [
  { label: "ABOUT", to: "/about" },
  { label: "CAPABILITIES", to: "/capabilities" },
  { label: "BRANDS", to: "/brands" },
  { label: "GALLERY", to: "/gallery" },
  { label: "CAREERS", to: "/careers" },
  { label: "CONTACT", to: "/contact" },
];

const SiteFooter = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="px-8 md:px-12 py-12 text-center">
        <h2 className="font-display text-2xl md:text-3xl tracking-[0.15em] font-light mb-1">
          SOHO APPAREL GROUP
        </h2>
        <div className="w-full max-w-xs mx-auto h-px bg-primary-foreground/30 mb-8" />

        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link text-primary-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-[10px] tracking-[0.15em] uppercase text-primary-foreground/70 font-body">
          <span>
            <strong className="text-primary-foreground/90">EMAIL:</strong> INFO@SOHOAPPARELGROUP.COM
          </span>
          <span>
            <strong className="text-primary-foreground/90">ADDRESS:</strong> 15025 PROCTOR AVE, CITY OF INDUSTRY, CA 91746
          </span>
          <span>
            <strong className="text-primary-foreground/90">PHONE:</strong> 626-279-2808
          </span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
