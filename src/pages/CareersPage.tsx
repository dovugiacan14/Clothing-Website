const CareersPage = () => {
  return (
    <div className="page-content">
      <h1 className="page-title mb-10">Career Opportunities</h1>

      <div className="text-foreground/80 font-body text-sm leading-relaxed mb-12">
        <p>
          We are super excited that you are considering joining our SOHO APPAREL GROUP family. 
          We are an equal opportunity employer and are always looking for motivated and passionate 
          people who are committed making our company the best place to work. We offer a comprehensive 
          and affordable benefits package to help our employees achieve a healthy work-life balance. 
          If you are a team player who enjoys working in a diverse environment, meeting new people, 
          and is up to for a challenge, then our door is open to you.
        </p>
      </div>

      <h2 className="font-display text-3xl tracking-wide text-foreground mb-4">
        Current Openings
      </h2>

      <p className="text-foreground/60 font-body text-sm mb-12">
        We have no current openings available.
      </p>

      <p className="text-foreground/70 font-body text-sm">
        Please send resume to{" "}
        <a
          href="mailto:info@sohoapparelgroup.com"
          className="text-navy-light underline underline-offset-2 hover:opacity-70 transition-opacity"
        >
          info@sohoapparelgroup.com
        </a>{" "}
        or mail resume to our address.
      </p>
    </div>
  );
};

export default CareersPage;
