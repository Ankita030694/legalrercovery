"use client";

import React, { useState } from "react";
import Link from "next/link";

interface StatePortal {
  id: string;
  tabLabel: string;
  stateName: string;
  officialPortal: string;
  portalUrl: string;
  helpline: string;
  coveredEntities: string;
  competentOfficer: string;
  filingSteps: {
    step: string;
    detail: string;
  }[];
  statutoryGround: string;
  proTip: string;
}

const STATE_PORTALS: StatePortal[] = [
  {
    id: "central-samadhan",
    tabLabel: "Central / Pan-India",
    stateName: "Central Sphere (SAMADHAN Portal)",
    officialPortal: "Ministry of Labour & Employment — SAMADHAN Portal",
    portalUrl: "https://samadhan.labour.gov.in",
    helpline: "Toll-Free 1800-180-1551 (Central Shram Suvidha Helpline)",
    coveredEntities:
      "All Central Public Sector Undertakings (CPSUs), Nationalised & Scheduled Commercial Banks (SBI, HDFC, ICICI, PNB), Railways, Major Ports, Mines, Telecom, Defense establishments, and establishments operating across multiple states with central registration.",
    competentOfficer: "Regional Labour Commissioner (Central) / Assistant Labour Commissioner (ALC)",
    filingSteps: [
      {
        step: "Create Citizen Profile on SAMADHAN",
        detail:
          "Visit samadhan.labour.gov.in. Register using mobile OTP and Aadhaar authentication. Select 'Workman / Employee' as the registration category.",
      },
      {
        step: "Select Dispute Under Section 2A",
        detail:
          "Click on 'Raise Industrial Dispute'. Choose 'Dispute under Section 2A (Individual Dispute for Non-Payment of Wages / FnF / Termination)'.",
      },
      {
        step: "Enter Employer Identification & Office Address",
        detail:
          "Input employer legal corporate name, CIN, official email address (HR Head & Directors), and the registered office branch address.",
      },
      {
        step: "Upload Statement of Claim & Arrears Ledger",
        detail:
          "Attach PDF copies of the offer letter, last 3 salary slips, bank statement showing non-credit, resignation/termination letter, and copy of pre-litigation advocate legal notice.",
      },
    ],
    statutoryGround: "Section 2A & 33C(2) Industrial Disputes Act & Section 17/45 Code on Wages 2019",
    proTip:
      "Always attach the postal tracking receipt of your pre-litigation legal demand notice. Conciliation Officers prioritize dockets where the employer failed to respond to a formal statutory notice.",
  },
  {
    id: "delhi-edistrict",
    tabLabel: "Delhi NCR",
    stateName: "Delhi (e-District / Delhi Labour Department)",
    officialPortal: "Government of NCT of Delhi e-District & Labour GIS Portal",
    portalUrl: "https://edistrict.delhigovt.nic.in",
    helpline: "Delhi Labour Grievance Helpline 155214 / 011-23813840",
    coveredEntities:
      "All private limited companies, IT/software companies, media agencies, retail outlets, startups, clinics, and commercial establishments operating within Delhi NCT (Connaught Place, Okhla, Saket, Nehru Place, Rohini, etc.).",
    competentOfficer: "Joint / Deputy Labour Commissioner (DLC) of the concerned administrative district",
    filingSteps: [
      {
        step: "Register on e-District Delhi Portal",
        detail:
          "Go to edistrict.delhigovt.nic.in. Log in using Delhi Citizen ID or register with voter ID/Aadhaar.",
      },
      {
        step: "Navigate to Labour Department Services",
        detail:
          "Select 'Services' > 'Labour Department' > 'Filing of Claim for Recovery of Unpaid Wages Under Delhi Shops & Establishments Act / Industrial Disputes Act'.",
      },
      {
        step: "Pinpoint District Office Jurisdiction",
        detail:
          "Select the exact district where the company office is situated (e.g., South-East for Okhla/Nehru Place, New Delhi for Connaught Place).",
      },
      {
        step: "Submit Claim with Computation Sheet",
        detail:
          "Upload breakdown of basic pay, unpaid leave encashment, delayed FnF dues, and advocate legal demand notice with speed post tracking.",
      },
    ],
    statutoryGround: "Section 21 Delhi Shops and Establishments Act, 1954 & Section 17 Code on Wages 2019",
    proTip:
      "Under Section 21 of the Delhi Shops Act, the Claims Authority can award delayed wages plus statutory damages up to 10 times the unpaid amount if the delay was wilful.",
  },
  {
    id: "maharashtra-mahakamgar",
    tabLabel: "Maharashtra",
    stateName: "Maharashtra (Mahakamgar / LMS Portal)",
    officialPortal: "Maharashtra Labour Department / Mahakamgar Grievance Portal",
    portalUrl: "https://mahakamgar.maharashtra.gov.in",
    helpline: "Shramik Sahayata Toll-Free 1800-22-4466 / 022-26572733",
    coveredEntities:
      "All commercial establishments, IT/BPO enterprises, financial firms, factories, and corporate offices across Mumbai, Pune (Hinjawadi, Magarpatta), Thane, Navi Mumbai, and Nagpur.",
    competentOfficer: "Government Labour Officer (GLO) / Assistant Labour Commissioner (ALC)",
    filingSteps: [
      {
        step: "Access Mahakamgar LMS System",
        detail:
          "Open mahakamgar.maharashtra.gov.in or lms.mahaonline.gov.in. Choose 'Citizen Services' and register your profile.",
      },
      {
        step: "Select Wage Recovery Complaint",
        detail:
          "Select 'Lodge Complaint' under 'Payment of Wages / Conditions of Employment' under the Maharashtra Shops and Establishments Act, 2017.",
      },
      {
        step: "Provide Establishment Details",
        detail:
          "Enter company Trade Name, local office address, HR email ID, and local ward/taluka labour office jurisdiction.",
      },
      {
        step: "Schedule Conciliation Meeting",
        detail:
          "Once registered, the GLO issues an electronic notice summoning both employee and employer HR representatives for conciliation within 15–30 days.",
      },
    ],
    statutoryGround: "Maharashtra Shops & Establishments Act 2017 & Section 15 Payment of Wages Act",
    proTip:
      "In Maharashtra, if conciliation fails, the Labour Officer issues a Recovery Certificate directed to the District Collector to attach the employer's bank accounts as land revenue arrears.",
  },
  {
    id: "karnataka-ekarmika",
    tabLabel: "Karnataka",
    stateName: "Karnataka (e-Karmika Portal)",
    officialPortal: "Karnataka Department of Labour — e-Karmika Online Portal",
    portalUrl: "https://ekarmika.karnataka.gov.in",
    helpline: "Karnataka Labour Helpline 155214 / 080-22271874",
    coveredEntities:
      "Tech parks, IT/ITeS companies, electronics manufacturing units, startups, consultancies, and commercial offices located in Bengaluru (Whitefield, Electronic City, Koramangala), Mysuru, and Mangaluru.",
    competentOfficer: "Senior Labour Inspector / Assistant Labour Commissioner (ALC)",
    filingSteps: [
      {
        step: "Open e-Karmika Portal",
        detail:
          "Navigate to ekarmika.karnataka.gov.in and click on 'Citizen Grievance Redressal / Labour Complaints'.",
      },
      {
        step: "Identify Tech Company Jurisdiction",
        detail:
          "Select the jurisdictional division (Bengaluru Division 1 to 4) depending on the registered office or operational campus location.",
      },
      {
        step: "Submit Statutory Wage Violation Claim",
        detail:
          "File under Section 12/25 of the Karnataka Shops and Commercial Establishments Act for unpaid wages, illegal notice deduction, or withheld FnF.",
      },
      {
        step: "Summons Issued to Company Management",
        detail:
          "The ALC issues an official summons notice to company Directors and VP-HR. Non-appearance triggers ex-parte recovery proceedings.",
      },
    ],
    statutoryGround: "Karnataka Shops & Commercial Establishments Act 1961 & Section 17 Code on Wages",
    proTip:
      "Karnataka Labour Courts strictly enforce the rule that employers cannot withhold relieving letters or FnF on grounds of notice period buyout disputes without a formal court order.",
  },
  {
    id: "up-haryana",
    tabLabel: "UP & Haryana",
    stateName: "Uttar Pradesh & Haryana (Noida, Greater Noida & Gurugram)",
    officialPortal: "UP Shramik Samadhan Portal & Haryana Labour Welfare Board Portal",
    portalUrl: "https://up-shramik.gov.in",
    helpline: "UP Toll-Free 1800-180-5124 | Haryana Helpline 1800-180-2129",
    coveredEntities:
      "All corporate offices, BPOs, tech companies, manufacturing setups, and logistics hubs in Gautam Buddha Nagar (Noida / Greater Noida), Ghaziabad, Gurugram (Cyber City, Udyog Vihar), Faridabad, and Manesar.",
    competentOfficer: "Deputy Labour Commissioner (DLC Gautam Buddha Nagar / Gurugram)",
    filingSteps: [
      {
        step: "Log in to State Shramik Portal",
        detail:
          "For Noida/Greater Noida, visit up-shramik.gov.in or labour.up.gov.in. For Gurugram/Faridabad, visit hrylabour.gov.in.",
      },
      {
        step: "Register Citizen Dispute Complaint",
        detail:
          "Click on 'Shikayat Darj Karein' (Lodge Grievance) > 'Vetan Bhugtan / Bakaaya Rashi' (Wage Non-Payment & FnF Withholding).",
      },
      {
        step: "Specify Industrial Area & Office Address",
        detail:
          "Select the exact Sector (e.g. Sector 62 Noida, DLF Cyber City Gurugram) so the docket routes to the correct local Labour Enforcement Officer (LEO).",
      },
      {
        step: "Attend Conciliation Hearing",
        detail:
          "Labour Enforcement Officer convenes conciliation. If the company fails to produce payment vouchers, recovery certificate is forwarded to District Magistrate.",
      },
    ],
    statutoryGround: "UP Industrial Peace (Timely Payment of Wages) Act 1978 & Haryana Shops Act",
    proTip:
      "Under UP labour law, the DLC can issue direct recovery certificates enforceable by the Tehsildar as arrears of land revenue against defaulting companies within 60 days.",
  },
];

export default function LabourStateTabs() {
  const [activeTab, setActiveTab] = useState(STATE_PORTALS[0].id);

  const current = STATE_PORTALS.find((p) => p.id === activeTab) || STATE_PORTALS[0];

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm">
      {/* Scrollable Tab Bar */}
      <div className="flex border-b border-slate-200 gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {STATE_PORTALS.map((portal) => {
          const isActive = portal.id === activeTab;
          return (
            <button
              key={portal.id}
              type="button"
              onClick={() => setActiveTab(portal.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-[#111827] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {portal.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Panel Content */}
      <div className="mt-5 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900">
              {current.stateName}
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Authority: <span className="text-slate-800 font-semibold">{current.competentOfficer}</span>
            </p>
          </div>
          <div className="shrink-0">
            <a
              href={current.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 font-bold text-xs transition-colors"
            >
              <span>Visit Official Portal</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Portal & Helpline Highlight Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs">
          <div>
            <span className="font-extrabold text-slate-500 uppercase tracking-wider block mb-1">
              Official Grievance Portal
            </span>
            <span className="font-bold text-slate-900 block break-words">
              {current.officialPortal}
            </span>
            <span className="text-blue-700 font-medium underline mt-0.5 block break-all">
              {current.portalUrl}
            </span>
          </div>
          <div>
            <span className="font-extrabold text-slate-500 uppercase tracking-wider block mb-1">
              Statutory Complaint Helpline
            </span>
            <span className="font-bold text-emerald-800 block">
              {current.helpline}
            </span>
            <span className="text-slate-600 block mt-0.5">
              Available Monday–Saturday (10 AM to 5:30 PM)
            </span>
          </div>
        </div>

        {/* Covered Establishments */}
        <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          <strong className="text-slate-900 font-bold block mb-1">
            Who Can File in This Jurisdiction:
          </strong>
          <p>{current.coveredEntities}</p>
        </div>

        {/* Step-by-Step Filing Checklist */}
        <div className="space-y-3">
          <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
            Step-by-Step Online Complaint Filing Process:
          </strong>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {current.filingSteps.map((st, idx) => (
              <div
                key={idx}
                className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-extrabold text-[10px] flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="font-bold text-xs text-slate-900">{st.step}</span>
                </div>
                <p className="text-xs text-slate-600 pl-7 leading-relaxed">{st.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tip & Statutory Legal Basis */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 text-xs sm:text-sm space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="font-black text-amber-800">PRO TIP:</span>
            <span className="font-semibold text-amber-900">{current.proTip}</span>
          </div>
          <p className="text-[11px] sm:text-xs text-amber-800/90 font-medium">
            <strong>Statutory Governing Law:</strong> {current.statutoryGround}
          </p>
        </div>

        <div className="text-xs text-slate-500 pt-1 flex flex-wrap items-center justify-between gap-2">
          <span>
            Need help drafting your claim? Check our{" "}
            <Link
              href="/legal-notice-for-full-and-final-settlement-delay"
              className="text-blue-700 font-semibold underline"
            >
              FnF legal notice guide
            </Link>{" "}
            or see{" "}
            <Link
              href="/legal-notice-charges"
              className="text-blue-700 font-semibold underline"
            >
              advocate notice charges
            </Link>
            .
          </span>
        </div>
      </div>
    </div>
  );
}
