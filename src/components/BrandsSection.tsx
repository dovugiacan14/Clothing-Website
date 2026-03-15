const brands = [
  "CALVIN KLEIN", "TOMMY HILFIGER", "RALPH LAUREN",
  "MICHAEL KORS", "DKNY", "HUGO BOSS",
];

const BrandsSection = () => {
  return (
    <section id="brands" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">Đối tác</p>
          <h2 className="section-title text-foreground">Thương hiệu hợp tác</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
          {brands.map((brand) => (
            <div
              key={brand}
              className="bg-cream flex items-center justify-center py-12 md:py-16 hover:bg-background transition-colors duration-300"
            >
              <span className="font-display text-lg md:text-2xl tracking-[0.2em] text-foreground/60 hover:text-foreground transition-colors duration-300">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
