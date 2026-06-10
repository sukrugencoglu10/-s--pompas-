import { NextResponse } from "next/server";
import { bayilikFormSchema } from "@/lib/validations";

/**
 * Basit bellek-içi rate limit: aynı IP'den 5 dakikada 3 başvuru.
 * Üretimde Upstash/Redis gibi kalıcı bir çözüme taşınmalıdır.
 */
const WINDOW_MS = 5 * 60 * 1000;
const MAX_REQUESTS = 3;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(ip, timestamps);
  return timestamps.length > MAX_REQUESTS;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Çok fazla başvuru. Lütfen daha sonra tekrar deneyin." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  const parsed = bayilikFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Form bilgileri geçersiz.", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const data = parsed.data;

  // TODO: Başvuruyu kalıcı bir hedefe yaz (Google Sheets / Supabase / e-posta).
  // Şimdilik sunucu loguna yazıyoruz; entegrasyon eklenince burası güncellenecek.
  console.log("[bayilik-basvuru]", {
    adSoyad: data.adSoyad,
    telefon: data.telefon,
    email: data.email,
    sehir: data.sehir,
    isAlani: data.isAlani,
    whatsappOnay: data.whatsappOnay ?? false,
    utm_source: data.utm_source,
    utm_campaign: data.utm_campaign,
    ip,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
