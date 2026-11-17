"use client";

import React, { useMemo, useState } from "react";

interface ExportNoticePreset {
  id: string;
  label: string;
  badge: string;
  exporterName: string;
  exporterIEC: string;
  adBankName: string;
  adCode: string;
  exporterAddress: string;
  exporterEmail: string;
  buyerName: string;
  buyerOfficers: string;
  buyerCountry: string;
  buyerAddress: string;
  buyerContact: string;
  shipmentSchedule: string;
  incoterms: string;
  currency: string;
  principalAmount: number;
  creditDays: number;
  interestRate: number;
  cureDays: number;
  governingLaw: string;
  includeEdpmsAuditClause: boolean;
  includeEcgcReportingClause: boolean;
  includeCadDemurrageClause: boolean;
  includeArbitrationClause: boolean;
  advocateName: string;
  advocateEnrolment: string;
  advocateOffice: string;
  noticeRef: string;
  noticeDate: string;
}

const PRESETS: ExportNoticePreset[] = [
  {
    id: "open-account-edpms-usa-eu",
    label: "Open Account / DA Export Default (USA / EU Buyer · EDPMS Para C.20)",
    badge: "Open Account / DA",
    exporterName: "Apex Precision Forgings & Exports Pvt. Ltd.",
    exporterIEC: "0519048211",
    adBankName: "HDFC Bank Ltd. (Trade Finance & FEMA Desk, Mumbai)",
    adCode: "0240009-2800001",
    exporterAddress: "Plot C-42, MIDC Chakan Industrial Area, Pune, Maharashtra - 410501, India",
    exporterEmail: "treasury@apexforgings.in",
    buyerName: "Meridian Industrial Components LLC",
    buyerOfficers: "Mr. Jonathan Miller (VP Procurement) & Ms. Elena Vance (CFO)",
    buyerCountry: "United States of America (Delaware / Illinois)",
    buyerAddress: "4800 West Lake Avenue, Suite 310, Chicago, IL 60644, USA",
    buyerContact: "ap@meridiancomponents.com | +1-312-555-0194",
    shipmentSchedule:
      "1) Invoice No. EXP/26-27/089 dt. 12.02.2026 | Shipping Bill No. 8492014 dt. 13.02.2026 (Port: Nhava Sheva INNSA1) | B/L No. MAEU948201122 | FOB Nhava Sheva | USD 64,500.00\n2) Invoice No. EXP/26-27/114 dt. 28.02.2026 | Shipping Bill No. 8531902 dt. 01.03.2026 (Port: Nhava Sheva INNSA1) | B/L No. MAEU951004819 | FOB Nhava Sheva | USD 48,200.00",
    incoterms: "FOB Nhava Sheva (Incoterms 2020)",
    currency: "USD",
    principalAmount: 112700,
    creditDays: 60,
    interestRate: 12.0,
    cureDays: 14,
    governingLaw: "UN CISG (1980) & Indian Contract Act, 1872 (Seat: Mumbai / SIAC Arbitration)",
    includeEdpmsAuditClause: true,
    includeEcgcReportingClause: true,
    includeCadDemurrageClause: false,
    includeArbitrationClause: true,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/2194/2014",
    advocateOffice: "AMA Legal Solutions, New Delhi / Gurugram Chambers, India",
    noticeRef: "LR/EXP/2026/188-A",
    noticeDate: "17 November 2026",
  },
  {
    id: "cad-dp-port-abandonment",
    label: "Foreign Buyer Refusing CAD / D/P Documents at Port (Demurrage Risk)",
    badge: "CAD / DP Refusal",
    exporterName: "Deccan Agro & Spice Exports LLP",
    exporterIEC: "0914029184",
    adBankName: "State Bank of India (Overseas Branch, Kochi)",
    adCode: "0004412-6000018",
    exporterAddress: "18/412, Willingdon Island, Kochi, Kerala - 682003, India",
    exporterEmail: "exports@deccanagrospices.com",
    buyerName: "Al-Noor Foodstuff Trading LLC",
    buyerOfficers: "Mr. Tariq Al-Mansoor (Managing Director)",
    buyerCountry: "United Arab Emirates (Dubai)",
    buyerAddress: "Warehouse 19, Al Aweer Central Fruit & Vegetable Market, Dubai, UAE",
    buyerContact: "accounts@alnoorfoodstuff.ae | +971-4-555-0182",
    shipmentSchedule:
      "1) Invoice No. DAS/26-27/204 dt. 04.09.2026 | Shipping Bill No. 9104482 dt. 05.09.2026 (Port: Cochin INCOK1) | B/L No. MSCU88412091 | CIF Jebel Ali | USD 54,800.00 (Documents Presented on CAD / D/P Basis via Emirates NBD)",
    incoterms: "CIF Jebel Ali (Incoterms 2020) — Cash Against Documents (CAD)",
    currency: "USD",
    principalAmount: 54800,
    creditDays: 0,
    interestRate: 14.0,
    cureDays: 7,
    governingLaw: "UN CISG (Art. 53–64), ICC URC 522 & CPC s.44A Reciprocating Territory (India–UAE)",
    includeEdpmsAuditClause: true,
    includeEcgcReportingClause: true,
    includeCadDemurrageClause: true,
    includeArbitrationClause: true,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/2194/2014",
    advocateOffice: "AMA Legal Solutions, New Delhi Chambers, India",
    noticeRef: "LR/EXP/2026/188-B",
    noticeDate: "17 November 2026",
  },
  {
    id: "ecgc-policy-claim-prerequisite",
    label: "ECGC Insured Buyer Default (Form 203/205 & Clause C.24 EDPMS Closure)",
    badge: "ECGC Claim Ready",
    exporterName: "KnitCraft Global Apparel Pvt. Ltd.",
    exporterIEC: "3211008492",
    adBankName: "Axis Bank Ltd. (Corporate Trade Desk, Tirupur)",
    adCode: "6360192-6410002",
    exporterAddress: "45, Kangeyam Cross Road, Tirupur, Tamil Nadu - 641604, India",
    exporterEmail: "compliance@knitcraftglobal.in",
    buyerName: "Nordic Retail Group GmbH",
    buyerOfficers: "Herr Lukas Weber (Managing Director / Geschäftsführer)",
    buyerCountry: "Federal Republic of Germany",
    buyerAddress: "Speicherstadt Block D, 20457 Hamburg, Germany",
    buyerContact: "finance@nordicretail.de | +49-40-5550-1920",
    shipmentSchedule:
      "1) Invoice No. KGA/26-27/519 dt. 18.04.2026 | Shipping Bill No. 7749102 dt. 19.04.2026 (Port: Tuticorin INTUT1) | B/L No. HLCU44192018 | CIF Hamburg | EUR 78,400.00 (ECGC Buyer-Wise Limit Approved)",
    incoterms: "CIF Hamburg (Incoterms 2020) — 90 Days D/A",
    currency: "EUR",
    principalAmount: 78400,
    creditDays: 90,
    interestRate: 10.5,
    cureDays: 10,
    governingLaw: "UN CISG (1980) & ICC Rules / German-Indian Cross-Border Commercial Law",
    includeEdpmsAuditClause: true,
    includeEcgcReportingClause: true,
    includeCadDemurrageClause: false,
    includeArbitrationClause: true,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/2194/2014",
    advocateOffice: "AMA Legal Solutions, New Delhi Chambers, India",
    noticeRef: "LR/EXP/2026/188-C",
    noticeDate: "17 November 2026",
  },
];

export default function ExportDemandNoticeWorkspace() {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(PRESETS[0].id);
  const [form, setForm] = useState<ExportNoticePreset>(PRESETS[0]);
  const [copied, setCopied] = useState(false);

  const applyPreset = (preset: ExportNoticePreset) => {
    setSelectedPresetId(preset.id);
    setForm(preset);
    setCopied(false);
  };

  const updateField = <K extends keyof ExportNoticePreset>(key: K, value: ExportNoticePreset[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const formattedPrincipal = useMemo(() => {
    try {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: form.currency || "USD",
        maximumFractionDigits: 2,
      }).format(form.principalAmount || 0);
    } catch {
      return `${form.currency} ${(form.principalAmount || 0).toLocaleString("en-US")}`;
    }
  }, [form.principalAmount, form.currency]);

  const generatedNoticeText = useMemo(() => {
    const edpmsClause = form.includeEdpmsAuditClause
      ? `\n5. STATUTORY FEMA (1999) & RBI EDPMS COMPLIANCE INTIMATION:\n   My Client is an Indian exporter holding IEC No. ${form.exporterIEC}, banking with ${form.adBankName} (AD Code: ${form.adCode}). Under the Foreign Exchange Management Act, 1999 (Sections 7 & 8) and the RBI Master Direction on Export of Goods and Services, export proceeds must be realized and repatriated within nine (9) months from the date of export, failing which the Shipping Bills remain flagged in the RBI Export Data Processing and Monitoring System (EDPMS). This formal Demand Notice constitutes my Client's statutory bonafide recovery action recorded with its AD Category-I Bank for EDPMS regulatory audit and Para C.20 / Clause C.24 compliance.`
      : "";

    const ecgcClause = form.includeEcgcReportingClause
      ? `\n6. ECGC CREDIT-REGISTRY REPORTING & SUBROGATION NOTICE:\n   Take further notice that continued non-payment beyond the cure period herein will compel my Client to file formal Default Intimation (Form 203 / Form 205) with ECGC Limited (Export Credit Guarantee Corporation of India), triggering placement of your entity and its principals on international credit-insurer Buyer-Specific Approval Lists (BSAL) / default registries, and vesting subrogation recovery rights in ECGC and its international collection correspondents.`
      : "";

    const cadClause = form.includeCadDemurrageClause
      ? `\n7. CAD / D/P NON-RETIREMENT, PORT DEMURRAGE & MITIGATION RESALE:\n   Having contracted on Cash Against Documents / Documents Against Payment terms (${form.incoterms}), your refusal to retire the original negotiable Bill of Lading and shipping documents through the presenting bank constitutes a fundamental breach under Article 53 and Article 64 of the UN CISG. Every day of delay is accruing container detention, port demurrage, and cold/warehouse storage charges at the destination port, all of which are strictly to your account. If you fail to retire the documents within ${form.cureDays} days, my Client reserves the absolute right to exercise stoppage-in-transit / diversion or distress resale under Article 88 of the UN CISG and claim the full net shortfall plus demurrage.`
      : "";

    const arbitrationClause = form.includeArbitrationClause
      ? `\n8. GOVERNING LAW, ARBITRATION & CROSS-BORDER ENFORCEMENT:\n   This demand is issued without prejudice to my Client's right to initiate institutional arbitration / commercial recovery proceedings under ${form.governingLaw}, including summary enforcement of any resulting decree or arbitral award in ${form.buyerCountry} (under the New York Convention, 1958 and/or Section 44A CPC Reciprocating Territory treaties where applicable), at your sole risk as to legal costs, interest, and collection fees.`
      : "";

    return `CHAMBERS OF ${form.advocateName.toUpperCase()}, ADVOCATE
${form.advocateOffice}
Enrolment No.: ${form.advocateEnrolment}
------------------------------------------------------------------------
Ref. No.: ${form.noticeRef}
Date: ${form.noticeDate}

MODE OF SERVICE: Official Corporate Email + International Courier / Speed Post RPAD + WhatsApp PDF (Preserved under Section 63, Bharatiya Sakshya Adhiniyam, 2023)

WITHOUT PREJUDICE — FINAL INTERNATIONAL LEGAL DEMAND NOTICE

TO:
1. ${form.buyerName}
   Address: ${form.buyerAddress}
   Country: ${form.buyerCountry}
   Contact: ${form.buyerContact}

2. ${form.buyerOfficers}
   (Authorized Officers / Directors / Managing Members)

ON BEHALF OF OUR CLIENT (EXPORTER / CREDITOR):
${form.exporterName}
IEC No.: ${form.exporterIEC} | AD Category-I Bank: ${form.adBankName} (AD Code: ${form.adCode})
Registered Office: ${form.exporterAddress}
Official Email: ${form.exporterEmail}

SUBJECT: FINAL LEGAL DEMAND NOTICE FOR OVERDUE EXPORT PROCEEDS OF ${formattedPrincipal} PLUS CONTRACTUAL INTEREST — COMPLIANCE WITH UN CISG, FEMA EDPMS & ECGC DEFAULT PROTOCOLS

Dear Sir / Madam,

Under instructions from and on behalf of our above-named Client ("Exporter"), we hereby serve upon you this formal International Legal Demand Notice:

1. COMMERCIAL TRANSACTION & SHIPMENT SCHEDULE:
   Pursuant to your confirmed Purchase Orders and accepted Proforma Invoices, our Client manufactured, cleared through Indian Customs, and shipped the contracted goods strictly in accordance with ${form.incoterms}. The unpaid export bills are itemized below:

${form.shipmentSchedule}

2. DELIVERY, ACCEPTANCE & EXPIRY OF INSPECTION WINDOW:
   The goods were duly shipped under clean Bills of Lading / Air Waybills and customs-cleared Shipping Bills. No written notice of non-conformity or quality defect was raised within the contractual inspection window (or reasonable time under Articles 38 and 39 of the UN Convention on Contracts for the International Sale of Goods, 1980 ["UN CISG"]). Accordingly, your right to rely on any belated quality or commercial set-off stands extinguished.

3. UNPAID PRINCIPAL & CONTRACTUAL INTEREST:
   Despite expiry of the agreed ${form.creditDays}-day credit period and repeated commercial reminders, you have failed and neglected to remit the overdue export invoice value of ${formattedPrincipal}. Under Article 78 of the UN CISG and applicable contract law, you are liable to pay interest at ${form.interestRate}% per annum from the respective due dates until actual realization into our Client's AD Category-I Bank account in India.

4. FORMAL ${form.cureDays}-DAY DEMAND TO REMIT:
   You are hereby called upon to remit the entire overdue principal of ${formattedPrincipal} together with accrued interest via SWIFT wire transfer to our Client's designated AD Bank account within ${form.cureDays} (${form.cureDays}) calendar days from receipt of this Notice, quoting the respective Shipping Bill and Commercial Invoice numbers on the SWIFT MT103 field 70.${edpmsClause}${ecgcClause}${cadClause}${arbitrationClause}

9. PRESERVATION OF ELECTRONIC RECORDS:
   A copy of this Notice, along with the SWIFT/bank advice, Shipping Bills, Bills of Lading, and transmission logs, is being retained for submission to the AD Category-I Bank, ECGC Limited, and the competent Arbitral Tribunal / Commercial Court.

Sincerely,

${form.advocateName}, Advocate
Enrolment No.: ${form.advocateEnrolment}
Counsel for ${form.exporterName}`;
  }, [form, formattedPrincipal]);

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
      <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-red-400">
            Select Export Default Scenario Preset
          </span>
          <span className="text-[11px] text-slate-400">
            Populates Shipping Bill, IEC, AD-Code &amp; CISG / ECGC clauses
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {PRESETS.map((preset) => {
            const active = selectedPresetId === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => applyPreset(preset)}
                className={`text-left p-3 rounded-xl border transition-all ${
                  active
                    ? "bg-[#DC2626] border-[#DC2626] text-white shadow-md"
                    : "bg-slate-800/80 border-slate-700 text-slate-200 hover:border-slate-500"
                }`}
              >
                <span
                  className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-1.5 ${
                    active ? "bg-white/20 text-white" : "bg-slate-700 text-red-300"
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

      {/* Editor + Live Preview Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* Left Form Inputs */}
        <div className="xl:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
            <p className="text-sm font-extrabold text-slate-900">
              Customize Exporter, Buyer &amp; FEMA Fields
            </p>
            <button
              type="button"
              onClick={() => {
                const current = PRESETS.find((p) => p.id === selectedPresetId) || PRESETS[0];
                applyPreset(current);
              }}
              className="text-xs font-bold text-[#DC2626] hover:underline"
            >
              Reset Preset
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="sm:col-span-2">
              <label className="block font-bold text-slate-700 mb-1">Indian Exporter Name</label>
              <input
                type="text"
                value={form.exporterName}
                onChange={(e) => updateField("exporterName", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">IEC Number</label>
              <input
                type="text"
                value={form.exporterIEC}
                onChange={(e) => updateField("exporterIEC", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">AD Bank Code</label>
              <input
                type="text"
                value={form.adCode}
                onChange={(e) => updateField("adCode", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block font-bold text-slate-700 mb-1">AD Category-I Bank Name</label>
              <input
                type="text"
                value={form.adBankName}
                onChange={(e) => updateField("adBankName", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2 pt-2 border-t border-slate-200">
              <label className="block font-bold text-slate-700 mb-1">Foreign Buyer Entity Name</label>
              <input
                type="text"
                value={form.buyerName}
                onChange={(e) => updateField("buyerName", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Buyer Country</label>
              <input
                type="text"
                value={form.buyerCountry}
                onChange={(e) => updateField("buyerCountry", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Incoterms &amp; Terms</label>
              <input
                type="text"
                value={form.incoterms}
                onChange={(e) => updateField("incoterms", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Currency</label>
              <select
                value={form.currency}
                onChange={(e) => updateField("currency", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="AED">AED</option>
                <option value="SGD">SGD</option>
              </select>
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Principal Amount</label>
              <input
                type="number"
                value={form.principalAmount}
                onChange={(e) => updateField("principalAmount", Number(e.target.value) || 0)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Interest Rate (% p.a.)</label>
              <input
                type="number"
                step="0.5"
                value={form.interestRate}
                onChange={(e) => updateField("interestRate", Number(e.target.value) || 0)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Cure Period (Days)</label>
              <input
                type="number"
                value={form.cureDays}
                onChange={(e) => updateField("cureDays", Number(e.target.value) || 7)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-bold text-slate-700 mb-1">
                Shipping Bill, B/L &amp; Invoice Schedule
              </label>
              <textarea
                rows={4}
                value={form.shipmentSchedule}
                onChange={(e) => updateField("shipmentSchedule", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 font-mono text-[11px] focus:border-[#DC2626] focus:outline-none"
              />
            </div>

            {/* Statutory Clause Toggles */}
            <div className="sm:col-span-2 pt-2 border-t border-slate-200 space-y-2">
              <span className="block font-bold text-slate-800">Mandatory &amp; Optional Clauses</span>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.includeEdpmsAuditClause}
                  onChange={(e) => updateField("includeEdpmsAuditClause", e.target.checked)}
                  className="mt-0.5 accent-[#DC2626]"
                />
                <span className="text-slate-700">
                  <strong>RBI EDPMS Para C.20 / FEMA Clause</strong> (9-month realization &amp; AD-Bank audit trail)
                </span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.includeEcgcReportingClause}
                  onChange={(e) => updateField("includeEcgcReportingClause", e.target.checked)}
                  className="mt-0.5 accent-[#DC2626]"
                />
                <span className="text-slate-700">
                  <strong>ECGC Form 203/205 Default Clause</strong> (Credit-registry &amp; Clause C.24 subrogation)
                </span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.includeCadDemurrageClause}
                  onChange={(e) => updateField("includeCadDemurrageClause", e.target.checked)}
                  className="mt-0.5 accent-[#DC2626]"
                />
                <span className="text-slate-700">
                  <strong>CAD / D/P Port Demurrage &amp; Resale Clause</strong> (UN CISG Art. 88 mitigation)
                </span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.includeArbitrationClause}
                  onChange={(e) => updateField("includeArbitrationClause", e.target.checked)}
                  className="mt-0.5 accent-[#DC2626]"
                />
                <span className="text-slate-700">
                  <strong>UN CISG / Arbitration &amp; CPC s.44A Enforcement</strong>
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Live Preview */}
        <div className="xl:col-span-7 bg-white border border-slate-300 rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-slate-900 text-white px-4 sm:px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block">
                Live Advocate-Vetted Draft
              </span>
              <p className="text-xs sm:text-sm font-bold">
                {form.noticeRef} · {formattedPrincipal}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="px-3.5 py-1.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors"
              >
                {copied ? "Copied!" : "Copy Notice"}
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="px-3.5 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold transition-colors"
              >
                Print / PDF
              </button>
            </div>
          </div>
          <pre className="p-4 sm:p-6 text-xs sm:text-[13px] leading-relaxed text-slate-800 whitespace-pre-wrap font-mono bg-slate-50/60 max-h-[680px] overflow-y-auto">
            {generatedNoticeText}
          </pre>
        </div>
      </div>
    </div>
  );
}
