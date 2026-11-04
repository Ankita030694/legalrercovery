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
    id: "company-not-named",
    tabLabel: "Company Omitted",
    title: "Fatal Defect: Filing Complaint Against Directors Without Naming Company as Accused",
    cause:
      "A frequent blunder in Section 138 litigation is filing the criminal complaint solely against the Managing Director, CEO, or authorised signatory who signed the company cheque, without arraying the private or public limited company itself as Accused No. 1. Complainants often assume that since the individual signed the cheque or promised payment, prosecuting the human being is sufficient.",
    legalBasis:
      "In the landmark 3-Judge Bench ruling in Aneeta Hada v. Godfather Travels & Tours Pvt. Ltd. (2012) 5 SCC 661, the Supreme Court held that the commission of an offence by the company is an indispensable condition precedent to trigger vicarious liability under Section 141. The company is the primary offender. If the company is not arraigned as an accused party in the title and memo of parties, the complaint against directors is legally unmaintainable and will be summarily quashed under Section 482 CrPC (Section 528 BNSS 2023).",
    steps: [
      {
        step: "Inspect the Cheque Leaf Drawer Account",
        description:
          "Verify the exact drawer name printed above the signature stamp (e.g., 'For Apex Infra Projects Pvt Ltd'). The company is the account holder, not the director.",
      },
      {
        step: "Draft Statutory Notice to Both Company & Directors",
        description:
          "Address the Section 138/141 demand notice to 'M/s XYZ Pvt Ltd, through its Managing Director' and simultaneously send separate notices to each director in charge.",
      },
      {
        step: "Array Company as Accused No. 1 in Criminal Complaint",
        description:
          "In the complaint before the Judicial Magistrate or Metropolitan Magistrate, list the corporate entity as Accused No. 1 and individual officers as Accused Nos. 2, 3, etc.",
      },
    ],
    statutoryRule: "Section 141(1) NI Act & Aneeta Hada (2012) 5 SCC 661",
  },
  {
    id: "resigned-director",
    tabLabel: "Resigned Director",
    title: "Accused Director Claims Prior Resignation via MCA Form DIR-11 / DIR-12",
    cause:
      "Upon receiving a Section 138 notice or court summons, an accused director often replies or files a quashing petition claiming they had already resigned from the board before the cheque was drawn or presented. In many instances, backdated resignations or fabricated board resolutions are created to evade criminal liability.",
    legalBasis:
      "Under Supreme Court jurisprudence (Sunita Palita v. Panchami Stone Quarry 2022; S.P. Mani & Mohan Dairy 2023), a director's resignation is only legally cognizable at the pre-trial quashing stage if substantiated by certified, unimpeachable public records—specifically Ministry of Corporate Affairs (MCA) Form DIR-12 (or old Form 32) filed prior to the date of cheque issuance. If the resignation was filed after the cheque bounced or if the director actively negotiated the transaction, they cannot escape trial.",
    steps: [
      {
        step: "Extract MCA Company Master Data & Filing History",
        description:
          "Search the MCA portal (mca.gov.in) with the company's CIN. Download the public Master Data and Director Signatory Details to verify the exact date of cessation and SRN filing date of Form DIR-12.",
      },
      {
        step: "Check Date of Cheque Issuance vs DIR-12 Filing Date",
        description:
          "If the cheque was issued on 15 January and Form DIR-12 was filed on 20 February, the director was legally on record on the date of issuance and remains vicariously liable.",
      },
      {
        step: "Plead Specific Active Role in Negotiation",
        description:
          "If the director signed purchase orders, emails, or settlement agreements, plead these facts with certified electronic evidence under Section 63 BSA 2023.",
      },
    ],
    statutoryRule: "Section 168 Companies Act 2013 & S.P. Mani Dairy (2023) SCC OnLine SC 1238",
  },
  {
    id: "managing-vs-sleeping",
    tabLabel: "Director Roles",
    title: "Managing Director & Signatory vs Non-Executive / Sleeping Director Liability",
    cause:
      "Aggrieved payees often name every single director listed on the company's MCA portal—including independent directors, nominee directors, and elderly sleeping family members—hoping to exert maximum settlement pressure. However, High Courts routinely quash complaints against non-executive directors who have no managerial control.",
    legalBasis:
      "In SMS Pharmaceuticals Ltd. v. Neeta Bhalla (2005) 8 SCC 89 and Sunita Palita (2022), the Supreme Court established that mere designation as 'director' does not attract Section 141 liability. A Managing Director (MD), Joint MD, and the authorised signatory who signed the cheque are deemed by law to be in charge of day-to-day affairs without elaborate averments. Conversely, to prosecute non-executive directors, the complaint must contain specific, precise averments detailing their direct involvement.",
    steps: [
      {
        step: "Focus Primary Criminal Prosecution on MD & Cheque Signatory",
        description:
          "Ensure the Managing Director and the individual who signed the cheque leaf are named with certified specimen signature copies.",
      },
      {
        step: "Insert Precise Role Averments for Other Executive Directors",
        description:
          "For Whole-Time Directors or Directors in charge, state specifically: 'Accused No. 3 was actively involved in day-to-day procurement, authorized the debt, and supervised issuance.'",
      },
      {
        step: "Exclude Independent & Nominee Directors to Avoid Delaying Quashing Suits",
        description:
          "Avoid implicating independent directors protected under Section 149(12) of the Companies Act 2013, which saves months of protracted Section 482 quashing litigation.",
      },
    ],
    statutoryRule: "Section 141(2) NI Act, Section 149(12) Companies Act 2013 & SMS Pharma (2005)",
  },
  {
    id: "notice-service",
    tabLabel: "Notice Service",
    title: "Statutory Notice Served Only to Registered Office vs Individual Directors",
    cause:
      "Payees often dispatch a single statutory demand notice addressed only to the company's registered office. At trial, individual directors argue that they were never personally served with statutory notice under Section 138(b), depriving them of the 15-day cure window to discharge the debt.",
    legalBasis:
      "While notice to the company at its registered office is service upon the principal offender, Supreme Court rulings (Kirshna Texport & Capital Markets Ltd. v. Ila A. Agrawal 2015) clarify that serving notice on the company is technically sufficient to initiate prosecution against the company. However, to eliminate frivolous technical defenses under Section 138(b) and prevent directors from claiming ignorance, serving separate demand notices on both the corporate office and each director's MCA residential address is the gold standard.",
    steps: [
      {
        step: "Obtain Directors' Registered Residential Addresses via MCA DIN Records",
        description:
          "Extract the Director Identification Number (DIN) master details from the Ministry of Corporate Affairs portal for all targeted directors.",
      },
      {
        step: "Dispatch Dual Notice via Speed Post & Electronic Mail",
        description:
          "Send statutory notices via Registered Speed Post with postal tracking to the Company Registered Office AND to each director's residential address, plus official corporate emails.",
      },
      {
        step: "Secure Digital Delivery Certificates Under BSA 2023",
        description:
          "Download India Post electronic delivery run-sheets and email delivery audit logs, backed by a statutory certificate under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.",
      },
    ],
    statutoryRule: "Section 138(b) & Section 141 NI Act; Section 63 BSA 2023",
  },
];

export default function CompanyDirectorsProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);
  const activeProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-100">
        {PROBLEMS.map((problem) => (
          <button
            key={problem.id}
            type="button"
            onClick={() => setActiveTab(problem.id)}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === problem.id
                ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {problem.tabLabel}
          </button>
        ))}
      </div>

      {/* Tab Content Panel */}
      <div className="pt-5 space-y-4">
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-black uppercase tracking-wider bg-red-50 text-red-700 border border-red-200 mb-2">
            Statutory Rule: {activeProblem.statutoryRule}
          </span>
          <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900">
            {activeProblem.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
            <strong className="text-slate-900 font-bold block text-xs uppercase tracking-wider">
              Common Litigation Pitfall / Cause
            </strong>
            <p className="leading-relaxed">{activeProblem.cause}</p>
          </div>

          <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200/80 space-y-1.5 text-amber-950">
            <strong className="text-amber-900 font-bold block text-xs uppercase tracking-wider">
              Statutory Law &amp; Judicial Mandate
            </strong>
            <p className="leading-relaxed">{activeProblem.legalBasis}</p>
          </div>
        </div>

        {/* Action Steps */}
        <div className="space-y-2.5 pt-2">
          <strong className="text-xs uppercase tracking-wider font-extrabold text-slate-900 block">
            Tactical Action Plan to Bulletproof Your Case:
          </strong>
          <div className="grid grid-cols-1 gap-2.5">
            {activeProblem.steps.map((st, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs"
              >
                <span className="shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{st.step}</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 text-xs text-slate-500">
          Need an advocate to verify director DINs and review MCA Form DIR-12 before drafting? Check our{" "}
          <Link href="/legal-notice-charges" className="text-blue-700 underline font-semibold">
            legal notice charges
          </Link>{" "}
          or see the exact statutory schedule on our{" "}
          <Link href="/cheque-bounce-notice-timeline-section-138" className="text-blue-700 underline font-semibold">
            cheque bounce timeline guide
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
