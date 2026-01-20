"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";

const PHONE_NUMBER = "+91 8295166306";

export default function FloatingCallButton() {
  const [showPhoneDialog, setShowPhoneDialog] = useState(false);

  const handlePhoneNumberClick = () => {
    window.location.href = `tel:${PHONE_NUMBER.replace(/\s/g, '')}`;
    setShowPhoneDialog(false);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowPhoneDialog(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-mirika-forest text-white shadow-2xl hover:shadow-3xl hover:bg-[#2C554A] transition-all duration-300 group"
        aria-label="Call our experts"
      >
        <Phone className="h-6 w-6 md:h-7 md:w-7" />
        
        {/* Tooltip on hover */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-black text-white font-dm-sans text-sm font-medium py-2 px-3 rounded-lg whitespace-nowrap">
            Call Our Experts
          </div>
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-black rotate-45"></div>
        </div>
      </motion.button>

      {/* Phone Dialog Modal */}
      <AnimatePresence>
        {showPhoneDialog && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPhoneDialog(false)}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            >
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
              >
                {/* Close button */}
                <button
                  onClick={() => setShowPhoneDialog(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>

                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#E8F2F0] mb-4">
                    <Phone className="h-8 w-8 text-mirika-forest" />
                  </div>
                  <h3 className="font-dm-sans text-2xl font-bold text-black mb-2">
                    Call Our ESG Experts
                  </h3>
                  <p className="font-dm-sans text-gray-600">
                    Click the number below to call our team directly
                  </p>
                </div>

                <div className="mb-8">
                  <button
                    onClick={handlePhoneNumberClick}
                    className="w-full flex items-center justify-center p-6 rounded-xl border-2 border-mirika-forest bg-[#E8F2F0]/30 hover:bg-[#E8F2F0] transition-all duration-300 group"
                  >
                    <span className="font-dm-sans text-2xl font-bold text-mirika-forest group-hover:scale-105 transition-transform">
                      {PHONE_NUMBER}
                    </span>
                  </button>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setShowPhoneDialog(false)}
                    className="font-dm-sans text-gray-600 hover:text-gray-800 transition-colors px-4 py-2 rounded-lg hover:bg-gray-100"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}