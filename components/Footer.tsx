import { Phone } from "lucide-react";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";
import { siteConfig } from "@/lib/config";

const SITE = "https://www.airmaxenerji.com.tr";

const menu = [
  { label: "Ana Sayfa", href: `${SITE}/` },
  { label: "Ürünler", href: `${SITE}/urunler` },
  { label: "Hakkımızda", href: `${SITE}/hakkimizda` },
  { label: "Neden Airmax Isı Pompası?", href: `${SITE}/neden-airmax` },
  { label: "Blog", href: `${SITE}/blog` },
  { label: "Bayilik", href: "#basvuru" },
  { label: "İletişim", href: "#basvuru" },
];

const legal = [
  "Şartlar ve Koşullar",
  "Gizlilik Politikası",
  "Yasal Uyarılar",
  "Veri Sözleşmesi",
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        {/* marka + tanıtım */}
        <div>
          <Logo className="text-white" />
          <p className="mt-5 max-w-sm text-sm text-white/70">
            En yeni Airmax ısı pompası modellerimizi ve özel fırsatlarımızı
            kaçırmayın! Uzman ekibimizden hemen detaylı bilgi alın.
          </p>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
        </div>

        {/* menü */}
        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
            Menü
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {menu.map((m) => (
              <li key={m.label}>
                <a
                  href={m.href}
                  target={m.href.startsWith("#") ? undefined : "_blank"}
                  rel={m.href.startsWith("#") ? undefined : "noopener noreferrer"}
                  className="transition-colors hover:text-white"
                >
                  {m.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* takip */}
        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
            Bizi Takip Edin
          </h3>
          <SocialIcons className="mt-4" />
          <p className="mt-6 text-sm text-white/70">Bizimle İletişimde Kalın</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-white/50 md:flex-row md:items-center md:justify-between md:px-8">
          <span>
            © {new Date().getFullYear()} AIRMAX, tüm hakları saklıdır.
          </span>
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {legal.map((l) => (
              <a key={l} href="/kvkk" className="hover:text-white/80">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
