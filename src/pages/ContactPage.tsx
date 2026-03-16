import { Reveal } from "@/hooks/useScrollReveal";

const ContactPage = () => {
  return (
    <div className="page-content">
      <Reveal>
        <h1 className="page-title mb-10">Contact Us</h1>
      </Reveal>

      <div className="text-center space-y-8">
        <Reveal delay={100}>
          <div>
            <h3 className="font-display text-xl tracking-wide text-foreground mb-2">Address</h3>
            <p className="text-foreground/70 font-body text-sm">15025 Proctor Ave<br />City of Industry, CA 91746</p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div>
            <h3 className="font-display text-xl tracking-wide text-foreground mb-2">Phone</h3>
            <p className="text-foreground/70 font-body text-sm">626-279-2808</p>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div>
            <h3 className="font-display text-xl tracking-wide text-foreground mb-2">Email</h3>
            <p className="text-foreground/70 font-body text-sm">
              <a href="mailto:info@sohoapparelgroup.com" className="text-navy-light underline underline-offset-2 hover:opacity-70 transition-opacity">
                info@sohoapparelgroup.com
              </a>
            </p>
          </div>
        </Reveal>

        {/* Contact Form */}
        <Reveal delay={400}>
          <div className="mt-12 max-w-lg mx-auto">
            <h3 className="font-display text-2xl tracking-wide text-foreground mb-6">Send Us a Message</h3>
            <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground font-body mb-1">Name</label>
                <input type="text" className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-foreground/40 transition-colors" />
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground font-body mb-1">Email</label>
                <input type="email" className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-foreground/40 transition-colors" />
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground font-body mb-1">Message</label>
                <textarea rows={5} className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-foreground/40 transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground py-3 text-xs tracking-[0.25em] uppercase font-body font-medium hover:opacity-90 transition-opacity">
                Submit
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default ContactPage;
