"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabTitle: string;
  badge: string;
  situation: string;
  risk: string;
  legalBasis: string;
  sopSteps: string[];
  sampleClause: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "tally-sap-erp-ledgers",
    tabTitle: "1. TallyPrime / SAP / Zoho ERP",
    badge: "Accounting Ledger Admissibility",
    situation:
      "Your Accounts Receivable team exports a 3-year party ledger, ageing statement, and tax invoice PDFs from TallyPrime, SAP S/4HANA, or Zoho Books for an Order XXXVII summary suit or IBC Section 9 petition.",
    risk:
      "Defense counsel objects that an uncertified ERP printout is inadmissible secondary electronic evidence, or challenges an old 'Section 65B IEA' affidavit that lacks Part B IT-custodian hash verification.",
    legalBasis:
      "BSA 2023 s.63(4) & Schedule (Part A by AR Head/CFO + Part B by IT Admin/System Custodian); BSA s.28 (Books of account regularly kept in business).",
    sopSteps: [
      "Export the party ledger and individual tax invoices in non-editable PDF/A format directly from TallyPrime, SAP, or Zoho Books without manual Excel edits.",
      "Compute the exact SHA-256 cryptographic hash string for each exported PDF file using a verifiable hashing utility (PowerShell Get-FileHash or sha256sum).",
      "Execute Part A of the BSA s.63 Schedule through the Accounts Receivable Manager / Authorized Signatory describing the ERP server, backup routine, and normal business use.",
      "Execute Part B of the BSA s.63 Schedule through the IT Administrator or ERP System Custodian recording the exact SHA-256 hash values and server/terminal device identifiers.",
    ],
    sampleClause:
      "Part A & Part B Declaration: The attached TallyPrime / SAP Ledger Extract (File: Debtor_Ledger_FY24-26.pdf, SHA-256: [64-char hex]) was generated in the ordinary course of accounting from a regularly maintained enterprise server operating without malfunction.",
  },
  {
    id: "gst-eway-portal-records",
    tabTitle: "2. GST Portal & E-Way Bills",
    badge: "Delivery & ITC Proof",
    situation:
      "A corporate buyer claims 'goods never received' or disputes invoice genuineness, even though GSTR-1/GSTR-2B reflects Input Tax Credit (ITC) availed and E-Way Bills show verified GSTN movement.",
    risk:
      "Printing screenshots from the GST Portal or NIC E-Way Bill portal without documenting the exact download URL, timestamp, GSTIN login custody, and SHA-256 hash invites evidentiary objections at trial.",
    legalBasis:
      "BSA 2023 s.63(1)-(4) & Schedule Part A + Part B; CGST Act 2017 s.16(2) (ITC reflection as corroborative admission of receipt).",
    sopSteps: [
      "Download the official JSON/PDF of GSTR-1, GSTR-3B summary, and E-Way Bill (Form EWB-01) directly from gst.gov.in and ewaybillgst.gov.in rather than cropping browser screenshots.",
      "Preserve the full browser download metadata, exact date/time stamp (IST), and GSTIN portal session details.",
      "Generate a SHA-256 hash for every downloaded E-Way Bill PDF and GSTR-1 filing acknowledgement.",
      "Cross-reference the E-Way Bill number, vehicle registration, and Transporter ID inside Part A of the BSA s.63 Schedule, with Part B signed by the GST/IT compliance officer.",
    ],
    sampleClause:
      "The E-Way Bill No. [12-digit] and GSTR-1 B2B Filing Receipt (File: GSTR1_Ref.pdf, SHA-256: [64-char hex]) were downloaded directly from the official GSTN/NIC portal using the Creditor's authorized credentials and remain unaltered.",
  },
  {
    id: "whatsapp-email-service",
    tabTitle: "3. WhatsApp & Email Notices",
    badge: "Blue-Tick & Dispatch Proof",
    situation:
      "Your credit team sent demand reminders, balance confirmations, and a formal Advocate Legal Notice over WhatsApp (showing double blue ticks) and corporate email, and the debtor later denies receipt.",
    risk:
      "Cropped phone screenshots without mobile IMEI/SIM details, WhatsApp chat export (.txt/.zip), or raw .eml/.msg email headers are routinely rejected as unverified or tamper-prone.",
    legalBasis:
      "BSA 2023 s.63(4) & Schedule; IT Act 2000 s.13 (Time and place of despatch and receipt of electronic record); CPC Order V Rule 9 (Electronic service).",
    sopSteps: [
      "Export the complete WhatsApp chat thread (with media) using 'Export Chat' and preserve the original .eml / .msg file (including full SMTP Message-ID and DKIM headers) for every email notice.",
      "Capture an uncropped device screen recording or full-page screenshot clearly displaying the debtor's registered mobile number, date/time, and delivery/read ticks.",
      "Record the smartphone make, model, IMEI, mobile number, and email server domain inside Part A of the BSA s.63 certificate.",
      "Compute the SHA-256 hash of the exported .txt/.zip chat archive and .eml files and certify them in Part B alongside the IT/Device Custodian signature.",
    ],
    sampleClause:
      "The WhatsApp chat export (WhatsApp_Debtor.txt, SHA-256: [64-char hex]) and SMTP Email Dispatch (.eml, Message-ID: <[id]>, SHA-256: [64-char hex]) were extracted directly from Device IMEI [Number] / Corporate Mail Server without alteration.",
  },
  {
    id: "legacy-65b-objection-fix",
    tabTitle: "4. Fixing Old 65B Objections",
    badge: "2026 Commercial Court Cure",
    situation:
      "In a commercial suit or arbitration filed after 1 July 2024, your counsel inadvertently annexed a legacy 'Section 65B Indian Evidence Act' affidavit, and the debtor files an application to strike off electronic exhibits.",
    risk:
      "Under BSA 2023 s.170 (Repeal and Savings), proceedings instituted on or after 1 July 2024 are governed by BSA 2023; relying on a repealed statute format without Part B hash certification weakens interim relief.",
    legalBasis:
      "BSA 2023 s.63 & s.170; Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal, (2020) 7 SCC 1 (Rectifiable defect before trial/evidence stage).",
    sopSteps: [
      "Do not panic: under Arjun Panditrao Khotkar, an electronic evidence certificate is a curable procedural requirement that can be supplied with leave of the Court prior to marking exhibits.",
      "Immediately file an application under Order XI Rule 6 CPC (Commercial Courts Act) seeking leave to place on record a fresh, compliant BSA 2023 Section 63 Part A + Part B Schedule Certificate.",
      "Re-hash the exact electronic files already filed on record so the SHA-256 digest in Part B matches the Court's digital record byte-for-byte.",
      "Where original primary electronic records (e.g., native server or original device) are produced directly for inspection under BSA s.57 Explanations 4–7, plead primary-evidence exemption in the alternative.",
    ],
    sampleClause:
      "Without prejudice to the primary electronic nature of the record under Section 57 of BSA 2023, the Plaintiff respectfully submits the statutory Part A and Part B Certificate under Section 63(4) of BSA 2023 curing any formal reference to the repealed Section 65B IEA.",
  },
];

export default function BsaSection63ScenarioTabs() {
  const [activeTab, setActiveTab] = useState(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 text-white shadow-xl">
      <div className="mb-6">
        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800/60 mb-2">
          B2B Electronic Evidence Playbooks
        </span>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          4 Commercial Evidence Scenarios &amp; BSA s.63 Certification SOPs
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          Select an institutional evidence source below to inspect the defense objection risk, statutory basis, Part A + Part B workflow, and ready-to-adapt clause.
        </p>
      </div>

      {/* Tabs Bar */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-800">
        {SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/30"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700"
              }`}
            >
              {scenario.tabTitle}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Content */}
      <div className="mt-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
            {current.badge}
          </span>
          <span className="text-xs text-slate-400 font-medium">{current.legalBasis}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              B2B Creditor Situation
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{current.situation}</p>
          </div>

          <div className="p-4 rounded-xl bg-red-950/30 border border-red-900/50">
            <h3 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-1.5">
              Defense Objection Risk
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{current.risk}</p>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-800/40 border border-slate-700/80">
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
            Step-by-Step BSA Section 63 Compliance SOP
          </h3>
          <ol className="space-y-2.5">
            {current.sopSteps.map((step, index) => (
              <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
            Sample BSA Section 63 Schedule Clause
          </span>
          <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed font-mono">
            &ldquo;{current.sampleClause}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
