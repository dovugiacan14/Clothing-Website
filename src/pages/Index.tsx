import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fabric.jpg";

const navItems = [
  { label: "ABOUT", to: "/about" },
  { label: "CAPABILITIES", to: "/capabilities" },
  { label: "BRANDS", to: "/brands" },
  { label: "GALLERY", to: "/gallery" },
  { label: "CAREERS", to: "/careers" },
  { label: "CONTACT", to: "/contact" },
];

const Index = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury fabric"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/20" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1
          className="text-5xl md:text-7xl lg:text-[86px] font-light tracking-[0.02em] text-primary-foreground mb-8"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            textShadow: "0px 4px 5px rgba(0, 0, 0, 0.4)",
          }}
        >
          SOHO APPAREL GROUP
        </h1>

        {/* Navigation links below title */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
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
      </div>
    </div>
  );
};

export default Index;
