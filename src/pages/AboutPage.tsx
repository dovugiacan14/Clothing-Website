import { Reveal } from "@/hooks/useScrollReveal";

const retailerLogos = [
  { src: "https://static.wixstatic.com/media/8c1622_2824974ac61c4db988be0ac27d14d5c3~mv2.png/v1/fill/w_257,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pngfind_com-factory-png-1700982.png", alt: "Factory icon" },
  { src: "https://static.wixstatic.com/media/8c1622_a941bae759b94881bdc603c5fb192f80~mv2.png/v1/fill/w_257,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8c1622_a941bae759b94881bdc603c5fb192f80~mv2.png", alt: "Retailer logo" },
  { src: "https://static.wixstatic.com/media/8c1622_f77fbc7bb33a4a50a74c3ec4a5b5d4d8~mv2.png/v1/fill/w_172,h_172,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/25d9cfd38fab89b848ddcfd9a5492476.png", alt: "Retailer logo" },
  { src: "https://static.wixstatic.com/media/8c1622_85b199ed341d44529fa4c873d187e9b2~mv2.png/v1/fill/w_180,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pngfind_com-discount-png-271335.png", alt: "Discount retailer logo" },
  { src: "https://static.wixstatic.com/media/8c1622_801135dcc3ce4e53826f92a4206d143a~mv2.png/v1/fill/w_320,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pngwing_com.png", alt: "Retailer logo" },
];

const partnerLogos = [
  { src: "https://static.wixstatic.com/media/8c1622_0a79aaee3fe547288e8f702c3f488f9c~mv2.webp/v1/fill/w_237,h_59,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8c1622_0a79aaee3fe547288e8f702c3f488f9c~mv2.webp", alt: "Tillys logo" },
  { src: "https://static.wixstatic.com/media/8c1622_2232de590aa34909ae67111140c3731f~mv2.png/v1/fill/w_237,h_156,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8c1622_2232de590aa34909ae67111140c3731f~mv2.png", alt: "Marshalls logo" },
  { src: "https://static.wixstatic.com/media/8c1622_b231bdbcdb2849bbb9275844ef7b4b53~mv2.png/v1/fill/w_227,h_156,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8c1622_b231bdbcdb2849bbb9275844ef7b4b53~mv2.png", alt: "Winners logo" },
  { src: "https://static.wixstatic.com/media/8c1622_7db58494aafe4cf6928dac544b5cfd8d~mv2.png/v1/fill/w_191,h_87,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pngwing_com.png", alt: "Partner logo" },
  { src: "https://static.wixstatic.com/media/8c1622_7f61ec3d03f04cfda7e51156b247fc3b~mv2.webp/v1/fill/w_172,h_50,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/804D7B5C-9FAC-49F4-9AA1-1B1D0CB50EB6.webp", alt: "Partner logo" },
  { src: "https://static.wixstatic.com/media/8c1622_9b5e985413dc432f8860645036211670~mv2.png/v1/fill/w_172,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/windsor-logo-official.png", alt: "Windsor logo" },
];

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      {/* Hero Section */}
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 items-start mb-20">
        <Reveal direction="left">
          <h1 className="font-display text-5xl md:text-6xl font-light tracking-wide text-foreground italic leading-tight mb-6">
            SOHO<br />APPAREL<br />GROUP
          </h1>
          <p className="text-foreground/60 font-body text-sm leading-relaxed">
            We are your trusted apparel manufacturing company, providing private label garments to major apparel companies.
          </p>
        </Reveal>
        <Reveal direction="right" delay={200}>
          <img
            src="https://static.wixstatic.com/media/8c1622_baa89258df5f4e5496cc99f37cddcbf0f000.jpg/v1/fill/w_628,h_354,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8c1622_baa89258df5f4e5496cc99f37cddcbf0f000.jpg"
            alt="Soho Apparel Group video thumbnail"
            className="w-full h-auto object-cover"
          />
        </Reveal>
      </div>

      {/* About Text */}
      <Reveal>
        <div className="max-w-4xl mx-auto mb-20 space-y-4">
          <p className="text-foreground/80 font-body text-sm leading-relaxed">
            Founded in 2002 in the heart of California, Soho Apparel Group began as a private label supplier for major apparel brands and has grown into a cornerstone of American fashion. From our expansive 300,000-square-foot warehouse in City of Industry, we've become one of North America's most trusted fashion brands. Within a few years, we launched our own series of brands, delivering trendsetting tops, bottoms, and activewear for Juniors, Young Contemporary, Missy, and Kids markets.
          </p>
          <p className="text-foreground/80 font-body text-sm leading-relaxed">
            Our mission is to empower customers across the United States with high-quality, stylish apparel at competitive prices. Fueled by innovation and a passion for exceptional value, Soho Apparel Group sets the standard for excellence, ensuring shoppers nationwide look and feel their best.
          </p>
          <p className="text-foreground/80 font-body text-sm leading-relaxed">
            At Soho Apparel Group, our mission is clear: to exceed customer expectations with top-quality products at competitive prices. Driven by a passion for innovation and unmatched style, we deliver exceptional value every day, solidifying our place as a leader in the apparel industry.
          </p>
        </div>
      </Reveal>

      {/* Retailer Logos */}
      <Reveal>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-20">
          {retailerLogos.map((logo, i) => (
            <img key={i} src={logo.src} alt={logo.alt} className="h-12 md:h-16 w-auto object-contain hover-scale" loading="lazy" />
          ))}
        </div>
      </Reveal>

      {/* Partners Section */}
      <Reveal>
        <div className="mb-10">
          <h2 className="font-display text-4xl md:text-5xl tracking-wide text-foreground mb-10 text-center">Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
            {partnerLogos.map((logo, i) => (
              <img key={i} src={logo.src} alt={logo.alt} className="h-12 md:h-20 w-auto object-contain hover-scale" loading="lazy" />
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default AboutPage;
