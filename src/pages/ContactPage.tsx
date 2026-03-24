import { Reveal } from "@/hooks/useScrollReveal";

const offices = [
  {
    title: "Vietnam Representative Office – Ho Chi Minh City",
    address: "48 Street No.1, HimLam Residence, TanHung Ward, Viet Nam",
    contact: "Hoang Tran",
    phone: "(+84) 935-105-799",
  },
  {
    title: "US Market Representative - United States",
    address: "2009 Lorelle Ct, Allen, Texas 75013, United States",
    contact: "Mai Trang Ngo",
    phone: "(+1) 469-865-7149",
  },
  {
    title: "Production & Factory Network – Old Binh Dinh (New Gia Lai)",
    address: "14 Luong Dinh Cua, An Nhon Dong Ward, Gia Lai",
    contact: "Tung Ngo",
    phone: "(+84) 935-158-208",
  },
];

const ContactPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <Reveal direction="left">
            <div>
              <h1 className="font-display text-5xl md:text-7xl font-bold tracking-wide text-foreground leading-[1.1] mb-6">
                Contact Us
              </h1>
              <div className="w-16 h-[2px] bg-navy mb-8" />
              <p className="font-body text-[17px] text-foreground/85 leading-[1.8] mb-2">
                Apparel sourcing and production support in Vietnam
              </p>
              <p className="font-body text-[17px] text-foreground/80 leading-[1.8]">
                CMT / CMPT / FOB services for global buyers
              </p>
            </div>
          </Reveal>

          <Reveal direction="right" delay={200}>
            <div className="space-y-6">
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-navy/50 mb-2">
                  Phone / WhatsApp
                </p>
                <a
                  href="tel:+84935105799"
                  className="font-body text-[17px] font-semibold text-foreground hover:text-navy transition-colors"
                >
                  (+84) 935-105-799
                </a>
                <span className="font-body text-[15px] text-foreground/70 ml-2">
                  Hoang Tran (Ray)
                </span>
              </div>
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-navy/50 mb-2">
                  Email
                </p>
                <a
                  href="mailto:info@centralapparel.com"
                  className="font-body text-[17px] font-semibold text-navy underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  info@centralapparel.com
                </a>
              </div>
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-navy/50 mb-2">
                  Website
                </p>
                <a
                  href="https://www.centralapparel.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[17px] font-semibold text-navy underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  www.centralapparel.co
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-navy/[0.03]">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <Reveal>
            <div className="mb-10">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-navy/50 mb-4">
                Our Offices
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wide text-foreground">
                Office Locations
              </h2>
              <div className="w-16 h-[2px] bg-navy mt-6" />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, i) => (
              <Reveal key={office.title} delay={i * 150}>
                <div className="bg-white border border-border/50 p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-10 h-10 bg-navy/5 flex items-center justify-center mb-5">
                    <span className="font-display text-lg font-bold text-navy">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-body text-[15px] font-bold text-foreground mb-4 leading-tight">
                    {office.title}
                  </h3>
                  <p className="font-body text-[15px] text-foreground/70 leading-[1.7] mb-4">
                    {office.address}
                  </p>
                  <div className="border-t border-border/50 pt-4 space-y-1">
                    <p className="font-body text-[14px] text-foreground/60 leading-[1.7]">
                      Contact: {office.contact}
                    </p>
                    <p className="font-body text-[14px] text-foreground/60 leading-[1.7]">
                      Phone:{" "}
                      <a
                        href={`tel:${office.phone.replace(/[\s-]/g, "")}`}
                        className="text-navy-light hover:text-navy transition-colors font-semibold"
                      >
                        {office.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
