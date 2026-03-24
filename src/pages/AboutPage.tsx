import { Link } from "react-router-dom";
import { Reveal } from "@/hooks/useScrollReveal";
import aboutHero from "@/assets/about.png";
import aboutPhoto from "@/assets/about/ntt_1.png";
import logoSoho from "@/assets/about/ntt_2.png";
import logoHead from "@/assets/about/ntt_3.png";
import logoDonagamex from "@/assets/about/ntt_4.png";
import logoDacotex from "@/assets/about/ntt_5.png";
import logoQve from "@/assets/about/ntt_6.png";
import logoGold from "@/assets/about/ntt_7.png";
import logoNorthFace from "@/assets/about/ntt_8.png";

const partnerLogos = [
  { src: aboutPhoto, alt: "Central Apparel business networking" },
  { src: logoSoho, alt: "SOHOAPPAREL" },
  { src: logoHead, alt: "HEAD" },
  { src: logoDonagamex, alt: "DONAGAMEX" },
  { src: logoDacotex, alt: "DACOTEX GROUP" },
  { src: logoQve, alt: "Q.V.E" },
  { src: logoGold, alt: "Partner logo" },
  { src: logoNorthFace, alt: "The North Face" },
];

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "50+", label: "Factory Partners" },
  { value: "6+", label: "Global Markets" },
  { value: "100%", label: "Quality Commitment" },
];

const markets = [
  { name: "United States", flag: "US" },
  { name: "Europe", flag: "EU" },
  { name: "Japan", flag: "JP" },
  { name: "Korea", flag: "KR" },
  { name: "Canada", flag: "CA" },
  { name: "Asia", flag: "AS" },
];

const clientTypes = [
  {
    title: "Retail Apparel Brands",
    description: "Supporting global retail brands with end-to-end production solutions",
  },
  {
    title: "Apparel Trading Companies",
    description: "Partnering with trading companies for reliable sourcing across Vietnam",
  },
  {
    title: "Outerwear Brands",
    description: "Specialized manufacturing for outerwear and technical garments",
  },
  {
    title: "Uniform Distributors",
    description: "Medical and workwear uniform production with strict quality standards",
  },
];

const AboutPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Full Width */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="Central Apparel factory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/70 to-navy/40" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <Reveal direction="left">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-white/70 mb-4">
              Who We Are
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-wide text-white leading-[1.1] mb-6 whitespace-nowrap">
              About Central Apparel
            </h1>
            <p className="font-body text-base md:text-lg text-white/85 leading-relaxed max-w-xl">
              A Vietnam-based apparel sourcing and trading company dedicated to
              connecting international buyers with reliable garment
              manufacturers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="py-6 md:py-8 text-center px-4">
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {stat.value}
                  </p>
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-white/60">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video + Story Section */}
      <section className="max-w-6xl mx-auto px-6 py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <Reveal direction="left">
            <div className="aspect-video overflow-hidden rounded-sm">
              <video
                src="https://video.wixstatic.com/video/8c1622_baa89258df5f4e5496cc99f37cddcbf0/720p/mp4/file.mp4"
                poster="https://static.wixstatic.com/media/8c1622_baa89258df5f4e5496cc99f37cddcbf0f000.jpg/v1/fill/w_628,h_354,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8c1622_baa89258df5f4e5496cc99f37cddcbf0f000.jpg"
                controls
                playsInline
                preload="none"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal direction="right" delay={200}>
            <div>
              <div className="w-12 h-[2px] bg-navy mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wide text-foreground mb-6 leading-tight">
                Our Story
              </h2>
              <p className="font-body text-base text-foreground/90 leading-relaxed mb-4">
                With extensive experience in the Vietnamese garment industry and
                a strong network of manufacturing partners, we support our
                clients throughout the entire sourcing and production process-
                from factory selection and product development to production
                follow-up and quality control.
              </p>
              <p className="font-body text-base text-foreground/90 leading-relaxed">
                Central Apparel provides flexible manufacturing solutions
                including FOB (Full Package), CMPT, and CMT production,
                depending on the sourcing strategy and material supply of our
                clients.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trusted Partner - Full Width Navy */}
      <section className="bg-navy/[0.03]">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-14">
          <Reveal>
            <div className="text-center mb-10">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-navy/50 mb-4">
                Partnership
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wide text-foreground mb-6">
                A Trusted Sourcing Partner
              </h2>
              <div className="w-16 h-[2px] bg-navy mx-auto mb-8" />
              <p className="font-body text-base text-foreground/85 leading-relaxed max-w-2xl mx-auto">
                Through our trusted factory network, we offer flexible
                production capacity and specialize in a variety of apparel
                categories such as outerwear, jackets, and casual garments for
                international markets.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: "Factory Selection",
                description:
                  "Carefully vetted manufacturing partners across Vietnam ensuring quality and reliability.",
              },
              {
                title: "Production Management",
                description:
                  "End-to-end production follow-up from sample development to shipment preparation.",
              },
              {
                title: "Quality Control",
                description:
                  "Rigorous quality management systems ensuring every garment meets international standards.",
              },
            ].map((service, i) => (
              <Reveal key={service.title} delay={i * 150}>
                <div className="bg-white border border-border/50 p-8 hover:shadow-lg transition-shadow duration-300 group">
                  <div className="w-10 h-10 bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-navy/10 transition-colors">
                    <span className="font-display text-lg font-bold text-navy">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="font-body text-[15px] text-foreground/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Markets + Clients */}
      <section className="max-w-6xl mx-auto px-6 py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Markets */}
          <Reveal direction="left">
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-navy/50 mb-4">
                Global Reach
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wide text-foreground mb-8">
                Markets We Serve
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {markets.map((market) => (
                  <div
                    key={market.name}
                    className="flex items-center gap-3 py-3 px-4 bg-navy/[0.03] hover:bg-navy/[0.06] transition-colors"
                  >
                    <span className="font-body text-[10px] tracking-widest text-navy/40 font-semibold">
                      {market.flag}
                    </span>
                    <span className="font-body text-[15px] font-medium text-foreground">
                      {market.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <p className="font-body text-[15px] text-foreground/80 leading-relaxed">
                  Experienced with US, UK, Japan, Korea retail programs.
                  Supporting CMT / CMPT / FOB production across all markets.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Client Types */}
          <Reveal direction="right" delay={200}>
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-navy/50 mb-4">
                Who We Work With
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wide text-foreground mb-8">
                Types of Clients
              </h2>
              <div className="space-y-5">
                {clientTypes.map((client, i) => (
                  <div
                    key={client.title}
                    className="flex gap-4 items-start group"
                  >
                    <div className="mt-1 w-8 h-8 bg-navy flex-shrink-0 flex items-center justify-center">
                      <span className="font-body text-xs font-semibold text-white">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-body text-[15px] font-semibold text-foreground mb-1">
                        {client.title}
                      </h4>
                      <p className="font-body text-[15px] text-foreground/75 leading-relaxed">
                        {client.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-14">
          <Reveal>
            <div className="flex items-stretch gap-10 md:gap-16">
              <h2 className="font-display text-4xl md:text-5xl font-light tracking-wide text-foreground [writing-mode:vertical-lr] rotate-180 shrink-0">
                Partners
              </h2>
              <div className="w-[2px] bg-navy shrink-0" />
              <div className="flex-1">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-10">
                  {partnerLogos.slice(0, 4).map((logo, i) => (
                    <div key={i} className="flex items-center justify-center py-4">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-20 md:h-28 w-auto max-w-[200px] object-contain hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
                  {partnerLogos.slice(4).map((logo, i) => (
                    <div key={i} className="flex items-center justify-center py-4">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-20 md:h-28 w-auto max-w-[200px] object-contain hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-10 md:py-14">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wide text-foreground mb-6">
              Ready to Work Together?
            </h2>
            <p className="font-body text-base text-foreground/80 leading-relaxed max-w-xl mx-auto mb-10">
              Let us help you source and produce high-quality apparel from
              Vietnam. Contact us to discuss your next project.
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

export default AboutPage;
