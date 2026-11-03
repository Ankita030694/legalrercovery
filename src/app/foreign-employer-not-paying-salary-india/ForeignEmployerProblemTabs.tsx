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
    id: "direct-contractor",
    tabLabel: "Direct Overseas Contractor",
    title: "Direct Foreign Independent Contractor Agreement (Invoices Ghosted)",
    cause:
      "You entered into a direct contractor agreement (often signed electronically on DocuSign, PandaDoc, or HelloSign with a W-8BEN form) with an overseas entity based in the United States (Delaware/California LLC/C-Corp), United Kingdom, Germany, Singapore, or UAE. The company suddenly stopped approving bi-weekly or monthly invoices, revoked your Slack/Google Workspace access without notice, or completely went silent across email channels while retaining your code, designs, or marketing assets.",
    legalBasis:
      "Under Section 20(c) of the Code of Civil Procedure (CPC), 1908, a civil suit or recovery action can be instituted in the Indian court within whose local limits the cause of action wholly or in part arose. Because the remote professional physically performed all professional services in India and received inward remittances into an Indian bank account, Indian courts possess competent civil jurisdiction. Furthermore, under Section 28 of the Indian Contract Act, 1872, choice-of-law or exclusive foreign jurisdiction clauses cannot absolutely extinguish your right to seek legal remedies before Indian courts.",
    steps: [
      {
        step: "Retrieve Invoices, FIRC & Work Records",
        description:
          "Export your contract, all generated invoices, bank statement lines with Foreign Inward Remittance Certificates (FIRC / FIRA) showing Purpose Code P0802/P1007, and timestamped proof of task submissions (Git commits, Figma versions, email attachments).",
      },
      {
        step: "Identify Registered Corporate Agent & Officers",
        description:
          "Extract the overseas entity's registered office, filing number (e.g. Delaware Division of Corporations, UK Companies House, ACRA Singapore), and active directors or managing executives.",
      },
      {
        step: "Serve Cross-Border Advocate Statutory Notice",
        description:
          "Serve a formal statutory legal demand notice via International Registered Airmail/Speed Post and electronically under Section 63 BSA, citing Section 73 Indian Contract Act with 18% annual commercial interest.",
      },
    ],
    statutoryRule: "Section 20(c) CPC 1908 & Section 73/28 Indian Contract Act 1872",
  },
  {
    id: "eor-peo",
    tabLabel: "Hired via EOR (Deel/Remote)",
    title: "Employed via Employer of Record (EOR / PEO Entity in India)",
    cause:
      "The foreign employer engaged an Employer of Record (EOR) service provider (such as Deel India, Remote Technology India, Multiplier, or Oyster HR) to issue local Indian employment contracts and payroll. When the overseas client defaulted on funding, paused the account, or requested sudden termination, the EOR withheld your salary, Full and Final (FnF) settlement, or gratuity, claiming they are merely an intermediary waiting for client funds.",
    legalBasis:
      "Under Indian employment jurisprudence and the Code on Wages, 2019, the domestic entity that signs your appointment letter, deducts Provident Fund (PF/EPF) or Tax Deducted at Source (TDS), and issues monthly payslips is the statutory employer of record. Legally, the EOR cannot plead privity of contract or client non-payment as a shield against statutory wage liability. Section 17(2) of the Code on Wages mandates clearance of all terminal dues within two working days of exit.",
    steps: [
      {
        step: "Collate Payslips, Form 16 & EOR Employment Contract",
        description:
          "Extract your tripartite or dual employment agreement signed with the Indian EOR entity, monthly salary slips, EPF UAN statement, and Form 16 / 26AS tax credits.",
      },
      {
        step: "Issue Dual Demand to Indian EOR & Foreign Principal",
        description:
          "Serve an advocate demand notice holding both the Indian EOR Pvt Ltd and the overseas client jointly and severally liable for wage recovery and statutory non-compliance.",
      },
      {
        step: "Escalate to Labour Authority & EPFO Enforcement",
        description:
          "If dues remain unpaid after 15 days, file a Section 45 claim before the competent Labour Authority under the Code on Wages and initiate an EPF 7A inquiry against the Indian EOR.",
      },
    ],
    statutoryRule: "Section 17(2) Code on Wages 2019 & Section 7A EPF Act 1952",
  },
  {
    id: "subsidiary-liaison",
    tabLabel: "Overseas Firm with Indian Office",
    title: "Foreign Company with Registered Indian Subsidiary or Liaison Office",
    cause:
      "You were hired by a multinational technology firm or international consultancy that maintains an active Wholly Owned Subsidiary (WOS), captive tech center, or liaison office registered with the Ministry of Corporate Affairs (MCA) in India. Following an international restructuring or cost-cutting directive from US/UK headquarters, the Indian branch delayed salaries, withheld notice period pay, or refused to issue exit clearances.",
    legalBasis:
      "A foreign corporation operating an incorporated Indian subsidiary or branch office under Chapter XXII of the Companies Act, 2013 is fully amenable to Indian judicial processes. Summons, notices, and recovery warrants can be served directly at the Indian registered office and executed against domestic bank accounts, commercial properties, and corporate assets in India without requiring foreign letters rogatory.",
    steps: [
      {
        step: "Search MCA Master Data for Indian Directors",
        description:
          "Download the Corporate Identification Number (CIN), registered office address, and Director Identification Numbers (DIN) of all resident Indian directors from mca.gov.in.",
      },
      {
        step: "Serve Statutory Demand on Indian & Foreign Directors",
        description:
          "Serve a joint advocate demand notice on the resident directors and the foreign board, establishing statutory non-compliance and personal exposure under labour statutes.",
      },
      {
        step: "Institute Summary Suit (Order 37 CPC) or Labour Claim",
        description:
          "File a Summary Suit under Order XXXVII CPC for liquidated debt or lodge an online complaint on the state labour commissioner portal (e.g. Samadhan, e-Karmika).",
      },
    ],
    statutoryRule: "Chapter XXII Companies Act 2013 & Order XXXVII Code of Civil Procedure",
  },
  {
    id: "startup-default",
    tabLabel: "Startup Runway / Fake Bankruptcy",
    title: "Foreign Startup Ran Out of Runway or Cites Liquidation Excuses",
    cause:
      "A venture-backed foreign startup (frequently in pre-seed to Series B stages) suffers a failed funding round, runway collapse, or executive turmoil. Founders unilaterally post a Slack announcement claiming 'insolvency', cease all wire transfers, freeze vendor accounts, and advise remote Indian workers that 'nothing can be done'. Often, founders continue operations quietly under another entity name while pocketing investor funds.",
    legalBasis:
      "An informal declaration of insolvency on Slack or email carries zero legal weight. Unless an official winding-up or Chapter 7/11 bankruptcy petition has been formally admitted in an overseas bankruptcy court (e.g. US Bankruptcy Court), the corporate entity remains fully active and legally accountable for all accrued debts, contractual liabilities, and commercial damages under Section 73 of the Indian Contract Act.",
    steps: [
      {
        step: "Verify Active Corporate & Bankruptcy Filings",
        description:
          "Check the corporate registrar (Delaware Division of Corporations, UK Gazette / Companies House, PACER bankruptcy search) to verify whether genuine liquidation was ever filed.",
      },
      {
        step: "Track Venture Capital Investors & Board Members",
        description:
          "Identify lead venture capital funds and institutional board members from SEC Form D filings, Crunchbase, or company press releases.",
      },
      {
        step: "Serve Advocate Notice with Investor Escalation Copy",
        description:
          "Issue a formal advocate notice demanding salary liquidation, with formal courtesy copies served to institutional board representatives, creating fiduciary pressure for immediate settlement.",
      },
    ],
    statutoryRule: "Section 73 Indian Contract Act 1872 & Cross-Border Creditor Rights",
  },
];

export default function ForeignEmployerProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);

  const currentProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
        {PROBLEMS.map((problem) => {
          const isActive = activeTab === problem.id;
          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setActiveTab(problem.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="space-y-5">
        <div>
          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-full">
            {currentProblem.statutoryRule}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mt-2">
            {currentProblem.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1.5">
            <strong className="text-slate-900 font-extrabold block text-xs sm:text-sm">
              How the Dispute Arises:
            </strong>
            <p className="leading-relaxed text-slate-600">{currentProblem.cause}</p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1.5">
            <strong className="text-slate-900 font-extrabold block text-xs sm:text-sm">
              Indian Legal Grounds &amp; Enforceability:
            </strong>
            <p className="leading-relaxed text-slate-600">{currentProblem.legalBasis}</p>
          </div>
        </div>

        {/* Steps to Enforce */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider">
            Statutory Action Protocol for This Dispute:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentProblem.steps.map((s, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-3.5 sm:p-4 rounded-xl shadow-xs space-y-1 relative"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">{s.step}</p>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed pl-7">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <div className="p-3.5 bg-red-50/60 border border-red-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="text-slate-700">
            <strong>Facing this exact foreign wage dispute?</strong> A structured advocate demand notice establishes formal cross-border default.
          </div>
          <Link
            href="#heading-cta-block"
            className="inline-flex items-center justify-center px-4 py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold rounded-lg transition-colors shrink-0"
          >
            Draft Statutory Cross-Border Notice
          </Link>
        </div>
      </div>
    </div>
  );
}
