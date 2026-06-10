interface Props {
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

/** airmaxenerji.com.tr stili: UPPERCASE başlık + ince alt çizgi aksanı */
export default function SectionHeading({
  title,
  description,
  center = false,
  light = false,
}: Props) {
  return (
    <div className={`mb-10 ${center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}`}>
      <h2
        className={`font-heading text-2xl font-bold uppercase tracking-tight md:text-[32px] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      <span
        className={`mt-3 block h-[3px] w-16 rounded-full ${
          center ? "mx-auto" : ""
        } ${light ? "bg-white/70" : "bg-navy"}`}
      />
      {description && (
        <p
          className={`mt-4 text-base md:text-lg ${
            light ? "text-white/80" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
