"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-[1420px] px-8">
        <div className="relative flex items-center justify-center">
          {/* Line with subtle gradient */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200"
          ></motion.div>
          
          {/* Center dot */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mx-6 h-2 w-2 rounded-full bg-mirika-forest"
          ></motion.div>
          
          {/* Line with subtle gradient */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200"
          ></motion.div>
        </div>
      </div>
    </div>
  );
}