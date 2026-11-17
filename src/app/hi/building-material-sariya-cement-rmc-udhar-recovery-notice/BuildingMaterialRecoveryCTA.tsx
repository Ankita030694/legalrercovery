"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface BuildingMaterialRecoveryCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "compact";
}

export default function BuildingMaterialRecoveryCTA({
  buttonText = "₹999 में लीगल नोटिस भेजें (वकील ड्राफ्टेड)",
  className = "",
  variant = "primary",
}: BuildingMaterialRecoveryCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                Dual-Track B2B Material Recovery &bull; Order 37 CPC + NI s.138 + MSME 43B(h)
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
                बिल्डर या ठेकेदार के पास फंसा सरिया, सीमेंट, RMC व हार्डवेयर का पैसा तुरंत वसूलें
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                साइट पर माल उतरने के बाद भी अगर बिल्डर पेमेंट लटका रहा है, चेक बाउंस कर रहा है या कैश के बदले फ्लैट देने की बात कर रहा है, तो देरी न करें। धर्मकांटा पर्ची और ई-वे बिल के साथ हमारे अनुभवी अधिवक्ताओं से वैधानिक लीगल नोटिस स्पीड पोस्ट RPAD, ईमेल और व्हाट्सऐप पर भेजें।
              </p>

              {/* Dual-Track Funnel Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {/* Track 1: Self-Serve Single Case Test */}
                <div className="bg-slate-900/90 border border-red-900/40 rounded-xl p-5 flex flex-col justify-between hover:border-red-600/60 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold text-red-400 tracking-wider">
                        Track 1: Single Builder / Contractor Test
                      </span>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                        ₹{basePrice} One-Time
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-2">
                      1 बिल्डर या ठेकेदार को एडवोकेट लीगल नोटिस भेजें
                    </h4>
                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                      मात्र ₹{basePrice} में वकील द्वारा तैयार लीगल नोटिस (Speed Post RPAD + WhatsApp + Email + India Post Tracking Slip) — 24 घंटे में डिस्पैच।
                    </p>
                  </div>
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="w-full text-center px-4 py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                    >
                      {buttonText}
                    </button>
                    <Link
                      href="/user/new-recovery"
                      className="block text-center text-[11px] text-slate-400 hover:text-white underline underline-offset-2"
                    >
                      या पोर्टल पर सीधे अपना बिल व ई-वे बिल अपलोड करें &rarr;
                    </Link>
                  </div>
                </div>

                {/* Track 2: Enterprise / Bulk Supplier Desk */}
                <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-5 flex flex-col justify-between hover:border-slate-500/60 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                        Track 2: Wholesalers, RMC &amp; Distributors
                      </span>
                      <span className="text-xs font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
                        10 से 10,000+ बकाएदार
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-2">
                      बल्क CSV अपलोड / डिस्ट्रीब्यूटर रिकवरी डेस्क
                    </h4>
                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                      स्टील डिपो, सीमेंट डीलर, RMC प्लांट, क्रशर मालिक और हार्डवेयर होलसेलर्स के लिए बल्क लेज़र CSV अपलोड, MSME समन व डेडिकेटेड रिकवरी टीम।
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Link
                      href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                      className="block w-full text-center px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-bold rounded-lg border border-slate-600 shadow-md hover:shadow-lg transition-all"
                    >
                      बल्क रिकवरी सॉल्यूशंस देखें (CSV Upload)
                    </Link>
                    <Link
                      href="/user/representees"
                      className="block text-center text-[11px] text-slate-400 hover:text-white underline underline-offset-2"
                    >
                      मल्टीपल गोदाम / डीलर अकाउंट्स मैनेज करें &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Order XXXVII CPC &amp; NI Act s.138/143A Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  <span>BSA 2023 धारा 63 (धर्मकांटा व ई-वे बिल सर्टिफिकेट) संलग्न</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>MSME 3x ब्याज व Income Tax 43B(h) नोटिस क्लॉज</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-white">
                बिल्डर या ठेकेदार से सरिया, सीमेंट व मटेरियल का पैसा वसूलें
              </p>
              <p className="text-xs text-slate-400">
                ₹{basePrice} में वकील द्वारा तैयार लीगल नोटिस (Speed Post RPAD + WhatsApp + Email)
              </p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-lg transition-colors"
              >
                {buttonText}
              </button>
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-lg border border-slate-700 transition-colors"
              >
                बल्क CSV अपलोड
              </Link>
            </div>
          </div>
        )}
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialCount={1}
      />
    </>
  );
}
