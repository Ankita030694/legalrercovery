"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  badge: string;
  buyerProfile: string;
  pretext: string;
  legalReality: string;
  statutoryHook: string;
  actionProtocol: string[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "us-delaware-llc-post-launch-default",
    tabLabel: "1. US Delaware LLC / C-Corp",
    title: "US Tech Startup Closes $45,000 Final Milestone Post-Launch, Cuts Slack Access & Stalls Wires",
    badge: "US UCC Article 2 & State Attorney Pre-Litigation Demand",
    buyerProfile:
      "Venture-funded or bootstrapped US technology enterprise incorporated in Delaware, California, or New York contracting directly with an Indian software engineering agency.",
    pretext:
      "The client enthusiastically accepts deployment to AWS production, releases public PR announcements, and onboard users. However, when the final $45,000 development invoice falls due, the US Founder or COO ceases replying to Slack, delays scheduled Zoom calls, and eventually sends a one-line email stating: 'Due to our Series A runway tightening, we cannot release international wire transfers right now; please pause communications until Q3.'",
    legalReality:
      "Under the US Uniform Commercial Code (UCC Article 2 governing software deliverables) and state contract jurisprudence, taking commercial benefit of custom software while refusing payment constitutes an actionable breach of contract and unjust enrichment. Furthermore, under Section 19 of the Indian Copyright Act, 1957 read with the Berne Convention (ratified by the United States), copyright does not vest in the foreign buyer until full agreed consideration is discharged. The Indian software agency retains underlying intellectual property ownership and can issue DMCA takedowns to AWS/GitHub and file pre-litigation attorney demand letters in the debtor's home state.",
    statutoryHook:
      "US Uniform Commercial Code (UCC) + Copyright Act 1957 s.19 + Berne Convention extraterritorial IP lien + FEMA 9-Month EDPMS clock",
    actionProtocol: [
      "Compile cryptographically verified Git commit logs, deployment approvals, and Slack/email acceptance trails under BSA 2023 Section 63.",
      "Serve a fact-verified Cross-Border Statutory Demand Notice directly on the US entity's Registered Agent in Delaware/California and executive directors.",
      "Issue a formal Notice of IP Revocation under Section 19 of the Copyright Act, putting the client on notice of imminent DMCA takedown against their cloud infrastructure.",
      "File an extension application with your Indian Authorized Dealer (AD) Bank enclosing the formal legal notice copy to prevent automatic EDPMS caution-listing.",
    ],
  },
  {
    id: "uk-private-ltd-distance-exploitation",
    tabLabel: "2. UK Private Limited (Ltd)",
    title: "UK Agency Abruptly Ceases Contact on £38,000 Invoices Hoping Cross-Border Distance Deters Action",
    badge: "UK Pre-Action Protocol & CPC s.44A Reciprocating Enforcement",
    buyerProfile:
      "London or Manchester registered UK Private Limited (Ltd) company subcontracting full-stack or mobile development to an offshore Indian tech dev shop.",
    pretext:
      "Following 8 months of successful delivery and payment of preliminary sprint invoices, the UK company incurs £38,000 across 3 consecutive milestone invoices. The UK directors ghost WhatsApp and email channels, assuming the Indian agency will write off the debt as 'too expensive to pursue across international borders.'",
    legalReality:
      "The United Kingdom is a reciprocating territory under Section 44A of the Indian Code of Civil Procedure, 1908 (CPC). Money decrees issued by competent Indian Commercial Courts can be directly executed against assets and bank accounts in the High Court of Justice in London without re-litigating the merits of the case. Furthermore, serving a formal Letter Before Claim compliant with the UK Civil Procedure Rules (CPR) Pre-Action Protocol puts the UK directors under severe personal jeopardy of statutory interest under the Late Payment of Commercial Debts (Interest) Act 1998 (Bank of England Base Rate + 8%) and insolvency winding-up petitions under the UK Insolvency Act 1986.",
    statutoryHook:
      "CPC 1908 Section 44A (UK Reciprocating Decree Execution) + UK Pre-Action Protocol (CPR) + UK Late Payment Act 1998 (8% + Base Rate)",
    actionProtocol: [
      "Conduct a UK Companies House audit to verify corporate active status, registered office, charges, and director identities.",
      "Issue a formal Letter Before Claim under the UK Practice Direction on Pre-Action Conduct, demanding payment within 14–30 days with statutory 8% interest.",
      "Put the UK debtor on formal notice of Section 12A Commercial Court litigation in India leading to direct Section 44A execution in England.",
      "Submit the legal notice bundle to the Indian AD Bank to initiate formal SOFTEX export bill tracking and prevent EDPMS non-realization penal flags.",
    ],
  },
  {
    id: "uae-dubai-mainland-difc-root-access-theft",
    tabLabel: "3. UAE Dubai / DIFC Client",
    title: "Dubai Client Demands Cloud Root Credentials for 'Investor Audit', Then Refuses $52,000 Dues",
    badge: "CPC s.44A UAE Reciprocal Treaty & DIFC Court Direct Execution",
    buyerProfile:
      "Dubai Mainland LLC, DIFC, or ADGM registered fintech, e-commerce, or real-estate technology operator outsourcing enterprise engineering to India.",
    pretext:
      "With $52,000 outstanding across beta completion invoices, the UAE client insists they need AWS root credentials and master administrative access 'strictly for an urgent investor due-diligence session over the weekend.' Once root access is transferred, the client revokes the Indian agency's developer access, re-hosts the databases, and fabricates alleged 'performance deficiencies' to withhold all funds.",
    legalReality:
      "In January 2020, the Government of India officially notified the United Arab Emirates as a 'Reciprocating Territory' under Section 44A of the Code of Civil Procedure, 1908 (Notification No. S.O. 261(E)). A final money decree from an Indian Commercial Court is executable directly in the UAE Federal Courts and Dubai Courts. Furthermore, under the UAE Commercial Transactions Law (Federal Decree-Law No. 50 of 2022) and DIFC Law of Obligations, bad-faith commercial appropriation of intellectual property without payment entitles the creditor to immediate summary payment orders, travel bans against authorized signatories, and bank account freezes.",
    statutoryHook:
      "CPC s.44A (UAE Reciprocating Territory Notification S.O. 261(E)) + UAE Federal Decree-Law No. 50 of 2022 + DIFC Arbitration/Courts",
    actionProtocol: [
      "Extract AWS CloudTrail and IAM credential alteration logs proving the client's unilateral lockout, certified under BSA 2023 Section 63.",
      "Serve a bilingual English-Arabic Pre-Litigation Legal Demand Notice citing CPC Section 44A reciprocal enforcement and UAE Commercial Law penalties.",
      "Issue notice to the UAE entity's banks and licensing authority (DED/DIFC Registrar) detailing ongoing cross-border commercial fraud and IP infringement.",
      "Lodge the complete dispute dossier with the Indian AD Bank to safeguard your FEMA export standing and request SOFTEX EDPMS ledger extension.",
    ],
  },
  {
    id: "upwork-toptal-direct-disintermediation-chargeback",
    tabLabel: "4. Escrow Disintermediation & Chargeback",
    title: "Offshore Client Moves Contract Off-Platform (Upwork/Toptal), Takes Code & Defaults on $30,000 Wire",
    badge: "Direct Contract Enforcement, Copyright Act s.19 & Wire Fraud Rebuttal",
    buyerProfile:
      "International client initially connected via freelance platforms (Upwork, Toptal, Fiverr Pro) who convinced the Indian software agency to sign direct Master Services Agreements (MSAs) to save platform commissions.",
    pretext:
      "After 3 months of platform-mediated escrow work, the foreign client requests: 'Let's move off Upwork and sign a direct contract; we will wire payments directly via Wise or SWIFT to save 10% fees.' Two direct wire cycles clear smoothly. On the final major $30,000 release, the client triggers a bank wire reversal or stops paying, knowing that platform escrow protection is no longer available.",
    legalReality:
      "While freelance platform terms prohibit off-platform disintermediation, direct commercial contracts executed between the parties remain 100% legally enforceable independent of platform rules. The foreign debtor cannot escape liability by claiming the agency breached platform terms. Under Indian contract law, UCC rules, and common law, the client's direct contract covenants, accepted SOWs, and bank transfer histories constitute an undisputed liquidated debt. More critically, the Indian exporter now faces an open SOFTEX bill without foreign currency inward remittance proof (FIRC), putting them in direct crosshairs of RBI's 9-month EDPMS timer.",
    statutoryHook:
      "Indian Contract Act 1872 s.73 + Copyright Act 1957 s.19 + FEMA Export Regulations (Mandatory SOFTEX realization within 9 months)",
    actionProtocol: [
      "Compile the complete off-platform email chain, signed Master Services Agreement (MSA), Statement of Work (SOW), and previous wire FIRCs.",
      "Serve a formal Statutory Legal Demand Notice detailing both the contractual debt and the statutory export violation caused by the client's willful non-remittance.",
      "Leverage the Section 19 Copyright ownership embargo: prohibit commercial operation or licensing of the software repository until full consideration is paid.",
      "Submit the legal notice and delivery proof to the AD Bank under RBI Master Direction on Export of Goods and Services to apply for EDPMS write-off or extension.",
    ],
  },
];

export default function ForeignClientSoftexScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full space-y-6">
      {/* Tab Selectors */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer truncate ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-200/70"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Scenario Detail Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            {activeScenario.badge}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            Default Pattern Analysis &bull; IND-05 Cross-Border
          </span>
        </div>

        <div>
          <p className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
            {activeScenario.title}
          </p>
          <p className="text-xs text-slate-500 mt-1 font-medium">
            <strong className="text-slate-700">Target Buyer Persona:</strong> {activeScenario.buyerProfile}
          </p>
        </div>

        {/* 2-Column Pretext vs Legal Reality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80">
            <span className="text-[11px] font-black uppercase tracking-wider text-amber-900 block mb-1.5">
              Offshore Debtor Pretext &amp; Commercial Friction
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.pretext}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
            <span className="text-[11px] font-black uppercase tracking-wider text-emerald-900 block mb-1.5">
              Creditor-Side Statutory Reality &amp; Extraterritorial Hook
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.legalReality}
            </p>
          </div>
        </div>

        {/* Statutory Hook Strip */}
        <div className="p-3.5 bg-slate-900 text-white rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
            Statutory Governing Law &amp; Treaties:
          </span>
          <span className="text-xs text-slate-200 font-medium">
            {activeScenario.statutoryHook}
          </span>
        </div>

        {/* Action Protocol Checklist */}
        <div className="space-y-2.5 pt-1">
          <p className="text-xs font-black uppercase tracking-wider text-slate-900">
            Mandatory Creditor Action Protocol:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {activeScenario.actionProtocol.map((step, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
