"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/config";
import { trackContactClick } from "@/lib/gtm";
import BasvuruForm from "./BasvuruForm";

const heroImages = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
];

export default function Hero() {
  const [active, setActive] = useState(0);

  // arka plan görsellerini otomatik döndür (crossfade).
  // Kullanıcı "hareketi azalt" tercih ettiyse döndürme.
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-dark text-white"
    >
      {/* dönen, hafif bulanık arka plan slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`scale-110 object-cover blur-[3px] transition-opacity duration-[1500ms] ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* okunabilirlik için koyu + marka tonlu overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/85" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-5 px-5 py-7 md:px-8 md:py-9 lg:grid-cols-2 lg:gap-7">
        {/* sol kolon — metin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-sm"
        >
          <h1 className="font-heading text-xl font-black uppercase leading-[1.15] tracking-tight md:text-2xl">
            Airmax Bayisi Olmak
            <br />
            İster Misiniz?
          </h1>

          <p className="mt-2 max-w-xs text-xs text-white/85 md:text-sm">
            Güçlü bir marka ile büyüyen iş ortaklığı fırsatını keşfedin.
            Türkiye&apos;nin yeni nesil ısı pompası pazarında yerinizi alın.
          </p>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContactClick("whatsapp")}
            className="btn-outline mt-3 w-full px-5 py-2.5 text-[11px] sm:w-auto"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            WhatsApp&apos;tan Yazın
          </a>

          {/* özellik şeridi */}
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-medium text-white/80">
            <span>A+++ Verimlilik</span>
            <span className="hidden sm:inline">•</span>
            <span>-35°C&apos;ye Kadar</span>
            <span className="hidden sm:inline">•</span>
            <span>Isıtma + Soğutma + Sıcak Su</span>
          </div>
        </motion.div>

        {/* sağ kolon — başvuru formu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full"
        >
          <BasvuruForm />
        </motion.div>
      </div>
    </section>
  );
}
