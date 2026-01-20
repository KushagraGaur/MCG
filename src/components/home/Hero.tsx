"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // For scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Only zoom effect - no position movement
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]); // Zooms from 100% to 130%

  return (
    <section ref={containerRef} className="relative w-full bg-white overflow-hidden min-h-screen -mb-20">
      
      {/* Main Hero Content */}
      <div className="relative pt-10 pb-40">
        <div className="mx-auto max-w-[1420px] px-8">
          
          {/* Main Heading - From Figma */}
          <h1 className="font-crimson font-semibold text-center text-5xl md:text-7xl lg:text-6xl leading-none tracking-tight text-black max-w-7xl mx-auto">
            Accelerating ESG, Sustainability, and Compliance Outcomes for Indian Enterprises
          </h1>
          
          {/* Subtitle */}
          <p className="mt-8 text-center text-xl text-gray-600 max-w-6xl mx-auto font-dm-sans">
            From ESG reporting to carbon accounting and certifications — we provide end-to-end planning, 
            execution, and hands-on support. Trusted by export-oriented manufacturers, infrastructure firms, 
            and regulated enterprises.
          </p>
          
          {/* CTA Buttons - From Figma */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
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
          
          {/* Tablet - Fixed in place, no movement */}
          <div className="relative mt-32 mx-auto w-full max-w-[1200px] mt-8">
            {/* Tablet Frame - Clean border */}
            <div className="relative rounded-[30px] overflow-hidden shadow-2xl border-[12px] border-mirika-forest bg-mirika-forest">
              {/* Tablet Screen Container */}
              <div className="relative overflow-hidden rounded-[18px] h-full">
                {/* Image zooms in as you scroll */}
                <motion.div 
                  style={{ scale: imageScale }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/hero/home-hero.jpeg"
                    alt="Sustainability and ESG consulting by MCG Consulting Group"
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                </motion.div>
                
                {/* Subtle screen reflection effect */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/10 mix-blend-overlay"></div>
              </div>
              
              {/* Home Button */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-1.5 bg-white/40 rounded-full"></div>
              </div>
              
              {/* Camera/speaker cutout */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/30"></div>
                <div className="w-16 h-1.5 rounded-full bg-white/30"></div>
              </div>
            </div>

          </div>
          
        </div>
      </div>
     
    </section>
  );
}