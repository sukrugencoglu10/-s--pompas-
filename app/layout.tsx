import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import Script from "next/script";
import { siteConfig } from "@/lib/config";
import "./globals.css";

// airmaxenerji.com.tr ile aynı tipografi
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const title = "Airmax Isı Pompası Bayiliği | Türkiye Geneli Bayilik Başvurusu";
const description =
  "Airmax ısı pompası bayisi olun. Yüksek kar marjı, teknik destek ve bölgesel haklar. 24 saat içinde sizi arayalım. Hemen başvurun.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  keywords: [
    "Airmax bayilik",
    "ısı pompası bayiliği",
    "ısı pompası bayi başvurusu",
    "ısı pompası distribütörlük",
    "Airmax ısı pompası",
    "bayilik fırsatı",
    "enerji verimliliği bayilik",
  ],
  alternates: { canonical: "/" },
  applicationName: "Airmax Bayilik",
  authors: [{ name: "Airmax" }],
  openGraph: {
    title: "Airmax Bayilik Başvurusu",
    description:
      "Türkiye'nin büyüyen ısı pompası pazarında Airmax ile kazanın.",
    url: siteConfig.url,
    siteName: "Airmax Bayilik",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/images/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Airmax ısı pompası bayilik fırsatı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airmax Bayilik Başvurusu",
    description:
      "Türkiye'nin büyüyen ısı pompası pazarında Airmax ile kazanın.",
    images: ["/images/hero-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#13385A",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Airmax Isı Pompaları",
  description: "Enerji verimli ısı pompası bayilik fırsatı",
  url: siteConfig.url,
  telephone: siteConfig.phone,
  image: `${siteConfig.url}/images/hero-1.jpg`,
  areaServed: { "@type": "Country", name: "Türkiye" },
  address: { "@type": "PostalAddress", addressCountry: "TR" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = siteConfig.gtmId;
  const metaPixelId = siteConfig.metaPixelId;

  return (
    <html lang="tr" className={lato.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Meta Pixel Code */}
        {metaPixelId && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${metaPixelId}');
fbq('track', 'PageView');`}
          </Script>
        )}
        {gtmId && (
          <Script id="gtm-head" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        )}
      </head>
      <body className="font-sans">
        {/* klavye kullanıcıları için içeriğe atla bağlantısı */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          İçeriğe geç
        </a>
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {/* Meta Pixel (noscript) */}
        {metaPixelId && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}
