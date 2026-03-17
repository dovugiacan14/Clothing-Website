import { Reveal } from "@/hooks/useScrollReveal";

const categories = [
  "INFANT", "CHILDREN", "YOUNG ADULT", "WOMEN'S", "MATERNITY", "JEANS", "LINGERIE", "SPORTS",
];

const productImages = [
  { src: "https://static.wixstatic.com/media/8c1622_c4179d43a3be46eab10959bc09829123~mv2.jpg/v1/fill/w_241,h_362,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSLM005.jpg", alt: "Fashion product 1" },
  { src: "https://static.wixstatic.com/media/8c1622_e64dc84a3c9945fb90293701dad9d426~mv2.jpg/v1/fill/w_241,h_362,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSLM006.jpg", alt: "Fashion product 2" },
  { src: "https://static.wixstatic.com/media/8c1622_b0f5d19c4f6d494286ce88af6cde6a78~mv2.jpg/v1/fill/w_241,h_362,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSLM007-2.jpg", alt: "Fashion product 3" },
  { src: "https://static.wixstatic.com/media/8c1622_87591441434e4a8e8915c676e5eca572~mv2.jpg/v1/fill/w_227,h_362,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6346_JPG.jpg", alt: "Fashion product 4" },
  { src: "https://static.wixstatic.com/media/8c1622_5e5ac0c8cbd248baa795083ac2178e09~mv2.jpg/v1/fill/w_234,h_362,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6363_JPG.jpg", alt: "Fashion product 5" },
  { src: "https://static.wixstatic.com/media/8c1622_9202d9c66fe44e8aaa5c87c37d92c1f7~mv2.jpg/v1/fill/w_211,h_421,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6054_JPG.jpg", alt: "Fashion product 6" },
];

const moreImages = [
  { src: "https://static.wixstatic.com/media/8c1622_c8be004356e6479dbc4ed0b76b646567~mv2.jpg/v1/fill/w_184,h_421,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6058_JPG.jpg", alt: "Fashion product 7" },
  { src: "https://static.wixstatic.com/media/8c1622_26fed6dc10e24de5929b0c094627f70e~mv2.jpg/v1/fill/w_261,h_421,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6267_JPG.jpg", alt: "Fashion product 8" },
  { src: "https://static.wixstatic.com/media/8c1622_eb07e786e4e7480eab55366617915e39~mv2.jpg/v1/fill/w_319,h_421,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6065_JPG.jpg", alt: "Fashion product 9" },
  { src: "https://static.wixstatic.com/media/8c1622_9e9039961700413d801390a6347679f2~mv2.jpg/v1/fill/w_211,h_532,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5924_JPG.jpg", alt: "Fashion product 10" },
  { src: "https://static.wixstatic.com/media/8c1622_ebc3bce5596c45cb822d2cb8e906b1d1~mv2.jpg/v1/fill/w_241,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6245_JPG.jpg", alt: "Fashion product 11" },
  { src: "https://static.wixstatic.com/media/8c1622_f44d5acc533343998ac43bed62a67d71~mv2.jpg/v1/fill/w_241,h_349,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6244_JPG.jpg", alt: "Fashion product 12" },
];

const bottomImages = [
  { src: "https://static.wixstatic.com/media/8c1622_7aada9fab4604cec8eee4c906f09e587~mv2.jpg/v1/fill/w_267,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6279_JPG.jpg", alt: "Fashion product 13" },
  { src: "https://static.wixstatic.com/media/8c1622_2ee76afc63e34be992ff612f0c7744ec~mv2.jpg/v1/fill/w_267,h_289,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6247_JPG.jpg", alt: "Fashion product 14" },
  { src: "https://static.wixstatic.com/media/8c1622_5a966c7b638e43e58dcd4e81a2d05d97~mv2.jpg/v1/fill/w_267,h_328,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6360_JPG.jpg", alt: "Fashion product 15" },
  { src: "https://static.wixstatic.com/media/8c1622_dd29c8e413af4e6581933a0194c423e5~mv2.jpg/v1/fill/w_308,h_283,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6252_JPG.jpg", alt: "Fashion product 16" },
  { src: "https://static.wixstatic.com/media/8c1622_c0ffc0d62a7241beb7169125eaef3a91~mv2.jpg/v1/fill/w_227,h_518,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5845.jpg", alt: "Fashion product 17" },
];

const CapabilitiesPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-10 items-start mb-20">
        <Reveal direction="left">
          <p className="text-foreground font-body text-base font-medium leading-relaxed mb-4">
            Soho Apparel Group is a leader in the fashion industry, specializing in a diverse range of apparel categories. Our extensive product offerings include infant clothing, children's wear (ages 4-6 and 7-16), young adult fashion, women's wear, business attire, sportswear, maternity wear, dresses, lingerie, and more.
          </p>
          <p className="text-foreground font-body text-base font-medium leading-relaxed">
            With 14 distinct departments and product lines, we cater to the needs of a wide and varied customer base, always focusing on delivering style, quality, and comfort.
          </p>
        </Reveal>
        <Reveal direction="right" delay={200}>
          <img
            src="https://static.wixstatic.com/media/25c35148f7e44d63ab6da9fce767c076.jpg/v1/fill/w_567,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/25c35148f7e44d63ab6da9fce767c076.jpg"
            alt="Fashion design workspace"
            className="w-full h-auto object-cover"
          />
        </Reveal>
      </div>

      {/* Design capabilities text */}
      <Reveal>
        <p className="text-foreground font-body text-base font-medium leading-relaxed mb-20 max-w-4xl mx-auto text-center">
          Our design capabilities are powered by a talented in-house team that includes experienced fashion designers, pattern makers, tailors, and print designers, all of whom work together to ensure the latest trends and innovations are seamlessly integrated into our collections. In addition to our design expertise, we also have a dedicated team specializing in building and nurturing our brands, ensuring that each product we create tells a unique story and resonates with our target customers.
        </p>
      </Reveal>

      {/* Product Categories */}
      <Reveal>
        <div className="mb-10">
          <h2 className="font-display text-4xl md:text-5xl tracking-wide text-right text-foreground mb-6">Product Categories</h2>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
            {categories.map((cat) => (
              <span key={cat} className="font-body text-xs tracking-[0.2em] text-foreground/70 uppercase">{cat}</span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Product Images Grid - Row 1 */}
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {productImages.map((img, i) => (
          <Reveal key={i} direction="up" delay={i * 120}>
            <img src={img.src} alt={img.alt} className="h-[280px] w-auto object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
          </Reveal>
        ))}
      </div>

      {/* Product Images Grid - Row 2 */}
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {moreImages.map((img, i) => (
          <Reveal key={i} direction="up" delay={i * 120}>
            <img src={img.src} alt={img.alt} className="h-[320px] w-auto object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
          </Reveal>
        ))}
      </div>

      {/* Product Images Grid - Row 3 */}
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        {bottomImages.map((img, i) => (
          <Reveal key={i} direction="up" delay={i * 120}>
            <img src={img.src} alt={img.alt} className="h-[300px] w-auto object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
          </Reveal>
        ))}
      </div>

      {/* Trusted Supplier Section */}
      <Reveal direction="left">
        <div className="mb-20">
          <h2 className="font-display text-4xl md:text-5xl tracking-wide text-foreground mb-8">Trusted Supplier</h2>
          <p className="text-foreground font-body text-base font-medium leading-relaxed mb-10 max-w-4xl">
            Soho Apparel Group is proud to be one of the top three apparel suppliers to major U.S. retailers, including Ross, TJ Maxx, Burlington, Marshalls, and DD's Discounts. Our commitment to quality, timely delivery, and understanding consumer trends has made us a trusted partner for these renowned chains. Additionally, we are a major supplier for the prominent U.S. e-commerce platform Fashion Nova, where our sportswear lines are among the most popular and widely distributed.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <img src="https://static.wixstatic.com/media/11062b_79510cda9b964ee397a8e9ca249455c9~mv2.jpg/v1/fill/w_524,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_79510cda9b964ee397a8e9ca249455c9~mv2.jpg" alt="Retail store" className="w-full h-auto object-cover" />
            <img src="https://static.wixstatic.com/media/11062b_8ce3b16ee2c2452a83dc9793a0e80056~mv2.jpg/v1/fill/w_524,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_8ce3b16ee2c2452a83dc9793a0e80056~mv2.jpg" alt="Warehouse operations" className="w-full h-auto object-cover" />
          </div>
        </div>
      </Reveal>

      {/* Warehouse Section */}
      <Reveal direction="right">
        <div className="mb-20">
          <h2 className="font-display text-4xl md:text-5xl tracking-wide text-foreground mb-6">Warehouse</h2>
          <p className="text-foreground font-body text-base font-medium leading-relaxed max-w-4xl">
            To support our large-scale operations, Soho Apparel Group manages a state-of-the-art 300,000-square-foot warehouse, equipped to handle high-volume inventory with efficiency and precision. This facility allows us to maintain excellent logistics and ensures that our products reach our retail partners and customers quickly and reliably.
          </p>
        </div>
      </Reveal>

      {/* Commitment Section */}
      <Reveal>
        <div>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide text-foreground mb-6">Commitment</h2>
          <p className="text-foreground font-body text-base font-medium leading-relaxed max-w-4xl">
            With a commitment to innovation, customer satisfaction, and excellence in every aspect of our business, Soho Apparel Group continues to drive the future of fashion. Whether it's through our cutting-edge designs or our seamless supply chain, we strive to set the standard in the global apparel market.
          </p>
        </div>
      </Reveal>
    </div>
  );
};

export default CapabilitiesPage;
