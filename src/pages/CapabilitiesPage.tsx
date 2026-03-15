const capabilities = [
  {
    title: "Design",
    description:
      "Our in-house design team stays ahead of fashion trends, creating collections that resonate with consumers across all demographics. From concept to final product, we ensure every detail meets our high standards.",
  },
  {
    title: "Manufacturing",
    description:
      "With state-of-the-art production facilities and a network of trusted manufacturing partners, we deliver high-quality garments at scale. Our rigorous quality control processes ensure consistency across every piece.",
  },
  {
    title: "Distribution",
    description:
      "Our efficient distribution network spans across the United States and international markets. We work closely with major retailers to ensure timely delivery and optimal inventory management.",
  },
  {
    title: "Private Label",
    description:
      "We offer comprehensive private label services, working with retailers to develop exclusive lines that meet their specific brand requirements and customer expectations.",
  },
];

const CapabilitiesPage = () => {
  return (
    <div className="page-content">
      <h1 className="page-title mb-10">Capabilities</h1>

      <p className="text-center text-foreground/80 font-body text-sm leading-relaxed mb-12">
        Soho Apparel Group offers a full range of capabilities to meet the diverse needs of our 
        retail partners. From design and development to manufacturing and distribution, we provide 
        end-to-end solutions for the fashion industry.
      </p>

      <div className="space-y-10">
        {capabilities.map((cap) => (
          <div key={cap.title} className="text-center">
            <h3 className="font-display text-2xl tracking-wide text-foreground mb-3">
              {cap.title}
            </h3>
            <p className="text-foreground/70 font-body text-sm leading-relaxed max-w-2xl mx-auto">
              {cap.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CapabilitiesPage;
