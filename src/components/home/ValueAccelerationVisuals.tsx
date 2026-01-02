import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

const visuals = [
  {
    label: "Without MCG",
    description: "Complexity, delays, fragmented ownership",
    image: "/home/without-mcg.png",
    alt: "Without MCG: complex and slow path to ESG outcomes",
    tone: "muted",
  },
  {
    label: "With MCG",
    description: "Structured execution, hands-on support, faster time-to-value",
    image: "/home/with-mcg.png",
    alt: "With MCG: structured, accelerated path to ESG outcomes",
    tone: "positive",
  },
];

const valueCards = [
  {
    title: "Reduce time-to-reporting and audit readiness",
    description:
      "Get structured data capture, clear templates, and review cycles that make reporting predictable — not painful.",
  },
  {
    title: "Avoid compliance surprises",
    description:
      "Stay aligned with evolving frameworks (GRI, BRSR, ISO) and reduce last-minute risk during reviews and certifications.",
  },
  {
    title: "Turn sustainability into business advantage",
    description:
      "Strengthen buyer confidence, export competitiveness, and partner trust with credible, consistent disclosures.",
  },
  {
    title: "Get hands-on execution support",
    description:
      "We don’t just advise — we help you implement, coordinate stakeholders, and stay on track to outcomes.",
  },
];

export default function ValueAccelerationVisuals() {
  return (
    <section className="bg-mirika-softGrey py-24">
      <MainLayout className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold text-mirika-charcoal md:text-4xl">
            A Clear Path to ESG Outcomes
          </h2>
          <p className="max-w-3xl text-mirika-graphite md:text-lg">
            Two realities: slow, fragmented progress without support — or a structured path with
            MCG that compresses time to impact.
          </p>
        </div>

        <div className="space-y-8">
          {visuals.map((visual) => {
            const labelClassName =
              visual.tone === "positive"
                ? "text-mirika-forest bg-mirika-emerald/10"
                : "text-mirika-graphite bg-mirika-earth/30";

            return (
              <div
                key={visual.label}
                className="rounded-3xl border border-mirika-earth/40 bg-white p-6 shadow-[0_18px_52px_-32px_rgba(12,59,46,0.35)] md:p-10"
              >
                <div className="space-y-2">
                  <span
                    className={`inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${labelClassName}`}
                  >
                    {visual.label}
                  </span>
                  <p className="text-sm font-medium text-mirika-graphite md:text-base">
                    {visual.description}
                  </p>
                </div>
                <div className="mt-6 overflow-hidden rounded-2xl border border-mirika-earth/40 bg-white">
                  <Image
                    src={visual.image}
                    alt={visual.alt}
                    width={1600}
                    height={900}
                    className="h-auto w-full rounded-xl object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-mirika-charcoal md:text-3xl">
              What this means for you
            </h3>
            <p className="max-w-4xl text-mirika-graphite md:text-lg">
              Whether you’re preparing for audits, export requirements, investor scrutiny, or
              internal sustainability targets — we help you move from uncertainty to execution.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {valueCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-mirika-earth/40 bg-white p-5 shadow-[0_14px_40px_-30px_rgba(12,59,46,0.3)] md:p-6"
              >
                <h4 className="text-lg font-semibold text-mirika-charcoal">{card.title}</h4>
                <p className="mt-3 text-sm text-mirika-graphite md:text-base">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <p className="max-w-4xl text-mirika-graphite md:text-lg">
            You get a clear plan, clear owners, and a clear path to measurable ESG progress — without
            adding unnecessary complexity to your team.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-mirika-forest px-6 py-3 text-sm font-medium text-white transition hover:bg-mirika-emerald sm:w-auto md:text-base"
            >
              Talk to Our ESG Experts
            </Link>
            <Link
              href="/sustainability-consulting/our-services"
              className="inline-flex w-full items-center justify-center gap-2 text-sm font-medium text-mirika-forest transition hover:text-mirika-emerald sm:w-auto md:text-base"
            >
              Explore Our Services →
            </Link>
          </div>
        </div>
      </MainLayout>
    </section>
  );
}
