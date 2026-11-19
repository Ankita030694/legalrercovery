"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

interface PackagingPreset {
  id: string;
  label: string;
  badge: string;
  creditorName: string;
  creditorGSTIN: string;
  creditorUdyam: string;
  creditorAddress: string;
  creditorEmail: string;
  debtorName: string;
  debtorSignatory: string;
  debtorGSTIN: string;
  debtorAddress: string;
  debtorEmail: string;
  poAndArtworkRef: string;
  readyForDispatchDate: string;
  invoiceAndEwaySchedule: string;
  unliftedStockSchedule: string;
  cylinderOrMouldSchedule: string;
  overdueInvoiceAmount: number;
  unliftedStockValue: number;
  monthlyGodownRent: number;
  storageMonths: number;
  cylinderMouldDues: number;
  scrapCreditEstimate: number;
  creditDays: number;
  interestRate: number;
  enableSection44GodownRent: boolean;
  enable15DayLiftAndScrap: boolean;
  enableCylinderMouldLien: boolean;
  enableMsmed43Bh: boolean;
  advocateName: string;
  advocateEnrolment: string;
  advocateOffice: string;
  noticeRef: string;
  noticeDate: string;
}

const PRESETS: PackagingPreset[] = [
  {
    id: "flexible-pouches-cylinders",
    label: "Flexible Laminate Pouches + 8 Gravure Cylinders + s.44 Godown Rent",
    badge: "Flexible & Cylinders",
    creditorName: "Aarav FlexiPack Converters Private Limited",
    creditorGSTIN: "24AABCA8821D1Z5",
    creditorUdyam: "UDYAM-GJ-23-0041982",
    creditorAddress: "Plot 114/B, GIDC Phase III, Vapi, Valsad, Gujarat - 396195",
    creditorEmail: "accounts@aaravflexipack.in",
    debtorName: "NutriCrunch FMCG Foods Private Limited",
    debtorSignatory: "Mr. Vivek Malhotra (Director & Head of Procurement)",
    debtorGSTIN: "27AABCN6642M1Z9",
    debtorAddress: "Unit 804, Corporate Annexe, Andheri East, Mumbai, Maharashtra - 400093",
    debtorEmail: "procurement@nutricrunchfoods.in",
    poAndArtworkRef:
      "PO/NCF/2026/419 dated 14 May 2026 | Signed Shade Card & Digital Artwork Sign-Off Email dated 19 May 2026",
    readyForDispatchDate: "28 June 2026",
    invoiceAndEwaySchedule:
      "Inv. AFP/26-27/0284 (₹7,40,000 | E-Way Bill 241890441209) & Inv. AFP/26-27/0341 (₹4,85,000 | E-Way Bill 241890558731) — Supplied & Accepted",
    unliftedStockSchedule:
      "3,400 kg Custom-Printed 3-Layer PET/Met-PET/Poly Stand-Up Pouches (SKU: Masala Oats 500g, Brand Logo & FSSAI Lic. Printed) — Ready FG in Bay 4B",
    cylinderOrMouldSchedule:
      "8 x Copper-Engraved Rotogravure Printing Cylinders (Serials CYL-NCF-01 to 08, Width 860mm) held in Client Cylinder Vault",
    overdueInvoiceAmount: 1225000,
    unliftedStockValue: 952000,
    monthlyGodownRent: 45000,
    storageMonths: 4,
    cylinderMouldDues: 168000,
    scrapCreditEstimate: 27200,
    creditDays: 30,
    interestRate: 19.5,
    enableSection44GodownRent: true,
    enable15DayLiftAndScrap: true,
    enableCylinderMouldLien: true,
    enableMsmed43Bh: true,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/IND22/FLEX/2026-412",
    noticeDate: "19 November 2026",
  },
  {
    id: "corrugated-cartons-43bh",
    label: "Corrugated Boxes + Unlifted Printed Cartons + Section 43B(h)",
    badge: "Corrugated & 43B(h)",
    creditorName: "Shree Balaji Corrugators & Packaging Industries",
    creditorGSTIN: "06AABFS4109P1Z2",
    creditorUdyam: "UDYAM-HR-05-0083214",
    creditorAddress: "Plot 42, Sector 58 Industrial Area, Faridabad, Haryana - 121004",
    creditorEmail: "billing@balajicorrugators.in",
    debtorName: "Vanguard Home Appliances India Private Limited",
    debtorSignatory: "Ms. Ritu Sharma (VP Finance & Accounts Payable)",
    debtorGSTIN: "07AABCV9031K1Z4",
    debtorAddress: "Plot 19, Okhla Industrial Estate Phase III, New Delhi - 110020",
    debtorEmail: "ap.finance@vanguardappliances.in",
    poAndArtworkRef:
      "PO/VHA/BOX/2026/1088 dated 02 July 2026 | Approved 5-Ply 22BF Flexo Artwork Proof & Pre-Dispatch QC COA",
    readyForDispatchDate: "18 August 2026",
    invoiceAndEwaySchedule:
      "Inv. SBC/26-27/1104 (₹6,80,000 | E-Way 161099442110), SBC/26-27/1189 (₹5,90,000 | E-Way 161099883412) & SBC/26-27/1265 (₹5,10,000 | E-Way 161100429801)",
    unliftedStockSchedule:
      "18,500 Nos. Custom Flexo-Printed 5-Ply Master Shipper Cartons (Model: Air-Fryer Pro 4.5L, 22BF/150GSM Kraft) — Bundled & Palletized in Dispatch Shed B",
    cylinderOrMouldSchedule:
      "4 x Photopolymer Flexo Stereo Plates + 2 x Rotary Wooden Punching Dies (Serials DIE-VHA-11 to 16)",
    overdueInvoiceAmount: 1780000,
    unliftedStockValue: 647500,
    monthlyGodownRent: 38000,
    storageMonths: 3,
    cylinderMouldDues: 74000,
    scrapCreditEstimate: 35000,
    creditDays: 45,
    interestRate: 19.5,
    enableSection44GodownRent: true,
    enable15DayLiftAndScrap: true,
    enableCylinderMouldLien: true,
    enableMsmed43Bh: true,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/IND22/CORR/2026-508",
    noticeDate: "19 November 2026",
  },
  {
    id: "rigid-pet-hdpe-mould-lien",
    label: "Rigid Plastic PET/HDPE Bottles + Custom Blow-Mould Lien",
    badge: "PET / Mould Lien",
    creditorName: "Apex PolyPack Blow-Moulding Private Limited",
    creditorGSTIN: "27AABCA3318H1Z8",
    creditorUdyam: "UDYAM-MH-26-0059411",
    creditorAddress: "Plot J-28, Chakan MIDC Phase II, Pune, Maharashtra - 410501",
    creditorEmail: "finance@apexpolypack.in",
    debtorName: "DermaGlow Personal Care Brands LLP",
    debtorSignatory: "Mr. Karan Kapoor (Designated Partner)",
    debtorGSTIN: "27AABFD7712Q1Z3",
    debtorAddress: "Level 5, Trade Tower, Lower Parel, Mumbai, Maharashtra - 400013",
    debtorEmail: "supplychain@dermaglow.co.in",
    poAndArtworkRef:
      "MSA & Mould Development Agreement dated 10 March 2026 | First-Article Inspection (FAI) Neck-Finish Sign-Off",
    readyForDispatchDate: "05 August 2026",
    invoiceAndEwaySchedule:
      "Inv. APB/26-27/0612 (₹8,90,000 | E-Way 271440219088) & Inv. APB/26-27/0705 (₹6,40,000 | E-Way 271440998144)",
    unliftedStockSchedule:
      "1,10,000 Nos. Custom-Embossed 250ml Amber PET Shampoo Bottles + Matching Flip-Top Closures (Logo Embossed on Shoulder) — Packed in 440 Polybags",
    cylinderOrMouldSchedule:
      "1 x 4-Cavity Custom CNC Aluminum Blow-Mould + 1 x Preform Neck-Ring Set (Asset ID: MLD-DG-250ML-04)",
    overdueInvoiceAmount: 1530000,
    unliftedStockValue: 594000,
    monthlyGodownRent: 32000,
    storageMonths: 3,
    cylinderMouldDues: 245000,
    scrapCreditEstimate: 22000,
    creditDays: 30,
    interestRate: 19.5,
    enableSection44GodownRent: true,
    enable15DayLiftAndScrap: true,
    enableCylinderMouldLien: true,
    enableMsmed43Bh: true,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/IND22/RIGID/2026-619",
    noticeDate: "19 November 2026",
  },
  {
    id: "paper-mill-reel-ledger",
    label: "Kraft / Duplex Paper Mill Overdue Reel Ledger + s.42 Bar",
    badge: "Paper Mill / Reels",
    creditorName: "Ganga Kraft & Duplex Paper Mills Limited",
    creditorGSTIN: "09AABCG7219R1Z1",
    creditorUdyam: "UDYAM-UP-54-0018290",
    creditorAddress: "Km 8, Bhopa Road Industrial Zone, Muzaffarnagar, Uttar Pradesh - 251001",
    creditorEmail: "recovery@gangakraftmills.in",
    debtorName: "Metro Box & Carton Converters Private Limited",
    debtorSignatory: "Mr. Rajesh Agarwal (Managing Director)",
    debtorGSTIN: "07AABCM4482L1Z7",
    debtorAddress: "B-94, Bawana Industrial Area Sector 3, New Delhi - 110039",
    debtorEmail: "accounts@metroboxconverters.in",
    poAndArtworkRef:
      "Mill Sales Contract GK/2026/092 | Mill Test Certificate (MTC: 180GSM / 20BF / Cobb60 <=35) & Weighbridge Slips",
    readyForDispatchDate: "12 September 2026",
    invoiceAndEwaySchedule:
      "Inv. GKM/26-27/1901 (₹11,40,000 | E-Way 391882011245), GKM/26-27/2044 (₹9,85,000 | E-Way 391882448902) & GKM/26-27/2190 (₹8,75,000 | E-Way 391882990311)",
    unliftedStockSchedule:
      "14 MT Custom-Deckle Slit Kraft Paper Reels (Deckle 54.5 inch, 180 GSM, 22 BF — Non-Standard Buyer Spec, Reels #GK-8841 to GK-8862)",
    cylinderOrMouldSchedule:
      "Not Applicable (Mill Reel Ledger — Retaining Lien on Unlifted Custom-Deckle Reels under Sale of Goods Act s.47)",
    overdueInvoiceAmount: 3000000,
    unliftedStockValue: 532000,
    monthlyGodownRent: 28000,
    storageMonths: 2,
    cylinderMouldDues: 0,
    scrapCreditEstimate: 84000,
    creditDays: 30,
    interestRate: 19.5,
    enableSection44GodownRent: true,
    enable15DayLiftAndScrap: true,
    enableCylinderMouldLien: false,
    enableMsmed43Bh: true,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/IND22/MILL/2026-733",
    noticeDate: "19 November 2026",
  },
];

function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(amount) ? amount : 0);
}

export default function PackagingNoticeWorkspace() {
  const [form, setForm] = useState<PackagingPreset>(PRESETS[0]);
  const [copied, setCopied] = useState(false);

  const accruedGodownRent = useMemo(() => {
    if (!form.enableSection44GodownRent) return 0;
    return (Number(form.monthlyGodownRent) || 0) * (Number(form.storageMonths) || 0);
  }, [form.enableSection44GodownRent, form.monthlyGodownRent, form.storageMonths]);

  const totalGrossClaim = useMemo(() => {
    const overdue = Number(form.overdueInvoiceAmount) || 0;
    const unlifted = Number(form.unliftedStockValue) || 0;
    const cyl = form.enableCylinderMouldLien ? Number(form.cylinderMouldDues) || 0 : 0;
    return overdue + unlifted + accruedGodownRent + cyl;
  }, [
    form.overdueInvoiceAmount,
    form.unliftedStockValue,
    accruedGodownRent,
    form.cylinderMouldDues,
    form.enableCylinderMouldLien,
  ]);

  const netClaimAfterScrapCredit = useMemo(() => {
    const scrap = form.enable15DayLiftAndScrap ? Number(form.scrapCreditEstimate) || 0 : 0;
    return Math.max(0, totalGrossClaim - scrap);
  }, [totalGrossClaim, form.enable15DayLiftAndScrap, form.scrapCreditEstimate]);

  const applyPreset = (presetId: string) => {
    const found = PRESETS.find((p) => p.id === presetId);
    if (found) {
      setForm({ ...found });
      setCopied(false);
    }
  };

  const updateField = <K extends keyof PackagingPreset>(key: K, value: PackagingPreset[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setCopied(false);
  };

  const generatedNoticeText = useMemo(() => {
    const lines: string[] = [
      "BY REGISTERED POST A.D. / SPEED POST / OFFICIAL EMAIL / WHATSAPP",
      `Ref. No.: ${form.noticeRef}`,
      `Date: ${form.noticeDate}`,
      "",
      "COMPOSITE STATUTORY LEGAL NOTICE: OVERDUE PACKAGING INVOICE DEMAND, 15-DAY NOTICE TO LIFT CUSTOM-PRINTED STOCK, SECTION 44 GODOWN RENT & CYLINDER/MOULD LIEN",
      "",
      "To,",
      `1. ${form.debtorName} (Buyer / Noticee Company)`,
      `   Kind Attn.: ${form.debtorSignatory} | GSTIN: ${form.debtorGSTIN}`,
      `   Registered / Corporate Address: ${form.debtorAddress}`,
      `   Official Email: ${form.debtorEmail}`,
      "",
      `Subject: Final Statutory Notice for (i) Payment of Overdue Packaging Invoices of ${formatINR(
        form.overdueInvoiceAmount
      )}, (ii) 15-Day Notice to Lift Custom-Printed WIP/FG Inventory Worth ${formatINR(
        form.unliftedStockValue
      )} under Sections 44 & 55 of the Sale of Goods Act, 1930, (iii) Godown Storage Rent (${formatINR(
        accruedGodownRent
      )}), and (iv) Intimation of Statutory/Contractual Lien & MSMED s.16 / IT Act s.43B(h) Consequences.`,
      "",
      "Sir / Madam,",
      "",
      `Under instructions from and on behalf of my Client, ${form.creditorName} (GSTIN: ${
        form.creditorGSTIN
      }${
        form.creditorUdyam ? ` | Udyam Reg.: ${form.creditorUdyam}` : ""
      }), having its manufacturing plant and office at ${
        form.creditorAddress
      } (hereinafter referred to as "my Client"), I hereby serve upon you the following Legal Notice:`,
      "",
      `1. COMMERCIAL ORDERS, ARTWORK APPROVAL & ZERO-SALVAGE SPECIFICATION: Pursuant to ${form.poAndArtworkRef}, my Client manufactured bespoke packaging/material strictly to your proprietary brand logo, artwork, GSM/BF tolerance, and statutory packaging specifications. Because the goods bear your exclusive trademark/artwork or bespoke deckle specifications, they carry ZERO commercial resale value in the open market and cannot legally be sold to third parties without infringing Section 29 of the Trade Marks Act, 1999.`,
      "",
      `2. SCHEDULE OF OVERDUE SUPPLIED INVOICES & E-WAY BILLS (ANNEXURE-A): Against material already manufactured, dispatched, and accepted by you without any contemporaneous joint lab/QC rejection under Section 42 of the Sale of Goods Act, 1930, the following bills remain overdue beyond the agreed ${form.creditDays}-day credit window: ${form.invoiceAndEwaySchedule}. Total Overdue Dispatched Ledger: ${formatINR(
        form.overdueInvoiceAmount
      )}. All GST Tax Invoices, E-Way Bills, LRs, Artwork Approval emails, and QC COAs are preserved with a Section 63 BSA 2023 electronic evidence certificate.`,
      "",
      `3. UNLIFTED CUSTOM-PRINTED WIP/FG INVENTORY & SECTION 55 PRICE LIABILITY (ANNEXURE-B): In addition to dispatched invoices, my Client completed production of your balance confirmed order and issued Ready-for-Dispatch intimation on ${form.readyForDispatchDate}. The following dedicated stock remains unlifted in my Client's factory warehouse solely due to your wrongful refusal/neglect to issue dispatch schedules: ${form.unliftedStockSchedule}. Contract Value of Unlifted Stock: ${formatINR(
        form.unliftedStockValue
      )}. Under Sections 23, 55, and 56 of the Sale of Goods Act, 1930 read with Section 73 of the Indian Contract Act, 1872, property/appropriation in unconditionally manufactured custom goods entitles my Client to recover 100% of the contract price plus incidental losses.`,
    ];

    let clauseNum = 4;

    if (form.enableSection44GodownRent) {
      lines.push(
        "",
        `${clauseNum}. STATUTORY GODOWN STORAGE RENT & CARE CHARGES (SALE OF GOODS ACT SECTION 44): Under Section 44 of the Sale of Goods Act, 1930, where a seller is ready and willing to deliver goods and requests the buyer to take delivery, and the buyer neglects or refuses to lift them within a reasonable time, the buyer is statutorily liable for (a) any loss occasioned by such neglect/refusal, and (b) a reasonable charge for the care and custody of the goods. Your abandoned inventory has blocked valuable factory racking since ${form.readyForDispatchDate}. Accordingly, you are liable for godown holding & care charges at ${formatINR(
          form.monthlyGodownRent
        )}/month (${form.storageMonths} months accrued = ${formatINR(
          accruedGodownRent
        )} till date, plus continuing monthly rent until physical lift or disposal).`
      );
      clauseNum++;
    }

    if (form.enable15DayLiftAndScrap) {
      lines.push(
        "",
        `${clauseNum}. MANDATORY 15-DAY FINAL NOTICE TO LIFT STOCK OR FACE WITNESS-RECORDED SHREDDING / SCRAP DISPOSAL: You are hereby granted a final non-extendable window of FIFTEEN (15) DAYS from receipt of this notice to remit all overdue dues and lift the custom-printed Annexure-B stock from my Client's godown. Failing dispatch clearance within 15 days, my Client shall be constrained—strictly to mitigate ongoing godown blockage and strictly in compliance with trademark non-diversion norms—to conduct videographed shredding/pulping of the branded packaging through an authorized recycler, credit only the net realized scrap value (currently estimated at ${formatINR(
          form.scrapCreditEstimate
        )}) to your ledger, and institute recovery proceedings for the entire net shortfall of ${formatINR(
          netClaimAfterScrapCredit
        )} plus interest and legal costs.`
      );
      clauseNum++;
    }

    if (form.enableCylinderMouldLien) {
      lines.push(
        "",
        `${clauseNum}. INTIMATION OF LIEN OVER ROTOGRAVURE CYLINDERS / FLEXO PLATES / DIES / BLOW-MOULDS (ANNEXURE-C): Take notice that my Client holds physical custody of ${form.cylinderOrMouldSchedule}, against which tooling/development and unpaid ledger exposure of ${formatINR(
          form.cylinderMouldDues
        )} (plus overarching invoice arrears) remains outstanding. Invoking contractual general-lien terms read with Sections 170–171 of the Indian Contract Act, 1872 and unpaid seller rights under Section 47 of the Sale of Goods Act, 1930, my Client hereby exercises a lawful lien over the said cylinders/plates/dies/moulds and shall NOT release or hand over the tooling until 100% of the total consolidated ledger, godown rent, and statutory interest is realized.`
      );
      clauseNum++;
    }

    if (form.enableMsmed43Bh) {
      lines.push(
        "",
        `${clauseNum}. MSMED ACT s.15–18 (3x RBI COMPOUND INTEREST) & INCOME TAX SECTION 43B(h) DISALLOWANCE WARNING: My Client is a registered Micro/Small Manufacturing Enterprise (${form.creditorUdyam}). Under Section 16 of the MSMED Act, 2006, your delay beyond the statutory cap attracts mandatory compound interest with monthly rests at THREE TIMES (3x) the RBI Bank Rate (currently ~${form.interestRate}% p.a. compounded monthly), recoverable through MSEFC Conciliation & Arbitration under Section 18. Furthermore, under Section 43B(h) of the Income-tax Act, 1961, any unpaid MSME packaging purchase balance remaining unpaid past the statutory 15/45-day deadline across financial year-end shall be disallowed as a deductible business expense in your Tax Audit (Form 3CD Clause 22), resulting in immediate 25%–30% corporate tax liability plus interest.`
      );
      clauseNum++;
    }

    lines.push(
      "",
      `${clauseNum}. CONSOLIDATED FINAL DEMAND (15 DAYS): You are hereby called upon within FIFTEEN (15) DAYS of receipt of this notice to:`,
      `   (a) Remit ${formatINR(totalGrossClaim)} (Overdue Invoices ${formatINR(
        form.overdueInvoiceAmount
      )} + Unlifted Stock ${formatINR(form.unliftedStockValue)}${
        form.enableSection44GodownRent ? ` + s.44 Godown Rent ${formatINR(accruedGodownRent)}` : ""
      }${
        form.enableCylinderMouldLien && form.cylinderMouldDues > 0
          ? ` + Cylinder/Mould Dues ${formatINR(form.cylinderMouldDues)}`
          : ""
      }) together with statutory MSMED s.16 / contractual interest; and`,
      `   (b) Issue written dispatch instructions and lift all Annexure-B custom inventory against full payment.`,
      "",
      `Failing compliance within 15 days, my Client has strict instructions to initiate (i) MSME Samadhaan / MSEFC reference under Section 18 MSMED Act, (ii) Commercial Suit / Order XXXVII CPC summary recovery for full price + Section 44 storage damages, (iii) witness-recorded scrap destruction of unlifted branded stock after deducting salvage credit (leaving net claim of ${formatINR(
        netClaimAfterScrapCredit
      )} + interest), and (iv) NI Act Section 138 / IBC Section 8 proceedings where applicable, entirely at your risk as to costs and consequences.`,
      "",
      "A copy of this notice is retained in my office for court and statutory production.",
      "",
      "Yours faithfully,",
      "",
      `${form.advocateName}`,
      `Advocate (Enrolment No.: ${form.advocateEnrolment})`,
      `${form.advocateOffice}`,
      `Counsel for ${form.creditorName} (${form.creditorEmail})`
    );

    return lines.join("\n");
  }, [form, accruedGodownRent, totalGrossClaim, netClaimAfterScrapCredit]);

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
              Interactive Packaging Notice &amp; s.44 Godown Rent Workspace
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-white">
              Interactive Packaging Invoice, Stock-Lifting &amp; Cylinder Lien Builder
            </h2>
          </div>
          <div className="bg-white/10 border border-white/15 rounded-xl px-4 py-2 text-right">
            <span className="block text-[10px] uppercase tracking-wider text-slate-300">
              Total Consolidated Demand (Gross)
            </span>
            <span className="text-base sm:text-lg font-black text-emerald-400">
              {formatINR(totalGrossClaim)}
            </span>
            {form.enableSection44GodownRent && (
              <span className="block text-[10px] text-amber-300">
                Includes {formatINR(accruedGodownRent)} s.44 Godown Rent
              </span>
            )}
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
              <span className="text-[11px] font-bold text-slate-700 uppercase">
                Packaging Unit / Mill Name
              </span>
              <input
                type="text"
                value={form.creditorName}
                onChange={(e) => updateField("creditorName", e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-[11px] font-bold text-slate-700 uppercase">
                Udyam Registration No.
              </span>
              <input
                type="text"
                value={form.creditorUdyam}
                onChange={(e) => updateField("creditorUdyam", e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="block">
              <span className="text-[11px] font-bold text-slate-700 uppercase">
                Defaulting Buyer / Brand
              </span>
              <input
                type="text"
                value={form.debtorName}
                onChange={(e) => updateField("debtorName", e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-[11px] font-bold text-slate-700 uppercase">
                Ready-for-Dispatch Date
              </span>
              <input
                type="text"
                value={form.readyForDispatchDate}
                onChange={(e) => updateField("readyForDispatchDate", e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-[11px] font-bold text-slate-700 uppercase">
              Overdue Invoice + E-Way Bill Schedule (Annexure-A)
            </span>
            <textarea
              rows={2}
              value={form.invoiceAndEwaySchedule}
              onChange={(e) => updateField("invoiceAndEwaySchedule", e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
            />
          </label>

          <label className="block">
            <span className="text-[11px] font-bold text-slate-700 uppercase">
              Custom Branded Unlifted WIP / FG Table (Annexure-B)
            </span>
            <textarea
              rows={2}
              value={form.unliftedStockSchedule}
              onChange={(e) => updateField("unliftedStockSchedule", e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
            />
          </label>

          <label className="block">
            <span className="text-[11px] font-bold text-slate-700 uppercase">
              Rotogravure Cylinders / Dies / Blow-Mould Lien (Annexure-C)
            </span>
            <textarea
              rows={2}
              value={form.cylinderOrMouldSchedule}
              onChange={(e) => updateField("cylinderOrMouldSchedule", e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
            />
          </label>

          {/* Section 44 Godown Rent & Financial Ledger Strip */}
          <div className="p-3 rounded-xl bg-red-50/70 border border-red-200 space-y-2.5">
            <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626]">
              Claim Ledger &amp; Sale of Goods Act s.44 Godown Rent Calculator
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              <label className="block">
                <span className="text-[10px] font-semibold text-slate-700">Overdue Invoices (₹)</span>
                <input
                  type="number"
                  value={form.overdueInvoiceAmount}
                  onChange={(e) => updateField("overdueInvoiceAmount", Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border border-red-200 bg-white px-2.5 py-1.5 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="text-[10px] font-semibold text-slate-700">Unlifted Stock (₹)</span>
                <input
                  type="number"
                  value={form.unliftedStockValue}
                  onChange={(e) => updateField("unliftedStockValue", Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border border-red-200 bg-white px-2.5 py-1.5 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="text-[10px] font-semibold text-slate-700">Cylinder / Mould (₹)</span>
                <input
                  type="number"
                  value={form.cylinderMouldDues}
                  onChange={(e) => updateField("cylinderMouldDues", Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border border-red-200 bg-white px-2.5 py-1.5 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="text-[10px] font-semibold text-slate-700">Monthly Rent (₹)</span>
                <input
                  type="number"
                  value={form.monthlyGodownRent}
                  onChange={(e) => updateField("monthlyGodownRent", Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border border-red-200 bg-white px-2.5 py-1.5 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="text-[10px] font-semibold text-slate-700">Storage Months</span>
                <input
                  type="number"
                  value={form.storageMonths}
                  onChange={(e) => updateField("storageMonths", Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border border-red-200 bg-white px-2.5 py-1.5 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="text-[10px] font-semibold text-slate-700">Scrap Credit (₹)</span>
                <input
                  type="number"
                  value={form.scrapCreditEstimate}
                  onChange={(e) => updateField("scrapCreditEstimate", Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border border-red-200 bg-white px-2.5 py-1.5 text-xs text-slate-900 focus:border-[#DC2626] focus:outline-none"
                />
              </label>
            </div>
          </div>

          {/* Statutory Clause Toggles */}
          <div className="space-y-2 pt-1">
            <span className="block text-[11px] font-bold text-slate-700 uppercase">
              Active Statutory Clauses
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <label className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.enableSection44GodownRent}
                  onChange={(e) => updateField("enableSection44GodownRent", e.target.checked)}
                  className="accent-[#DC2626]"
                />
                <span className="font-semibold text-slate-800">s.44 Godown Rent</span>
              </label>
              <label className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.enable15DayLiftAndScrap}
                  onChange={(e) => updateField("enable15DayLiftAndScrap", e.target.checked)}
                  className="accent-[#DC2626]"
                />
                <span className="font-semibold text-slate-800">15-Day Lift / Scrap</span>
              </label>
              <label className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.enableCylinderMouldLien}
                  onChange={(e) => updateField("enableCylinderMouldLien", e.target.checked)}
                  className="accent-[#DC2626]"
                />
                <span className="font-semibold text-slate-800">Cylinder / Mould Lien</span>
              </label>
              <label className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.enableMsmed43Bh}
                  onChange={(e) => updateField("enableMsmed43Bh", e.target.checked)}
                  className="accent-[#DC2626]"
                />
                <span className="font-semibold text-slate-800">MSMED s.16 &amp; s.43B(h)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right: Live Statutory Notice Preview */}
        <div className="xl:col-span-7 p-5 sm:p-6 flex flex-col">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Live Statutory Draft ({form.noticeRef})
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
                Download Word (.doc)
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

          <pre className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 text-[11px] sm:text-xs font-mono text-slate-800 whitespace-pre-wrap leading-relaxed max-h-[540px] overflow-y-auto">
            {generatedNoticeText}
          </pre>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
            <span>
              Net Post-Scrap Recovery Exposure: <strong className="text-slate-800">{formatINR(netClaimAfterScrapCredit)}</strong> + MSMED s.16 Interest
            </span>
            <Link href="/user/new-recovery" className="text-[#DC2626] font-bold hover:underline">
              Serve on Advocate Letterhead &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
