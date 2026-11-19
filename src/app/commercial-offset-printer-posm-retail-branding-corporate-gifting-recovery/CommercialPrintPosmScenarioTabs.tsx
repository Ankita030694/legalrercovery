"use client";

import React, { useState } from "react";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  failureMode: string;
  statutoryCounter: string;
  actionSteps: {
    step: string;
    detail: string;
  }[];
  legalProvision: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "diwali-hamper-freeze",
    tabLabel: "Diwali Hampers (3 Damaged)",
    badge: "Festive Gifting Track",
    title: "Shipped 10,000 Diwali Hampers to 500 Pin Codes—Procurement Froze ₹35L Over '3 Damaged Boxes'",
    failureMode:
      "You front 100% of rigid-box fabrication, logo laser-engraving, dry-fruit/gadget sourcing, and pan-India courier bills in 10 frantic pre-Diwali days. Employees and clients enjoy the gifts, HR praises the turnaround—then between January and March, corporate procurement freezes the entire ₹35 lakh final invoice citing '3 broken mugs in Pune', '12 missing OTP PODs', or 'reconciliation pending with Admin'.",
    statutoryCounter:
      "Under Section 42 read with Section 37 and Section 59 of the Sale of Goods Act, 1930, once a buyer distributes 9,997 corporate hampers to employees/dealers without raising a written objection within 15 days of delivery (MSMED Act s.2(b) Explanation), acceptance is legally irrevocable. A buyer cannot withhold 100% of a ₹35 lakh invoice over 0.03% transit breakage; at highest, verified damaged units allow proportionate replacement or abatement while 99.97% undisputed principal must be released immediately—failing which Section 43B(h) disallows the buyer's entire festive gifting deduction on March 31.",
    actionSteps: [
      {
        step: "Export Full 500-Pin-Code Courier AWB & Delivered POD Sheet",
        detail:
          "Download carrier-certified delivery logs (Blue Dart / Delhivery / DTDC CSV + receiver timestamps) and pair them with a BSA 2023 s.63 Hash/Metadata Certificate proving 99.9%+ pan-India completion.",
      },
      {
        step: "Isolate Disputed Units & Demand Undisputed 99.9% Principal",
        detail:
          "Send a formal reconciliation notice offering replacement or credit strictly for the 3 verified damaged hampers (₹10,500) while demanding immediate release of ₹34.89 lakh undisputed dues within 7 days.",
      },
      {
        step: "Escalate to CFO & Tax Auditor on March 31 Section 43B(h) Hit",
        detail:
          "Copy the corporate CFO and Statutory Auditor on an Advocate Demand Notice detailing 25.17%–34.94% Income Tax disallowance under s.43B(h), Form 3CD Clause 22 reporting, and 3x RBI monthly compound interest.",
      },
    ],
    legalProvision: "Sale of Goods Act ss.37, 42 & 59 | MSMED Act ss.15–18 & 24 | Income Tax Act s.43B(h) | BSA 2023 s.63",
  },
  {
    id: "retail-posm-signage",
    tabLabel: "2,000-Store POSM Rollout",
    badge: "Retail Signage Track",
    title: "Installed 2,000 Glow Sign Boards, Standees & Dealer Facias—Brand Froze 40% Balance Over '5 Store Audits'",
    failureMode:
      "FMCG, telecom, paint, and consumer-durables brands award pan-India retail branding rollouts (ACP/LED glow sign boards, acrylic counter displays, vinyl in-shop branding) across Tier-2 and Tier-3 towns. After your fabricators install 1,995 outlets before the festive launch, the brand's trade-marketing agency stalls the 40% retention/final milestone for 6 months claiming '5 remote dealer photos are blurry' or 'brand principal has not released our agency fee'.",
    statutoryCounter:
      "Under Section 42 of the Sale of Goods Act, 1930 and Section 70 of the Indian Contract Act, 1872, enjoying commercial brand visibility across 1,995 live retail stores constitutes full acceptance and enjoyment of benefit. Further, 'back-to-back' or 'pay-when-paid' excuses by an intermediary BTL agency are void against an Udyam-registered Micro/Small POSM fabricator under Section 24 of the MSMED Act, 2006, which mandates payment strictly within 45 days of store-installation milestone submission.",
    actionSteps: [
      {
        step: "Compile EXIF Geo-Tagged Store Photos & Dealer Sign-Off Slips",
        detail:
          "Assemble store-wise installation albums containing GPS latitude/longitude coordinates, date-time watermarks, shop-owner rubber-stamped completion slips, and WhatsApp brand-manager approvals under BSA s.63.",
      },
      {
        step: "Strike Down Illegal 'Pay-When-Paid' BTL Agency Clauses",
        detail:
          "Invoke MSMED Act s.24 statutory override against the marketing agency (if contracted by them) and put the Principal Brand on formal notice of unpaid fabricator dues to trigger immediate vendor compliance pressure.",
      },
      {
        step: "File MSEFC Samadhaan Claim + Order XXXVII Summary Notice",
        detail:
          "Convert verified store-wise installation logs into a liquidated debt dossier for MSEFC 3x RBI compound interest or Commercial Court Order XXXVII summary recovery on undisputed completed outlets.",
      },
    ],
    legalProvision: "MSMED Act ss.15–18 & 24 Override | Indian Contract Act s.70 | BSA 2023 s.63 Geo-Tags | CPC Order XXXVII",
  },
  {
    id: "pantone-shade-dispute",
    tabLabel: "Pantone / Colour Shade Excuse",
    badge: "Offset & Annual Report Track",
    title: "Buyer Approved Artwork & Pantone Proof on Email—Then Disputed 'Slight Shade Variation' Post-Print",
    failureMode:
      "A commercial offset press prints 50,000 annual reports, pharmaceutical visual aids, luxury product catalogues, or school textbooks after obtaining the client's signed Digital Chromalin / Machine Proof and 'Pantone 186C / CMYK Approved for Print' email. Once the event or AGM concludes—or when the client's marketing head changes—procurement demands a 20% discount alleging 'logo red looks slightly darker on matte lamination'.",
    statutoryCounter:
      "Under Section 17 (Sale by Sample) and Section 42 of the Sale of Goods Act, 1930, once bulk offset print matches the buyer-approved Pantone/CMYK press proof within standard ISO 12647-2 ΔE colour tolerance (and matte/gloss BOPP lamination optical shift disclosed at proofing), the printer has discharged 100% of its contractual obligation. Because brand-printed catalogues and annual reports have zero resale value in the open market, Section 55 of the Sale of Goods Act and Section 73 of the Contract Act entitle the press to 100% of the contract price.",
    actionSteps: [
      {
        step: "Lock In the Signed Press Proof & Email 'Go Ahead' Thread",
        detail:
          "Preserve the exact PDF artwork hash, Pantone swatch code, email header showing 'Approved for Final Print Run', and physical press-sheet signed by the client's production executive.",
      },
      {
        step: "Prove Commercial Distribution & GSTR-2B ITC Availment",
        detail:
          "Document AGM distribution, conference handouts, courier dispatch slips, and GSTR-2B Input Tax Credit retention—proving the buyer accepted and commercially utilized the entire print run without returning stock.",
      },
      {
        step: "Reject Arbitrary 20% Debit Notes & Freeze GST Credit Notes",
        detail:
          "Refuse to issue a CGST s.34 Credit Note, cite ISO 12647-2 print tolerances and MSMED s.2(b) 15-day objection expiry, and serve an Advocate Statutory Notice for 100% balance plus statutory interest.",
      },
    ],
    legalProvision: "Sale of Goods Act ss.17, 42 & 55 | Indian Contract Act s.73 | CGST s.16(2) ITC | ISO 12647-2 Print Standard",
  },
  {
    id: "election-campaign-print",
    tabLabel: "Election & Campaign Publicity",
    badge: "High-Risk Political / Event Track",
    title: "Printed 5 Lakh Flex Banners, Pamphlets & Campaign Kits on Urgent Deadline—Committee Vanished Post-Polling",
    failureMode:
      "During Lok Sabha, Assembly, municipal, or trade-body elections, commercial printers and flex/digital signage bureaus run 24x7 shifts delivering lakhs of pamphlets, manifestos, flags, vehicle vinyls, and hoardings against 20% cash/UPI advance and urgent WhatsApp approvals from a candidate's campaign manager. Once polling ends—especially if the candidate loses—phones go switched off and the party office claims 'no formal written PO was issued'.",
    statutoryCounter:
      "Under Section 70 of the Indian Contract Act, 1872, any person or entity that lawfully enjoys the benefit of non-gratuitous printing and publicity services is legally bound to compensate the printer even without a formal sealed PO. Moreover, mandatory statutory imprint lines required under Section 127A of the Representation of the People Act, 1951 (publisher's declaration & printer's name/address) plus ECI Expenditure Observer filings create ironclad documentary proof of print quantity and candidate authorization.",
    actionSteps: [
      {
        step: "Secure Section 127A RPA Declarations & WhatsApp Print Orders",
        detail:
          "Preserve the signed publisher declaration under Representation of the People Act s.127A, ECI print-quantity submissions, WhatsApp voice/text approvals, and geo-tagged flex delivery photos certified under BSA s.63.",
      },
      {
        step: "Enforce Security Cheques Under NI Act s.138 & s.143A Immediately",
        detail:
          "Present any campaign-agency or guarantor cheques promptly within their 3-month validity; upon dishonour, issue a 15-day statutory demand notice under NI Act s.138 and seek 20% interim compensation under s.143A.",
      },
      {
        step: "File Order XXXVII Summary Suit / Commercial Recovery Action",
        detail:
          "Where the debtor is an incorporated event/PR agency, party trust, or named individual who signed challans or ECI declarations, serve an Advocate Notice naming both the contracting agency and authorized signatory.",
      },
    ],
    legalProvision: "Indian Contract Act s.70 | RPA 1951 s.127A Imprint Proof | NI Act ss.138 & 143A | CPC Order XXXVII",
  },
];

export default function CommercialPrintPosmScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  return (
    <div className="space-y-5">
      {/* Interactive Scenario Selector Pills */}
      <div
        role="tablist"
        aria-label="Commercial printing, POSM signage and corporate gifting dispute scenarios"
        className="flex flex-wrap gap-2"
      >
        {SCENARIOS.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActiveId(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div
        role="tabpanel"
        className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b border-slate-200 pb-4">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
            {current.title}
          </h3>
          <span className="inline-block text-[10px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-900 text-white shrink-0">
            {current.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50/70 border border-red-200 rounded-xl p-4">
            <span className="block text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-1.5">
              Procurement Hold / Default Tactic
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {current.failureMode}
            </p>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <span className="block text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1.5">
              Statutory Creditor Counter-Strike
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {current.statutoryCounter}
            </p>
          </div>
        </div>

        <div>
          <span className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-3">
            3-Step Vendor Recovery Execution Protocol
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.actionSteps.map((st, idx) => (
              <div
                key={st.step}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-[11px] font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <strong className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {st.step}
                  </strong>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{st.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200 text-xs">
          <span className="font-bold uppercase tracking-wider text-slate-500">
            Governing Statutes:
          </span>
          <span className="font-mono font-semibold text-slate-800 bg-white px-2.5 py-1 rounded-md border border-slate-200">
            {current.legalProvision}
          </span>
        </div>
      </div>
    </div>
  );
}
