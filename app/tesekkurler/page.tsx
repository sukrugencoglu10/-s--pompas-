import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Başvurunuz Alındı | Airmax Bayilik",
  description: "Bayilik başvurunuz başarıyla alındı. 24 saat içinde sizi arayacağız.",
  robots: { index: false, follow: false },
};

export default function TesekkurlerPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface px-5">
      <div className="w-full max-w-lg rounded-2xl border border-line bg-white p-8 text-center md:p-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-navy/10">
          <CheckCircle2 className="h-12 w-12 text-navy" />
        </div>

        <h1 className="mt-6 font-heading text-2xl font-black uppercase text-navy md:text-3xl">
          Başvurunuz Alındı!
        </h1>
        <p className="mt-3 text-muted">
          Airmax bayilik başvurunuz için teşekkür ederiz. Uzman ekibimiz
          başvurunuzu inceleyip en kısa sürede sizinle iletişime geçecek.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy/10 px-4 py-3 text-sm font-semibold text-navy">
          <Clock className="h-4 w-4" />
          24 saat içinde sizi arayacağız
        </div>

        <div className="mt-8">
          <Link href="/" className="btn-secondary">
            <ArrowLeft className="h-4 w-4" />
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </main>
  );
}
