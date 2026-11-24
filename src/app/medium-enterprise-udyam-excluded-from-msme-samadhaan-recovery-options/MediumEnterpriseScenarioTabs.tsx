"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  badge: string;
  claimProfile: string;
  corporatePretext: string;
  statutoryAnalysis: string;
  legalHook: string;
  actionProtocol: string[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "upward-graduation-trap",
    tabLabel: "1. Small-to-Medium Graduation",
    title: "Supplier Graduated from Small to Medium Enterprise While Purchase Order Was Executing",
    badge: "Silpi Industries Date-of-Contract Rule",
    claimProfile:
      "Precision machining, heavy fabrication, or auto-component supplier with turnover growing from ₹42 Cr to ₹68 Cr during contract fulfillment (Claim value: ₹1.4 Cr to ₹3.8 Cr).",
    corporatePretext:
      "The corporate buyer's legal team moves for summary dismissal before the MSEFC, arguing: 'The claimant holds a Medium Udyam certificate today. Under MSMED Act Section 2(n), MSEFC has zero jurisdiction over Medium units, so this petition must be thrown out.'",
    statutoryAnalysis:
      "Under the landmark Supreme Court ruling in Silpi Industries v. KSRTC (2021), statutory eligibility under the MSMED Act is determined strictly as on the date of execution of the underlying contract or purchase order. If the enterprise was registered as a 'Small Enterprise' on the date the contract was executed, the subsequent graduation to 'Medium Enterprise' upon filing the annual ITR/GST figures does not strip the MSEFC of jurisdiction for supplies under that contract. Furthermore, Ministry of MSME circulars confirm transition protections for pre-existing contracts.",
    legalHook:
      "Supreme Court Silpi Industries Ratio + MSMED Act Section 2(n) Date-of-Contract Nexus + MSME Notification S.O. 2119(E)",
    actionProtocol: [
      "Retrieve historical Udyam Registration Certificate and Udyam Portal transition history proving Small status on the exact date the PO was issued.",
      "Submit certified copy of the purchase order along with timestamped GST return extracts for the financial year of contracting.",
      "File a preliminary statutory counter-affidavit citing Silpi Industries to defeat the debtor's preliminary objection before the MSEFC.",
      "Concurrently issue a pre-action commercial notice warning the debtor that frivolous jurisdictional challenges will attract Section 35A CPC compensatory costs.",
    ],
  },
  {
    id: "buyer-exploits-43bh-loophole",
    tabLabel: "2. Section 43B(h) Loophole",
    title: "Corporate Buyer Stalls ₹2.2 Cr Payment Knowing Medium Units Cannot Invoke Section 43B(h)",
    badge: "Income Tax s.43B(h) Exclusion Counter",
    claimProfile:
      "Industrial machinery, tooling, or electrical equipment manufacturer with turnover of ₹75 Cr–₹180 Cr supplying to Tier-1 conglomerates or EPC contractors.",
    corporatePretext:
      "Buyer's finance controller openly admits: 'Section 43B(h) disallowance applies solely to Micro and Small vendors. Because your Udyam states Medium Enterprise, we will not face tax disallowance if we delay payment past 45 days. We will release funds only in Q4.'",
    statutoryAnalysis:
      "While the buyer's tax reading of Section 43B(h) is legally accurate (Finance Act 2023 specifically excludes Medium enterprises), the buyer commits a catastrophic strategic error by treating tax neutrality as immunity from commercial liability. Unpaid Medium Enterprise debts are actionable under Order XXXVII CPC for instant summary judgment, Commercial Courts Act Section 12A with urgent interim attachment under Order XXXVIII Rule 5, and the Insolvency and Bankruptcy Code (IBC) Section 8 if the debt exceeds ₹1 Crore.",
    legalHook:
      "Order XXXVII CPC (Summary Suit) + Commercial Courts Act 2015 s.12A + Limitation Act 1963 Article 14",
    actionProtocol: [
      "Abandon futile Section 43B(h) tax disallowance threats that signal legal weakness to corporate procurement heads.",
      "Issue a 15-Day Fact-Verified Demand Notice structuring the debt as an unconditioned liquidated claim on accepted invoices and signed delivery challans.",
      "Notify the buyer that commercial delay triggers 18% p.a. contractual or commercial interest under the Interest Act, 1978 and Sale of Goods Act Section 61(2).",
      "Prepare an immediate summary suit under Order XXXVII CPC in the designated Commercial Court, precluding general defense delays.",
    ],
  },
  {
    id: "order-37-liquidated-invoices",
    tabLabel: "3. Order XXXVII Summary Suit",
    title: "Buyer Acknowledged Invoices and e-Way Bills but Withholds ₹85L Citing Vague Counterclaims",
    badge: "Order XXXVII Rule 1(2) Liquidated Debt",
    claimProfile:
      "Auto-ancillary supplier, forging unit, or industrial chemical processor with ₹50L to ₹1.5 Cr in unpaid batch deliveries supported by GSTR-2B acknowledgments.",
    corporatePretext:
      "Buyer's accounts payable division withholds payment past 90 days, asserting: 'Our internal audit has raised potential quality debit notes for future reconciliation. We cannot clear payment until our annual vendor audit is complete.'",
    statutoryAnalysis:
      "Where invoices are accompanied by signed delivery challans, valid e-Way bills, and the buyer has claimed Input Tax Credit (ITC) under Section 16 of the CGST Act on GSTR-2B, the liability constitutes a liquidated contractual debt under Order XXXVII Rule 1(2) CPC. Under Order XXXVII Rule 3(5), the defendant has no inherent right to defend; they must establish a substantial, bona fide triable issue. Vague unquantified counterclaims or internal audit pretexts do not constitute a triable defense, entitling the creditor to an immediate decree or mandatory cash pre-deposit.",
    legalHook:
      "CPC Order XXXVII Rules 1–3 + CGST Act 2015 Section 16 (ITC Deemed Acknowledgment) + Indian Evidence Act / BSA 2023 s.63",
    actionProtocol: [
      "Correlate outward tax invoices, transporter lorry receipts (LR), and buyer-accepted e-Way bills with portal timestamps.",
      "Obtain GSTR-2B return extracts proving the debtor availed GST input tax credit on the contested invoices without issuing Section 34 debit notes within statutory limits.",
      "Serve a statutory legal demand notice demanding unconditional release within 10 days, expressly invoking Order XXXVII CPC summary consequences.",
      "File summary suit in the Commercial Court; upon defendant's summons for judgment, oppose leave to defend and demand 100% pre-deposit.",
    ],
  },
  {
    id: "ibc-section-8-demand-notice",
    tabLabel: "4. IBC s.8 Operational Insolvency",
    title: "Corporate Debtor Withholds ₹1.6 Cr Liquidated Balance: Threat of Corporate Insolvency (CIRP)",
    badge: "Insolvency & Bankruptcy Code 2016 s.8/9",
    claimProfile:
      "Medium manufacturing entity supplying process equipment, boilers, structural steel, or bulk raw materials with an undisputed default exceeding the ₹1 Crore threshold.",
    corporatePretext:
      "The corporate debtor repeatedly defaults on written payment schedules, offering post-dated cheques that bounce, while continuing commercial operations and servicing bank debt.",
    statutoryAnalysis:
      "Under Section 8 of the Insolvency and Bankruptcy Code (IBC), an operational creditor can serve a statutory demand notice in Form 3 or Form 4 for any operational debt exceeding ₹1 Crore (post-2020 MCA notification threshold). The corporate debtor has exactly 10 days to either pay the unpaid operational debt or prove the existence of a genuine 'pre-existing dispute' documented prior to the notice. Under the Supreme Court ruling in Mobilox Innovations v. Kirusa Software (2018), fabricated or post-facto defenses are summarily rejected, making Section 8 notices one of the highest-conversion recovery instruments in India.",
    legalHook:
      "Insolvency and Bankruptcy Code 2016 Sections 8 & 9 + Supreme Court Mobilox Innovations Pre-Existing Dispute Test",
    actionProtocol: [
      "Verify that the operational default strictly exceeds the ₹1 Crore threshold under Section 4 of the IBC.",
      "Audit all historical communications to confirm that the debtor never lodged a written dispute regarding goods quality before the default date.",
      "Issue a 10-day Statutory Demand Notice in Form 3 / Form 4 under Section 8 of the IBC via speed post and registered email.",
      "If the debtor fails to demonstrate a pre-existing dispute or settle within 10 days, file Section 9 CIRP petition before the jurisdictional NCLT bench.",
    ],
  },
];

export default function MediumEnterpriseScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Selector Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {SCENARIOS.map((item) => {
          const isSelected = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left flex flex-col justify-between border cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-sm"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200"
              }`}
            >
              <span>{item.tabLabel}</span>
              <span className={`text-[10px] font-medium mt-1 truncate ${isSelected ? "text-red-100" : "text-slate-500"}`}>
                {item.id === "upward-graduation-trap" && "Silpi Industries"}
                {item.id === "buyer-exploits-43bh-loophole" && "Order 37 Counter"}
                {item.id === "order-37-liquidated-invoices" && "Summary Suit"}
                {item.id === "ibc-section-8-demand-notice" && "₹1 Cr+ Default"}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800/60">
            {current.badge}
          </span>
          <span className="text-[11px] font-mono text-slate-400">
            Statutory Recovery Protocol
          </span>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 leading-snug">
          {current.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 text-xs sm:text-sm">
          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-1">
              Debtor Pretext &amp; Commercial Friction
            </span>
            <p className="text-slate-300 leading-relaxed">
              {current.corporatePretext}
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
              Statutory Reality &amp; Judicial Authority
            </span>
            <p className="text-slate-300 leading-relaxed">
              {current.statutoryAnalysis}
            </p>
          </div>
        </div>

        <div className="bg-red-950/30 border border-red-900/50 rounded-xl p-3.5 mb-5 text-xs text-slate-300">
          <strong className="text-red-400 font-semibold">Statutory Authority: </strong>
          {current.legalHook}
        </div>

        <div>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
            Recommended Advocate Recovery SOP:
          </span>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 list-decimal list-inside">
            {current.actionProtocol.map((step, idx) => (
              <li key={idx} className="bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/40">
                <span className="text-slate-200">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
