import { Link } from "react-router-dom";
import { Reveal } from "@/hooks/useScrollReveal";
import capabilitiesHero from "@/assets/about.png";

// Down Jacket images
import dj1 from "@/assets/capabilities/product_categories/down_jacket/dj_1.webp";
import dj2 from "@/assets/capabilities/product_categories/down_jacket/dj_2.jpg";
import dj3 from "@/assets/capabilities/product_categories/down_jacket/dj_3.jpg";

// Padded & Quilted Jackets images
import pqj1 from "@/assets/capabilities/product_categories/padded_quilted_jackets/pqj_1.jpg";
import pqj3 from "@/assets/capabilities/product_categories/padded_quilted_jackets/pqj_3.jpg";
import pqj4 from "@/assets/capabilities/product_categories/padded_quilted_jackets/pqj_4.jpg";

// Outerwear images
import ow1 from "@/assets/capabilities/product_categories/outerwear/outerwear_1.jpg";
import ow3 from "@/assets/capabilities/product_categories/outerwear/outerwear_3.jpg";
import ow4 from "@/assets/capabilities/product_categories/outerwear/outerwear_4.jpg";
import ow5 from "@/assets/capabilities/product_categories/outerwear/outerwear_5.jpg";

// Workwear images
import ww2 from "@/assets/capabilities/product_categories/workwear_garments/workwear_2.jpg";
import ww3 from "@/assets/capabilities/product_categories/workwear_garments/workwear_3.jpg";
import ww4 from "@/assets/capabilities/product_categories/workwear_garments/workwear_4.jpg";

// Medical clothing images
import med1 from "@/assets/capabilities/product_categories/medical_clothing/medical.jpg";
import med2 from "@/assets/capabilities/product_categories/medical_clothing/medical_2.png";

const productCategories = [
  {
    name: "Down Jacket",
    structure: "Quilted construction with duck down filling and seam sealing",
    material: "Polyester / Nylon shell, synthetic fiber filling",
    images: [dj1, dj2, dj3],
  },
  {
    name: "Padded & Quilted Jackets",
    structure: "Quilted construction with lightweight synthetic padding and seam sealing",
    material: "Nylon / polyester shell fabrics available",
    images: [pqj1, pqj3, pqj4],
  },
  {
    name: "Outerwear",
    structure: "Water-resistant shell jackets with functional construction",
    material: "Polyester / Nylon fabrics with breathable coating or membrane",
    images: [ow1, ow3, ow4, ow5],
  },
  {
    name: "Workwear Garments",
    structure: "Durable construction designed for industrial and professional use",
    material: "Heavy-duty cotton, polyester blends with reinforced stitching",
    images: [ww2, ww3, ww4],
  },
  {
    name: "Medical Clothing",
    structure: "Functional design for healthcare and medical environments",
    material: "Antimicrobial, breathable fabrics with easy-care properties",
    images: [med1, med2],
  },
];

const coreServices = [
  { title: "Apparel Sourcing", description: "Connecting buyers with vetted Vietnamese garment manufacturers" },
  { title: "CMPT Production", description: "Cut, Make, Pack & Trim services with material coordination" },
  { title: "Product Development & Sampling", description: "From concept to production-ready samples" },
  { title: "FOB Manufacturing", description: "Full package production from fabric to finished goods" },
  { title: "CMT Production", description: "Cut, Make & Trim services for buyer-supplied materials" },
  { title: "Production Follow-up & Quality Control", description: "On-site inspections and quality assurance at every stage" },
];

const whyChooseUsReasons = [
  {
    title: "Reliable Factory Network",
    description:
      "We focus on reliable factory coordination, transparent communication, and efficient production management to help buyers source garments in Vietnam with confidence.",
  },
  {
    title: "Flexible Manufacturing Options",
    description:
      "Central Apparel helps buyers manage production efficiently with flexible CMT, CMPT, and FOB solutions while maintaining quality and reliable delivery schedules.",
  },
  {
    title: "Quality & Transparency",
    description:
      "We coordinate closely with trusted factories to ensure stable production capacity, competitive pricing, and consistent product quality at every stage.",
  },
];

const CapabilitiesPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Full Width */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={capabilitiesHero}
            alt="Central Apparel manufacturing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/75 to-navy/30" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <Reveal direction="left">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-white/60 mb-4">
              Our Expertise
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-wide text-white leading-[1.1] mb-6 max-w-2xl">
              What We Do
            </h1>
            <p className="font-body text-lg md:text-xl text-white/85 leading-relaxed max-w-xl">
              Flexible apparel sourcing and manufacturing solutions from Vietnam
              for international buyers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Intro Text */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal direction="left">
            <div>
              <div className="w-12 h-[2px] bg-navy mb-6" />
              <p className="font-body text-[17px] text-foreground leading-[1.8] mb-5">
                Central Apparel provides flexible apparel sourcing and
                manufacturing solutions in Vietnam.
              </p>
              <p className="font-body text-[17px] text-foreground/85 leading-[1.8]">
                We support international buyers through the entire production
                process, from factory sourcing and product development to
                manufacturing coordination and shipment preparation.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={200}>
            <img
              src="https://static.wixstatic.com/media/25c35148f7e44d63ab6da9fce767c076.jpg/v1/fill/w_567,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/25c35148f7e44d63ab6da9fce767c076.jpg"
              alt="Fashion design workspace"
              className="w-full h-auto object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Our Core Services */}
      <section className="bg-navy/[0.03]">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <Reveal>
            <div className="text-center mb-10">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-navy/50 mb-4">
                Services
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wide text-foreground mb-4">
                Our Core Services
              </h2>
              <div className="w-16 h-[2px] bg-navy mx-auto" />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, i) => (
              <Reveal key={service.title} delay={i * 100}>
                <div className="bg-white border border-border/50 p-8 hover:shadow-lg transition-shadow duration-300 group h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-10 h-10 bg-navy/5 flex items-center justify-center group-hover:bg-navy/10 transition-colors flex-shrink-0">
                      <span className="font-display text-lg font-bold text-navy">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground tracking-wide leading-snug">
                      {service.title}
                    </h3>
                  </div>
                  <p className="font-body text-base text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <Reveal>
          <div className="mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wide text-foreground leading-[1.1] mb-6">
              Why Choose Us?
            </h2>
            <p className="font-body text-[17px] text-foreground/80 leading-[1.8] max-w-3xl">
              Central Apparel works closely with reliable garment manufacturers
              across Vietnam to provide efficient sourcing and production
              solutions. Our team focuses on clear communication, reliable
              production management, and consistent product quality.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {whyChooseUsReasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 150}>
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 rounded-full border-2 border-navy/20 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-navy/60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={
                        i === 0
                          ? "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0a2.999 2.999 0 013.397-1.378l.863.258a3 3 0 002.88-.588l.166-.133a3 3 0 013.388 0l.166.133a3 3 0 002.88.588l.863-.258A3 3 0 0121 9.35"
                          : i === 1
                            ? "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            : "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      }
                    />
                  </svg>
                </div>
                <p className="font-body text-xs tracking-[0.15em] uppercase text-navy/40 mb-3">
                  0{i + 1}
                </p>
                <h3 className="font-display text-xl font-bold text-foreground tracking-wide mb-4">
                  {reason.title}
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-navy/[0.03]">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <Reveal>
            <div className="text-center mb-12">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-navy/50 mb-4">
                What We Make
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wide text-foreground leading-[1.1] mb-4">
                Product Categories
              </h2>
              <div className="w-16 h-[2px] bg-navy mx-auto mb-6" />
              <p className="font-body text-[17px] text-foreground/85 leading-[1.8] max-w-2xl mx-auto">
                We specialize in outerwear and quilted products for global
                brands, retailers and trading companies.
              </p>
            </div>
          </Reveal>

          <div className="space-y-16">
            {productCategories.map((category, catIndex) => (
              <Reveal key={category.name} delay={catIndex * 100}>
                <div>
                  {/* Category label on top */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-navy flex items-center justify-center flex-shrink-0">
                      <span className="font-body text-sm font-bold text-white">
                        {String(catIndex + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold tracking-wide text-foreground">
                      {category.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="space-y-1 mb-6 pl-14">
                    <p className="font-body text-[15px] text-foreground/80 leading-[1.7]">
                      <span className="font-semibold text-foreground">Structure:</span>{" "}
                      {category.structure}
                    </p>
                    <p className="font-body text-[15px] text-foreground/80 leading-[1.7]">
                      <span className="font-semibold text-foreground">Material:</span>{" "}
                      {category.material}
                    </p>
                  </div>

                  {/* Product images */}
                  <div className="flex flex-wrap justify-center gap-4">
                    {category.images.map((img, i) => (
                      <Reveal
                        key={i}
                        direction={i % 2 === 0 ? "left" : "right"}
                        delay={i * 120}
                      >
                        <img
                          src={img}
                          alt={`${category.name} ${i + 1}`}
                          className="h-[260px] md:h-[300px] w-auto object-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wide text-foreground mb-5">
              Ready to Start Production?
            </h2>
            <p className="font-body text-[17px] text-foreground/80 leading-[1.8] max-w-xl mx-auto mb-8">
              Contact us to discuss your sourcing needs and let us help you find
              the right manufacturing solution in Vietnam.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-navy text-white font-body text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-navy-light transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default CapabilitiesPage;
