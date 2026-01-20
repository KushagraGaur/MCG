"use client";

import { motion } from "framer-motion";

export default function ChallengeSection() {
  return (
    <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#E8F2F0] rounded-full opacity-30 -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#A9D5C9] rounded-full opacity-20 -z-10"></div>
      
      <div className="mx-auto max-w-[1420px] px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Eyebrow */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-dm-sans font-bold uppercase tracking-widest text-mirika-forest"
            >
              The Challenge
            </motion.p>
            
            {/* Main Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-crimson text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight text-black"
            >
              Setting and delivering on ESG and sustainability goals can feel overwhelming.
            </motion.h2>
            
            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-left"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Challenge 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-4">
                    <div className="h-10 w-10 rounded-full bg-[#E8F2F0] flex items-center justify-center text-xl">
                      📜
                    </div>
                  </div>
                  <p className="font-dm-sans text-lg text-gray-600">
                    Businesses are navigating new regulations like BRSR, pressure from global buyers, and complex requirements.
                  </p>
                </motion.div>
                
                {/* Challenge 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-4">
                    <div className="h-10 w-10 rounded-full bg-[#E8F2F0] flex items-center justify-center text-xl">
                      📊
                    </div>
                  </div>
                  <p className="font-dm-sans text-lg text-gray-600">
                    Many organizations are stuck in spreadsheets, disconnected data, and one-off reports that don't drive real change.
                  </p>
                </motion.div>
                
                {/* Challenge 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-4">
                    <div className="h-10 w-10 rounded-full bg-[#E8F2F0] flex items-center justify-center text-xl">
                      🎯
                    </div>
                  </div>
                  <p className="font-dm-sans text-lg text-gray-600">
                    Rising expectations from investors, communities, and stakeholders create additional complexity.
                  </p>
                </motion.div>
              </div>
              
              {/* Solution Statement */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-12 pt-8 border-t border-gray-200"
              >
                <div className="bg-gradient-to-r from-[#E8F2F0] to-[#A9D5C9] rounded-2xl p-8">
                  <h3 className="font-crimson text-3xl text-black mb-4">
                    Our Solution
                  </h3>
                  <p className="font-dm-sans text-2xl font-bold text-black">
                    MCG exists to turn this complexity into a clear, actionable path.
                  </p>
                  <div className="mt-6 h-1 w-24 bg-mirika-forest rounded-full"></div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}