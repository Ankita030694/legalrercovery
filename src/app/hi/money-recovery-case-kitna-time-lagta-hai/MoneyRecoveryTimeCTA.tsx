"use client";

import React, { useState } from "react";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface MoneyRecoveryTimeCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function MoneyRecoveryTimeCTA({
  buttonText = "मनी रिकवरी लीगल नोटिस भेजें",
  className = "",
  variant = "primary",
}: MoneyRecoveryTimeCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-5 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                कोर्ट केस से पहले तेज़ समाधान • 15 दिन की वैधानिक भुगतान मांग
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                कोर्ट में साल भर का इंतज़ार न करें — 15 दिन के लीगल नोटिस से वसूली तेज़ करें
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                सिविल कोर्ट में रेगुलर मनी सूट में 2 से 4 साल लग सकते हैं, जबकि 80% से अधिक मामलों में अनुभवी एडवोकेट का ड्राफ्ट किया हुआ वैधानिक लीगल नोटिस मिलते ही देनदार 15 दिनों के भीतर समझौता या भुगतान कर देता है। हमारे अधिवक्ता आपके मामले के सबूतों की जांच कर कानूनी नोटिस तैयार करते हैं और इसे ईमेल व WhatsApp से डिजिटल ट्रैकिंग के साथ भेजते हैं। स्पीड पोस्ट वैकल्पिक है (₹450 प्रति पार्टी)।
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
                  <span>✓ WhatsApp/Email तामील</span>
                  <span>•</span>
                  <span>✓ पारदर्शी शुल्क ₹{basePrice}</span>
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

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName="मनी रिकवरी लीगल नोटिस (Money Recovery Notice)"
        amount={basePrice}
      />
    </>
  );
}
