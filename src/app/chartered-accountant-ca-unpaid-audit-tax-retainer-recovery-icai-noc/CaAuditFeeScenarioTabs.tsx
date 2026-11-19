"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  triggerFact: string;
  statutoryTrap: string;
  creditorMove: string[];
  outcomeMetric: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "post-udin-cheque-bounce",
    tabLabel: "1. Post-UDIN Cheque Bounce",
    badge: "NI Act s.138 + Chapter VII",
    title: "UDIN Signed on Sept 30 / Oct 31, Fee Cheque Bounced, Client Appoints a New CA Next Year",
    triggerFact:
      "Under statutory filing rush on 30 September (Tax Audit Form 3CD u/s 44AB) or 31 October (Companies Act Balance Sheet & AOC-4), the promoter hands over a ₹1.85 Lakh post-dated fee cheque so you generate UDIN and sign the audit report. Ten days later, the cheque returns 'Insufficient Funds' or 'Payment Stopped', and next August a new CA emails seeking your Clause (8) NOC.",
    statutoryTrap:
      "Never revoke a validly generated UDIN out of anger (UDIN revocation is strictly regulated and cannot be weaponized for fee collection) and never withhold Tally backups or DSC tokens. Equally dangerous: missing the rigid 30-day statutory deadline under Section 138(b) of the Negotiable Instruments Act, 1881 after the bank cheque-return memo date.",
    creditorMove: [
      "Within 30 days of the bank cheque-return memo, instruct external litigation counsel to dispatch a statutory NI Act Section 138 demand notice granting 15 days to clear the cheque amount (with director vicarious liability u/s 141 for companies).",
      "Send a formal written reply to the Incoming Auditor under First Schedule Part I Clause (8) attaching the audited Balance Sheet schedule showing 'Audit Fees Payable' as an Undisputed Audit Fee under Chapter VII of the ICAI Council General Guidelines, 2008.",
      "Attach Form 26AS / AIS proving Section 194J TDS deduction (if deducted) and your GSTR-1 tax invoice (SAC 998221) so the client cannot manufacture a bogus 'quality dispute' before the Incoming Auditor or Magistrate.",
    ],
    outcomeMetric:
      "No ethical ICAI member can legally accept the statutory audit once placed on written notice of Balance-Sheet-provisioned undisputed audit fees—while parallel s.138 summons + 20% interim compensation u/s 143A push the promoter to pay rapidly.",
  },
  {
    id: "incoming-auditor-bypass",
    tabLabel: "2. Incoming CA Bypassed NOC",
    badge: "Clause (8) & Chapter VII",
    title: "New Auditor Filed Form ADT-1 Without Communicating or Accepted Despite Undisputed Fee Objection",
    triggerFact:
      "You discover on the MCA V3 portal (via Form ADT-1 / AOC-4) or Income Tax portal that a defaulting corporate client appointed a new statutory auditor without the incoming CA ever sending a Clause (8) communication—or the incoming CA accepted the audit anyway after you formally disclosed unpaid undisputed audit fees.",
    statutoryTrap:
      "Sending an informal angry WhatsApp message to the incoming CA or calling the client's bank manager without documented proof achieves nothing and risks counter-allegations. Chapter VII also carries a narrow 'sick unit' carve-out (entities registered >=5 years with accumulated losses >= net worth) that you must verify first.",
    creditorMove: [
      "Verify from the last signed Balance Sheet that the client is NOT a 'sick unit' under Chapter VII and that your statutory audit fee was provisioned in signed accounts (removing any claim that the fee is 'disputed').",
      "Dispatch a dignified, documented letter via Registered Post (RPAD) + ICAI-registered email to the Incoming Auditor enclosing the signed Balance Sheet extract, unpaid invoice ledger, and requesting immediate written confirmation of compliance with First Schedule Part I Clause (8) and Council Guidelines Chapter VII.",
      "Simultaneously serve an External Advocate Legal Notice on the client company and its Board of Directors demanding full fee settlement + interest under Order XXXVII CPC (and reserve the right to place non-compliance before the ICAI Disciplinary Directorate if the incoming CA persists in clear Chapter VII breach).",
    ],
    outcomeMetric:
      "Because breach of Clause (8) and Chapter VII exposes an incoming auditor to direct ICAI Disciplinary Directorate action, formal documented notice almost always triggers an immediate call from the incoming CA compelling the client to clear your audit dues.",
  },
  {
    id: "gst-litigation-cfo-retainer",
    tabLabel: "3. GST Litigation & Virtual CFO",
    badge: "Order 37 CPC + 26AS + GSTR-2B",
    title: "Client Cleared Audit Fee But Defaulted on ₹4.60 Lakh GST Show-Cause Reply, ITAT & Monthly Retainer",
    triggerFact:
      "A mid-sized trading or manufacturing company pays your modest ₹60,000 statutory audit fee (to neutralize Chapter VII) while leaving ₹4.60 Lakh unpaid across 9 months of Virtual-CFO retainers, GST Section 73/74 Show-Cause Notice replies, and Income Tax faceless appeal submissions—then switches to another tax firm.",
    statutoryTrap:
      "ICAI Council General Guidelines Chapter VII strictly bars an incoming auditor ONLY for unpaid 'undisputed audit fees'—NOT for non-audit tax litigation, GST filing, or CFO consultancy retainers. Attempting to block a statutory audit NOC solely for non-audit retainers can backfire ethically.",
    creditorMove: [
      "Separate your ledger cleanly: grant unconditional Clause (8) clearance on the paid statutory audit (protecting your ICAI standing 100%) while retaining your internal SA 230 working papers and immediately escalating non-audit bills through external legal counsel.",
      "Pull the client's Form 26AS / AIS (showing 10% TDS u/s 194J booked against your PAN) and GSTR-1/2B filing logs proving the client claimed GST Input Tax Credit on your SAC 998231/998222 invoices—invoking CGST Act s.16(2) second proviso (mandatory ITC reversal + 18% interest u/s 50 if unpaid >180 days).",
      "Serve an Advocate Demand Notice invoking Order XXXVII CPC Summary Suit (plus MSMED Act ss.15–18 & Income Tax s.43B(h) warning if your firm holds Udyam Registration), backed by GST portal ARN receipts, ITAT/CIT(A) submission acknowledgments, and BSA 2023 s.63 email logs.",
    ],
    outcomeMetric:
      "Citing Form 26AS TDS admissions + CGST s.16(2) 180-day ITC reversal risk turns a 'non-audit retainer' into a high-leverage tax-compliance liability that the new CA and CFO cannot ignore during tax audit (Clause 22 / GSTR-9C reconciliation).",
  },
  {
    id: "client-icai-complaint-threat",
    tabLabel: "4. Tally Books & ICAI Threat",
    badge: "R.D. Saxena Safe Handover",
    title: "Defaulting Client Threatens ICAI Disciplinary Complaint Alleging You Are Holding Tally Books & DSC",
    triggerFact:
      "After you follow up repeatedly for ₹3.20 Lakh in unpaid audit and ROC bills, the client sends a hostile email accusing your firm of 'illegally withholding Tally data, original purchase files, and GST portal passwords' and threatens to report your Certificate of Practice (COP) to ICAI.",
    statutoryTrap:
      "Under the Supreme Court's binding principle in R.D. Saxena v. Balram Prasad Sharma (2000) 7 SCC 264 and ICAI Ethical Standards Board rulings, a practicing CA has ZERO legal or ethical lien over client books of account, vouchers, Tally backups, or portal logins. Holding them even for a week hands the defaulter a deadly disciplinary weapon.",
    creditorMove: [
      "Immediately return 100% of client-owned property (physical files, Tally .zip backup, DSC token, portal login handover sheet) under a signed, itemized Handover Memo + BSA s.63 timestamped email—completely disarming any ICAI ethical complaint.",
      "Retain strictly your own Audit Working Papers, internal checklists, and engagement correspondence, which belong exclusively to the auditor under Standard on Auditing SA 230 (Audit Documentation).",
      "On the very same day as the clean handover, instruct an independent Advocate to serve a formal Legal Notice for Money Recovery (attaching the signed Balance Sheet provision, Form 26AS TDS credit, and engagement letter), shifting the battle entirely onto civil/commercial recovery ground.",
    ],
    outcomeMetric:
      "A documented clean handover immunizes your COP before ICAI, while an immediate external Advocate Notice strips away the client's bully tactic and establishes unimpeachable creditor bona fides before Civil / Commercial Courts.",
  },
];

export default function CaAuditFeeScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="CA audit and tax fee default scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {SCENARIOS.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border text-left ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/20"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-900 text-white">
            {current.badge}
          </span>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
            {current.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
              Practice Flashpoint
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.triggerFact}
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
              ICAI / Statutory Trap to Avoid
            </p>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
              {current.statutoryTrap}
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-3">
            CA Creditor Legal Action Sequence
          </p>
          <ol className="space-y-2.5">
            {current.creditorMove.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 mb-1">
            Expected Recovery Leverage
          </p>
          <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
            {current.outcomeMetric}
          </p>
        </div>
      </div>
    </div>
  );
}
