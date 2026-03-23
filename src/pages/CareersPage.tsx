import { Reveal } from "@/hooks/useScrollReveal";

const CareersPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-navy/50 mb-4">
              Join Our Team
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-wide text-foreground leading-[1.1] mb-6">
              Career Opportunities
            </h1>
            <div className="w-16 h-[2px] bg-navy mb-8" />
            <p className="font-body text-[17px] text-foreground/90 leading-[1.8]">
              We are super excited that you are considering joining our Central
              Apparel family. We are an equal opportunity employer and are always
              looking for motivated and passionate people who are committed to
              making our company the best place to work.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Benefits */}
      <section className="bg-navy/[0.03]">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wide text-foreground mb-6">
                Why Work With Us
              </h2>
              <div className="w-16 h-[2px] bg-navy mx-auto mb-8" />
              <p className="font-body text-[17px] text-foreground/85 leading-[1.8]">
                We offer a comprehensive and affordable benefits package to help
                our employees achieve a healthy work-life balance. If you are a
                team player who enjoys working in a diverse environment, meeting
                new people, and is up for a challenge, then our door is open to
                you.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Current Openings */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <Reveal>
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-navy/50 mb-4">
              Openings
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wide text-foreground mb-6">
              Current Openings
            </h2>
            <div className="w-16 h-[2px] bg-navy mb-8" />
            <p className="font-body text-[17px] text-foreground/80 leading-[1.8]">
              We have no current openings available.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Contact */}
      <section className="bg-navy/[0.03]">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wide text-foreground mb-6">
                Get In Touch
              </h2>
              <p className="font-body text-[17px] text-foreground/85 leading-[1.8]">
                Please send your resume to{" "}
                <a
                  href="mailto:info@centralapparel.com"
                  className="text-navy font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  info@centralapparel.com
                </a>{" "}
                or mail your resume to our address.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
