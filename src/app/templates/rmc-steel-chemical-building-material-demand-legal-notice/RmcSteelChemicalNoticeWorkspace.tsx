"use client";

import React, { useMemo, useState } from "react";

interface Annotation {
  marker: string;
  title: string;
  explanation: string;
  statuteRef: string;
}

interface SupplyAnnexureRow {
  invoiceNo: string;
  ewayBillNo: string;
  vehicleNo: string;
  dharamkantaTicket: string;
  mtcBatchRef: string;
  gateInwardStamp: string;
  amount: string;
}

interface NoticeVariant {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  badge: string;
  annotations: Annotation[];
  buildNotice: (fields: FormFields, rows: SupplyAnnexureRow[]) => string;
}

interface FormFields {
  supplierName: string;
  supplierGstin: string;
  udyamNo: string;
  buyerName: string;
  buyerGstin: string;
  projectSite: string;
  principalAmount: string;
  interestClaim: string;
  cureDays: string;
  dispatchDate: string;
  cityState: string;
}

const DEFAULT_FIELDS: FormFields = {
  supplierName: "[ABC READY-MIX CONCRETE / STEEL / CHEMICALS PVT. LTD.]",
  supplierGstin: "[27AABCA1234F1Z5]",
  udyamNo: "[UDYAM-MH-01-0045678] (Optional if Non-MSME)",
  buyerName: "[XYZ INFRASTRUCTURE & BUILDERS PVT. LTD.]",
  buyerGstin: "[27AABCX9876M1Z2]",
  projectSite: "[SECTOR 14 COMMERCIAL TOWER / HIGHWAY PACKAGE-III SITE]",
  principalAmount: "₹48,60,000/-",
  interestClaim: "24% p.a. contractual (or 3x RBI Bank Rate compounded monthly u/s 16 MSMED Act)",
  cureDays: "15",
  dispatchDate: "17 November 2026",
  cityState: "Mumbai, Maharashtra",
};

const DEFAULT_ROWS: SupplyAnnexureRow[] = [
  {
    invoiceNo: "INV/2026-27/0412",
    ewayBillNo: "EWB-241890441231",
    vehicleNo: "MH-04-JK-8821",
    dharamkantaTicket: "DKT-9941 (32.40 MT)",
    mtcBatchRef: "MTC-B26/M40-089",
    gateInwardStamp: "Gate Reg #418 (Signed)",
    amount: "₹24,10,000/-",
  },
  {
    invoiceNo: "INV/2026-27/0458",
    ewayBillNo: "EWB-241890558902",
    vehicleNo: "MH-46-BP-1190",
    dharamkantaTicket: "DKT-1012 (33.10 MT)",
    mtcBatchRef: "MTC-B26/M40-104",
    gateInwardStamp: "Gate Reg #462 (Signed)",
    amount: "₹24,50,000/-",
  },
];

function formatAnnexureTable(rows: SupplyAnnexureRow[]): string {
  const header =
    "Sr. | Tax Invoice No.      | E-Way Bill No.     | Vehicle No.    | Dharamkanta Ticket   | MTC / Batch COA Ref | Site Gate-Inward Stamp   | Amount";
  const divider = "-".repeat(header.length);
  const body = rows
    .map(
      (r, idx) =>
        `${String(idx + 1).padEnd(3)} | ${r.invoiceNo.padEnd(20)} | ${r.ewayBillNo.padEnd(18)} | ${r.vehicleNo.padEnd(14)} | ${r.dharamkantaTicket.padEnd(20)} | ${r.mtcBatchRef.padEnd(19)} | ${r.gateInwardStamp.padEnd(24)} | ${r.amount}`
    )
    .join("\n");
  return `${header}\n${divider}\n${body}`;
}

const VARIANTS: NoticeVariant[] = [
  {
    id: "rmc-building-materials",
    tabLabel: "1. RMC & Building Materials",
    title: "RMC, Cement & Building Materials Demand Notice (Cube-Test Rejection & s.42 Lock)",
    subtitle: "For Ready-Mix Concrete plants, cement dealers & aggregate suppliers facing delayed builder payments and fabricated 28-day cube failure excuses",
    badge: "Sale of Goods s.42 + Pre-IBC",
    annotations: [
      {
        marker: "①",
        title: "Sale of Goods Act, 1930 — Section 42 Statutory Acceptance Lock",
        explanation:
          "Once RMC is pumped into the slab/column or building material is unloaded at the project gate without contemporaneous written rejection, the buyer has performed an act inconsistent with the seller's ownership—locking irrevocable legal acceptance under Section 42.",
        statuteRef: "Sale of Goods Act, 1930 s.42",
      },
      {
        marker: "②",
        title: "6-Column Supply Dossier (E-Way, Weighbridge, MTC & Gate Stamp)",
        explanation:
          "Attaching the Tax Invoice, GST E-Way Bill, Vehicle GPS/No., Dharamkanta ticket, Batching Plant / MTC printout, and Site Gate-Inward stamp converts oral delivery claims into a liquidated written contract debt under Order XXXVII CPC.",
        statuteRef: "CPC Order XXXVII Rule 1(2) & BSA 2023 s.63",
      },
      {
        marker: "③",
        title: "Rejection of Belated / Un-Witnessed 28-Day Cube Test Excuses",
        explanation:
          "Under IS 456:2000 & IS 516, slump checks at pour and cube casting must be jointly witnessed. Unilateral third-party lab reports raised 45–90 days later—after subsequent floors were cast—are legally barred as sham afterthoughts.",
        statuteRef: "IS 456:2000, IS 516 & Mobilox Innovations (2018) 1 SCC 353",
      },
      {
        marker: "④",
        title: "MSMED Act s.15–16 & Income Tax Act s.43B(h) Tax Disallowance",
        explanation:
          "Where the supplier holds Udyam registration, compounding interest at 3x RBI Bank Rate applies mandatorily, and unpaid Micro/Small enterprise invoices beyond 45 days face income-tax expense disallowance under Section 43B(h).",
        statuteRef: "MSMED Act, 2006 s.15–16 & IT Act s.43B(h)",
      },
      {
        marker: "⑤",
        title: "Pre-Section 8 IBC Intimation & Order XXXVII Summary Suit Warning",
        explanation:
          "Places the corporate debtor on formal notice that continued default will trigger an Insolvency Demand Notice in Form 3/4 under Section 8 IBC (if >= ₹1 Crore) or a Summary Suit under Order XXXVII CPC where leave to defend is denied for moonshine defenses.",
        statuteRef: "IBC, 2016 s.8–9 & CPC Order XXXVII Rule 3",
      },
      {
        marker: "⑥",
        title: "NI Act s.138 / PSS Act s.25 Parallel Criminal Track Preservation",
        explanation:
          "Explicitly reserves the right to present any post-dated or security cheques / NACH mandates and prosecute directors under Section 138 read with Section 141 NI Act concurrently with civil recovery.",
        statuteRef: "NI Act, 1881 s.138, s.141 & s.143A",
      },
    ],
    buildNotice: (f, rows) => `STATUTORY LEGAL DEMAND NOTICE FOR UNPAID READY-MIX CONCRETE (RMC) & BUILDING MATERIAL SUPPLIES
[READ WITH SECTION 42 OF THE SALE OF GOODS ACT, 1930, ORDER XXXVII CPC, MSMED ACT, 2006 & PRE-SECTION 8 IBC INTIMATION]

DISPATCHED VIA: SPEED POST (RPAD), REGISTERED EMAIL & WHATSAPP (ELECTRONIC RECORD U/S 63 BSA, 2023)

Date: ${f.dispatchDate}
Place: ${f.cityState}

To,
1. ${f.buyerName}
   Through its Managing Director / Directors / Authorized Signatory
   GSTIN: ${f.buyerGstin}
   Project / Delivery Site: ${f.projectSite}

2. The Directors / Partners / Project In-Charge
   ${f.buyerName}

UNDER INSTRUCTIONS FROM AND ON BEHALF OF MY CLIENT:
${f.supplierName}
GSTIN: ${f.supplierGstin} | Udyam Reg: ${f.udyamNo}
(Hereinafter referred to as "My Client" or "Supplier")

Sir / Madam,

Under instructions from and on behalf of My Client above-named, I hereby serve upon you the following Legal Demand Notice:

1. COMMERCIAL SUPPLY & IRREVOCABLE ACCEPTANCE U/S 42 SALE OF GOODS ACT ①:
That pursuant to your confirmed Purchase Orders and site indents, My Client manufactured, batched, and delivered Ready-Mix Concrete (RMC) / building materials to your Project Site at ${f.projectSite}. Every consignment was accompanied by GST Tax Invoices, valid GST E-Way Bills, computerized Batching Plant / Weighbridge Slips, and Material Test Certificates (MTC), and was duly received, unloaded, and acknowledged with your Site Gate-Inward Stamp. Having poured, consumed, and incorporated the material into your ongoing construction structure without any contemporaneous rejection at the pour point, you are deemed to have irrevocably accepted the goods under Section 42 of the Sale of Goods Act, 1930.

2. SCHEDULE OF OVERDUE INVOICES & 6-COLUMN LITIGATION DOSSIER (ANNEXURE-A) ②:
The itemized particulars of unpaid deliveries aggregating to a principal sum of ${f.principalAmount} are set out below:

${formatAnnexureTable(rows)}

Total Overdue Principal: ${f.principalAmount}
Applicable Interest: ${f.interestClaim}

3. FORMAL REJECTION OF BELATED / UN-WITNESSED CUBE-TEST OR QUALITY EXCUSES ③:
Take notice that any belated oral or email allegation regarding 7-day or 28-day concrete cube strength, slump, or grade raised weeks after pouring—without joint witness sampling at the transit mixer chute as mandated under IS 456:2000 and IS 516, and after your site has already cast subsequent slabs over the said concrete—is hereby rejected in toto as a fabricated "moonshine defense" intended solely to evade admitted commercial liability.

4. STATUTORY MSME INTEREST & SECTION 43B(h) INCOME TAX CONSEQUENCE ④:
Where My Client is registered under the MSMED Act, 2006, delayed payment beyond the 45-day statutory ceiling attracts compound interest at three times the RBI Bank Rate under Sections 15 and 16, and renders the unpaid expenditure liable for disallowance in your taxable income computation under Section 43B(h) of the Income Tax Act, 1961.

5. FINAL ${f.cureDays}-DAY DEMAND & PRE-SECTION 8 IBC / ORDER XXXVII CPC INTIMATION ⑤ ⑥:
You are hereby called upon to remit the entire overdue principal of ${f.principalAmount} together with accrued interest at ${f.interestClaim} within ${f.cureDays} days from receipt of this Notice. Failing compliance, My Client shall initiate:
(a) A Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 (including Order XXXVIII Rule 5 attachment applications where asset diversion is apprehended);
(b) A formal Statutory Demand Notice in Form 3 / Form 4 under Section 8 of the Insolvency and Bankruptcy Code, 2016 (where threshold criteria apply) leading to CIRP before the Hon'ble NCLT; and
(c) Parallel criminal prosecution under Section 138 read with Section 141 of the Negotiable Instruments Act, 1881 upon dishonour of any cheques/mandates, with 20% interim compensation u/s 143A.

Yours faithfully,
[ADVOCATE NAME / AUTHORIZED COUNSEL]
On behalf of ${f.supplierName}`,
  },
  {
    id: "tmt-steel-cement",
    tabLabel: "2. TMT Steel & Structural",
    title: "TMT Steel, HR/CR Coil & Structural Iron Credit Default Notice (Order XXXVII & Dharamkanta Lock)",
    subtitle: "For steel mills, consignment agents & structural iron traders enforcing weighbridge tolerances, MTC certificates & Order XXXVIII attachment",
    badge: "Order XXXVII + Order XXXVIII r.5",
    annotations: [
      {
        marker: "①",
        title: "GST E-Way Bill + Dharamkanta Gross/Tare Weight Reconciliation",
        explanation:
          "TMT and structural steel buyers frequently allege short-weight weeks after unloading. Pairing the E-Way Bill with stamped Dharamkanta gross/tare slips and BIS IS 1786 sectional weight tolerance proves exact tonnage delivered.",
        statuteRef: "Sale of Goods Act, 1930 s.37 & s.42",
      },
      {
        marker: "②",
        title: "Mill Test Certificate (MTC) & Heat/Batch Number Traceability",
        explanation:
          "Each bundle/coil carries a primary producer MTC linked to Heat Numbers. Once cut, bent, or fabricated at site, quality objections are barred under Section 42 Sale of Goods Act.",
        statuteRef: "BIS IS 1786 / IS 2062 & Sale of Goods Act s.42",
      },
      {
        marker: "③",
        title: "Order XXXVII CPC Liquidated Debt Enforcement",
        explanation:
          "Signed Tax Invoices, Delivery Challans, and E-Way Bills acknowledging goods received constitute a 'written contract' for a liquidated sum, allowing fast-track Summary Suit filing.",
        statuteRef: "CPC Order XXXVII Rule 1(2)(b)",
      },
      {
        marker: "④",
        title: "Order XXXVIII Rule 5 Attachment Before Judgment Warning",
        explanation:
          "Where the defaulting contractor or dealer is attempting to liquidate unsold steel inventory or demobilize site yards, the notice lays the evidentiary foundation for immediate attachment.",
        statuteRef: "CPC Order XXXVIII Rule 5",
      },
      {
        marker: "⑤",
        title: "MSMED Compound Interest & Tax Disallowance Trigger",
        explanation:
          "For Udyam-registered steel processors and traders, compound interest at 3x RBI Bank Rate accrues monthly and triggers s.43B(h) tax add-back for the defaulting buyer.",
        statuteRef: "MSMED Act s.16 & IT Act s.43B(h)",
      },
      {
        marker: "⑥",
        title: "NI Act s.138 Security Cheque & Personal Director Liability",
        explanation:
          "Puts directors and authorized signatories on notice of personal criminal liability under s.138/141 NI Act and interim deposit orders under s.143A.",
        statuteRef: "NI Act, 1881 s.138, s.141 & s.143A",
      },
    ],
    buildNotice: (f, rows) => `LEGAL DEMAND NOTICE FOR OVERDUE TMT BARS, STRUCTURAL STEEL & COIL SUPPLIES
[UNDER ORDER XXXVII CPC, SALE OF GOODS ACT s.42, ORDER XXXVIII RULE 5 CPC & NI ACT s.138]

DISPATCHED VIA: SPEED POST (RPAD), EMAIL & WHATSAPP (BSA 2023 s.63 COMPLIANT)

Date: ${f.dispatchDate}
Place: ${f.cityState}

To,
${f.buyerName}
GSTIN: ${f.buyerGstin}
Site / Godown Address: ${f.projectSite}

ON BEHALF OF MY CLIENT:
${f.supplierName}
GSTIN: ${f.supplierGstin} | Udyam Reg: ${f.udyamNo}

Sir / Madam,

1. DISPATCH, WEIGHBRIDGE & MTC VERIFICATION ① ②:
Pursuant to your confirmed orders, My Client dispatched TMT reinforcement bars / structural steel / HR-CR coils to ${f.projectSite}. Each vehicle was cleared under valid GST E-Way Bills, accompanied by primary Mill Test Certificates (MTC) bearing Heat/Batch Numbers and stamped Dharamkanta weighbridge tickets verifying gross and tare weights within BIS IS 1786 tolerances. Having unloaded, cut, bent, and fabricated the steel without any contemporaneous weight or grade protest at the weighbridge or gate, title and irrevocable acceptance stand concluded under Section 42 of the Sale of Goods Act, 1930.

2. 6-COLUMN STEEL SUPPLY & WEIGHBRIDGE SCHEDULE (ANNEXURE-A) ③:
${formatAnnexureTable(rows)}

Principal Outstanding: ${f.principalAmount}
Interest Demanded: ${f.interestClaim}

3. FINAL ${f.cureDays}-DAY STATUTORY DEMAND & ATTACHMENT WARNING ④ ⑤ ⑥:
You are hereby called upon to clear ${f.principalAmount} with interest (${f.interestClaim}) within ${f.cureDays} days. Upon default, My Client shall institute:
(a) An Order XXXVII CPC Summary Suit coupled with an application under Order XXXVIII Rule 5 CPC seeking attachment of unsold steel stock, plant machinery, and receivables to prevent asset dissipation;
(b) Proceedings under Section 18 of the MSMED Act, 2006 (where applicable) and Section 8/9 IBC Form 3 demand; and
(c) Prosecution under Section 138/141 NI Act on dishonoured instruments.

Yours faithfully,
[ADVOCATE NAME / AUTHORIZED COUNSEL]
On behalf of ${f.supplierName}`,
  },
  {
    id: "chemical-polymer",
    tabLabel: "3. Chemicals & Polymers",
    title: "Industrial Chemical, Solvent, Dye & Polymer Granule Demand Notice (COA & Pre-IBC s.8)",
    subtitle: "For chemical manufacturers, solvent tankers & polymer DCAs defeating post-decanting purity disputes and enforcing batch COA locks",
    badge: "Batch COA Lock + Pre-IBC s.8",
    annotations: [
      {
        marker: "①",
        title: "Pre-Decanting Tanker Valve-Seal & Sealed Retention Sample",
        explanation:
          "Chemical and solvent consignments travel with numbered tamper-evident valve seals and a Batch Certificate of Analysis (COA). Breaking the seal and decanting into the buyer's storage tank locks acceptance under s.42.",
        statuteRef: "Sale of Goods Act, 1930 s.42",
      },
      {
        marker: "②",
        title: "Polymer MFI / Batch COA & Del Credere Agent (DCA) Subrogation",
        explanation:
          "For PP/HDPE/PVC granules and masterbatch, once bags are slit and fed into extrusion hoppers, belated Melt Flow Index (MFI) or shade excuses are barred. DCAs also preserve Contract Act s.140 subrogation rights.",
        statuteRef: "Indian Contract Act s.140 & Sale of Goods Act s.42",
      },
      {
        marker: "③",
        title: "Pre-Section 8 IBC Operational Creditor Intimation",
        explanation:
          "Signals imminent service of a statutory Form 3/4 Demand Notice under Section 8 IBC—forcing the corporate buyer's board to weigh CIRP exposure against a bogus purity excuse.",
        statuteRef: "Insolvency and Bankruptcy Code, 2016 s.8 & s.9",
      },
      {
        marker: "④",
        title: "Mobilox Innovations Pre-Existing Dispute Pre-Emption",
        explanation:
          "Documents that zero written quality dispute existed prior to this demand notice, neutralizing any subsequent fabricated lab report under the Supreme Court's Mobilox test.",
        statuteRef: "Mobilox Innovations Pvt. Ltd. v. Kirusa Software (2018) 1 SCC 353",
      },
      {
        marker: "⑤",
        title: "MSMED s.15–16 & s.43B(h) Tax Compliance Leverage",
        explanation:
          "Reminds the corporate buyer's CFO that withholding Micro/Small supplier dues past 45 days triggers mandatory 3x RBI rate interest and Income Tax disallowance.",
        statuteRef: "MSMED Act s.16 & IT Act s.43B(h)",
      },
      {
        marker: "⑥",
        title: "Electronic Service & BSA 2023 s.63 Admissibility",
        explanation:
          "Ensures E-Way Bills, digital COA PDFs, and WhatsApp/email delivery receipts are preserved with a Section 63 BSA 2023 certificate for trial.",
        statuteRef: "Bharatiya Sakshya Adhiniyam, 2023 s.63",
      },
    ],
    buildNotice: (f, rows) => `PRE-LITIGATION & PRE-IBC SECTION 8 DEMAND NOTICE FOR INDUSTRIAL CHEMICAL, SOLVENT & POLYMER SUPPLIES
[SALE OF GOODS ACT s.42, ORDER XXXVII CPC, MSMED ACT s.16 & IBC SECTION 8 INTIMATION]

DISPATCHED VIA: SPEED POST (RPAD), OFFICIAL EMAIL & WHATSAPP (BSA 2023 s.63)

Date: ${f.dispatchDate}
Place: ${f.cityState}

To,
${f.buyerName}
GSTIN: ${f.buyerGstin}
Factory / Receiving Plant: ${f.projectSite}

ON BEHALF OF MY CLIENT:
${f.supplierName}
GSTIN: ${f.supplierGstin} | Udyam Reg: ${f.udyamNo}

Sir / Madam,

1. BATCH COA VERIFICATION, SEAL INTEGRITY & DECANTING ACCEPTANCE ① ②:
Under your Purchase Orders, My Client supplied industrial chemicals / solvents / dyes / polymer granules to ${f.projectSite}, accompanied by Tax Invoices, GST E-Way Bills, weighbridge slips, and Batch Certificates of Analysis (COA). Your plant personnel verified the tanker valve-seal numbers / bag integrity at the gate, stamped inward receipt, and decanted/consumed the material in your production line without any pre-unloading rejection. Under Section 42 of the Sale of Goods Act, 1930, acceptance is legally complete and irrevocable.

2. 6-COLUMN CHEMICAL / POLYMER SUPPLY SCHEDULE (ANNEXURE-A) ⑥:
${formatAnnexureTable(rows)}

Total Overdue Principal: ${f.principalAmount}
Interest Claimed: ${f.interestClaim}

3. PRE-EMPTION OF POST-CONSUMPTION PURITY EXCUSES ④:
As of the date of this Notice, there exists zero contemporaneous, pre-decanting laboratory dispute on record. Any belated purity, moisture, or MFI objection raised after commingling or processing the material in your tanks/hoppers is legally untenable under Mobilox Innovations Pvt. Ltd. v. Kirusa Software (2018) 1 SCC 353.

4. FINAL ${f.cureDays}-DAY DEMAND & PRE-SECTION 8 IBC / MSMED ESCALATION ③ ⑤:
You are called upon to remit ${f.principalAmount} plus interest (${f.interestClaim}) within ${f.cureDays} days, failing which My Client shall serve a statutory Form 3/4 Demand Notice under Section 8 of the Insolvency and Bankruptcy Code, 2016 (for claims meeting the statutory threshold), institute an Order XXXVII CPC Summary Suit, file a Section 18 MSMED reference, and prosecute any dishonoured instruments under Section 138 NI Act.

Yours faithfully,
[ADVOCATE NAME / AUTHORIZED COUNSEL]
On behalf of ${f.supplierName}`,
  },
];

export default function RmcSteelChemicalNoticeWorkspace() {
  const [activeVariantId, setActiveVariantId] = useState<string>(VARIANTS[0].id);
  const [fields, setFields] = useState<FormFields>(DEFAULT_FIELDS);
  const [rows, setRows] = useState<SupplyAnnexureRow[]>(DEFAULT_ROWS);
  const [copied, setCopied] = useState(false);

  const activeVariant = useMemo(
    () => VARIANTS.find((v) => v.id === activeVariantId) || VARIANTS[0],
    [activeVariantId]
  );

  const renderedNotice = useMemo(
    () => activeVariant.buildNotice(fields, rows),
    [activeVariant, fields, rows]
  );

  const handleFieldChange = (key: keyof FormFields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
  };

  const handleRowChange = (index: number, key: keyof SupplyAnnexureRow, value: string) => {
    setRows((prev) =>
      prev.map((row, i) => (i === index ? { ...row, [key]: value } : row))
    );
  };

  const handleAddRow = () => {
    setRows((prev) => [
      ...prev,
      {
        invoiceNo: `INV/2026-27/0${460 + prev.length}`,
        ewayBillNo: "EWB-241890600000",
        vehicleNo: "MH-04-XX-0000",
        dharamkantaTicket: "DKT-1050 (30.00 MT)",
        mtcBatchRef: "MTC-B26/BATCH-NEW",
        gateInwardStamp: "Gate Reg #500 (Signed)",
        amount: "₹12,00,000/-",
      },
    ]);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(renderedNotice);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const handleDownloadWord = () => {
    const htmlContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'><title>${activeVariant.title}</title></head>
      <body style="font-family: Calibri, Arial, sans-serif; font-size: 11pt; line-height: 1.5; white-space: pre-wrap;">
        <pre style="font-family: 'Courier New', monospace; font-size: 10pt; white-space: pre-wrap;">${renderedNotice.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
      </body>
      </html>
    `;
    const blob = new Blob([htmlContent], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${activeVariant.id}-legal-demand-notice.doc`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Variant Selector Tabs */}
      <div className="flex flex-wrap gap-2">
        {VARIANTS.map((variant) => {
          const isActive = variant.id === activeVariant.id;
          return (
            <button
              key={variant.id}
              type="button"
              onClick={() => setActiveVariantId(variant.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-900/20"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              {variant.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Variant Banner */}
      <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950 text-red-400 border border-red-800/60 mb-1.5">
            {activeVariant.badge}
          </span>
          <p className="text-sm sm:text-base font-bold text-white">{activeVariant.title}</p>
          <p className="text-xs text-slate-300 mt-0.5">{activeVariant.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2 shrink-0">
          <button
            type="button"
            onClick={handleCopy}
            className="px-3.5 py-2 rounded-lg text-xs font-bold bg-[#DC2626] hover:bg-[#B91C1C] text-white transition-colors cursor-pointer"
          >
            {copied ? "Copied!" : "Copy Notice"}
          </button>
          <button
            type="button"
            onClick={handleDownloadWord}
            className="px-3.5 py-2 rounded-lg text-xs font-bold bg-white text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Download .DOC
          </button>
        </div>
      </div>

      {/* Editable Party & Claim Fields */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-4">
        <p className="text-xs font-black uppercase tracking-wider text-slate-700">
          Step 1: Customize Party &amp; Statutory Claim Details
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1">Supplier / Plant Name</label>
            <input
              type="text"
              value={fields.supplierName}
              onChange={(e) => handleFieldChange("supplierName", e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#DC2626]"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1">Supplier GSTIN</label>
            <input
              type="text"
              value={fields.supplierGstin}
              onChange={(e) => handleFieldChange("supplierGstin", e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#DC2626]"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1">Udyam Reg No. (MSME)</label>
            <input
              type="text"
              value={fields.udyamNo}
              onChange={(e) => handleFieldChange("udyamNo", e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#DC2626]"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1">Buyer / Builder Name</label>
            <input
              type="text"
              value={fields.buyerName}
              onChange={(e) => handleFieldChange("buyerName", e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#DC2626]"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1">Buyer GSTIN</label>
            <input
              type="text"
              value={fields.buyerGstin}
              onChange={(e) => handleFieldChange("buyerGstin", e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#DC2626]"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1">Delivery / Project Site</label>
            <input
              type="text"
              value={fields.projectSite}
              onChange={(e) => handleFieldChange("projectSite", e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#DC2626]"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1">Total Principal Due</label>
            <input
              type="text"
              value={fields.principalAmount}
              onChange={(e) => handleFieldChange("principalAmount", e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#DC2626]"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1">Interest Rate / MSMED Clause</label>
            <input
              type="text"
              value={fields.interestClaim}
              onChange={(e) => handleFieldChange("interestClaim", e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#DC2626]"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1">Cure Window (Days)</label>
            <input
              type="text"
              value={fields.cureDays}
              onChange={(e) => handleFieldChange("cureDays", e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#DC2626]"
            />
          </div>
        </div>

        {/* Step 2: 6-Column Supply Annexure Editor */}
        <div className="pt-2 border-t border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-black uppercase tracking-wider text-slate-700">
              Step 2: 6-Column Supply Dossier (E-Way / Dharamkanta / MTC / Gate Stamp)
            </p>
            <button
              type="button"
              onClick={handleAddRow}
              className="px-3 py-1 rounded-lg text-[11px] font-bold bg-slate-900 text-white hover:bg-slate-800 cursor-pointer"
            >
              + Add Consignment Row
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[11px]">
              <thead>
                <tr className="bg-slate-200 text-slate-800">
                  <th className="p-2 font-bold">Tax Invoice No.</th>
                  <th className="p-2 font-bold">E-Way Bill No.</th>
                  <th className="p-2 font-bold">Vehicle No.</th>
                  <th className="p-2 font-bold">Dharamkanta Ticket</th>
                  <th className="p-2 font-bold">MTC / Batch COA</th>
                  <th className="p-2 font-bold">Gate-Inward Stamp</th>
                  <th className="p-2 font-bold">Amount</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-200 bg-white">
                    {(
                      [
                        "invoiceNo",
                        "ewayBillNo",
                        "vehicleNo",
                        "dharamkantaTicket",
                        "mtcBatchRef",
                        "gateInwardStamp",
                        "amount",
                      ] as const
                    ).map((col) => (
                      <td key={col} className="p-1">
                        <input
                          type="text"
                          value={row[col]}
                          onChange={(e) => handleRowChange(idx, col, e.target.value)}
                          className="w-full min-w-[110px] px-2 py-1 text-[11px] border border-slate-300 rounded focus:outline-none focus:border-[#DC2626]"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Live Notice Preview */}
      <div className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden shadow-xs">
        <div className="bg-slate-100 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-700">
            Live Advocate-Vetted Notice Preview (Updates Automatically)
          </span>
          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
            BSA 2023 s.63 &amp; Order 37 Ready
          </span>
        </div>
        <pre className="p-4 sm:p-6 text-xs sm:text-[13px] leading-relaxed text-slate-800 font-mono whitespace-pre-wrap overflow-x-auto max-h-[520px] overflow-y-auto bg-slate-50/40">
          {renderedNotice}
        </pre>
      </div>

      {/* Clause-by-Clause Legal Annotations */}
      <div className="space-y-3">
        <p className="text-xs font-black uppercase tracking-wider text-slate-500">
          Clause-by-Clause Statutory Engineering (Annotations ①–⑥)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {activeVariant.annotations.map((ann) => (
            <div
              key={ann.marker}
              className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1.5"
            >
              <div className="flex items-start gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold shrink-0">
                  {ann.marker}
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-900">{ann.title}</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-8">{ann.explanation}</p>
              <p className="text-[11px] font-semibold text-red-700 pl-8">{ann.statuteRef}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
