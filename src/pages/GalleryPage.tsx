import { Reveal } from "@/hooks/useScrollReveal";
import gl1 from "@/assets/gallery/gl_1.jpg";
import gl2 from "@/assets/gallery/gl_2.jpg";
import gl3 from "@/assets/gallery/gl_3.jpg";
import gl4 from "@/assets/gallery/gl_4.jpg";
import gl5 from "@/assets/gallery/gl_5.jpg";

const images = [
  { src: gl1, alt: "Production facility overview" },
  { src: gl2, alt: "Garment manufacturing process" },
  { src: gl3, alt: "Quality control inspection" },
  { src: gl4, alt: "Fabric and materials" },
  { src: gl5, alt: "Finished products showcase" },
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

      {/* Images Grid - 3 top, 2 bottom */}
      <section className="max-w-6xl mx-auto px-6 pb-12 md:pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.slice(0, 3).map((img, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="overflow-hidden group aspect-[4/3]">
                <img src={img.src} alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-4 mt-3 md:mt-4 md:px-[16.67%]">
          {images.slice(3).map((img, i) => (
            <Reveal key={i} delay={360 + i * 120}>
              <div className="overflow-hidden group aspect-[4/3]">
                <img src={img.src} alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
