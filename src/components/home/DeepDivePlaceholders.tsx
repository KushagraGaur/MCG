import MainLayout from "@/components/layout/MainLayout";

const deepDiveBlocks = [
  {
    title: "ESG Advisory",
    description: "Sector-specific governance, KPIs, and playbooks. Detailed deep dive coming soon.",
  },
  {
    title: "BRSR Reporting",
    description: "Disclosure-ready pipelines and templates. Full walkthroughs coming soon.",
  },
  {
    title: "Carbon Accounting",
    description: "Scope 1, 2, and 3 methodologies with calculators and dashboards on the way.",
  },
];

export default function DeepDivePlaceholders() {
  return (
    <section className="py-20">
      <MainLayout className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-mirika-forest">
            Coming Soon
          </p>
          <h2 className="text-3xl font-semibold text-mirika-charcoal md:text-4xl">
            Deeper dives into the Mirika approach.
          </h2>
          <p className="max-w-3xl text-mirika-graphite">
            These quick placeholders will expand into detailed ESG Advisory, BRSR, and Carbon
            Accounting pages with frameworks, artifacts, and implementation guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deepDiveBlocks.map((block) => (
            <div
              key={block.title}
              className="flex h-full flex-col gap-3 rounded-2xl border border-mirika-earth/70 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-mirika-charcoal">{block.title}</h3>
              <p className="text-sm text-mirika-graphite">{block.description}</p>
            </div>
          ))}
        </div>
      </MainLayout>
    </section>
  );
}
