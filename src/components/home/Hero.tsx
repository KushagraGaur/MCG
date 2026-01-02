import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/theme";

export default function Hero() {
  return (
    <section className="w-full bg-mirika-softGrey py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-12 md:gap-12 md:px-8">
        <div className="space-y-4 text-left md:col-span-6 lg:col-span-5">
          <h1 className="text-3xl leading-tight text-mirika-charcoal md:text-5xl md:leading-tight">
            Accelerating ESG, Sustainability, and Compliance Outcomes for Indian Enterprises
          </h1>
          <p className="max-w-2xl text-lg text-mirika-graphite">
            From ESG reporting to carbon accounting and certifications — we provide end-to-end
            planning, execution, and hands-on support.
          </p>
          <p className="text-sm text-mirika-graphite/80 md:text-base">
            Trusted by export-oriented manufacturers, infrastructure firms, and regulated
            enterprises.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
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

        <div className="flex w-full items-center justify-center md:col-span-6 lg:col-span-7">
          <Image
            src="/hero/home-hero.jpeg"
            alt="Sustainability and ESG consulting by MCG Consulting Group"
            width={1200}
            height={900}
            className="h-auto w-full rounded-2xl object-cover shadow-sm"
            priority
          />
        </div>
      </div>
    </section>
  );
}
