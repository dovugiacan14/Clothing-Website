const brands = [
  "SOHO LADY",
  "SOHO GIRLS",
  "SOHO KIDS",
  "SOHO SPORTS",
  "SOHO MATERNITY",
  "SOHO BLUE",
  "LOVE SOHO",
  "EMMA & ELSA",
  "LARK & GREY",
  "COCO & SHAY",
  "CLASSIC CONCEPTS",
  "FIGUR ACTIV",
  "LUNA PEAK",
  "SWEET STORIES",
  "BLVD SUPPLY",
];

const BrandsPage = () => {
  return (
    <div className="page-content">
      <h1 className="page-title mb-10">Our Brand</h1>

      <div className="space-y-6 text-foreground/80 font-body text-sm leading-relaxed text-center mb-16">
        <p>
          Our company portfolio boasts over 20 proprietary brands, allowing us to meet diverse 
          market demands.
        </p>
        <p>
          Some of our standout labels include SOHO LADY, SOHO GIRLS, SOHO KIDS, SOHO SPORTS, 
          SOHO MATERNITY, SOHO BLUE, LOVE SOHO, EMMA & ELSA, LARK & GREY, and COCO & SHAY. 
          These brands span various demographics, from kids' fashion to activewear, maternity wear, 
          and beyond, providing a full spectrum of choices for fashion-forward consumers.
        </p>
        <p>
          Moreover, we are the proud owners of the trendy U.S. streetwear brand BLVD, which focuses 
          on men's clothing, footwear, and accessories, gaining a strong following in the street 
          fashion scene.
        </p>
      </div>

      {/* Brand logos grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        {brands.map((brand) => (
          <div
            key={brand}
            className="flex items-center justify-center py-8 border border-border hover:border-foreground/30 transition-colors duration-300"
          >
            <span className="font-display text-lg md:text-xl tracking-[0.15em] text-foreground/60">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsPage;
