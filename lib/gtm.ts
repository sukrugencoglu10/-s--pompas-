/** Google Tag Manager dataLayer yardımcıları */

type DataLayerEvent = Record<string, unknown> & { event: string };

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
    fbq?: (...args: unknown[]) => void;
  }
}

/** Meta Pixel standart olayı gönderir (pixel yüklüyse) */
export function trackMetaEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.fbq) return;
  if (params) {
    window.fbq("track", event, params);
  } else {
    window.fbq("track", event);
  }
}

export function pushEvent(payload: DataLayerEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

/** Bayilik başvurusu başarıyla gönderildiğinde tetiklenir (Ads conversion) */
export function trackLeadSubmit(data: { sehir: string; is_alani: string }) {
  pushEvent({
    event: "bayilik_basvuru_gonderildi",
    formData: {
      sehir: data.sehir,
      is_alani: data.is_alani,
    },
  });
}

/** WhatsApp / telefon gibi iletişim etkileşimleri */
export function trackContactClick(channel: "whatsapp" | "phone") {
  pushEvent({ event: "iletisim_tiklama", channel });
}
