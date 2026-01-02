import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

const costItems = [
  {
    driver: "Internal team effort to collect and validate data",
    withoutCost: "₹6L-₹12L",
    mcgReduction: "Standard templates + structured data capture + QA checks",
  },
  {
    driver: "Rework from inconsistent metrics / changing formats",
    withoutCost: "₹3L-₹8L",
    mcgReduction: "Defined metric dictionary + review cycles + version control",
  },
  {
    driver: "Stakeholder coordination + vendor follow-ups",
    withoutCost: "₹2L-₹6L",
    mcgReduction: "Single execution plan + clear owners + weekly tracking",
  },
  {
    driver: "Audit readiness & documentation effort",
    withoutCost: "₹5L-₹10L",
    mcgReduction: "Audit trail setup + evidence checklist + documentation pack",
  },
  {
    driver: "Ad hoc third-party one-time certification cost",
    withoutCost: "₹2L-₹15L",
    mcgReduction: "Right-fit certification planning + scope control + readiness before engagement",
  },
  {
    driver: "Delay cost (missed timelines, slower reporting/certification cycle)",
    withoutCost: "₹4L-₹12L",
    mcgReduction: "Compression of timeline through end-to-end execution support",
  },
];

export default function FinancialImpactSnapshot() {
  return (
    <section className="bg-white py-24">
      <MainLayout className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold text-mirika-charcoal md:text-4xl">
            Financial Impact Snapshot
          </h2>
          <p className="max-w-3xl text-mirika-graphite md:text-lg">
            A practical view of where ESG programs typically get expensive — and how MCG helps
            reduce cost, rework, and delays.
          </p>
          <p className="text-sm text-mirika-graphite/80">
            Illustrative estimates for planning purposes. Actual costs vary by company size, data
            readiness, and reporting scope.
          </p>
        </div>

        <div className="hidden md:block">
          <div className="grid grid-cols-12 gap-6 border-b border-mirika-earth/40 pb-4 text-xs font-semibold uppercase tracking-[0.2em] text-mirika-graphite">
            <span className="col-span-5">Cost Driver</span>
            <span className="col-span-3 text-right">Typical Cost (Without MCG)</span>
            <span className="col-span-4">How MCG Reduces This</span>
          </div>
          <div className="divide-y divide-mirika-earth/40">
            {costItems.map((item) => (
              <div key={item.driver} className="grid grid-cols-12 gap-6 py-5">
                <p className="col-span-5 text-base text-mirika-charcoal">{item.driver}</p>
                <p className="col-span-3 text-right text-base font-semibold text-mirika-charcoal">
                  {item.withoutCost}
                </p>
                <div className="col-span-4 flex items-start gap-3 text-sm text-mirika-graphite">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-mirika-emerald/15 text-mirika-forest">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-3.5 w-3.5"
                    >
                      <path
                        d="M5 10.5l3.2 3.2L15 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{item.mcgReduction}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 md:hidden">
          {costItems.map((item) => (
            <div
              key={item.driver}
              className="rounded-2xl border border-mirika-earth/40 bg-white p-5 shadow-[0_12px_36px_-30px_rgba(12,59,46,0.3)]"
            >
              <h3 className="text-base font-semibold text-mirika-charcoal">{item.driver}</h3>
              <div className="mt-3 space-y-2 text-sm text-mirika-graphite">
                <p className="flex items-center justify-between">
                  <span className="font-medium text-mirika-charcoal">Typical Cost</span>
                  <span className="font-semibold text-mirika-charcoal">{item.withoutCost}</span>
                </p>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-mirika-emerald/15 text-mirika-forest">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-3 w-3"
                    >
                      <path
                        d="M5 10.5l3.2 3.2L15 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{item.mcgReduction}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-mirika-earth/40 bg-mirika-softGrey p-6 md:p-8">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-mirika-charcoal md:text-3xl">
              Reduce ESG execution cost and complexity
            </h3>
            <p className="text-mirika-graphite md:text-lg">
              For most organizations, we help reduce overall effort, rework, and delay costs by at
              least 50% by bringing structure, templates, and hands-on execution support.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-mirika-forest px-6 py-3 text-sm font-medium text-white transition hover:bg-mirika-emerald sm:w-auto md:text-base"
            >
              Talk to Our ESG Experts
            </Link>
            <p className="text-sm text-mirika-graphite">
              We’ll respond with the best next step based on your industry and reporting needs.
            </p>
          </div>
        </div>
      </MainLayout>
    </section>
  );
}
