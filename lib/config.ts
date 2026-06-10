/**
 * Merkezi yapılandırma — telefon, WhatsApp, GTM gibi değerler tek yerden yönetilir.
 * Ortam değişkenleri tanımlı değilse makul varsayılanlar kullanılır.
 */

export const siteConfig = {
  brand: "Airmax",
  // Kanonik site adresi (SEO/OG/sitemap). Yayına alırken env ile ezilebilir.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bayi.airmaxenerji.com.tr",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "0850 000 00 00",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "905555555555",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  whatsappMessage:
    "Merhaba, Airmax bayiliği hakkında bilgi almak istiyorum.",
} as const;

/** Hazır, URL-encode edilmiş WhatsApp bağlantısı */
export function getWhatsAppLink(message: string = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
