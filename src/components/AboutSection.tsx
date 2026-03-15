import aboutImage from "@/assets/about-studio.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="section-subtitle mb-4">Về chúng tôi</p>
          <h2 className="section-title text-foreground mb-8">
            Tiên phong trong ngành thời trang
          </h2>
          <div className="space-y-5 text-muted-foreground font-body text-sm leading-relaxed">
            <p>
              Với hơn 20 năm kinh nghiệm trong ngành công nghiệp thời trang, Soho Apparel Group 
              tự hào là đơn vị hàng đầu trong lĩnh vực thiết kế, sản xuất và phân phối trang phục 
              cao cấp trên toàn cầu.
            </p>
            <p>
              Chúng tôi cam kết mang đến những sản phẩm chất lượng vượt trội, kết hợp giữa 
              nghệ thuật thiết kế tinh tế và công nghệ sản xuất hiện đại, đáp ứng mọi nhu cầu 
              của đối tác và khách hàng.
            </p>
          </div>
          <div className="mt-10 flex gap-12">
            <div>
              <p className="font-display text-4xl font-light text-foreground">20+</p>
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1 font-body">Năm kinh nghiệm</p>
            </div>
            <div>
              <p className="font-display text-4xl font-light text-foreground">50+</p>
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1 font-body">Thương hiệu</p>
            </div>
            <div>
              <p className="font-display text-4xl font-light text-foreground">30+</p>
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1 font-body">Quốc gia</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={aboutImage}
            alt="Fashion design studio"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 border border-foreground/10 translate-x-4 translate-y-4 -z-10" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
