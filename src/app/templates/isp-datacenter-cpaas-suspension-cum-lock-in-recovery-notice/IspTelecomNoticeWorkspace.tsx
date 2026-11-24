"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

interface TelecomPreset {
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
  cafNumber: string;
  circuitOrRackId: string;
  atDate: string;
  lockInExpiryDate: string;
  serviceDescription: string;
  cpeSerialAndMac: string;
  cpeReplacementValue: number;
  principalArrears: number;
  lockInCapExClaim: number;
  invoiceNumbers: string;
  invoiceDateRange: string;
  creditDays: number;
  interestRate: number;
  enableSevenDayDataExport: boolean;
  enableLockInCapEx: boolean;
  enableCpeBns316: boolean;
  enableHardwareLien170: boolean;
  advocateName: string;
  advocateEnrolment: string;
  advocateOffice: string;
  noticeRef: string;
  noticeDate: string;
}

const PRESETS: TelecomPreset[] = [
  {
    id: "isp-ill-lockin-cpe",
    label: "Enterprise ISP (ILL / MPLS Bandwidth Arrears + Lock-In CapEx + CPE Return)",
    badge: "ISP & Leased Line",
    creditorName: "AetherFiber Enterprise Networks Private Limited",
    creditorGSTIN: "27AABCA4412M1Z9",
    creditorAddress: "9th Floor, Gigaplex IT Park, Airoli Knowledge Park, Navi Mumbai, Maharashtra - 400708",
    creditorEmail: "collections@aetherfiber.in",
    creditorUdyam: "UDYAM-MH-19-0074120",
    debtorName: "Zenith FinServe & BPO Operations Private Limited",
    debtorSignatory: "Mr. Arvind Deshmukh (VP - IT Infrastructure)",
    debtorGSTIN: "27AABCZ9182K1Z3",
    debtorAddress: "4th Floor, Solitaire Corporate Park, Andheri East, Mumbai, Maharashtra - 400093",
    debtorEmail: "it.finance@zenithfinserve.co.in",
    cafNumber: "CAF/MUM/2025/88412",
    circuitOrRackId: "CIR-ILL-MUM-10G-0492 (1 Gbps Dual-Homed ILL + MPLS)",
    atDate: "12 October 2025",
    lockInExpiryDate: "11 October 2028 (36-Month Lock-In)",
    serviceDescription:
      "1 Gbps Dedicated Internet Leased Line (ILL) & 4-Branch MPLS SD-WAN Last-Mile Fiber Link",
    cpeSerialAndMac:
      "Cisco ISR 4331 Router (S/N: FDO2419A8K2 | MAC: 00:1E:BD:44:9A:10) + Nokia 7210 SAS-Mxp MUX (S/N: NS251109442)",
    cpeReplacementValue: 480000,
    principalArrears: 1460000,
    lockInCapExClaim: 1900000,
    invoiceNumbers: "AFN/26-27/1104, AFN/26-27/1392 & AFN/26-27/1680",
    invoiceDateRange: "01 July 2026 to 30 September 2026",
    creditDays: 15,
    interestRate: 21.75,
    enableSevenDayDataExport: true,
    enableLockInCapEx: true,
    enableCpeBns316: true,
    enableHardwareLien170: false,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/IND18/ISP/2026/412",
    noticeDate: "18 November 2026",
  },
  {
    id: "datacenter-colocation-lien",
    label: "Data Center Colocation / Bare-Metal Cloud (Rack Arrears + 7-Day DPDP Export + s.170 Lien)",
    badge: "Data Center & Cloud",
    creditorName: "VaultCore Tier-IV Data Centers India Private Limited",
    creditorGSTIN: "29AABCV7721Q1Z5",
    creditorAddress: "Plot 14, EPIP Zone, Whitefield, Bengaluru, Karnataka - 560066",
    creditorEmail: "legal.billing@vaultcore.in",
    creditorUdyam: "UDYAM-KR-03-0091284",
    debtorName: "QuantEdge Algorithmic Trading Systems Pvt Ltd",
    debtorSignatory: "Ms. Meera Subramanian (Chief Operating Officer)",
    debtorGSTIN: "29AABCQ3301H1Z8",
    debtorAddress: "Level 6, Prestige Trade Tower, Palace Road, Bengaluru, Karnataka - 560001",
    debtorEmail: "ops@quantedge.ai",
    cafNumber: "MSA-COLO/BLR/2025/0219",
    circuitOrRackId: "BLR-DC2-HALL3-RACK-C14 & C15 (2x 42U Racks, 16 kW Redundant Power)",
    atDate: "01 December 2025",
    lockInExpiryDate: "30 November 2027 (24-Month Lock-In)",
    serviceDescription:
      "2x 42U Dedicated Colocation Racks, Dual-Feed A+B UPS Power (kWh metered) & 10G Cross-Connects",
    cpeSerialAndMac:
      "Tenant-Owned Dell PowerEdge R760 Nodes (x6) + Juniper QFX5120 Switch (held under s.170 Lien)",
    cpeReplacementValue: 0,
    principalArrears: 2850000,
    lockInCapExClaim: 1200000,
    invoiceNumbers: "VC/BLR/26-27/0419 & VC/BLR/26-27/0582",
    invoiceDateRange: "01 August 2026 to 31 October 2026",
    creditDays: 15,
    interestRate: 21.75,
    enableSevenDayDataExport: true,
    enableLockInCapEx: true,
    enableCpeBns316: false,
    enableHardwareLien170: true,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/IND18/DC/2026/189",
    noticeDate: "18 November 2026",
  },
  {
    id: "cpaas-whatsapp-bsp-burst",
    label: "CPaaS / Meta WhatsApp BSP / DLT SMS Aggregator (Postpaid Burst Default + API Suspension)",
    badge: "CPaaS & BSP Postpaid",
    creditorName: "PulseRoute CPaaS Communications Private Limited",
    creditorGSTIN: "07AABCP5501R1Z2",
    creditorAddress: "Tower C, Unitech Cyber Park, Sector 39, Gurugram, Haryana - 122001",
    creditorEmail: "ar-legal@pulseroute.io",
    creditorUdyam: "UDYAM-HR-04-0058119",
    debtorName: "FlashKart Omnichannel Commerce Private Limited",
    debtorSignatory: "Mr. Rohan Kapoor (VP - Growth & Retention)",
    debtorGSTIN: "07AABCF8812L1Z7",
    debtorAddress: "Plot 88, Okhla Industrial Estate Phase III, New Delhi - 110020",
    debtorEmail: "finance@flashkart.in",
    cafNumber: "CPAAS-MSA/DEL/2026/0094 (DLT PE ID: 1101592840000018291)",
    circuitOrRackId: "TENANT-API-FK9920 (WhatsApp Business WABA + 4x Transactional DLT Routes)",
    atDate: "05 February 2026",
    lockInExpiryDate: "04 February 2027 (Minimum Monthly Commitment)",
    serviceDescription:
      "Enterprise Postpaid Meta WhatsApp Marketing/Utility Conversations & DLT Bulk SMS Termination",
    cpeSerialAndMac:
      "N/A — Cloud API Gateway & SIP Trunk Credentials (Dedicated IP: 103.44.192.18)",
    cpeReplacementValue: 0,
    principalArrears: 3140000,
    lockInCapExClaim: 450000,
    invoiceNumbers: "PR/26-27/2209 & PR/26-27/2491",
    invoiceDateRange: "01 September 2026 to 31 October 2026",
    creditDays: 7,
    interestRate: 21.75,
    enableSevenDayDataExport: true,
    enableLockInCapEx: true,
    enableCpeBns316: false,
    enableHardwareLien170: false,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/IND18/CPAAS/2026/305",
    noticeDate: "18 November 2026",
  },
];

function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function IspTelecomNoticeWorkspace() {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(PRESETS[0].id);
  const [form, setForm] = useState<TelecomPreset>(PRESETS[0]);
  const [copied, setCopied] = useState(false);

  const handlePresetChange = (preset: TelecomPreset) => {
    setSelectedPresetId(preset.id);
    setForm(preset);
    setCopied(false);
  };

  const updateField = <K extends keyof TelecomPreset>(key: K, value: TelecomPreset[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const totalClaim = useMemo(() => {
    return (
      (Number(form.principalArrears) || 0) +
      (form.enableLockInCapEx ? Number(form.lockInCapExClaim) || 0 : 0) +
      (form.enableCpeBns316 ? Number(form.cpeReplacementValue) || 0 : 0)
    );
  }, [
    form.principalArrears,
    form.lockInCapExClaim,
    form.cpeReplacementValue,
    form.enableLockInCapEx,
    form.enableCpeBns316,
  ]);

  const generatedNoticeText = useMemo(() => {
    const clauses: string[] = [];
    let clauseNum = 4;

    if (form.enableSevenDayDataExport) {
      clauses.push(
        `${clauseNum}. SEVEN-DAY DPDP-COMPLIANT DATA EXPORT & PORT SUSPENSION WARNING: Without prejudice to our Client's accrued monetary claims, and strictly in compliance with the Digital Personal Data Protection Act, 2023 (Section 8) and Information Technology Act, 2000 (Section 43 safe harbor), you are hereby granted a final, non-extendable window of SEVEN (7) DAYS from receipt of this Notice (the "Data-Export Window") to download, migrate, and back up all hosted databases, CDRs, configuration backups, or tenant logs from ${form.circuitOrRackId}. Upon expiry of the 7-day Data-Export Window without full clearance of ${formatINR(form.principalArrears)}, our Client shall lawfully suspend bandwidth routing / port access / API keys without liability for business interruption.`
      );
      clauseNum++;
    }

    if (form.enableLockInCapEx) {
      clauses.push(
        `${clauseNum}. LOCK-IN PERIOD CAPEX & WAIVED OTC RECOVERY (SECTION 74 CONTRACT ACT): Under the executed ${form.cafNumber} (Acceptance Testing Date: ${form.atDate}), you committed to a mandatory lock-in term expiring on ${form.lockInExpiryDate}, in reliance upon which our Client incurred substantial sunk capital expenditure (last-mile fiber trenching / dedicated rack provisioning / waived One-Time Charges). Your payment default and premature repudiation trigger liquidated damages and unamortized CapEx recovery of ${formatINR(form.lockInCapExClaim)} under Section 74 of the Indian Contract Act, 1872, representing a genuine pre-estimate of commercial loss.`
      );
      clauseNum++;
    }

    if (form.enableCpeBns316) {
      clauses.push(
        `${clauseNum}. DEMAND FOR RETURN OF ENTRUSTED CPE HARDWARE (BNS SECTION 316): Our Client installed and entrusted Customer Premises Equipment (CPE) solely on a bailment/service-use basis, specifically: ${form.cpeSerialAndMac} (Book Replacement Value: ${formatINR(form.cpeReplacementValue)}). You are called upon to grant immediate physical access for de-installation and return of the said CPE within 7 days, failing which your unlawful retention and conversion of entrusted telecom hardware shall render you and your Principal Officers liable for prosecution for Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS), alongside recovery of ${formatINR(form.cpeReplacementValue)}.`
      );
      clauseNum++;
    }

    if (form.enableHardwareLien170) {
      clauses.push(
        `${clauseNum}. STATUTORY BAILEE LIEN OVER COLOCATED HARDWARE (CONTRACT ACT SECTION 170): Pending full discharge of overdue rack space, kWh power, and cross-connect invoices totaling ${formatINR(form.principalArrears)}, our Client hereby exercises its lawful contractual and statutory bailee lien under Section 170 of the Indian Contract Act, 1872 over the physical server/network hardware housed in ${form.circuitOrRackId} (${form.cpeSerialAndMac}). Note that this physical hardware lien is strictly segregated from your logical data, for which the 7-day Data-Export Window above remains unconditionally open.`
      );
      clauseNum++;
    }

    return `BY SPEED POST RPAD / REGISTERED EMAIL / WHATSAPP BUSINESS
Ref. No.: ${form.noticeRef}
Date: ${form.noticeDate}

TO,
1. ${form.debtorName}
   (Through ${form.debtorSignatory})
   GSTIN: ${form.debtorGSTIN}
   Registered / Billing Address: ${form.debtorAddress}
   Official Email: ${form.debtorEmail}

SUBJECT: STATUTORY COMMERCIAL DEMAND NOTICE FOR UNPAID TELECOM / CLOUD ARREARS, 7-DAY DATA-EXPORT & SERVICE SUSPENSION WARNING, LOCK-IN CAPEX & CPE HARDWARE RECOVERY

Sir / Madam,

Under instructions from and on behalf of our Client, ${form.creditorName} (GSTIN: ${form.creditorGSTIN}${form.creditorUdyam ? ` | Udyam Reg: ${form.creditorUdyam}` : ""}), having its corporate office at ${form.creditorAddress} (hereinafter "our Client"), we serve you with this formal Legal Notice:

1. TECHNICAL & CONTRACTUAL SCHEDULE: Pursuant to Customer Application Form / Master Service Agreement No. ${form.cafNumber}, our Client provisioned and commissioned ${form.serviceDescription} under Circuit / Rack / Tenant ID: ${form.circuitOrRackId}. Acceptance Testing (AT) and commercial go-live were completed on ${form.atDate}, and you have continuously consumed the said services without raising any contemporaneous SLA or billing dispute prior to invoice maturity.

2. OVERDUE TAX INVOICES & TELECOM LEDGER: Against the services rendered and metered (supported by BSA 2023 Section 63 certified CDRs, NetFlow/kWh logs, and GST e-Invoices ${form.invoiceNumbers} covering ${form.invoiceDateRange}, with a ${form.creditDays}-day credit period), a principal sum of ${formatINR(form.principalArrears)} remains overdue and unpaid despite repeated electronic reminders.

3. COMMERCIAL INTEREST & MSME / CONTRACTUAL LIABILITY: You are liable to pay contractual / statutory interest at ${form.interestRate}% per annum (compounded monthly under Section 16 of the MSMED Act, 2006 where applicable, or commercial rate under the Commercial Courts Act, 2015) from the respective invoice due dates until actual realization.

${clauses.join("\n\n")}

${clauseNum}. FINAL 7-DAY / 15-DAY DEMAND & ESCALATION: You are hereby called upon to remit the total quantified sum of ${formatINR(totalClaim)} (comprising ${formatINR(form.principalArrears)} principal arrears${form.enableLockInCapEx ? `, ${formatINR(form.lockInCapExClaim)} lock-in CapEx` : ""}${form.enableCpeBns316 ? `, or return of CPE valued at ${formatINR(form.cpeReplacementValue)}` : ""}) plus accrued interest within 7 days (for data export & CPE access) and 15 days (for final monetary settlement), failing which our Client shall initiate:
   (a) Summary Suit under Order XXXVII CPC / Commercial Suit before the Commercial Court (or TDSAT Petition under Section 14 TRAI Act, 1997 where inter-licensee jurisdiction applies);
   (b) Insolvency Demand Notice under Section 8 of the IBC, 2016 (for defaults exceeding Rs. 1 Crore); and
   (c) Criminal complaint under Section 316 BNS, 2023 for unreturned CPE hardware and Section 138 NI Act / Section 25 PSS Act for dishonoured instruments.

Copy retained in our office for further legal action.

Yours faithfully,
${form.advocateName}, Advocate
Enrolment No.: ${form.advocateEnrolment}
${form.advocateOffice}
(For ${form.creditorName} | ${form.creditorEmail})`;
  }, [form, totalClaim]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedNoticeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Preset Selector */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
        <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
          Step 1: Select Telecom / Cloud / CPaaS Default Scenario
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {PRESETS.map((preset) => {
            const active = selectedPresetId === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => handlePresetChange(preset)}
                className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                  active
                    ? "bg-slate-900 text-white border-slate-900 shadow-md"
                    : "bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <span
                  className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1.5 ${
                    active ? "bg-[#DC2626] text-white" : "bg-red-50 text-[#DC2626]"
                  }`}
                >
                  {preset.badge}
                </span>
                <p className="text-xs font-bold leading-snug">{preset.label}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Form + Live Preview Split */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* Left: Technical & Statutory Inputs */}
        <div className="xl:col-span-5 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Step 2: Populate Technical Schedule
            </p>
            <span className="text-[11px] font-bold text-[#DC2626]">Live Sync</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="block">
              <span className="text-[11px] font-semibold text-slate-600">Creditor (ISP / DC / CPaaS)</span>
              <input
                type="text"
                value={form.creditorName}
                onChange={(e) => updateField("creditorName", e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-[11px] font-semibold text-slate-600">Debtor / Enterprise Customer</span>
              <input
                type="text"
                value={form.debtorName}
                onChange={(e) => updateField("debtorName", e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-[11px] font-semibold text-slate-600">CAF / MSA Reference No.</span>
              <input
                type="text"
                value={form.cafNumber}
                onChange={(e) => updateField("cafNumber", e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-[11px] font-semibold text-slate-600">Circuit ID / Rack ID / Tenant ID</span>
              <input
                type="text"
                value={form.circuitOrRackId}
                onChange={(e) => updateField("circuitOrRackId", e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-[11px] font-semibold text-slate-600">AT / Commissioning Date</span>
              <input
                type="text"
                value={form.atDate}
                onChange={(e) => updateField("atDate", e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-[11px] font-semibold text-slate-600">Lock-In Expiry Date</span>
              <input
                type="text"
                value={form.lockInExpiryDate}
                onChange={(e) => updateField("lockInExpiryDate", e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-[11px] font-semibold text-slate-600">CPE Serial / MAC Address (or Rack Hardware)</span>
              <input
                type="text"
                value={form.cpeSerialAndMac}
                onChange={(e) => updateField("cpeSerialAndMac", e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-[11px] font-semibold text-slate-600">Principal Arrears (INR)</span>
              <input
                type="number"
                value={form.principalArrears}
                onChange={(e) => updateField("principalArrears", Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-[11px] font-semibold text-slate-600">Lock-In CapEx Claim (INR)</span>
              <input
                type="number"
                value={form.lockInCapExClaim}
                onChange={(e) => updateField("lockInCapExClaim", Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </label>
          </div>

          {/* Statutory Clause Toggles */}
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
              Statutory Protective Clauses
            </p>
            <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={form.enableSevenDayDataExport}
                onChange={(e) => updateField("enableSevenDayDataExport", e.target.checked)}
                className="mt-0.5 accent-[#DC2626]"
              />
              <span>7-Day DPDP-Safe Data-Export &amp; Port Suspension Window (IT Act s.43 Safe Harbor)</span>
            </label>
            <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={form.enableLockInCapEx}
                onChange={(e) => updateField("enableLockInCapEx", e.target.checked)}
                className="mt-0.5 accent-[#DC2626]"
              />
              <span>Contract Act s.74 Lock-In CapEx &amp; Waived OTC Recovery Clause</span>
            </label>
            <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={form.enableCpeBns316}
                onChange={(e) => updateField("enableCpeBns316", e.target.checked)}
                className="mt-0.5 accent-[#DC2626]"
              />
              <span>BNS s.316 Criminal Breach of Trust Demand for Unreturned Router / MUX / ONT</span>
            </label>
            <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={form.enableHardwareLien170}
                onChange={(e) => updateField("enableHardwareLien170", e.target.checked)}
                className="mt-0.5 accent-[#DC2626]"
              />
              <span>Contract Act s.170 Bailee Lien Over Colocated Tenant Rack Hardware</span>
            </label>
          </div>

          <div className="bg-slate-900 text-white rounded-xl p-3.5 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
                Total Quantified Notice Demand
              </span>
              <span className="text-lg font-black text-emerald-400">{formatINR(totalClaim)}</span>
            </div>
            <Link
              href="/user/new-recovery"
              className="px-3.5 py-2 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors"
            >
              Send via Advocate &rarr;
            </Link>
          </div>
        </div>

        {/* Right: Live Formatted Notice Preview */}
        <div className="xl:col-span-7 bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-5 py-3.5 bg-slate-950 border-b border-slate-800">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block">
                Fact-Verified Notice Draft
              </span>
              <span className="text-xs text-slate-300 font-medium">Ref: {form.noticeRef}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="px-3.5 py-1.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                {copied ? "Copied Notice!" : "Copy Notice Text"}
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-100 text-xs font-semibold transition-colors cursor-pointer"
              >
                Print / Save PDF
              </button>
            </div>
          </div>
          <pre className="p-4 sm:p-6 text-xs text-slate-200 font-mono whitespace-pre-wrap leading-relaxed max-h-[620px] overflow-y-auto">
            {generatedNoticeText}
          </pre>
        </div>
      </div>
    </div>
  );
}
