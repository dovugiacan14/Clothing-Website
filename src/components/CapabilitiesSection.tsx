import { Scissors, Palette, Globe, TrendingUp } from "lucide-react";

const capabilities = [
  {
    icon: Palette,
    title: "Thiết kế",
    description: "Đội ngũ thiết kế sáng tạo, nắm bắt xu hướng thời trang quốc tế, mang đến những bộ sưu tập độc đáo.",
  },
  {
    icon: Scissors,
    title: "Sản xuất",
    description: "Nhà máy hiện đại với quy trình sản xuất khép kín, đảm bảo chất lượng cao nhất cho mỗi sản phẩm.",
  },
  {
    icon: Globe,
    title: "Phân phối",
    description: "Mạng lưới phân phối rộng khắp với đối tác tại hơn 30 quốc gia trên toàn thế giới.",
  },
  {
    icon: TrendingUp,
    title: "Phát triển",
    description: "Không ngừng đổi mới và phát triển bền vững, hướng tới tương lai xanh cho ngành thời trang.",
  },
];

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase font-body opacity-60 mb-4">Năng lực</p>
          <h2 className="section-title">Giải pháp toàn diện</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap) => (
            <div key={cap.title} className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 border border-primary-foreground/20 flex items-center justify-center group-hover:bg-primary-foreground/10 transition-all duration-300">
                  <cap.icon className="w-7 h-7 opacity-80" strokeWidth={1} />
                </div>
              </div>
              <h3 className="font-display text-xl tracking-wide mb-3">{cap.title}</h3>
              <p className="text-sm font-body opacity-60 leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
