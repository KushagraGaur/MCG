import MainLayout from "@/components/layout/MainLayout";

const services = [
  {
    title: "ESG & Sustainability Advisory",
    description:
      "Strategy, governance, and implementation support to embed ESG into decision-making.",
  },
  {
    title: "BRSR & ESG Reporting",
    description:
      "Simplify disclosures with data models, templates, and guidance aligned to new regulations.",
  },
  {
    title: "Carbon Accounting & Footprinting",
    description:
      "Measure Scope 1, 2, and 3 emissions with auditable baselines and reduction pathways.",
  },
  {
    title: "Carbon Projects & Credits",
    description:
      "Identify, evaluate, and monitor projects and credits that align with your climate goals.",
  },
  {
    title: "Training & Capacity Building",
    description:
      "Equip teams with practical ESG knowledge through workshops, playbooks, and tooling.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-24">
      <MainLayout className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-mirika-forest">
            What We Do
          </p>
          <h2 className="text-3xl font-semibold text-mirika-charcoal md:text-4xl">
            ESG services designed for clarity and execution.
          </h2>
          <p className="max-w-3xl text-mirika-graphite md:text-lg">
            Lean, technology-forward support that keeps you compliant, credible, and investment
            ready.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex h-full flex-col gap-4 rounded-2xl border border-mirika-earth/70 bg-mirika-softGrey p-6 shadow-[0_12px_48px_-28px_rgba(12,59,46,0.35)]"
            >
              <div className="h-10 w-10 rounded-xl bg-white ring-1 ring-mirika-earth/60" />
              <h3 className="text-lg font-semibold text-mirika-charcoal">{service.title}</h3>
              <p className="flex-1 text-sm text-mirika-graphite">{service.description}</p>
              <button className="inline-flex w-max items-center gap-1 text-sm font-medium text-mirika-forest transition hover:text-mirika-emerald">
                <span>Learn more →</span>
              </button>
            </div>
          ))}
        </div>
      </MainLayout>
    </section>
  );
}
