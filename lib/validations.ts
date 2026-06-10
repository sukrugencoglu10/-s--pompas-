import { z } from "zod";

export const isAlaniOptions = [
  { value: "klima-isitma", label: "Klima / Isıtma - Soğutma" },
  { value: "insaat", label: "İnşaat / Taahhüt" },
  { value: "diger", label: "Diğer" },
  { value: "yeni-girisim", label: "Yeni Girişim" },
] as const;

export const bayilikFormSchema = z.object({
  adSoyad: z.string().min(3, "En az 3 karakter giriniz"),
  telefon: z
    .string()
    .regex(/^(\+90|0)?[5][0-9]{9}$/, "Geçerli bir Türkiye telefon numarası giriniz"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  sehir: z.string().min(2, "Şehir bilgisi zorunludur"),
  isAlani: z.enum(["klima-isitma", "insaat", "diger", "yeni-girisim"], {
    errorMap: () => ({ message: "Lütfen iş alanınızı seçiniz" }),
  }),
  mesaj: z.string().optional(),
  kvkkOnay: z.literal(true, {
    errorMap: () => ({ message: "KVKK onayı zorunludur" }),
  }),
  whatsappOnay: z.boolean().optional(),
  // UTM / gizli alanlar
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
});

export type BayilikFormData = z.infer<typeof bayilikFormSchema>;
