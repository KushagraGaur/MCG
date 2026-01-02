import Image from "next/image";
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
    <section className="bg-mirika-softGrey py-10 md:py-14">
      <MainLayout>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="mx-auto w-full max-w-lg">
              <Image
                src="/home/who-we-support.png"
                alt="Organizations MCG Consulting Group typically supports"
                width={900}
                height={900}
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>
          </div>
          <div className="order-1 space-y-4 text-left lg:order-2 lg:col-span-7">
            <p className="text-base font-medium text-mirika-charcoal md:text-lg">
              We typically support organizations that:
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {qualifiers.map((qualifier) => (
                <span
                  key={qualifier}
                  className="inline-flex items-center rounded-full border border-mirika-earth/50 bg-white px-4 py-2 text-sm text-mirika-graphite transition hover:border-mirika-forest/60 hover:bg-mirika-emerald/5 md:px-5 md:py-2.5 md:text-base"
                >
                  {qualifier}
                </span>
              ))}
            </div>
          </div>
        </div>
      </MainLayout>
    </section>
  );
}
