"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

interface SolarPreset {
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
  contractRef: string;
  plantCapacityAndSite: string;
  commissioningOrAtDate: string;
  hardwareSerialSummary: string;
  principalArrears: number;
  buyoutOrRetentionClaim: number;
  invoiceNumbers: string;
  invoiceDateRange: string;
  creditDays: number;
  interestRate: number;
  enableInverterCurtailment: boolean;
  enableRescoBuyoutAndSec9: boolean;
  enableDeemedCommissioning: boolean;
  enableMsmed43Bh: boolean;
  advocateName: string;
  advocateEnrolment: string;
  advocateOffice: string;
  noticeRef: string;
  noticeDate: string;
}

const PRESETS: SolarPreset[] = [
  {
    id: "resco-ppa-buyout-curtailment",
    label: "OPEX / RESCO Solar PPA Default (Inverter Curtailment + s.74 Buyout + s.9 Roof Access)",
    badge: "RESCO PPA",
    creditorName: "SuryaGrid CleanTech SPV Private Limited",
    creditorGSTIN: "27AABCS8821L1Z4",
    creditorAddress: "12th Floor, One BKC, Bandra Kurla Complex, Mumbai, Maharashtra - 400051",
    creditorEmail: "legal@suryagrid.in",
    creditorUdyam: "UDYAM-MH-19-0118422",
    debtorName: "Apex Precision Forgings Private Limited",
    debtorSignatory: "Mr. Vikramaditya Rao (Managing Director)",
    debtorGSTIN: "27AABCA7719D1Z8",
    debtorAddress: "Plot E-42, MIDC Chakan Phase II, Pune, Maharashtra - 410501",
    debtorEmail: "finance@apexforgings.co.in",
    contractRef: "PPA/SG/APEX/2024-019 (15-Year OPEX/RESCO Solar PPA)",
    plantCapacityAndSite: "1.2 MWp Rooftop Solar PV Plant — MIDC Chakan Shed A & B",
    commissioningOrAtDate: "18 March 2024 (COD & CEIG Approval No. CEIG/PUN/2024/1192)",
    hardwareSerialSummary:
      "2,180 x 550Wp Mono-PERC Modules + 12 x 100kW String Inverters (SCADA Telemetry ID: SG-CHK-1200)",
    principalArrears: 1840000,
    buyoutOrRetentionClaim: 34500000,
    invoiceNumbers: "SG/26-27/0412, SG/26-27/0589 & SG/26-27/0744",
    invoiceDateRange: "01 June 2026 to 30 September 2026",
    creditDays: 15,
    interestRate: 18.0,
    enableInverterCurtailment: true,
    enableRescoBuyoutAndSec9: true,
    enableDeemedCommissioning: false,
    enableMsmed43Bh: false,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/SOLAR/2026/RESCO-409",
    noticeDate: "18 November 2026",
  },
  {
    id: "capex-epc-deemed-commissioning",
    label: "CapEx C&I Solar EPC Final 20% Balance (Deemed Commissioning + IEC 61724 PR + MSME)",
    badge: "CapEx EPC",
    creditorName: "HeliosTurnkey Solar Engineering Private Limited",
    creditorGSTIN: "24AABCH5501R1Z2",
    creditorAddress: "405, Titanium City Center, Satellite, Ahmedabad, Gujarat - 380015",
    creditorEmail: "billing@heliosturnkey.in",
    creditorUdyam: "UDYAM-GJ-01-0059214",
    debtorName: "Navrang Agro & Cotton Mills Limited",
    debtorSignatory: "Mr. Rajesh Patel (Director - Operations)",
    debtorGSTIN: "24AABCN3318P1Z5",
    debtorAddress: "Survey No. 214, GIDC Sanand, Ahmedabad, Gujarat - 382110",
    debtorEmail: "accounts@navrangmills.com",
    contractRef: "PO/NML/EPC/2025-884 (Supply PO + I&C Service Order)",
    plantCapacityAndSite: "800 kWp Zero-Export Captive Rooftop Solar Plant — GIDC Sanand",
    commissioningOrAtDate: "04 May 2026 (CEIG Charging + Zero-Export Synchronization)",
    hardwareSerialSummary:
      "1,454 x 550Wp Bifacial Modules (Supply PO) + 8 x 100kW Inverters + WMS Pyranometer",
    principalArrears: 2650000,
    buyoutOrRetentionClaim: 950000,
    invoiceNumbers: "HTS/26-27/0198 (Supply) & HTS/26-27/0241 (Commissioning 20%)",
    invoiceDateRange: "10 May 2026 to 15 August 2026",
    creditDays: 45,
    interestRate: 19.5,
    enableInverterCurtailment: false,
    enableRescoBuyoutAndSec9: false,
    enableDeemedCommissioning: true,
    enableMsmed43Bh: true,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/SOLAR/2026/EPC-712",
    noticeDate: "18 November 2026",
  },
  {
    id: "ev-cpo-charger-repossession",
    label: "EV Charging CPO Fleet Billing Default & 120kW DC Charger Repossession (s.9 + BNS s.316)",
    badge: "EV CPO",
    creditorName: "VoltPulse EV Mobility Networks Private Limited",
    creditorGSTIN: "29AABCV6612M1Z7",
    creditorAddress: "3rd Floor, Koramangala 4th Block, Bengaluru, Karnataka - 560034",
    creditorEmail: "collections@voltpulse.in",
    creditorUdyam: "UDYAM-KR-03-0082190",
    debtorName: "MetroCity EV Fleet & Logistics Hub LLP",
    debtorSignatory: "Mr. Karthik Nair (Designated Partner)",
    debtorGSTIN: "29AABFM8820Q1Z1",
    debtorAddress: "Plot 18, Peenya Industrial Area, Bengaluru, Karnataka - 560058",
    debtorEmail: "fleet.finance@metrocityev.in",
    contractRef: "CPO/VP/MCF/2025-114 (Fleet Charging & Hub Hosting Agreement)",
    plantCapacityAndSite: "2 x 120kW Dual-Gun DC Fast Chargers — Peenya Fleet Hub",
    commissioningOrAtDate: "11 January 2026 (OCPP CMS ID: VP-BLR-PEENYA-01 & 02)",
    hardwareSerialSummary:
      "2 x 120kW Liquid-Cooled DC Fast Chargers (S/N: DC120-25-9914 & DC120-25-9915)",
    principalArrears: 1420000,
    buyoutOrRetentionClaim: 1850000,
    invoiceNumbers: "VP/26-27/0901, VP/26-27/1044 & VP/26-27/1188",
    invoiceDateRange: "01 July 2026 to 30 September 2026",
    creditDays: 15,
    interestRate: 19.5,
    enableInverterCurtailment: true,
    enableRescoBuyoutAndSec9: true,
    enableDeemedCommissioning: false,
    enableMsmed43Bh: true,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/EV/2026/CPO-305",
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

export default function SolarNoticeWorkspace() {
  const [form, setForm] = useState<SolarPreset>(PRESETS[0]);
  const [copied, setCopied] = useState(false);

  const totalClaim = useMemo(() => {
    const base = Number(form.principalArrears) || 0;
    const secondary = Number(form.buyoutOrRetentionClaim) || 0;
    return base + secondary;
  }, [form.principalArrears, form.buyoutOrRetentionClaim]);

  const applyPreset = (presetId: string) => {
    const found = PRESETS.find((p) => p.id === presetId);
    if (found) {
      setForm({ ...found });
      setCopied(false);
    }
  };

  const updateField = <K extends keyof SolarPreset>(key: K, value: SolarPreset[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setCopied(false);
  };

  const generatedNoticeText = useMemo(() => {
    const lines: string[] = [
      "REGISTERED POST A.D. / SPEED POST / EMAIL / WHATSAPP",
      `Ref. No.: ${form.noticeRef}`,
      `Date: ${form.noticeDate}`,
      "",
      "LEGAL NOTICE OF DEMAND, STATUTORY CURTAILMENT & ENFORCEMENT",
      "",
      "To,",
      form.debtorName,
      `Kind Attn.: ${form.debtorSignatory}`,
      `GSTIN: ${form.debtorGSTIN}`,
      form.debtorAddress,
      `Email: ${form.debtorEmail}`,
      "",
      `Subject: Final Statutory Notice for Overdue Energy / EPC Invoices (${formatINR(form.principalArrears)}), ${
        form.enableRescoBuyoutAndSec9
          ? "Termination Buyout / Asset Repossession"
          : "Deemed Commissioning Balance Release"
      } (${formatINR(form.buyoutOrRetentionClaim)}) & Statutory Interest under ${
        form.enableMsmed43Bh ? "MSMED Act s.15–18 / s.43B(h)" : "Commercial Courts & Arbitration Act"
      }.`,
      "",
      "Sir / Madam,",
      "",
      `Under instructions from and on behalf of my client, ${form.creditorName} (GSTIN: ${form.creditorGSTIN}${
        form.creditorUdyam ? ` | Udyam Reg.: ${form.creditorUdyam}` : ""
      }), having its registered office at ${form.creditorAddress} (hereinafter referred to as "my Client"), I do hereby serve upon you the following Legal Notice:`,
      "",
      `1. EXECUTED CONTRACT & COMMISSIONED ASSET: That pursuant to ${form.contractRef}, my Client engineered, supplied, and commissioned ${form.plantCapacityAndSite} on ${form.commissioningOrAtDate}. The deployed plant/hardware comprises: ${form.hardwareSerialSummary}.`,
      "",
      `2. ADMITTED UTILIZATION & DEFAULT IN PAYMENT: That despite uninterrupted generation/service delivery and repeated reminders, you have failed and neglected to clear Invoices ${form.invoiceNumbers} (covering ${form.invoiceDateRange}) totaling ${formatINR(form.principalArrears)}, which remain overdue beyond the agreed ${form.creditDays}-day credit period. All SCADA / OCPP / WMS telemetry logs are preserved and certified under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023.`,
    ];

    let clauseNum = 3;

    if (form.enableInverterCurtailment) {
      lines.push(
        "",
        `${clauseNum}. NOTICE OF REMOTE CURTAILMENT / CMS SUSPENSION: Take formal notice that if the overdue principal of ${formatINR(form.principalArrears)} is not remitted within SEVEN (7) DAYS of receipt hereof, my Client shall exercise its contractual right to place the inverters / charging dispensers into remote standby/curtailment mode via SCADA/OCPP without any liability for your captive power or fleet loss.`
      );
      clauseNum++;
    }

    if (form.enableRescoBuyoutAndSec9) {
      lines.push(
        "",
        `${clauseNum}. TERMINATION BUYOUT (CONTRACT ACT s.74) & ARBITRATION s.9 / BNS s.316 ASSET PROTECTION: Ownership of the serialized PV modules, inverters, and/or DC fast chargers vests exclusively with my Client. Any refusal to grant unhindered site access or unlawful detention of my Client's hardware constitutes Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023. Failing cure within 15 days, the contract shall stand terminated, accelerating the agreed Termination Buyout / Asset Value of ${formatINR(form.buyoutOrRetentionClaim)}, and my Client shall move the Commercial Court under Section 9 of the Arbitration and Conciliation Act, 1996 for an interim injunction and Receiver-supervised inspection/repossession.`
      );
      clauseNum++;
    }

    if (form.enableDeemedCommissioning) {
      lines.push(
        "",
        `${clauseNum}. DEEMED COMMISSIONING (CONTRACT ACT s.53/54) & IEC 61724 PR NORMALIZATION: Your withholding of the final commissioning/retention tranche of ${formatINR(form.buyoutOrRetentionClaim)} on the pretext of DISCOM bi-directional meter stockouts or unwashed-panel PR drops is illegal. Having synchronized the plant in zero-export mode on your captive load, Deemed Commissioning stands triggered under Sections 53, 54 & 70 of the Indian Contract Act, 1872, and all Performance Ratio calculations stand normalized under IEC 61724-1.`
      );
      clauseNum++;
    }

    if (form.enableMsmed43Bh) {
      lines.push(
        "",
        `${clauseNum}. MSMED ACT s.15–18 (3x RBI INTEREST) & INCOME TAX s.43B(h) INTIMATION: My Client is a registered Micro/Small Enterprise (${form.creditorUdyam}). Under Section 16 of the MSMED Act, 2006, delayed payments beyond 45 days attract mandatory compound interest at three times (3x) the RBI Bank Rate. Further, under Section 43B(h) of the Income Tax Act, 1961, any unpaid dues owed to my Client at fiscal year-end shall be disallowed as a tax-deductible business expenditure in your statutory tax audit.`
      );
      clauseNum++;
    }

    lines.push(
      "",
      `${clauseNum}. FINAL DEMAND: You are hereby called upon to remit the total quantified sum of ${formatINR(totalClaim)} together with interest at ${form.interestRate}% p.a. (or 3x RBI Bank Rate under MSMED Act, whichever is higher) within FIFTEEN (15) DAYS of receipt of this Notice to my Client's designated bank account, failing which my Client shall initiate MSEFC Samadhaan / Section 9 Arbitration / Commercial Court proceedings entirely at your risk, cost, and consequences.`,
      "",
      "Copy retained for record and further legal action.",
      "",
      "Yours faithfully,",
      "",
      `Adv. ${form.advocateName}`,
      `Enrolment No.: ${form.advocateEnrolment}`,
      form.advocateOffice
    );

    return lines.join("\n");
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
    const w = window.open("", "_blank", "width=900,height=700");
    if (!w) return;
    w.document.write(
      `<html><head><title>${form.noticeRef}</title><style>body{font-family:Georgia,serif;padding:40px;line-height:1.6;white-space:pre-wrap;font-size:13px;color:#111;}</style></head><body>${generatedNoticeText
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")}</body></html>`
    );
    w.document.close();
    w.focus();
    w.print();
  };

  return (
    <div className="w-full max-w-full space-y-6">
      {/* Preset Selector */}
      <div className="bg-slate-100 border border-slate-200 rounded-2xl p-4 sm:p-5">
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3">
          Select Clean-Energy Notice Preset
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {PRESETS.map((preset) => {
            const isActive = form.id === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => applyPreset(preset.id)}
                className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                    : "bg-white text-slate-800 border-slate-200 hover:border-slate-300"
                }`}
              >
                <span
                  className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-1.5 ${
                    isActive ? "bg-white/20 text-white" : "bg-red-50 text-[#DC2626]"
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
        <div className="xl:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm">
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
            Customize Solar / EV Notice Variables
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">Creditor Company</label>
              <input
                type="text"
                value={form.creditorName}
                onChange={(e) => updateField("creditorName", e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#DC2626]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">Udyam Reg. (Optional)</label>
              <input
                type="text"
                value={form.creditorUdyam}
                onChange={(e) => updateField("creditorUdyam", e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#DC2626]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">Debtor / Off-Taker</label>
              <input
                type="text"
                value={form.debtorName}
                onChange={(e) => updateField("debtorName", e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#DC2626]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">Contract / PPA Ref.</label>
              <input
                type="text"
                value={form.contractRef}
                onChange={(e) => updateField("contractRef", e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#DC2626]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1">Plant Capacity &amp; Site</label>
            <input
              type="text"
              value={form.plantCapacityAndSite}
              onChange={(e) => updateField("plantCapacityAndSite", e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#DC2626]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">Overdue Invoices (INR)</label>
              <input
                type="number"
                value={form.principalArrears}
                onChange={(e) => updateField("principalArrears", Number(e.target.value))}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#DC2626]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">Buyout / Retention (INR)</label>
              <input
                type="number"
                value={form.buyoutOrRetentionClaim}
                onChange={(e) => updateField("buyoutOrRetentionClaim", Number(e.target.value))}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#DC2626]"
              />
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-100">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Toggle Statutory Enforcement Clauses
            </p>
            <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={form.enableInverterCurtailment}
                onChange={(e) => updateField("enableInverterCurtailment", e.target.checked)}
                className="mt-0.5 accent-[#DC2626]"
              />
              <span>7-Day Remote Inverter / OCPP Charger Curtailment Warning</span>
            </label>
            <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={form.enableRescoBuyoutAndSec9}
                onChange={(e) => updateField("enableRescoBuyoutAndSec9", e.target.checked)}
                className="mt-0.5 accent-[#DC2626]"
              />
              <span>RESCO Termination Buyout (s.74) + Arbitration s.9 &amp; BNS s.316 Roof/Bay Access</span>
            </label>
            <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={form.enableDeemedCommissioning}
                onChange={(e) => updateField("enableDeemedCommissioning", e.target.checked)}
                className="mt-0.5 accent-[#DC2626]"
              />
              <span>Contract Act s.53/54 Deemed Commissioning &amp; IEC 61724 PR Normalization</span>
            </label>
            <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={form.enableMsmed43Bh}
                onChange={(e) => updateField("enableMsmed43Bh", e.target.checked)}
                className="mt-0.5 accent-[#DC2626]"
              />
              <span>MSMED Act s.15–18 (3x RBI Interest) &amp; Income Tax s.43B(h) Intimation</span>
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

        {/* Live Notice Preview */}
        <div className="xl:col-span-7 bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-5 py-3.5 bg-slate-950 border-b border-slate-800">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block">
                Fact-Verified Clean-Energy Notice Draft
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
