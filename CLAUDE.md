# CLAUDE.md — Airmax Isı Pompası Bayilik Landing Page

## Proje Genel Bakış

**Müşteri:** Airmax (Isı Pompası Üreticisi / Dağıtıcısı)
**Amaç:** Google Ads ve Meta Ads trafiğini karşılayacak, bayilik başvurusu toplayan yüksek dönüşümlü landing page
**Öncelik:** Google Ads'e optimize, lead generation (bayilik başvurusu)
**Dil:** Türkçe
**Ton:** Profesyonel, güven verici, fırsatı ön plana çıkaran

---

## Teknik Gereksinimler

### Stack
- **Framework:** Next.js 14 (App Router) veya Vite + React 18
- **Styling:** Tailwind CSS
- **Form:** React Hook Form + Zod validasyon
- **Animasyon:** Framer Motion (hafif, performans öncelikli)
- **Icons:** Lucide React
- **Analytics:** Google Tag Manager (GTM) + Google Analytics 4
- **Dönüşüm Takibi:** Google Ads Conversion Tag (form submit event)

### Performans Hedefleri (Google Ads Quality Score için kritik)
- Lighthouse Performance skoru: ≥ 90
- LCP (Largest Contentful Paint): < 2.5s
- CLS (Cumulative Layout Shift): < 0.1
- FID / INP: < 100ms
- Mobil öncelikli tasarım (tüm Google Ads tıklamalarının %60+ mobilde)

### Hosting & Deploy
- Vercel veya Netlify (Edge Functions ile)
- Custom domain: `bayi.airmax.com.tr` (veya belirtilecek)
- SSL zorunlu

---

## Sayfa Yapısı (Bölüm Sırası)

### 1. HERO SECTION (Above the Fold)
**Amaç:** İlk 3 saniyede ziyaretçiyi tutmak

**İçerik:**
- Başlık: `"Airmax Bayisi Olun, Büyüyen Isı Pompası Pazarında Yerinizi Alın"`
- Alt başlık: `"Türkiye'nin yükselen enerji verimliliği pazarında güçlü bir marka ile kazanın. Sınırlı bölge bayiliği için hemen başvurun."`
- CTA Butonu (ana): `"Bayilik Başvurusu Yap →"` (forma scroll)
- CTA Butonu (ikincil): WhatsApp ikonu + `"WhatsApp'tan Bilgi Al"`
- Sağ taraf: Hero görsel (modern ısı pompası cihazı, temiz arka plan)
- Rozet/badge: `"2024'te 500+ Aktif Bayi"` veya `"Türkiye Geneli Bayilik"` (social proof)

**Renk:** Açık arka plan (#F8FAFC veya beyaz), mavi/yeşil aksanlar

---

### 2. PROBLEM → ÇÖZÜM KÖPRÜSÜ
**Amaç:** Empati kur, fırsatı göster

**İçerik:**
- Başlık: `"Neden Isı Pompası Bayiliği?"`
- Sol: Güncel pazar verileri (enerji fiyatları, doğalgaz artışı)
- Sağ: Isı pompasına geçiş talebi artışı
- Mesaj: Talep var, pazar büyüyor, doğru marka ile girin

---

### 3. ISI POMPASI AVANTAJLARI (Ürün USP'leri)
**Amaç:** Ziyaretçinin satacağı ürüne güven duyması

**6 Kart formatında:**

| İkon | Başlık | Açıklama |
|------|--------|----------|
| ⚡ | %70'e Kadar Enerji Tasarrufu | 1 birim elektrikle 3-5 birim ısı üretir |
| 🌡️ | Isıtma + Soğutma + Sıcak Su | 3'ü 1 arada sistem |
| 🌿 | Çevre Dostu | Sıfır emisyon, karbon ayak izi yok |
| 💰 | Düşük İşletme Maliyeti | Doğalgaza kıyasla %60 tasarruf |
| 🔧 | Uzun Ömür | 20+ yıl kullanım ömrü |
| 📈 | Artan Talep | Her yıl %30 büyüyen pazar |

---

### 4. BAYİLİK AVANTAJLARI (B2B USP'leri)
**Amaç:** "Bu bayiliği neden alayım?" sorusunu yanıtla

**4 büyük kart:**

1. **Yüksek Kar Marjı** — Sektörün üstünde komisyon oranları
2. **Teknik Eğitim & Destek** — Başlangıçtan satışa tam destek
3. **Bölgesel Haklar** — Münhasır bölge koruması
4. **Pazarlama Materyalleri** — Hazır katalog, dijital içerik, reklam desteği

---

### 5. SÜREÇ (Nasıl Bayi Olunur?)
**Amaç:** Adımları netleştir, harekete geçir

**3-4 adımlı yatay timeline:**
1. Formu Doldur (2 dakika)
2. Yetkili Araması (24 saat içinde)
3. Değerlendirme Görüşmesi
4. Bayilik Sözleşmesi & Başlangıç

---

### 6. SOSYAL KANIT (Social Proof)
**Amaç:** Güven oluştur

**İçerik seçenekleri (A/B test):**
- Mevcut bayi sayısı: `"500+ Aktif Bayi"`
- Harita: Türkiye genelindeki bayi noktaları
- Bayi yorumları (3 adet, fotoğraflı)
- Logolar: Sertifikalar, enerji verimliliği belgeleri

---

### 7. BAYILIK BAŞVURU FORMU (Ana Dönüşüm)
**Amaç:** Lead topla

**Form Alanları (az tut, conversion düşmesini önle):**
```
- Ad Soyad *
- Telefon Numarası * (WhatsApp tercihli checkbox)
- E-posta *
- Şehir / İlçe *
- Mevcut İş Alanınız (dropdown: Klima/Isıtma, İnşaat, Diğer, Yeni Girişim)
- Mesajınız (opsiyonel)
- KVKK Onayı * (checkbox)
```

**Form Başlığı:** `"Bayilik Başvurusu — 24 Saat İçinde Sizi Arayalım"`
**CTA Butonu:** `"Başvurumu Gönder — Ücretsiz Görüşme Ayarla"`
**Güven sinyali:** 🔒 `"Bilgileriniz güvende, 3. şahıslarla paylaşılmaz"`

---

### 8. SSS (Sıkça Sorulan Sorular)
**Amaç:** Itirazları önceden kır, sayfada tut

**Sorular:**
- Bayilik için ne kadar sermaye gerekiyor?
- Teknik bilgi gerekli mi?
- Münhasır bölge alabilir miyim?
- Isı pompası doğalgazın yerini alabilir mi?
- Montaj eğitimi veriyor musunuz?

**Format:** Accordion (açılır-kapanır, sayfa hızı için)

---

### 9. SON CTA BANNER
**Amaç:** Formu görmeden kaydıranları yakalamak

**İçerik:**
- `"Bölgenizde hâlâ bayilik açık! Sınırlı kontenjan."`
- Buton: `"Hemen Başvur"` (forma anchor)
- WhatsApp butonu

---

### 10. FOOTER
**Minimal tutulacak (dikkat dağıtma)**
- Logo, adres, telefon
- KVKK & Gizlilik Politikası linki
- © 2024 Airmax

---

## CTA Stratejisi

### Birincil CTA
```
Metin: "Bayilik Başvurusu Yap"
Renk: #0EA5E9 (sky-500) veya #16A34A (green-600)
Boyut: Büyük, tıklanabilir alan min 44px yükseklik
Konum: Hero, form bölümü, son banner
```

### WhatsApp Floating Button
```
Pozisyon: fixed, bottom-right, z-index: 50
Boyut: 60x60px yuvarlak
Renk: #25D366 (WhatsApp yeşili)
İkon: WhatsApp SVG
Hover tooltip: "WhatsApp'tan Ulaşın"
Link: https://wa.me/90XXXXXXXXXX?text=Merhaba%2C+Airmax+bayili%C4%9Fi+hakk%C4%B1nda+bilgi+almak+istiyorum.
```

### Urgency Elementleri (Gerçekçi olacak)
- `"Bu ay 3 bölgede kontenjan dolmak üzere"` (hero veya form üstü)
- `"Başvurunuz 24 saat içinde değerlendirilir"`

---

## Renk Paleti

```css
/* Ana Renkler */
--primary: #0EA5E9;        /* Sky Blue — güven, teknoloji */
--primary-dark: #0369A1;   /* Koyu mavi — hover */
--secondary: #16A34A;      /* Yeşil — çevre, tasarruf */
--accent: #F59E0B;         /* Amber — urgency, badge */

/* Arka Plan (Açık Tonlar) */
--bg-base: #FFFFFF;
--bg-subtle: #F8FAFC;      /* Bölümler arası fark için */
--bg-card: #F1F5F9;        /* Kartlar */

/* Metin */
--text-primary: #0F172A;   /* Başlıklar */
--text-secondary: #475569; /* Gövde metni */
--text-muted: #94A3B8;     /* İkincil bilgi */

/* Sınır */
--border: #E2E8F0;
```

---

## Tipografi

```css
/* Google Fonts */
font-family: 'Inter', sans-serif;  /* Gövde metni */
font-family: 'Plus Jakarta Sans', sans-serif;  /* Başlıklar — modern, güçlü */

/* Ölçekler */
H1: 48px (desktop) / 32px (mobile), font-weight: 800
H2: 36px / 26px, font-weight: 700
H3: 24px / 20px, font-weight: 600
Body: 16px / 15px, font-weight: 400
Small: 14px
```

---

## Google Ads Uyumu (Quality Score)

### Message Match
Reklam başlığı ile landing page H1 birebir eşleşmeli:
```
Reklam: "Airmax Isı Pompası Bayiliği | Başvurun"
Landing H1: "Airmax Bayisi Olun..."
```

### UTM Parametresi Takibi
```javascript
// URL'den UTM parametrelerini yakala ve form ile gönder
const urlParams = new URLSearchParams(window.location.search);
const utmSource = urlParams.get('utm_source');
const utmCampaign = urlParams.get('utm_campaign');
// Hidden input olarak forma ekle
```

### Google Tag Manager Entegrasyonu
```javascript
// Form submit event
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'bayilik_basvuru_gonderildi',
  formData: {
    sehir: formValues.sehir,
    is_alani: formValues.isAlani
  }
});
```

### Conversion Tracking
- **Event:** Form submit başarılı
- **Value:** 1 (lead değeri isterseniz ayarlanabilir)
- **Teşekkür sayfası:** `/tesekkurler` — ayrı URL ile conversion tracking

---

## Mobil Öncelikli Tasarım Kuralları

```
- Minimum tap target: 44x44px
- Form alanları: font-size min 16px (iOS zoom önleme)
- Hero section: tek kolon, CTA butonları tam genişlik
- WhatsApp butonu: mobilde daha büyük (64x64px)
- Lazy loading: hero sonrası tüm görseller
- Swipe-friendly: kartlar mobilde yatay kaydırmalı
```

---

## Form Validasyon Kuralları (Zod)

```typescript
const bayilikFormSchema = z.object({
  adSoyad: z.string().min(3, "En az 3 karakter giriniz"),
  telefon: z.string()
    .regex(/^(\+90|0)?[5][0-9]{9}$/, "Geçerli bir Türkiye telefon numarası giriniz"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  sehir: z.string().min(2, "Şehir bilgisi zorunludur"),
  isAlani: z.enum(["klima-isitma", "insaat", "diger", "yeni-girisim"]),
  mesaj: z.string().optional(),
  kvkkOnay: z.boolean().refine(val => val === true, "KVKK onayı zorunludur"),
  whatsappOnay: z.boolean().optional(),
});
```

---

## API & Backend

### Form Submit Endpoint
```
POST /api/basvuru
Content-Type: application/json

{
  "adSoyad": "string",
  "telefon": "string",
  "email": "string",
  "sehir": "string",
  "isAlani": "string",
  "mesaj": "string",
  "kvkkOnay": true,
  "whatsappOnay": true,
  "utm_source": "google",
  "utm_campaign": "bayilik-2024",
  "timestamp": "ISO string"
}
```

### Response Akışı
1. Form submit → loading state
2. API success → teşekkür modalı + GTM event
3. API error → hata mesajı + tekrar deneme
4. Rate limiting: aynı IP'den 5 dakikada 3+ başvuruya engel

### Veri Depolama Seçenekleri
- **Öneri A:** Google Sheets API (kolay bayi yönetimi)
- **Öneri B:** Supabase (PostgreSQL, ücretsiz tier)
- **Öneri C:** EmailJS + CRM entegrasyonu

---

## SEO (Organik trafik için temel)

```html
<!-- Meta Tags -->
<title>Airmax Isı Pompası Bayiliği | Türkiye Geneli Bayilik Başvurusu</title>
<meta name="description" content="Airmax ısı pompası bayisi olun. Yüksek kar marjı, teknik destek ve bölgesel haklar. 24 saat içinde sizi arayalım. Hemen başvurun.">
<meta property="og:title" content="Airmax Bayilik Başvurusu">
<meta property="og:description" content="Türkiye'nin büyüyen ısı pompası pazarında Airmax ile kazanın.">

<!-- Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Airmax Isı Pompaları",
  "description": "Enerji verimli ısı pompası bayilik fırsatı"
}
</script>
```

---

## A/B Test Planı (Sonraki Aşama)

| Test | Varyant A | Varyant B | Metrik |
|------|-----------|-----------|--------|
| Hero CTA | "Bayilik Başvurusu Yap" | "Ücretsiz Görüşme Ayarla" | Click-through |
| Form alanı | 6 alan | 4 alan (telefon+ad+şehir+kvkk) | Tamamlama oranı |
| Hero görsel | Ürün görseli | Mutlu bayi fotoğrafı | Bounce rate |
| Urgency | Var | Yok | Conversion rate |

---

## Dosya Yapısı

```
airmax-bayi-landing/
├── app/
│   ├── layout.tsx          # GTM, fonts, meta
│   ├── page.tsx            # Ana landing page
│   └── tesekkurler/
│       └── page.tsx        # Conversion confirmation
├── components/
│   ├── Hero.tsx
│   ├── ProblemSolution.tsx
│   ├── ProductAdvantages.tsx
│   ├── DealerBenefits.tsx
│   ├── HowItWorks.tsx
│   ├── SocialProof.tsx
│   ├── ApplicationForm.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   ├── WhatsAppButton.tsx  # Floating button
│   └── Footer.tsx
├── lib/
│   ├── validations.ts      # Zod schemas
│   ├── gtm.ts              # GTM helpers
│   └── api.ts              # Form submit
├── public/
│   ├── images/
│   │   ├── hero-heat-pump.webp
│   │   ├── dealer-map.webp
│   │   └── icons/
│   └── favicon.ico
└── CLAUDE.md               # Bu dosya
```

---

## Önemli Notlar & Kısıtlar

1. **Navigation menüsü olmamalı** — dikkat dağıtır, conversion düşürür
2. **Harici link minimum** — ziyaretçiyi sayfada tut
3. **Görseller WebP formatında** — sayfa hızı için
4. **Form telefon alanı:** `type="tel"` ve Türkiye formatı mask
5. **KVKK metni** hazır tutulmalı (hukuki zorunluluk)
6. **WhatsApp mesaj şablonu:** URL encode edilmiş hazır mesaj
7. **Teşekkür sayfası** ayrı URL olmalı (Google Ads conversion ölçümü için)
8. **Cookie banner** GDPR/KVKK uyumlu, hafif implementasyon

---

## Geliştirme Komutları

```bash
# Kurulum
npm install

# Geliştirme
npm run dev

# Build (production)
npm run build

# Lighthouse audit
npx lighthouse http://localhost:3000 --view

# Deploy (Vercel)
vercel --prod
```

---

## Referans & İlham Sayfaları

- Zess Isı Pompası Bayilik: https://www.zess.tr/
- Daikin Bayilik: https://www.daikin.com.tr/
- Genel landing page: Unbounce gallery (heat pump / HVAC kategorisi)

---

*Bu dosya Claude Code tarafından proje boyunca referans olarak kullanılacaktır. Her yeni bölüm eklendiğinde veya değiştirildiğinde bu dosyayı güncel tutun.*
