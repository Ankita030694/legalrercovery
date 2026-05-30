"use client";

import React, { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  heading?: string;
  subheading?: string;
}

export default function FAQSection({
  faqs,
  heading = "Frequently Asked Questions",
  subheading,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  // Build FAQPage JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FB]">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[820px] mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FEF2F2] rounded-full border border-[#FECACA] mb-4">
            <span className="text-[10px] font-black text-[#DC2626] uppercase tracking-[0.15em]">
              FAQs
            </span>
          </div>
          <h2 className="text-[24px] sm:text-[32px] lg:text-[38px] font-black text-[#111827] leading-tight tracking-tight">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-3 text-[13px] sm:text-[14px] text-[#6B7280] max-w-[560px] mx-auto leading-relaxed">
              {subheading}
            </p>
          )}
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-200"
            >
              <button
                onClick={() => toggle(i)}
                className="flex justify-between items-center w-full text-left px-5 sm:px-6 py-4 sm:py-5 focus:outline-none cursor-pointer group"
                aria-expanded={openIndex === i}
              >
                <span className="flex items-start gap-3 pr-4">
                  <span className="text-[#DC2626] font-black text-sm mt-0.5 flex-shrink-0">
                    Q.
                  </span>
                  <span className="text-[13px] sm:text-[14px] font-extrabold text-[#111827] leading-snug group-hover:text-[#DC2626] transition-colors">
                    {faq.question}
                  </span>
                </span>
                <span
                  className={`transform transition-transform duration-200 flex-shrink-0 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="px-5 sm:px-6 pb-5 pt-0 border-t border-gray-50">
                  <p className="text-[12.5px] sm:text-[13px] text-[#4B5563] leading-relaxed pl-7 pt-3">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
