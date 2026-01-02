import MainLayout from "@/components/layout/MainLayout";

const qualifiers = [
  "Are preparing for BRSR / GRI / ISO certifications",
  "Face export or buyer ESG requirements",
  "Need audit-ready ESG data",
  "Have limited internal bandwidth",
  "Want execution, not just advice",
];

export default function WhoWeWorkWith() {
  return (
    <section className="bg-mirika-softGrey py-10">
      <MainLayout className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mirika-graphite/70">
          We typically support organizations that:
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
          {qualifiers.map((qualifier) => (
            <span
              key={qualifier}
              className="inline-flex w-fit items-center rounded-full border border-mirika-earth/50 bg-white px-4 py-2 text-xs text-mirika-graphite md:text-sm"
            >
              {qualifier}
            </span>
          ))}
        </div>
      </MainLayout>
    </section>
  );
}
