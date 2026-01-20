"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    title: "1. Initial discussion (30–45 mins)",
    description: "Understand your reporting, certification, or ESG priorities.",
  },
  {
    title: "2. Quick diagnostic & scope definition",
    description: "Identify gaps, timelines, and required frameworks.",
  },
  {
    title: "3. Execution plan + hands-on support",
    description: "Clear milestones, owners, and delivery path.",
  },
];

export default function EngagementFlow() {
  return (
    <section className="w-full bg-white py-24 md:py-32 -mt-4">
      <div className="mx-auto max-w-[1420px] px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left side - Steps */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-crimson text-5xl md:text-7xl lg:text-[96px] leading-[0.9] tracking-tight text-black mb-6 text-right">
                How Engagements Typically Start
              </h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-dm-sans text-xl text-gray-600 text-right"
              >
                No obligation. No generic pitch. Just clarity.
              </motion.p>
            </div>
            
            {/* Steps */}
            <div className="space-y-8 pt-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="relative pl-12 border-l-2 border-[#A9D5C9] pb-8 last:pb-0 last:border-l-0"
                >
                  {/* Step number indicator */}
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-mirika-forest flex items-center justify-center">
                    <span className="font-dm-sans font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="font-dm-sans font-bold text-xl text-black">
                      {step.title}
                    </h3>
                    <p className="font-dm-sans text-lg text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Connecting line (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-0 bottom-0 w-0.5 h-8 bg-[#A9D5C9] -translate-x-1/2"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right side - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Image Container */}
<div className="relative rounded-[23px] overflow-hidden shadow-2xl">
  <div className="w-full h-[397px] relative">
    {/* Actual Image Implementation */}
    <Image
      src="/home/hets.jpg"
      alt="Our structured engagement process"
      fill
      className="object-cover"
      priority // Optional: Use this if the image is "above the fold"
    />
  </div>
</div>
            
            {/* Additional Content */}
            <div className="space-y-6">
              <div className="relative bg-[#E8F2F0] rounded-xl p-6">
                <h3 className="font-dm-sans font-bold text-xl text-black mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 font-dm-sans text-gray-600">
                    <span className="text-[#A9D5C9] mt-1">✓</span>
                    <span>Tailored approach to your specific needs</span>
                  </li>
                  <li className="flex items-start gap-2 font-dm-sans text-gray-600">
                    <span className="text-[#A9D5C9] mt-1">✓</span>
                    <span>Clear timelines and deliverables from day one</span>
                  </li>
                  <li className="flex items-start gap-2 font-dm-sans text-gray-600">
                    <span className="text-[#A9D5C9] mt-1">✓</span>
                    <span>Dedicated team with hands-on execution support</span>
                  </li>
                </ul>
              </div>
              
              {/* CTA */}
              <div className="text-center pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-mirika-forest text-white text-sm font-dm-sans font-bold px-8 py-4 rounded-full hover:bg-[#2C554A] transition min-w-[200px] mb-4"
                >
                  Talk to Our ESG Experts
                </Link>
                
                <p className="font-dm-sans text-sm text-gray-600">
                  Our team will respond with the most relevant next step.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}