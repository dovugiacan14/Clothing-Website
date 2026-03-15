import aboutImage from "@/assets/about-studio.jpg";

const AboutPage = () => {
  return (
    <div className="page-content">
      <h1 className="page-title mb-10">About Us</h1>

      <div className="space-y-6 text-foreground/80 font-body text-sm leading-relaxed text-center">
        <p>
          Soho Apparel Group is a leading apparel company specializing in the design, manufacturing, 
          and distribution of women's clothing. With over 20 years of industry experience, we have 
          established ourselves as a trusted partner for major retailers across the United States and 
          internationally.
        </p>
        <p>
          Our commitment to quality, innovation, and customer satisfaction has been the cornerstone 
          of our success. We pride ourselves on our ability to deliver on-trend fashion at competitive 
          prices while maintaining the highest standards of craftsmanship.
        </p>
        <p>
          From our headquarters in the City of Industry, California, we manage a comprehensive 
          supply chain that ensures timely delivery and consistent quality across all our product lines.
        </p>
      </div>

      <div className="mt-12">
        <img
          src={aboutImage}
          alt="Design studio workspace"
          className="w-full h-[400px] object-cover"
        />
      </div>
    </div>
  );
};

export default AboutPage;
