"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";

const SITE = "https://www.airmaxenerji.com.tr";

// airmaxenerji.com.tr ana menüsü ile aynı sıralama.
// Bayilik & İletişim landing form'una scroll eder; diğerleri ana siteye gider.
const navItems = [
  { label: "Ana Sayfa", href: `${SITE}/`, external: true },
  { label: "Ürünler", href: `${SITE}/urunler`, external: true },
  { label: "Hakkımızda", href: `${SITE}/hakkimizda`, external: true },
  { label: "Neden Airmax Isı Pompası?", href: `${SITE}/neden-airmax`, external: true },
  { label: "Blog", href: `${SITE}/blog`, external: true },
  { label: "Bayilik", href: "#basvuru", external: false },
  { label: "İletişim", href: "#basvuru", external: false },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-navy text-white shadow-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a href="#top" className="text-white" aria-label="Airmax Energy">
          <Logo />
        </a>

        {/* masaüstü menü */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <SocialIcons />
        </div>

        {/* mobil menü butonu */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-1 lg:hidden"
          aria-label="Menüyü aç/kapat"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* mobil açılır menü */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobil menü"
          className="border-t border-white/10 bg-navy-dark px-5 pb-5 pt-2 lg:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-3 text-sm font-medium text-white/90"
            >
              {item.label}
            </a>
          ))}
          <SocialIcons className="mt-4" />
        </nav>
      )}
    </header>
  );
}
