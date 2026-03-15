import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase font-body opacity-60 mb-4">Liên hệ</p>
        <h2 className="section-title mb-12">Kết nối với chúng tôi</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center gap-3">
            <MapPin className="w-5 h-5 opacity-60" strokeWidth={1.5} />
            <p className="text-sm font-body opacity-80 leading-relaxed">
              Tầng 15, Tòa nhà ABC<br />
              Quận 1, TP. Hồ Chí Minh
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Phone className="w-5 h-5 opacity-60" strokeWidth={1.5} />
            <p className="text-sm font-body opacity-80">
              +84 (28) 1234 5678
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Mail className="w-5 h-5 opacity-60" strokeWidth={1.5} />
            <p className="text-sm font-body opacity-80">
              info@sohoapparel.com
            </p>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-primary-foreground/10">
          <p className="text-xs font-body opacity-40 tracking-widest">
            © 2026 SOHO APPAREL GROUP. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
