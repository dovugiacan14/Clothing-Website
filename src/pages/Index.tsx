import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import bgVideo from "@/assets/background.mp4";

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
      {/* Background video */}
      <video
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2000ms] ease-out ${loaded ? "opacity-70" : "opacity-0"}`}
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        ref={(el) => { if (el) el.playbackRate = 0.5; }}
      />

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
