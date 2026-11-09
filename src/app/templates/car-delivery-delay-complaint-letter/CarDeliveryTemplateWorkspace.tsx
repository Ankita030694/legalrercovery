"use client";

import React, { useState, useId } from "react";

type FormatKey = "delivery_demand" | "cancellation_refund" | "twowheeler_ev" | "hindi_complaint";

interface FormFields {
  buyerName: string;
  buyerPhone: string;
  buyerEmail: string;
  buyerAddress: string;
  dealerAuthority: string;
  dealerName: string;
  dealerAddress: string;
  vehicleModelVariant: string;
  vehicleColorFuel: string;
  bookingDocketNo: string;
  bookingDate: string;
  promisedDeliveryDate: string;
  bookingAmountPaid: string;
  totalAgreedPrice: string;
  alternativeTravelExpenses: string;
  firmDeliveryDeadlineDays: string;
  bankAccountName: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  city: string;
}

export default function CarDeliveryTemplateWorkspace() {
  const formId = useId();
  const [activeFormat, setActiveFormat] = useState<FormatKey>("delivery_demand");
  const [copied, setCopied] = useState<boolean>(false);

  const [fields, setFields] = useState<FormFields>({
    buyerName: "[BUYER NAME, e.g., Rajesh Malhotra]",
    buyerPhone: "+91 98XXXXXXXX",
    buyerEmail: "rajesh.malhotra@email.com",
    buyerAddress: "[RESIDENTIAL ADDRESS, e.g., Flat 402, Royal Palms, Sector 62, Noida, UP - 201309]",
    dealerAuthority: "The Dealer Principal / General Manager (Sales)",
    dealerName: "[AUTHORIZED DEALERSHIP NAME, e.g., Apex Autocraft Pvt. Ltd. (Authorized Tata Motors Dealership)]",
    dealerAddress: "[SHOWROOM ADDRESS, e.g., Plot 14, Commercial Automobile Zone, Noida, Uttar Pradesh - 201301]",
    vehicleModelVariant: "Tata Nexon Fearless Plus (S) Petrol AMT",
    vehicleColorFuel: "Daytona Grey / Petrol",
    bookingDocketNo: "[BOOKING / SO NUMBER, e.g., BK-2026/08942]",
    bookingDate: "15 September 2026",
    promisedDeliveryDate: "15 October 2026",
    bookingAmountPaid: "₹51,000",
    totalAgreedPrice: "₹14,85,000",
    alternativeTravelExpenses: "₹18,500 (App-cab & alternative rental commute receipts attached)",
    firmDeliveryDeadlineDays: "7",
    bankAccountName: "[ACCOUNT HOLDER NAME, e.g., Rajesh Malhotra]",
    bankName: "[BANK NAME, e.g., HDFC Bank]",
    accountNumber: "[BANK ACCOUNT NUMBER, e.g., 50100234567890]",
    ifscCode: "[IFSC CODE, e.g., HDFC0000128]",
    city: "Noida / New Delhi",
  });

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const getGeneratedLetter = () => {
    const today = new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    if (activeFormat === "delivery_demand") {
      return `FORMAL COMPLAINT & FINAL DEMAND FOR IMMEDIATE VEHICLE DELIVERY WITH DELAY COMPENSATION
[Issued under the Consumer Protection Act, 2019 & Sale of Goods Act, 1930]

Date: ${today}

From:
${fields.buyerName}
${fields.buyerAddress}
Contact: ${fields.buyerPhone} | Email: ${fields.buyerEmail}

To,
${fields.dealerAuthority},
${fields.dealerName},
${fields.dealerAddress}

Subject: Final demand for immediate physical delivery of booked vehicle (${fields.vehicleModelVariant}) against Booking Docket No. ${fields.bookingDocketNo} alongside reimbursement of daily commute expenses due to unexcused delay [Annotation 1]

Reference:
1. Vehicle Booking Order / Docket Reference: ${fields.bookingDocketNo} dated ${fields.bookingDate}
2. Advance Booking Sum Paid: ${fields.bookingAmountPaid} (vide Receipt / UTR Ref. Dated ${fields.bookingDate})
3. Expressly Committed Delivery Date: ${fields.promisedDeliveryDate}
4. Total Agreed Vehicle Consideration: ${fields.totalAgreedPrice}

Dear Sir / Madam,

1. TRANSACTION & BREACH SUMMARY
On ${fields.bookingDate}, I booked a brand-new ${fields.vehicleModelVariant} (${fields.vehicleColorFuel}) at your authorized showroom, depositing an advance booking consideration of ${fields.bookingAmountPaid}. Your sales team formally undertook and documented that the vehicle would be delivered to me on or before ${fields.promisedDeliveryDate} [Annotation 2].

2. PROLONGED UNEXCUSED DELAY & DEFICIENCY IN SERVICE
More than [NUMBER OF WEEKS] weeks have elapsed beyond the agreed delivery deadline of ${fields.promisedDeliveryDate}. Despite repeated visits, phone calls, and email follow-ups, your dealership has consistently failed to provide a Vehicle Identification Number (VIN) allocation, chassis dispatch proof, or a firm delivery date. Misleading assurances without delivery constitute gross Deficiency in Service under Section 2(11) and Unfair Trade Practice under Section 2(47) of the Consumer Protection Act, 2019 [Annotation 3].

3. FINANCIAL INJURY & ALTERNATIVE COMMUTE EXPENSES
Relying strictly on your contractual commitment to deliver on ${fields.promisedDeliveryDate}, I disposed of / planned around my previous transport arrangement. Because of your unilateral delay, I have been forced to incur an aggregate sum of ${fields.alternativeTravelExpenses} towards daily taxi / rental car commute for my professional and family obligations. Under Section 73 of the Indian Contract Act, 1872 and settled consumer court precedents, your dealership is legally obligated to make good this foreseeable financial damage [Annotation 4].

4. PRICE HIKE IMMUNITY UNDER LAW
Notice is hereby given that if the OEM has revised ex-showroom prices after ${fields.promisedDeliveryDate}, your dealership cannot legally pass on any price escalation to me. The delay is entirely attributable to your administrative default, and as held by consumer commissions across India, a consumer cannot be penalized with price revisions occurring during the dealership's period of delay.

5. FINAL FORMAL REQUISITIONS
I hereby call upon your dealership to comply with the following demands within ${fields.firmDeliveryDeadlineDays} calendar days of receipt of this notice:
   (a) Confirm physical vehicle allotment with valid 17-character VIN and schedule Pre-Delivery Inspection (PDI) within ${fields.firmDeliveryDeadlineDays} days, followed by immediate registration and delivery;
   (b) Reimburse the sum of ${fields.alternativeTravelExpenses} incurred towards alternative travel directly to my bank account; AND
   (c) Provide written confirmation that no post-booking price hike shall be levied on this delivery docket.

Failing immediate compliance within ${fields.firmDeliveryDeadlineDays} days, this complaint shall serve as formal notice of cancellation, and I shall initiate statutory escalation before the National Consumer Helpline (NCH), lodge a complaint with the OEM corporate grievance cell, and file a formal consumer complaint on e-Jagriti under Section 35 of the Consumer Protection Act, 2019 for 100% refund with 12% annual interest, damages for mental harassment, and full litigation costs [Annotation 5].

Yours faithfully,

${fields.buyerName}
(Complainant / Buyer)

Enclosures:
1. Copy of Vehicle Booking Order / Docket (${fields.bookingDocketNo})
2. Official Booking Deposit Receipt (${fields.bookingAmountPaid})
3. Written / Electronic Delivery Date Commitments (WhatsApp & Email records)
4. Itemized Invoices of Alternative Commute Expenses (${fields.alternativeTravelExpenses})`;
    }

    if (activeFormat === "cancellation_refund") {
      return `FORMAL NOTICE OF VEHICLE BOOKING CANCELLATION & DEMAND FOR 100% ADVANCE REFUND WITH INTEREST
[Pursuant to Sections 2(11) & 2(47) of Consumer Protection Act, 2019 & Sale of Goods Act, 1930]

Date: ${today}

From:
${fields.buyerName}
${fields.buyerAddress}
Contact: ${fields.buyerPhone} | Email: ${fields.buyerEmail}

To,
${fields.dealerAuthority},
${fields.dealerName},
${fields.dealerAddress}

Subject: Immediate cancellation of booking docket ${fields.bookingDocketNo} (${fields.vehicleModelVariant}) due to dealership's fundamental breach of delivery timelines and demand for 100% refund of ${fields.bookingAmountPaid} with 12% statutory interest [Annotation 1]

Reference:
1. Booking Order / Docket No.: ${fields.bookingDocketNo} dated ${fields.bookingDate}
2. Advance Deposit Paid: ${fields.bookingAmountPaid}
3. Contractual Committed Delivery Date: ${fields.promisedDeliveryDate}

Dear Sir / Madam,

1. FUNDAMENTAL BREACH OF CONTRACT
On ${fields.bookingDate}, I deposited ${fields.bookingAmountPaid} towards the booking of a ${fields.vehicleModelVariant} upon your express commitment that the vehicle would be physically delivered on or before ${fields.promisedDeliveryDate}. Delivery time was the essence of the commercial bargain under Section 31 and 32 of the Sale of Goods Act, 1930 [Annotation 2].

2. FRUSTRATION OF PURCHASE & CONTINUED DEFAULT
Your dealership has failed to deliver the car or allocate a verified VIN even after extensive delay past ${fields.promisedDeliveryDate}. Due to this willful default, I am hereby formally cancelling the booking with immediate effect from today, ${today}.

3. NULLITY OF DEALER CANCELLATION CHARGES
Be advised that any attempt by your dealership to deduct 'cancellation fees', 'administrative retention', or 'processing charges' (typically ₹2,000 to ₹10,000) is strictly illegal and void. The Hon'ble National Consumer Disputes Redressal Commission (NCDRC) and State Commissions have repeatedly ruled that where cancellation is necessitated by the dealership's failure to deliver within promised timelines, the dealer is guilty of deficiency in service and cannot deduct a single rupee from the customer's advance money [Annotation 3]. Any standard clause printed on booking dockets purporting to forfeit booking advances constitutes an 'Unfair Contract' under Section 2(46) of the Consumer Protection Act, 2019.

4. DEMAND FOR STATUTORY INTEREST
Having retained my capital of ${fields.bookingAmountPaid} without consideration or delivery beyond ${fields.promisedDeliveryDate}, your dealership has enjoyed unjust financial enrichment. In accordance with Section 61 of the Sale of Goods Act, 1930 and settled consumer jurisprudence, I am entitled to commercial interest at 12% per annum from ${fields.promisedDeliveryDate} until the actual date of realization [Annotation 4].

5. REFUND BANK PARTICULARS
You are called upon to credit the entire principal sum of ${fields.bookingAmountPaid} alongside accrued interest directly to my savings bank account within 7 calendar days of receipt of this notice [Annotation 5]:
- Account Holder Name: ${fields.bankAccountName}
- Bank Name: ${fields.bankName}
- Savings Account Number: ${fields.accountNumber}
- IFSC Code: ${fields.ifscCode}

In the event of default or deduction of cancellation charges, I have instructed counsel to immediately dispatch a formal High Court Advocate Legal Notice and lodge an e-daakhil consumer complaint before the District Consumer Commission for the full amount, 18% penal interest, ₹50,000 compensation for mental harassment, and legal expenses.

Yours sincerely,

${fields.buyerName}
(Buyer / Complainant)`;
    }

    if (activeFormat === "twowheeler_ev") {
      return `COMPLAINT & REFUND NOTICE: DELAYED TWO-WHEELER / ELECTRIC VEHICLE (EV) DELIVERY
[Under Consumer Protection Act, 2019 & Ministry of Heavy Industries FAME-II/EMPS Guidelines]

Date: ${today}

From:
${fields.buyerName}
${fields.buyerAddress}
Phone: ${fields.buyerPhone} | Email: ${fields.buyerEmail}

To,
The General Manager / Customer Experience Head,
${fields.dealerName},
${fields.dealerAddress}

Subject: Formal complaint regarding inordinate delay in delivery of electric two-wheeler (${fields.vehicleModelVariant}) against Booking No. ${fields.bookingDocketNo} and demand for immediate delivery or full refund with interest [Annotation 1]

Reference:
1. Electric Two-Wheeler Booking No.: ${fields.bookingDocketNo} dated ${fields.bookingDate}
2. Advance Paid: ${fields.bookingAmountPaid} | Total On-Road Price: ${fields.totalAgreedPrice}
3. Promised Delivery Window: ${fields.promisedDeliveryDate}

Dear Sir / Madam,

1. BOOKING CONTEXT & EXTENDED WAIT TIME
I booked an electric scooter / motorcycle (${fields.vehicleModelVariant}, ${fields.vehicleColorFuel}) on ${fields.bookingDate} with your dealership / digital showroom portal, depositing ${fields.bookingAmountPaid}. Your team promised delivery by ${fields.promisedDeliveryDate}. Months have passed with indefinite app status updates ('vehicle in transit' / 'production batch scheduled') without physical delivery or battery serial number allotment [Annotation 2].

2. SUBSIDY / FAME / EMPS DISPUTES
Dealership personnel have cited battery supply delays or EV subsidy portal delays as pretexts. The Hon'ble Consumer Commissions have firmly settled that internal supply-chain hurdles or governmental subsidy delays between OEM and dealership do not excuse deficiency of service toward retail consumers who have paid advance funds [Annotation 3].

3. REQUISITIONS
Take notice that you are required to either:
(a) Hand over physical delivery of the fully inspected vehicle with registered High Security Registration Plate (HSRP) and certified battery pack within 7 days; OR
(b) Issue an immediate 100% refund of ${fields.bookingAmountPaid} via NEFT to:
    Bank: ${fields.bankName} | Account: ${fields.accountNumber} | IFSC: ${fields.ifscCode} | Name: ${fields.bankAccountName}
    without any administrative cancellation deduction [Annotation 4].

Failure to resolve within 7 days will compel me to file an INGRAM grievance with the Central Consumer Protection Authority (CCPA) and approach the Consumer Commission under Section 35 CPA 2019 for refund, interest, and punitive damages [Annotation 5].

Yours faithfully,

${fields.buyerName}`;
    }

    // Hindi format
    return `वाहन डिलीवरी में अनुचित देरी एवं अग्रिम राशि की पूर्ण वापसी हेतु औपचारिक शिकायत पत्र
[उपभोक्ता संरक्षण अधिनियम, 2019 की धारा 2(11) व 2(47) एवं वस्तु विक्रय अधिनियम, 1930 के तहत]

दिनांक: ${today}

प्रेषक:
${fields.buyerName}
${fields.buyerAddress}
मोबाइल: ${fields.buyerPhone} | ईमेल: ${fields.buyerEmail}

सेवा में,
${fields.dealerAuthority},
${fields.dealerName},
${fields.dealerAddress}

विषय: वाहन (${fields.vehicleModelVariant}) की बुकिंग संख्या ${fields.bookingDocketNo} के अंतर्गत डिलीवरी में अवांछित देरी, 7 दिनों में डिलीवरी अथवा 100% अग्रिम राशि (${fields.bookingAmountPaid}) ब्याज सहित वापसी की मांग [Annotation 1]।

संदर्भ:
1. वाहन बुकिंग रसीद / डॉकेट संख्या: ${fields.bookingDocketNo} (दिनांक: ${fields.bookingDate})
2. जमा की गई अग्रिम बुकिंग राशि: ${fields.bookingAmountPaid}
3. डीलरशिप द्वारा लिखित रूप से दी गई डिलीवरी तिथि: ${fields.promisedDeliveryDate}

महोदय / महोदया,

1. मैंने आपके अधिकृत शोरूम से दिनांक ${fields.bookingDate} को वाहन ${fields.vehicleModelVariant} की बुकिंग की थी तथा अग्रिम राशि के रूप में ${fields.bookingAmountPaid} का भुगतान किया था। आपके बिक्री प्रतिनिधि ने मुझे विश्वास दिलाया था कि वाहन की निश्चित डिलीवरी ${fields.promisedDeliveryDate} को या उससे पूर्व कर दी जाएगी [Annotation 2]।

2. आज तय डिलीवरी तिथि से लंबा समय बीत चुका है, किंतु आपकी डीलरशिप द्वारा मुझे न तो वाहन का चेसिस / VIN नंबर आवंटित किया गया है और न ही डिलीवरी दी गई है। यह उपभोक्ता संरक्षण अधिनियम 2019 की धारा 2(11) के तहत 'सेवा में घोर कमी' (Deficiency in Service) तथा धारा 2(47) के तहत 'अनुचित व्यापार व्यवहार' (Unfair Trade Practice) का प्रत्यक्ष प्रमाण है [Annotation 3]।

3. इस देरी के कारण मुझे प्रतिदिन आवागमन हेतु कैब एवं वैकल्पिक साधनों पर भारी व्यय (${fields.alternativeTravelExpenses}) करना पड़ा है। राष्ट्रीय उपभोक्ता आयोग (NCDRC) के कई निर्णयों में यह स्पष्ट किया गया है कि यदि डीलर समय पर वाहन नहीं देता, तो वह ग्राहक से किसी भी प्रकार का रद्दीकरण शुल्क (Cancellation Charge) नहीं काट सकता और संपूर्ण बुकिंग राशि ब्याज सहित लौटाने के लिए बाध्य है [Annotation 4]।

4. अतः इस शिकायत पत्र के माध्यम से आपको 7 दिनों का अंतिम समय दिया जाता है कि:
   (क) मेरे वाहन का त्वरित आवंटन कर डिलीवरी की तारीख सुनिश्चित करें एवं वैकल्पिक आवागमन व्यय की प्रतिपूर्ति करें; अथवा
   (ख) बुकिंग राशि ${fields.bookingAmountPaid} 12% वार्षिक ब्याज सहित मेरे बैंक खाते में तत्काल NEFT/RTGS द्वारा वापस करें [Annotation 5]:
       - खाताधारक का नाम: ${fields.bankAccountName}
       - बैंक का नाम: ${fields.bankName}
       - खाता संख्या: ${fields.accountNumber}
       - IFSC कोड: ${fields.ifscCode}

यदि 7 कार्य दिवसों में मेरी समस्या का समाधान नहीं किया गया, तो मैं बिना किसी अन्य सूचना के राष्ट्रीय उपभोक्ता हेल्पलाइन (NCH 1915), ई-दाखिल (e-Jagriti) उपभोक्ता आयोग में परिवाद दर्ज करवाऊंगा तथा एडवोकेट के माध्यम से विधिक नोटिस प्रेषित करूंगा, जिसका समस्त हर्जा-खर्चा आपकी डीलरशिप पर होगा।

भवदीय,

${fields.buyerName}
(क्रेता / शिकायतकर्ता)`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getGeneratedLetter());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleDownloadDoc = () => {
    const text = getGeneratedLetter();
    const blob = new Blob([text], { type: "application/msword;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Car_Delivery_Delay_Complaint_${fields.bookingDocketNo.replace(/[^a-zA-Z0-9]/g, "_") || "Letter"}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    const content = getGeneratedLetter();
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>Vehicle Delivery Delay Complaint Letter</title>
          <style>
            body { font-family: 'Times New Roman', serif; line-height: 1.6; padding: 40px; color: #111; }
            pre { white-space: pre-wrap; font-family: inherit; font-size: 14px; }
          </style>
        </head>
        <body>
          <pre>${content}</pre>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden mb-12">
      {/* Workspace Header */}
      <div className="bg-slate-900 text-white p-5 sm:p-7 border-b border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-950/80 text-red-300 border border-red-800/60 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Live Interactive Workspace • Archetype P1
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Vehicle Delivery Delay Complaint Letter Generator
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Customise your facts below to generate a legally anchored letter demanding firm delivery or 100% advance refund without cancellation penalties.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Word Count:</span>
            <span className="text-xs font-mono font-bold bg-slate-800 px-2.5 py-1 rounded text-emerald-400">
              {getGeneratedLetter().split(/\s+/).filter(Boolean).length} words
            </span>
          </div>
        </div>

        {/* Format Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-6 pt-5 border-t border-slate-800">
          <button
            type="button"
            onClick={() => setActiveFormat("delivery_demand")}
            className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold text-center transition-all cursor-pointer ${
              activeFormat === "delivery_demand"
                ? "bg-red-600 text-white shadow-lg shadow-red-900/40"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
          >
            Option A: Firm Delivery &amp; Cab Cost
          </button>
          <button
            type="button"
            onClick={() => setActiveFormat("cancellation_refund")}
            className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold text-center transition-all cursor-pointer ${
              activeFormat === "cancellation_refund"
                ? "bg-red-600 text-white shadow-lg shadow-red-900/40"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
          >
            Option B: 100% Refund (Zero Deductions)
          </button>
          <button
            type="button"
            onClick={() => setActiveFormat("twowheeler_ev")}
            className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold text-center transition-all cursor-pointer ${
              activeFormat === "twowheeler_ev"
                ? "bg-red-600 text-white shadow-lg shadow-red-900/40"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
          >
            Option C: Bike / EV Scooter Delay
          </button>
          <button
            type="button"
            onClick={() => setActiveFormat("hindi_complaint")}
            className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold text-center transition-all cursor-pointer ${
              activeFormat === "hindi_complaint"
                ? "bg-red-600 text-white shadow-lg shadow-red-900/40"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
          >
            Option D: हिंदी शिकायत पत्र
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Left Column: Form Fields */}
        <div className="lg:col-span-5 p-5 sm:p-6 bg-slate-50/70 overflow-y-auto max-h-[850px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
              1. Fill Your Vehicle &amp; Dealer Particulars
            </h3>
            <span className="text-[11px] text-slate-500">Live Updates Preview</span>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor={`${formId}-buyerName`} className="block text-xs font-semibold text-slate-700 mb-1">
                Your Full Name (As per Booking Docket)
              </label>
              <input
                id={`${formId}-buyerName`}
                type="text"
                name="buyerName"
                value={fields.buyerName}
                onChange={handleFieldChange}
                className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor={`${formId}-buyerPhone`} className="block text-xs font-semibold text-slate-700 mb-1">
                  Mobile Number
                </label>
                <input
                  id={`${formId}-buyerPhone`}
                  type="text"
                  name="buyerPhone"
                  value={fields.buyerPhone}
                  onChange={handleFieldChange}
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-buyerEmail`} className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  id={`${formId}-buyerEmail`}
                  type="email"
                  name="buyerEmail"
                  value={fields.buyerEmail}
                  onChange={handleFieldChange}
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor={`${formId}-buyerAddress`} className="block text-xs font-semibold text-slate-700 mb-1">
                Your Residential Address &amp; City
              </label>
              <input
                id={`${formId}-buyerAddress`}
                type="text"
                name="buyerAddress"
                value={fields.buyerAddress}
                onChange={handleFieldChange}
                className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div className="pt-2 border-t border-slate-200">
              <label htmlFor={`${formId}-dealerName`} className="block text-xs font-semibold text-slate-700 mb-1">
                Authorized Dealership Name &amp; Brand
              </label>
              <input
                id={`${formId}-dealerName`}
                type="text"
                name="dealerName"
                value={fields.dealerName}
                onChange={handleFieldChange}
                placeholder="e.g. Apex Autocraft Pvt. Ltd. (Tata Motors Dealer)"
                className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div>
              <label htmlFor={`${formId}-dealerAddress`} className="block text-xs font-semibold text-slate-700 mb-1">
                Showroom Branch Address
              </label>
              <input
                id={`${formId}-dealerAddress`}
                type="text"
                name="dealerAddress"
                value={fields.dealerAddress}
                onChange={handleFieldChange}
                className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor={`${formId}-vehicleModelVariant`} className="block text-xs font-semibold text-slate-700 mb-1">
                  Car / Bike Model &amp; Variant
                </label>
                <input
                  id={`${formId}-vehicleModelVariant`}
                  type="text"
                  name="vehicleModelVariant"
                  value={fields.vehicleModelVariant}
                  onChange={handleFieldChange}
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-vehicleColorFuel`} className="block text-xs font-semibold text-slate-700 mb-1">
                  Color &amp; Fuel Type
                </label>
                <input
                  id={`${formId}-vehicleColorFuel`}
                  type="text"
                  name="vehicleColorFuel"
                  value={fields.vehicleColorFuel}
                  onChange={handleFieldChange}
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor={`${formId}-bookingDocketNo`} className="block text-xs font-semibold text-slate-700 mb-1">
                  Booking Order / Docket No.
                </label>
                <input
                  id={`${formId}-bookingDocketNo`}
                  type="text"
                  name="bookingDocketNo"
                  value={fields.bookingDocketNo}
                  onChange={handleFieldChange}
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-bookingDate`} className="block text-xs font-semibold text-slate-700 mb-1">
                  Booking Date
                </label>
                <input
                  id={`${formId}-bookingDate`}
                  type="text"
                  name="bookingDate"
                  value={fields.bookingDate}
                  onChange={handleFieldChange}
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor={`${formId}-promisedDeliveryDate`} className="block text-xs font-semibold text-slate-700 mb-1">
                  Promised Delivery Date
                </label>
                <input
                  id={`${formId}-promisedDeliveryDate`}
                  type="text"
                  name="promisedDeliveryDate"
                  value={fields.promisedDeliveryDate}
                  onChange={handleFieldChange}
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-bookingAmountPaid`} className="block text-xs font-semibold text-slate-700 mb-1">
                  Advance Paid (₹)
                </label>
                <input
                  id={`${formId}-bookingAmountPaid`}
                  type="text"
                  name="bookingAmountPaid"
                  value={fields.bookingAmountPaid}
                  onChange={handleFieldChange}
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor={`${formId}-alternativeTravelExpenses`} className="block text-xs font-semibold text-slate-700 mb-1">
                Cab / Travel Expenses Incurred During Delay
              </label>
              <input
                id={`${formId}-alternativeTravelExpenses`}
                type="text"
                name="alternativeTravelExpenses"
                value={fields.alternativeTravelExpenses}
                onChange={handleFieldChange}
                placeholder="e.g. ₹18,500 (Taxi receipts attached)"
                className="w-full text-xs bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>

            {/* Refund Bank Details */}
            <div className="pt-2 border-t border-slate-200">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2">
                Bank Details for Direct Refund (NEFT/RTGS)
              </span>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor={`${formId}-bankAccountName`} className="block text-[11px] text-slate-600 mb-0.5">
                    Account Holder Name
                  </label>
                  <input
                    id={`${formId}-bankAccountName`}
                    type="text"
                    name="bankAccountName"
                    value={fields.bankAccountName}
                    onChange={handleFieldChange}
                    className="w-full text-xs bg-white border border-slate-300 rounded px-2.5 py-1.5 text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor={`${formId}-bankName`} className="block text-[11px] text-slate-600 mb-0.5">
                    Bank Name
                  </label>
                  <input
                    id={`${formId}-bankName`}
                    type="text"
                    name="bankName"
                    value={fields.bankName}
                    onChange={handleFieldChange}
                    className="w-full text-xs bg-white border border-slate-300 rounded px-2.5 py-1.5 text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor={`${formId}-accountNumber`} className="block text-[11px] text-slate-600 mb-0.5">
                    Account Number
                  </label>
                  <input
                    id={`${formId}-accountNumber`}
                    type="text"
                    name="accountNumber"
                    value={fields.accountNumber}
                    onChange={handleFieldChange}
                    className="w-full text-xs bg-white border border-slate-300 rounded px-2.5 py-1.5 text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor={`${formId}-ifscCode`} className="block text-[11px] text-slate-600 mb-0.5">
                    IFSC Code
                  </label>
                  <input
                    id={`${formId}-ifscCode`}
                    type="text"
                    name="ifscCode"
                    value={fields.ifscCode}
                    onChange={handleFieldChange}
                    className="w-full text-xs bg-white border border-slate-300 rounded px-2.5 py-1.5 text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Article Preview */}
        <div className="lg:col-span-7 p-5 sm:p-6 bg-white flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
                  2. Live Letter Preview &bull; Formal Legal Format
                </h3>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <span className="text-emerald-400">✓</span> Copied to Clipboard
                    </>
                  ) : (
                    <>
                      <span>📋</span> Copy Text
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleDownloadDoc}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors cursor-pointer"
                >
                  <span>💾</span> Download .DOC
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors cursor-pointer"
                >
                  <span>🖨️</span> Print / PDF
                </button>
              </div>
            </div>

            {/* Letter Document Preview Rendered as semantic <article> */}
            <article className="bg-[#FAF9F5] border border-slate-300 rounded-xl p-5 sm:p-7 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-800 whitespace-pre-wrap max-h-[640px] overflow-y-auto select-all shadow-inner">
              {getGeneratedLetter()}
            </article>
          </div>

          {/* Legal Annotations Callout */}
          <div className="mt-4 pt-4 border-t border-slate-200">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>⚖️</span> Statutory Anchors Used in This Letter:
            </h4>
            <ol className="text-[11px] text-slate-600 space-y-1 list-decimal list-inside pl-1">
              <li>
                <strong className="text-slate-800">Annotation 1:</strong> Identifies reciprocal obligations under Section 31 of Sale of Goods Act, 1930.
              </li>
              <li>
                <strong className="text-slate-800">Annotation 2:</strong> Establishes delivery time as an essential condition of contract; breach entitles buyer to repudiate.
              </li>
              <li>
                <strong className="text-slate-800">Annotation 3:</strong> Defiance of committed turnaround constitutes Deficiency in Service under Section 2(11) CPA 2019.
              </li>
              <li>
                <strong className="text-slate-800">Annotation 4:</strong> NCDRC precedent bars dealers from deducting cancellation fees when delay is caused by dealership default.
              </li>
              <li>
                <strong className="text-slate-800">Annotation 5:</strong> Establishes 7-day cure period before approaching NCH 1915 and e-Jagriti consumer commission.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
