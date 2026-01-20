"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <footer className="bg-mirika-forest text-white ">
      <div className="mx-auto max-w-[1420px] px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left side - Copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="font-dm-sans text-lg text-white/80">
              © {currentYear} MCG Consulting Group. All rights reserved.
            </p>
          </motion.div>
          
          {/* Center - Logo/Name */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link 
              href="/" 
              className="text-2xl font-dm-sans font-medium tracking-tight text-white hover:text-white/80 transition"
            >
              MIRIKA CONSULTING GROUP
            </Link>
            <p className="mt-2 font-dm-sans text-sm text-white/60">
              Clear insights. Real impact.
            </p>
            <br></br>
            <p>
              +91 8295166306, +91 9582275776
            </p>
          </motion.div>
          
          {/* Right side - Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              {footerLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="font-dm-sans text-white/80 hover:text-white transition-colors text-lg"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Divider */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-white/20"
        >
          <div className="text-center">
            <p className="font-dm-sans text-sm text-white/60">
              ESG & Sustainability Consulting • ESG Reporting • Carbon Accounting
            </p>
            <p className="mt-2 font-dm-sans text-xs text-white/40">
              Based in India • Serving Enterprises Nationwide
            </p>
          </div>
        </motion.div>
        
        {/* Bottom decorative element */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="mt-8 h-px bg-gradient-to-r from-transparent via-[#A9D5C9] to-transparent"
        ></motion.div>
      </div>
      
      
    </footer>
  );
}