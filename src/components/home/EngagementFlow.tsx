import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

const steps = [
  {
    title: "1. Initial discussion (30–45 mins)",
    description: "Understand your reporting, certification, or ESG priorities.",
  },
  {
    title: "2. Quick diagnostic & scope definition",
    description: "Identify gaps, timelines, and required frameworks.",
  },
  {
    title: "3. Execution plan + hands-on support",
    description: "Clear milestones, owners, and delivery path.",
  },
];

export default function EngagementFlow() {
  return (
    <section className="bg-white py-20">
      <MainLayout className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-mirika-charcoal md:text-3xl">
            How engagements typically start
          </h3>
          <p className="text-sm text-mirika-graphite/80">
            No obligation. No generic pitch. Just clarity.
          </p>
        </div>

        <div className="space-y-5">
          {steps.map((step) => (
            <div key={step.title} className="space-y-2">
              <p className="text-base font-semibold text-mirika-charcoal md:text-lg">
                {step.title}
              </p>
              <p className="text-sm text-mirika-graphite md:text-base">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-mirika-forest px-6 py-3 text-sm font-medium text-white transition hover:bg-mirika-emerald sm:w-auto md:text-base"
          >
            Talk to Our ESG Experts
          </Link>
          <p className="text-sm text-mirika-graphite">
            Our team will respond with the most relevant next step.
          </p>
        </div>
      </MainLayout>
    </section>
  );
}
