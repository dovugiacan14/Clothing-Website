import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-primary">
      {/* Hero fabric with wave motion - Multiple layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Layer 1 - Main fabric */}
        <div
          className={`absolute inset-0 transition-all duration-[3000ms] ease-out ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
            opacity: 0.7,
            animation: "waveMotion1 6s ease-in-out infinite",
            transformOrigin: "center",
          }}
        />

        {/* Layer 2 - Secondary fabric with delay */}
        <div
          className={`absolute inset-0 transition-all duration-[3000ms] ease-out ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "105% 105%",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
            opacity: 0.5,
            animation: "waveMotion2 6s ease-in-out infinite",
            animationDelay: "0.75s",
            transformOrigin: "center",
          }}
        />

        {/* Layer 3 - Tertiary fabric with more delay */}
        <div
          className={`absolute inset-0 transition-all duration-[3000ms] ease-out ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "110% 110%",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
            opacity: 0.3,
            animation: "waveMotion3 6s ease-in-out infinite",
            animationDelay: "1.5s",
            transformOrigin: "center",
          }}
        />

        {/* Layer 4 - Diagonal movement from bottom-right to top-left */}
        <div
          className={`absolute inset-0 transition-all duration-[3000ms] ease-out ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "115% 115%",
            backgroundPosition: "bottom right",
            mixBlendMode: "overlay",
            opacity: 0.25,
            animation: "waveMotion4 6s ease-in-out infinite",
            animationDelay: "2s",
            transformOrigin: "bottom right",
          }}
        />
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/50" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1
          className={`text-5xl md:text-7xl lg:text-[86px] font-light tracking-[0.02em] text-primary-foreground mb-8 transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            textShadow: "0px 4px 5px rgba(0, 0, 0, 0.4)",
          }}
        >
          SOHO APPAREL GROUP
        </h1>

        <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
          {navItems.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link text-primary-foreground transition-all duration-700 ease-out ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${600 + i * 100}ms` }}
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
