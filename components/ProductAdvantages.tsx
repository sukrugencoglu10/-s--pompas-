import {
  Zap,
  Thermometer,
  Leaf,
  PiggyBank,
  Wrench,
  TrendingUp,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const advantages = [
  {
    icon: Zap,
    title: "%70'e Kadar Enerji Tasarrufu",
    desc: "1 birim elektrikle 3-5 birim ısı üretir. Yüksek verimlilik, düşük fatura.",
  },
  {
    icon: Thermometer,
    title: "Isıtma + Soğutma + Sıcak Su",
    desc: "Tek cihazda 3'ü 1 arada sistem. A+++ verimlilikle yıl boyu konfor.",
  },
  {
    icon: Leaf,
    title: "Çevre Dostu",
    desc: "Sıfır yerel emisyon, düşük karbon ayak izi. Geleceğin teknolojisi.",
  },
  {
    icon: PiggyBank,
    title: "Düşük İşletme Maliyeti",
    desc: "Doğalgaza kıyasla %60'a varan tasarruf. Hızlı geri ödeme.",
  },
  {
    icon: Wrench,
    title: "Uzun Ömür",
    desc: "20+ yıl kullanım ömrü. -35°C'ye kadar kararlı performans.",
  },
  {
    icon: TrendingUp,
    title: "Artan Talep",
    desc: "Her yıl %30 büyüyen pazar. Satması kolay, geleceği parlak ürün.",
  },
];

export default function ProductAdvantages() {
  return (
    <section className="bg-surface">
      <div className="section">
        <SectionHeading
          center
          title="Sattığınız Ürüne Güvenin"
          description="Airmax ısı pompaları, müşterinize sunacağınız net faydalarla satışı kolaylaştırır."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-navy/40 hover:shadow-lg hover:shadow-navy/5"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy/10 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
