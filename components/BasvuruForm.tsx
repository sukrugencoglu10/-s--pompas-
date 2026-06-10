"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Lock, Send } from "lucide-react";
import {
  bayilikFormSchema,
  isAlaniOptions,
  type BayilikFormData,
} from "@/lib/validations";
import { submitBasvuru, getUtmParams } from "@/lib/api";
import { trackLeadSubmit, trackMetaEvent } from "@/lib/gtm";

/**
 * Bayilik başvuru formu — beyaz kart. Hero'nun sağ kolonunda kullanılır.
 * Anchor (#basvuru) bu karta bağlıdır.
 */
export default function BasvuruForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<BayilikFormData>({
    resolver: zodResolver(bayilikFormSchema),
  });

  useEffect(() => {
    const utm = getUtmParams();
    if (utm.utm_source) setValue("utm_source", utm.utm_source);
    if (utm.utm_medium) setValue("utm_medium", utm.utm_medium);
    if (utm.utm_campaign) setValue("utm_campaign", utm.utm_campaign);
  }, [setValue]);

  async function onSubmit(data: BayilikFormData) {
    const result = await submitBasvuru(data);
    if (result.ok) {
      trackLeadSubmit({ sehir: data.sehir, is_alani: data.isAlani });
      // Form submit başarılı olduğunda çalıştır → fbq('track', 'Lead')
      trackMetaEvent("Lead");
      router.push("/tesekkurler");
    } else {
      setError("root", { message: result.error });
    }
  }

  return (
    <div
      id="basvuru"
      className="scroll-mt-24 rounded-2xl bg-white p-6 shadow-2xl shadow-black/20 md:p-7"
    >
      <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-navy">
        Bayilik Başvurusu
      </h2>
      <p className="mt-1 text-sm text-muted">
        24 saat içinde sizi arayalım — ücretsiz görüşme.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-5 space-y-4">
        <Field id="adSoyad" label="Ad Soyad" error={errors.adSoyad?.message} required>
          <input
            {...register("adSoyad")}
            id="adSoyad"
            type="text"
            autoComplete="name"
            placeholder="Adınız ve soyadınız"
            className="input"
            aria-invalid={!!errors.adSoyad}
            aria-describedby={errors.adSoyad ? "adSoyad-error" : undefined}
          />
        </Field>

        <Field id="telefon" label="Telefon Numarası" error={errors.telefon?.message} required>
          <input
            {...register("telefon")}
            id="telefon"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="05XX XXX XX XX"
            className="input"
            aria-invalid={!!errors.telefon}
            aria-describedby={errors.telefon ? "telefon-error" : undefined}
          />
        </Field>

        <Field id="email" label="E-posta" error={errors.email?.message} required>
          <input
            {...register("email")}
            id="email"
            type="email"
            autoComplete="email"
            placeholder="ornek@email.com"
            className="input"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>

        <Field id="sehir" label="Şehir / İlçe" error={errors.sehir?.message} required>
          <input
            {...register("sehir")}
            id="sehir"
            type="text"
            autoComplete="address-level2"
            placeholder="Örn: İstanbul / Kadıköy"
            className="input"
            aria-invalid={!!errors.sehir}
            aria-describedby={errors.sehir ? "sehir-error" : undefined}
          />
        </Field>

        <Field id="isAlani" label="Mevcut İş Alanınız" error={errors.isAlani?.message} required>
          <select
            {...register("isAlani")}
            id="isAlani"
            defaultValue=""
            className="input"
            aria-invalid={!!errors.isAlani}
            aria-describedby={errors.isAlani ? "isAlani-error" : undefined}
          >
            <option value="" disabled>
              Seçiniz
            </option>
            {isAlaniOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>

        <div className="space-y-2.5 pt-1">
          <label className="flex cursor-pointer items-start gap-2.5 text-sm text-muted">
            <input
              {...register("whatsappOnay")}
              type="checkbox"
              className="mt-0.5 h-5 w-5 shrink-0 rounded border-line text-navy focus:ring-navy"
            />
            <span>WhatsApp üzerinden iletişime geçilmesini tercih ederim.</span>
          </label>

          <label className="flex cursor-pointer items-start gap-2.5 text-sm text-muted">
            <input
              {...register("kvkkOnay")}
              type="checkbox"
              className="mt-0.5 h-5 w-5 shrink-0 rounded border-line text-navy focus:ring-navy"
              aria-invalid={!!errors.kvkkOnay}
              aria-describedby={errors.kvkkOnay ? "kvkkOnay-error" : undefined}
            />
            <span>
              <a
                href="/kvkk"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-navy underline"
              >
                KVKK Aydınlatma Metni
              </a>
              &apos;ni okudum ve onaylıyorum. *
            </span>
          </label>
          {errors.kvkkOnay && (
            <p id="kvkkOnay-error" role="alert" className="text-sm text-red-600">
              {errors.kvkkOnay.message}
            </p>
          )}
        </div>

        {errors.root && (
          <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
            {errors.root.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Gönderiliyor...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Başvurumu Gönder
            </>
          )}
        </button>

        <p className="flex items-center justify-center gap-2 text-center text-xs text-muted">
          <Lock className="h-3.5 w-3.5" />
          Bilgileriniz güvende, 3. şahıslarla paylaşılmaz.
        </p>
      </form>
    </div>
  );
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1 block text-sm font-semibold text-navy"
      >
        {label}{" "}
        {required && (
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
