"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const valueCards = [
  {
    title: "Reduce time-to-reporting and audit readiness",
    description: "Get structured data capture, clear templates, and review cycles that make reporting predictable — not painful.",
    icon: "📋"
  },
  {
    title: "Avoid compliance surprises",
    description: "Stay aligned with evolving frameworks (GRI, BRSR, ISO) and reduce last-minute risk during reviews and certifications.",
    icon: "🛡️"
  },
  {
    title: "Turn sustainability into business advantage",
    description: "Strengthen buyer confidence, export competitiveness, and partner trust with credible, consistent disclosures.",
    icon: "📈"
  },
  {
    title: "Get hands-on execution support",
    description: "We don't just advise — we help you implement, coordinate stakeholders, and stay on track to outcomes.",
    icon: "👨‍💼"
  },
];

export default function ValueAccelerationVisuals() {
  return (
    <section className="relative w-full bg-white overflow-hidden -mt-20">
      {/* ===== Part 1: A Clear Path to ESG Outcomes ===== */}
      <div className="relative py-24 md:py-32">
        <div className="mx-auto max-w-[1420px] px-8">
          {/* Main Title - Centered with proper margins */}
          <div className="relative mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-crimson text-center text-5xl md:text-7xl lg:text-[96px] leading-[0.9] tracking-tight text-black mb-8"
            >
              A Clear Path to ESG Outcomes
            </motion.h2>
            
            {/* Description text - Centered */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center text-xl md:text-2xl text-gray-600 max-w-[990px] mx-auto font-dm-sans"
            >
              Two realities: slow, fragmented progress without support — or a structured path with MCG that compresses time to impact.
            </motion.p>
          </div>
          
          {/* Comparison Section - Without MCG Full Width */}
          <div className="space-y-16">
            {/* Without MCG - Left aligned, full width */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="text-left">
                <h3 className="font-crimson text-3xl md:text-4xl text-black mb-3">
                  Without MCG
                </h3>
                <p className="font-dm-sans text-lg md:text-xl text-gray-500">
                  Complexity, delays, fragmented ownership
                </p>
              </div>
              
              {/* Image Container - Full width */}
              <div className="relative rounded-[23px] overflow-hidden shadow-2xl bg-gray-100">
                <div className="w-full h-[368px] md:h-[400px] relative">
                  <Image
                    src="/home/without-mcg.png"
                    alt="Without MCG: complex and slow path to ESG outcomes"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                </div>
              </div>
            </motion.div>
            
            {/* With MCG - Right aligned, full width */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="text-right">
                <h3 className="font-crimson text-3xl md:text-4xl text-black mb-3">
                  With MCG
                </h3>
                <p className="font-dm-sans text-lg md:text-xl text-gray-500">
                  Structured execution, hands-on support, faster time-to-value
                </p>
              </div>
              
              {/* Image Container - Full width */}
              <div className="relative rounded-[23px] overflow-hidden shadow-2xl bg-gray-100">
                <div className="w-full h-[368px] md:h-[400px] relative">
                  <Image
                    src="/home/with-mcg.png"
                    alt="With MCG: structured, accelerated path to ESG outcomes"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Final text below images */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center max-w-[703px] mx-auto mt-20 mb-8" 
            >
            <p className="font-dm-sans text-xl text-gray-500">
              You get a clear plan, clear owners, and a clear path to measurable ESG progress — without adding unnecessary complexity to your team.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ===== Part 2: What this means for you ===== */}
      {/* REMOVED: py-16 md:py-24 to reduce space above */}
      <div className="bg-white -mt-20">
        
        <div className="mx-auto max-w-[1420px] px-8">
          {/* True 50/50 split - Text on left, Image on right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left side - Title and description - 6 columns for true 50% */}
            <div className="lg:col-span-6 space-y-8"> {/* Changed from col-span-7 to col-span-6 */}
              <motion.h2 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-crimson text-5xl md:text-7xl lg:text-[96px] leading-[0.9] tracking-tight text-black"
              >
                What this means for you
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-dm-sans text-xl text-gray-500"
              >
                Whether you're preparing for audits, export requirements, investor scrutiny, or internal sustainability targets — we help you move from uncertainty to execution.
              </motion.p>
            </div>
            
            {/* Right side - Image - 6 columns for true 50% */}
            <motion.div 
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="lg:col-span-6"
>
  <div className="relative rounded-[23px] overflow-hidden shadow-2xl bg-gray-100 w-full h-full">
    <div className="w-full aspect-[4/3] relative">
      <Image
        src="/home/wtmfu.png"
        alt="ESG Impact Visualization"
        fill
        className="object-cover"
        priority
      />
    </div>
  </div>
</motion.div>

          </div>
          
          {/* Value cards below (2x2 grid) */}
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {valueCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + (index * 0.1) }}
                  className="relative bg-[#9FCEC2]/35 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl flex-shrink-0">{card.icon}</div>
                    <div>
                      <h3 className="font-dm-sans font-bold text-lg text-black mb-2">
                        {card.title}
                      </h3>
                      <p className="font-dm-sans text-gray-600">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#A9D5C9] text-black text-sm font-dm-sans font-bold px-8 py-4 rounded-full hover:bg-[#9FCEC2] transition min-w-[200px]"
              >
                Talk to Our ESG Experts
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-mirika-forest text-white text-sm font-dm-sans font-bold px-8 py-4 rounded-full hover:bg-[#2C554A] transition min-w-[200px]"
              >
                Explore Our Services
              </Link>
            </div>
            <p className="font-dm-sans text-lg text-gray-600 max-w-4xl mx-auto">
              We'll respond with the best next step based on your industry and reporting needs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}