import { ClipboardList, PhoneCall, Users, FileSignature } from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    icon: ClipboardList,
    title: "Formu Doldur",
    desc: "Sadece 2 dakikanızı ayırın, başvuru formunu doldurun.",
  },
  {
    icon: PhoneCall,
    title: "Yetkili Araması",
    desc: "24 saat içinde uzman ekibimiz sizi arayıp bilgilendirir.",
  },
  {
    icon: Users,
    title: "Değerlendirme Görüşmesi",
    desc: "Bölge, hedef ve koşulları birlikte değerlendiririz.",
  },
  {
    icon: FileSignature,
    title: "Sözleşme & Başlangıç",
    desc: "Bayilik sözleşmesini imzalayıp hızlıca satışa başlarsınız.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-surface">
      <div className="section">
        <SectionHeading
          center
          title="Nasıl Bayi Olunur?"
          description="4 basit adımda Airmax bayilik ailesine katılın."
        />

        <div className="relative grid gap-8 md:grid-cols-4">
          {/* bağlantı çizgisi (desktop) */}
          <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-navy/15 md:block" />

          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white">
                <Icon className="h-6 w-6" />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-navy ring-2 ring-navy">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-navy">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#basvuru" className="btn-primary">
            Hemen Başvur
          </a>
        </div>
      </div>
    </section>
  );
}
