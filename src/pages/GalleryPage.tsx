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
    <div className="page-content max-w-5xl">
      <h1 className="page-title mb-10">Gallery</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <div
            key={i}
            className={`overflow-hidden group ${i === 0 ? "col-span-2 row-span-2" : ""}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ minHeight: i === 0 ? "100%" : "220px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
