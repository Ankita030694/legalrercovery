"use client";

import React, { useState } from "react";
import { ShieldAlert, CheckCircle2, AlertTriangle, ArrowRight, ExternalLink } from "lucide-react";

interface Scenario {
  id: string;
  tabLabel: string;
  headline: string;
  divertedAmount: string;
  modusOperandi: string;
  legalLiability: string;
  statutoryOutcome: string;
  recommendedAction: string;
  governingPrecedent: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "lookalike-domain",
    tabLabel: "Lookalike Domain Spoofing",
    headline: "Impostor Domain (e.g., @seller-corp-ltd.com instead of @seller-corp.com) Diverts Wire",
    divertedAmount: "USD 120,000 to Offshore Escrow / Mule Account",
    modusOperandi:
      "A threat actor registers a typosquatted domain resembling the Indian exporter's brand, intercepts legitimate email threads, and issues an 'Urgent Financial Audit - Updated Beneficiary IBAN' memo. The buyer's accounts team wires payment without verifying via phone or contractual channels.",
    legalLiability: "Primary Liability Rests 100% on the Overseas Buyer",
    statutoryOutcome:
      "Payment to a third-party fraudster does NOT discharge the commercial debt under Indian Contract Act Section 37 / English Sale of Goods Act. The buyer failed basic duty of care to authenticate changed payment instructions.",
    recommendedAction:
      "Serve Immediate Commercial Default Demand Notice on Buyer + Trigger SWIFT MT199/MT299 Recall Request + File Cert-In & NCRP Report.",
    governingPrecedent:
      "BCCI v. D.D. International & English Commercial Court Principles: The debtor bears the risk of misdirected payment unless the creditor expressly authorized the altered channel.",
  },
  {
    id: "buyer-internal-breach",
    tabLabel: "Buyer Mailbox Compromised",
    headline: "Threat Actor Infiltrates Overseas Buyer's Microsoft 365 / Google Workspace Tenant",
    divertedAmount: "USD 245,000 to UK / Hong Kong Virtual Bank Account",
    modusOperandi:
      "The buyer's internal procurement or AP executive's email is breached via session hijacking or phishing. Hacker sets inbox auto-forwarding rules, intercepts legitimate invoices from India, alters SWIFT bank coordinates, and submits forged PDF invoices internally for wire approval.",
    legalLiability: "Exclusive Liability on Buyer (Breach of Internal IT Controls)",
    statutoryOutcome:
      "The exporter's systems were entirely uncompromised. The compromise occurred squarely within the buyer's sovereign IT infrastructure. Buyer cannot set off or extinguish legitimate invoice liability under UCP 600 or international sales law.",
    recommendedAction:
      "Demand immediate duplicate wire remittance. File international legal notice threatening commercial court proceedings, EDPMS alert, and local police reporting in buyer's jurisdiction.",
    governingPrecedent:
      "Strict Contractual Debt Enforcement: Performance of buyer's payment obligation requires receipt of cleared funds into Seller's nominated account.",
  },
  {
    id: "seller-inbox-breached",
    tabLabel: "Exporter Mailbox Compromise",
    headline: "Indian Exporter's Own Email Account Breached via Compromised Credential",
    divertedAmount: "USD 85,000 Diverted to Eastern European Account",
    modusOperandi:
      "An employee of the Indian exporter clicks a malicious phishing link, compromising the official corporate email. The attacker sends fraudulent bank change letters from the actual authentic email address, complete with genuine digital signatures.",
    legalLiability: "Comparative Fault / Contributory Negligence Analysis",
    statutoryOutcome:
      "While buyer argues agency and apparent authority, commercial courts examine whether the contract required dual-factor verification or written addendum for bank detail changes. Negligence of exporter does not automatically waive payment if buyer ignored red flags (e.g. personal account name vs corporate beneficiary).",
    recommendedAction:
      "Execute Section 63 BSA 2023 forensic log extraction. Prove whether buyer noticed mismatched beneficiary name (e.g., wire sent to individual rather than corporate entity). Seek joint cross-border SWIFT GPI freeze.",
    governingPrecedent:
      "Doctrine of Apparent Authority vs Negligent Duty of Care: Mismatched beneficiary details strip buyer of 'bona fide purchaser' defense.",
  },
  {
    id: "fema-edpms-crisis",
    tabLabel: "EDPMS & Caution-List Fallout",
    headline: "Foreign Buyer Refuses Second Wire; Indian Exporter Faces RBI EDPMS Caution-Listing",
    divertedAmount: "USD 160,000 Unrealized Shipping Bills Beyond 9-Month Limit",
    modusOperandi:
      "The buyer refuses to pay again, claiming 'we already paid, sort it out with the hacker.' Meanwhile, 9 months elapse from the shipping bill date. The Authorised Dealer (AD Bank) flags the export bill as delinquent on RBI EDPMS.",
    legalLiability: "Regulatory Exposure Under FEMA 1999 Section 8 & Customs Duty Drawback Rules",
    statutoryOutcome:
      "Customs issues Rule 18 Duty Drawback recovery notices with 15% interest. AD Bank threatens caution-listing. Exporter must legally establish bona fide cross-border fraud and litigated recovery to seek EDPMS extension or write-off under RBI AP (DIR Series) Circular No. 88.",
    recommendedAction:
      "Issue formal Advocate Legal Notice to foreign buyer for debt enforcement + Submit formal application to AD Category-1 Bank enclosing FIR, SWIFT recall proof, and legal notice for EDPMS extension.",
    governingPrecedent:
      "RBI Master Direction on Export of Goods & Services (FED Master Direction No. 16/2015-16): Legal proceedings permit AD Bank to grant provisional write-off/extension.",
  },
];

export default function BecScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3 mb-6">
        {SCENARIOS.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
              activeTab === item.id
                ? "bg-[#DC2626] text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {item.tabLabel}
          </button>
        ))}
      </div>

      {/* Scenario Detail Card */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-950/80 px-3 py-1 rounded-full border border-red-800/80">
              Commercial Scenario & Case Study
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-2 leading-tight">
              {current.headline}
            </h3>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-400 block">Diverted Wire Amount</span>
            <span className="text-base sm:text-lg font-black text-amber-400">{current.divertedAmount}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
            <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider mb-2">
              <ShieldAlert className="w-4 h-4" /> Modus Operandi & Threat Pattern
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {current.modusOperandi}
            </p>
          </div>

          <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
              <CheckCircle2 className="w-4 h-4" /> Legal Liability Allocation
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-semibold mb-2">
              {current.legalLiability}
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              {current.statutoryOutcome}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-950/60 to-slate-800/90 rounded-xl p-4 sm:p-5 border border-red-800/50 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                Governing Judicial Principle & Precedent
              </p>
              <p className="text-xs sm:text-sm text-slate-200 mt-1 italic leading-relaxed">
                "{current.governingPrecedent}"
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <div className="text-xs text-slate-400">
            <strong className="text-slate-200">Recommended Next Move:</strong> {current.recommendedAction}
          </div>
          <a
            href="/user/new-recovery"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-all shadow-md shrink-0"
          >
            Dispatch Statutory Notice (₹999) <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
