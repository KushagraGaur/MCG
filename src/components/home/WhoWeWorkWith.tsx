"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const qualifiers = [
  {
    title: "Hospitality & Hotels",
    description: "Environmental compliance, resource efficiency, and sustainability certifications",
  },
  {
    title: "Manufacturing & Export-Oriented Businesses",
    description: "Buyer ESG requirements, ISO readiness, and audit preparedness",
  },
  {
    title: "MSMEs & Mid-Sized Companies",
    description: "Early ESG alignment, funding readiness, and regulatory compliance",
  },
  {
    title: "Real Estate, Infrastructure & Logistics",
    description: "Environmental risk management and operational compliance",
  },
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
We work with organizations that are navigating increasing ESG and compliance expectations but lack the internal bandwidth or structured systems to manage them effectively.              </p>
            </div>
            
            {/* Qualifier chips */}
            <div className="space-y-4">
              <p className="font-dm-sans text-lg font-medium text-gray-800">
                Industries We Support:
              </p>
              
             <div className="flex flex-col gap-3">
  {qualifiers.map((item, index) => (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex items-start gap-3 group cursor-pointer"
    >
      {/* Checkmark circle - adjust margin for multi-line */}
      <div className="flex-shrink-0 mt-1 h-8 w-8 rounded-full bg-[#A9D5C9] flex items-center justify-center group-hover:bg-mirika-forest transition-colors duration-300">
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
      
      {/* Text with bold title */}
      <span className="font-dm-sans text-lg text-gray-700 group-hover:text-black transition-colors duration-300">
        <strong className="font-bold">{item.title}</strong> – {item.description}
      </span>
    </motion.div>
  ))}
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
Each engagement is tailored to the operational realities and regulatory exposure of your sector.
              </p>
            </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}