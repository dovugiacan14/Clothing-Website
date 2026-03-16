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
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://static.wixstatic.com/media/11062b_0772d30e39b5493b94d82172abf46cc6f000.jpg/v1/fill/w_1920,h_1080,al_c,q_90,usm_0.33_1.00_0.00,enc_avif,quality_auto/11062b_0772d30e39b5493b94d82172abf46cc6f000.jpg"
          alt="Luxury fabric"
          className={`h-full w-full object-cover transition-transform duration-[2s] ease-out ${loaded ? "scale-100" : "scale-110"}`}
        />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1
          className={`text-5xl md:text-7xl lg:text-[86px] font-light tracking-[0.05em] text-foreground mb-8 transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
          }}
        >
          SOHO APPAREL GROUP
        </h1>

        <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
          {navItems.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link text-foreground transition-all duration-700 ease-out ${
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
