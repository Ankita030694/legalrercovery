"use client";

import React, { useState } from "react";

interface RouteInfo {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  forum: string;
  statute: string;
  limitation: string;
  courtFee: string;
  interimRelief: string;
  recoverySpeed: string;
  pros: string[];
  cons: string[];
  keyJudgment: string;
  summary: string;
}

const ROUTE_DATA: RouteInfo[] = [
  {
    id: "route-138",
    tabLabel: "Section 138 NI Act",
    badge: "Quasi-Criminal Prosecution",
    title: "Section 138 NI Act: Criminal Deterrence & Fast Interim Cash Deposit",
    forum: "Judicial Magistrate First Class (JMFC) or Metropolitan Magistrate (MM)",
    statute: "Negotiable Instruments Act, 1881 (Sections 138, 141, 143A & 148)",
    limitation: "30 days for legal notice from return memo; 15-day cure period; 30 days thereafter to file complaint",
    courtFee: "Nominal magistrate court fee (typically ₹100–₹1,000 depending on state court fee rules)",
    interimRelief: "Up to 20% interim compensation under Section 143A within 60 days of framing notice",
    recoverySpeed: "High settlement pressure; trials take 12–24 months; early compounding encouraged",
    pros: [
      "Immediate psychological and personal pressure: threat of non-bailable warrants (NBWs) and up to 2 years imprisonment",
      "Nominal court fee compared to high ad-valorem civil court fees",
      "Section 143A entitles complainant to up to 20% of the cheque amount directly into bank account during trial",
      "Company directors can be individually impleaded under Section 141",
    ],
    cons: [
      "Primary objective is punitive, not direct money decree execution",
      "Strict statutory limitation: missing the 30-day notice window completely extinguishes Section 138 remedy",
      "If the accused has zero fear of incarceration or is already bankrupt, criminal court cannot directly seize real estate",
    ],
    keyJudgment: "Sanjabij Tari v. Kishore S. Borcar (2025) & D. Purushotama Reddy v. K. Sateesh (2008)",
    summary:
      "Section 138 is the premier weapon for swift recovery through coercion and settlement. Because dishonour carries criminal penalties and personal court appearances, drawers settle in over 70% of cases before full trial. Complainants should invoke Section 143A early to secure 20% liquid cash while trial proceeds.",
  },
  {
    id: "route-order37",
    tabLabel: "Order 37 CPC Summary Suit",
    badge: "Fast-Track Civil Recovery",
    title: "Order XXXVII CPC: Summary Suit on Dishonoured Negotiable Instruments",
    forum: "Civil Court (Civil Judge Senior Division or District Court depending on pecuniary jurisdiction)",
    statute: "Code of Civil Procedure, 1908 (Order XXXVII Rules 1 to 7) & Limitation Act, 1963",
    limitation: "3 Years from the date the cheque was dishonoured or from the date of the instrument",
    courtFee: "Ad-valorem civil court fee based on state Court Fees Act (typically 3%–8% of the claim amount)",
    interimRelief: "Attachment before judgment under Order 38 Rule 5; conditional leave to defend deposit",
    recoverySpeed: "9–18 months if defendant fails to get unconditional leave to defend",
    pros: [
      "Defendant has no automatic right to defend: must apply for 'Leave to Defend' within 10 days of summons",
      "If leave to defend is refused or granted conditionally, plaintiff gets an immediate executable money decree",
      "Enables attachment before judgment under Order 38 Rule 5 to freeze bank accounts, properties, or receivables",
      "Survives even if you missed the 30-day Section 138 notice deadline (3-year limitation applies)",
    ],
    cons: [
      "Requires upfront payment of ad-valorem state court fees (though recoverable as costs in final decree)",
      "If the court grants unconditional leave to defend, the suit converts into a regular, slower civil trial",
      "Restricted strictly to liquidated monetary demands arising on bills of exchange, cheques, or written contracts",
    ],
    keyJudgment: "IDBI Trusteeship Services Ltd. v. Hubtown Ltd. (2017) & Vishnu Dutt Sharma v. Daya Sapra (2009)",
    summary:
      "Order 37 is the civil equivalent of an express highway for cheque bounce claims. Because a cheque is a written negotiable instrument acknowledging debt, the defendant cannot delay proceedings with frivolous defenses. If they cannot demonstrate a substantial defense, the judge enters a money decree immediately.",
  },
  {
    id: "route-civil-regular",
    tabLabel: "Ordinary Money Suit",
    badge: "Comprehensive Civil Remedy",
    title: "Ordinary Civil Suit (Order VII CPC): Recover Principal, Penal Interest & Damages",
    forum: "Civil Judge (Junior/Senior Division) or District Court / High Court Original Side",
    statute: "Code of Civil Procedure, 1908 (Order VII) & Limitation Act, 1963 (Articles 19–24, 35)",
    limitation: "3 Years from the date of cause of action, invoice default, or cheque dishonour",
    courtFee: "Standard ad-valorem civil court fee based on total claimed amount",
    interimRelief: "Temporary injunction (Order 39) or Attachment before judgment (Order 38 Rule 5)",
    recoverySpeed: "Slow (24–48+ months) due to full evidentiary trial and cross-examination",
    pros: [
      "Permits broad claims beyond the cheque face value: contractual interest, warehousing charges, legal costs, and unliquidated damages",
      "Can be filed even if the cheque is technically invalid (e.g. stale cheque, post-dated cheque returned due to closed account without 138 compliance)",
      "Allows joining multiple causes of action (underlying commercial agreement, invoices, delivery challans, WhatsApp promises)",
      "Long 3-year limitation window gives ample time to build documentary evidence",
    ],
    cons: [
      "Heavy evidentiary burden: plaintiff must prove underlying transaction and debt delivery in full trial",
      "Defendant receives full statutory time to file written statement (up to 120 days) and raise complex counter-claims",
      "Significant litigation timeline compared to Section 138 or Order 37 summary procedure",
    ],
    keyJudgment: "Sri Krishna Agencies v. State of A.P. (2009) & Satish Khosla v. Eli Lilly (1998)",
    summary:
      "Use an ordinary money suit when your dispute involves complex transactions where the bounced cheque covers only part of the unpaid debt, or when you are claiming substantial interest, damages, and contractual indemnities that summary courts cannot adjudicate without extensive evidence.",
  },
  {
    id: "route-bns318",
    tabLabel: "BNS 318(4) Cheating",
    badge: "Criminal Penal Action",
    title: "Bharatiya Nyaya Sanhita Section 318(4): Police Complaint for Fraudulent Cheques",
    forum: "Police Station (FIR) or Magistrate (Section 175(3) / 223 BNSS application)",
    statute: "Bharatiya Nyaya Sanhita, 2023 (Section 318(4) Cheating) & BNSS, 2023",
    limitation: "3 Years for offenses punishable up to 3 years; higher under Section 318(4) (up to 7 years)",
    courtFee: "Nil (State prosecution)",
    interimRelief: "Police seizure of assets; account freeze under BNSS Section 106/107",
    recoverySpeed: "Unpredictable; police often classify cheque returns as pure civil disputes",
    pros: [
      "Zero court fees for criminal complaints",
      "Non-bailable offense: police can investigate, seize account records, and arrest absconding fraudsters",
      "Effective when drawer issued a cheque from an account already closed years prior with clear intention to defraud",
    ],
    cons: [
      "Mere dishonour of cheque is NOT cheating; you must prove dishonest intention from inception (at the time the cheque was handed over)",
      "Police frequently refuse to register FIR citing commercial nature, requiring Section 175(3) BNSS magistrate orders",
      "Complainant cannot recover cash directly from criminal penalty; must rely on compounding or parallel civil decree",
    ],
    keyJudgment: "Dalip Kaur v. Jagnar Singh (2009) & S.W. Palanitkar v. State of Bihar (2002)",
    summary:
      "Do NOT file a cheating complaint for routine cheque dishonour. Indian courts reprimand litigants who misuse criminal law for debt collection. Only invoke BNS 318(4) if the drawer actively forged documents, issued a cheque from a fictitious account, or had closed the account prior to handing the cheque over.",
  },
];

export default function ChequeRouteComparisonTabs() {
  const [activeTab, setActiveTab] = useState<string>("route-138");
  const selected = ROUTE_DATA.find((r) => r.id === activeTab) || ROUTE_DATA[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 md:p-8 shadow-xs">
      {/* Route Switcher Buttons */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
        {ROUTE_DATA.map((route) => {
          const isActive = route.id === activeTab;
          return (
            <button
              key={route.id}
              type="button"
              onClick={() => setActiveTab(route.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#111827] text-white shadow-md shadow-slate-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {route.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Route Details Panel */}
      <div className="pt-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 bg-red-50 text-[#DC2626] rounded-full border border-red-200">
            {selected.badge}
          </span>
          <span className="text-xs text-slate-500 font-semibold">
            Speed: <strong className="text-slate-800">{selected.recoverySpeed}</strong>
          </span>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-2">
            {selected.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {selected.summary}
          </p>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Adjudicating Forum</span>
            <span className="text-xs sm:text-sm font-bold text-slate-900 block mt-0.5">{selected.forum}</span>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Limitation Window</span>
            <span className="text-xs sm:text-sm font-bold text-red-700 block mt-0.5">{selected.limitation}</span>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Court Fee Burden</span>
            <span className="text-xs sm:text-sm font-bold text-emerald-700 block mt-0.5">{selected.courtFee}</span>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Interim Relief</span>
            <span className="text-xs sm:text-sm font-bold text-amber-700 block mt-0.5">{selected.interimRelief}</span>
          </div>
        </div>

        {/* Pros & Cons Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
              <span>✓ Strategic Advantages</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-emerald-950 leading-relaxed">
              {selected.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold shrink-0">•</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-4 space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-rose-900 flex items-center gap-1.5">
              <span>✕ Legal Limitations &amp; Risks</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-rose-950 leading-relaxed">
              {selected.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-rose-700 font-bold shrink-0">•</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-3 bg-slate-100 rounded-lg text-xs text-slate-700">
          <strong>Key Precedent:</strong> {selected.keyJudgment}
        </div>
      </div>
    </div>
  );
}
