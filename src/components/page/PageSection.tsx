"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PageSectionProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  titleSize?: string;
  titleFont?: string;
};

export default function PageSection({
  title,
  eyebrow,
  description,
  children,
  className,
  titleSize = "text-3xl md:text-4xl",
  titleFont = "font-crimson",
}: PageSectionProps) {
  return (
    <section className={`${className} text-center`}> {/* Added text-center here */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4 mb-8"
      >
        {eyebrow && (
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-dm-sans font-bold uppercase tracking-widest text-mirika-forest"
          >
            {eyebrow}
          </motion.p>
        )}
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`${titleFont} ${titleSize} leading-[0.9] tracking-tight text-black`}
        >
          {title}
        </motion.h2>
        
        {description && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-dm-sans text-xl text-gray-600 max-w-4xl mx-auto"
          >
            {description}
          </motion.p>
        )}
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        {children}
      </motion.div>
    </section>
  );
}