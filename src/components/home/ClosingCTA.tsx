import MainLayout from "@/components/layout/MainLayout";
import { siteConfig } from "@/lib/theme";

export default function ClosingCTA() {
  return (
    <section className="py-20">
      <MainLayout padded={false}>
        <div className="rounded-3xl bg-mirika-forest px-6 py-16 text-center text-white shadow-[0_18px_52px_-32px_rgba(0,0,0,0.45)] md:px-12">
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-mirika-earth">
              Let&apos;s Move Forward
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Your Path to Sustainable Growth Starts with MCG.
            </h2>
            <p className="text-lg text-mirika-earth">
              Contact us today to explore how we can support your ESG journey.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-mirika-forest transition hover:bg-mirika-earth hover:text-mirika-charcoal">
              <span>Get Started with MCG</span>
            </button>
          </div>
          <p className="mt-6 text-sm text-mirika-earth/80">
            {siteConfig.title} — Clear insights. Real impact.
          </p>
        </div>
      </MainLayout>
    </section>
  );
}
