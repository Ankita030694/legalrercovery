"use client";

import React, { useState } from "react";

type LetterVariantKey = "polite" | "firm" | "cgrf" | "hindi";

interface BillFields {
  consumerName: string;
  consumerAddress: string;
  consumerPhone: string;
  consumerEmail: string;
  caNumber: string;
  meterNumber: string;
  sanctionedLoad: string;
  discomName: string;
  subDivisionOffice: string;
  billNumber: string;
  billDate: string;
  dueDate: string;
  disputedAmount: string;
  averageAmount: string;
  billedUnits: string;
  actualUnits: string;
  readingDate: string;
}

export default function ElectricityBillWorkspace() {
  const [activeVariant, setActiveVariant] = useState<LetterVariantKey>("polite");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const [fields, setFields] = useState<BillFields>({
    consumerName: "[YOUR FULL NAME, e.g., Ramesh Chandra Sharma]",
    consumerAddress: "[FULL SERVICE ADDRESS, e.g., House No. 42, Sector 15, Vasundhara, Ghaziabad, UP - 201012]",
    consumerPhone: "[+91 98765 43210]",
    consumerEmail: "[consumer.email@example.com]",
    caNumber: "[CA / K-NUMBER / CONSUMER ID, e.g., CA-100294821]",
    meterNumber: "[METER SERIAL NO., e.g., DL-09-EM-849201]",
    sanctionedLoad: "[SANCTIONED LOAD, e.g., 3.0 kW Domestic (LT-1)]",
    discomName: "[DISCOM NAME, e.g., PVVNL / UPPCL / BSES Rajdhani / Tata Power-DDL / MSEDCL / BESCOM]",
    subDivisionOffice: "[SUB-DIVISION / SECTION OFFICE, e.g., Office of Assistant Engineer (Distribution), Sub-Division IV]",
    billNumber: "[BILL INVOICE NO., e.g., BILL-2026-894102]",
    billDate: "[BILL DATE, e.g., 28 October 2026]",
    dueDate: "[BILL DUE DATE, e.g., 15 November 2026]",
    disputedAmount: "[DISPUTED AMOUNT, e.g., ₹24,850]",
    averageAmount: "[USUAL BI-MONTHLY / MONTHLY BILL, e.g., ₹2,200]",
    billedUnits: "[INFLATED BILLED UNITS, e.g., 2,840 Units]",
    actualUnits: "[ACTUAL CURRENT READING, e.g., 345 Units]",
    readingDate: "[DATE OF PHYSICAL METER INSPECTION, e.g., 02 November 2026]",
  });

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const buildPoliteLetter = () => `To,
The Assistant Engineer (AE) / Sub-Divisional Officer (SDO),
${fields.subDivisionOffice},
${fields.discomName},
[City, District, State, PIN]

Subject: Request for Meter Reading Verification & Rectification of Erroneous Electricity Bill for Consumer Account No.: ${fields.caNumber}

Respected Sir / Madam,

1. CONSUMER & CONNECTION DETAILS:
I am the registered consumer of domestic electric connection bearing Consumer Account / K-Number: ${fields.caNumber}, installed at ${fields.consumerAddress}, with a sanctioned load of ${fields.sanctionedLoad}. The electricity meter installed at my premises carries Serial No.: ${fields.meterNumber}.

2. PARTICULARS OF THE DISPUTED BILL:
I have received the electricity bill for the billing cycle of [Billing Period, e.g., October 2026], particulars of which are as follows:
• Bill Invoice No.: ${fields.billNumber}
• Bill Date: ${fields.billDate} | Due Date: ${fields.dueDate}
• Total Billed Amount: ${fields.disputedAmount}
• Billed Consumption: ${fields.billedUnits}

3. FACTUAL DISCREPANCY & REASON FOR DISPUTE:
The billed amount of ${fields.disputedAmount} is highly excessive, abnormal, and completely disconnected from my actual electricity consumption. For the past twelve months, my average electricity bill has been approximately ${fields.averageAmount} per billing cycle for normal household use.

Upon personal physical inspection of the meter on ${fields.readingDate}, the actual cumulative meter reading displayed on the LCD display is ${fields.actualUnits}, whereas the meter reader has erroneously punched / recorded ${fields.billedUnits}. This is a clear case of typographical punch error / incorrect meter recording.

4. PRAYER / RELIEF SOUGHT:
In view of the above facts, I humbly request your good office to:
(a) Depute a meter reader or technical lineman to carry out a physical spot verification of meter no. ${fields.meterNumber} and verify the actual reading;
(b) Cancel the erroneous bill no. ${fields.billNumber} and issue a revised, corrected bill based on actual units consumed;
(c) Ensure that late payment surcharges are not levied and power supply is not disconnected pending rectification.

I am ready to deposit my average billing amount of ${fields.averageAmount} under protest pending this verification.

A photograph of the electricity meter showing the serial number and actual reading taken on ${fields.readingDate} is enclosed herewith for immediate verification.

Thanking you.

Yours faithfully,

(Signature): _______________________________
Name: ${fields.consumerName}
Consumer No.: ${fields.caNumber}
Phone: ${fields.consumerPhone}
Email: ${fields.consumerEmail}
Enclosures:
1. Copy of Disputed Electricity Bill No. ${fields.billNumber}
2. Clear time-stamped photograph of Electricity Meter display dated ${fields.readingDate}
3. Copies of previous 3 electricity bills establishing average consumption pattern`;

  const buildFirmDemandLetter = () => `SPEED POST WITH A/D & DISCOM GRIEVANCE PORTAL
FORMAL RECTIFICATION DEMAND & NOTICE AGAINST UNLAWFUL DISCONNECTION

Date: [DD/MM/YYYY]

To,
The Executive Engineer (EE) / Assistant Engineer (Commercial),
${fields.subDivisionOffice},
${fields.discomName},
[Zonal Office Address, City, State, PIN]

Subject: Formal Objection Against Exorbitant & Defective Electricity Bill No. ${fields.billNumber}, Demand for Meter Testing under CEA Regulations, and Invocation of Section 56(1) Electricity Act, 2003

Consumer Account / CA No.: ${fields.caNumber} | Meter No.: ${fields.meterNumber} | Sanctioned Load: ${fields.sanctionedLoad}

Sir / Madam,

1. GROSS DEFECT IN BILLING:
I am the lawful consumer under Consumer Account No. ${fields.caNumber} at ${fields.consumerAddress}. I am writing to place on formal statutory record my strong objection to electricity bill no. ${fields.billNumber} dated ${fields.billDate} demanding an astronomical sum of ${fields.disputedAmount} for ${fields.billedUnits}.

2. ABNORMAL CONSUMPTION & JUMPING METER / WRONG MULTIPLIER:
My premises is a standard residential dwelling with consistent consumption averaging ${fields.averageAmount} per billing cycle. The current demand represents a sudden, unexplained spike of over 800% without any change in connected load or pattern of use. 
The discrepancy has arisen due to either:
(a) A defective, jumping, or fast electronic meter in violation of Central Electricity Authority (Installation and Operation of Meters) Regulations;
(b) An incorrect Multiplying Factor (MF) or CT-PT ratio erroneously loaded into your billing software; OR
(c) Accumulated artificial provisional billing adjusted arbitrarily in a single cycle.

3. STATUTORY BAR AGAINST DISCONNECTION — SECTION 56(1) ELECTRICITY ACT, 2003:
Take note that under Section 56(1) of the Electricity Act, 2003 read with the State Electricity Regulatory Commission (SERC) Electricity Supply Code:
• No distribution licensee can disconnect the electricity supply of a consumer where a bona fide billing dispute has been formally lodged;
• Any threat of disconnection or coercive disconnection during pendency of a disputed bill investigation constitutes gross deficiency of service under Section 2(11) of the Consumer Protection Act, 2019, rendering your officers personally liable for damages.

4. FORMAL DEMANDS:
I hereby call upon your office to execute the following within seven (7) working days of receipt:
1. Direct an on-site joint inspection of meter no. ${fields.meterNumber} with an accredited testing kit or install an authenticated Check Meter in accordance with CEA Regulations;
2. Suspend the recovery of the disputed sum of ${fields.disputedAmount} and accept payment of the undisputed average sum of ${fields.averageAmount} under protest;
3. Issue a credit adjustment voucher and recalculated bill reflecting legitimate consumption;
4. Refrain from issuing any disconnection notice or disrupting my essential electricity supply.

In the event of failure to resolve this dispute within the stipulated timeline, I shall immediately file a petition before the Consumer Grievance Redressal Forum (CGRF) under Section 42(5) of the Electricity Act, 2003 and initiate proceedings for exemplary damages before the District Consumer Disputes Redressal Commission on e-Jagriti.

Yours sincerely,

(Signature): _______________________________
${fields.consumerName}
Mobile: ${fields.consumerPhone} | Email: ${fields.consumerEmail}
Address: ${fields.consumerAddress}

Copy to:
1. Superintending Engineer (Distribution Circle), ${fields.discomName}
2. Consumer Records & Grievance Redressal Cell`;

  const buildCgrfComplaintLetter = () => `BEFORE THE CONSUMER GRIEVANCE REDRESSAL FORUM (CGRF)
CONSTITUTED UNDER SECTION 42(5) OF THE ELECTRICITY ACT, 2003
AT: [JURISDICTIONAL FORUM, e.g., CGRF, PVVNL, MEERUT / CGRF, BSES, NEW DELHI]

GRIEVANCE COMPLAINT NO.: _______ / 2026

IN THE MATTER OF:
${fields.consumerName}
Residing at: ${fields.consumerAddress}
Contact: ${fields.consumerPhone} | Email: ${fields.consumerEmail}
... COMPLAINANT

VERSUS

1. ${fields.discomName}
Through its Managing Director / Chief Engineer,
[Head Office Address]

2. The Executive Engineer (Distribution & Commercial),
${fields.subDivisionOffice}, ${fields.discomName}
... RESPONDENTS / DISCOM

COMPLAINT UNDER SECTION 42(5) OF THE ELECTRICITY ACT, 2003 AGAINST INFLATED, FICTITIOUS BILLING, FAILURE OF REDRESSAL MECHANISM, AND UNFAIR TRADE PRACTICE

MOST RESPECTFULLY SHOWETH:

1. PARTICULARS OF CONNECTION:
The Complainant is a bonafide domestic electricity consumer under CA / K-Number: ${fields.caNumber}, Meter Serial No.: ${fields.meterNumber}, Sanctioned Load: ${fields.sanctionedLoad}.

2. GENESIS OF THE GRIEVANCE:
(a) The Respondent DISCOM issued an exorbitant, fictitious bill bearing No. ${fields.billNumber} dated ${fields.billDate} for an exorbitant sum of ${fields.disputedAmount}, alleging consumption of ${fields.billedUnits}.
(b) The normal past twelve-month average consumption of the Complainant has never exceeded ${fields.averageAmount}.
(c) The Complainant lodged a written representation before the Sub-Divisional Officer on [Date of First Complaint], but the Respondent DISCOM failed to conduct meter testing or rectify the bill within the mandatory timeline prescribed under the SERC Standards of Performance Regulations.

3. GROUNDS OF COMPLAINT:
(a) VIOLATION OF CEA METERING REGULATIONS: The Respondent failed to test the meter or provide third-party laboratory test reports when disputed.
(b) ERRONEOUS COMPUTATION: The bill reflects arbitrary provisional units or an improper multiplying factor.
(c) VIOLATION OF NATURAL JUSTICE: Threatening disconnection without resolving a pending written billing grievance violates Section 56 of the Electricity Act, 2003 and binding SERC Supply Codes.
(d) RIGHT TO INTEREST: Under Section 62(6) of the Electricity Act, 2003, any excess sum recovered by the licensee is liable to be refunded along with interest at the prevailing bank rate.

4. PRAYER / RELIEF SOUGHT:
The Complainant therefore respectfully prays that this Hon'ble Forum may be pleased to:
(a) Direct the Respondent DISCOM to quash and set aside the impugned inflated bill no. ${fields.billNumber} for ${fields.disputedAmount};
(b) Direct the Respondent to recalculate the electricity consumption based on the average consumption of the preceding twelve months or test-meter recorded units;
(c) Direct that the electricity supply to CA No. ${fields.caNumber} shall not be disconnected during the pendency of these proceedings upon payment of the average monthly charge of ${fields.averageAmount};
(d) Award compensation of ₹25,000 for mental agony, harassment, and litigation expenses caused by the arbitrary conduct of the DISCOM officers.

VERIFICATION:
I, ${fields.consumerName}, the Complainant above-named, do hereby verify that the contents of paragraphs 1 to 4 are true to my personal knowledge and official records, and nothing material has been concealed therefrom.

Verified at [Place] on this [Date] day of [Month], 2026.

(Signature): _______________________________
COMPLAINANT`;

  const buildHindiLetter = () => `सेवा में,
श्रीमान सहायक अभियंता / उप-खंड अधिकारी (SDO),
विद्युत वितरण उप-खंड: ${fields.subDivisionOffice},
${fields.discomName},
[शहर, जिला, राज्य, पिन कोड]

विषय: गलत एवं अत्यधिक बिजली बिल के सुधार तथा मीटर जांच के संबंध में शिकायती प्रार्थना पत्र
उपभोक्ता खाता संख्या (CA / K No.): ${fields.caNumber} | मीटर संख्या: ${fields.meterNumber}

महोदय / महोदया,

सविनय निवेदन है कि प्रार्थी ${fields.consumerName}, पता: ${fields.consumerAddress} का निवासी है तथा उपरोक्त उपभोक्ता खाता संख्या ${fields.caNumber} के अंतर्गत घरेलू बिजली संयोजन (स्वीकृत भार: ${fields.sanctionedLoad}) का नियमित उपभोक्ता है। प्रार्थी के परिसर में मीटर संख्या ${fields.meterNumber} स्थापित है।

प्रार्थी को बिल संख्या ${fields.billNumber}, दिनांक ${fields.billDate} प्राप्त हुआ है, जिसमें कुल ${fields.disputedAmount} रुपये की अत्यधिक धनराशि और ${fields.billedUnits} यूनिट की खपत दर्शाई गई है। 

इस संबंध में वास्तविक तथ्य निम्नानुसार हैं:
1. प्रार्थी का पूर्ववर्ती 12 महीनों का औसत बिजली बिल मात्र लगभग ${fields.averageAmount} रुपये प्रतिमाह आता रहा है।
2. दिनांक ${fields.readingDate} को जब प्रार्थी ने अपने बिजली मीटर की भौतिक जांच की, तो मीटर के डिस्प्ले पर वास्तविक रीडिंग मात्र ${fields.actualUnits} यूनिट प्रदर्शित हो रही है, जबकि विभाग के मीटर रीडर द्वारा लापरवाहीपूर्वक गलत एवं अत्यधिक रीडिंग दर्ज कर दी गई है।
3. प्रार्थी का मीटर या तो अत्यंत तीव्र गति से चल रहा है (दोषपूर्ण/जंपिंग मीटर) अथवा मीटर वाचन में मानवीय त्रुटि हुई है।

अतएव श्रीमान से करबद्ध प्रार्थना है कि:
(क) संबंधित लाइनमैन अथवा मीटर निरीक्षक को भेजकर मीटर की मौके पर निष्पक्ष जांच करवाई जाए;
(ख) त्रुटिपूर्ण बिल संख्या ${fields.billNumber} को तत्काल निरस्त कर वास्तविक खपत (${fields.actualUnits} यूनिट) के आधार पर संशोधित बिल जारी किया जाए;
(ग) जब तक जांच प्रक्रिया पूर्ण न हो जाए, प्रार्थी का बिजली कनेक्शन न काटा जाए। प्रार्थी अपना औसत मासिक बिल (${fields.averageAmount} रुपये) नियमानुसार जमा करने को सहर्ष तैयार है।

संलग्नक:
1. विवादित बिजली बिल की छायाप्रति (बिल सं.: ${fields.billNumber})
2. वर्तमान मीटर डिस्प्ले का स्पष्ट फोटो (दिनांक: ${fields.readingDate})
3. विगत 3 महीनों के भुगतान किए गए बिलों की प्रतियां

भवदीय,

(हस्ताक्षर): _______________________________
नाम: ${fields.consumerName}
उपभोक्ता संख्या: ${fields.caNumber}
मोबाइल नंबर: ${fields.consumerPhone}
ईमेल: ${fields.consumerEmail}
दिनांक: [DD/MM/YYYY]`;

  const allLetters: Record<
    LetterVariantKey,
    { title: string; subtitle: string; filename: string; text: string; toneTag: string }
  > = {
    polite: {
      title: "Variant 1: Polite Application for Wrong Reading / Calculation Error",
      subtitle: "Best for first-instance grievances, typographical meter errors, and provisional bill adjustments addressed to SDO / AE.",
      filename: "Wrong_Electricity_Bill_Polite_Application.doc",
      text: buildPoliteLetter(),
      toneTag: "Step 1: Polite & Factual",
    },
    firm: {
      title: "Variant 2: Firm Rectification & Testing Demand (Sec 56 Electricity Act)",
      subtitle: "Strong legal demand citing Section 56(1) disconnection bar, CEA meter testing rules, and consumer deficiency liability.",
      filename: "Defective_Meter_Disconnection_Bar_Demand.doc",
      text: buildFirmDemandLetter(),
      toneTag: "Step 2: Firm Statutory Demand",
    },
    cgrf: {
      title: "Variant 3: Statutory Complaint to Consumer Grievance Redressal Forum (CGRF)",
      subtitle: "Formal petition under Section 42(5) of Electricity Act, 2003 for stay on billing recovery, test meter, and interest refund.",
      filename: "CGRF_Electricity_Bill_Formal_Complaint.doc",
      text: buildCgrfComplaintLetter(),
      toneTag: "Step 3: Statutory CGRF Escalation",
    },
    hindi: {
      title: "Variant 4: बिजली बिल सुधार हेतु प्रार्थना पत्र (हिंदी प्रारूप)",
      subtitle: "उप-खंड अधिकारी / सहायक अभियंता के समक्ष प्रस्तुत करने हेतु प्रामाणिक हिंदी शिकायती आवेदन पत्र।",
      filename: "Bijli_Bill_Sudhar_Prarthana_Patra_Hindi.doc",
      text: buildHindiLetter(),
      toneTag: "हिंदी प्रारूप (Devanagari)",
    },
  };

  const handleCopy = (key: LetterVariantKey) => {
    const textToCopy = allLetters[key].text;
    navigator.clipboard.writeText(textToCopy);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 3000);
  };

  const handleDownloadDoc = (key: LetterVariantKey) => {
    const docItem = allLetters[key];
    const header =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
      "xmlns:w='urn:schemas-microsoft-com:office:word' " +
      "xmlns='http://www.w3.org/TR/REC-html40'>" +
      "<head><meta charset='utf-8'><title>" +
      docItem.title +
      "</title>" +
      "<style>body{font-family:'Calibri',Arial,sans-serif;font-size:11pt;line-height:1.45;margin:1in;}h2{text-align:center;font-size:14pt;}table{width:100%;border-collapse:collapse;margin:12pt 0;}td,th{border:1px solid #444;padding:6pt;}pre{font-family:'Calibri',Arial,sans-serif;font-size:11pt;white-space:pre-wrap;word-break:break-word;}</style>" +
      "</head><body>";
    const footer = "</body></html>";
    const sourceHtml =
      header +
      "<h2>" +
      docItem.title +
      "</h2>" +
      "<p style='font-size:10pt;color:#555;text-align:center;'>Prepared via LegalRecovery.in Consumer Utility Grievance Desk</p><hr/>" +
      "<pre>" +
      docItem.text.replace(/</g, "&lt;").replace(/>/g, "&gt;") +
      "</pre>" +
      footer;

    const source =
      "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(sourceHtml);
    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = docItem.filename;
    fileDownload.click();
    document.body.removeChild(fileDownload);
  };

  const handlePrint = (key: LetterVariantKey) => {
    const docItem = allLetters[key];
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>${docItem.title}</title>
          <style>
            body { font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.5; padding: 20mm; color: #000; }
            h2 { text-align: center; font-size: 13pt; margin-bottom: 4px; text-transform: uppercase; font-weight: bold; }
            .sub { text-align: center; font-size: 9pt; color: #555; margin-bottom: 16px; }
            pre { font-family: 'Times New Roman', serif; font-size: 11pt; white-space: pre-wrap; word-wrap: break-word; line-height: 1.4; }
            @page { margin: 15mm; }
          </style>
        </head>
        <body>
          <h2>${docItem.title}</h2>
          <div class="sub">LegalRecovery.in Consumer Redressal Template • Indian Electricity Act, 2003 Compliant</div>
          <hr/>
          <pre>${docItem.text.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
          <script>
            window.onload = function() { window.print(); window.close(); };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-md p-4 sm:p-6 md:p-8 space-y-6">
      {/* Workspace Header */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
              Interactive Dispute Workspace
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
              Complaint Application Builder for Inflated Electricity Bills
            </h3>
          </div>
          <div className="text-xs text-slate-500 font-semibold">
            Formats: English (Polite / Firm / CGRF) + Hindi
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
          Customize the values below to automatically update all 4 complaint formats, or copy the template directly into Microsoft Word or an official email to your power utility company.
        </p>
      </div>

      {/* Accordion / Fillable Fields */}
      <details className="group bg-slate-50 rounded-xl border border-slate-200 p-4 transition-all">
        <summary className="flex items-center justify-between cursor-pointer font-bold text-xs sm:text-sm text-slate-800">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
            <span>Customize Connection &amp; Disputed Bill Particulars (Click to Edit)</span>
          </span>
          <span className="text-slate-500 group-open:rotate-180 transition-transform text-base">
            ▼
          </span>
        </summary>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-4 text-xs">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Consumer Full Name
            </label>
            <input
              type="text"
              name="consumerName"
              value={fields.consumerName}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Consumer Account / K-No.
            </label>
            <input
              type="text"
              name="caNumber"
              value={fields.caNumber}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Meter Serial Number
            </label>
            <input
              type="text"
              name="meterNumber"
              value={fields.meterNumber}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              DISCOM Legal Name
            </label>
            <input
              type="text"
              name="discomName"
              value={fields.discomName}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Sub-Division / SDO Office
            </label>
            <input
              type="text"
              name="subDivisionOffice"
              value={fields.subDivisionOffice}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Disputed Bill Invoice No.
            </label>
            <input
              type="text"
              name="billNumber"
              value={fields.billNumber}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Inflated Amount (₹)
            </label>
            <input
              type="text"
              name="disputedAmount"
              value={fields.disputedAmount}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none font-bold text-red-600"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Normal Average Bill (₹)
            </label>
            <input
              type="text"
              name="averageAmount"
              value={fields.averageAmount}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none font-bold text-emerald-600"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Actual Units vs Billed Units
            </label>
            <input
              type="text"
              name="actualUnits"
              value={fields.actualUnits}
              onChange={handleFieldChange}
              placeholder="e.g. Actual: 345 units"
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Full Installation Service Address
            </label>
            <input
              type="text"
              name="consumerAddress"
              value={fields.consumerAddress}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>
        </div>
      </details>

      {/* Variant Selection Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3" role="tablist">
        {(Object.keys(allLetters) as LetterVariantKey[]).map((key) => {
          const item = allLetters[key];
          const isActive = activeVariant === key;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveVariant(key)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                isActive
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <span>{item.toneTag}</span>
            </button>
          );
        })}
      </div>

      {/* Active Letter Preview & Action Controls */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900">
              {allLetters[activeVariant].title}
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              {allLetters[activeVariant].subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => handleCopy(activeVariant)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-colors shadow-xs cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>{copiedKey === activeVariant ? "Copied!" : "Copy Format"}</span>
            </button>

            <button
              type="button"
              onClick={() => handleDownloadDoc(activeVariant)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition-colors shadow-xs cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download .doc</span>
            </button>

            <button
              type="button"
              onClick={() => handlePrint(activeVariant)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition-colors shadow-xs cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Letter Container (<article> + <pre>) */}
        <article className="relative bg-slate-900 text-slate-100 rounded-xl p-4 sm:p-6 overflow-x-auto border border-slate-800 font-mono text-xs sm:text-[13px] leading-relaxed max-h-[550px] overflow-y-auto">
          <pre className="whitespace-pre-wrap break-words font-mono">
            {allLetters[activeVariant].text}
          </pre>
        </article>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 sm:p-4 text-xs text-amber-900 flex items-start gap-2.5">
        <span className="font-bold text-amber-700 shrink-0">⚡ Practical Pro-Tip:</span>
        <p className="leading-relaxed">
          Always take a clear photograph of your electricity meter display showing the <strong>cumulative kWh reading</strong> and <strong>meter serial number</strong> before submitting this application. When submitting in person to the SDO or Sub-Division office, take a duplicate copy and ensure you receive an <strong>official receiving stamp with date and diary entry number</strong>.
        </p>
      </div>
    </div>
  );
}
