"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

interface EquipmentPreset {
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
  projectOwnerName: string;
  projectOwnerSiteAddress: string;
  projectOwnerEmail: string;
  policeStationName: string;
  policeStationEmail: string;
  agreementRef: string;
  challanAndSerialSchedule: string;
  hireArrears: number;
  dailyHireMeter: number;
  unpaidDaysRunning: number;
  replacementAssetValue: number;
  invoiceNumbers: string;
  creditDays: number;
  interestRate: number;
  enableGatePassRelease: boolean;
  enableBns316BaileeReturn: boolean;
  enablePoliceShoCc: boolean;
  enableMsmed43Bh: boolean;
  advocateName: string;
  advocateEnrolment: string;
  advocateOffice: string;
  noticeRef: string;
  noticeDate: string;
}

const PRESETS: EquipmentPreset[] = [
  {
    id: "crane-gate-pass-release",
    label: "Heavy Crane / Piling Rig Gate-Pass Blockade + Hire Arrears",
    badge: "Crane & Gate-Pass",
    creditorName: "Vajra Heavy Lift & Crane Rentals Private Limited",
    creditorGSTIN: "27AABCV4412K1Z3",
    creditorAddress: "Plot M-19, Taloja MIDC Phase II, Navi Mumbai, Maharashtra - 410208",
    creditorEmail: "recovery@vajracranes.in",
    creditorUdyam: "UDYAM-MH-33-0094120",
    debtorName: "Apex InfraBuild EPC Projects Private Limited",
    debtorSignatory: "Mr. Sandeep Deshmukh (Director - Plant & Machinery)",
    debtorGSTIN: "27AABCA9920L1Z1",
    debtorAddress: "7th Floor, Meridian Business Park, Vashi, Navi Mumbai - 400703",
    debtorEmail: "pm.accounts@apexinfrabuild.in",
    projectOwnerName: "Metro Corridor Package-4 Joint Venture (Site Principal / Employer)",
    projectOwnerSiteAddress: "Casting Yard Gate No. 2, Shilphata-Mahape Corridor, Thane - 400612",
    projectOwnerEmail: "site.admin@metrocorridorjv.in",
    policeStationName: "SHO, Shil-Daighar Police Station, Thane City",
    policeStationEmail: "sho.shildaighar-th@mahapolice.gov.in",
    agreementRef: "WO/APEX/CRANE/2026-088 (Monthly Hire & Demobilization Agreement)",
    challanAndSerialSchedule:
      "1 x 150MT Crawler Crane (Make: Zoomlion ZCC1500, Chassis/Serial: ZCC1500-24-8814, RC/Fitness Attached) | Delivery Challan DC/VHL/2026/0419 dated 12 Jan 2026",
    hireArrears: 2850000,
    dailyHireMeter: 35000,
    unpaidDaysRunning: 22,
    replacementAssetValue: 18500000,
    invoiceNumbers: "VHL/26-27/0312, VHL/26-27/0488 & VHL/26-27/0619",
    creditDays: 15,
    interestRate: 24.0,
    enableGatePassRelease: true,
    enableBns316BaileeReturn: true,
    enablePoliceShoCc: true,
    enableMsmed43Bh: true,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/IND20/CRANE/2026-904",
    noticeDate: "18 November 2026",
  },
  {
    id: "scaffolding-dg-bns-316",
    label: "Scaffolding, Shuttering & DG Set Unreturned Asset Return (BNS s.316)",
    badge: "Scaffolding & DG",
    creditorName: "Shakti Formwork & Power Hire LLP",
    creditorGSTIN: "07AABFS6618P1Z9",
    creditorAddress: "Khasra No. 412, Mundka Industrial Area, New Delhi - 110041",
    creditorEmail: "billing@shaktiformwork.in",
    creditorUdyam: "UDYAM-DL-11-0041928",
    debtorName: "Kaveri Civil Contractors & Builders Private Limited",
    debtorSignatory: "Mr. Harish Sharma (Managing Partner)",
    debtorGSTIN: "06AABCK7102M1Z4",
    debtorAddress: "SCO 48, Sector 44 Institutional Area, Gurugram, Haryana - 122003",
    debtorEmail: "procurement@kavericivil.co.in",
    projectOwnerName: "Skyline Commercial Towers Developers Pvt. Ltd. (Project Owner)",
    projectOwnerSiteAddress: "Sector 65 Golf Course Extension Road Site, Gurugram - 122018",
    projectOwnerEmail: "security.gate@skylinetowers.in",
    policeStationName: "SHO, Sector 65 Police Station, Gurugram",
    policeStationEmail: "sho.sec65.ggm@hry.nic.in",
    agreementRef: "HIRE/SFP/2025-441 (Scaffolding & 250kVA DG Set Rental Contract)",
    challanAndSerialSchedule:
      "4,200 Cuplock Verticals + 6,800 Ledgers + 1,900 MS Props + 1 x 250kVA Kirloskar Silent DG Set (Engine S/N: KOE-250-99182) | Challans DC/901 to DC/914",
    hireArrears: 1420000,
    dailyHireMeter: 14500,
    unpaidDaysRunning: 30,
    replacementAssetValue: 3840000,
    invoiceNumbers: "SFP/26-27/1102, SFP/26-27/1290 & SFP/26-27/1405",
    creditDays: 30,
    interestRate: 19.5,
    enableGatePassRelease: true,
    enableBns316BaileeReturn: true,
    enablePoliceShoCc: true,
    enableMsmed43Bh: true,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/IND20/SCAF/2026-517",
    noticeDate: "18 November 2026",
  },
  {
    id: "it-laptop-medical-daas",
    label: "IT Laptop / MacBook Fleet & Medical Equipment Unreturned DaaS Notice",
    badge: "IT / Medical DaaS",
    creditorName: "TechLease Enterprise Asset Solutions Private Limited",
    creditorGSTIN: "29AABCT5510Q1Z6",
    creditorAddress: "4th Floor, Indiranagar 100ft Road, Bengaluru, Karnataka - 560038",
    creditorEmail: "asset.legal@techlease.in",
    creditorUdyam: "UDYAM-KR-03-0102845",
    debtorName: "NovaScale AI Tech Services Private Limited",
    debtorSignatory: "Ms. Ananya Iyer (Chief Financial Officer)",
    debtorGSTIN: "29AABCN8841R1Z2",
    debtorAddress: "Tower B, Outer Ring Road, Bellandur, Bengaluru - 560103",
    debtorEmail: "finance@novascale.ai",
    projectOwnerName: "RMZ EcoSpace Facility Management / Co-Working Gate Desk",
    projectOwnerSiteAddress: "Tower B Access Desk, Bellandur, Bengaluru - 560103",
    projectOwnerEmail: "facilities@ecospace-ops.in",
    policeStationName: "SHO, Bellandur Police Station, Bengaluru City",
    policeStationEmail: "bellandurbcp@ksp.gov.in",
    agreementRef: "MSA/TL/NS/2025-219 (Device-as-a-Service Master Lease)",
    challanAndSerialSchedule:
      "65 x Apple MacBook Pro M3 (Asset Tags TL-MBP-401 to 465, MDM Enrolled) + 20 x Dell Precision Workstations | Handover Manifest HM/2025/882",
    hireArrears: 1180000,
    dailyHireMeter: 9800,
    unpaidDaysRunning: 18,
    replacementAssetValue: 9250000,
    invoiceNumbers: "TL/26-27/2204 & TL/26-27/2491",
    creditDays: 15,
    interestRate: 18.0,
    enableGatePassRelease: false,
    enableBns316BaileeReturn: true,
    enablePoliceShoCc: true,
    enableMsmed43Bh: true,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/IND20/DAAS/2026-283",
    noticeDate: "18 November 2026",
  },
];

function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(amount) ? amount : 0);
}

export default function EquipmentRentalNoticeWorkspace() {
  const [form, setForm] = useState<EquipmentPreset>(PRESETS[0]);
  const [copied, setCopied] = useState(false);

  const runningMeterTotal = useMemo(() => {
    const daily = Number(form.dailyHireMeter) || 0;
    const days = Number(form.unpaidDaysRunning) || 0;
    return daily * days;
  }, [form.dailyHireMeter, form.unpaidDaysRunning]);

  const totalFinancialDemand = useMemo(() => {
    return (Number(form.hireArrears) || 0) + runningMeterTotal;
  }, [form.hireArrears, runningMeterTotal]);

  const applyPreset = (presetId: string) => {
    const found = PRESETS.find((p) => p.id === presetId);
    if (found) {
      setForm({ ...found });
      setCopied(false);
    }
  };

  const updateField = <K extends keyof EquipmentPreset>(key: K, value: EquipmentPreset[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setCopied(false);
  };

  const generatedNoticeText = useMemo(() => {
    const lines: string[] = [
      "REGISTERED POST A.D. / SPEED POST / EMAIL / WHATSAPP",
      `Ref. No.: ${form.noticeRef}`,
      `Date: ${form.noticeDate}`,
      "",
      "3-IN-1 COMPOSITE LEGAL NOTICE: HIRE-ARREARS DEMAND, BNS SECTION 316 BAILEE RETURN & GATE-PASS RELEASE",
      "",
      "To,",
      `1. ${form.debtorName} (Lessee / Bailee)`,
      `   Kind Attn.: ${form.debtorSignatory} | GSTIN: ${form.debtorGSTIN}`,
      `   Address: ${form.debtorAddress} | Email: ${form.debtorEmail}`,
    ];

    if (form.enableGatePassRelease) {
      lines.push(
        "",
        `2. ${form.projectOwnerName} (Project Owner / Site Principal — Tortious Detinue Notice)`,
        `   Site Address: ${form.projectOwnerSiteAddress} | Email: ${form.projectOwnerEmail}`
      );
    }

    if (form.enablePoliceShoCc) {
      lines.push(
        "",
        `CC (For Statutory Record & Cognizable Intimation under BNS s.316):`,
        `   ${form.policeStationName} (Email: ${form.policeStationEmail})`
      );
    }

    lines.push(
      "",
      `Subject: Final Statutory Notice for Unpaid Equipment Hire Arrears (${formatINR(
        totalFinancialDemand
      )} including Running Daily Hire Meter), Immediate Return of Entrusted Assets Worth ${formatINR(
        form.replacementAssetValue
      )} under Contract Act s.160–161 & BNS s.316, and Gate-Pass Release.`,
      "",
      "Sir / Madam,",
      "",
      `Under instructions from and on behalf of my client, ${form.creditorName} (GSTIN: ${
        form.creditorGSTIN
      }${
        form.creditorUdyam ? ` | Udyam Reg.: ${form.creditorUdyam}` : ""
      }), having its registered office at ${
        form.creditorAddress
      } (hereinafter referred to as "my Client" / "Bailor"), I hereby serve upon you the following composite Legal Notice:`,
      "",
      `1. BAILMENT & SCHEDULE OF ENTRUSTED ASSETS (ANNEXURE-A): Pursuant to ${form.agreementRef}, my Client leased and entrusted the following identifiable movable equipment solely on a temporary hire basis: ${form.challanAndSerialSchedule}. Absolute legal title and ownership over the said equipment remain vested exclusively with my Client at all times.`,
      "",
      `2. HIRE-ARREARS & RUNNING DAILY HIRE METER: Despite uninterrupted deployment and usage at site, Noticee No. 1 has defaulted on Invoices ${form.invoiceNumbers}, leaving ${formatINR(
        form.hireArrears
      )} unpaid beyond the ${form.creditDays}-day credit period. Further, because the equipment remains unlawfully detained post-termination, a running daily hire meter of ${formatINR(
        form.dailyHireMeter
      )}/day (${form.unpaidDaysRunning} days = ${formatINR(
        runningMeterTotal
      )} accrued till date) continues to accumulate until physical return at my Client's yard. All Delivery Challans, GPS/telemetry logs, and emails are preserved under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023.`
    );

    let clauseNum = 3;

    if (form.enableBns316BaileeReturn) {
      lines.push(
        "",
        `${clauseNum}. TERMINATION OF BAILMENT (CONTRACT ACT s.160–161) & CRIMINAL BREACH OF TRUST (BNS s.316): Your failure to return the entrusted machinery/devices upon expiry and demand constitutes a breach of statutory bailee obligations under Sections 160 and 161 of the Indian Contract Act, 1872, rendering you strictly liable for any loss, deterioration, or third-party alienation. Further, dishonest retention, concealment, or refusal to allow demobilization constitutes Criminal Breach of Trust punishable under Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023. Failing physical handover within SEVEN (7) DAYS, you shall be liable for the full Lost-Asset Replacement Value of ${formatINR(
          form.replacementAssetValue
        )} in addition to criminal prosecution.`
      );
      clauseNum++;
    }

    if (form.enableGatePassRelease) {
      lines.push(
        "",
        `${clauseNum}. NOTICE TO PROJECT OWNER / SITE PRINCIPAL FOR GATE-PASS RELEASE (TORTIOUS DETINUE): Noticee No. 2 (${form.projectOwnerName}) is hereby placed on formal notice that the equipment scheduled in Annexure-A is third-party leased property owned by my Client—NOT the asset of Noticee No. 1. Any Gate-Pass blockade, security hold, or assertion of a purported contractor lien over third-party rented machinery for disputes between you and Noticee No. 1 is illegal and constitutes actionable Tortious Detinue and Conversion. You are called upon to issue an unconditional Demobilization Gate-Pass within 72 HOURS, failing which my Client shall seek an urgent Court Receiver / Injunction impleading Noticee No. 2 for daily detention damages.`
      );
      clauseNum++;
    }

    if (form.enablePoliceShoCc) {
      lines.push(
        "",
        `${clauseNum}. JURISDICTIONAL POLICE STATION CC INTIMATION (${form.policeStationName}): A copy of this notice along with Challan/Serial/Chassis proof is being endorsed to ${form.policeStationName} (${form.policeStationEmail}) to place on official record the unlawful detention/potential shifting of serialized high-value assets and to seek immediate police assistance/FIR registration under BNS s.316 if the assets are shifted or dismantled.`
      );
      clauseNum++;
    }

    if (form.enableMsmed43Bh) {
      lines.push(
        "",
        `${clauseNum}. MSMED ACT s.15–18 (3x RBI INTEREST) & INCOME TAX s.43B(h): My Client is a registered Micro/Small Enterprise (${form.creditorUdyam}). Delayed hire-charges attract compound interest at 3x RBI Bank Rate under Section 16 of the MSMED Act, 2006, and unpaid year-end balances face mandatory tax disallowance under Section 43B(h) of the Income Tax Act, 1961.`
      );
      clauseNum++;
    }

    lines.push(
      "",
      `${clauseNum}. FINAL DEMAND: You are hereby called upon to (a) remit ${formatINR(
        totalFinancialDemand
      )} with interest at ${form.interestRate}% p.a. (or 3x RBI rate, whichever is higher) within SEVEN (7) DAYS, and (b) issue the Gate-Pass and surrender physical possession of all Annexure-A assets, failing which my Client shall initiate Commercial Court / Arbitration s.9 Receiver proceedings and criminal prosecution under BNS s.316 entirely at your risk and cost.`,
      "",
      "Yours faithfully,",
      "",
      `Adv. ${form.advocateName} (${form.advocateEnrolment})`,
      form.advocateOffice,
      `On behalf of ${form.creditorName}`
    );

    return lines.join("\n");
  }, [form, runningMeterTotal, totalFinancialDemand]);

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
    const printWindow = window.open("", "_blank", "width=900,height=700");
    if (!printWindow) return;
    printWindow.document.write(
      `<html><head><title>${form.noticeRef}</title><style>body{font-family:Georgia,serif;padding:40px;line-height:1.6;white-space:pre-wrap;font-size:14px;color:#111;}</style></head><body>${generatedNoticeText
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")}</body></html>`
    );
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const handleDownloadDoc = () => {
    const htmlContent = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${form.noticeRef}</title></head><body style="font-family:Calibri,Arial,sans-serif;line-height:1.55;white-space:pre-wrap;">${generatedNoticeText
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")}</body></html>`;
    const blob = new Blob(["\ufeff", htmlContent], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${form.noticeRef.replace(/[^a-zA-Z0-9-_]/g, "_")}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header + Presets */}
      <div className="bg-slate-900 text-white p-5 sm:p-6 border-b border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 block mb-1">
              Interactive 3-in-1 Notice &amp; Police CC Workspace
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-white">
              Customize Equipment Hire-Arrears, BNS s.316 &amp; Gate-Pass Notice
            </h2>
          </div>
          <div className="bg-white/10 border border-white/15 rounded-xl px-4 py-2 text-right">
            <span className="block text-[10px] uppercase tracking-wider text-slate-300">
              Total Demand + Replacement Exposure
            </span>
            <span className="text-base sm:text-lg font-black text-emerald-400">
              {formatINR(totalFinancialDemand)} + {formatINR(form.replacementAssetValue)} Asset
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {PRESETS.map((preset) => {
            const active = form.id === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => applyPreset(preset.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  active
                    ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                    : "bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700"
                }`}
              >
                {preset.badge}
              </button>
            );
          })}
        </div>
      </div>

      {/* Form + Live Preview Split */}
      <div className="grid grid-cols-1 xl:grid-cols-12 divide-y xl:divide-y-0 xl:divide-x divide-slate-200">
        {/* Left: Editable Inputs */}
        <div className="xl:col-span-5 p-5 sm:p-6 space-y-4 bg-slate-50/70">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="block">
              <span className="text-[11px] font-bold text-slate-700 uppercase">Lessor / Owner Name</span>
              <input
                type="text"
                value={form.creditorName}
                onChange={(e) => updateField("creditorName", e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-[11px] font-bold text-slate-700 uppercase">Lessee / Contractor</span>
              <input
                type="text"
                value={form.debtorName}
                onChange={(e) => updateField("debtorName", e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="block">
              <span className="text-[11px] font-bold text-slate-700 uppercase">
                Project Owner / Site Principal
              </span>
              <input
                type="text"
                value={form.projectOwnerName}
                onChange={(e) => updateField("projectOwnerName", e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-[11px] font-bold text-slate-700 uppercase">
                Project Owner Email
              </span>
              <input
                type="email"
                value={form.projectOwnerEmail}
                onChange={(e) => updateField("projectOwnerEmail", e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </label>
          </div>

          {/* Police Station CC Fields */}
          <div className="p-3 rounded-xl bg-red-50/70 border border-red-200 space-y-2.5">
            <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626]">
              Jurisdictional Police Station CC (Multi-Recipient Dispatch)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <label className="block">
                <span className="text-[11px] font-semibold text-slate-700">policeStationName</span>
                <input
                  type="text"
                  value={form.policeStationName}
                  onChange={(e) => updateField("policeStationName", e.target.value)}
                  className="mt-1 w-full rounded-lg border border-red-200 bg-white px-2.5 py-1.5 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="text-[11px] font-semibold text-slate-700">policeStationEmail</span>
                <input
                  type="email"
                  value={form.policeStationEmail}
                  onChange={(e) => updateField("policeStationEmail", e.target.value)}
                  className="mt-1 w-full rounded-lg border border-red-200 bg-white px-2.5 py-1.5 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </label>
            </div>
          </div>

          <label className="block">
            <span className="text-[11px] font-bold text-slate-700 uppercase">
              Challan / Serial / Chassis Schedule
            </span>
            <textarea
              rows={2}
              value={form.challanAndSerialSchedule}
              onChange={(e) => updateField("challanAndSerialSchedule", e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
            />
          </label>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <label className="block">
              <span className="text-[11px] font-bold text-slate-700 uppercase">Hire Arrears (₹)</span>
              <input
                type="number"
                value={form.hireArrears}
                onChange={(e) => updateField("hireArrears", Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-[11px] font-bold text-slate-700 uppercase">Daily Meter (₹)</span>
              <input
                type="number"
                value={form.dailyHireMeter}
                onChange={(e) => updateField("dailyHireMeter", Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-[11px] font-bold text-slate-700 uppercase">Overdue Days</span>
              <input
                type="number"
                value={form.unpaidDaysRunning}
                onChange={(e) => updateField("unpaidDaysRunning", Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-[11px] font-bold text-slate-700 uppercase">Asset Value (₹)</span>
              <input
                type="number"
                value={form.replacementAssetValue}
                onChange={(e) => updateField("replacementAssetValue", Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </label>
          </div>

          {/* Statutory Clause Toggles */}
          <div className="space-y-2 pt-1">
            <span className="block text-[11px] font-bold text-slate-700 uppercase">
              Active Statutory Modules
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <label className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.enableBns316BaileeReturn}
                  onChange={(e) => updateField("enableBns316BaileeReturn", e.target.checked)}
                  className="accent-[#DC2626]"
                />
                <span className="font-semibold text-slate-800">BNS s.316 + s.160–161</span>
              </label>
              <label className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.enableGatePassRelease}
                  onChange={(e) => updateField("enableGatePassRelease", e.target.checked)}
                  className="accent-[#DC2626]"
                />
                <span className="font-semibold text-slate-800">Gate-Pass Detinue Notice</span>
              </label>
              <label className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.enablePoliceShoCc}
                  onChange={(e) => updateField("enablePoliceShoCc", e.target.checked)}
                  className="accent-[#DC2626]"
                />
                <span className="font-semibold text-slate-800">Police Station SHO CC</span>
              </label>
              <label className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.enableMsmed43Bh}
                  onChange={(e) => updateField("enableMsmed43Bh", e.target.checked)}
                  className="accent-[#DC2626]"
                />
                <span className="font-semibold text-slate-800">MSMED 3x + s.43B(h)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right: Live Statutory Notice Preview */}
        <div className="xl:col-span-7 p-5 sm:p-6 flex flex-col">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Live Draft Preview ({form.noticeRef})
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {copied ? "Copied!" : "Copy Notice"}
              </button>
              <button
                type="button"
                onClick={handleDownloadDoc}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-colors cursor-pointer"
              >
                Download .doc
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300 transition-colors cursor-pointer"
              >
                Print / PDF
              </button>
            </div>
          </div>

          <pre className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 text-[11px] sm:text-xs font-mono text-slate-800 whitespace-pre-wrap leading-relaxed max-h-[520px] overflow-y-auto">
            {generatedNoticeText}
          </pre>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
            <span>
              Want an advocate to serve this on letterhead + Police SHO CC?
            </span>
            <Link href="/user/new-recovery" className="text-[#DC2626] font-bold hover:underline">
              Launch Multi-Recipient Dispatch &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
