import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/theme";

export default function Hero() {
  return (
    <section className="w-full bg-mirika-softGrey py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:px-8">
        <div className="space-y-6 text-left">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-mirika-forest">
            ESG Leadership
          </p>
          <h1 className="text-3xl leading-tight text-mirika-charcoal md:text-5xl md:leading-tight">
            Navigate Your Sustainability and ESG Goals with Clarity.
          </h1>
          <p className="max-w-2xl text-lg text-mirika-graphite">
            Mirika Consulting Group blends scientific rigor, modern technology, and practical
            advisory to help you measure, manage, and improve your environmental impact.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-mirika-forest px-6 py-3 text-sm font-medium text-white transition hover:bg-mirika-emerald sm:w-auto md:text-base"
            >
              {siteConfig.ctaLabel}
            </Link>
            <Link
              href="/sustainability-consulting/our-services"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-mirika-forest bg-white px-6 py-3 text-sm font-medium text-mirika-forest transition hover:border-mirika-emerald hover:bg-mirika-emerald hover:text-white sm:w-auto md:text-base"
            >
              Explore Our Services
            </Link>
          </div>
        </div>

        <div className="w-full">
          <Image
            src="/hero/home-hero.jpeg"
            alt="Sustainability and ESG consulting by Mirika Consulting Group"
            width={800}
            height={600}
            className="h-auto w-full rounded-2xl object-cover shadow-sm"
            priority
          />
        </div>
      </div>
    </section>
  );
}
