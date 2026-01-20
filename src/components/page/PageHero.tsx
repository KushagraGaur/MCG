"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type PageHeroProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
  primaryCtaLabel: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

export default function PageHero({
  title,
  subtitle,
  eyebrow,
  primaryCtaLabel,
  primaryCtaHref = "/contact",
  secondaryCtaLabel = "Explore Services",
  secondaryCtaHref = "/",
}: PageHeroProps) {
  return (
    <section className="relative w-full bg-white py-20 md:py-28 overflow-hidden -mt-16">
      {/* Background decorative elements - REMOVED */}
      
      {/* ===== MAIN CONTAINER - Adjust spacing here ===== */}
      <div className="relative mx-auto max-w-[1420px] px-6 -mb-20">
        
        {/* ===== CONTENT WRAPPER - Controls text width ===== */}
        {/* 
          Changed: Added mx-auto text-center to center the content
          Also changed max-w-4xl to control the width of centered content
        */}
        <div className="max-w-4xl mx-auto text-center">
          
          {/* ===== CONTENT AREA ===== */}
          {eyebrow && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-dm-sans font-bold uppercase tracking-widest text-mirika-forest mb-4"
            >
              {eyebrow}
            </motion.p>
          )}
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-crimson text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-black mb-6"
          >
            {title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-dm-sans text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            {subtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4" /* Changed: items-center justify-center */
          >
            <Link
              href={primaryCtaHref}
              className="inline-flex items-center justify-center bg-mirika-forest text-white text-sm font-dm-sans font-bold px-8 py-4 rounded-full hover:bg-[#2C554A] transition min-w-[200px]"
            >
              {primaryCtaLabel}
            </Link>
            
            <Link
              href={secondaryCtaHref}
              className="inline-flex items-center justify-center bg-[#A9D5C9] text-black text-sm font-dm-sans font-bold px-8 py-4 rounded-full hover:bg-[#9FCEC2] transition min-w-[200px]"
            >
              {secondaryCtaLabel}
            </Link>
          </motion.div>
        </div>
        {/* ===== END CONTENT WRAPPER ===== */}
        
      </div>
      {/* ===== END MAIN CONTAINER ===== */}
    </section>
  );
}