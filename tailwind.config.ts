import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // airmaxenerji.com.tr marka paleti
        navy: {
          DEFAULT: "#13385A", // ana marka rengi (header, butonlar)
          dark: "#0E2A45", // hover / koyu zemin
          light: "#1C4F7C", // açık ton
        },
        primary: {
          DEFAULT: "#13385A",
          dark: "#0E2A45",
        },
        ink: "#1A1A1A", // gövde metni (Lato koyu)
        muted: "#556070", // ikincil metin — beyaz üzerinde AA kontrast (~5:1)
        line: "#E3E8ED",
        surface: "#F5F7F9", // açık bölüm zemini
      },
      fontFamily: {
        sans: ["var(--font-lato)", "system-ui", "sans-serif"],
        heading: ["var(--font-lato)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
