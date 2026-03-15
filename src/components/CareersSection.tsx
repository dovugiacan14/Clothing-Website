import { Briefcase, MapPin, Clock } from "lucide-react";

const jobs = [
  { title: "Nhà thiết kế thời trang", location: "Hà Nội", type: "Toàn thời gian" },
  { title: "Quản lý sản xuất", location: "TP. Hồ Chí Minh", type: "Toàn thời gian" },
  { title: "Chuyên viên Marketing", location: "Hà Nội", type: "Toàn thời gian" },
];

const CareersSection = () => {
  return (
    <section id="careers" className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">Tuyển dụng</p>
          <h2 className="section-title text-foreground">Gia nhập đội ngũ</h2>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="bg-background p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <Briefcase className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                <h3 className="font-display text-xl text-foreground group-hover:text-navy-light transition-colors">{job.title}</h3>
              </div>
              <div className="flex items-center gap-6 text-muted-foreground text-xs tracking-wide font-body">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                  {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                  {job.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
