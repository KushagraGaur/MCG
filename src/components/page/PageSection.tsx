import type { ReactNode } from "react";

type PageSectionProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function PageSection({
  title,
  eyebrow,
  description,
  children,
  className,
}: PageSectionProps) {
  return (
    <section
      className={`rounded-2xl border border-mirika-earth/60 bg-white p-6 md:p-8 ${
        className ?? ""
      }`}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mirika-forest">
          {eyebrow}
        </p>
      ) : null}
      <div className="mt-3 space-y-3">
        <h2 className="text-2xl font-semibold text-mirika-charcoal md:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base text-mirika-graphite md:text-lg">{description}</p>
        ) : null}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
