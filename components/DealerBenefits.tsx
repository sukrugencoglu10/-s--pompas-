import { BadgePercent, GraduationCap, MapPin, Megaphone } from "lucide-react";
import SectionHeading from "./SectionHeading";

const benefits = [
  {
    icon: BadgePercent,
    title: "Yüksek Kar Marjı",
    desc: "Sektörün üzerinde komisyon oranları ve cazip bayi fiyatlandırması ile yatırımınızı hızla geri kazanın.",
  },
  {
    icon: GraduationCap,
    title: "Teknik Eğitim & Destek",
    desc: "Ürün eğitiminden montaja, satıştan satış sonrası servise kadar tam kapsamlı destek sunuyoruz.",
  },
  {
    icon: MapPin,
    title: "Bölgesel Haklar",
    desc: "Münhasır bölge koruması ile rekabetten uzak, kendi pazarınızda güçlü bir konum elde edin.",
  },
  {
    icon: Megaphone,
    title: "Pazarlama Materyalleri",
    desc: "Hazır kataloglar, dijital içerikler ve reklam desteği ile satışlarınızı en baştan hızlandırın.",
  },
];

export default function DealerBenefits() {
  return (
    <section className="bg-white">
      <div className="section">
        <SectionHeading
          center
          title="Bu Bayiliği Neden Almalısınız?"
          description="Airmax bayiliği, sadece ürün satışı değil; uçtan uca desteklenen bir iş ortaklığıdır."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="flex gap-5 rounded-xl border border-line bg-surface p-7"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-navy text-white">
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <span className="font-heading text-sm font-bold text-navy/40">
                  0{i + 1}
                </span>
                <h3 className="font-heading text-xl font-bold text-navy">
                  {title}
                </h3>
                <p className="mt-2 text-muted">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
