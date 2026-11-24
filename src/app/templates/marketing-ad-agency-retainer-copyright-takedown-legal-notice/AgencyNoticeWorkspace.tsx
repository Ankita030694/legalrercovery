"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

interface AgencyPreset {
  id: string;
  label: string;
  badge: string;
  agencyName: string;
  agencyGSTIN: string;
  agencyAddress: string;
  agencyEmail: string;
  agencyUdyam: string;
  clientBrand: string;
  clientLegalEntity: string;
  clientSignatory: string;
  clientGSTIN: string;
  clientAddress: string;
  clientEmail: string;
  agreementType: string;
  agreementDate: string;
  releaseOrderRef: string;
  creativeAssets: string;
  adPlatforms: string;
  retainerPrincipal: number;
  adSpendPrincipal: number;
  invoiceNumbers: string;
  invoiceDateRange: string;
  creditDays: number;
  interestRate: number;
  advocateName: string;
  advocateEnrolment: string;
  advocateOffice: string;
  noticeRef: string;
  noticeDate: string;
}

const PRESETS: AgencyPreset[] = [
  {
    id: "performance-digital-retainer-adspend",
    label: "Digital Performance Marketing Agency (Unpaid Retainer + Meta/Google Ad-Spend)",
    badge: "Retainer + Ad-Spend Default",
    agencyName: "Vortex Growth Media Solutions Private Limited",
    agencyGSTIN: "27AABCV8912K1ZQ",
    agencyAddress: "602, Apex Signature Towers, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra - 400051",
    agencyEmail: "finance@vortexgrowth.in",
    agencyUdyam: "UDYAM-MH-19-0091823",
    clientBrand: "AuraLifestyle Direct",
    clientLegalEntity: "Aura Apparel & Footwear Retail Private Limited",
    clientSignatory: "Mr. Kunal Singhania (Director & CEO) and Ms. Natasha Verma (Chief Marketing Officer)",
    clientGSTIN: "07AAHCA9923N1ZV",
    clientAddress: "Plot 45, Okhla Industrial Area Phase-III, New Delhi - 110020",
    clientEmail: "kunal@auralifestyle.in, accounts@auralifestyle.in",
    agreementType: "Digital Marketing & Performance Media Retainer Agreement & Statement of Work",
    agreementDate: "15 April 2026",
    releaseOrderRef: "RO-AURA-2026/04 to RO-AURA-2026/06 (Campaign: Summer Fest 2026)",
    creativeAssets: "42 Reels/Shorts MP4 Video Edits, 86 Static & Carousel Banners, Custom Shopify Landing Page UI/UX, Meta Ad Copy Variations, and Vector SVG Brand Assets",
    adPlatforms: "Meta Ads Manager (Account ID: 49201948102), Google Ads (CID: 819-204-1192), YouTube & Brand Website (Shopify)",
    retainerPrincipal: 450000,
    adSpendPrincipal: 850000,
    invoiceNumbers: "VGM/26-27/041, VGM/26-27/058 & VGM/26-27/072",
    invoiceDateRange: "01 June 2026 to 31 August 2026",
    creditDays: 15,
    interestRate: 21.75, // 3x RBI Bank Rate under MSMED s.16
    advocateName: "Rohit R. Agnihotri",
    advocateEnrolment: "MAH/4102/2013",
    advocateOffice: "Chambers of Agnihotri & Partners, 304, Fort Chambers, Tamarind Lane, Fort, Mumbai - 400001",
    noticeRef: "LR/B2B/ADV/2026/156",
    noticeDate: "17 November 2026",
  },
  {
    id: "creative-branding-campaign",
    label: "Creative Studio & Brand Strategy (Rebranding, Film Commercial & Packaging IP)",
    badge: "Creative License Revocation",
    agencyName: "Prism Creative Labs LLP",
    agencyGSTIN: "29AAGCP4412H1Z5",
    agencyAddress: "4th Floor, Indiranagar 100ft Road, Bengaluru, Karnataka - 560038",
    agencyEmail: "legal@prismcreativelabs.com",
    agencyUdyam: "UDYAM-KR-03-0044192",
    clientBrand: "NutriPulse Organics",
    clientLegalEntity: "NutriPulse Wellness Products Private Limited",
    clientSignatory: "Mr. Harshavardhan Reddy (Managing Director)",
    clientGSTIN: "36AABCN8812K1ZT",
    clientAddress: "Road No. 36, Jubilee Hills, Hyderabad, Telangana - 500033",
    clientEmail: "harsha@nutripulse.in, finance@nutripulse.in",
    agreementType: "Master Creative Services Agreement & Packaging Brand Identity SOW",
    agreementDate: "10 February 2026",
    releaseOrderRef: "PCL-SOW-2026-08 (Comprehensive Rebrand & 3D Master Packaging Suite)",
    creativeAssets: "Master Brand Logo Design (Vector AI/EPS), 14 Product Packaging Dielline Files, 3D CGI Render Files, Brand Typography Guidelines, and 3x 30-Second Brand Film Master Files",
    adPlatforms: "Brand Packaging, Amazon Brand Store, Reliance Retail Point of Sale, YouTube Channel, and Meta Ad Library",
    retainerPrincipal: 1250000,
    adSpendPrincipal: 0,
    invoiceNumbers: "PCL/26-27/019 & PCL/26-27/027",
    invoiceDateRange: "15 May 2026 to 15 July 2026",
    creditDays: 30,
    interestRate: 21.75,
    advocateName: "Sneha Ramachandran",
    advocateEnrolment: "KAR/1982/2015",
    advocateOffice: "Lex Associates, 12, Infantry Road, Shivaji Nagar, Bengaluru - 560001",
    noticeRef: "LR/B2B/ADV/2026/184",
    noticeDate: "17 November 2026",
  },
  {
    id: "media-buying-ooh-event",
    label: "Media Buying & Event Production Agency (OOH Billboards + Event Production Balance)",
    badge: "OOH & Event Default",
    agencyName: "Apex Horizon Media & Events Private Limited",
    agencyGSTIN: "07AAHCA3129L1Z8",
    agencyAddress: "Building 10B, DLF Cyber City, Sector 24, Gurugram, Haryana - 122002",
    agencyEmail: "receivables@apexhorizonmedia.com",
    agencyUdyam: "UDYAM-HR-04-0029184",
    clientBrand: "Nexus Fintech Global",
    clientLegalEntity: "Nexus Technologies & Payments Solutions India Ltd",
    clientSignatory: "Mr. Siddharth Mehra (VP Marketing) and Mr. Alok Tandon (Director)",
    clientGSTIN: "06AABCN1289P1ZN",
    clientAddress: "Golf Course Extension Road, Sector 62, Gurugram, Haryana - 122102",
    clientEmail: "siddharth.m@nexusfintech.com, ap@nexusfintech.com",
    agreementType: "Media Release Order & Annual Fintech Summit Production Mandate",
    agreementDate: "05 January 2026",
    releaseOrderRef: "RO-NEXUS-OOH-03 & EVENT-SUMMIT-2026-FINAL",
    creativeAssets: "OOH Hoarding Artwork, Event Stage 3D Modular Designs, Video Keynote Visuals, Corporate Brochures, and Event Promotional Collateral",
    adPlatforms: "Prime Billboards (Delhi-NCR & Mumbai Airport Road), YouTube Event Stream, LinkedIn Sponsored Content",
    retainerPrincipal: 600000,
    adSpendPrincipal: 1400000,
    invoiceNumbers: "AHM/26-27/102 & AHM/26-27/119",
    invoiceDateRange: "20 June 2026 to 10 August 2026",
    creditDays: 15,
    interestRate: 21.75,
    advocateName: "Vikramjit Singh Grover",
    advocateEnrolment: "D/1489/2011",
    advocateOffice: "Chambers 28, Bar Council Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/B2B/ADV/2026/209",
    noticeDate: "17 November 2026",
  },
];

export default function AgencyNoticeWorkspace() {
  const [activePresetId, setActivePresetId] = useState<string>("performance-digital-retainer-adspend");
  const [formData, setFormData] = useState<AgencyPreset>(PRESETS[0]);
  const [copySuccess, setCopySuccess] = useState<boolean>(false);
  const [isCopiedMarkdown, setIsCopiedMarkdown] = useState<boolean>(false);

  const handlePresetChange = (presetId: string) => {
    const selected = PRESETS.find((p) => p.id === presetId);
    if (selected) {
      setActivePresetId(presetId);
      setFormData({ ...selected });
    }
  };

  const handleFieldChange = (field: keyof AgencyPreset, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Calculations
  const totalPrincipal = useMemo(() => {
    return Number(formData.retainerPrincipal || 0) + Number(formData.adSpendPrincipal || 0);
  }, [formData.retainerPrincipal, formData.adSpendPrincipal]);

  // Rough calculation of 90 days statutory interest @ 3x RBI rate (~21.75% per annum compounded monthly)
  const estimatedInterest = useMemo(() => {
    const ratePerMonth = (formData.interestRate || 21.75) / 100 / 12;
    // Compounded over 3 months approx
    const compounded = totalPrincipal * (Math.pow(1 + ratePerMonth, 3) - 1);
    return Math.round(compounded);
  }, [totalPrincipal, formData.interestRate]);

  const grandTotal = useMemo(() => {
    return totalPrincipal + estimatedInterest;
  }, [totalPrincipal, estimatedInterest]);

  // Notice Text Generator
  const noticeDocumentText = useMemo(() => {
    return `LEGAL DEMAND NOTICE & STATUTORY NOTICE OF COPYRIGHT LICENSE REVOCATION
CUM 7-DAY NOTICE BEFORE FILING INTERMEDIARY TAKEDOWN NOTICES (META, GOOGLE & WEB)
UNDER SECTIONS 19, 30A & 51 OF THE COPYRIGHT ACT, 1957,
RULE 3(1)(d) OF THE INFORMATION TECHNOLOGY (INTERMEDIARY GUIDELINES AND DIGITAL MEDIA ETHICS CODE) RULES, 2021,
AND SECTIONS 15, 16 & 17 OF THE MICRO, SMALL AND MEDIUM ENTERPRISES DEVELOPMENT (MSMED) ACT, 2006.

DISPATCHED VIA REGISTERED SPEED POST WITH A.D. & TRANSMITTED VIA OFFICIALLY RECORDED ELECTRONIC MAIL WITH TIMESTAMP AUDIT TRAIL UNDER SECTION 63 OF THE BHARATIYA SAKSHYA ADHINIYAM, 2023.

Date: ${formData.noticeDate}
Notice Reference Number: ${formData.noticeRef}

TO,
1. ${formData.clientLegalEntity} (Operating Brand: "${formData.clientBrand}")
   Through its Managing Director / Chief Executive Officer / Authorized Signatories
   Office Address: ${formData.clientAddress}
   Registered GSTIN: ${formData.clientGSTIN}
   Official Corporate Email: ${formData.clientEmail}

2. ${formData.clientSignatory}
   ${formData.clientLegalEntity}
   Office Address: ${formData.clientAddress}

FROM,
${formData.advocateName}, Advocate
Enrolment No.: ${formData.advocateEnrolment}
Office: ${formData.advocateOffice}

ACTING UNDER INSTRUCTIONS FOR AND ON BEHALF OF:
${formData.agencyName}
Office Address: ${formData.agencyAddress}
GSTIN: ${formData.agencyGSTIN}
MSME / Udyam Registration No.: ${formData.agencyUdyam}
(Hereinafter referred to as "My Client" / "The Agency").

SUBJECT: 
DEMAND FOR IMMEDIATE LIQUIDATION OF OVERDUE PROFESSIONAL RETAINER FEES OF ₹${formData.retainerPrincipal.toLocaleString("en-IN")}/- AND DISBURSED AD-SPEND REIMBURSEMENT OF ₹${formData.adSpendPrincipal.toLocaleString("en-IN")}/- (AGGREGATING TO PRINCIPAL OUTSTANDING OF ₹${totalPrincipal.toLocaleString("en-IN")}/- PLUS ACCRUED COMPOUND INTEREST UNDER SECTION 16 MSMED ACT OF ₹${estimatedInterest.toLocaleString("en-IN")}/- TOTALING ₹${grandTotal.toLocaleString("en-IN")}/-)
-- AND --
STATUTORY REVOCATION OF COPYRIGHT LICENSE UNDER SECTION 19(1) READ WITH SECTION 30A OF THE COPYRIGHT ACT, 1957 AND DEMAND TO CEASE & DESIST RUNNING CREATIVE ASSETS ON META, GOOGLE ADS, YOUTUBE & BRAND PROPERTIES WITHIN 7 DAYS FAILING WHICH STATUTORY INTERMEDIARY TAKEDOWN NOTICES SHALL BE SERVED DIRECTLY ON TECH PLATFORMS UNDER IT RULES 2021 AND COMMERCIAL INJUNCTION PROCEEDINGS FILED UNDER ORDER XXXIX CPC.

SIR / MADAM,

Under express instructions and on behalf of My Client, I hereby serve upon you this composite Legal Demand Notice and Statutory Notice of Copyright License Revocation:

1. THE CONTRACTUAL ENGAGEMENT & COMMERCIAL TERMS:
That My Client is an established marketing, advertising, and creative communications agency duly registered as a Micro/Small enterprise under the MSMED Act, 2006. Your company approached My Client and formally executed an agreement titled "${formData.agreementType}" dated ${formData.agreementDate}, read together with Release Orders / Statements of Work: ${formData.releaseOrderRef}. Under the terms agreed between the parties, My Client was engaged to conceive, script, design, execute, and deliver specialized creative works and manage digital advertising deployment for your brand "${formData.clientBrand}".

2. NATURE OF CREATIVE WORKS & RETENTION OF INTELLECTUAL PROPERTY:
That under the said engagement, My Client created specialized original literary, artistic, and cinematographic works within the meaning of Section 13 and Section 14 of the Copyright Act, 1957, including but not limited to:
"${formData.creativeAssets}".
It is an established canon of Indian Copyright Law, recognized under Section 19(1) of the Copyright Act, 1957 and affirmed by the Hon'ble Supreme Court of India in 'Manish Commercial v. N.N. Global' and High Court precedents, that:
(a) Copyright in specially commissioned creative assets and marketing material remains vested in the Author/Agency until and unless full and final valuable consideration has been paid by the client;
(b) Any license, whether express or implied, granted to you to broadcast, publish, display, or run digital advertisements using the said creative assets was strictly conditional upon the timely payment of agreed retainers and approved media spend disbursements.

3. LIABILITIES INCURRED: UNPAID RETAINERS & THIRD-PARTY AD-SPEND:
That My Client fully performed all deliverables, managed your ad accounts, drafted copy, rendered videos, and in good faith advanced / facilitated media spend on platforms including ${formData.adPlatforms}. In respect thereof, My Client raised valid GST invoices as follows:
- Invoice Numbers: ${formData.invoiceNumbers}
- Invoice Billing Periods: ${formData.invoiceDateRange}
- Principal Retainer / Creative Services Outstanding: ₹${formData.retainerPrincipal.toLocaleString("en-IN")}/-
- Third-Party Media Spend / Disbursed Ad-Spend Outstanding: ₹${formData.adSpendPrincipal.toLocaleString("en-IN")}/-
- Total Principal Receivable: ₹${totalPrincipal.toLocaleString("en-IN")}/-
Despite repeated written follow-ups, payment reminders, WhatsApp communications, and delivery of monthly performance logs, you have neglected and willfully refused to remit the said outstanding principal. Your contractual credit period of ${formData.creditDays} days has long expired.

4. BOGUS ROAS / PERFORMANCE EXCUSES AS AFTERTHOUGHT:
That any belated assertion of "low ROAS", "disputed campaign metrics", or "unsatisfactory lead quality" raised after publishing and utilizing the creatives constitutes an impermissible afterthought rejected by Indian Commercial Courts. Under Section 42 of the Sale of Goods Act and Section 8 of the Indian Contract Act, by actively publishing the creatives on Meta Ads Manager, Google Ads, and your commercial website, and driving commercial sales to your revenue pipeline, you have irrevocably accepted the works and are estopped from withholding contractually agreed fees.

5. STATUTORY REVOCATION OF COPYRIGHT LICENSE (SECTION 19 READ WITH SECTION 30A COPYRIGHT ACT):
Take formal notice that by reason of your total failure of consideration and fundamental repudiation of the contract, My Client HEREBY EXPLICITLY REVOKES, TERMINATES, AND CANCELS WITH IMMEDIATE EFFECT all licenses, permissions, and consents previously granted to you to use, publish, broadcast, reproduce, display, or derive commercial benefit from the creative assets, ad creatives, videos, landing pages, and designs created by My Client.
From the receipt of this notice:
(a) Any continued broadcast or hosting of the said assets on Meta Ads, Google Ads, YouTube, TikTok, Television, OOH billboards, or your web domain constitutes WILLFUL CIVIL AND CRIMINAL INFRINGEMENT under Section 51 read with Section 63 of the Copyright Act, 1957;
(b) Under Section 63 of the Copyright Act, knowing infringement of copyright carries imprisonment of not less than 6 months extending up to 3 years and fines up to ₹2,00,000/-;
(c) Under Section 64 of the Copyright Act, police authorities possess statutory powers to seize without warrant all infringing copies and media assets.

6. 7-DAY NOTICE BEFORE FILING INTERMEDIARY TAKEDOWN NOTICES:
You are hereby placed on a STRICT 7-DAY WARNING NOTICE. In the event the entire outstanding sum of ₹${grandTotal.toLocaleString("en-IN")}/- is not credited to My Client's bank account within 7 (seven) calendar days from receipt hereof:
(a) My Client shall immediately invoke Rule 3(1)(d) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 and Section 51(a)(ii) of the Copyright Act by lodging statutory IP Takedown Notices directly with the designated Grievance Officers of Meta Platforms Inc. (Facebook/Instagram), Google LLC (Google Ads/YouTube), and Shopify Inc.;
(b) Intermediaries under Indian law are statutorily mandated to disable public access to infringing ad campaigns and landing pages within 36 hours of receipt of notice of infringement;
(c) Consequently, your live ad campaigns, business manager assets, and promotional URLs will be abruptly suspended, causing irreparable disruption to your brand sales and enterprise goodwill, for which you alone shall be solely responsible.

7. URGENT COMMERCIAL INJUNCTION (DISPENSING SECTION 12A MEDIATION):
Take further notice that since this dispute involves active and continuing copyright infringement, My Client is legally entitled under the Supreme Court doctrine laid down in 'Patil Automation Pvt. Ltd. v. Rakheja Engineers' (2022) 10 SCC 1 to bypass the mandatory 3-month pre-institution mediation contemplated under Section 12A of the Commercial Courts Act, 2015. My Client shall forthwith approach the Hon'ble Commercial Court under Order XXXIX Rules 1 & 2 of the Code of Civil Procedure, 1908 praying for an urgent ex-parte ad-interim injunction restraining you, your distributors, and affiliates from utilizing the creative assets, together with an order for attachment of your corporate bank accounts before judgment under Order XXXVIII Rule 5 CPC.

8. STATUTORY MANDATE UNDER MSMED ACT, 2006:
As My Client is a registered MSME unit (Udyam: ${formData.agencyUdyam}), you are bound by Sections 15 and 16 of the MSMED Act, 2006. Under Section 16, failure to remit dues within 45 days attracts MANDATORY COMPOUND INTEREST with monthly rests at THREE TIMES THE BANK RATE notified by the Reserve Bank of India (currently computed @ ${formData.interestRate}% per annum), amounting as on date to ₹${estimatedInterest.toLocaleString("en-IN")}/-. Under Section 23 of the MSMED Act, this penal interest is inadmissible as a deductible business expense under the Income Tax Act, 1961. Furthermore, under Section 43B(h) of the Income Tax Act, 1961, your company faces total tax disallowance of the invoice amounts for the relevant assessment year.

9. FINAL DEMAND:
Under the premises aforesaid, you are hereby called upon to:
1. Pay to My Client within 7 (SEVEN) DAYS from the receipt of this notice the aggregate sum of ₹${grandTotal.toLocaleString("en-IN")}/- (comprising Principal Dues of ₹${totalPrincipal.toLocaleString("en-IN")}/- plus Statutory MSMED Compound Interest of ₹${estimatedInterest.toLocaleString("en-IN")}/-), along with ₹15,000/- towards the cost of drafting and serving this legal notice;
2. Immediately CEASE AND DESIST from broadcasting, running, hosting, or displaying any of the creative assets, videos, ad graphics, and landing pages on Meta, Google, YouTube, and digital properties until full payment is cleared.

PLEASE NOTE that if you fail to comply with the requisitions within the stipulated 7 days, My Client shall proceed without further reference to file Intermediary Takedown Notices with Meta/Google, initiate urgent Commercial Suit proceedings under Order XXXIX CPC, and lodge an application before the MSME Micro and Small Enterprises Facilitation Council (MSEFC) / National Company Law Tribunal (NCLT) for insolvency and recovery, entirely at your sole risk, cost, and consequences.

A copy of this notice is retained in my chamber records along with electronic logs and postal receipts for production before the competent Court of Law.

Yours faithfully,

${formData.advocateName}
Advocate, Enrolment No.: ${formData.advocateEnrolment}
${formData.advocateOffice}`;
  }, [formData, totalPrincipal, estimatedInterest, grandTotal]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(noticeDocumentText);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>Legal Notice - ${formData.noticeRef}</title>
          <style>
            body { font-family: 'Times New Roman', serif; font-size: 11pt; line-height: 1.5; color: #111; padding: 40px; margin: 0; }
            h1, h2 { text-align: center; font-size: 13pt; text-transform: uppercase; font-weight: bold; margin-bottom: 15px; }
            pre { white-space: pre-wrap; word-wrap: break-word; font-family: inherit; font-size: inherit; }
            @page { margin: 20mm; }
          </style>
        </head>
        <body>
          <pre>${noticeDocumentText}</pre>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <div id="interactive-workspace" className="scroll-mt-28 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-6 text-white shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-2">
              <span>Interactive Clause Generator</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Agency Dual-Weapon Notice & Clause Workspace
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Fill in your agency receivables, ad-spend outstandings, and creative assets to generate a real-time, advocate-grade legal demand that couples Section 16 MSMED interest with Copyright Section 19/51 license revocation.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrint}
              type="button"
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs font-bold text-slate-200 transition-all flex items-center gap-1.5"
            >
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print / Save PDF
            </button>
            <button
              onClick={copyToClipboard}
              type="button"
              className="px-4 py-2 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-xs font-bold text-white transition-all shadow-sm flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              </svg>
              {copySuccess ? "Copied to Clipboard!" : "Copy Notice Text"}
            </button>
          </div>
        </div>

        {/* Preset Selector Tabs */}
        <div className="mt-5 pt-4 border-t border-slate-700/60">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
            Load Pre-Configured Industry Preset:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => handlePresetChange(preset.id)}
                className={`text-left p-2.5 rounded-xl border text-xs transition-all ${
                  activePresetId === preset.id
                    ? "bg-[#DC2626]/20 border-[#DC2626] text-white font-bold ring-1 ring-[#DC2626]"
                    : "bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-700/70"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider bg-slate-900/80 text-red-400">
                    {preset.badge}
                  </span>
                </div>
                <div className="font-semibold truncate">{preset.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Editor & Live Preview Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* Form Controls Column (5 cols on xl) */}
        <div className="xl:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-5">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900">1. Notice Customization Fields</h3>
            <p className="text-xs text-slate-500">Edit fields to dynamically populate the legal notice preview.</p>
          </div>

          <div className="space-y-4 text-xs">
            {/* Agency Details */}
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-3">
              <span className="font-bold text-slate-900 block text-[11px] uppercase tracking-wider text-slate-700">
                A. Agency (Creditor) Details
              </span>
              <div>
                <label className="block text-slate-600 mb-1 font-medium">Agency Name</label>
                <input
                  type="text"
                  value={formData.agencyName}
                  onChange={(e) => handleFieldChange("agencyName", e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-600 mb-1 font-medium">Agency GSTIN</label>
                  <input
                    type="text"
                    value={formData.agencyGSTIN}
                    onChange={(e) => handleFieldChange("agencyGSTIN", e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs font-mono focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-1 font-medium">Udyam Registration</label>
                  <input
                    type="text"
                    value={formData.agencyUdyam}
                    onChange={(e) => handleFieldChange("agencyUdyam", e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs font-mono focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-600 mb-1 font-medium">Agency Address</label>
                <input
                  type="text"
                  value={formData.agencyAddress}
                  onChange={(e) => handleFieldChange("agencyAddress", e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
            </div>

            {/* Client Details */}
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-3">
              <span className="font-bold text-slate-900 block text-[11px] uppercase tracking-wider text-slate-700">
                B. Client Brand (Debtor) Details
              </span>
              <div>
                <label className="block text-slate-600 mb-1 font-medium">Client Legal Company Name</label>
                <input
                  type="text"
                  value={formData.clientLegalEntity}
                  onChange={(e) => handleFieldChange("clientLegalEntity", e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-600 mb-1 font-medium">Operating Brand Name</label>
                  <input
                    type="text"
                    value={formData.clientBrand}
                    onChange={(e) => handleFieldChange("clientBrand", e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-1 font-medium">Client GSTIN</label>
                  <input
                    type="text"
                    value={formData.clientGSTIN}
                    onChange={(e) => handleFieldChange("clientGSTIN", e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs font-mono focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-600 mb-1 font-medium">Authorized Signatories / Officers</label>
                <input
                  type="text"
                  value={formData.clientSignatory}
                  onChange={(e) => handleFieldChange("clientSignatory", e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-slate-600 mb-1 font-medium">Official Client Email(s)</label>
                <input
                  type="text"
                  value={formData.clientEmail}
                  onChange={(e) => handleFieldChange("clientEmail", e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
            </div>

            {/* Financials & Outstandings */}
            <div className="bg-red-50/50 p-3.5 rounded-xl border border-red-200/80 space-y-3">
              <span className="font-bold text-red-900 block text-[11px] uppercase tracking-wider">
                C. Financial Dues & Statutory Rate
              </span>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-700 mb-1 font-medium">Unpaid Retainer (₹)</label>
                  <input
                    type="number"
                    value={formData.retainerPrincipal}
                    onChange={(e) => handleFieldChange("retainerPrincipal", Number(e.target.value))}
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs font-mono font-bold focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 mb-1 font-medium">Disbursed Ad-Spend (₹)</label>
                  <input
                    type="number"
                    value={formData.adSpendPrincipal}
                    onChange={(e) => handleFieldChange("adSpendPrincipal", Number(e.target.value))}
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs font-mono font-bold focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-700 mb-1 font-medium">Invoice Numbers</label>
                  <input
                    type="text"
                    value={formData.invoiceNumbers}
                    onChange={(e) => handleFieldChange("invoiceNumbers", e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 mb-1 font-medium">MSMED Compound Rate (%)</label>
                  <input
                    type="number"
                    step="0.25"
                    value={formData.interestRate}
                    onChange={(e) => handleFieldChange("interestRate", Number(e.target.value))}
                    className="w-full p-2 border border-slate-300 rounded-lg text-xs font-mono focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>
            </div>

            {/* Creative IP & Takedown Hooks */}
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-3">
              <span className="font-bold text-slate-900 block text-[11px] uppercase tracking-wider text-slate-700">
                D. Creative Assets & Ad Channels
              </span>
              <div>
                <label className="block text-slate-600 mb-1 font-medium">Unpaid Creative Works / Deliverables</label>
                <textarea
                  rows={2}
                  value={formData.creativeAssets}
                  onChange={(e) => handleFieldChange("creativeAssets", e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-slate-600 mb-1 font-medium">Ad Accounts & Channels to Take Down</label>
                <input
                  type="text"
                  value={formData.adPlatforms}
                  onChange={(e) => handleFieldChange("adPlatforms", e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/user/new-recovery"
              className="block text-center w-full py-3 px-4 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold shadow-md transition-all"
            >
              Proceed with Fact Verification & Speed Post Service (₹999)
            </Link>
          </div>
        </div>

        {/* Live Preview Column (7 cols on xl) */}
        <div className="xl:col-span-7 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col h-[750px]">
          {/* Top Bar */}
          <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Live Legal Notice Preview
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-slate-400 font-mono">
                Ref: {formData.noticeRef}
              </span>
              <button
                onClick={copyToClipboard}
                type="button"
                className="text-[11px] px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700"
              >
                {copySuccess ? "Copied!" : "Quick Copy"}
              </button>
            </div>
          </div>

          {/* Real-time Ledger Ribbon */}
          <div className="bg-slate-100 border-b border-slate-200 px-5 py-2.5 grid grid-cols-3 gap-2 text-center text-xs">
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Principal Debt</span>
              <span className="font-mono font-bold text-slate-900">₹{totalPrincipal.toLocaleString("en-IN")}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">MSME Compound Int.</span>
              <span className="font-mono font-bold text-amber-700">+₹{estimatedInterest.toLocaleString("en-IN")}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Total Claimed</span>
              <span className="font-mono font-bold text-[#DC2626]">₹{grandTotal.toLocaleString("en-IN")}</span>
            </div>
          </div>

          {/* Legal Document Canvas */}
          <div className="p-6 overflow-y-auto font-serif text-[13px] leading-relaxed text-slate-900 bg-slate-50/50 flex-1 whitespace-pre-wrap select-text">
            {noticeDocumentText}
          </div>

          {/* Bottom Action Footer */}
          <div className="bg-white border-t border-slate-200 px-5 py-3 flex items-center justify-between text-xs">
            <span className="text-slate-500 text-[11px]">
              Statutory Format: Section 19/51 Copyright Act + Rule 3(1)(d) IT Rules 2021 + s.16 MSMED Act
            </span>
            <div className="flex gap-2">
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold"
              >
                Print Notice
              </button>
              <button
                onClick={copyToClipboard}
                className="px-3 py-1.5 rounded-lg bg-[#DC2626] text-white hover:bg-[#B91C1C] font-semibold"
              >
                {copySuccess ? "Copied!" : "Copy Full Notice"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
