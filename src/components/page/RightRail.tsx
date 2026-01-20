"use client";

import { motion } from "framer-motion";

type RightRailItem = {
  title: string;
  description: string;
  items: string[];
};

type RightRailProps = {
  title?: string;
  items: RightRailItem[];
};

export default function RightRail({
  title = "Credibility Highlights",
  items,
}: RightRailProps) {
  return (
    <aside
      className="sticky top-8 h-[calc(100vh-2rem)] flex flex-col rounded-2xl border border-gray-200 bg-white shadow-lg"
      aria-label="Credibility highlights"
    >
      {/* Scrollable content container */}
      <div className="flex-1 overflow-y-auto p-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-crimson text-3xl text-black mb-6"
        >
          {title}
        </motion.h2>
        
        <div className="space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl bg-[#E8F2F0] p-6 border border-gray-100"
            >
              <h3 className="font-dm-sans text-lg font-bold text-black mb-3">
                {item.title}
              </h3>
              
              <p className="font-dm-sans text-gray-600 mb-4">
                {item.description}
              </p>
              
              <ul className="space-y-2.5">
                {item.items.map((listItem, idx) => (
                  <motion.li 
                    key={listItem}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.05) }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1.5 flex-shrink-0">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#A9D5C9]"></div>
                    </div>
                    <span className="font-dm-sans text-gray-700">
                      {listItem}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Decorative element - placed inside scrollable area */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 pt-6 border-t border-gray-200 text-center"
        >
          <p className="font-dm-sans text-sm text-gray-500">
            Ready to build your ESG credibility?
          </p>
          <div className="mt-3 h-1 w-12 bg-[#A9D5C9] mx-auto rounded-full"></div>
        </motion.div>
      </div>
    </aside>
  );
}