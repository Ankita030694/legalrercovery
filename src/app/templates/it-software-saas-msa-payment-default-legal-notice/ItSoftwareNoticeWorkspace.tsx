"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

interface TemplatePreset {
  id: string;
  label: string;
  badge: string;
  creditorName: string;
  creditorGSTIN: string;
  creditorAddress: string;
  creditorEmail: string;
  creditorUdyam: string;
  debtorName: string;
  debtorSignatory: string;
  debtorGSTIN: string;
  debtorAddress: string;
  debtorEmail: string;
  clientDomain: string;
  contractType: string;
  contractDate: string;
  contractRef: string;
  milestoneScope: string;
  gitRepo: string;
  totalPrincipal: number;
  invoiceNumbers: string;
  invoiceDateRange: string;
  creditDays: number;
  interestRate: number;
  serverCosts: number;
  enableCopyrightRevocation: boolean;
  enableTenantSuspension: boolean;
  enableUatDeemedAcceptance: boolean;
  enableNonSolicitation: boolean;
  advocateName: string;
  advocateEnrolment: string;
  advocateOffice: string;
  noticeRef: string;
  noticeDate: string;
}

const PRESETS: TemplatePreset[] = [
  {
    id: "custom-software-milestone",
    label: "Custom Software Agency to Enterprise Client (Sprint / Milestone Default)",
    badge: "Milestone & UAT Dispute",
    creditorName: "HyperScale Tech Solutions Private Limited",
    creditorGSTIN: "29AABCH9912A1Z8",
    creditorAddress: "4th Floor, Tech Park Central, Outer Ring Road, Bellandur, Bengaluru, Karnataka - 560103",
    creditorEmail: "legal@hyperscaletech.io",
    creditorUdyam: "UDYAM-KR-03-0048192",
    debtorName: "OmniRetail Enterprises Private Limited",
    debtorSignatory: "Mr. Vikramaditya Singhania (Managing Director)",
    debtorGSTIN: "27AAFCO4419K1ZS",
    debtorAddress: "Level 8, Tower B, Peninsula Business Park, Lower Parel, Mumbai, Maharashtra - 400013",
    debtorEmail: "vikram@omniretail.co.in",
    clientDomain: "app.omniretail.co.in (AWS Production Tenant)",
    contractType: "Master Services Agreement (MSA) & Statement of Work (SOW-03)",
    contractDate: "14 January 2026",
    contractRef: "MSA/HST/2026/014 - SOW-03 (B2B Marketplace Engine)",
    milestoneScope: "Milestone 3 (Payment Gateway & Inventory Sync Engine) & Milestone 4 (Final Production Cutover)",
    gitRepo: "github.com/hyperscaletech/omniretail-core (Branch: release/v2.4)",
    totalPrincipal: 2450000,
    invoiceNumbers: "HST/26-27/089 & HST/26-27/114",
    invoiceDateRange: "15 July 2026 to 31 August 2026",
    creditDays: 15,
    interestRate: 21.75, // 3x RBI Repo Rate (6.5% * 3 = 19.5% + statutory margin) under MSMED Act
    serverCosts: 185000,
    enableCopyrightRevocation: true,
    enableTenantSuspension: true,
    enableUatDeemedAcceptance: true,
    enableNonSolicitation: false,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/B2B/TECH/2026/092",
    noticeDate: "16 November 2026",
  },
  {
    id: "saas-subscription-default",
    label: "B2B SaaS Platform to Enterprise Licensee (Annual Contract Value Arrears)",
    badge: "SaaS ACV & Server Suspension",
    creditorName: "CloudPulse Analytics Technologies India Pvt Ltd",
    creditorGSTIN: "07AABCC8841F1Z1",
    creditorAddress: "Tower 2, Cyber City, Phase II, Gurugram, Haryana - 122002",
    creditorEmail: "billing@cloudpulse.ai",
    creditorUdyam: "UDYAM-HR-04-0012984",
    debtorName: "Vanguard Logistics & Supply Chain Solutions Ltd",
    debtorSignatory: "Mr. Rajesh Malhotra (Chief Financial Officer)",
    debtorGSTIN: "06AABCV2219J1ZF",
    debtorAddress: "Plot 42, Sector 18, Udyog Vihar, Gurugram, Haryana - 122015",
    debtorEmail: "finance@vanguardlogistics.in",
    clientDomain: "vanguard.cloudpulse.ai (Dedicated Kubernetes Tenant)",
    contractType: "Enterprise Software-as-a-Service (SaaS) Master Agreement & Order Form",
    contractDate: "01 April 2026",
    contractRef: "CP/SAAS/2026/ENT-441 (500 Seat Enterprise Tier)",
    milestoneScope: "Q2 and Q3 Annual Subscription Installments & Over-Quota API Ingestion Charges",
    gitRepo: "N/A (Multi-Tenant Cloud Microservices Platform)",
    totalPrincipal: 1800000,
    invoiceNumbers: "CP/INV/2026/0411 & CP/INV/2026/0672",
    invoiceDateRange: "01 July 2026 to 01 October 2026",
    creditDays: 30,
    interestRate: 19.5,
    serverCosts: 95000,
    enableCopyrightRevocation: true,
    enableTenantSuspension: true,
    enableUatDeemedAcceptance: false,
    enableNonSolicitation: false,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/B2B/SAAS/2026/108",
    noticeDate: "16 November 2026",
  },
  {
    id: "staff-augmentation-c2c",
    label: "IT Staff Augmentation Agency to System Integrator (T&M Timesheets)",
    badge: "Timesheet & Non-Solicitation",
    creditorName: "Apex Coders Manpower & Technology LLP",
    creditorGSTIN: "36AAPFA4412K1Z9",
    creditorAddress: "HITEC City, Madhapur, Hyderabad, Telangana - 500081",
    creditorEmail: "operations@apexcoders.com",
    creditorUdyam: "UDYAM-TS-02-0033190",
    debtorName: "Infinia Global Solutions India Private Limited",
    debtorSignatory: "Mr. T. Srinivasa Murthy (Director - Delivery)",
    debtorGSTIN: "29AABCI5590H1Z2",
    debtorAddress: "Pritech Park, SEZ Campus, Bellandur, Bengaluru, Karnataka - 560103",
    debtorEmail: "vendor.desk@infiniaglobal.com",
    clientDomain: "Deployed within Client Banking Sandbox Environment",
    contractType: "IT Staff Augmentation & Subcontracting Framework Agreement",
    contractDate: "10 November 2025",
    contractRef: "INF-AGMT-2025/STAFF-088",
    milestoneScope: "Four Dedicated Full-Stack React & Go Engineers (June, July & August 2026 Timesheets)",
    gitRepo: "Client Enterprise GitLab Repositories (Commits logged under engineer SSO credentials)",
    totalPrincipal: 1560000,
    invoiceNumbers: "APEX/AUG/26/04, APEX/AUG/26/05 & APEX/AUG/26/06",
    invoiceDateRange: "30 June 2026 to 31 August 2026",
    creditDays: 30,
    interestRate: 19.5,
    serverCosts: 0,
    enableCopyrightRevocation: false,
    enableTenantSuspension: false,
    enableUatDeemedAcceptance: true,
    enableNonSolicitation: true,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/B2B/STAFF/2026/054",
    noticeDate: "16 November 2026",
  },
];

export default function ItSoftwareNoticeWorkspace() {
  const [selectedPresetId, setSelectedPresetId] = useState<string>("custom-software-milestone");
  const [formData, setFormData] = useState<TemplatePreset>(PRESETS[0]);
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  const handlePresetChange = (presetId: string) => {
    setSelectedPresetId(presetId);
    const found = PRESETS.find((p) => p.id === presetId);
    if (found) {
      setFormData({ ...found });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "number") {
      setFormData((prev) => ({ ...prev, [name]: parseFloat(value) || 0 }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Statutory financial calculations
  const totalClaim = useMemo(() => {
    return formData.totalPrincipal + (formData.serverCosts || 0);
  }, [formData.totalPrincipal, formData.serverCosts]);

  // Notice Text Generator
  const generatedNoticeText = useMemo(() => {
    const d = formData;
    const formattedPrincipal = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(d.totalPrincipal);

    const formattedServerCosts = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(d.serverCosts);

    const formattedTotalClaim = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(totalClaim);

    return `LEGAL DEMAND NOTICE UNDER COMMERCIAL COURTS ACT, 2015 SECTION 2(1)(c)(xviii),
COPYRIGHT ACT, 1957 SECTIONS 19 & 51, AND MSMED ACT, 2006 SECTION 16
(DISPATCHED VIA SPEED POST RPAD, DIGITALLY CERTIFIED EMAIL & WHATSAPP PURSUANT TO BSA 2023 S.63)

REF NO: ${d.noticeRef}
DATED: ${d.noticeDate}

TO,
${d.debtorName}
Through its Director / Authorized Representative: ${d.debtorSignatory}
Registered / Corporate Office: ${d.debtorAddress}
GSTIN: ${d.debtorGSTIN}
Designated Email: ${d.debtorEmail}
Production Tenant / Domain: ${d.clientDomain}

FROM,
${d.advocateName}, Advocate
Enrolment No: ${d.advocateEnrolment}
Chambers: ${d.advocateOffice}
Acting Under Instructions From & On Behalf of:
${d.creditorName}
Registered Address: ${d.creditorAddress}
GSTIN: ${d.creditorGSTIN} | MSME Udyam Reg No: ${d.creditorUdyam}
Contact Email: ${d.creditorEmail}
(Hereinafter referred to as the "CREDITOR / MY CLIENT")

SUBJECT: FORMAL STATUTORY DEMAND FOR IMMEDIATE PAYMENT OF UNPAID SOFTWARE ENGINEERING & SAAS INVOICES AGGREGATING TO ${formattedPrincipal} ALONG WITH 3X RBI COMPOUND INTEREST; CONDITIONAL 7-DAY SERVER/TENANT SUSPENSION WARNING; AND IMMEDIATE REVOCATION OF TEMPORARY INTELLECTUAL PROPERTY REPOSITORY LICENSE UNDER SECTION 19 & 51 OF THE COPYRIGHT ACT, 1957.

SIR / MADAM,

Under express instructions from and on behalf of my Client, I hereby issue this statutory legal notice calling upon you to rectify your material, continuing, and wilful commercial default:

1. COMMERCIAL ENGAGEMENT & CONTRACTUAL COVENANTS:
   a. My Client is an enterprise software engineering and cloud services technology enterprise registered as a Micro/Small enterprise under the Micro, Small and Medium Enterprises Development Act, 2006 (Udyam: ${d.creditorUdyam}).
   b. Your company entered into a binding commercial contract with my Client titled "${d.contractType}", bearing Reference No. ${d.contractRef}, dated ${d.contractDate}, wherein you engaged my Client to design, engineer, deploy, and host software infrastructure concerning: ${d.milestoneScope}.
   c. Under the agreed payment terms, invoices raised by my Client were strictly payable within ${d.creditDays} days of transmission. Clause of the MSA explicitly stipulates that all Intellectual Property, source code copyrights, and deployment licenses remain the exclusive property of my Client until full, unconditional receipt of all milestone and subscription fees.

2. SUBSTANTIAL PERFORMANCE & TELEMETRIC AUDIT TRAIL:
   a. My Client fully, diligently, and professionally performed its contractual milestones. Code repositories were committed under: ${d.gitRepo}.
   b. Sprint deliverables, automated CI/CD pipeline builds, and staging environments were successfully handed over to your technical team, as evidenced by Jira sprint completions, GitHub/GitLab commit logs, and server access telemetry.
   c. Your company took full possession, access, and commercial advantage of said software deliverables and/or multi-tenant cloud subscription at: ${d.clientDomain}.

3. LIQUIDATED DEBT & CONTINUING PAYMENT DEFAULT:
   a. Against the verified performance and delivery of services, my Client submitted serialized Tax Invoices: ${d.invoiceNumbers}, raised between ${d.invoiceDateRange}, aggregating to a principal sum of ${formattedPrincipal}.
   b. Despite the expiry of the stipulated ${d.creditDays}-day credit window, and despite recurring written reminders, meetings, and telemetric dashboard logs, your company has neglected, failed, and refused to discharge its liquidated liability.
   ${d.serverCosts > 0 ? `c. Furthermore, your default has caused my Client to incur unrecouped third-party cloud infrastructure and hosting expenses amounting to ${formattedServerCosts}, raising the liquidated sum to ${formattedTotalClaim}.` : ""}
   d. Your evasive conduct constitutes an actionable commercial dispute under Section 2(1)(c)(xviii) of the Commercial Courts Act, 2015, and an unlawful retention of services under Section 73 of the Indian Contract Act, 1872.

${d.enableUatDeemedAcceptance ? `4. ESTOPPEL AGAINST UAT STONEWALLING & DEEMED ACCEPTANCE:
   a. Your belated and specious pretext of withholding payments citing "pending UAT sign-off" or "unresolved minor bug tickets" is legally untenable and barred by the doctrine of estoppel.
   b. Telemetric logs and DNS routing confirm that your company pushed the codebase into staging/production environments, ingested live commercial transactional data, or permitted end-users to execute transactions.
   c. Under Section 42 of the Sale of Goods Act, 1930 read with Sections 51-55 of the Indian Contract Act, 1872, retaining and putting software code to commercial utilization without rejecting the deliverable within the contractual review window constitutes deemed, irrevocable acceptance in law. You cannot enjoy the commercial fruits of the software while manufacturing frivolous defect excuses to evade payment.` : ""}

${d.enableCopyrightRevocation ? `5. STATUTORY REVOCATION OF COPYRIGHT LICENSE UNDER COPYRIGHT ACT, 1957 (SECTIONS 19 & 51):
   a. Take notice that my Client is the original author and sole legal owner of the computer software code, system architectures, database schemas, and proprietary algorithms embodied in repository ${d.gitRepo} under Section 17 of the Copyright Act, 1957.
   b. Any permissive license or deployment right granted under the MSA was strictly contingent upon the precedent condition of full milestone payment. In consequence of your continuing material breach and failure to pay, MY CLIENT HEREBY FORMALLY REVOKES, WITHDRAWS, AND CANCELS ALL TEMPORARY LICENSES, AUTHORIZATIONS, AND USAGE RIGHTS GRANTED TO YOUR COMPANY WITH IMMEDIATE EFFECT.
   c. Continued running, hosting, copying, compiling, or commercial exploitation of said software, codebase, or application interface constitutes wilful intellectual property infringement under Section 51 of the Copyright Act, 1957, rendering your company and its directors personally liable to civil injunctions, rendition of accounts, and criminal prosecution under Section 63 of the Copyright Act (punishable with imprisonment up to 3 years and fines).` : ""}

${d.enableTenantSuspension ? `6. PEREMPTORY 7-DAY SERVER TENANT SUSPENSION WARNING & DPDP ACT COMPLIANCE SAFE HARBOR:
   a. In view of your persistent default, take notice that my Client shall proceed to suspend, restrict, or de-provision your cloud instance, API ingress endpoints, and tenant container clusters at ${d.clientDomain} upon the expiry of SEVEN (7) DAYS from the service of this notice.
   b. Fair Data Retrieval Notice (Digital Personal Data Protection Act, 2023 Safe Harbor): To ensure business continuity and eliminate any pretext of data spoliation, your technical team is hereby granted a strict 72-hour window from the date of this notice to execute automated database dumps and retrieve your proprietary enterprise data via standard export interfaces.
   c. Upon the expiry of said 7-day period, all automated hosting, load-balancing, and maintenance services will be suspended until complete settlement. My Client disclaims all consequential liabilities arising from your failure to retrieve your data within the notified window.` : ""}

${d.enableNonSolicitation ? `7. BREACH OF NON-SOLICITATION COVENANTS & LIQUIDATED DEVELOPER BUYOUT:
   a. It has come to my Client's knowledge that your company has directly or indirectly approached, solicited, or offered employment/subcontracting arrangements to my Client's deployed engineers without prior written consent, in flagrant breach of the Non-Solicitation covenants of the Framework Agreement.
   b. You are hereby called upon to immediately cease and desist from all unauthorized communication with my Client's personnel. In the event of unauthorized hiring, my Client shall initiate summary recovery for the contractual liquidated placement fee of 100% of the candidate's annualized gross CTC.` : ""}

8. STATUTORY MSMED ACT SECTION 16 MANDATE & 3X RBI COMPOUND INTEREST:
   a. My Client being registered under the MSMED Act, 2006, the maximum permissible credit period under Section 15 cannot exceed 45 days.
   b. Under Section 16 of the MSMED Act, 2006, you are statutorily liable to pay compound interest with monthly rests at THREE TIMES (3x) the Repo Rate notified by the Reserve Bank of India on the unpaid sum of ${formattedPrincipal} from the appointed day until complete realization.
   c. Take notice that under Section 23 of the MSMED Act, 2006 read with Section 43B(h) of the Income Tax Act, 1961, your company is legally prohibited from claiming tax deductions for said interest or unpaid purchase price, subjecting you to immediate corporate tax disallowance and penalties.

9. FINAL PEREMPTORY DEMAND:
   My Client hereby calls upon you to pay the crystallized sum of ${formattedTotalClaim}, along with statutory interest at ${d.interestRate}% per annum, directly into my Client's designated bank account within SEVEN (7) DAYS of receipt of this notice, failing which my Client has issued irrevocable instructions to:
   i. File an Urgent Commercial Suit under the Commercial Courts Act, 2015 before the designated Commercial Court, seeking an immediate decree for payment along with permanent copyright injunction under Section 55 of the Copyright Act;
   ii. Initiate insolvency resolution or statutory pre-institution mediation under Section 12A of the Commercial Courts Act;
   iii. File a statutory reference before the Micro and Small Enterprises Facilitation Council (MSEFC / MSME Samadhaan) under Section 18 of the MSMED Act, 2006 for summary recovery with 3x RBI compound interest;
   iv. De-provision all hosted infrastructure and suspend cloud access at ${d.clientDomain} without further intimation.

You are further called upon to remit ₹15,000 towards the professional costs of this legal notice.

Yours faithfully,

${d.advocateName}
Advocate, Enrolment: ${d.advocateEnrolment}
${d.advocateOffice}
Counsel for ${d.creditorName}`;
  }, [formData, totalClaim]);

  const handleCopyNotice = () => {
    navigator.clipboard.writeText(generatedNoticeText);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>Legal Demand Notice - ${formData.noticeRef}</title>
          <style>
            body { font-family: "Courier New", Courier, monospace; font-size: 13px; line-height: 1.5; padding: 40px; color: #111; }
            pre { white-space: pre-wrap; word-wrap: break-word; font-family: inherit; }
          </style>
        </head>
        <body>
          <pre>${generatedNoticeText.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
          <script>
            window.onload = function() { window.print(); window.close(); }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="w-full space-y-8">
      {/* Preset Selector */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#DC2626] block">
              Step 1 &bull; Choose Industry Preset
            </span>
            <p className="text-sm font-bold text-slate-900">
              Load Pre-Vetted Software, SaaS, or Staffing Dispute Clause Configurations
            </p>
          </div>
          <span className="text-xs text-slate-500">
            Selected: <span className="font-semibold text-slate-800">{formData.label}</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => handlePresetChange(preset.id)}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                selectedPresetId === preset.id
                  ? "border-[#DC2626] bg-red-50/60 shadow-sm ring-1 ring-[#DC2626]"
                  : "border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                  {preset.badge}
                </span>
                {selectedPresetId === preset.id && (
                  <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                )}
              </div>
              <p className="text-xs font-bold text-slate-900 leading-snug line-clamp-2">
                {preset.label}
              </p>
              <p className="text-[11px] text-slate-500 mt-1 font-mono">
                {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(
                  preset.totalPrincipal
                )}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Editor & Configuration Tabs */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200 mb-6">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#DC2626] block">
              Step 2 &bull; Customize Contract, Telemetry &amp; Financial Particulars
            </span>
            <p className="text-sm font-bold text-slate-900">
              Live Input Form (Updates the Advocate-Vetted Notice Document Real-Time)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handlePresetChange(selectedPresetId)}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors"
            >
              Reset to Preset
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-slate-700">
          {/* Section A: Creditor Details */}
          <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <p className="font-bold text-slate-900 text-xs uppercase tracking-wider text-[#DC2626]">
              A. Creditor Entity (Software / SaaS Vendor)
            </p>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">Company / Legal Name</label>
              <input
                type="text"
                name="creditorName"
                value={formData.creditorName}
                onChange={handleInputChange}
                className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:ring-1 focus:ring-[#DC2626] focus:border-[#DC2626] outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">GSTIN</label>
                <input
                  type="text"
                  name="creditorGSTIN"
                  value={formData.creditorGSTIN}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:ring-1 focus:ring-[#DC2626] outline-none font-mono"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">MSME Udyam No.</label>
                <input
                  type="text"
                  name="creditorUdyam"
                  value={formData.creditorUdyam}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:ring-1 focus:ring-[#DC2626] outline-none font-mono"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">Registered Address</label>
              <input
                type="text"
                name="creditorAddress"
                value={formData.creditorAddress}
                onChange={handleInputChange}
                className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:ring-1 focus:ring-[#DC2626] outline-none"
              />
            </div>
          </div>

          {/* Section B: Debtor Details */}
          <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <p className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-700">
              B. Debtor Company (Defaulting Client)
            </p>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">Client Legal Name</label>
              <input
                type="text"
                name="debtorName"
                value={formData.debtorName}
                onChange={handleInputChange}
                className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:ring-1 focus:ring-[#DC2626] outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">Director / Authorized Contact</label>
              <input
                type="text"
                name="debtorSignatory"
                value={formData.debtorSignatory}
                onChange={handleInputChange}
                className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:ring-1 focus:ring-[#DC2626] outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">Client GSTIN</label>
                <input
                  type="text"
                  name="debtorGSTIN"
                  value={formData.debtorGSTIN}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:ring-1 focus:ring-[#DC2626] outline-none font-mono"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">Client Email</label>
                <input
                  type="email"
                  name="debtorEmail"
                  value={formData.debtorEmail}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:ring-1 focus:ring-[#DC2626] outline-none font-mono"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">Client Tenant / Production Domain</label>
              <input
                type="text"
                name="clientDomain"
                value={formData.clientDomain}
                onChange={handleInputChange}
                className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:ring-1 focus:ring-[#DC2626] outline-none font-mono"
              />
            </div>
          </div>

          {/* Section C: Contract & Milestone Scope */}
          <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <p className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-700">
              C. Contract &amp; Technical Scope
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">Agreement Date</label>
                <input
                  type="text"
                  name="contractDate"
                  value={formData.contractDate}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:ring-1 focus:ring-[#DC2626] outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">Contract / SOW Ref</label>
                <input
                  type="text"
                  name="contractRef"
                  value={formData.contractRef}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:ring-1 focus:ring-[#DC2626] outline-none font-mono"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">Milestone Scope / Sprints</label>
              <input
                type="text"
                name="milestoneScope"
                value={formData.milestoneScope}
                onChange={handleInputChange}
                className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:ring-1 focus:ring-[#DC2626] outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">Git Repository / Branch</label>
              <input
                type="text"
                name="gitRepo"
                value={formData.gitRepo}
                onChange={handleInputChange}
                className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:ring-1 focus:ring-[#DC2626] outline-none font-mono"
              />
            </div>
          </div>

          {/* Section D: Financial Particulars */}
          <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <p className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-700">
              D. Overdue Invoices &amp; Interest
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">Overdue Principal (₹)</label>
                <input
                  type="number"
                  name="totalPrincipal"
                  value={formData.totalPrincipal}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:ring-1 focus:ring-[#DC2626] outline-none font-mono font-bold"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">Hosting / Cloud Costs (₹)</label>
                <input
                  type="number"
                  name="serverCosts"
                  value={formData.serverCosts}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:ring-1 focus:ring-[#DC2626] outline-none font-mono"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">Invoice Nos. &amp; Dates</label>
              <input
                type="text"
                name="invoiceNumbers"
                value={formData.invoiceNumbers}
                onChange={handleInputChange}
                className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:ring-1 focus:ring-[#DC2626] outline-none font-mono"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">Credit Window (Days)</label>
                <input
                  type="number"
                  name="creditDays"
                  value={formData.creditDays}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:ring-1 focus:ring-[#DC2626] outline-none font-mono"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">MSMED Interest Rate (%)</label>
                <input
                  type="number"
                  name="interestRate"
                  value={formData.interestRate}
                  onChange={handleInputChange}
                  step="0.25"
                  className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-900 focus:ring-1 focus:ring-[#DC2626] outline-none font-mono font-bold text-red-600"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section E: Tech Clause Toggles */}
        <div className="mt-6 pt-5 border-t border-slate-200">
          <p className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">
            E. Special Statutory Tech Clauses &amp; Remedies (Toggle to Include)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100">
              <input
                type="checkbox"
                name="enableCopyrightRevocation"
                checked={formData.enableCopyrightRevocation}
                onChange={handleInputChange}
                className="mt-0.5 text-[#DC2626] rounded border-slate-300 focus:ring-[#DC2626]"
              />
              <div>
                <span className="block text-xs font-bold text-slate-900">
                  Copyright Act s.19 &amp; s.51 IP License Revocation
                </span>
                <span className="block text-[11px] text-slate-500 leading-snug">
                  Revokes temporary permission to run/host code; commercial use becomes criminal copyright infringement.
                </span>
              </div>
            </label>

            <label className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100">
              <input
                type="checkbox"
                name="enableTenantSuspension"
                checked={formData.enableTenantSuspension}
                onChange={handleInputChange}
                className="mt-0.5 text-[#DC2626] rounded border-slate-300 focus:ring-[#DC2626]"
              />
              <div>
                <span className="block text-xs font-bold text-slate-900">
                  7-Day SaaS Suspension &amp; DPDP Data Safe Harbor
                </span>
                <span className="block text-[11px] text-slate-500 leading-snug">
                  Provides 72hr data retrieval window to eliminate IT Act s.43/66 criminal allegations before tenant de-provisioning.
                </span>
              </div>
            </label>

            <label className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100">
              <input
                type="checkbox"
                name="enableUatDeemedAcceptance"
                checked={formData.enableUatDeemedAcceptance}
                onChange={handleInputChange}
                className="mt-0.5 text-[#DC2626] rounded border-slate-300 focus:ring-[#DC2626]"
              />
              <div>
                <span className="block text-xs font-bold text-slate-900">
                  UAT Stonewalling Estoppel &amp; Deemed Acceptance
                </span>
                <span className="block text-[11px] text-slate-500 leading-snug">
                  Cites production deployment &amp; end-user traffic as conclusive deemed acceptance under Sale of Goods Act s.42.
                </span>
              </div>
            </label>

            <label className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100">
              <input
                type="checkbox"
                name="enableNonSolicitation"
                checked={formData.enableNonSolicitation}
                onChange={handleInputChange}
                className="mt-0.5 text-[#DC2626] rounded border-slate-300 focus:ring-[#DC2626]"
              />
              <div>
                <span className="block text-xs font-bold text-slate-900">
                  Non-Solicitation &amp; Developer Poaching Liquidated Damages
                </span>
                <span className="block text-[11px] text-slate-500 leading-snug">
                  Demands 100% annual CTC liquidated buyout if client bypassed agency to recruit deployed developer directly.
                </span>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Real-Time Generated Legal Notice Preview */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 text-slate-100 p-5 sm:p-7 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-5">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-red-400 block">
              Step 3 &bull; Generated Statutory Notice Draft
            </span>
            <p className="text-sm font-bold text-white">
              Advocate-Drafted Legal Demand Notice (Ready for Execution)
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyNotice}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                copySuccess
                  ? "bg-emerald-600 text-white"
                  : "bg-[#DC2626] hover:bg-[#B91C1C] text-white shadow-lg shadow-red-900/40"
              }`}
            >
              {copySuccess ? (
                <>
                  <span>&check;</span> Copied to Clipboard!
                </>
              ) : (
                <>
                  <span>&#128203;</span> Copy Notice Text
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>&#128438;</span> Print / PDF
            </button>
          </div>
        </div>

        {/* Scrollable Notice Canvas */}
        <div className="bg-slate-950 rounded-xl p-4 sm:p-6 border border-slate-800 font-mono text-xs sm:text-xs leading-relaxed text-slate-300 max-h-[580px] overflow-y-auto whitespace-pre-wrap select-text">
          {generatedNoticeText}
        </div>

        {/* Mandatory Annexures Checklist */}
        <div className="mt-6 pt-5 border-t border-slate-800">
          <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3">
            Mandatory Statutory Annexure Docket to Attach with this Notice:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-[11px] text-slate-300">
            <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-start gap-2">
              <span className="text-emerald-400 font-bold">&check;</span>
              <span><strong>Annexure A:</strong> Counter-signed MSA, SOW &amp; Change Request Addendums</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-start gap-2">
              <span className="text-emerald-400 font-bold">&check;</span>
              <span><strong>Annexure B:</strong> Serialized Tax Invoices &amp; GST Portal Filing Acknowledgments</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-start gap-2">
              <span className="text-emerald-400 font-bold">&check;</span>
              <span><strong>Annexure C:</strong> Git Commit Logs (SHA-256 Hashes) &amp; Jira Burndown Exports</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-start gap-2">
              <span className="text-emerald-400 font-bold">&check;</span>
              <span><strong>Annexure D:</strong> CloudWatch / Datadog Telemetry of Client Staging/Production Traffic</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-start gap-2">
              <span className="text-emerald-400 font-bold">&check;</span>
              <span><strong>Annexure E:</strong> MSME Udyam Registration Certificate (Proving Section 16 Entitlement)</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-start gap-2">
              <span className="text-emerald-400 font-bold">&check;</span>
              <span><strong>Annexure F:</strong> Bharatiya Sakshya Adhiniyam, 2023 s.63 Digital Certificate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
