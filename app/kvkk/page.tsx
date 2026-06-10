import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Airmax Bayilik",
  robots: { index: false, follow: false },
};

export default function KvkkPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-12 md:px-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-navy hover:underline">
        <ArrowLeft className="h-4 w-4" />
        Ana Sayfaya Dön
      </Link>

      <h1 className="mt-6 font-heading text-2xl font-black uppercase text-navy md:text-3xl">
        KVKK Aydınlatma Metni
      </h1>

      <div className="prose mt-6 space-y-4 text-muted">
        <p>
          {siteConfig.brand} olarak, 6698 sayılı Kişisel Verilerin Korunması
          Kanunu (&ldquo;KVKK&rdquo;) kapsamında veri sorumlusu sıfatıyla,
          bayilik başvuru formu aracılığıyla paylaştığınız kişisel verilerinizin
          işlenmesine ilişkin olarak sizi bilgilendirmek isteriz.
        </p>

        <h2 className="font-heading text-lg font-bold text-navy">
          İşlenen Veriler
        </h2>
        <p>
          Ad-soyad, telefon numarası, e-posta adresi, şehir/ilçe bilgisi ve
          mevcut iş alanı bilgileriniz; bayilik başvurunuzun değerlendirilmesi ve
          sizinle iletişime geçilmesi amacıyla işlenmektedir.
        </p>

        <h2 className="font-heading text-lg font-bold text-navy">
          İşleme Amacı
        </h2>
        <p>
          Verileriniz yalnızca bayilik başvurusu değerlendirme süreci, iletişim
          kurulması ve sözleşmesel ön görüşmelerin yürütülmesi amacıyla
          kullanılır. Açık rızanız olmaksızın üçüncü şahıslarla paylaşılmaz.
        </p>

        <h2 className="font-heading text-lg font-bold text-navy">
          Haklarınız
        </h2>
        <p>
          KVKK&apos;nın 11. maddesi uyarınca; verilerinize erişme, düzeltilmesini
          veya silinmesini talep etme haklarına sahipsiniz. Talepleriniz için{" "}
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-navy underline">
            {siteConfig.phone}
          </a>{" "}
          numarasından bize ulaşabilirsiniz.
        </p>

        <p className="text-sm text-muted">
          Bu metin örnek bir taslaktır; yayına almadan önce hukuk danışmanınız
          tarafından gözden geçirilmesi önerilir.
        </p>
      </div>
    </main>
  );
}
