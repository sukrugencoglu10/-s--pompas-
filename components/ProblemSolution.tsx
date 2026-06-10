import { Flame, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function ProblemSolution() {
  return (
    <section className="bg-white">
      <div className="section">
        <SectionHeading
          center
          title="Neden Isı Pompası Bayiliği?"
          description="Enerji maliyetleri artıyor, tüketici verimli sistemlere yöneliyor. Talep büyürken doğru marka ile pazara girin."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-line bg-surface p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy/10 text-navy">
              <Flame className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-navy">
              Yükselen Enerji Maliyetleri
            </h3>
            <p className="mt-3 text-muted">
              Doğalgaz ve elektrik fiyatlarındaki sürekli artış, ev ve
              işletmeleri daha verimli ısıtma çözümleri aramaya itiyor. Geleneksel
              sistemler artık ekonomik değil.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• Doğalgaz faturalarında yıllık çift haneli artış</li>
              <li>• Verimsiz sistemlerde yüksek işletme gideri</li>
              <li>• Tüketici arayışı: &ldquo;daha az maliyet, daha çok konfor&rdquo;</li>
            </ul>
          </div>

          <div className="rounded-xl border border-navy/20 bg-navy/[0.04] p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy/10 text-navy">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-navy">
              Isı Pompasına Geçiş Talebi
            </h3>
            <p className="mt-3 text-muted">
              Devlet teşvikleri, çevre bilinci ve düşük işletme maliyeti ısı
              pompalarını standart hale getiriyor. Pazar her yıl büyüyor — şimdi
              girmek için doğru zaman.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• Her yıl %30 büyüyen ısı pompası pazarı</li>
              <li>• Yeni yapılarda artan tercih oranı</li>
              <li>• Sınırlı sayıda yetkili bayi = düşük rekabet</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
