"use client";

import React, { useState } from "react";

interface SectorDetail {
  id: string;
  name: string;
  regulations: string;
  avgCompensation: string;
  medianAwardTimeline: string;
  typicalAwardComponents: string[];
  groundRealities: string;
  landmarkDoctrine: string;
}

const SECTOR_DATA: SectorDetail[] = [
  {
    id: "ecommerce",
    name: "E-Commerce & Quick Commerce",
    regulations: "Consumer Protection (E-Commerce) Rules, 2020 & CPA 2019 Section 2(47)",
    avgCompensation: "₹10,000 – ₹25,000 per order",
    medianAwardTimeline: "5 – 8 Months in District Forum",
    typicalAwardComponents: [
      "100% Invoice Value Refund",
      "9% to 12% Annual Interest from grievance date",
      "₹10,000 to ₹15,000 for mental agony & customer harassment",
      "₹5,000 to ₹10,000 legal & litigation costs",
    ],
    groundRealities:
      "Platforms frequently hide behind 'marketplace intermediary' status under Section 79 of the IT Act. However, consumer courts reject this outright when the platform collected payments, facilitated fulfillment, or failed its 48-hour grievance turnaround under Rule 5 of the E-Commerce Rules.",
    landmarkDoctrine:
      "Marketplaces exercise end-to-end commercial custody; OTP delivery without unboxing clearance does not negate merchant liability when tampered or wrong goods are shown.",
  },
  {
    id: "aviation",
    name: "Airlines, Railways & Travel OTAs",
    regulations: "DGCA CAR Section 3 Series M Part II (2026) & Railway Refund Rules 2015",
    avgCompensation: "₹15,000 – ₹40,000 per passenger",
    medianAwardTimeline: "6 – 10 Months in District/State Forum",
    typicalAwardComponents: [
      "Full Airfare / Train Fare Cash Refund",
      "12% Penal Interest for forced voucher retention",
      "Compensation for missed connecting transit & hotel stays",
      "Litigation fees awarded against both airline and OTA jointly",
    ],
    groundRealities:
      "Airlines frequently push unconsented credit shells or blame travel booking agents (MakeMyTrip, EaseMyTrip, Cleartrip). Consumer commissions apply the Supreme Court's Pravasi Legal Cell ruling to enforce immediate cash refunds back to the passenger's source bank account.",
    landmarkDoctrine:
      "Airlines and booking aggregators are jointly and severally liable. Forcing credit vouchers or withholding cancellation cash constitutes an unfair trade practice.",
  },
  {
    id: "banking",
    name: "Banks, UPI & Digital Wallets",
    regulations: "RBI Zero Liability Circular 2017 & Failed Transaction TAT Circular DPSS.CO.PD No.629",
    avgCompensation: "₹15,000 – ₹35,000 + ₹100/day penalty",
    medianAwardTimeline: "4 – 7 Months in District Forum",
    typicalAwardComponents: [
      "Full reversal of disputed unauthorized debit / failed ATM sum",
      "Statutory suo-moto delay penalty of ₹100/day beyond T+1 / T+5",
      "Damages for credit rating impairment or bounced EMI charges",
      "Full reimbursement of advocate notice charges",
    ],
    groundRealities:
      "Banks routinely deny fraud refunds by stating 'Transaction was authenticated by OTP'. In consumer commissions, banks bear the burden of proving that the customer was negligent or shared the credentials. If the customer reported the debit within 3 days, zero liability applies strictly.",
    landmarkDoctrine:
      "Customer liability is zero upon prompt 3-day notification; internal fraud team delay cannot be transferred to the account holder.",
  },
  {
    id: "realestate",
    name: "Builders & Real Estate Promoters",
    regulations: "Real Estate (Regulation and Development) Act, 2016 (RERA) & Section 2(46) CPA 2019",
    avgCompensation: "₹1,50,000 – ₹15,00,000+ (Refund with Interest)",
    medianAwardTimeline: "12 – 18 Months (State / National Commission)",
    typicalAwardComponents: [
      "100% Refund of all deposited instalments",
      "MCLR + 2% or 9% to 10% annual interest from date of each deposit",
      "Compensation for rent paid during possession delay",
      "Costs of litigation before SCDRC / NCDRC",
    ],
    groundRealities:
      "Builders insert one-sided penalty clauses awarding buyers ₹5 per sq. ft. per month for delay while charging 18% for late instalments. The Supreme Court in Pioneer Urban Land and Wing Commander Arifur Rahman declared such clauses void under unfair contract provisions.",
    landmarkDoctrine:
      "A homebuyer cannot be made to wait indefinitely for possession; delay beyond the agreed handover window gives the buyer an absolute right to exit with full refund and interest.",
  },
];

export default function AwardsSectorTabs() {
  const [activeTab, setActiveTab] = useState<string>("ecommerce");
  const current = SECTOR_DATA.find((s) => s.id === activeTab) || SECTOR_DATA[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-6">
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
        {SECTOR_DATA.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === tab.id
                ? "bg-[#111827] text-white shadow-xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            {current.name}: Judicial Adjudication Profile
          </h3>
          <span className="text-xs font-semibold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full">
            {current.regulations}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-[11px] font-extrabold uppercase text-slate-500 block mb-1">
              Typical Awarded Damages
            </span>
            <span className="text-base font-black text-emerald-700">
              {current.avgCompensation}
            </span>
          </div>
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-[11px] font-extrabold uppercase text-slate-500 block mb-1">
              Median Resolution Timeline
            </span>
            <span className="text-base font-black text-slate-900">
              {current.medianAwardTimeline}
            </span>
          </div>
        </div>

        <div>
          <strong className="text-xs sm:text-sm font-bold text-slate-900 block mb-2">
            Standard Order Elements Granted by Consumer Commissions:
          </strong>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            {current.typicalAwardComponents.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            <strong className="text-slate-900">Corporate Defense vs Court Stance: </strong>
            {current.groundRealities}
          </p>
          <p>
            <strong className="text-[#DC2626]">Binding Judicial Precedent: </strong>
            {current.landmarkDoctrine}
          </p>
        </div>
      </div>
    </div>
  );
}
