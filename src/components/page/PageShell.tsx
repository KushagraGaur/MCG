"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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

// Reusable Closing CTA Component (same as homepage)
function ClosingCTA({ 
  title = "Your Path to Sustainable Growth Starts with MCG.",
  description = "Contact us today to explore how we can support your ESG journey.",
  buttonLabel = "Get Started with MCG",
  buttonHref = "/contact"
  
}) {
  return (
    <section className="relative w-full py-32 md:py-40 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative w-full h-full">
          {/* Background Image - From Figma */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-mirika-forest to-emerald-900">
            {/* Placeholder for Environment Photo */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-white/30"></div>
              </div>
            </div>
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative mx-auto max-w-[1420px] px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center"
        >
          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-dm-sans text-2xl md:text-3xl text-white/80 mb-4"
          >
            Let's Move Forward
          </motion.p>
          
          {/* Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-crimson text-5xl md:text-7xl lg:text-[62px] leading-[0.9] tracking-tight text-white mb-8"
          >
            {title}
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-dm-sans text-xl text-white/80 max-w-[943px] mx-auto mb-12"
          >
            {description}
          </motion.p>
          
          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center bg-white text-mirika-forest text-sm font-dm-sans font-bold px-8 py-4 rounded-full hover:bg-[#E8F2F0] hover:scale-105 transition-all duration-300 min-w-[220px]"
            >
              {buttonLabel}
            </Link>
          </motion.div>
          
          {/* Company Tagline */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="border-t border-white/20 pt-8"
          >
            <p className="font-dm-sans text-xl text-white/80">
              MCG Consulting Group — Clear insights. Real impact.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#A9D5C9] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#2C554A] rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      {/* Bottom wave effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

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
    <div className="bg-white">
      <PageHero
        title={content.title}
        subtitle={content.subtitle}
        eyebrow={content.eyebrow}
        primaryCtaLabel={content.primaryCtaLabel}
        primaryCtaHref={content.primaryCtaHref}
        secondaryCtaLabel={content.secondaryCtaLabel}
        secondaryCtaHref={content.secondaryCtaHref}
      />

      <section className="py-16 md:py-24">
        <div className={`mx-auto px-8 ${showRightRail ? "max-w-[1420px]" : "max-w-[1200px]"}`}>
          <div className={showRightRail ? "grid grid-cols-1 gap-16 lg:grid-cols-12" : ""}>
            <div className={showRightRail ? "lg:col-span-8" : "w-full"}>
              <div className="space-y-16">
                {content.services?.length ? (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <PageSection 
                      title={servicesSectionTitle} 
                      description={servicesSectionDescription}
                      titleSize="text-5xl md:text-6xl"
                      titleFont="font-crimson"
                      className="max-w-3xl mx-auto text-center"
                    >
                      <div className="grid gap-6 md:grid-cols-2">
                        {content.services.map((service, index) => (
                          <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                  
                            className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                          >
                            <h3 className="font-dm-sans text-xl font-bold text-black">
                              {service.title}
                            </h3>
                            <p className="mt-3 font-dm-sans text-gray-600">
                              {service.description}
                            </p>
                            {service.ctaLabel ? (
                              <div className="mt-6 text-center">
                              <Link
                                href={service.ctaHref ?? "/contact"}
                                className="mt-6 inline-flex items-center rounded-full bg-[#A9D5C9] px-5 py-2.5 text-sm font-dm-sans font-bold text-black hover:bg-[#9FCEC2] transition"
                              >
                                {service.ctaLabel}
                              </Link></div>
                            ) : null}
                          </motion.div>
                        ))}
                      </div>
                    </PageSection>
                  </motion.div>
                ) : null}

                {content.industries?.length ? (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <PageSection
                      title={industriesSectionTitle}
                      description={industriesSectionDescription}
                      titleSize="text-5xl md:text-6xl"
                      titleFont="font-crimson"
                      className="max-w-3xl mx-auto text-center"
                    >
                      <div className="grid gap-6 md:grid-cols-2">
                        {content.industries.map((industry, index) => (
                          <motion.div
                            key={industry.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                          >
                            <h3 className="font-dm-sans text-xl font-bold text-black">
                              {industry.title}
                            </h3>
                            <ul className="mt-4 space-y-3 font-dm-sans text-gray-600">
                              {industry.points.map((point, idx) => (
                                <li key={point} className="flex items-start gap-3">
                                  <div className="mt-1.5 h-2 w-2 rounded-full bg-[#A9D5C9] flex-shrink-0"></div>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-12 text-center"
                      >
                        <Link
                          href={industriesCtaHref}
                          className="inline-flex items-center justify-center bg-mirika-forest text-white text-sm font-dm-sans font-bold px-8 py-4 rounded-full hover:bg-[#2C554A] transition min-w-[200px]"
                        >
                          {industriesCtaLabel}
                        </Link>
                        <p className="mt-4 font-dm-sans text-gray-600 max-w-2xl mx-auto">
                          {industriesCtaDescription}
                        </p>
                      </motion.div>
                    </PageSection>
                  </motion.div>
                ) : null}

                {content.whatYouGet?.length ? (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <PageSection
                      title="What You Get"
                      description="Clear deliverables and artifacts that support confident decision-making."
                      titleSize="text-5xl md:text-6xl"
                      titleFont="font-crimson"
                      className="max-w-3xl mx-auto text-center"
                    >
                      <div className="grid gap-6 md:grid-cols-2">
                        {content.whatYouGet.map((item, index) => (
                          <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-xl bg-[#E8F2F0] p-6"
                          >
                            <h3 className="font-dm-sans text-xl font-bold text-black">
                              {item.title}
                            </h3>
                            <p className="mt-3 font-dm-sans text-gray-600">
                              {item.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </PageSection>
                  </motion.div>
                ) : null}

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <PageSection 
                    title={methodSectionTitle} 
                    description={methodSectionDescription}
                    titleSize="text-5xl md:text-6xl"
                    titleFont="font-crimson"
                    className="max-w-3xl mx-auto text-center"
                  >
                    <div className="space-y-6">
                      {content.methodSteps.map((step, index) => (
                        <motion.div
                          key={step.title}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="relative rounded-xl border border-gray-200 bg-white p-6 pl-20 shadow-lg"
                        >
                          <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-mirika-forest text-white font-dm-sans font-bold text-lg">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <div>
                            <h3 className="font-dm-sans text-xl font-bold text-black">
                              {step.title}
                            </h3>
                            <p className="mt-3 font-dm-sans text-gray-600">
                              {step.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </PageSection>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <PageSection 
                    title={proofSectionTitle} 
                    description={proofSectionDescription}
                    titleSize="text-5xl md:text-6xl"
                    titleFont="font-crimson"
                    className="max-w-3xl mx-auto text-center"
                  >
                    <div className="space-y-8">
                      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {content.proof.stats.map((stat, index) => (
                          <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-lg"
                          >
                            <p className="font-crimson text-4xl font-bold text-mirika-forest">
                              {stat.value}
                            </p>
                            <p className="mt-2 font-dm-sans text-gray-600">{stat.label}</p>
                          </motion.div>
                        ))}
                      </div>

                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-xl bg-[#E8F2F0] p-8"
                      >
                        <h3 className="font-dm-sans text-2xl font-bold text-black">
                          Frameworks Supported
                        </h3>
                        <p className="mt-3 font-dm-sans text-gray-600">
                          Client outcomes and case studies available upon request.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                          {content.proof.frameworks.map((framework, index) => (
                            <motion.span
                              key={framework}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.05 }}
                              className="rounded-full bg-white px-4 py-2 font-dm-sans font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow"
                            >
                              {framework}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>

                      <div className="grid gap-6 md:grid-cols-2">
                        {content.proof.caseStudies.map((caseStudy, index) => (
                          <motion.div
                            key={caseStudy.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                          >
                            <h3 className="font-dm-sans text-xl font-bold text-black">
                              {caseStudy.title}
                            </h3>
                            <p className="mt-3 font-dm-sans text-gray-600">
                              {caseStudy.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </PageSection>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <PageSection 
                    title={faqSectionTitle} 
                    description={faqSectionDescription}
                    titleSize="text-5xl md:text-6xl"
                    titleFont="font-crimson"
                    className="max-w-3xl mx-auto text-center"
                  >
                    <div className="space-y-4">
                      {content.faqs.map((faq, index) => (
                        <motion.div
                          key={faq.question}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                        >
                          <h3 className="font-dm-sans text-lg font-bold text-black">
                            {faq.question}
                          </h3>
                          <p className="mt-3 font-dm-sans text-gray-600">{faq.answer}</p>
                        </motion.div>
                      ))}
                    </div>
                  </PageSection>
                </motion.div>
              </div>
            </div>

            {showRightRail && (
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-4"
              >
                <RightRail items={content.rightRail} />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Updated Closing CTA - Same as homepage */}
      <ClosingCTA
        title={closingCta.title}
        description={closingCta.description}
        buttonLabel={closingCta.buttonLabel}
        buttonHref={closingCta.buttonHref}
      />
    </div>
  );
}