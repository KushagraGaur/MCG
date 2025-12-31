import Link from "next/link";

type PageHeroProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
  primaryCtaLabel: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

export default function PageHero({
  title,
  subtitle,
  eyebrow,
  primaryCtaLabel,
  primaryCtaHref = "/contact",
  secondaryCtaLabel = "Explore Services",
  secondaryCtaHref = "/",
}: PageHeroProps) {
  return (
    <section className="bg-mirika-softGrey pb-10 pt-16 md:pb-16 md:pt-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:px-8">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mirika-forest">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-mirika-charcoal md:text-5xl">
          {title}
        </h1>
        <p className="max-w-3xl text-base text-mirika-graphite md:text-lg">
          {subtitle}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={primaryCtaHref}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-mirika-forest px-6 py-3 text-sm font-medium text-white transition hover:bg-mirika-emerald"
          >
            {primaryCtaLabel}
          </Link>
          <Link
            href={secondaryCtaHref}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-mirika-forest bg-white px-6 py-3 text-sm font-medium text-mirika-forest transition hover:border-mirika-emerald hover:bg-mirika-emerald hover:text-white"
          >
            {secondaryCtaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
