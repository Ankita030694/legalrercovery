"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ProblemTab {
  id: string;
  tabLabel: string;
  title: string;
  cause: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const PROBLEMS: ProblemTab[] = [
  {
    id: "super-area-loading-trap",
    tabLabel: "Super Area vs Carpet Trap",
    title: "Builder Sold on 'Super Built-Up Area' (35%–45% Loading) & Flat Is Tiny",
    cause:
      "At booking, the developer's brochure and sales team quoted a 1,600 sq. ft. 'Super Built-Up / Saleable Area' without prominently disclosing the net usable Carpet Area. Upon physical inspection, the internal livable rooms measure barely 880–920 sq. ft. because the builder quietly applied a 42% loading factor for common lobbies, clubhouses, fire staircases, and external facade projections.",
    legalBasis:
      "Under Section 2(k), Section 4(2)(h), and Section 13(2) of RERA, 2016, selling an apartment on 'Super Built-Up Area' is illegal. Every Agreement for Sale must state the exact RERA Carpet Area and exclusive balcony/verandah area separately. Furthermore, under Section 12 of RERA and Section 2(47) of the Consumer Protection Act, 2019, misrepresenting flat dimensions via inflated super area figures in brochures is an actionable Unfair Trade Practice.",
    steps: [
      {
        step: "Compare Brochure vs RERA Portal QPR",
        description:
          "Download the project's registered Apartment Table from your State RERA portal (MahaRERA, UP RERA, HRERA, K-RERA) to check the official sanctioned RERA Carpet Area declared by the promoter for your unit type.",
      },
      {
        step: "Commission Licensed Architect Laser Survey",
        description:
          "Have a Council of Architecture (COA) registered architect measure net room-to-room dimensions plus internal partition walls (excluding external walls, shafts, and balconies) to certify the exact shortfall.",
      },
      {
        step: "Serve Sec 12 & Clause 1.7 Demand Notice",
        description:
          "Serve a 15-day Advocate Demand Notice demanding a proportionate refund of the excess consideration with SBI MCLR + 2% interest, or full booking refund under Section 12 if you choose to exit.",
      },
    ],
    statutoryRule: "Sections 2(k), 12 & 13(2) RERA 2016 + Section 2(47) CPA 2019",
  },
  {
    id: "arbitrary-super-area-increase",
    tabLabel: "Fake 'Super Area Increase' Demand",
    title: "Builder Demands ₹3L–₹8L Extra at Possession Claiming 'Super Area Increased'",
    cause:
      "Right before handing over keys, the builder sends a Final Possession Demand Letter claiming that the 'Super Area' of your apartment has increased by 80–150 sq. ft. during construction, while the actual inside room dimensions (Carpet Area) have not increased by a single inch—or have actually shrunk. The builder refuses to hand over keys or execute the sale deed unless you pay this inflated demand.",
    legalBasis:
      "In Pawan Gupta v. Experion Developers Pvt. Ltd. (affirmed by the Supreme Court of India in 2020), the NCDRC and Supreme Court held that a promoter cannot unilaterally demand excess money for a purported 'super area increase' without proving an actual approved increase in usable area backed by revised sanctioned plans and a third-party architect certificate. Under RERA Model Agreement Clause 1.7, pricing is strictly tied to Carpet Area, and any permissible increase is capped at 3%.",
    steps: [
      {
        step: "Demand Revised Sanctioned Plan & Architect Certificate",
        description:
          "Write formally to the builder's CRM demanding the Competent Authority's revised sanctioned layout plan and the Occupancy Certificate (OC) area statement proving how the carpet area changed.",
      },
      {
        step: "Pay Under Written Protest (If Taking Urgent Possession)",
        description:
          "If you must take possession immediately to stop paying rent, pay the disputed demand with a covering email and endorsement stating 'Paid Under Protest — Subject to RERA Carpet Area Verification'.",
      },
      {
        step: "Recover Unlawful Demand With MCLR+2% Interest",
        description:
          "Dispatch an Advocate Legal Notice followed by a RERA Section 31 / e-Jagriti complaint to strike down the arbitrary super-area demand and recover the excess amount with 9%–11% interest.",
      },
    ],
    statutoryRule: "Pawan Gupta v. Experion Developers (SC 2020) + Model BBA Clause 1.7",
  },
  {
    id: "tolerance-clause-excuse",
    tabLabel: "Builder Cites '±3% Tolerance'",
    title: "Builder Refuses Refund Claiming '±3% Variation Requires No Refund'",
    cause:
      "Your laser measurement proves that your promised 1,200 sq. ft. RERA carpet area flat actually measures 1,168 sq. ft.—a shortfall of 32 sq. ft. (2.67%). When you ask for a refund of the ₹3.84 lakh overcharged, the builder points to a one-sided clause in their draft agreement claiming that 'variations up to ±3% or ±5% are minor construction tolerances and no refund is payable'.",
    legalBasis:
      "The builder is distorting the law. Under Clause 1.7 of the statutory RERA Model Agreement for Sale (notified across UP RERA, MahaRERA, HRERA, and Central Rules), the 3% figure is a cap on how much extra area a builder can charge for in case of an increase—it is NOT a free pass to pocket money for a shortfall! Clause 1.7 explicitly mandates that if there is ANY reduction in carpet area, the promoter shall refund the excess money paid within 45 days along with SBI MCLR + 2% interest from the date of payment.",
    steps: [
      {
        step: "Quote Statutory Model Agreement Clause 1.7",
        description:
          "Point out in writing that any private builder clause overriding the statutory Model Agreement for Sale is void as an unfair contract under Section 2(46) CPA 2019 and Pioneer Urban Land (SC 2019).",
      },
      {
        step: "Compute Per-Installment Interest From Payment Date",
        description:
          "Calculate the exact per-sq.-ft. rate multiplied by the missing square footage, plus simple interest at SBI MCLR + 2% from the date the excess installment was paid.",
      },
      {
        step: "Issue 15-Day Statutory Legal Demand Notice",
        description:
          "Serve a formal advocate notice requiring credit adjustment against your final possession demand or direct bank refund within 15 days.",
      },
    ],
    statutoryRule: "Model RERA Agreement Clause 1.7 + Pioneer Urban Land v. Govindan Raghavan (SC 2019)",
  },
  {
    id: "balcony-shaft-inclusion-fraud",
    tabLabel: "Balcony / External Wall Included",
    title: "Builder Secretly Counted Balconies, Utility Ledges & External Walls Inside Carpet Area",
    cause:
      "Your Agreement for Sale states 'Carpet Area: 1,050 sq. ft.', which matches your total measurement only if you include the 6-inch/9-inch outer brick walls, two balconies, flowerbeds/chajjas, and bathroom plumbing shafts. When measured strictly as per RERA rules, the actual internal carpet area is only 890 sq. ft.—a massive 160 sq. ft. shortfall.",
    legalBasis:
      "Section 2(k) of the Real Estate (Regulation and Development) Act, 2016 is crystal-clear and non-negotiable: 'carpet area' means the net usable floor area of an apartment, EXCLUDING the area covered by the external walls, areas under services shafts, exclusive balcony or verandah area, and exclusive open terrace area, and INCLUDING only internal partition walls. Including balconies or outer walls inside RERA carpet area is a direct statutory violation punishable under Section 61 of RERA.",
    steps: [
      {
        step: "Prepare Split Area Table in Architect Report",
        description:
          "Have your surveyor tabulate four separate columns: (a) Net Usable Room Area, (b) Internal Partition Walls, (c) Excluded External Walls & Service Shafts, and (d) Excluded Exclusive Balconies/Verandahs.",
      },
      {
        step: "Compare With Sanctioned RERA Floor Plan",
        description:
          "Match your architect's split table against the RERA-approved floor plan to show that the builder bundled excluded areas into the promised carpet area figure.",
      },
      {
        step: "Demand Pro-Rata Refund & Section 61 Penalty Action",
        description:
          "Serve a Legal Notice putting the promoter on notice of both a Section 31 proportionate refund claim and a Section 61 complaint for contravening Section 2(k) disclosures.",
      },
    ],
    statutoryRule: "Section 2(k) & Section 61 RERA, 2016 + IS 3861:2002",
  },
  {
    id: "discovered-after-possession",
    tabLabel: "Discovered After Possession / Deed",
    title: "Shortfall Discovered During Interior Work After Signing Possession & Sale Deed",
    cause:
      "You trusted the builder at handover, signed the standard printed Possession Certificate and Conveyance Deed, and got the keys. Weeks later, when your interior designer or modular kitchen vendor took laser measurements for flooring and wardrobes, you discovered the flat is 70–110 sq. ft. smaller than what you paid for. The builder claims your claim is barred because you signed a 'full satisfaction' possession letter.",
    legalBasis:
      "In Wg. Cdr. Arifur Rahman Khan v. DLF Southern Homes Pvt. Ltd. (2020) 16 SCC 512, the Supreme Court ruled that homebuyers sign dotted-line possession letters under economic compulsion; executing a possession certificate or conveyance deed does NOT waive or extinguish statutory claims against a builder. Additionally, Section 14(3) of RERA imposes a 5-year statutory liability on the promoter from the date of handing over possession for any structural defect or breach of obligations under the Agreement for Sale.",
    steps: [
      {
        step: "Get Interior Architect's Certified As-Built Drawing",
        description:
          "Convert your interior designer's CAD/laser survey into a formal signed Architect Certificate under IS 3861:2002 and Section 2(k) of RERA.",
      },
      {
        step: "Send Written Notice Within 30 Days of Discovery",
        description:
          "Establish a clear paper trail showing the exact date the latent dimension shortfall was discovered during post-handover interior measurement.",
      },
      {
        step: "Serve Advocate Legal Notice Invoking Sec 14(3) & Arifur Rahman SC Ruling",
        description:
          "Demand refund of the excess sale price AND excess stamp duty/registration fee paid on the non-existent square footage within 15 days.",
      },
    ],
    statutoryRule: "Section 14(3) RERA (5-Year Window) + Arifur Rahman Khan v. DLF (SC 2020)",
  },
];

export default function CarpetAreaProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);

  const selectedProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          Interactive Builder Defence &amp; Measurement Solver
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mt-2">
          Select the Builder&apos;s Excuse or Area Dispute You Are Facing
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Click any common carpet-area or super-area dispute below to view the builder&apos;s tactic, the binding statutory rule, and your 3-step counter-action:
        </p>
      </div>

      {/* ARIA Tablist */}
      <div
        role="tablist"
        aria-label="Carpet Area Shortfall Dispute Scenarios"
        className="flex flex-wrap gap-2 border-b border-slate-200 pb-3"
      >
        {PROBLEMS.map((problem) => {
          const isSelected = activeTab === problem.id;
          return (
            <button
              key={problem.id}
              role="tab"
              id={`tab-${problem.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${problem.id}`}
              onClick={() => setActiveTab(problem.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#404447] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div
        role="tabpanel"
        id={`panel-${selectedProblem.id}`}
        aria-labelledby={`tab-${selectedProblem.id}`}
        className="space-y-5 focus:outline-none"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900">
            {selectedProblem.title}
          </h4>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
            {selectedProblem.statutoryRule}
          </span>
        </div>

        {/* Cause & Legal Basis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
              How the Builder Traps Homebuyers
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedProblem.cause}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 block mb-1">
              Statutory Counter-Rule &amp; Supreme Court Law
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {selectedProblem.legalBasis}
            </p>
          </div>
        </div>

        {/* 3-Step Action Plan */}
        <div className="space-y-3 pt-2">
          <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
            3-Step Legal Counter-Move For This Scenario
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {selectedProblem.steps.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="w-6 h-6 rounded-full bg-[#404447] text-white font-bold text-xs flex items-center justify-center mb-2">
                    {idx + 1}
                  </span>
                  <strong className="text-xs sm:text-sm text-slate-900 font-bold block mb-1">
                    {s.step}
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Dispute Action Link */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-950">
          <span>
            <strong>Want to compute exact SBI MCLR + 2% interest on your overpaid flat price?</strong> Use our interactive RERA Section 18 &amp; Clause 1.7 calculator or serve a formal demand notice.
          </span>
          <Link
            href="/tools/rera-refund-interest-calculator"
            className="text-red-700 hover:text-red-900 font-bold underline shrink-0"
          >
            Open RERA Interest Calculator →
          </Link>
        </div>
      </div>
    </div>
  );
}
