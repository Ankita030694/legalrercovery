"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  shortLabel: string;
  badge: string;
  headline: string;
  typicalBuyerTactic: string;
  statutoryCounter: string;
  keyProof: string[];
  actionPlan: string;
  recoveryLeverage: string;
}

const WOVEN_SACK_SCENARIOS: ScenarioItem[] = [
  {
    id: "denier-weight-debit-note",
    shortLabel: "1. Weight/Denier Debit Note",
    badge: "BIS Tolerance Defense",
    headline: "Cement, Sugar or Fertilizer Plant Uses Your PP Woven Sacks—Then Deducts 12% Citing Weight or Denier",
    typicalBuyerTactic:
      "You deliver 2,00,000 BIS-compliant 50 kg PP woven sacks (IS 11652 cement / IS 9755 fertilizer / IS 14887 sugar) with bale weighbridge slips. The mill fills every bag on its automated rotary packer, ships product nationwide, and 75 days later issues an arbitrary 10–15% debit note alleging 'bag weight 2g below spec', 'denier variation', or 'seam burst during truck unloading'.",
    statutoryCounter:
      "Under Sale of Goods Act, 1930 Section 42, filling bags with cement, urea, or sugar and dispatching commercial consignments is conclusive acceptance—the buyer cannot consume the packaging and demand retrospective price cuts. Under MSMED Act Section 2(b) Explanation, any written quality objection must be filed within 15 days of receipt; moreover, BIS standards (IS 11652 / IS 9755 / IS 14887) expressly allow ±3% to ±6% mass-per-bag tolerance.",
    keyProof: [
      "Factory QC lab report showing bale weight, mesh (10x10 / 12x12), tape denier, breaking strength, and elongation within BIS tolerance",
      "Computerized weighbridge slips, bale-count packing lists, E-Way bills, and buyer's stamped Store GRN without rejection remarks",
      "Buyer's GSTR-2B Input Tax Credit availment confirming full acceptance of the tax invoice without Section 34 credit note",
    ],
    actionPlan:
      "Reject the retrospective debit note in writing within 48 hours, refuse to issue any GST Credit Note, and serve an Advocate Statutory Notice under MSMED Act ss.15–18 & Income Tax Section 43B(h) addressed to the plant's CFO and Statutory Auditor.",
    recoveryLeverage:
      "Destroys sham quality disputes before MSEFC and NCLT (Mobilox test): post-consumption debit notes issued past Day 15 fail as a matter of law.",
  },
  {
    id: "unlifted-bopp-bags",
    shortLabel: "2. Unlifted BOPP Rice/Seed Bags",
    badge: "Zero-Salvage Brand Stock",
    headline: "1,50,000 Custom-Printed BOPP Basmati Rice, Atta or Seed Bags Left Abandoned in Your Godown",
    typicalBuyerTactic:
      "A rice mill in Karnal, Amritsar, or Raipur—or a hybrid seed company—approves rotogravure artwork for 5 kg / 25 kg multi-colour BOPP laminated woven bags bearing its trademark, FSSAI license, and export markings. After you extrude the PP fabric, laminate the BOPP film, and cut-and-stitch 15 MT of branded bags, export paddy rates fall or the buyer changes brand artwork and stops lifting stock.",
    statutoryCounter:
      "Under Sale of Goods Act, 1930 Section 55(1)–(2) and Indian Contract Act Section 73, trademark-printed BOPP bags carry zero lawful resale value in the open market (selling them to third parties violates Trade Marks Act and FSSAI/FCO rules). Once manufactured to approved artwork and offered for inspection, you can sue for 100% of the contract price, unrecovered rotogravure cylinder charges, and Section 44 godown storage rent.",
    keyProof: [
      "Signed/WhatsApp artwork proof (PDF/JPEG shade card approval), PO with MOQ commitment, and rotogravure cylinder invoice",
      "RIL/IOCL PP granule & BOPP film purchase bills proving upfront cash capital deployed exclusively for this job order",
      "Timestamped godown photographs of finished printed bales, Ready-for-Dispatch email, and 15-day final lifting notice",
    ],
    actionPlan:
      "Issue a combined Section 55 Tender of Delivery + Section 44 Godown Demurrage Notice granting 15 days to lift stock against RTGS clearance, failing which you assert a Contract Act s.170 lien over custom rotogravure cylinders and file MSEFC / Commercial Court proceedings.",
    recoveryLeverage:
      "Cylinder lien blocks the buyer from shifting printing to a rival converter during peak harvest season, forcing rapid negotiated clearance.",
  },
  {
    id: "fibc-export-mineral-default",
    shortLabel: "3. FIBC Jumbo-Bag Export Default",
    badge: "1 MT Bulk Bag Ledger",
    headline: "Chemical, Quartz or Mineral Exporter Ships 1 MT FIBC Jumbo Bags Overseas—Stalls Bill 120+ Days",
    typicalBuyerTactic:
      "Chemical, titanium dioxide, quartz powder, barite, or agro-commodity exporters across Gujarat, Rajasthan, and Andhra Pradesh order specialized 1 MT / 1.5 MT FIBC Big Bags (5:1 / 6:1 Safety Factor, baffled Q-bags, Type C conductive loops, food-grade cleanroom liners). After stuffing containers and exporting to Europe or the US, they freeze ₹25L–₹1.5 Cr of invoices claiming 'overseas consignee delayed remittance' or 'unbilled UV test dispute'.",
    statutoryCounter:
      "An exporter's downstream foreign buyer delay is legally irrelevant to domestic supplier liability. Once ISO 21898 / SGS / Lab-certified FIBCs are stuffed and cleared on Customs Shipping Bills, acceptance under Section 42 is irreversible. For Udyam Micro/Small FIBC stitchers, MSMED Act s.15 overrides 90-day export credit policies; for larger FIBC plants owed ≥₹1 Cr, IBC Section 8 Form 3/4 or Order XXXVII CPC forces immediate Board-level attention.",
    keyProof: [
      "ISO 21898 Top-Lift cyclic test certificates (5:1 / 6:1 SF), UV stabilization lab reports, or Type C grounding test logs",
      "Pre-dispatch FIBC inspection sign-off, E-Way bills, bale packing lists, and email/WhatsApp container stuffing confirmations",
      "Reconciled running ledger, bounced PDCs (if any), and GST GSTR-1 / GSTR-2B matching trail",
    ],
    actionPlan:
      "Deploy a dual-track strike: serve a Fact-Verified Demand Notice triggering Income Tax s.43B(h) (or IBC s.8 Form 3 for ≥₹1 Cr non-MSME defaults) alongside parallel NI Act s.138/141 prosecution on any dishonoured security/post-dated cheques.",
    recoveryLeverage:
      "Exporters depend on clean banking lines and statutory audit sign-offs—s.43B(h) disallowance or an IBC Form 3 notice disrupts export packing credit limits immediately.",
  },
  {
    id: "polymer-pvc-breach",
    shortLabel: "4. Polymer Rate Drop & PO Breach",
    badge: "RIL/IOCL PVC Clause",
    headline: "PP Granule Prices Drop ₹12/kg—Buyer Breaches Fixed PO or Rejects Valid Polymer Index Escalation",
    typicalBuyerTactic:
      "Because virgin PP/HDPE raffia granules account for 65%–72% of woven-sack manufacturing cost, converters lock raw polymer with RIL, IOCL, or HMEL against confirmed buyer POs. When petrochemical prices dip mid-quarter, buyers refuse to lift booked bales unless you cut rates retroactively; conversely, when RIL hikes rates, buyers withhold legitimate Price Variation Clause (PVC) supplementary bills.",
    statutoryCounter:
      "Under Section 56 of the Indian Contract Act, 1872 (settled Supreme Court doctrine in Alopi Parshad & Energy Watchdog), raw material price fluctuation never frustrates or excuses a binding commercial contract. If the buyer breaches a confirmed PO after you procured resin, Section 73 entitles you to full price differential/loss + conversion margin; if a monthly RIL/IOCL PVC formula is embedded in the rate contract, unpaid PVC debit notes are legally enforceable debt.",
    keyProof: [
      "Rate contract or PO quoting the benchmark RIL Repol / IOCL Propel raffia grade price and monthly PVC escalation formula",
      "Official RIL/IOCL price circulars, polymer purchase tax invoices, and bank RTGS/BG debit advices showing resin lock-in",
      "Dispatch schedule emails and buyer acknowledgments of prior PVC-adjusted invoices establishing consistent course of dealing",
    ],
    actionPlan:
      "Quantify exact resin procurement loss and unpaid PVC differentials on a line-by-line spreadsheet, reject unilateral rate-cut emails, and issue a statutory demand notice combining principal invoices, PVC arrears, and MSMED s.16 3x RBI compound interest.",
    recoveryLeverage:
      "Prior course-of-dealing invoices paid under the same RIL/IOCL PVC formula prevent buyers from claiming the escalation clause was 'unapproved'.",
  },
];

export default function WovenSacksScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(WOVEN_SACK_SCENARIOS[0].id);
  const current =
    WOVEN_SACK_SCENARIOS.find((s) => s.id === activeTab) || WOVEN_SACK_SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Selector Buttons */}
      <div
        role="tablist"
        aria-label="PP woven sack, BOPP bag and FIBC jumbo bag default scenarios"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6"
      >
        {WOVEN_SACK_SCENARIOS.map((item) => {
          const isSelected = item.id === activeTab;
          return (
            <button
              key={item.id}
              role="tab"
              type="button"
              aria-selected={isSelected}
              onClick={() => setActiveTab(item.id)}
              className={`text-left px-3.5 py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
              }`}
            >
              <span
                className={`block text-[10px] uppercase tracking-wider mb-0.5 ${
                  isSelected ? "text-red-100" : "text-slate-400"
                }`}
              >
                {item.badge}
              </span>
              <span className="block leading-snug">{item.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Active Scenario Content Card */}
      <div
        role="tabpanel"
        className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 space-y-5"
      >
        <div className="border-b border-slate-200 pb-4">
          <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-2">
            {current.badge}
          </span>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
            {current.headline}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
              Buyer Delay / Deduction Tactic
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.typicalBuyerTactic}
            </p>
          </div>

          <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 mb-1.5">
              Creditor Statutory Counter-Strike
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.statutoryCounter}
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">
            Mandatory Evidentiary File (BSA 2023 s.63 Ready)
          </p>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
            {current.keyProof.map((proof, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-[#DC2626] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{proof}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900 text-slate-100 rounded-xl p-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1">
              Recommended Escalation Protocol
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-200">
              {current.actionPlan}
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
              Commercial Settlement Leverage
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-800 font-medium">
              {current.recoveryLeverage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
