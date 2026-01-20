"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const qualifiers = [
  "Are preparing for BRSR / GRI / ISO certifications",
  "Face export or buyer ESG requirements",
  "Need audit-ready ESG data",
  "Have limited internal bandwidth",
  "Want execution, not just advice",
];

export default function WhoWeWorkWith() {
  return (
    
    <section className="w-full bg-white -mt-20 pt-20">
      
      <div className="mx-auto max-w-[1420px] px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <motion.div 
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="lg:col-span-6 order-2 lg:order-1"
>
  <div className="relative">
    {/* Main image container */}
    <div className="relative rounded-[23px] overflow-hidden shadow-2xl">
      <div className="w-full aspect-square relative">
        <Image
          src="/home/who-we-support.png"
          alt="Organizations MCG Consulting Group typically supports"
          fill
          className="object-cover"
        />
      </div>
    </div>
  </div>
</motion.div>

          
          {/* Right side - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 order-1 lg:order-2 space-y-8"
          >
            <div>
              <h2 className="font-crimson text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight text-black mb-6">
                Who We Work With
              </h2>
              
              <p className="font-dm-sans text-xl text-gray-600 mb-8">
                We partner with forward-thinking organizations that are serious about their ESG journey.
              </p>
            </div>
            
            {/* Qualifier chips */}
            <div className="space-y-4">
              <p className="font-dm-sans text-lg font-medium text-gray-800">
                We typically support organizations that:
              </p>
              
              <div className="flex flex-col gap-3">
                {qualifiers.map((qualifier, index) => (
                  <motion.div
                    key={qualifier}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    {/* Checkmark circle */}
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#A9D5C9] flex items-center justify-center group-hover:bg-mirika-forest transition-colors duration-300">
                      <svg 
                        viewBox="0 0 20 20" 
                        fill="none" 
                        className="h-4 w-4 text-mirika-forest group-hover:text-white transition-colors duration-300"
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
                    
                    {/* Text */}
                    <span className="font-dm-sans text-lg text-gray-700 group-hover:text-black transition-colors duration-300">
                      {qualifier}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Industry types */}
            <div className="pt-6">
              <p className="font-dm-sans text-lg font-medium text-gray-800 mb-4">
                Including:
              </p>
              
              <div className="flex flex-wrap gap-3">
                {[
                  "Export-Oriented Manufacturers",
                  "Infrastructure Firms", 
                  "Regulated Enterprises",
                  "Growth-Stage Companies",
                  "Publicly Listed Entities"
                ].map((industry, index) => (
                  <motion.span
                    key={industry}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index * 0.05) }}
                    className="inline-flex items-center rounded-full bg-[#E8F2F0] px-4 py-2 text-sm font-dm-sans text-gray-700 hover:bg-[#A9D5C9] hover:text-black transition-all duration-300"
                  >
                    {industry}
                  </motion.span>
                ))}
              </div>
            </div>
            
            {/* Bottom note */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-6"
            >
              <p className="font-dm-sans text-lg text-gray-600 border-l-4 border-[#A9D5C9] pl-4 py-2">
                Our approach is tailored to your specific context, ensuring practical solutions that drive real impact.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}