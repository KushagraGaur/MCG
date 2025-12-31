import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <section className="w-full bg-mirika-softGrey py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="space-y-3 text-left md:space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-mirika-forest">
            Get in Touch
          </p>
          <h1 className="text-3xl font-semibold text-mirika-charcoal md:text-4xl">
            Contact Mirika Consulting Group
          </h1>
          <p className="max-w-3xl text-base text-mirika-graphite md:text-lg">
            Share a few details about your organization and your ESG goals, and our experts will
            reach out with a tailored response.
          </p>
        </div>

        <div className="mt-10 md:mt-12">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
