"use client";

import React, { useMemo, useState } from "react";

interface HospitalityNoticePreset {
  id: string;
  label: string;
  badge: string;
  noticeTitle: string;
  creditorName: string;
  creditorType: string;
  creditorGstin: string;
  creditorUdyam: string;
  creditorAddress: string;
  creditorEmail: string;
  debtorName: string;
  debtorOfficers: string;
  debtorGstin: string;
  debtorAddress: string;
  debtorContact: string;
  ledgerSchedule: string;
  principalAmount: number;
  creditDays: number;
  interestRate: number;
  cureDays: number;
  includeOrder37Clause: boolean;
  includeGstr2bEstoppel: boolean;
  includeMsmedClause: boolean;
  includeSection138Clause: boolean;
  chequeDetails: string;
  advocateName: string;
  advocateEnrolment: string;
  advocateOffice: string;
  noticeRef: string;
  noticeDate: string;
}

const PRESETS: HospitalityNoticePreset[] = [
  {
    id: "hotel-btc-city-ledger",
    label: "1. Hotel BTC City-Ledger Demand Notice (Guest Folio + GRC + GSTR-2B)",
    badge: "Hotel BTC",
    noticeTitle: "FINAL LEGAL DEMAND NOTICE — OVERDUE HOTEL 'BILL-TO-COMPANY' (BTC) CITY-LEDGER DUES",
    creditorName: "Aurelia Grand Business Hotel & Convention Centre (Unit of Aurelia Hospitality Pvt. Ltd.)",
    creditorType: "5-Star Business Hotel & Convention Operator",
    creditorGstin: "27AAACA8492K1Z4",
    creditorUdyam: "UDYAM-MH-19-0184920",
    creditorAddress: "Plot 14, Bandra-Kurla Commercial Complex, Mumbai, Maharashtra - 400051",
    creditorEmail: "creditcontrol@aureliagrand.in",
    debtorName: "Vanguard Infra-Projects & EPC Ltd.",
    debtorOfficers: "Mr. Rajiv Malhotra (CFO) & Ms. Neha Kulkarni (Head — Corporate Admin & Travel)",
    debtorGstin: "27AABCV4910M1Z9",
    debtorAddress: "Level 9, Solitaire Corporate Park, Andheri East, Mumbai - 400093",
    debtorContact: "ap.desk@vanguardepc.in | +91-22-4000-8811",
    ledgerSchedule:
      "1) Folio No. AGH/26/4418 | Guest: Mr. S. Deshmukh | Check-in/Out: 04.07.2026 – 19.07.2026 (15 Nights) | BTC Auth Email dt. 02.07.2026 | Tax Inv. AGH/26-27/1104 | ₹4,85,000.00\n2) Folio No. AGH/26/4592 | Guest: Mr. A. Krishnan + 6 EPC Engineers | Check-in/Out: 22.07.2026 – 12.08.2026 | Signed GRC + BTC Voucher #8812 | Tax Inv. AGH/26-27/1289 | ₹13,55,000.00",
    principalAmount: 1840000,
    creditDays: 30,
    interestRate: 18.0,
    cureDays: 15,
    includeOrder37Clause: true,
    includeGstr2bEstoppel: true,
    includeMsmedClause: true,
    includeSection138Clause: false,
    chequeDetails: "N/A (Open 30-Day City-Ledger BTC Account)",
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/2194/2014",
    advocateOffice: "AMA Legal Solutions, New Delhi / Mumbai Chambers",
    noticeRef: "LR/IND16/BTC/2026/199-A",
    noticeDate: "18 November 2026",
  },
  {
    id: "iata-tmc-flown-pnr",
    label: "2. IATA Travel Agent (TMC) Flown-PNR & 13-Digit Ticket Recovery Notice",
    badge: "IATA / TMC",
    noticeTitle: "FINAL LEGAL DEMAND NOTICE — OVERDUE IATA CORPORATE FLIGHT CREDIT & FLOWN-PNR LEDGER",
    creditorName: "SkyBridge Corporate Travel & Tours Pvt. Ltd. (IATA Accredited Agent)",
    creditorType: "IATA-Accredited Travel Management Company (TMC)",
    creditorGstin: "07AABCS9201L1Z2",
    creditorUdyam: "UDYAM-DL-08-0049123",
    creditorAddress: "Suite 604, Barakhamba Road, Connaught Place, New Delhi - 110001",
    creditorEmail: "bsp.collections@skybridgetmc.in",
    debtorName: "Crestline Global Consulting Pvt. Ltd.",
    debtorOfficers: "Mr. Vikramaditya Rao (Managing Director) & Mr. Sanjay Verma (Finance Controller)",
    debtorGstin: "07AAACC7129D1Z8",
    debtorAddress: "Tower B, DLF Cyber Hub, Phase II, Gurugram, Haryana - 122002",
    debtorContact: "finance@crestlineconsulting.in | +91-124-455-9020",
    ledgerSchedule:
      "1) GDS PNR: 6X9KLM | 13-Digit Ticket No.: 098-4419204812 | Pax: Mr. R. Nair | Sector: DEL-LHR-DEL (Business) | Travel Date: 11.08.2026 | Inv. SB/26/8841 | ₹4,12,000.00\n2) GDS PNR: 8T2QWE | 13-Digit Ticket No.: 228-9910482190 | Pax: Ms. P. Iyer + 4 Consultants | Sector: BOM-SIN-BOM | Travel Date: 19.08.2026 | Inv. SB/26/8915 | ₹11,48,000.00\n3) LCC / Ancillary Sub-Ledger (IndiGo 6E / Vistara Domestic Bulk) | 18 Flown PNRs (01.08.2026 – 31.08.2026) | Inv. SB/26/9002 | ₹19,40,000.00",
    principalAmount: 3500000,
    creditDays: 15,
    interestRate: 18.0,
    cureDays: 10,
    includeOrder37Clause: true,
    includeGstr2bEstoppel: true,
    includeMsmedClause: true,
    includeSection138Clause: false,
    chequeDetails: "N/A (Corporate Credit Agreement + GDS BSP Auto-Debit Settlement)",
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/2194/2014",
    advocateOffice: "AMA Legal Solutions, New Delhi Chambers",
    noticeRef: "LR/IND16/IATA/2026/199-B",
    noticeDate: "18 November 2026",
  },
  {
    id: "banquet-wedding-cheque-bounce",
    label: "3. Banquet / Wedding Post-Event Balance & Stopped Cheque (NI Act s.138)",
    badge: "Banquet s.138",
    noticeTitle: "STATUTORY DEMAND NOTICE U/S 138 NI ACT, 1881 & ORDER XXXVII CPC — DISHONOURED BANQUET CHEQUE",
    creditorName: "Royal Heritage Palace Resort & Banquets LLP",
    creditorType: "Destination Wedding Resort & Convention Venue",
    creditorGstin: "08AABFR3104N1Z6",
    creditorUdyam: "UDYAM-RJ-17-0092811",
    creditorAddress: "Amer Road Heritage Corridor, Jaipur, Rajasthan - 302002",
    creditorEmail: "events.legal@royalheritagejaipur.in",
    debtorName: "Mr. Harishankar Bansal (Host & Signatory, Bansal Family Wedding)",
    debtorOfficers: "Mr. Harishankar Bansal (Drawer of Cheque) & Mrs. Sunita Bansal (Co-Signatory)",
    debtorGstin: "Unregistered / Individual Host (B2C / Event Contract)",
    debtorAddress: "E-44, Civil Lines, Jaipur, Rajasthan - 302006",
    debtorContact: "hbansal.jaipur@gmail.com | +91-98290-55112",
    ledgerSchedule:
      "1) Signed Banquet Event Contract dt. 10.05.2026 (Min. Guarantee 400 Pax) | Event Dates: 14–16 Nov 2026\n2) Extra-Pax (+95 Guests) & Imported Bar Consumption Slip signed by Event Captain on 16.11.2026 | Final Settlement Invoice RHP/26/772 | Balance Due: ₹12,00,000.00",
    principalAmount: 1200000,
    creditDays: 0,
    interestRate: 18.0,
    cureDays: 15,
    includeOrder37Clause: true,
    includeGstr2bEstoppel: false,
    includeMsmedClause: false,
    includeSection138Clause: true,
    chequeDetails: "Cheque No. 482910 dt. 16.11.2026 for ₹12,00,000/- drawn on HDFC Bank, Civil Lines, Jaipur — Returned Dishonoured on 17.11.2026 with Memo 'Payment Stopped by Drawer'",
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/2194/2014",
    advocateOffice: "AMA Legal Solutions, New Delhi / Jaipur Chambers",
    noticeRef: "LR/IND16/BNQ/2026/199-C",
    noticeDate: "18 November 2026",
  },
  {
    id: "industrial-canteen-mess-arrears",
    label: "4. Industrial Canteen / Corporate Mess Arrears (MSMED s.16 & s.43B(h))",
    badge: "Canteen / Mess",
    noticeTitle: "STATUTORY MSMED & COMMERCIAL DEMAND NOTICE — UNPAID INDUSTRIAL CANTEEN & MESS BILLS",
    creditorName: "Annapurna Institutional Catering Services Pvt. Ltd.",
    creditorType: "Registered Micro/Small Enterprise (Industrial Caterer)",
    creditorGstin: "24AABCA5512P1Z3",
    creditorUdyam: "UDYAM-GJ-01-0218499",
    creditorAddress: "GIDC Industrial Estate, Sanand, Ahmedabad, Gujarat - 382110",
    creditorEmail: "billing@annapurnacaterers.in",
    debtorName: "Zenith Auto-Components Manufacturing Ltd.",
    debtorOfficers: "Mr. Devendra Patel (Plant Head) & Mr. K. Suryanarayanan (VP Finance)",
    debtorGstin: "24AAACZ8810F1Z5",
    debtorAddress: "Plot 88, Sanand Auto-Hub Phase II, Ahmedabad, Gujarat - 382110",
    debtorContact: "accounts.sanand@zenithauto.in | +91-79-2770-4400",
    ledgerSchedule:
      "1) Monthly Biometric Meal Count Log (July 2026: 18,400 Thalis @ ₹125) | Inv. AIC/26-27/301 | ₹7,45,000.00\n2) Monthly Biometric Meal Count Log (Aug–Oct 2026: 37,600 Thalis) | Inv. AIC/26-27/342, 389, 412 | ₹15,05,000.00",
    principalAmount: 2250000,
    creditDays: 45,
    interestRate: 18.75,
    cureDays: 15,
    includeOrder37Clause: true,
    includeGstr2bEstoppel: true,
    includeMsmedClause: true,
    includeSection138Clause: false,
    chequeDetails: "N/A (45-Day Statutory MSMED Credit Ceiling Expired)",
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/2194/2014",
    advocateOffice: "AMA Legal Solutions, New Delhi Chambers",
    noticeRef: "LR/IND16/MESS/2026/199-D",
    noticeDate: "18 November 2026",
  },
];

export default function HospitalityNoticeWorkspace() {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(PRESETS[0].id);
  const [form, setForm] = useState<HospitalityNoticePreset>(PRESETS[0]);
  const [copied, setCopied] = useState(false);

  const applyPreset = (preset: HospitalityNoticePreset) => {
    setSelectedPresetId(preset.id);
    setForm(preset);
    setCopied(false);
  };

  const updateField = <K extends keyof HospitalityNoticePreset>(
    key: K,
    value: HospitalityNoticePreset[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const formattedPrincipal = useMemo(() => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(form.principalAmount || 0);
  }, [form.principalAmount]);

  const generatedNoticeText = useMemo(() => {
    const gstrClause = form.includeGstr2bEstoppel
      ? `\n4. GSTR-2B INPUT TAX CREDIT (ITC) ACCEPTANCE & ESTOPPEL:\n   All GST Tax Invoices itemized in the Schedule above were duly uploaded on the GSTN Portal and reflected in your Form GSTR-2B under GSTIN ${form.debtorGstin}. Having availed Input Tax Credit (ITC) on the underlying hospitality/travel supplies without raising any contemporary written dispute or issuing a debit note under Section 34 of the CGST Act, 2017, you are legally estopped from disputing liability or raising belated quality/authorization objections.`
      : "";

    const msmedClause = form.includeMsmedClause
      ? `\n5. MSMED ACT, 2006 (SECTIONS 15–18) & INCOME TAX SECTION 43B(h) NOTICE:\n   Our Client is a registered Micro/Small Enterprise bearing Udyam Registration No. ${form.creditorUdyam}. Under Section 15 of the MSMED Act, 2006, payment cannot be withheld beyond 45 days. Default attracts mandatory compound interest with monthly rests at three times (3x) the RBI Bank Rate under Section 16, recoverable via MSEFC Samadhaan. Further, under Section 43B(h) of the Income Tax Act, 1961, overdue payments to MSMEs beyond 45 days are disallowed as deductible business expenditure in your income tax assessment.`
      : "";

    const s138Clause = form.includeSection138Clause
      ? `\n6. STATUTORY NOTICE UNDER SECTION 138(b) NEGOTIABLE INSTRUMENTS ACT, 1881:\n   Towards discharge of the legally enforceable liability above, you issued ${form.chequeDetails}. Dishonour of the said cheque—whether for insufficiency of funds or "Payment Stopped by Drawer"—constitutes a criminal offence punishable with imprisonment up to two (2) years and/or fine up to twice the cheque amount under Section 138 NI Act, alongside mandatory 20% interim compensation under Section 143A NI Act. You are strictly called upon to make payment within 15 (fifteen) days of receipt of this notice, failing which criminal prosecution shall be instituted.`
      : "";

    const order37Clause = form.includeOrder37Clause
      ? `\n7. ORDER XXXVII CPC SUMMARY SUIT & ELECTRONIC EVIDENCE PRESERVATION:\n   Because the debt arises from written contracts, signed Guest Registration Cards / BTC authorization emails / flown GDS PNR manifests, and acknowledged Tax Invoices for a liquidated sum, our Client is entitled to institute a Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 (and Commercial Courts Act, 2015 where applicable), as well as seek pre-judgment bank attachment under Order XXXVIII Rule 5 CPC. All PMS logs, GDS PNR records, CCTV footage, and email headers have been preserved under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.`
      : "";

    return `CHAMBERS OF ${form.advocateName.toUpperCase()}, ADVOCATE
${form.advocateOffice}
Bar Council Enrolment No.: ${form.advocateEnrolment}
------------------------------------------------------------------------
Ref. No.: ${form.noticeRef}
Date: ${form.noticeDate}

MODE OF SERVICE: Registered Speed Post A.D. (Section 27 General Clauses Act) + Official Corporate Email + WhatsApp PDF (Preserved under Section 63, BSA 2023)

WITHOUT PREJUDICE — ${form.noticeTitle}

TO:
1. ${form.debtorName}
   GSTIN: ${form.debtorGstin}
   Registered / Billing Address: ${form.debtorAddress}
   Contact: ${form.debtorContact}

2. ${form.debtorOfficers}
   (Authorized Signatories / Directors / Financial Controllers)

ON BEHALF OF OUR CLIENT (CREDITOR):
${form.creditorName} (${form.creditorType})
GSTIN: ${form.creditorGstin} | Udyam Reg. No.: ${form.creditorUdyam}
Address: ${form.creditorAddress}
Email: ${form.creditorEmail}

SUBJECT: FINAL LEGAL DEMAND NOTICE FOR RECOVERY OF ${formattedPrincipal} PLUS INTEREST TOWARDS UNPAID ${form.badge.toUpperCase()} DUES

Sir / Madam,

Under instructions from and on behalf of our above-named Client ("Creditor"), we hereby serve upon you this formal Legal Demand Notice:

1. COMMERCIAL ENGAGEMENT & ITEMIZED SCHEDULE OF DUES:
   Pursuant to your confirmed bookings, written BTC / Corporate Credit authorizations, and/or signed Event Contract, our Client rendered full hospitality, air-ticketing, or institutional catering services to your complete satisfaction. The unpaid invoices, Folios / GDS PNRs, and Ticket Numbers are itemized below:

${form.ledgerSchedule}

2. EXPIRY OF CREDIT PERIOD & UNCONTESTED ACCEPTANCE:
   Despite expiry of the ${form.creditDays}-day credit window and repeated ledger reminders, you have failed and neglected to clear the admitted principal sum of ${formattedPrincipal}. No contemporaneous written objection was ever logged against the guest checkouts, flown sectors, or consumption slips.

3. FORMAL ${form.cureDays}-DAY DEMAND TO REMIT PRINCIPAL & INTEREST:
   You are hereby called upon to remit the entire overdue principal of ${formattedPrincipal} together with accrued interest at ${form.interestRate}% per annum (or statutory MSMED 3x RBI rate where applicable) within ${form.cureDays} (${form.cureDays}) days from receipt of this Notice into our Client's designated bank account.${gstrClause}${msmedClause}${s138Clause}${order37Clause}

8. COST OF NOTICE & LITIGATION RISK:
   You are also liable to pay ₹15,000/- towards the legal cost of this Notice. A copy hereof is retained in our Chambers for production before the Hon'ble Commercial Court / Magistrate / MSEFC.

Sincerely,

${form.advocateName}, Advocate
Enrolment No.: ${form.advocateEnrolment}
Counsel for ${form.creditorName}`;
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
            Select Hospitality / Travel Credit Notice Template
          </span>
          <span className="text-[11px] text-slate-400">
            Populates Guest Folio, 13-Digit Airline PNR, GSTR-2B &amp; s.138 / Order 37 Clauses
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
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
              Customize Folio, PNR &amp; Party Fields
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
              <label className="block font-bold text-slate-700 mb-1">
                Creditor (Hotel / IATA Agent / Venue)
              </label>
              <input
                type="text"
                value={form.creditorName}
                onChange={(e) => updateField("creditorName", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Creditor GSTIN</label>
              <input
                type="text"
                value={form.creditorGstin}
                onChange={(e) => updateField("creditorGstin", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Udyam MSME No.</label>
              <input
                type="text"
                value={form.creditorUdyam}
                onChange={(e) => updateField("creditorUdyam", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-bold text-slate-700 mb-1">
                Defaulting Corporate / Host Name
              </label>
              <input
                type="text"
                value={form.debtorName}
                onChange={(e) => updateField("debtorName", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Debtor GSTIN</label>
              <input
                type="text"
                value={form.debtorGstin}
                onChange={(e) => updateField("debtorGstin", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Principal Due (₹)</label>
              <input
                type="number"
                min={0}
                value={form.principalAmount}
                onChange={(e) => updateField("principalAmount", Number(e.target.value) || 0)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Credit Days</label>
              <input
                type="number"
                min={0}
                value={form.creditDays}
                onChange={(e) => updateField("creditDays", Number(e.target.value) || 0)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Cure Window (Days)</label>
              <input
                type="number"
                min={7}
                max={30}
                value={form.cureDays}
                onChange={(e) => updateField("cureDays", Number(e.target.value) || 15)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-bold text-slate-700 mb-1">
                Folio / BTC Voucher / GDS PNR &amp; 13-Digit Ticket Schedule
              </label>
              <textarea
                rows={4}
                value={form.ledgerSchedule}
                onChange={(e) => updateField("ledgerSchedule", e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 font-mono text-[11px] focus:border-[#DC2626] focus:outline-none"
              />
            </div>

            {form.includeSection138Clause && (
              <div className="sm:col-span-2">
                <label className="block font-bold text-slate-700 mb-1">
                  Dishonoured Cheque &amp; Return Memo Details
                </label>
                <textarea
                  rows={2}
                  value={form.chequeDetails}
                  onChange={(e) => updateField("chequeDetails", e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 text-[11px] focus:border-[#DC2626] focus:outline-none"
                />
              </div>
            )}
          </div>

          {/* Toggleable Statutory Clauses */}
          <div className="pt-2 border-t border-slate-200 space-y-2">
            <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
              Toggle Statutory Enforcement Clauses
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <label className="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.includeOrder37Clause}
                  onChange={(e) => updateField("includeOrder37Clause", e.target.checked)}
                  className="accent-[#DC2626]"
                />
                <span className="font-semibold text-slate-700">Order XXXVII CPC Suit</span>
              </label>
              <label className="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.includeGstr2bEstoppel}
                  onChange={(e) => updateField("includeGstr2bEstoppel", e.target.checked)}
                  className="accent-[#DC2626]"
                />
                <span className="font-semibold text-slate-700">GSTR-2B ITC Estoppel</span>
              </label>
              <label className="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.includeMsmedClause}
                  onChange={(e) => updateField("includeMsmedClause", e.target.checked)}
                  className="accent-[#DC2626]"
                />
                <span className="font-semibold text-slate-700">MSMED s.16 &amp; s.43B(h)</span>
              </label>
              <label className="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.includeSection138Clause}
                  onChange={(e) => updateField("includeSection138Clause", e.target.checked)}
                  className="accent-[#DC2626]"
                />
                <span className="font-semibold text-slate-700">NI Act s.138 Cheque Bounce</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Live Preview */}
        <div className="xl:col-span-7 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-slate-900 text-white px-4 sm:px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                Live Fact-Verified Notice Preview
              </p>
              <p className="text-[11px] text-slate-300">
                Ref: {form.noticeRef} · Principal: {formattedPrincipal}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="px-3.5 py-1.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors"
              >
                {copied ? "Copied Notice!" : "Copy Full Draft"}
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="px-3.5 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold transition-colors"
              >
                Print / Save PDF
              </button>
            </div>
          </div>

          <pre className="p-4 sm:p-6 text-xs sm:text-[13px] leading-relaxed text-slate-800 font-mono whitespace-pre-wrap break-words max-h-[620px] overflow-y-auto bg-slate-50/50">
            {generatedNoticeText}
          </pre>
        </div>
      </div>
    </div>
  );
}
