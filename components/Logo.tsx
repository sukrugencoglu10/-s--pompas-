/**
 * Airmax Energy logosu — airmaxenerji.com.tr stilinde yeniden üretilmiş
 * wordmark. Beyaz varyant (navy zemin) varsayılan.
 * Gerçek PNG logoyu kullanmak isterseniz public/images/logo.png ekleyip
 * bu bileşeni <Image /> ile değiştirebilirsiniz.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* dairesel swoosh ikon */}
      <svg
        viewBox="0 0 48 48"
        className="h-9 w-9 shrink-0"
        aria-hidden="true"
        fill="none"
      >
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M12 28c6-1.5 11-4.5 16-9 1.8-1.6 4-2.2 6-1.8-1.3 3.2-3.7 5.8-7 7.4-4.6 2.2-9.8 3-15 3.4z"
          fill="currentColor"
        />
        <path
          d="M14 32c5.5-.4 10.7-1.8 15-4.8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* wordmark */}
      <span className="flex flex-col leading-none">
        <span className="relative font-heading text-2xl font-black tracking-tight">
          AIRMAX
          <span className="absolute -right-2 top-0 text-[9px] font-bold">®</span>
        </span>
        <span className="mt-0.5 self-end text-[10px] font-bold italic tracking-[0.25em] opacity-90">
          ENERGY
        </span>
      </span>
    </span>
  );
}
