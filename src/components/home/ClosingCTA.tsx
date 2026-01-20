"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/theme";

export default function ClosingCTA() {
  return (
    <section className="relative w-full py-32 md:py-40">
      {/* Background Image Container */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative w-full h-full">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-mirika-forest to-emerald-900">
            <div className="absolute inset-0 opacity-20" />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-[1420px] px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center"
        >
          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-dm-sans text-2xl md:text-3xl text-white/80 mb-4"
          >
            Let's Move Forward
          </motion.p>

          {/* Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-crimson text-5xl md:text-7xl lg:text-[62px] leading-[0.9] tracking-tight text-white mb-8"
          >
            Your Path to Sustainable Growth Starts with MCG.
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-dm-sans text-xl text-white/80 max-w-[943px] mx-auto mb-12"
          >
            Contact us today to explore how we can support your ESG journey.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-mirika-forest text-sm font-dm-sans font-bold px-8 py-4 rounded-full hover:bg-[#E8F2F0] hover:scale-105 transition-all duration-300 min-w-[220px]"
            >
              Get Started with MCG
            </Link>
          </motion.div>

          {/* Company Tagline */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="border-t border-white/20 pt-8"
          >
            <p className="font-dm-sans text-xl text-white/80">
              {siteConfig.title} — Clear insights. Real impact.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
