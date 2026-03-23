import { Reveal } from "@/hooks/useScrollReveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Fashion collection showcase" },
  { src: gallery2, alt: "Craftsmanship detail" },
  { src: gallery3, alt: "Fashion lookbook" },
  { src: gallery4, alt: "Design workspace" },
];

const GalleryPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <Reveal>
          <div className="text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-navy/50 mb-4">
              Our Work
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-wide text-foreground leading-[1.1] mb-6">
              Gallery
            </h1>
            <div className="w-16 h-[2px] bg-navy mx-auto" />
          </div>
        </Reveal>
      </section>

      {/* Images Grid */}
      <section className="max-w-5xl mx-auto px-6 pb-12 md:pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 120}>
              <div
                className={`overflow-hidden group ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ minHeight: i === 0 ? "100%" : "220px" }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
