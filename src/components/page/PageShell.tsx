import Link from "next/link";
import PageHero from "@/components/page/PageHero";
import PageSection from "@/components/page/PageSection";
import RightRail from "@/components/page/RightRail";
import type { PageContent } from "@/lib/pageContent";

const defaultClosingCta = {
  title: "Ready to take the next step?",
  description: "Our ESG experts will respond within 1-2 business days.",
  buttonLabel: "Contact Us",
  buttonHref: "/contact",
};

export default function PageShell({ content }: { content: PageContent }) {
  const closingCta = content.closingCta ?? defaultClosingCta;
  const showRightRail = content.showRightRail ?? true;
  const servicesSectionTitle = content.servicesSectionTitle ?? "Services Overview";
  const servicesSectionDescription =
    content.servicesSectionDescription ??
    "Practical sustainability services aligned to your operating model and reporting goals.";
  const methodSectionTitle = content.methodSectionTitle ?? "Our Method";
  const methodSectionDescription =
    content.methodSectionDescription ??
    "A structured, evidence-first approach built for ESG credibility.";
  const proofSectionTitle = content.proofSectionTitle ?? "Proof & Trust";
  const proofSectionDescription =
    content.proofSectionDescription ??
    "Credibility placeholders for outcomes, frameworks, and case work.";
  const faqSectionTitle = content.faqSectionTitle ?? "FAQ";
  const faqSectionDescription =
    content.faqSectionDescription ??
    "Common questions we answer during early engagements.";
  const industriesSectionTitle = content.industriesSectionTitle ?? "Industries We Support";
  const industriesSectionDescription =
    content.industriesSectionDescription ??
    "Our sustainability and ESG services are tailored to the regulatory, operational, and value-chain realities of each industry we serve.";
  const industriesCtaLabel = content.industriesCtaLabel ?? "Discuss Your Industry Needs";
  const industriesCtaHref = content.industriesCtaHref ?? "/contact";
  const industriesCtaDescription =
    content.industriesCtaDescription ??
    "Our experts tailor each engagement to your industry's regulatory and operational context.";

  return (
    <div className="bg-mirika-softGrey">
      <PageHero
        title={content.title}
        subtitle={content.subtitle}
        eyebrow={content.eyebrow}
        primaryCtaLabel={content.primaryCtaLabel}
        primaryCtaHref={content.primaryCtaHref}
        secondaryCtaLabel={content.secondaryCtaLabel}
        secondaryCtaHref={content.secondaryCtaHref}
      />

      <section className="bg-mirika-softGrey pb-16">
        <div className={`mx-auto px-4 md:px-8 ${showRightRail ? "max-w-7xl" : "max-w-5xl"}`}>
          <div className={showRightRail ? "grid grid-cols-1 gap-10 lg:grid-cols-12" : ""}>
            <div className={`space-y-10 ${showRightRail ? "lg:col-span-8" : ""}`}>
              {content.services?.length ? (
                <PageSection title={servicesSectionTitle} description={servicesSectionDescription}>
                  <div className="grid gap-4 md:grid-cols-2">
                    {content.services.map((service) => (
                      <div
                        key={service.title}
                        className="rounded-xl border border-mirika-earth/50 bg-mirika-softGrey/60 p-4"
                      >
                        <h3 className="text-base font-semibold text-mirika-charcoal">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm text-mirika-graphite">
                          {service.description}
                        </p>
                        {service.ctaLabel ? (
                          <Link
                            href={service.ctaHref ?? "/contact"}
                            className="mt-4 inline-flex min-h-[40px] items-center rounded-full border border-mirika-forest px-4 py-2 text-xs font-medium text-mirika-forest transition hover:border-mirika-emerald hover:bg-mirika-emerald hover:text-white"
                          >
                            {service.ctaLabel}
                          </Link>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </PageSection>
              ) : null}

              {content.industries?.length ? (
                <PageSection
                  title={industriesSectionTitle}
                  description={industriesSectionDescription}
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    {content.industries.map((industry) => (
                      <div
                        key={industry.title}
                        className="rounded-xl border border-mirika-earth/50 bg-mirika-softGrey/60 p-4"
                      >
                        <h3 className="text-base font-semibold text-mirika-charcoal">
                          {industry.title}
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm text-mirika-graphite">
                          {industry.points.map((point) => (
                            <li key={point} className="flex gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-mirika-forest" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Link
                      href={industriesCtaHref}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-mirika-forest px-5 py-2 text-xs font-medium text-mirika-forest transition hover:border-mirika-emerald hover:bg-mirika-emerald hover:text-white"
                    >
                      {industriesCtaLabel}
                    </Link>
                    <p className="mt-3 text-sm text-mirika-graphite">
                      {industriesCtaDescription}
                    </p>
                  </div>
                </PageSection>
              ) : null}

              {content.whatYouGet?.length ? (
                <PageSection
                  title="What You Get"
                  description="Clear deliverables and artifacts that support confident decision-making."
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    {content.whatYouGet.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-xl border border-mirika-earth/50 bg-mirika-softGrey/60 p-4"
                      >
                        <h3 className="text-base font-semibold text-mirika-charcoal">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-mirika-graphite">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </PageSection>
              ) : null}

              <PageSection title={methodSectionTitle} description={methodSectionDescription}>
                <ol className="space-y-4">
                  {content.methodSteps.map((step, index) => (
                    <li
                      key={step.title}
                      className="rounded-xl border border-mirika-earth/50 bg-mirika-softGrey/60 p-4"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-mirika-forest/40 bg-white text-sm font-semibold text-mirika-forest">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="text-base font-semibold text-mirika-charcoal">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-sm text-mirika-graphite">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </PageSection>

              <PageSection title={proofSectionTitle} description={proofSectionDescription}>
                <div className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {content.proof.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-mirika-earth/50 bg-mirika-softGrey/60 p-4"
                      >
                        <p className="text-2xl font-semibold text-mirika-charcoal">
                          {stat.value}
                        </p>
                        <p className="mt-2 text-sm text-mirika-graphite">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl border border-mirika-earth/50 bg-mirika-softGrey/60 p-4">
                    <h3 className="text-base font-semibold text-mirika-charcoal">
                      Frameworks Supported
                    </h3>
                    <p className="mt-2 text-sm text-mirika-graphite">
                      Client outcomes and case studies available upon request.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {content.proof.frameworks.map((framework) => (
                        <span
                          key={framework}
                          className="rounded-full border border-mirika-earth/70 bg-white px-3 py-1 text-xs font-medium text-mirika-graphite"
                        >
                          {framework}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {content.proof.caseStudies.map((caseStudy) => (
                      <div
                        key={caseStudy.title}
                        className="rounded-xl border border-mirika-earth/50 bg-mirika-softGrey/60 p-4"
                      >
                        <h3 className="text-base font-semibold text-mirika-charcoal">
                          {caseStudy.title}
                        </h3>
                        <p className="mt-2 text-sm text-mirika-graphite">
                          {caseStudy.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </PageSection>

              <PageSection title={faqSectionTitle} description={faqSectionDescription}>
                <div className="space-y-4">
                  {content.faqs.map((faq) => (
                    <div key={faq.question} className="rounded-xl bg-mirika-softGrey/60 p-4">
                      <h3 className="text-base font-semibold text-mirika-charcoal">
                        {faq.question}
                      </h3>
                      <p className="mt-2 text-sm text-mirika-graphite">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </PageSection>
            </div>

            {showRightRail ? (
              <div className="lg:col-span-4">
                <RightRail items={content.rightRail} />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-mirika-softGrey pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="rounded-2xl border border-mirika-earth/60 bg-white p-8 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-mirika-charcoal md:text-3xl">
              {closingCta.title}
            </h2>
            <p className="mt-3 text-base text-mirika-graphite md:text-lg">
              {closingCta.description}
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href={closingCta.buttonHref}
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-mirika-forest px-6 py-3 text-sm font-medium text-white transition hover:bg-mirika-emerald"
              >
                {closingCta.buttonLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
