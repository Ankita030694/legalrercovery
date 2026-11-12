"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface UdharPaisaNoticeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function UdharPaisaNoticeCTA({
  buttonText = "उधार वसूली का लीगल नोटिस भेजें",
  className = "",
  variant = "primary",
}: UdharPaisaNoticeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                कानूनी वसूली नोटिस • परिसीमा अधिनियम व साक्ष्य अधिनियम के तहत मान्य
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                दोस्त या रिश्तेदार से अटका हुआ उधार पैसा कानूनी तरीके से वापस पाएं
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                अनुभवी एडवोकेट द्वारा तैयार किया गया वैधानिक डिमांड नोटिस (Statutory Demand Notice) देनदार को ईमेल और WhatsApp (Section 63 BSA 2023) से भेजा जाता है। स्पीड पोस्ट वैकल्पिक है (₹450 प्रति पार्टी)। इसमें 15 दिन के भीतर भुगतान की अंतिम मोहलत दी जाती है, जिससे बिना कोर्ट कचहरी के 80% से अधिक मामलों में समझौते का रास्ता साफ हो जाता है।
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all duration-200 shadow-lg shadow-red-900/30 hover:shadow-red-900/50 text-sm sm:text-base cursor-pointer text-center"
                >
                  {buttonText} — ₹{basePrice}
                </button>
                <div className="text-xs text-slate-300 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3">
                  <span>✓ 24 घंटे में एडवोकेट ड्राफ्टिंग</span>
                  <span>•</span>
                  <span>✓ ईमेल + WhatsApp डिजिटल प्रति</span>
                  <span>•</span>
                  <span>✓ केवल ₹{basePrice} (कोई छिपा खर्च नहीं)</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors cursor-pointer text-center"
          >
            {buttonText} (₹{basePrice})
          </button>
        )}
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
