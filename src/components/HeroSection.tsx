import heroImage from "@/assets/hero-fabric.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury fabric texture"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/30" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] text-primary-foreground mb-6">
          SOHO APPAREL GROUP
        </h1>
        <div className="w-16 h-px bg-primary-foreground/50 mb-6" />
        <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-primary-foreground/80 font-light">
          Thiết kế · Sản xuất · Phân phối
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-px h-12 bg-primary-foreground/40" />
      </div>
    </section>
  );
};

export default HeroSection;
