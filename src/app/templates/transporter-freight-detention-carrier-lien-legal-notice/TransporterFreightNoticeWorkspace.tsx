"use client";

import React, { useState } from "react";

interface Annotation {
  marker: string;
  title: string;
  explanation: string;
  statuteRef: string;
}

interface TemplateVariant {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  annotations: Annotation[];
  generateText: (fields: FormFields) => string;
}

interface FormFields {
  advocateName: string;
  advocateCity: string;
  transporterName: string;
  transporterGstin: string;
  transporterAddress: string;
  shipperName: string;
  shipperGstin: string;
  shipperAddress: string;
  consigneeName: string;
  grNumber: string;
  grDate: string;
  vehicleNo: string;
  ewayBillNo: string;
  originHub: string;
  destHub: string;
  podDate: string;
  baseFreight: string;
  haltingDays: string;
  haltingRate: string;
  totalClaim: string;
  cureDays: string;
}

const DEFAULT_FIELDS: FormFields = {
  advocateName: "Anuj Anand Malik",
  advocateCity: "New Delhi",
  transporterName: "Apex Logistics & Fleet Lines Pvt. Ltd.",
  transporterGstin: "07AAACA1234B1Z5",
  transporterAddress: "Plot No. 42, Transport Nagar, GT Karnal Road, Delhi 110036",
  shipperName: "BluePeak Industrial Technologies Ltd.",
  shipperGstin: "27AAACB5678C1Z2",
  shipperAddress: "Industrial Area Phase II, Chakan, MIDC, Pune, Maharashtra 410501",
  consigneeName: "Apex Manufacturing Hub, Manesar, Haryana",
  grNumber: "APX-DEL-2026-8841",
  grDate: "14 October 2026",
  vehicleNo: "HR-55-AN-4819",
  ewayBillNo: "2418 9032 1145",
  originHub: "Chakan MIDC (Pune)",
  destHub: "IMT Manesar (Haryana)",
  podDate: "19 October 2026",
  baseFreight: "1,45,000",
  haltingDays: "4",
  haltingRate: "4,500",
  totalClaim: "1,63,000",
  cureDays: "7",
};

const TEMPLATES: TemplateVariant[] = [
  {
    id: "bilty-pod-freight-halting",
    title: "1. Overdue Bilty/POD Freight + GPS Halting Notice",
    subtitle: "Consignment note wise freight ledger with telematics-backed detention and 18% MSMED interest",
    badge: "Core Freight Recovery",
    annotations: [
      {
        marker: "①",
        title: "Carriage by Road Act 2007 Section 10 Statutory Consignment Contract",
        explanation:
          "Under Section 10 of the Carriage by Road Act, 2007, every common carrier shall issue a goods receipt (GR / Bilty). The goods receipt serves as prima facie evidence of the title to the goods and the contractual entitlement to freight upon tender of delivery.",
        statuteRef: "Carriage by Road Act, 2007 s.10 & Common Carriers Rules",
      },
      {
        marker: "②",
        title: "Clean Proof of Delivery (POD) Precludes Transit Damage Defenses",
        explanation:
          "Endorsement of delivery without demur or qualification on the physical or electronic POD creates an estoppel under Section 115 of the Indian Evidence Act (now Section 121 Bharatiya Sakshya Adhiniyam, 2023), confirming safe transit.",
        statuteRef: "BSA 2023 s.121 & Carriage by Road Act s.10(2)",
      },
      {
        marker: "③",
        title: "Telematics GPS Audit Trail for Vehicle Detention / Halting",
        explanation:
          "Geofencing time-stamps, ignition telemetry, and gate-entry security registers establish detention beyond the agreed 24-hour loading/unloading free window, qualifying halting charges as liquidated damages under Section 73 of the Contract Act.",
        statuteRef: "Indian Contract Act, 1872 s.73 & BSA 2023 s.63",
      },
      {
        marker: "④",
        title: "Preclusion of Unilateral Debit Notes under Raman Iron Foundry",
        explanation:
          "The Supreme Court in Union of India v. Raman Iron Foundry held that an unadjudicated claim for damages cannot be unilaterally set off against an admitted, crystallized debt. Shippers cannot withhold undisputed freight.",
        statuteRef: "AIR 1974 SC 1265 (Supreme Court of India)",
      },
      {
        marker: "⑤",
        title: "MSMED Act Section 16 Mandatory 3x RBI Bank Rate Interest",
        explanation:
          "Where the transport operator holds a valid Udyam Registration (NIC Code 49231 / 49232 / 52292), unpaid freight past the 45-day statutory limit triggers compound monthly interest at 3 times the RBI repo rate.",
        statuteRef: "MSMED Act, 2006 s.15 & s.16 & s.43B(h) Income Tax Act",
      },
      {
        marker: "⑥",
        title: "Order XXXVII CPC Liquidated Debt Summary Suit Escalation",
        explanation:
          "Freight backed by signed bilties, invoices, and clean PODs constitutes a debt or liquidated demand in money arising on an express contract, enabling summary suit under Order XXXVII of the Code of Civil Procedure without a protracted trial.",
        statuteRef: "Code of Civil Procedure, 1908 Order XXXVII Rule 1 & 2",
      },
    ],
    generateText: (f: FormFields) => `LEGAL NOTICE DEMANDING IMMEDIATE PAYMENT OF OVERDUE FREIGHT CHARGES, VEHICLE DETENTION / HALTING ARREARS AND ACCRUED STATUTORY INTEREST

DISPATCHED VIA REGISTERED POST WITH A.D., SPEED POST, AND ELECTRONIC TRANSMISSION (EMAIL & WHATSAPP) UNDER SECTION 63 BHARATIYA SAKSHYA ADHINIYAM, 2023

Date: [DATE OF SERVICE]
Place: ${f.advocateCity}

To,
1. ${f.shipperName}
   Through its Managing Director / Directors / Authorized Signatory
   Registered Office: ${f.shipperAddress}
   GSTIN: ${f.shipperGstin}
   Email: [billing@shippercompany.com / logistics@shippercompany.com]

2. [NAME OF GUARANTOR / MANAGING DIRECTOR]
   [Residential Address / Corporate Identity]

UNDER INSTRUCTIONS FROM AND ON BEHALF OF MY CLIENT:
${f.transporterName}
Registered Office: ${f.transporterAddress}
GSTIN: ${f.transporterGstin}
(Hereinafter referred to as "My Client" or "The Carrier")

Sir / Madam,

Under instructions from and on behalf of My Client above-named, I hereby serve upon you this formal Statutory Demand Notice under the Carriage by Road Act, 2007 ①, the Indian Contract Act, 1872, and the Micro, Small and Medium Enterprises Development Act, 2006:

1. THE CONTRACT OF CARRIAGE & CONSIGNMENT NOTE:
   My Client is a reputed common carrier and logistics service provider registered under Section 4 of the Carriage by Road Act, 2007. Pursuant to your transport work orders, My Client placed heavy commercial vehicle No. ${f.vehicleNo} at your facility in ${f.originHub} and issued Goods Consignment Note (GR / Bilty) No. ${f.grNumber} dated ${f.grDate}, accompanied by E-Way Bill No. ${f.ewayBillNo}, for transit to ${f.destHub} ①.

2. SATISFACTORY TRANSIT & CLEAN PROOF OF DELIVERY (POD):
   My Client safely transported the consignment across the transit corridor without damage, loss, or delay. The consignment was tendered at the destination facility and duly accepted on ${f.podDate} by the consignee (${f.consigneeName}), who affixed their clean physical signature and institutional rubber stamp on the original POD without recording any shortage or transit demur ②.

3. TABULAR STATEMENT OF FREIGHT & GPS-VERIFIED HALTING CHARGES:
   +---------------------------------------+---------------------------------------+
   | Consignment Note (GR/Bilty) No.       | ${f.grNumber}                  |
   +---------------------------------------+---------------------------------------+
   | Goods Receipt Date                    | ${f.grDate}                        |
   +---------------------------------------+---------------------------------------+
   | Vehicle Registration No.              | ${f.vehicleNo}                          |
   +---------------------------------------+---------------------------------------+
   | E-Way Bill Number                     | ${f.ewayBillNo}                     |
   +---------------------------------------+---------------------------------------+
   | Clean Signed POD Acceptance Date      | ${f.podDate}                        |
   +---------------------------------------+---------------------------------------+
   | Base Freight Invoiced (SAC 996511)    | INR ${f.baseFreight}/-                          |
   +---------------------------------------+---------------------------------------+
   | Loading/Unloading Halting Recorded    | ${f.haltingDays} Days (Beyond 24-hr Free Window)       |
   +---------------------------------------+---------------------------------------+
   | Halting / Detention Tariff            | INR ${f.haltingRate}/- per 24-Hour Cycle          |
   +---------------------------------------+---------------------------------------+
   | Halting / Detention Total Amount      | INR ${(parseInt(f.haltingDays || "0") * parseInt(f.haltingRate.replace(/,/g, "") || "0")).toLocaleString("en-IN")}/-                            |
   +---------------------------------------+---------------------------------------+
   | TOTAL CRYSTALLIZED COMMERCIAL CLAIM   | INR ${f.totalClaim}/-                          |
   +---------------------------------------+---------------------------------------+

4. GPS TELEMATICS AUDIT TRAIL PRECLUDING DETENTION DISPUTES:
   The halting of ${f.haltingDays} days is irrefutably verified by vehicle GPS telematics logs, electronic geofence entry/exit timestamps, and destination security gate-in passes ③. In terms of Clause 4 of the Transportation Contract, detention beyond 24 hours of placement is payable at INR ${f.haltingRate}/- per day.

5. ILLEGALITY OF UNILATERAL DAMAGE DEDUCTIONS:
   You have attempted to withhold payment citing vague and unsubstantiated transit damage. In light of the Clean POD and the law laid down by the Hon'ble Supreme Court in Union of India v. Raman Iron Foundry (AIR 1974 SC 1265), an unadjudicated claim for unliquidated damages cannot be unilaterally adjusted against admitted freight debt ④.

6. STATUTORY INTEREST UNDER MSMED ACT, 2006:
   My Client is a micro/small logistics enterprise registered under Udyam. In terms of Section 15 and 16 of the MSMED Act, 2006, you were obligated to release freight within 45 days. You are liable to pay compound interest with monthly rests at three times the RBI bank rate on the unpaid amount ⑤.

7. FINAL STATUTORY DEMAND:
   You are hereby called upon to pay the crystallized sum of INR ${f.totalClaim}/- together with accrued statutory interest at 18% per annum into My Client's designated bank account within ${f.cureDays} (${f.cureDays === "7" ? "Seven" : f.cureDays}) days of receipt of this notice.

8. LEGAL CONSEQUENCES OF DEFAULT:
   Should you fail to remit the aforesaid sum within ${f.cureDays} days, My Client has given me peremptory instructions to initiate:
   a) A Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 for immediate recovery with attachment before judgment under Order XXXVIII Rule 5 ⑥;
   b) A Statutory Reference under Section 18 of the MSMED Act, 2006 before the MSEFC;
   c) Intimation to the Income Tax Department regarding disallowance of expenditure under Section 43B(h) of the Income Tax Act, 1961.

Yours faithfully,

${f.advocateName}, Advocate
Counsel for ${f.transporterName}`,
  },
  {
    id: "carrier-lien-notice",
    title: "2. Lawful Carrier-Lien Intimation Notice",
    subtitle: "Intimating detention of current in-transit consignment under Contract Act ss. 170/171 for unpaid freight arrears",
    badge: "Carrier Possessory Lien",
    annotations: [
      {
        marker: "①",
        title: "Section 170 & 171 Indian Contract Act Possessory Bailee Lien",
        explanation:
          "Section 170 provides for a particular bailee lien for services rendered on goods. Section 171 provides a general lien for factors, wharfingers, and attorneys, extended by contractual incorporation to common carriers holding goods for general balance of account.",
        statuteRef: "Indian Contract Act, 1872 ss. 170 & 171",
      },
      {
        marker: "②",
        title: "Carriage by Road Act 2007 Section 10 & 11 Right to Detain & Sell",
        explanation:
          "Under Section 10 and 11 of the Carriage by Road Act, 2007, where the consignor or consignee fails to pay freight and charges, the common carrier may detain the consignment and, after giving due statutory notice, sell a sufficient portion to satisfy charges.",
        statuteRef: "Carriage by Road Act, 2007 Section 11",
      },
      {
        marker: "③",
        title: "Bailment Safeguards & Continuing Warehouse Demurrage Charges",
        explanation:
          "Cargo detained under lawful lien is stored at the owner's risk and cost. The notice intimates that continuing warehouse storage and container detention charges accrue daily until full redemption.",
        statuteRef: "Contract Act s.151 & s.158 (Bailee's Necessary Expenses)",
      },
      {
        marker: "④",
        title: "Mandatory 7-Day Pre-Auction Statutory Cure Period",
        explanation:
          "To satisfy constitutional natural justice and statutory sale requirements, the carrier must provide a clear written cure window before initiating public auction or private treaty disposal.",
        statuteRef: "Sale of Goods Act, 1930 & Contract Act s.176",
      },
      {
        marker: "⑤",
        title: "Personal Liability of Consignor for Deficiency After Sale",
        explanation:
          "If the proceeds of the detained consignment are insufficient to discharge the freight debt, storage costs, and auction expenses, the consignor remains personally liable for the deficit under Order XXXVII CPC.",
        statuteRef: "Contract Act s.176 & CPC Order XXXVII",
      },
      {
        marker: "⑥",
        title: "Rejection of Criminal Breach of Trust (Section 405 IPC / BNS 316)",
        explanation:
          "A carrier exercising a bona fide statutory lien does not commit theft or criminal breach of trust. Pre-empting false police complaints protects transport managers from vexatious FIRs.",
        statuteRef: "Supreme Court Jurisprudence on Commercial Lien",
      },
    ],
    generateText: (f: FormFields) => `FORMAL LEGAL NOTICE OF EXERCISE OF LAWFUL CARRIER'S POSSESSORY LIEN UNDER SECTIONS 170 & 171 OF THE INDIAN CONTRACT ACT, 1872 AND SECTION 11 OF THE CARRIAGE BY ROAD ACT, 2007

DISPATCHED VIA SPEED POST WITH A.D., HAND COURIER, AND ELECTRONIC EMAIL WITH READ RECEIPT

Date: [CURRENT DATE]
Place: ${f.advocateCity}

To,
1. ${f.shipperName} (Consignor)
   Registered Office: ${f.shipperAddress}
   GSTIN: ${f.shipperGstin}

2. ${f.consigneeName} (Consignee / Endorsee)
   [Destination Address]

UNDER INSTRUCTIONS FROM MY CLIENT:
${f.transporterName}
Registered Office: ${f.transporterAddress}
(Hereinafter referred to as "The Carrier" or "My Client")

SUBJECT: INTIMATION OF EXERCISE OF LAWFUL CARRIER'S POSSESSORY LIEN OVER IN-TRANSIT CONSIGNMENT UNDER GR NO. ${f.grNumber} AGAINST ACCUMULATED FREIGHT ARREARS OF INR ${f.totalClaim}/-

Sir / Madam,

Under instructions from My Client, I hereby serve upon you this peremptory Notice intimating the exercise of a lawful, possessory Carrier's Lien over the consignment currently in My Client's physical custody:

1. ACCUMULATED LIQUIDATED FREIGHT ARREARS:
   You have consistently defaulted in clearing admitted freight invoices and vehicle detention charges for previous consignments transported across various national corridors, aggregating to a crystallized overdue sum of INR ${f.totalClaim}/-. Multiple written reminders and reconciled ledger statements have been ignored ①.

2. THE DETAINED CONSIGNMENT:
   Pursuant to Work Order / Bilty No. ${f.grNumber} dated ${f.grDate}, you tendered to My Client cargo loaded onto Vehicle No. ${f.vehicleNo} under E-Way Bill No. ${f.ewayBillNo}, originating from ${f.originHub} and destined for ${f.destHub}. The market value of the said consignment is approximately INR [ESTIMATED CARGO VALUE]/-.

3. STATUTORY EXERCISE OF LIEN UNDER SECTIONS 170/171 CONTRACT ACT & SECTION 11 CARRIAGE BY ROAD ACT:
   Please take note that in exercise of My Client's statutory rights under Section 170 and 171 of the Indian Contract Act, 1872 ① and Section 11 of the Carriage by Road Act, 2007 ②, My Client has withheld delivery and exercised an absolute possessory lien over the entire consignment held in Vehicle No. ${f.vehicleNo} / My Client's bonded warehouse facility at ${f.originHub}.

4. ACCRUAL OF WAREHOUSE STORAGE & VEHICLE DETENTION CHARGES:
   During the period of detention under lien, the cargo remains at your sole risk as to deterioration, perishing, or market depreciation. Furthermore, holding and demurrage charges at the rate of INR ${f.haltingRate}/- per day shall continue to accrue and be added to the total recovery ledger ③.

5. PEREMPTORY SEVEN (7) DAYS CURE PERIOD BEFORE AUCTION:
   You are hereby granted a final statutory window of ${f.cureDays} (${f.cureDays === "7" ? "Seven" : f.cureDays}) days from the receipt of this notice to remit the full overdue amount of INR ${f.totalClaim}/- along with accrued holding charges into My Client's designated bank account ④.

6. NOTICE OF STATUTORY AUCTION / PRIVATE TREATY SALE:
   Upon the expiry of the said ${f.cureDays} days without full payment, My Client shall proceed to sell the detained consignment through public auction or private treaty after giving public notice in accordance with Section 11 of the Carriage by Road Act, 2007. The proceeds shall be applied towards freight arrears, detention charges, and sale expenses. Should any deficit remain, My Client shall institute summary recovery proceedings against you under Order XXXVII CPC for the balance ⑤.

7. STRICT WARNING AGAINST VEXATIOUS CRIMINAL COMPLAINTS:
   The exercise of a statutory possessory lien is a sanctioned civil remedy under Indian law. Any attempt to register false criminal complaints under Section 316 BNS (Section 405/406 IPC) alleging criminal breach of trust or theft shall be defended with malicious prosecution counterclaims ⑥.

Yours faithfully,

${f.advocateName}, Advocate
Counsel for ${f.transporterName}`,
  },
  {
    id: "raman-iron-damage-rebuttal",
    title: "3. Damage Deduction & Shortage Debit Note Rebuttal",
    subtitle: "Defeating unilateral freight deductions using Raman Iron doctrine and Clean POD estoppel",
    badge: "Debit Note Rebuttal",
    annotations: [
      {
        marker: "①",
        title: "Supreme Court Raman Iron Foundry Unliquidated Damages Rule",
        explanation:
          "In Union of India v. Raman Iron Foundry (AIR 1974 SC 1265), the Supreme Court ruled that a claim for damages for breach of contract is not an 'admitted debt' until adjudicated by a competent court, and cannot be unilaterally deducted from running contractor bills.",
        statuteRef: "AIR 1974 SC 1265 & Contract Act s.73",
      },
      {
        marker: "②",
        title: "Clean POD Conclusive Estoppel Under Carriage by Road Act",
        explanation:
          "When the receiver affixes a clean endorsement upon delivery without remarking open delivery or physical damage, statutory estoppel prevents subsequent concocted debit notes for alleged transit defects.",
        statuteRef: "Carriage by Road Act 2007 s.10 & BSA 2023 s.121",
      },
      {
        marker: "③",
        title: "Absence of Joint Inspection Survey Report Nullifies Claim",
        explanation:
          "A unilateral debit note without a joint survey, photographic evidence, and independent surveyor assessment violates basic principles of commercial transport law and is inadmissible in court.",
        statuteRef: "Commercial Law Precedents on Marine/Transit Insurance",
      },
      {
        marker: "④",
        title: "Double Recovery Bar: Marine Insurance Subrogation Principle",
        explanation:
          "Shippers claiming insurance reimbursement cannot simultaneously debit transporters for the same loss. That constitutes unjust enrichment under Section 70 of the Indian Contract Act.",
        statuteRef: "Contract Act s.70 & Marine Insurance Act, 1963",
      },
      {
        marker: "⑤",
        title: "GST Compliance Violation on Bogus Debit Notes",
        explanation:
          "Unilateral debit notes issued without carrier consent violate Section 34 of the CGST Act, 2017, generating fraudulent ITC mismatches on GSTR-2B.",
        statuteRef: "CGST Act, 2017 Section 34 & Circular No. 137/07/2020",
      },
      {
        marker: "⑥",
        title: "Order XXXVII CPC Summary Suit for Admitted Freight Invoices",
        explanation:
          "The carrier is entitled to file a summary suit under Order XXXVII CPC for the full gross freight invoice, ignoring bogus debit notes entirely.",
        statuteRef: "CPC Order XXXVII Rule 2",
      },
    ],
    generateText: (f: FormFields) => `REJECTION OF UNILATERAL TRANSIT DAMAGE / SHORTAGE DEBIT NOTE AND DEMAND FOR FULL FREIGHT RELEASE UNDER RAMAN IRON FOUNDRY DOCTRINE

DISPATCHED VIA REGISTERED POST A.D. AND ELECTRONIC MAIL

Date: [CURRENT DATE]
Place: ${f.advocateCity}

To,
${f.shipperName}
Commercial / Finance Department
${f.shipperAddress}
GSTIN: ${f.shipperGstin}

UNDER INSTRUCTIONS FROM MY CLIENT:
${f.transporterName}
${f.transporterAddress}

SUBJECT: UNCONDITIONAL REJECTION OF DEBIT NOTE NO. [DEBIT NOTE NUMBER] DATED [DEBIT NOTE DATE] FOR INR [DEBIT NOTE AMOUNT]/- AND DEMAND FOR PAYMENT OF FULL FREIGHT UNDER BILTY NO. ${f.grNumber}

Sir / Madam,

Under instructions from My Client, I hereby formally reject your Debit Note purporting to deduct transit damage or shortage from My Client's freight bills, on the following incontrovertible legal grounds:

1. CLEAN PROOF OF DELIVERY (POD) ESTOPPEL:
   The goods under GR No. ${f.grNumber} transported via Vehicle No. ${f.vehicleNo} were delivered in sound, sealed condition on ${f.podDate} at ${f.destHub}. Your receiving warehouse staff signed and stamped the POD without any endorsement of damage, seal tampering, or shortage ②.

2. VIOLATION OF RAMAN IRON FOUNDRY PRECEDENT:
   It is a settled principle of law laid down by the Hon'ble Supreme Court in Union of India v. Raman Iron Foundry (AIR 1974 SC 1265) and reaffirmed in Kailash Nath Associates (2015) 4 SCC 136 that an unadjudicated claim for damages does not constitute an existing debt. You have no legal authority to adjust unliquidated, disputed damages against My Client's crystallized freight invoices ①.

3. LACK OF JOINT SURVEY & STATUTORY NOTICE UNDER CARRIAGE BY ROAD ACT:
   No notice of damage under Section 16 of the Carriage by Road Act, 2007 was served upon My Client within the statutory time. No joint inspection was conducted in the presence of My Client's representative or an IRDAI-licensed surveyor ③.

4. BAR AGAINST UNJUST ENRICHMENT & DOUBLE RECOVERY:
   If your consignment was insured under an open marine policy, deducting freight while filing an insurance claim constitutes unjust enrichment under Section 70 of the Indian Contract Act and fraud under Section 79 of the Marine Insurance Act, 1963 ④.

5. TAX INVOICE REVERSAL ILLEGALITY:
   Your unilateral debit note violates Section 34 of the CGST Act, 2017. My Client has already remitted applicable GST on the gross freight amount ⑤.

6. FINAL RECTIFICATION DEMAND:
   You are called upon to immediately cancel Debit Note No. [DEBIT NOTE NUMBER] and remit the full withheld freight amount of INR ${f.baseFreight}/- within ${f.cureDays} days, failing which summary suit proceedings under Order XXXVII CPC shall be instituted ⑥.

Yours faithfully,

${f.advocateName}, Advocate
Counsel for ${f.transporterName}`,
  },
  {
    id: "cha-forwarder-customs-duty",
    title: "4. CHA & Forwarder Customs Duty / Ocean Freight Demand",
    subtitle: "Recovery of upfront ICEGATE customs duty advances, shipping line detention, and CFS ground rent",
    badge: "CHA & Forwarder Advance",
    annotations: [
      {
        marker: "①",
        title: "Agent's Statutory Right to Indemnity Under Contract Act Section 222",
        explanation:
          "Under Section 222 of the Indian Contract Act, 1872, the employer of an agent is bound to indemnify him against the consequences of all lawful acts done by such agent in exercise of the authority conferred upon him, covering duty advances.",
        statuteRef: "Indian Contract Act, 1872 Section 222",
      },
      {
        marker: "②",
        title: "Agent's Right of Retainer & Lien Under Section 217 & 221",
        explanation:
          "Section 217 empowers an agent to retain, out of any sums received on account of the principal, all moneys due to himself in respect of advances made or expenses properly incurred. Section 221 provides a general lien on goods and documents.",
        statuteRef: "Indian Contract Act, 1872 ss. 217 & 221",
      },
      {
        marker: "③",
        title: "Customs Broker Licensing Regulations (CBLR) Fiduciary Duties",
        explanation:
          "Under CBLR 2018, the Customs Broker operates as an authorized clearance agent. Duty challans paid via ICEGATE represent government revenue advanced on behalf of the importer.",
        statuteRef: "Customs Brokers Licensing Regulations, 2018",
      },
      {
        marker: "④",
        title: "Shipping Line Demurrage & Container Detention Indemnity",
        explanation:
          "Container detention charges and CFS ground rent incurred due to the importer's delay in providing clearance documentation are recoverable as direct consequential expenditure.",
        statuteRef: "Contract Act s.73 & Major Port Authorities Act, 2021",
      },
      {
        marker: "⑤",
        title: "Commercial Courts Act Section 2(1)(c)(xviii) Statutory Jurisdiction",
        explanation:
          "Agreements relating to carriage of goods, freight forwarding, and customs clearance constitute commercial disputes of a specified value, triable before Commercial Courts under expedited procedures.",
        statuteRef: "Commercial Courts Act, 2015 s.2(1)(c)(xviii)",
      },
      {
        marker: "⑥",
        title: "Personal Liability of Directors for Financial Misrepresentation",
        explanation:
          "Where corporate directors induced the Customs Broker to advance lakhs in government customs duty on false assurances of immediate reimbursement, civil and criminal liability ensues.",
        statuteRef: "Companies Act, 2013 s.447 & Contract Act s.222",
      },
    ],
    generateText: (f: FormFields) => `STATUTORY LEGAL NOTICE FOR RECOVERY OF OUT-OF-POCKET CUSTOMS DUTY ADVANCES, SHIPPING LINE DETENTION, CFS GROUND RENT AND FREIGHT FORWARDING FEES

DISPATCHED VIA REGISTERED POST WITH A.D. AND SPEED POST

Date: [CURRENT DATE]
Place: ${f.advocateCity}

To,
[IMPORTER / CORPORATE CLIENT NAME]
Through its Managing Director / Directors
[Registered Office Address]
IEC No.: [IMPORT EXPORT CODE]
GSTIN: [IMPORTER GST NUMBER]

UNDER INSTRUCTIONS FROM MY CLIENT:
[NAME OF CHA / FREIGHT FORWARDING ENTITY]
Customs Broker License No.: [CBLR LICENSE NO.]
Registered Office: [CHA REGISTERED ADDRESS]
(Hereinafter referred to as "The Customs Broker" or "My Client")

Sir / Madam,

Under instructions from My Client, I hereby serve upon you this Statutory Legal Notice under Section 222 of the Indian Contract Act, 1872 ① and the Customs Act, 1962:

1. THE CUSTOMS BROKER & CLEARING AGENCY MANDATE:
   My Client is a licensed Customs Broker authorized by the Central Board of Indirect Taxes and Customs (CBIC). Pursuant to your instructions, My Client handled customs clearance for imported consignments covered under Bill of Entry No. [BOE NUMBER] dated [BOE DATE] arrived at [PORT / ICD NAME] ③.

2. OUT-OF-POCKET CUSTOMS DUTY ADVANCES VIA ICEGATE:
   To prevent demurrage and cargo abandonment, My Client advanced and paid from its own funds the statutory Customs Duty amounting to INR [DUTY ADVANCE AMOUNT]/- directly into the Central Government Treasury via the ICEGATE e-payment portal on [PAYMENT DATE] under Challan No. [CHALLAN NUMBER] ①.

3. DISBURSEMENT OF ANCILLARY CFS, DETENTION & TERMINAL CHARGES:
   In addition to basic duty, My Client disbursed Container Freight Station (CFS) ground rent, shipping line container detention charges, and delivery order (DO) release fees aggregating to INR [ANCILLARY AMOUNT]/- ④.

4. AGENT'S STATUTORY RIGHT OF INDEMNITY UNDER SECTION 222:
   Under Section 222 of the Indian Contract Act, 1872, you are legally bound to indemnify My Client against all lawful acts and financial commitments undertaken on your behalf. Refusing to reimburse government tax payments advanced for your commercial benefit constitutes egregious breach of fiduciary and commercial contract ①.

5. AGENT'S RIGHT OF LIEN OVER SHIPPING DOCUMENTS & BILLS OF LADING:
   In terms of Section 221 of the Contract Act, My Client has exercised its right of lien over original Bills of Lading, delivery orders, and related shipping documentation ②.

6. FINAL DEMAND FOR IMMEDIATE REIMBURSEMENT:
   You are hereby called upon to reimburse the total advanced sum of INR [TOTAL ADVANCE AMOUNT]/- together with commercial interest at 18% per annum within ${f.cureDays} days, failing which My Client shall initiate Commercial Summary Suit proceedings before the Commercial Court under Section 2(1)(c)(xviii) of the Commercial Courts Act, 2015 ⑤.

Yours faithfully,

${f.advocateName}, Advocate
Counsel for Customs Broker`,
  },
];

export default function TransporterFreightNoticeWorkspace() {
  const [selectedId, setSelectedId] = useState<string>("bilty-pod-freight-halting");
  const [fields, setFields] = useState<FormFields>(DEFAULT_FIELDS);
  const [copied, setCopied] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const selectedTemplate = TEMPLATES.find((t) => t.id === selectedId) || TEMPLATES[0];
  const generatedNoticeText = selectedTemplate.generateText(fields);

  const handleFieldChange = (field: keyof FormFields, value: string) => {
    setFields((prev) => ({ ...prev, [field]: value }));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedNoticeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleDownloadWord = () => {
    const header =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
      "xmlns:w='urn:schemas-microsoft-com:office:word' " +
      "xmlns='http://www.w3.org/TR/REC-html40'>" +
      "<head><meta charset='utf-8'><title>" +
      selectedTemplate.title +
      "</title></head><body><pre style='font-family: Arial, sans-serif; font-size: 11pt; white-space: pre-wrap;'>";
    const footer = "</pre></body></html>";
    const sourceHTML = header + generatedNoticeText + footer;

    const source = "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(sourceHTML);
    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = `${selectedTemplate.id}-advocate-draft.doc`;
    fileDownload.click();
    document.body.removeChild(fileDownload);
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${selectedTemplate.title} - Advocate Legal Notice</title>
            <style>
              body { font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.6; margin: 40px; color: #111; }
              pre { white-space: pre-wrap; font-family: inherit; }
            </style>
          </head>
          <body>
            <pre>${generatedNoticeText}</pre>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Template Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {TEMPLATES.map((tmpl) => {
          const isSelected = tmpl.id === selectedId;
          return (
            <button
              key={tmpl.id}
              type="button"
              onClick={() => setSelectedId(tmpl.id)}
              className={`p-3.5 rounded-xl border text-left transition-all duration-150 flex flex-col justify-between ${
                isSelected
                  ? "bg-slate-900 border-[#DC2626] text-white shadow-md ring-2 ring-[#DC2626]/20"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
              }`}
            >
              <div>
                <span
                  className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-1.5 ${
                    isSelected ? "bg-red-950 text-red-400 border border-red-800" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {tmpl.badge}
                </span>
                <p className={`text-xs font-bold leading-snug line-clamp-2 ${isSelected ? "text-white" : "text-slate-900"}`}>
                  {tmpl.title}
                </p>
              </div>
              <p className={`text-[11px] mt-2 line-clamp-1 ${isSelected ? "text-slate-300" : "text-slate-500"}`}>
                {tmpl.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Interactive Customizer Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              Interactive Bilty &amp; Halting Customizer
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className="text-xs font-semibold text-[#DC2626] hover:underline"
          >
            {isEditing ? "▲ Hide Form Fields" : "▼ Edit Consignment Parameters"}
          </button>
        </div>

        {isEditing && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-3 border-t border-slate-100 text-xs">
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">Transporter / Fleet Name</label>
              <input
                type="text"
                value={fields.transporterName}
                onChange={(e) => handleFieldChange("transporterName", e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-800 font-medium focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">Shipper / Corporate Client</label>
              <input
                type="text"
                value={fields.shipperName}
                onChange={(e) => handleFieldChange("shipperName", e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-800 font-medium focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">Consignment Note (GR) No.</label>
              <input
                type="text"
                value={fields.grNumber}
                onChange={(e) => handleFieldChange("grNumber", e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-800 font-medium focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">Vehicle Registration No.</label>
              <input
                type="text"
                value={fields.vehicleNo}
                onChange={(e) => handleFieldChange("vehicleNo", e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-800 font-medium focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">E-Way Bill Number</label>
              <input
                type="text"
                value={fields.ewayBillNo}
                onChange={(e) => handleFieldChange("ewayBillNo", e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-800 font-medium focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">Signed POD Delivery Date</label>
              <input
                type="text"
                value={fields.podDate}
                onChange={(e) => handleFieldChange("podDate", e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-800 font-medium focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">Base Freight Amount (INR)</label>
              <input
                type="text"
                value={fields.baseFreight}
                onChange={(e) => handleFieldChange("baseFreight", e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-800 font-medium focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">Halting Days (GPS Verified)</label>
              <input
                type="text"
                value={fields.haltingDays}
                onChange={(e) => handleFieldChange("haltingDays", e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-800 font-medium focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">Total Claim Amount (INR)</label>
              <input
                type="text"
                value={fields.totalClaim}
                onChange={(e) => handleFieldChange("totalClaim", e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-800 font-medium focus:ring-1 focus:ring-red-500"
              />
            </div>
          </div>
        )}
      </div>

      {/* Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs sm:text-sm font-bold text-slate-800">
            Active Format: <span className="text-[#DC2626]">{selectedTemplate.title}</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
          >
            {copied ? "✓ Copied Notice!" : "📋 Copy Notice Text"}
          </button>
          <button
            type="button"
            onClick={handleDownloadWord}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-300 cursor-pointer"
          >
            📥 Download .doc
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-300 cursor-pointer"
          >
            🖨️ Print / PDF
          </button>
        </div>
      </div>

      {/* Side-by-Side Annotated Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Notice Draft Preview */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="bg-slate-900 text-white px-4 sm:px-6 py-3 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
              Statutory Notice Draft Preview
            </span>
            <span className="text-[10px] bg-red-950 text-red-400 font-bold px-2 py-0.5 rounded-md border border-red-800">
              Annotated Footnotes ①–⑥
            </span>
          </div>
          <div className="p-4 sm:p-6 bg-slate-50/50">
            <pre className="font-mono text-xs sm:text-[13px] text-slate-800 whitespace-pre-wrap leading-relaxed select-all bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-inner overflow-x-auto max-h-[720px] overflow-y-auto">
              {generatedNoticeText}
            </pre>
          </div>
          <div className="px-4 py-3 bg-slate-100 border-t border-slate-200 text-slate-500 text-[11px] flex items-center justify-between">
            <span>Dynamic parameters updated. Edit above or replace [BRACKETS] before dispatch.</span>
            <span className="font-semibold text-slate-700">Commercial Transport Form</span>
          </div>
        </div>

        {/* Right Column: Numbered Margin Annotations Guide */}
        <div className="lg:col-span-5 space-y-3.5">
          <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 shadow-xs">
            <p className="text-sm font-extrabold tracking-tight">
              Statutory Margin Annotations Guide
            </p>
            <p className="text-xs text-slate-300 mt-1">
              Why each numbered statutory clause is indispensable under Indian transport &amp; contract laws:
            </p>
          </div>

          <ol className="space-y-3 list-none">
            {selectedTemplate.annotations.map((ann, i) => (
              <li
                key={i}
                className="bg-white rounded-xl border border-slate-200 p-3.5 sm:p-4 shadow-xs hover:border-slate-300 transition-colors"
              >
                <div className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {ann.marker}
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900">
                      {ann.title}
                    </p>
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
