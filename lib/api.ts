import type { BayilikFormData } from "./validations";

export type SubmitResult =
  | { ok: true }
  | { ok: false; error: string };

/** UTM parametrelerini URL'den okur */
export function getUtmParams() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || undefined,
    utm_medium: params.get("utm_medium") || undefined,
    utm_campaign: params.get("utm_campaign") || undefined,
  };
}

/** Başvuruyu API'ye gönderir */
export async function submitBasvuru(data: BayilikFormData): Promise<SubmitResult> {
  try {
    const res = await fetch("/api/basvuru", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, timestamp: new Date().toISOString() }),
    });

    if (res.status === 429) {
      return { ok: false, error: "Çok fazla deneme yaptınız. Lütfen birkaç dakika sonra tekrar deneyin." };
    }
    if (!res.ok) {
      return { ok: false, error: "Başvuru gönderilemedi. Lütfen tekrar deneyin." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Bağlantı hatası. İnternet bağlantınızı kontrol edip tekrar deneyin." };
  }
}
