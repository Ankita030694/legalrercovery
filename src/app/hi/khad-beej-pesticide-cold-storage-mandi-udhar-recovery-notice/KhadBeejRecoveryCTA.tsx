"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

interface KhadBeejRecoveryCTAProps {
  buttonText?: string;
  className?: string;
  variant?: "primary" | "compact";
}

export default function KhadBeejRecoveryCTA({
  buttonText = "₹999 में वकील नोटिस भेजें (Speed Post + WhatsApp)",
  className = "",
  variant = "primary",
}: KhadBeejRecoveryCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  return (
    <>
      <div className={`w-full max-w-full overflow-hidden ${className}`}>
        {variant === "primary" ? (
          <div className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-800 shadow-2xl w-full">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase bg-slate-800 text-red-400 border border-slate-700 mb-3 sm:mb-4">
                Dual-Track Agri &amp; Mandi Recovery &bull; NI s.138 + Cold Storage Lien + MSME 43B(h)
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white mb-3">
                खाद-बीज डीलर, मंडी आढ़तिया या कोल्ड स्टोरेज पार्टी से अटका पैसा कानूनन वसूलें
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                फसल कटने के बाद भी अगर डीलर पेमेंट लटका रहा है, चेक बाउंस कर रहा है या कोल्ड स्टोरेज में माल छोड़कर किराया नहीं दे रहा, तो मौखिक तकादा छोड़कर हमारे अनुभवी अधिवक्ताओं से वैधानिक लीगल नोटिस स्पीड पोस्ट RPAD, व्हाट्सऐप और ईमेल पर भेजें।
              </p>

              {/* Dual-Track Funnel Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {/* Track 1: Self-Serve Single Case Test */}
                <div className="bg-slate-900/90 border border-red-900/40 rounded-xl p-5 flex flex-col justify-between hover:border-red-600/60 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold text-red-400 tracking-wider">
                        Track 1: 1 केस से शुरुआत करें (Self-Serve)
                      </span>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                        ₹{basePrice} One-Time
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-2">
                      1 बकाएदार डीलर, मंडी पार्टी या स्टॉकिस्ट को एडवोकेट नोटिस
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
                      या पोर्टल पर सीधे अपना बिल, बिल्टी या लॉट रसीद अपलोड करें &rarr;
                    </Link>
                  </div>
                </div>

                {/* Track 2: Enterprise / Bulk Agri & Cold Storage Desk */}
                <div className="bg-slate-900/90 border border-slate-700/60 rounded-xl p-5 flex flex-col justify-between hover:border-slate-500/60 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                        Track 2: डिस्ट्रीब्यूटर, मिल व कोल्ड स्टोरेज एसोसिएशन
                      </span>
                      <span className="text-xs font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
                        10 से 10,000+ पार्टी
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-2">
                      बल्क CSV अपलोड / सीज़नल डीलर व प्री-ऑक्शन नोटिस डेस्क
                    </h4>
                    <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                      खाद-बीज कंपनियों, पेस्टीसाइड डिस्ट्रीब्यूटर्स, राइस/दाल/तेल मिलों और कोल्ड स्टोरेज मालिकों के लिए एक साथ सैकड़ों डिफॉल्टर डीलर्स को बल्क स्पीड पोस्ट नोटिस।
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
                      मल्टीपल गोदाम / फर्म / चेंबर अकाउंट्स मैनेज करें &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>NI Act s.138, Contract Act s.176 &amp; Order XXXVII CPC</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  <span>BSA 2023 धारा 63 (बिल्टी, लॉट रसीद व WhatsApp सर्टिफिकेट)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>UP, MP, राजस्थान, बिहार, हरियाणा, पंजाब व गुजरात में सक्रिय</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">
                तुरंत कृषि व मंडी कानूनी कार्रवाई
              </p>
              <p className="text-sm sm:text-base font-extrabold text-white">
                मात्र ₹{basePrice} में वकील द्वारा तैयार लीगल नोटिस भेजें — या 10+ डीलर्स की CSV शीट अपलोड करें
              </p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-lg transition-colors"
              >
                ₹{basePrice} नोटिस भेजें
              </button>
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-lg border border-slate-600 transition-colors"
              >
                बल्क CSV डेस्क
              </Link>
            </div>
          </div>
        )}
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
