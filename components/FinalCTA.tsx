"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/config";
import { trackContactClick } from "@/lib/gtm";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(28,79,124,0.6),transparent_60%)]" />
      <div className="section relative text-center">
        <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
          Sınırlı Kontenjan
        </span>
        <h2 className="mx-auto mt-5 max-w-2xl font-heading text-3xl font-black uppercase leading-tight text-white md:text-4xl">
          Bölgenizde Hâlâ Bayilik Açık!
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/85 md:text-lg">
          Fırsat dolmadan yerinizi ayırtın. Başvurunuz 24 saat içinde
          değerlendirilir.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#basvuru"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-navy transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
          >
            Hemen Başvur
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContactClick("whatsapp")}
            className="btn-outline w-full sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp&apos;tan Yaz
          </a>
        </div>
      </div>
    </section>
  );
}
