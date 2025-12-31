"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  role: string;
  country: string;
  industry: string;
  industryOther: string;
  needs: string[];
  description: string;
  contactMethod: string;
  timeline: string;
};

const industryOptions = [
  "Textiles",
  "Manufacturing",
  "Transportation & Logistics",
  "Hospitality",
  "Retail",
  "Healthcare",
  "Steel",
  "Chemical",
  "Pharmaceutical",
  "Other",
];

const helpOptions = [
  "ESG Reporting (BRSR, GRI, ISO)",
  "Carbon Accounting & Credits",
  "Get ESR Rating",
  "Sustainability Strategy & Roadmap",
  "Training & Capacity Building",
  "Other",
];

const timelineOptions = [
  "Exploring options (3–6 months)",
  "Planning in the next 1–3 months",
  "Need help as soon as possible",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    country: "",
    industry: "",
    industryOther: "",
    needs: [],
    description: "",
    contactMethod: "Email",
    timeline: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [industryOtherError, setIndustryOtherError] = useState("");

  const handleChange = (key: keyof FormState, value: string | string[]) => {
    if (key === "industry" && value !== "Other") {
      setIndustryOtherError("");
      setForm((prev) => ({ ...prev, industryOther: "" }));
    }
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleNeed = (need: string) => {
    setForm((prev) => {
      const exists = prev.needs.includes(need);
      const updatedNeeds = exists ? prev.needs.filter((n) => n !== need) : [...prev.needs, need];
      return { ...prev, needs: updatedNeeds };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.industry === "Other" && !form.industryOther.trim()) {
      setIndustryOtherError("Please specify your industry.");
      return;
    }
    setIndustryOtherError("");
    // TODO: In a future step, send this form data to mirika.consulting@gmail.com
    // via an API route (e.g. /api/contact) using a mail service or Nodemailer.
    // eslint-disable-next-line no-console
    console.log("Contact form submission", form);
    setSuccessMessage("Thank you for reaching out. Our team will contact you shortly.");
    setForm({
      name: "",
      email: "",
      phone: "",
      organization: "",
      role: "",
      country: "",
      industry: "",
      industryOther: "",
      needs: [],
      description: "",
      contactMethod: "Email",
      timeline: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-mirika-earth/40 bg-white p-6 shadow-sm md:p-8"
    >
      {successMessage && (
        <div className="rounded-lg border border-mirika-emerald/40 bg-mirika-emerald/10 px-4 py-2 text-sm text-mirika-forest">
          {successMessage}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm font-medium text-mirika-charcoal" htmlFor="name">
            Your Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full rounded-lg border border-mirika-earth/60 px-3 py-2.5 text-sm text-mirika-graphite focus:border-mirika-forest/60 focus:outline-none focus:ring-2 focus:ring-mirika-forest/60"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-mirika-charcoal" htmlFor="email">
            Work Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full rounded-lg border border-mirika-earth/60 px-3 py-2.5 text-sm text-mirika-graphite focus:border-mirika-forest/60 focus:outline-none focus:ring-2 focus:ring-mirika-forest/60"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-mirika-charcoal" htmlFor="phone">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="e.g., +91 98XXXXXXX or (555) 123-4567"
          value={form.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className="w-full rounded-lg border border-mirika-earth/60 px-3 py-2.5 text-sm text-mirika-graphite focus:border-mirika-forest/60 focus:outline-none focus:ring-2 focus:ring-mirika-forest/60"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm font-medium text-mirika-charcoal" htmlFor="organization">
            Organization / Company *
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            required
            value={form.organization}
            onChange={(e) => handleChange("organization", e.target.value)}
            className="w-full rounded-lg border border-mirika-earth/60 px-3 py-2.5 text-sm text-mirika-graphite focus:border-mirika-forest/60 focus:outline-none focus:ring-2 focus:ring-mirika-forest/60"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-mirika-charcoal" htmlFor="role">
            Your Role / Title
          </label>
          <input
            id="role"
            name="role"
            type="text"
            value={form.role}
            onChange={(e) => handleChange("role", e.target.value)}
            className="w-full rounded-lg border border-mirika-earth/60 px-3 py-2.5 text-sm text-mirika-graphite focus:border-mirika-forest/60 focus:outline-none focus:ring-2 focus:ring-mirika-forest/60"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm font-medium text-mirika-charcoal" htmlFor="country">
            Country / Region
          </label>
          <input
            id="country"
            name="country"
            type="text"
            value={form.country}
            onChange={(e) => handleChange("country", e.target.value)}
            className="w-full rounded-lg border border-mirika-earth/60 px-3 py-2.5 text-sm text-mirika-graphite focus:border-mirika-forest/60 focus:outline-none focus:ring-2 focus:ring-mirika-forest/60"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-mirika-charcoal" htmlFor="industry">
            Industry
          </label>
          <select
            id="industry"
            name="industry"
            value={form.industry}
            onChange={(e) => handleChange("industry", e.target.value)}
            className="w-full rounded-lg border border-mirika-earth/60 px-3 py-2.5 text-sm text-mirika-graphite focus:border-mirika-forest/60 focus:outline-none focus:ring-2 focus:ring-mirika-forest/60"
          >
            <option value="">Select an industry</option>
            {industryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {form.industry === "Other" && (
            <div className="space-y-1 pt-2">
              <label className="text-sm font-medium text-mirika-charcoal" htmlFor="industryOther">
                Please specify your industry
              </label>
              <input
                id="industryOther"
                name="industryOther"
                type="text"
                placeholder="Type your industry"
                value={form.industryOther}
                onChange={(e) => handleChange("industryOther", e.target.value)}
                className="w-full rounded-lg border border-mirika-earth/60 px-3 py-2.5 text-sm text-mirika-graphite focus:border-mirika-forest/60 focus:outline-none focus:ring-2 focus:ring-mirika-forest/60"
                required={form.industry === "Other"}
              />
              {industryOtherError && (
                <p className="text-xs text-red-600">{industryOtherError}</p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-mirika-charcoal">What do you need help with?</p>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {helpOptions.map((option) => (
            <label key={option} className="flex items-start gap-2 text-sm text-mirika-graphite">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-mirika-earth/70 text-mirika-forest focus:ring-mirika-forest/70"
                checked={form.needs.includes(option)}
                onChange={() => toggleNeed(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-mirika-charcoal" htmlFor="description">
          Tell us briefly about your ESG goals or challenges
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={form.description}
          onChange={(e) => handleChange("description", e.target.value)}
          className="w-full rounded-lg border border-mirika-earth/60 px-3 py-2.5 text-sm text-mirika-graphite focus:border-mirika-forest/60 focus:outline-none focus:ring-2 focus:ring-mirika-forest/60"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <p className="text-sm font-medium text-mirika-charcoal">Preferred contact method</p>
          <div className="flex flex-col gap-2">
            {["Email", "Video call", "Phone"].map((method) => (
              <label key={method} className="flex items-center gap-2 text-sm text-mirika-graphite">
                <input
                  type="radio"
                  name="contactMethod"
                  value={method}
                  checked={form.contactMethod === method}
                  onChange={(e) => handleChange("contactMethod", e.target.value)}
                  className="h-4 w-4 border-mirika-earth/70 text-mirika-forest focus:ring-mirika-forest/70"
                />
                <span>{method}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-mirika-charcoal" htmlFor="timeline">
            Timeline / urgency
          </label>
          <select
            id="timeline"
            name="timeline"
            value={form.timeline}
            onChange={(e) => handleChange("timeline", e.target.value)}
            className="w-full rounded-lg border border-mirika-earth/60 px-3 py-2.5 text-sm text-mirika-graphite focus:border-mirika-forest/60 focus:outline-none focus:ring-2 focus:ring-mirika-forest/60"
          >
            <option value="">Select a timeline</option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-mirika-forest px-6 py-3 text-sm font-medium text-white transition hover:bg-mirika-emerald md:w-auto md:text-base"
        >
          Send
        </button>
        <p className="mt-3 text-xs text-mirika-graphite md:text-sm">
          One of our ESG experts will review your details and reach out to you directly with next
          steps.
        </p>
      </div>
    </form>
  );
}
