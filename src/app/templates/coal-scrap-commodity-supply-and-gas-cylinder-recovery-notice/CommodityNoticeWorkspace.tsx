"use client";

import React, { useMemo, useState } from "react";

interface NoticeFields {
  creditorName: string;
  creditorGstin: string;
  creditorCity: string;
  debtorName: string;
  debtorDirector: string;
  debtorAddress: string;
  invoiceRefs: string;
  ewayAndWeighbridgeRef: string;
  labOrPesoRef: string;
  principalAmount: string;
  disputedDeductionOrValue: string;
  interestRate: string;
  noticeDays: string;
}

interface AnnotationItem {
  marker: string;
  title: string;
  explanation: string;
  statuteRef: string;
}

interface NoticePack {
  id: "coal-gcv" | "scrap-fuel" | "peso-cylinder";
  title: string;
  subtitle: string;
  badge: string;
  annotations: AnnotationItem[];
  buildText: (f: NoticeFields) => string;
}

const DEFAULT_FIELDS: NoticeFields = {
  creditorName: "M/s Apex Bulk Commodities & Gas Pvt. Ltd.",
  creditorGstin: "24AABCA1234F1Z5",
  creditorCity: "Ahmedabad, Gujarat",
  debtorName: "M/s Surya Steels & Rolling Mills Ltd.",
  debtorDirector: "Mr. Rajeshwar Verma (Managing Director)",
  debtorAddress: "Plot No. 48, GIDC Industrial Estate, Bhavnagar - 364004",
  invoiceRefs: "INV/2026-27/1042 & INV/2026-27/1089",
  ewayAndWeighbridgeRef: "EWB-381920445112 | Dharamkanta Slip #DK-8841 (Net 42.60 MT)",
  labOrPesoRef: "SGS Load-Port COA #MND-2026-771 (5,850 kcal/kg) / PESO Batch CYL-901 to CYL-945",
  principalAmount: "18,45,000",
  disputedDeductionOrValue: "5,40,000",
  interestRate: "24",
  noticeDays: "15",
};

const NOTICE_PACKS: NoticePack[] = [
  {
    id: "coal-gcv",
    title: "Pack 1A: Coal / Petcoke / Mineral — Invoice & GCV Cut Rebuttal",
    subtitle: "Void post-burning GCV/moisture debit notes using Load-Port SGS/NABL COA & Sale of Goods s.42",
    badge: "Coal & Minerals",
    annotations: [
      {
        marker: "①",
        title: "Deemed Acceptance Upon Burning / Consumption",
        explanation:
          "Under Section 42 of the Sale of Goods Act, 1930, once the buyer unloads, stacks, and consumes/burns the coal or mineral lot without prior joint-sampling intimation, the buyer is deemed to have accepted the goods in full.",
        statuteRef: "Sale of Goods Act, 1930 — s.41 & s.42",
      },
      {
        marker: "②",
        title: "Load-Port SGS / Intertek / NABL COA Finality",
        explanation:
          "Establishes that contractual quality was certified at dispatch/load-port by an accredited NABL/SGS/Intertek surveyor. Unilateral buyer factory-lab reports prepared weeks later without joint referee sealing hold zero evidentiary weight.",
        statuteRef: "Indian Contract Act, 1872 — s.37 & s.73",
      },
      {
        marker: "③",
        title: "BSA 2023 s.63 Electronic Weighbridge & E-Way Trail",
        explanation:
          "Places GST E-Way Bills, automated Dharamkanta weight slips, and transporter LR/Bilty records on statutory notice so the buyer cannot fabricate weight-shortage or non-delivery excuses.",
        statuteRef: "Bharatiya Sakshya Adhiniyam, 2023 — s.63",
      },
      {
        marker: "④",
        title: "Pre-IBC Section 8 & Mobilox Dispute Screening",
        explanation:
          "Formally records that no contemporaneous quality dispute was raised prior to this notice, neutralizing any sham 'pre-existing dispute' defence if the creditor escalates to NCLT under IBC Section 8/9.",
        statuteRef: "Insolvency & Bankruptcy Code, 2016 — s.8 & s.9",
      },
      {
        marker: "⑤",
        title: "Order XXXVII Summary Suit & Order 38 Rule 5 Warning",
        explanation:
          "Puts the buyer on notice of liquidated Order 37 summary proceedings and urgent Order 38 Rule 5 CPC attachment before judgment if plant inventory or receivables are dissipated.",
        statuteRef: "CPC 1908 — Order XXXVII & Order XXXVIII Rule 5",
      },
      {
        marker: "⑥",
        title: "MSMED 3x RBI Interest & Income Tax s.43B(h) Flag",
        explanation:
          "Where the supplier is a registered Micro/Small Enterprise, triggers statutory compound interest at 3x RBI bank rate and warns of buyer tax disallowance under Section 43B(h).",
        statuteRef: "MSMED Act, 2006 — ss.15–16 & IT Act s.43B(h)",
      },
    ],
    buildText: (f) => `LEGAL DEMAND NOTICE & REBUTTAL OF UNILATERAL GCV / QUALITY DEBIT NOTE
[Under Section 42 Sale of Goods Act, 1930 | Order XXXVII CPC | Pre-IBC Section 8]

MODE OF SERVICE: Speed Post with A.D., Registered Email & Verified WhatsApp (BSA 2023 s.63)

To,
${f.debtorName}
Kind Attn: ${f.debtorDirector}
Registered / Plant Address: ${f.debtorAddress}

UNDER INSTRUCTIONS FROM MY CLIENT:
${f.creditorName} (GSTIN: ${f.creditorGstin}), having its office at ${f.creditorCity} (hereinafter referred to as "Our Client").

Sir / Madam,

Under instructions from and on behalf of Our Client, I hereby serve upon you this formal Statutory Demand Notice and Categorical Rebuttal in respect of your overdue trade balance and unlawful quality/GCV debit note:

1. FACTUAL MATRIX & CERTIFIED DISPATCH:
That Our Client supplied bulk industrial coal/petcoke/minerals against confirmed Purchase Orders under Tax Invoices ${f.invoiceRefs}. All dispatches were duly weighed and cleared through ${f.ewayAndWeighbridgeRef} ③, and accepted at your plant gate without any protest or endorsement of shortage on the Lorry Receipt (LR).

2. FINALITY OF LOAD-PORT / NABL COA & DEEMED ACCEPTANCE (SOGA s.42):
Each consignment was accompanied by ${f.labOrPesoRef} ②. Under the agreed trade terms and Section 42 of the Sale of Goods Act, 1930 ①, once your plant unloaded, stacked, and consumed/burned the material in your boiler/kiln without calling for joint referee sampling within 48 hours of arrival, you are legally deemed to have accepted the goods unconditionally.

3. REPUDIATION OF UNILATERAL DEBIT NOTE (RS. ${f.disputedDeductionOrValue}/-):
Your belated internal lab debit note of Rs. ${f.disputedDeductionOrValue}/- alleging GCV/moisture variance after full consumption is an afterthought, legally void, and non-est. No unilateral deduction can override an accredited third-party Load-Port/NABL Certificate of Analysis ②. Furthermore, no bona fide pre-existing dispute existed at the time of delivery ④.

4. QUANTIFIED DEMAND & STATUTORY INTEREST:
You are hereby called upon to remit within ${f.noticeDays} (fifteen) days of receipt hereof:
  a) Principal Overdue Invoice Balance : Rs. ${f.principalAmount}/-
  b) Contractual / Statutory Interest  : @ ${f.interestRate}% p.a. (or 3x RBI Bank Rate under MSMED Act ss.15–16, where applicable, attracting Income Tax Act s.43B(h) disallowance ⑥)
  c) Legal Notice & Dispatch Costs     : Rs. 15,000/-

5. ESCALATION WARNING (PRE-IBC s.8 / ORDER XXXVII / ORDER 38 RULE 5):
Take notice that failure to clear the aforesaid sum within ${f.noticeDays} days shall compel Our Client, without further reference, to initiate: (i) Summary Suit under Order XXXVII CPC alongside an urgent application under Order XXXVIII Rule 5 CPC for attachment before judgment of your plant stock/receivables ⑤; (ii) Statutory Demand Notice in Form 3 under Section 8 of the IBC, 2016 ④; and (iii) MSEFC / Commercial Court recovery proceedings entirely at your risk and cost.

Dated: [CURRENT DATE] | Place: ${f.creditorCity}
[ADVOCATE NAME], Advocate & Legal Counsel
Bar Council Enrolment No.: [ENROLMENT NO.]`,
  },
  {
    id: "scrap-fuel",
    title: "Pack 1B: Metal Scrap, Rolling Mill & Bulk Fuel Overdue RTGS Notice",
    subtitle: "Defeat post-melting slag excuses, GST ITC alibis & enforce s.138 PDCs + Order 38 Rule 5",
    badge: "Scrap & Fuel",
    annotations: [
      {
        marker: "①",
        title: "Post-Melting Slag / Burning Loss Bar (SOGA s.42)",
        explanation:
          "Once HMS, shredded scrap, copper, or aluminium is charged into an induction furnace or bulk diesel/lubricants are decanted into buyer tanks, physical identity is destroyed and post-consumption deductions are barred under s.42.",
        statuteRef: "Sale of Goods Act, 1930 — s.26 & s.42",
      },
      {
        marker: "②",
        title: "GST s.16 & E-Way Bill Delivery Proof",
        explanation:
          "Combines GSTR-1 / E-Way Bill Part-B vehicle logs and automated weighbridge slips under BSA s.63 to defeat false 'GST mismatch' or 'short-weight' payment holds.",
        statuteRef: "CGST Act, 2017 — s.16 & BSA 2023 s.63",
      },
      {
        marker: "③",
        title: "Order XXXVIII Rule 5 Billet & Inventory Freeze",
        explanation:
          "Crucial for distressed rolling mills and furnaces: warns that any attempt to strip finished billets/ingots before bank seizure will trigger immediate attachment before judgment.",
        statuteRef: "CPC 1908 — Order XXXVIII Rule 5",
      },
      {
        marker: "④",
        title: "NI Act s.138 & s.141 Director Vicarious Liability",
        explanation:
          "Places Managing Directors and Authorised Signatories on personal notice regarding post-dated / security cheques held against running RTGS ledger balances.",
        statuteRef: "Negotiable Instruments Act, 1881 — ss.138, 141, 143A",
      },
      {
        marker: "⑤",
        title: "Contract Act s.237 Driver / Site Engineer Ostensible Authority",
        explanation:
          "For bulk diesel bowsers and industrial lubricants, prevents buyers from disowning signed fuel indents and RFID flow-meter slips executed by site managers.",
        statuteRef: "Indian Contract Act, 1872 — s.237",
      },
      {
        marker: "⑥",
        title: "Running Ledger Confirmation & Order 37 Summary Recovery",
        explanation:
          "Locks in reconciled ledger balances and GST-reported invoices as a liquidated debt triable summarily under Order XXXVII CPC.",
        statuteRef: "CPC 1908 — Order XXXVII Rule 1 & 2",
      },
    ],
    buildText: (f) => `STATUTORY DEMAND NOTICE FOR OVERDUE METAL SCRAP / BULK FUEL LEDGER
[Sale of Goods Act s.42 | Order XXXVII & Order XXXVIII Rule 5 CPC | NI Act ss.138/141]

MODE OF SERVICE: Speed Post with A.D., Registered Email & WhatsApp (BSA 2023 s.63)

To,
1. ${f.debtorName}
2. ${f.debtorDirector} (In-charge and responsible for day-to-day affairs under NI Act s.141)
Address: ${f.debtorAddress}

UNDER INSTRUCTIONS FROM: ${f.creditorName} (GSTIN: ${f.creditorGstin}), ${f.creditorCity} ("Our Client").

Sir / Madam,

1. VERIFIED SUPPLY & DELIVERY LOGS:
Our Client supplied ferrous/non-ferrous metal scrap / industrial fuel & lubricants to your plant under Invoices ${f.invoiceRefs} totaling an unpaid ledger balance of Rs. ${f.principalAmount}/-. Every truckload/bowser delivery stands verified by ${f.ewayAndWeighbridgeRef} ② and signed site-gate / RFID flow-meter receipts ⑤.

2. BAR ON POST-MELTING / POST-CONSUMPTION DEDUCTIONS:
Under Section 42 of the Sale of Goods Act, 1930 ①, once your induction furnace melted the scrap (or your fleet consumed the supplied fuel), you waived all rights of rejection. Your belated claim of Rs. ${f.disputedDeductionOrValue}/- towards alleged 'excess slag / burning loss' or unsubstantiated GST holds is rejected in toto, as Our Client has duly filed GSTR-1 for all tax invoices ②.

3. NOTICE TO DIRECTORS & CHEQUE PRESENTATION WARNING:
You are hereby notified that the running RTGS ledger balance of Rs. ${f.principalAmount}/- is a liquidated admitted debt ⑥. Further, any post-dated or security cheques issued toward this running account are backed by subsisting legal liability, and dishonour upon presentation shall attract criminal prosecution against the Company and all Directors under Sections 138 and 141 of the NI Act, 1881, including 20% interim compensation under Section 143A ④.

4. DEMAND & URGENT ATTACHMENT WARNING:
Clear Rs. ${f.principalAmount}/- with ${f.interestRate}% p.a. overdue interest within ${f.noticeDays} days of receipt, failing which Our Client shall file an Order XXXVII Summary Suit along with an emergent Order XXXVIII Rule 5 CPC application to attach finished billets, ingots, scrap stock, and bank receivables ③.

Dated: [CURRENT DATE] | Place: ${f.creditorCity}
[ADVOCATE NAME], Advocate & Legal Counsel`,
  },
  {
    id: "peso-cylinder",
    title: "Pack 2: PESO Gas-Cylinder Return, Daily Rent & BNS s.316 Notice",
    subtitle: "Enforce Gas Cylinders Rules 2016, stop grey-market refilling & prosecute retention under BNS s.316",
    badge: "PESO Cylinders",
    annotations: [
      {
        marker: "①",
        title: "Bailment Ownership & PESO Embossed Identity",
        explanation:
          "Establishes that high-pressure O2, N2, Argon, DA, or CO2 cylinders remain the exclusive bailment property of the filler/owner under Contract Act s.148, identified by permanent PESO neck-ring serial numbers.",
        statuteRef: "Indian Contract Act, 1872 — ss.148, 160–161",
      },
      {
        marker: "②",
        title: "Statutory Prohibition on Third-Party Refilling",
        explanation:
          "Under the Gas Cylinders Rules, 2016 (PESO), no third-party filler or user can refill, repaint, tamper with valves, or obliterate ownership markings on cylinders belonging to another licensee.",
        statuteRef: "Gas Cylinders Rules, 2016 (PESO)",
      },
      {
        marker: "③",
        title: "Criminal Breach of Trust (BNS s.316)",
        explanation:
          "Puts the customer and its directors on explicit statutory notice that wrongful retention, conversion, or unauthorized sale of bailed cylinders constitutes Criminal Breach of Trust punishable under BNS s.316 (formerly IPC s.406).",
        statuteRef: "Bharatiya Nyaya Sanhita, 2023 — s.316",
      },
      {
        marker: "④",
        title: "Cylinder Serial Number & Daily Demurrage Schedule",
        explanation:
          "Embeds a structured serial-number, water-capacity, and daily cylinder holding-rent schedule so the claim is quantified down to each individual cylinder.",
        statuteRef: "Order XXXVII CPC — Liquidated Rent & Replacement",
      },
      {
        marker: "⑤",
        title: "Mandatory 7-Day Physical Return & Joint Gate Inspection",
        explanation:
          "Fixes a strict 7-day window for physical return of empty cylinders in undamaged hydro-tested condition with intact valves and safety caps.",
        statuteRef: "Contract Act s.161 (Bailee's Liability)",
      },
      {
        marker: "⑥",
        title: "Replacement Cost + Compounding Rent Recovery",
        explanation:
          "Demands both accrued cylinder holding rent and full PESO-certified replacement cost (typically Rs. 7,000–14,000 per cylinder) if not returned within the notice period.",
        statuteRef: "Indian Contract Act, 1872 — s.73 & s.74",
      },
    ],
    buildText: (f) => `STATUTORY NOTICE FOR RETURN OF PESO INDUSTRIAL GAS CYLINDERS, DEMURRAGE RENT & CRIMINAL BREACH OF TRUST (BNS s.316)
[Gas Cylinders Rules, 2016 | Contract Act ss.148, 160–161 | BNS s.316 | Order XXXVII CPC]

MODE OF SERVICE: Speed Post with A.D., Email & WhatsApp (BSA 2023 s.63)

To,
1. ${f.debtorName}
2. ${f.debtorDirector}
Address: ${f.debtorAddress}

UNDER INSTRUCTIONS FROM: ${f.creditorName} (PESO Licensed Industrial Gas Filler), ${f.creditorCity} ("Our Client").

Sir / Madam,

1. ENTRUSTMENT & BAILMENT OF PESO-EMBOSSED CYLINDERS:
Our Client supplied industrial gases (Oxygen / Nitrogen / Argon / CO2 / DA) to your unit under Delivery Challans & Invoices ${f.invoiceRefs}. The high-pressure seamless steel cylinders were entrusted to you strictly on returnable bailment basis under Section 148 of the Indian Contract Act, 1872 ①. Ownership of every cylinder remains vested solely in Our Client, permanently embossed with Our Client's colour code and PESO serial numbers.

2. SCHEDULE OF UNRETURNED CYLINDERS & OVERDUE DUES:
+-----------------------------------------------------------------------------+
| Batch / Serial Reference : ${f.labOrPesoRef} ④
| Dispatch / E-Way Log     : ${f.ewayAndWeighbridgeRef}
| Overdue Gas & Rent Dues  : Rs. ${f.principalAmount}/-
| Cylinder Replacement Value : Rs. ${f.disputedDeductionOrValue}/- (if unreturned)
+-----------------------------------------------------------------------------+

3. STATUTORY BAR ON GREY-MARKET REFILLING (GAS CYLINDERS RULES, 2016):
You have illegally retained the said cylinders beyond the free holding period and failed to pay accrued daily demurrage rent. You are strictly warned that refilling Our Client's cylinders through any unauthorized third-party filler, repainting neck-rings, or tampering with PESO markings violates the Gas Cylinders Rules, 2016 ② and Explosives Act, 1884, exposing your plant to PESO sealing and regulatory prosecution.

4. CRIMINAL BREACH OF TRUST NOTICE (BNS s.316):
Continued wrongful retention or conversion of bailed cylinders entrusted to your custody constitutes Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS) ③, rendering you and your Directors liable to criminal complaint and police seizure.

5. PEREMPTORY 7-DAY RETURN & PAYMENT DEMAND:
You are hereby called upon within 7 (seven) days for physical cylinder return ⑤ and ${f.noticeDays} days for monetary settlement to:
  a) Physically return all listed cylinders at Our Client's depot with intact valves & hydrotest markings;
  b) Pay overdue gas supply & daily cylinder holding rent of Rs. ${f.principalAmount}/- with ${f.interestRate}% p.a. interest;
  c) Failing return, pay full replacement value of Rs. ${f.disputedDeductionOrValue}/- per schedule ⑥, failing which Our Client shall file an FIR/Criminal Complaint under BNS s.316, report the serial numbers to PESO, and institute Order XXXVII CPC / Order XXXVIII Rule 5 recovery proceedings.

Dated: [CURRENT DATE] | Place: ${f.creditorCity}
[ADVOCATE NAME], Advocate & Legal Counsel`,
  },
];

export default function CommodityNoticeWorkspace() {
  const [selectedId, setSelectedId] = useState<NoticePack["id"]>("coal-gcv");
  const [fields, setFields] = useState<NoticeFields>(DEFAULT_FIELDS);
  const [copySuccess, setCopySuccess] = useState(false);

  const selectedPack = useMemo(
    () => NOTICE_PACKS.find((p) => p.id === selectedId) || NOTICE_PACKS[0],
    [selectedId]
  );

  const generatedNotice = useMemo(
    () => selectedPack.buildText(fields),
    [selectedPack, fields]
  );

  const updateField = (key: keyof NoticeFields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedNotice);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  const handleDownloadWord = () => {
    const htmlContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'><title>${selectedPack.title}</title></head>
      <body style="font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.5; white-space: pre-wrap;">
      ${generatedNotice.replace(/\n/g, "<br/>")}
      </body></html>
    `;
    const blob = new Blob(["\ufeff", htmlContent], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedPack.id}-legal-notice-format.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full space-y-6">
      {/* Pack Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        {NOTICE_PACKS.map((pack) => {
          const isSelected = pack.id === selectedId;
          return (
            <button
              key={pack.id}
              type="button"
              onClick={() => setSelectedId(pack.id)}
              className={`text-left px-4 py-3.5 rounded-xl transition-all cursor-pointer ${
                isSelected
                  ? "bg-white text-slate-900 shadow-md border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span
                  className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                    isSelected
                      ? "bg-red-50 text-[#DC2626] border border-red-200"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {pack.badge}
                </span>
              </div>
              <p className="font-extrabold text-xs sm:text-sm tracking-tight leading-snug">
                {pack.title}
              </p>
              <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-snug">
                {pack.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Live Customization Inputs */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-black uppercase tracking-wider text-slate-800">
              Live Statutory Clause Customizer
            </p>
            <p className="text-[11px] text-slate-500">
              Edit your entity, debtor, weighbridge/SGS/PESO references, and claim figures to update the Word draft in real time.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setFields(DEFAULT_FIELDS)}
            className="text-xs font-semibold text-[#DC2626] hover:underline cursor-pointer"
          >
            Reset Sample Data
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <label className="block">
            <span className="block text-[11px] font-bold text-slate-700 mb-1">
              Creditor / Supplier Name
            </span>
            <input
              type="text"
              value={fields.creditorName}
              onChange={(e) => updateField("creditorName", e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#DC2626]"
            />
          </label>
          <label className="block">
            <span className="block text-[11px] font-bold text-slate-700 mb-1">
              Debtor / Buyer Plant Name
            </span>
            <input
              type="text"
              value={fields.debtorName}
              onChange={(e) => updateField("debtorName", e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#DC2626]"
            />
          </label>
          <label className="block">
            <span className="block text-[11px] font-bold text-slate-700 mb-1">
              Director / Authorised Officer
            </span>
            <input
              type="text"
              value={fields.debtorDirector}
              onChange={(e) => updateField("debtorDirector", e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#DC2626]"
            />
          </label>
          <label className="block">
            <span className="block text-[11px] font-bold text-slate-700 mb-1">
              Invoice / Challan Numbers
            </span>
            <input
              type="text"
              value={fields.invoiceRefs}
              onChange={(e) => updateField("invoiceRefs", e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#DC2626]"
            />
          </label>
          <label className="block">
            <span className="block text-[11px] font-bold text-slate-700 mb-1">
              E-Way Bill &amp; Dharamkanta Ref
            </span>
            <input
              type="text"
              value={fields.ewayAndWeighbridgeRef}
              onChange={(e) => updateField("ewayAndWeighbridgeRef", e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#DC2626]"
            />
          </label>
          <label className="block">
            <span className="block text-[11px] font-bold text-slate-700 mb-1">
              SGS/NABL COA or PESO Cylinder Batch
            </span>
            <input
              type="text"
              value={fields.labOrPesoRef}
              onChange={(e) => updateField("labOrPesoRef", e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#DC2626]"
            />
          </label>
          <label className="block">
            <span className="block text-[11px] font-bold text-slate-700 mb-1">
              Principal Overdue (&#8377;)
            </span>
            <input
              type="text"
              value={fields.principalAmount}
              onChange={(e) => updateField("principalAmount", e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#DC2626]"
            />
          </label>
          <label className="block">
            <span className="block text-[11px] font-bold text-slate-700 mb-1">
              Disputed Cut / Cylinder Value (&#8377;)
            </span>
            <input
              type="text"
              value={fields.disputedDeductionOrValue}
              onChange={(e) => updateField("disputedDeductionOrValue", e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#DC2626]"
            />
          </label>
          <label className="block">
            <span className="block text-[11px] font-bold text-slate-700 mb-1">
              Interest (% p.a.) &amp; Cure Window (Days)
            </span>
            <div className="flex gap-2">
              <input
                type="text"
                value={fields.interestRate}
                onChange={(e) => updateField("interestRate", e.target.value)}
                aria-label="Interest rate percent"
                className="w-1/2 px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#DC2626]"
              />
              <input
                type="text"
                value={fields.noticeDays}
                onChange={(e) => updateField("noticeDays", e.target.value)}
                aria-label="Notice cure days"
                className="w-1/2 px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#DC2626]"
              />
            </div>
          </label>
        </div>
      </div>

      {/* Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs sm:text-sm font-bold text-slate-800">
            Active Draft: <span className="text-[#DC2626]">{selectedPack.title}</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
          >
            {copySuccess ? "✓ Copied!" : "Copy Draft"}
          </button>
          <button
            type="button"
            onClick={handleDownloadWord}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-300 cursor-pointer"
          >
            Download .doc (Word)
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-300 cursor-pointer"
          >
            Print / PDF
          </button>
        </div>
      </div>

      {/* Side-by-Side Draft Preview + Margin Annotations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-slate-900 text-white px-4 sm:px-6 py-3 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
              Advocate-Vetted Statutory Draft Preview
            </span>
            <span className="text-[10px] bg-red-950 text-red-400 font-bold px-2 py-0.5 rounded-md border border-red-800">
              Annotated Clauses ①–⑥
            </span>
          </div>
          <div className="p-4 sm:p-6 bg-slate-50/50">
            <pre className="font-mono text-xs sm:text-[13px] text-slate-800 whitespace-pre-wrap leading-relaxed select-all bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-inner overflow-x-auto max-h-[680px] overflow-y-auto">
              {generatedNotice}
            </pre>
          </div>
          <div className="px-4 py-3 bg-slate-100 border-t border-slate-200 text-slate-500 text-[11px] flex items-center justify-between">
            <span>Attach Annexure A (Invoices + E-Way/Dharamkanta) &amp; Annexure B (COA / PESO Serials).</span>
            <span className="font-semibold text-slate-700">Word (.doc) Ready</span>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-3.5">
          <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 shadow-sm">
            <h3 className="text-sm font-extrabold tracking-tight">
              Clause-by-Clause Statutory Annotations
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              How each numbered clause defeats buyer excuses and locks in summary / criminal remedies:
            </p>
          </div>

          <ol className="space-y-3 list-none">
            {selectedPack.annotations.map((ann, idx) => (
              <li
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-3.5 sm:p-4 shadow-xs hover:border-slate-300 transition-colors"
              >
                <div className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {ann.marker}
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">
                      {ann.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {ann.explanation}
                    </p>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md mt-1">
                      Statute: {ann.statuteRef}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
