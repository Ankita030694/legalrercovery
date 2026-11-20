"use client";

import React, { useState } from "react";

interface ScenarioTab {
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

const SCENARIOS: ScenarioTab[] = [
  {
    id: "post-melting-slag",
    tabLabel: "Post-Melting Slag Excuse",
    title: "Induction Furnace Melts HMS / Shredded Scrap in 12 Hours—Then Deducts ₹12–₹45L for 'Excess Slag'",
    cause:
      "Rolling mills and induction furnace units in Mandi Gobindgarh, Jalna, Raipur, and Bhiwadi unload 25–35 MT Heavy Melting Scrap (HMS 1&2) or sponge iron, clear the Dharamkanta weighbridge, and charge the crucible within 12–24 hours. Two weeks later, when the 24-hour RTGS or 7-day bill matures, the mill issues a unilateral debit note alleging '8% excess slag, rust, or recovery loss'—after no physical scrap remains to inspect.",
    legalBasis:
      "Under Section 42 of the Sale of Goods Act, 1930, a buyer is deemed to have accepted the goods when they perform any act in relation to the goods inconsistent with the ownership of the seller—such as melting, smelting, or blending the scrap into billets/ingots. Once the scrap loses its separate identity in the induction furnace without a pre-melting joint inspection memo, the right of rejection is statutorily extinguished.",
    steps: [
      {
        step: "Lock Weighbridge, Gate-Camera & Toll Trail",
        description:
          "Compile the origin and destination Dharamkanta slips, GST E-Way Bill Part-B vehicle timestamp, highway FASTag crossings, and mill gate-entry slip showing unconditional unloading.",
      },
      {
        step: "Invoke Sale of Goods Act s.42 Consumption Estoppel",
        description:
          "Serve an Advocate Demand Notice putting the mill on notice that charging the furnace constitutes irreversible statutory acceptance under s.42, barring any post-melting slag or burning-loss debit.",
      },
      {
        step: "File Order XXXVII Summary Suit on Tax Invoice + Ledger",
        description:
          "Pursue liquidated invoice recovery under Order XXXVII CPC where the buyer has no triable defence once physical delivery and furnace consumption are established.",
      },
    ],
    statutoryRule: "Sale of Goods Act s.42 | BSA 2023 s.63 | Order XXXVII CPC",
  },
  {
    id: "non-ferrous-rate-drop",
    tabLabel: "Copper / Al Rate Drop",
    title: "LME / MCX Price Correction Triggers Post-Delivery Rejections on Copper, Brass & Aluminium Ingots",
    cause:
      "A single 20–25 MT truckload of copper wire scrap, brass honey, SS 304/316 scrap, or aluminium ADC-12 ingots carries ₹45 Lakh to ₹80 Lakh+ in exposure on 1.5%–2.5% trader margins. When LME or MCX base metal prices dip 4%–8% within 48 hours of dispatch, foundries invent 'high zinc/impurity' or 'moisture' excuses to force a post-delivery rate cut or delay RTGS.",
    legalBasis:
      "Under Section 26 and Section 42 of the Sale of Goods Act, 1930, risk and property in ascertained bulk metal pass upon delivery at the agreed weighbridge/gate. Post-delivery market price fluctuation is never a legal ground for unilateral price renegotiation or repudiation, and Section 61 entitles the unpaid seller to commercial interest from the due date.",
    steps: [
      {
        step: "Preserve Pre-Dispatch Spectrometer / Assay Report",
        description:
          "Attach the XRF/OES spectrometer chemical composition slip, container seal photos, and WhatsApp rate-lock confirmation matching the exact LME/MCX benchmark date.",
      },
      {
        step: "Reject Unilateral Rate-Cut & Demand Immediate RTGS",
        description:
          "Issue a 7-day statutory demand rejecting any post-delivery price revision and claiming 24% p.a. commercial interest (or 3x RBI bank rate if MSME-registered).",
      },
      {
        step: "Present Security PDCs under NI Act s.138",
        description:
          "If the foundry holds back RTGS beyond the agreed 24-hour/7-day credit window, present the security cheque after prior written intimation and initiate s.138 + s.143A (20% interim compensation) action.",
      },
    ],
    statutoryRule: "Sale of Goods Act ss.26, 42 & 61 | NI Act ss.138 & 143A",
  },
  {
    id: "gst-fake-invoice-excuse",
    tabLabel: "GST 'Fake Invoice' Excuse",
    title: "Mill Freezes ₹40L–₹75L Ledger Citing 'GST ITC Mismatch' or Bogus-Billing Allegation",
    cause:
      "Distressed steel and alloy buyers frequently stall genuine scrap importers and recyclers by claiming 'our CA flagged your GSTIN for ITC verification' or threatening to report the invoice as paper billing—even though the mill physically received the scrap, paid freight, and claimed input tax credit in GSTR-3B.",
    legalBasis:
      "Under Section 16(2) of the CGST Act, 2017, once the supplier has uploaded the invoice in GSTR-1, reflected it in GSTR-2B, and remitted tax, genuine physical movement backed by E-Way Bill, Dharamkanta slips, and transporter Bilty defeats any fabricated 'fake invoice' defence. Raising mala fide fraud allegations to evade admitted debt also attracts adverse civil costs and criminal defamation/cheating scrutiny under BNS s.318.",
    steps: [
      {
        step: "Assemble Physical Movement & Tax-Paid Dossier",
        description:
          "Bundle GSTR-1 filing receipt, E-Way Bill with vehicle number, toll FASTag log, weighbridge slip, transporter LR/Bilty, and port Bill of Entry (for imported scrap).",
      },
      {
        step: "Certify Electronic Tax & Weighbridge Logs under BSA s.63",
        description:
          "Execute a Bharatiya Sakshya Adhiniyam, 2023 Section 63 certificate for all GST portal screenshots, FASTag PDFs, and WhatsApp dispatch acknowledgments.",
      },
      {
        step: "Serve Pre-Suit Notice Calling Out Fraudulent Defence",
        description:
          "Put the buyer's directors and CFO on notice that having availed GSTR-2B/3B ITC on the supply, they are estopped from denying receipt of goods in Commercial Court.",
      },
    ],
    statutoryRule: "CGST Act s.16(2) | BSA 2023 s.63 | Commercial Courts Act 2015",
  },
  {
    id: "distressed-mill-attachment",
    tabLabel: "Distressed Mill Asset Freeze",
    title: "Rolling Mill Near Shutdown: Urgent Order 38 Rule 5 Attachment Before Banks Seize Plant",
    cause:
      "When an induction furnace or rolling mill enters financial distress—electricity disconnection, labour layoffs, or overdue bank CC limits—weeks matter. If a scrap trader waits 3 months sending polite reminders, secured banks will invoke SARFAESI s.13(2)/(4) and lock the plant, leaving unsecured scrap suppliers with zero recovery.",
    legalBasis:
      "Order XXXVIII Rule 5 of the Code of Civil Procedure, 1908 empowers Commercial Courts to order urgent Attachment Before Judgment (ABJ) of finished MS billets, TMT bars, aluminium ingots, or third-party buyer receivables when the creditor demonstrates prima facie debt and imminent asset dissipation. Parallel NI Act s.138 complaints against directors create personal criminal pressure outside bank collateral.",
    steps: [
      {
        step: "Document Distress & Asset-Stripping Signals",
        description:
          "Collect evidence of night-time billet clearances, sister-concern invoicing, electricity board arrears notices, or bounced cheques from peer suppliers in the Mandi/cluster.",
      },
      {
        step: "Move Urgent Order XXXVIII Rule 5 + Order XXXVII Application",
        description:
          "File a Commercial Summary Suit seeking urgent ad-interim attachment of finished ingot/billet stock or garnishee freeze on the mill's institutional buyers' receivables.",
      },
      {
        step: "Parallel NI s.138 Director Prosecution & IBC s.8 Trigger",
        description:
          "Serve statutory 15-day cheque-bounce notice on all signatory/executive directors and—where admitted arrears exceed ₹1 Crore—issue IBC Form 3 Demand Notice to compel priority settlement.",
      },
    ],
    statutoryRule: "CPC Order XXXVIII Rule 5 | NI Act ss.138/141 | IBC 2016 s.8",
  },
];

export default function MetalScrapScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Metal Scrap and Rolling Mill Default Scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((tab) => {
          const isSelected = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5"
      >
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-2">
            {current.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl font-black text-slate-900">{current.title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
              Commercial Failure Mode
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.cause}</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-black uppercase tracking-wider text-emerald-700 mb-1.5">
              Creditor Statutory Counter
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.legalBasis}</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
            3-Step Enforcement Action Plan
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.steps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">{item.step}</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
