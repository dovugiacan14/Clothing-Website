import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Fashion showroom" },
  { src: gallery2, alt: "Craftsmanship" },
  { src: gallery3, alt: "Fashion lookbook" },
  { src: gallery4, alt: "Design workspace" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">Bộ sưu tập</p>
          <h2 className="section-title text-foreground">Hình ảnh nổi bật</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden group ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ minHeight: i === 0 ? "100%" : "250px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
