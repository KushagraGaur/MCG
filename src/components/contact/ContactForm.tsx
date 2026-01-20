"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

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

const PHONE_NUMBER = "+91 8295166306";

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
  const [showPhoneDialog, setShowPhoneDialog] = useState(false);

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.industry === "Other" && !form.industryOther.trim()) {
      setIndustryOtherError("Please specify your industry.");
      return;
    }
    setIndustryOtherError("");
    await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});

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

  const handleCallClick = () => {
    setShowPhoneDialog(true);
  };

  const handlePhoneNumberClick = () => {
    window.location.href = `tel:${PHONE_NUMBER.replace(/\s/g, '')}`;
    setShowPhoneDialog(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-[1200px] mx-auto"
    >
      {/* Header Section */}
      <div className="text-center mb-12">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-dm-sans font-bold uppercase tracking-widest text-mirika-forest mb-4"
        >
          Get in Touch
        </motion.p>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-crimson text-5xl md:text-6xl leading-[0.9] tracking-tight text-black mb-6"
        >
          Contact Our ESG Experts
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-dm-sans text-xl text-gray-600 max-w-3xl mx-auto mb-10"
        >
          Fill out the form below and our ESG experts will reach out within 1-2 business days.
        </motion.p>

        {/* Phone Call Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <button
            onClick={handleCallClick}
            className="inline-flex items-center gap-3 bg-white text-mirika-forest font-dm-sans font-bold px-8 py-4 rounded-full hover:bg-gray-50 hover:scale-105 transition-all duration-300 min-w-[200px] border-2 border-mirika-forest shadow-lg hover:shadow-xl"
          >
            <Phone className="h-5 w-5" />
            Call Our Experts
          </button>
        </motion.div>
      </div>

      {/* Phone Dialog Modal */}
      {showPhoneDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#E8F2F0] mb-4">
                <Phone className="h-8 w-8 text-mirika-forest" />
              </div>
              <h3 className="font-dm-sans text-2xl font-bold text-black mb-2">
                Call Our ESG Experts
              </h3>
              <p className="font-dm-sans text-gray-600">
                Click the number below to call our team directly
              </p>
            </div>

            <div className="mb-8">
              <button
                onClick={handlePhoneNumberClick}
                className="w-full flex items-center justify-center p-6 rounded-xl border-2 border-mirika-forest bg-[#E8F2F0]/30 hover:bg-[#E8F2F0] transition-all duration-300 group"
              >
                <span className="font-dm-sans text-2xl font-bold text-mirika-forest group-hover:scale-105 transition-transform">
                  {PHONE_NUMBER}
                </span>
              </button>
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowPhoneDialog(false)}
                className="font-dm-sans text-gray-600 hover:text-gray-800 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Rest of the form remains the same */}
      <form
        onSubmit={handleSubmit}
        className="space-y-8 rounded-3xl bg-white p-8 md:p-12 shadow-xl border border-gray-100"
      >
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-xl border border-green-200 bg-green-50 px-6 py-4 mb-8"
          >
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600">✓</span>
              </div>
              <p className="font-dm-sans text-green-800">{successMessage}</p>
            </div>
          </motion.div>
        )}

        {/* Contact Information */}
        <div className="space-y-6">
          <h4 className="font-dm-sans text-2xl font-bold text-black mb-6">
            Contact Information
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-dm-sans font-medium text-gray-800" htmlFor="name">
                Your Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-5 py-4 font-dm-sans text-gray-700 focus:border-mirika-forest focus:outline-none focus:ring-2 focus:ring-mirika-forest/30 transition hover:border-gray-300"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-dm-sans font-medium text-gray-800" htmlFor="email">
                Work Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-5 py-4 font-dm-sans text-gray-700 focus:border-mirika-forest focus:outline-none focus:ring-2 focus:ring-mirika-forest/30 transition hover:border-gray-300"
                placeholder="john@company.com"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-dm-sans font-medium text-gray-800" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="e.g., +91 98XXXXXXX or (555) 123-4567"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-5 py-4 font-dm-sans text-gray-700 focus:border-mirika-forest focus:outline-none focus:ring-2 focus:ring-mirika-forest/30 transition hover:border-gray-300"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-dm-sans font-medium text-gray-800" htmlFor="contactMethod">
                Preferred Contact Method
              </label>
              <select
                id="contactMethod"
                name="contactMethod"
                value={form.contactMethod}
                onChange={(e) => handleChange("contactMethod", e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-5 py-4 font-dm-sans text-gray-700 focus:border-mirika-forest focus:outline-none focus:ring-2 focus:ring-mirika-forest/30 transition hover:border-gray-300"
              >
                {["Email", "Video call", "Phone"].map((method) => (
                  <option key={method} value={method}>
                    {method}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="space-y-6 pt-8">
          <h4 className="font-dm-sans text-2xl font-bold text-black mb-6">
            Company Information
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-dm-sans font-medium text-gray-800" htmlFor="organization">
                Organization / Company *
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                required
                value={form.organization}
                onChange={(e) => handleChange("organization", e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-5 py-4 font-dm-sans text-gray-700 focus:border-mirika-forest focus:outline-none focus:ring-2 focus:ring-mirika-forest/30 transition hover:border-gray-300"
                placeholder="Your company name"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-dm-sans font-medium text-gray-800" htmlFor="role">
                Your Role / Title
              </label>
              <input
                id="role"
                name="role"
                type="text"
                value={form.role}
                onChange={(e) => handleChange("role", e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-5 py-4 font-dm-sans text-gray-700 focus:border-mirika-forest focus:outline-none focus:ring-2 focus:ring-mirika-forest/30 transition hover:border-gray-300"
                placeholder="e.g., Sustainability Manager"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-dm-sans font-medium text-gray-800" htmlFor="country">
                Country / Region
              </label>
              <input
                id="country"
                name="country"
                type="text"
                value={form.country}
                onChange={(e) => handleChange("country", e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-5 py-4 font-dm-sans text-gray-700 focus:border-mirika-forest focus:outline-none focus:ring-2 focus:ring-mirika-forest/30 transition hover:border-gray-300"
                placeholder="e.g., India"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-dm-sans font-medium text-gray-800" htmlFor="industry">
                Industry
              </label>
              <select
                id="industry"
                name="industry"
                value={form.industry}
                onChange={(e) => handleChange("industry", e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-5 py-4 font-dm-sans text-gray-700 focus:border-mirika-forest focus:outline-none focus:ring-2 focus:ring-mirika-forest/30 transition hover:border-gray-300"
              >
                <option value="">Select an industry</option>
                {industryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {form.industry === "Other" && (
                <div className="pt-2">
                  <input
                    id="industryOther"
                    name="industryOther"
                    type="text"
                    placeholder="Please specify your industry"
                    value={form.industryOther}
                    onChange={(e) => handleChange("industryOther", e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-5 py-4 font-dm-sans text-gray-700 focus:border-mirika-forest focus:outline-none focus:ring-2 focus:ring-mirika-forest/30 transition mt-2"
                    required={form.industry === "Other"}
                  />
                  {industryOtherError && (
                    <p className="text-sm text-red-600 mt-1">{industryOtherError}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ESG Needs */}
        <div className="space-y-6 pt-8">
          <h4 className="font-dm-sans text-2xl font-bold text-black mb-6">
            ESG & Sustainability Needs
          </h4>
          
          <div className="space-y-4">
            <p className="font-dm-sans font-medium text-gray-800">
              What do you need help with? (Select all that apply)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {helpOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 hover:border-mirika-forest hover:bg-[#E8F2F0]/30 transition cursor-pointer hover:shadow-md"
                >
                  <input
                    type="checkbox"
                    className="mt-1 h-5 w-5 rounded border-gray-400 text-mirika-forest focus:ring-mirika-forest/30"
                    checked={form.needs.includes(option)}
                    onChange={() => toggleNeed(option)}
                  />
                  <span className="font-dm-sans text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="font-dm-sans font-medium text-gray-800" htmlFor="description">
              Tell us briefly about your ESG goals or challenges
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={form.description}
              onChange={(e) => handleChange("description", e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-5 py-4 font-dm-sans text-gray-700 focus:border-mirika-forest focus:outline-none focus:ring-2 focus:ring-mirika-forest/30 transition hover:border-gray-300"
              placeholder="Share details about your current ESG initiatives, challenges, or goals..."
            />
          </div>
          
          <div className="space-y-2">
            <label className="font-dm-sans font-medium text-gray-800" htmlFor="timeline">
              Timeline / Urgency
            </label>
            <select
              id="timeline"
              name="timeline"
              value={form.timeline}
              onChange={(e) => handleChange("timeline", e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-5 py-4 font-dm-sans text-gray-700 focus:border-mirika-forest focus:outline-none focus:ring-2 focus:ring-mirika-forest/30 transition hover:border-gray-300"
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

        {/* Submit Section */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center bg-mirika-forest text-white font-dm-sans font-bold px-8 py-4 rounded-full hover:bg-[#2C554A] hover:scale-105 transition-all duration-300 min-w-[200px] mx-auto"
          >
            Send Message
            <span className="ml-2">→</span>
          </button>
          
          <p className="mt-6 font-dm-sans text-gray-600 max-w-2xl mx-auto">
            One of our ESG experts will review your details and reach out to you directly with next steps.
          </p>
          
          <div className="mt-8 flex items-center justify-center gap-3 text-gray-500">
            <div className="h-8 w-8 rounded-full bg-[#E8F2F0] flex items-center justify-center">
              <span className="text-mirika-forest text-lg">✓</span>
            </div>
            <span className="font-dm-sans">Response within 1-2 business days</span>
          </div>
        </div>
      </form>
    </motion.div>
  );
}