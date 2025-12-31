import MainLayout from "@/components/layout/MainLayout";

export default function ChallengeSection() {
  return (
    <section className="bg-mirika-softGrey py-24">
      <MainLayout className="max-w-5xl text-center space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-mirika-forest">
          The Challenge
        </p>
        <h2 className="text-3xl font-semibold text-mirika-charcoal md:text-4xl">
          Setting and delivering on ESG and sustainability goals can feel overwhelming.
        </h2>
        <div className="space-y-4 text-lg leading-relaxed text-mirika-graphite">
          <p>
            Businesses are navigating new regulations like BRSR, pressure from global buyers,
            complex carbon accounting requirements, and rising expectations from investors and
            communities.
          </p>
          <p>
            Many organizations are stuck in spreadsheets, disconnected data, and one-off reports
            that don&apos;t drive real change.
          </p>
          <p className="font-medium text-mirika-charcoal">
            MCG exists to turn this complexity into a clear, actionable path.
          </p>
        </div>
      </MainLayout>
    </section>
  );
}
