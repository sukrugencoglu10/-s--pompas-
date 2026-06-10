import { Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";

const stats = [
  { value: "500+", label: "Aktif Bayi" },
  { value: "81", label: "İlde Hizmet" },
  { value: "%30", label: "Yıllık Pazar Büyümesi" },
  { value: "24 saat", label: "İçinde Geri Dönüş" },
];

const testimonials = [
  {
    name: "Mehmet Y.",
    city: "Bursa Bayisi",
    text: "Airmax ile bayiliğe başladıktan sonra ilk yılda hedeflerimi aştım. Teknik destek ekibi her zaman yanımda.",
  },
  {
    name: "Aylin K.",
    city: "İzmir Bayisi",
    text: "Bölgesel hak koruması sayesinde rekabet baskısı olmadan büyüdüm. Pazarlama materyalleri işimi çok kolaylaştırdı.",
  },
  {
    name: "Serkan D.",
    city: "Ankara Bayisi",
    text: "Klima sektöründen geçiş yaptım. Eğitim sürecinin ardından satışa hızlı başladım. Kar marjları gerçekten tatmin edici.",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-white">
      <div className="section">
        <SectionHeading
          center
          title="Türkiye Genelinde Güvenilen Marka"
          description="Yüzlerce bayi Airmax ile büyüyor. Siz de bu başarı hikâyesinin parçası olun."
        />

        {/* istatistikler — navy şerit */}
        <div className="mb-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-line md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-navy p-6 text-center text-white md:p-8">
              <div className="font-heading text-3xl font-black md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-white/80">{s.label}</div>
            </div>
          ))}
        </div>

        {/* yorumlar */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-line bg-white p-6"
            >
              <Quote className="h-8 w-8 text-navy/20" />
              <div className="my-3 flex gap-0.5 text-navy">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-navy" />
                ))}
              </div>
              <blockquote className="flex-1 text-sm text-muted">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 border-t border-line pt-4">
                <div className="font-bold text-navy">{t.name}</div>
                <div className="text-sm text-muted">{t.city}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
