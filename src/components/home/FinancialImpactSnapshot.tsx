"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
    <section className="w-full bg-white pt-16">
      <div className="mx-auto max-w-[1420px] px-8">
        {/* Header Section - Reduced bottom margin */}
        <div className="mb-8"> {/* Reduced from mb-16 to mb-8 */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-crimson text-5xl md:text-7xl lg:text-[96px] leading-[0.9] tracking-tight text-black text-center mb-6"
          >
            Financial Impact Snapshot
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-xl md:text-2xl text-gray-600 max-w-[907px] mx-auto font-dm-sans"
          >
            A practical view of where ESG programs typically get expensive — and how MCG helps reduce cost, rework, and delays.
          </motion.p>
        </div>

        {/* Screenshot Image - From Figma - Reduced bottom margin */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden shadow-2xl mb-8" // Reduced from mb-16 to mb-8
        >
          
        </motion.div>

        {/* Cost Breakdown Table - Reduced top padding */}
        <div className="mb-20 pt-4"> {/* Added pt-4 to reduce space above table */}
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-8 border-b-2 border-gray-200 pb-5 mb-8 px-0">
            <div className="col-span-12 md:col-span-6">
              <h3 className="font-dm-sans font-bold text-lg text-black text-left">Cost Driver</h3>
            </div>
            <div className="col-span-6 md:col-span-3">
              <h3 className="font-dm-sans font-bold text-lg text-black text-left">Typical Cost (Without MCG)</h3>
            </div>
            <div className="col-span-6 md:col-span-3">
              <h3 className="font-dm-sans font-bold text-lg text-black text-left">How MCG Reduces This</h3>
            </div>
          </div>

          {/* Table Rows */}
          <div className="space-y-4">
            {costItems.map((item, index) => (
              <motion.div
                key={item.driver}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="grid grid-cols-12 gap-8 py-6 px-0 hover:bg-gray-50 rounded-xl transition-colors duration-200"
              >
                <div className="col-span-12 md:col-span-6">
                  <p className="font-dm-sans text-base text-gray-800 text-left">{item.driver}</p>
                </div>
                <div className="col-span-6 md:col-span-3">
                  <p className="font-dm-sans font-bold text-lg text-black text-left">
                    {item.withoutCost}
                  </p>
                </div>
                <div className="col-span-6 md:col-span-3">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <div className="h-7 w-7 rounded-full bg-[#A9D5C9] flex items-center justify-center">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className="h-3.5 w-3.5 text-mirika-forest"
                        >
                          <path
                            d="M5 10.5l3.2 3.2L15 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="font-dm-sans text-sm text-gray-600 text-left">{item.mcgReduction}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Footnote */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-lg text-black mt-12 mb-12 font-dm-sans"
          >
            Illustrative estimates for planning purposes. Actual costs vary by company size, data readiness, and reporting scope.
          </motion.p>
        </div>

        {/* Summary Card - From Figma */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#E8F2F0] rounded-xl p-8 md:p-12 mb-16"
        >
          <div className="text-center max-w-[969px] mx-auto">
            <h3 className="font-crimson text-3xl md:text-[45px] leading-[0.9] tracking-tight text-black mb-6">
              Reduce ESG execution cost and complexity
            </h3>
            
            <p className="font-dm-sans text-xl text-gray-600 mb-8 max-w-[907px] mx-auto">
              For most organizations, we help reduce overall effort, rework, and delay costs by at least 50% by bringing structure, templates, and hands-on execution support.
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center mb-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-mirika-forest text-white text-sm font-dm-sans font-bold px-8 py-4 rounded-full hover:bg-[#2C554A] transition min-w-[200px]"
              >
                Talk to Our ESG Experts
              </Link>
            </div>
            
            <p className="font-dm-sans text-sm text-gray-600">
              We'll respond with the best next step based on your industry and reporting needs.
            </p>
          </div>
        </motion.div>

        {/* Mobile View */}
        <div className="md:hidden space-y-4">
          <h3 className="font-dm-sans font-bold text-xl text-black mb-4">Cost Breakdown</h3>
          {costItems.map((item, index) => (
            <motion.div
              key={item.driver}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <h4 className="font-dm-sans font-bold text-base text-black mb-3 text-left">{item.driver}</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-dm-sans text-sm text-gray-600">Typical Cost</span>
                  <span className="font-dm-sans font-bold text-base text-black">{item.withoutCost}</span>
                </div>
                <div className="flex items-start gap-2 pt-2 border-t border-gray-100">
                  <div className="mt-1 flex-shrink-0">
                    <div className="h-5 w-5 rounded-full bg-[#A9D5C9] flex items-center justify-center">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-2.5 w-2.5 text-mirika-forest"
                      >
                        <path
                          d="M5 10.5l3.2 3.2L15 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="font-dm-sans text-sm text-gray-600 text-left">{item.mcgReduction}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}