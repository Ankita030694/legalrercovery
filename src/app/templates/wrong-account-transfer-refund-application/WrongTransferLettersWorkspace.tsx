"use client";

import React, { useState, useId } from "react";

type LetterVariantKey = "homeBranch" | "beneficiaryBank" | "upiDispute" | "hindiFormat" | "recipientDemand";

interface WrongTransferFields {
  remitterName: string;
  remitterAddress: string;
  remitterPhone: string;
  remitterEmail: string;
  remitterBank: string;
  remitterBranch: string;
  remitterAccountNo: string;
  wrongAccountNo: string;
  wrongAccountHolder: string;
  wrongBankName: string;
  wrongBankBranch: string;
  wrongUpiId: string;
  intendedAccountOrUpi: string;
  txnDate: string;
  txnAmount: string;
  txnMode: string;
  utrNumber: string;
  clericalErrorType: string;
  cureWindowDays: string;
}

export default function WrongTransferLettersWorkspace() {
  const formId = useId();
  const [activeVariant, setActiveVariant] = useState<LetterVariantKey>("homeBranch");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const [fields, setFields] = useState<WrongTransferFields>({
    remitterName: "[YOUR FULL NAME, e.g., Rajesh Kumar Sharma]",
    remitterAddress: "[Your Complete Postal Address, e.g., Flat 302, Green Glen Layout, Bellandur, Bengaluru - 560103]",
    remitterPhone: "[Mobile Number, e.g., +91 98765 43210]",
    remitterEmail: "[Email Address, e.g., rajesh.sharma@example.com]",
    remitterBank: "[YOUR BANK NAME, e.g., State Bank of India]",
    remitterBranch: "[Home Branch Name, e.g., Koramangala 4th Block Branch]",
    remitterAccountNo: "[Your Bank Account Number, e.g., 30894512789]",
    wrongAccountNo: "[WRONGLY CREDITED ACCOUNT NUMBER, e.g., 20184512789]",
    wrongAccountHolder: "[Name of Wrong Recipient, if known from SMS/App, e.g., Unknown / Suresh Verma]",
    wrongBankName: "[DESTINATION BANK NAME, e.g., Punjab National Bank / HDFC Bank]",
    wrongBankBranch: "[Beneficiary Branch / IFSC if known, e.g., PUNB0123400]",
    wrongUpiId: "[WRONG UPI ID / VPA, if applicable, e.g., suresh98@okaxis]",
    intendedAccountOrUpi: "[INTENDED ACCOUNT / UPI ID, e.g., Account 30184512789 / rajesh.work@okhdfcbank]",
    txnDate: "[04 November 2026 at 11:35 AM]",
    txnAmount: "[₹48,500 (Rupees Forty-Eight Thousand Five Hundred Only)]",
    txnMode: "IMPS / UPI",
    utrNumber: "[12-Digit UTR / UPI RRN, e.g., 430911892341]",
    clericalErrorType: "Typo in a single digit of the beneficiary account number while adding payee",
    cureWindowDays: "7",
  });

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  // Format 1: Urgent Home Branch Application (English)
  const buildHomeBranchLetter = () => `URGENT APPLICATION FOR REVERSAL OF WRONGLY TRANSFERRED FUNDS UNDER SECTION 72 OF THE INDIAN CONTRACT ACT, 1872

Date: [DD Month YYYY]

To,
The Branch Manager,
${fields.remitterBank},
${fields.remitterBranch}
Branch Address: [Branch City & PIN Code]

FROM:
Applicant: ${fields.remitterName}
Account Number: ${fields.remitterAccountNo}
Registered Mobile: ${fields.remitterPhone}
Registered Email: ${fields.remitterEmail}
Mailing Address: ${fields.remitterAddress}

SUBJECT: Urgent Application Requesting Immediate Lien Placement & Inter-Bank Reversal of ${fields.txnAmount} Transferred to Wrong Account Number ${fields.wrongAccountNo} (UTR / Reference: ${fields.utrNumber}) Due to Clerical Error.

Respected Sir / Madam,

I am a savings/current account holder in your branch maintaining Account Number ${fields.remitterAccountNo}. I write to urgently place on formal record that on ${fields.txnDate}, an electronic fund transfer of ${fields.txnAmount} was erroneously remitted from my aforesaid account to an unintended beneficiary due to an inadvertent clerical mistake.

1. TRANSACTION & INCIDENT DETAILS:
• Remitter Account No.: ${fields.remitterAccountNo}
• Mode of Transfer: ${fields.txnMode}
• Date & Exact Time of Debit: ${fields.txnDate}
• Amount Debited: ${fields.txnAmount}
• Unique Transaction Reference (UTR / UPI RRN): ${fields.utrNumber}
• Intended Beneficiary Details: ${fields.intendedAccountOrUpi}
• Wrongly Credited Account No.: ${fields.wrongAccountNo}
• Beneficiary Bank Name & IFSC: ${fields.wrongBankName} (${fields.wrongBankBranch})
• Wrong Recipient Name (as reflected in transaction receipt): ${fields.wrongAccountHolder}
• Nature of Error: ${fields.clericalErrorType}

2. STATUTORY BASIS UNDER SECTION 72 OF THE INDIAN CONTRACT ACT, 1872:
Under Section 72 of the Indian Contract Act, 1872, any person to whom money has been paid or delivered by mistake is statutorily bound to return or repay it. The Hon'ble Supreme Court of India in Sales Tax Officer, Banaras v. Kanhaiya Lal Makund Lal Saraf (AIR 1959 SC 135) and Mahabir Kishore v. State of Madhya Pradesh ((1989) 4 SCC 1) has authoritatively affirmed that receipt of money by mistake creates an immediate legal obligation of restitution to prevent unjust enrichment. The unintended recipient has no lawful claim or title to these funds.

3. IMMEDIATE PRAYER / ACTIONS REQUESTED FROM THE HOME BANK:
In accordance with Reserve Bank of India (RBI) Master Directions and customer service guidelines:
(a) Immediate Inter-Bank Intimation: I request your branch to immediately dispatch an official inter-bank dispute/reversal request message through the SFMS / NEFT / IMPS / NPCI settlement rail to the Nodal Officer and Branch Manager of ${fields.wrongBankName};
(b) Placement of Temporary Debit Freeze / Lien: Request the destination bank (${fields.wrongBankName}) to place an immediate administrative lien or debit hold on Account Number ${fields.wrongAccountNo} for the credited sum of ${fields.txnAmount} to prevent withdrawal or siphoning off;
(c) Obtaining Beneficiary Consent for Reversal: Direct ${fields.wrongBankName} to contact the wrong account holder to obtain their written consent for immediate debit and reversal credit back to my Account Number ${fields.remitterAccountNo};
(d) Disclosure of Necessary Particulars for Legal Redress: If the unintended recipient fails to consent within 48 hours or disputes the return, kindly provide me the official branch contact details of ${fields.wrongBankName} to enable me to serve a formal Advocate Legal Demand Notice and initiate magisterial proceedings.

Enclosed herewith please find self-attested copies of:
1. Transaction debit alert SMS and Internet Banking transaction receipt showing UTR ${fields.utrNumber}.
2. Bank account passbook / statement reflecting the debit entry of ${fields.txnAmount}.
3. Proof of intended transaction establishing bona fide clerical error.
4. Self-attested copy of my PAN Card and Aadhaar Card.

I request you to kindly provide a stamped and dated receiving acknowledgment on the duplicate copy of this application for my records.

Thanking you.

Yours faithfully,

(Signature)
${fields.remitterName}
Account No.: ${fields.remitterAccountNo}
Contact: ${fields.remitterPhone}
Date: [DD Month YYYY]`;

  // Format 2: Application to Destination / Beneficiary Bank (English)
  const buildBeneficiaryBankLetter = () => `BY HAND DELIVERY / REGISTERED EMAIL / SPEED POST WITH ACKNOWLEDGMENT DUE

Date: [DD Month YYYY]

To,
1. The Branch Manager,
   ${fields.wrongBankName},
   Branch / Office: ${fields.wrongBankBranch}
   Address: [Destination Branch Address with PIN]

2. The Principal Nodal Officer / Grievance Redressal Officer,
   ${fields.wrongBankName},
   Corporate / Zonal Office: [Bank Address]

FROM:
${fields.remitterName}
Account No.: ${fields.remitterAccountNo} (${fields.remitterBank}, ${fields.remitterBranch})
Mobile: ${fields.remitterPhone} | Email: ${fields.remitterEmail}
Address: ${fields.remitterAddress}

SUBJECT: Formal Demand for Administrative Lien Placement & Reversal of Mistakenly Credited Funds of ${fields.txnAmount} in Account Number ${fields.wrongAccountNo} (UTR / Reference: ${fields.utrNumber}) under Section 72 of the Indian Contract Act, 1872.

Respected Sir / Madam,

This formal communication is addressed to you in continuation of the official inter-bank communication initiated by my home bank, ${fields.remitterBank} (${fields.remitterBranch}), regarding an erroneous electronic remittance credited into an account maintained at your branch.

1. ADMITTED TRANSACTION PARTICULARS:
• Date & Time of Transfer: ${fields.txnDate}
• Debited From: Account No. ${fields.remitterAccountNo}, ${fields.remitterBank}
• Erroneously Credited To: Account No. ${fields.wrongAccountNo} at your branch (${fields.wrongBankName})
• Beneficiary Display Name: ${fields.wrongAccountHolder}
• Mode of Remittance: ${fields.txnMode}
• Unique Transaction Reference (UTR / UPI RRN): ${fields.utrNumber}
• Exact Sum Credited by Mistake: ${fields.txnAmount}
• Clerical Error Origin: ${fields.clericalErrorType} (Intended destination: ${fields.intendedAccountOrUpi}).

2. LEGAL NATURE OF FUNDS & BENEFICIARY'S ABSENCE OF TITLE:
I reiterate that the credit of ${fields.txnAmount} into Account Number ${fields.wrongAccountNo} is solely the result of a clerical mistake of fact. Under Section 72 of the Indian Contract Act, 1872, the holder of Account Number ${fields.wrongAccountNo} holds these funds strictly in quasi-contractual trust and has zero lawful right to retain, appropriate, transfer, or withdraw the same. Furthermore, under Section 314 of the Bharatiya Nyaya Sanhita, 2023 (BNS) [formerly Section 403 IPC], knowing appropriation of property received by mistake constitutes Dishonest Misappropriation of Property, punishable with imprisonment and fine.

3. STATUTORY DUTY OF THE DESTINATION BANK:
While banking privacy rules protect customer records, the Reserve Bank of India and judicial pronouncements establish that a bank cannot facilitate unjust enrichment or permit its payment infrastructure to shield wrongful gains. You are requested to:
(a) Place an immediate administrative debit lien / freeze of ${fields.txnAmount} on Account Number ${fields.wrongAccountNo};
(b) Issue an immediate formal call / notice to your account holder (${fields.wrongAccountHolder}) intimating that these funds represent an erroneous remittance and requiring their written consent for immediate reversal;
(c) Remit the sum of ${fields.txnAmount} back to my source account (${fields.remitterAccountNo}, ${fields.remitterBank}, IFSC: [Remitter Bank IFSC]) upon receiving consent;
(d) If your account holder disputes or unlawfully refuses consent, issue a formal written endorsement to that effect to enable me to seek attachment orders under Section 72 of the Indian Contract Act and file a consumer complaint for deficiency in service.

Please treat this matter with utmost urgency, as any disbursement or withdrawal of these funds subsequent to this notice may expose the bank to co-liability for facilitating misappropriation.

Yours sincerely,

(Signature)
${fields.remitterName}
Contact: ${fields.remitterPhone}
Enclosures: Bank Statement, Transaction Receipt (UTR: ${fields.utrNumber}), Copy of Application to Home Bank.`;

  // Format 3: UPI Wrong Transfer Dispute (NPCI / App / PSP)
  const buildUpiDisputeLetter = () => `FORMAL UPI DISPUTE & REVERSAL REQUEST FOR WRONG VPA / ACCOUNT TRANSFER
(Submitted to Bank Nodal Officer & Payment Service Provider Grievance Cell)

Date: [DD Month YYYY]

To,
1. The Grievance Redressal Officer / Nodal Officer,
   ${fields.remitterBank}

2. The Grievance Officer,
   UPI Payment Application / PSP (Google Pay / PhonePe / Paytm / BHIM)

FROM:
${fields.remitterName}
Registered Mobile Linked to UPI: ${fields.remitterPhone}
Primary Bank Account: ${fields.remitterAccountNo} (${fields.remitterBank})
Email Address: ${fields.remitterEmail}

SUBJECT: Urgent Dispute Regarding Wrong UPI Remittance of ${fields.txnAmount} via UPI RRN ${fields.utrNumber} on ${fields.txnDate} — Request for Reversal via NPCI UDIR Framework.

Sir / Madam,

I am submitting this formal complaint regarding an inadvertent erroneous UPI payment initiated through my registered mobile number ${fields.remitterPhone}.

1. INCIDENT & TRANSACTION SUMMARY:
• Payment Mode: Unified Payments Interface (UPI)
• Transaction Date & Timestamp: ${fields.txnDate}
• Debited Sum: ${fields.txnAmount}
• 12-Digit UPI Reference Number (RRN): ${fields.utrNumber}
• Remitter VPA / Linked Account: ${fields.remitterPhone}@bank / A/c ${fields.remitterAccountNo}
• Wrongly Credited UPI ID / Mobile Number: ${fields.wrongUpiId}
• Wrong Recipient Name Shown in App: ${fields.wrongAccountHolder}
• Destination Bank: ${fields.wrongBankName}
• Nature of Error: ${fields.clericalErrorType} (Intended recipient: ${fields.intendedAccountOrUpi})

2. NPCI UNIFIED DISPUTE & ISSUE RESOLUTION (UDIR) FRAMEWORK:
Under NPCI guidelines and circulars governing the Unified Payments Interface, erroneous transfers reported by consumers must be logged under the dispute category "Incorrectly Transferred to Another Account". The remitter bank and the beneficiary bank are required to coordinate through the automated dispute rail to contact the unintended recipient and effect an automated shadow reversal upon consent.

3. RELIEF SOUGHT:
1. Formally log this complaint on the NPCI dispute management system under the "Wrong Beneficiary Transfer" sub-category;
2. Request ${fields.wrongBankName} to freeze the sum of ${fields.txnAmount} in the beneficiary's wallet or linked bank account;
3. Initiate the standard consent-based retrieval workflow and refund the entire debited sum of ${fields.txnAmount} to my bank account;
4. Provide the formal NPCI Complaint Ticket Number for tracking.

I attach the transaction screenshot, debit SMS, and bank statement demonstrating the debit.

Yours faithfully,

(Signature)
${fields.remitterName}
Mobile: ${fields.remitterPhone}`;

  // Format 4: Hindi Devanagari Format (बैंक शाखा प्रबंधक को प्रार्थना पत्र)
  const buildHindiLetter = () => `सेवा में,
श्रीमान शाखा प्रबंधक महोदय,
${fields.remitterBank},
शाखा: ${fields.remitterBranch}
[शाखा का पता, शहर एवं पिन कोड]

आवेदक:
नाम: ${fields.remitterName}
खाता संख्या: ${fields.remitterAccountNo}
पंजीकृत मोबाइल नंबर: ${fields.remitterPhone}
ईमेल: ${fields.remitterEmail}
पता: ${fields.remitterAddress}

दिनांक: [दिन / माह / वर्ष]

विषय: लिपिकीय भूलवश गलत बैंक खाते (${fields.wrongAccountNo}) / यूपीआई में ट्रांसफर हुई राशि ${fields.txnAmount} को वापस कराने (Reversal) एवं होल्ड (Lien) लगाने हेतु प्रार्थना पत्र।

महोदय / महोदया,

सविनय निवेदन है कि प्रार्थी ${fields.remitterName} आपकी बैंक शाखा में बचत/चालू खाता संख्या ${fields.remitterAccountNo} का धारक है। प्रार्थी द्वारा दिनांक ${fields.txnDate} को भूलवश गलत खाते में ऑनलाइन माध्यम (${fields.txnMode}) से धनराशि स्थानांतरित हो गई है, जिसका विवरण निम्नानुसार है:

1. त्रुटिपूर्ण लेनदेन का विवरण:
• प्रार्थी का बैंक खाता संख्या: ${fields.remitterAccountNo}
• ट्रांसफर का माध्यम: ${fields.txnMode}
• लेनदेन की तिथि एवं समय: ${fields.txnDate}
• ट्रांसफर की गई कुल राशि: ${fields.txnAmount}
• लेनदेन संदर्भ संख्या (UTR / UPI RRN): ${fields.utrNumber}
• गलत लाभार्थी का खाता संख्या / यूपीआई: ${fields.wrongAccountNo} / ${fields.wrongUpiId}
• गलत लाभार्थी का बैंक एवं शाखा: ${fields.wrongBankName} (${fields.wrongBankBranch})
• वास्तविक (इच्छित) लाभार्थी: ${fields.intendedAccountOrUpi}
• भूल का कारण: ${fields.clericalErrorType}

2. भारतीय अनुबंध अधिनियम, 1872 की धारा 72 का कानूनी प्रावधान:
भारतीय अनुबंध अधिनियम (Indian Contract Act, 1872) की धारा 72 (Section 72) के अनुसार, यदि किसी व्यक्ति को भूलवश अथवा त्रुटिवश कोई धन प्राप्त होता है, तो वह उस धन को अपने पास रखने का अधिकारी नहीं है और उसे वह धनराशि मूल स्वामी को वापस लौटानी होगी। माननीय सर्वोच्च न्यायालय (Supreme Court of India) ने अपने अनेक निर्णयों में यह स्पष्ट किया है कि भूल से प्राप्त धन का अनधिकृत उपभोग कानूनन 'अन्यायपूर्ण संवर्धन' (Unjust Enrichment) है।

3. बैंक से की जाने वाली प्रार्थना:
अतः श्रीमान से करबद्ध प्रार्थना है कि:
(क) भारतीय रिजर्व बैंक (RBI) एवं NPCI के नियमानुसार तत्काल संबंधित गंतव्य बैंक (${fields.wrongBankName}) को आधिकारिक संदेश (Inter-Bank Dispute Request) प्रेषित करें;
(ख) गलत प्राप्तकर्ता के खाते (${fields.wrongAccountNo}) में प्रार्थी की राशि ${fields.txnAmount} पर तत्काल होल्ड / लीन (Administrative Lien/Freeze) लगवाया जाए ताकि वह इसे निकाल न सके;
(ग) संबंधित खाताधारक से सहमति प्राप्त कर उक्त धनराशि को प्रार्थी के मूल खाते में वापस (Reverse Credit) कराने की कृपा करें;
(घ) यदि प्राप्तकर्ता राशि लौटाने से मना करता है, तो आवश्यक कानूनी कार्यवाही हेतु प्रार्थी को पत्राचार विवरण उपलब्ध कराया जाए।

संलग्नक:
1. बैंक पासबुक / खाते के स्टेटमेंट की प्रतिलिपि।
2. इंटरनेट बैंकिंग / यूपीआई ट्रांसफर की रसीद एवं UTR/RRN स्लिप।
3. पहचान पत्र (आधार कार्ड / पैन कार्ड) की स्व-प्रमाणित प्रति।

धन्यवाद।

भवदीय,

(हस्ताक्षर)
${fields.remitterName}
खाता संख्या: ${fields.remitterAccountNo}
मोबाइल नंबर: ${fields.remitterPhone}`;

  // Format 5: Legal Demand Notice to Recipient (Section 72 & BNS 314/316)
  const buildRecipientDemandLetter = () => `BY REGISTERED POST WITH ACKNOWLEDGMENT DUE (RPAD) & SPEED POST / WHATSAPP NOTICE
WITHOUT PREJUDICE

Date: [DD Month YYYY]

To,
${fields.wrongAccountHolder}
Holder of Bank Account No.: ${fields.wrongAccountNo}
Bank & Branch: ${fields.wrongBankName}, ${fields.wrongBankBranch}
UPI ID: ${fields.wrongUpiId}
Address: [Residential / Postal Address, if obtained via branch/police]

FROM:
${fields.remitterName}
Address: ${fields.remitterAddress}
Mobile: ${fields.remitterPhone} | Email: ${fields.remitterEmail}

SUBJECT: STATUTORY DEMAND NOTICE UNDER SECTION 72 OF THE INDIAN CONTRACT ACT, 1872 DEMANDING IMMEDIATE REFUND OF ${fields.txnAmount} CREDITED BY MISTAKE VIDE UTR ${fields.utrNumber} INTO YOUR ACCOUNT, FAILING WHICH CIVIL & CRIMINAL PROCEEDINGS UNDER BNS 2023 SHALL BE INITIATED.

Sir / Madam,

Under instructions from and on behalf of my client / by myself, this formal statutory notice is served upon you:

1. That on ${fields.txnDate}, a sum of ${fields.txnAmount} was electronically debited from my account (${fields.remitterAccountNo} maintained at ${fields.remitterBank}) and erroneously credited into your bank account (${fields.wrongAccountNo} at ${fields.wrongBankName}) vide UTR / UPI Reference No. ${fields.utrNumber} due to an inadvertent typing error (${fields.clericalErrorType}).

2. That there is absolutely no contractual, familial, commercial, or financial relationship between you and myself. The said sum was not paid towards any existing debt, liability, good, or service, and your receipt thereof is purely by mistake of fact.

3. That under Section 72 of the Indian Contract Act, 1872:
"A person to whom money has been paid, or anything delivered, by mistake or under coercion, must repay or return it."
As settled by the Hon'ble Supreme Court of India in Sales Tax Officer v. Kanhaiya Lal Makund Lal Saraf (AIR 1959 SC 135) and Mahabir Kishore v. State of M.P. ((1989) 4 SCC 1), any person receiving money by mistake has no legal title to it and holds it solely as a trustee under the doctrine of restitution.

4. That having been put on notice regarding the mistaken credit, if you refuse to grant consent to your bank for reversal, or if you withdraw, transfer, spend, or convert the said sum of ${fields.txnAmount} to your own use, your action constitutes:
(a) Dishonest Misappropriation of Property under Section 314 of the Bharatiya Nyaya Sanhita, 2023 (BNS);
(b) Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS);
(c) Unjust Enrichment actionable by way of a Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 alongside 18% per annum commercial interest and full legal costs.

5. I HEREBY CALL UPON YOU to grant your immediate written consent to your branch manager at ${fields.wrongBankName}, or directly remit the sum of ${fields.txnAmount} back to my account (${fields.remitterAccountNo}, ${fields.remitterBank}, IFSC: [Remitter IFSC]) within ${fields.cureWindowDays} calendar days from receipt of this notice, failing which I shall initiate civil recovery and criminal proceedings against you entirely at your risk, cost, and legal consequence.

Yours faithfully,

(Signature)
${fields.remitterName}
Complainant / Remitter`;

  const allLetters: Record<
    LetterVariantKey,
    {
      badge: string;
      title: string;
      subtitle: string;
      whenToUse: string;
      content: string;
      filename: string;
    }
  > = {
    homeBranch: {
      badge: "Format 1 • Urgent Home Branch Application (English)",
      title: "Immediate Application to Your Home Branch Manager (Within 24–48 Hours)",
      subtitle:
        "The essential first step: submit this stamped application to your branch manager to trigger inter-bank communication, place a lien on the wrong account, and request automated reversal.",
      whenToUse: "Immediately after discovering the wrong transfer (within 1 to 48 hours) to freeze the money.",
      content: buildHomeBranchLetter(),
      filename: "Wrong_Account_Transfer_Home_Branch_Application.doc",
    },
    beneficiaryBank: {
      badge: "Format 2 • Destination / Beneficiary Bank Application",
      title: "Formal Demand to Beneficiary Bank Branch Manager & Nodal Officer",
      subtitle:
        "Submit directly to the recipient's bank branch if your bank's inter-bank communication is slow, or when the two banks differ, demanding an administrative hold under Section 72.",
      whenToUse: "When beneficiary bank is known and remitter bank needs direct customer escalation.",
      content: buildBeneficiaryBankLetter(),
      filename: "Beneficiary_Bank_Wrong_Transfer_Demand_Letter.doc",
    },
    upiDispute: {
      badge: "Format 3 • UPI & Payment App Dispute (NPCI / PSP)",
      title: "UPI Wrong VPA / Number Dispute Letter for NPCI & Payment Apps",
      subtitle:
        "Use for incorrect Google Pay, PhonePe, Paytm, or BHIM transactions sent to a wrong mobile number or UPI ID to activate NPCI UDIR dispute resolution.",
      whenToUse: "For accidental UPI transfers sent to wrong mobile numbers or incorrect UPI VPAs.",
      content: buildUpiDisputeLetter(),
      filename: "UPI_Wrong_Transfer_NPCI_Dispute_Letter.doc",
    },
    hindiFormat: {
      badge: "Format 4 • हिन्दी शाखा प्रबंधक प्रार्थना पत्र (Devanagari)",
      title: "बैंक शाखा प्रबंधक को गलत खाते में ट्रांसफर राशि वापस पाने हेतु प्रार्थना पत्र",
      subtitle:
        "भारतीय बैंक शाखाओं में हिंदी में प्रस्तुत करने हेतु पूर्ण कानूनी प्रारूप, जिसमें भारतीय अनुबंध अधिनियम की धारा 72 तथा भारतीय रिजर्व बैंक के दिशा-निर्देश शामिल हैं।",
      whenToUse: "शाखा में भौतिक रूप से मुहरबंद पावती (Acknowledgment Stamp) प्राप्त करने हेतु हिंदी प्रारूप।",
      content: buildHindiLetter(),
      filename: "Galat_Khate_Me_Transfer_Rashi_Vapasi_Prathana_Patra.doc",
    },
    recipientDemand: {
      badge: "Format 5 • Legal Demand Notice to Recipient (Pre-Litigation)",
      title: "Advocate Statutory Demand Notice to Unintended Recipient (Section 72 & BNS)",
      subtitle:
        "Send via Speed Post / RPAD to the unintended recipient if they refuse to return the money or refuse bank consent, putting them on notice for BNS 314/316 criminal misappropriation.",
      whenToUse: "When the recipient refuses to grant consent for reversal or threatens to keep the money.",
      content: buildRecipientDemandLetter(),
      filename: "Section_72_Contract_Act_Demand_Notice_To_Recipient.doc",
    },
  };

  const handleCopy = async (key: LetterVariantKey) => {
    try {
      await navigator.clipboard.writeText(allLetters[key].content);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    } catch {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    }
  };

  const handleDownloadDoc = (key: LetterVariantKey) => {
    const docItem = allLetters[key];
    const header =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
      "xmlns:w='urn:schemas-microsoft-com:office:word' " +
      "xmlns='http://www.w3.org/TR/REC-html40'>" +
      `<head><meta charset='utf-8'><title>${docItem.title}</title></head><body style='font-family: Arial, sans-serif; font-size: 11pt; line-height: 1.5;'>`;
    const footer = "</body></html>";
    const formattedHtml = docItem.content.replace(/\n/g, "<br/>");
    const sourceHtml = header + formattedHtml + footer;

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
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${docItem.title}</title>
            <style>
              body { font-family: Georgia, serif; padding: 36px; font-size: 12.5px; line-height: 1.65; color: #0f172a; }
              pre { white-space: pre-wrap; word-wrap: break-word; font-family: inherit; }
            </style>
          </head>
          <body>
            <pre>${docItem.content}</pre>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    }
  };

  const activeLetter = allLetters[activeVariant];

  return (
    <section id="heading-application-workspace" className="my-10">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        {/* Workspace Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-5 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-600/30 text-red-300 border border-red-500/30">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              Interactive Recovery Workspace • Live Template Generator
            </span>
            <span className="text-xs text-slate-300 font-mono">
              Archetype P1 • Section 72 Restitution
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
            Wrong Account Money Transfer Refund Application Generator
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Fill your transaction specifics in the fields below. All 5 application formats (Home Branch, Beneficiary Bank, UPI Dispute, Hindi Version, and Advocate Demand Notice) update dynamically in real time. Copy, print, or download in Microsoft Word (.doc) with a single click.
          </p>
        </div>

        {/* Form Inputs Grid */}
        <div className="p-5 sm:p-7 border-b border-slate-100 bg-slate-50/60">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Step 1: Enter Your Transaction &amp; Account Details
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            {/* Remitter Full Name */}
            <div>
              <label htmlFor={`${formId}-remitterName`} className="block font-semibold text-slate-700 mb-1">
                Your Full Name (Remitter)
              </label>
              <input
                id={`${formId}-remitterName`}
                type="text"
                name="remitterName"
                value={fields.remitterName}
                onChange={handleFieldChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-600 focus:outline-none"
              />
            </div>

            {/* Remitter Bank */}
            <div>
              <label htmlFor={`${formId}-remitterBank`} className="block font-semibold text-slate-700 mb-1">
                Your Bank Name (Remitter Bank)
              </label>
              <input
                id={`${formId}-remitterBank`}
                type="text"
                name="remitterBank"
                value={fields.remitterBank}
                onChange={handleFieldChange}
                placeholder="e.g., State Bank of India, HDFC"
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-600 focus:outline-none"
              />
            </div>

            {/* Remitter Account No */}
            <div>
              <label htmlFor={`${formId}-remitterAccountNo`} className="block font-semibold text-slate-700 mb-1">
                Your Account Number Debited
              </label>
              <input
                id={`${formId}-remitterAccountNo`}
                type="text"
                name="remitterAccountNo"
                value={fields.remitterAccountNo}
                onChange={handleFieldChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-600 focus:outline-none font-mono"
              />
            </div>

            {/* Remitter Phone */}
            <div>
              <label htmlFor={`${formId}-remitterPhone`} className="block font-semibold text-slate-700 mb-1">
                Registered Mobile Number
              </label>
              <input
                id={`${formId}-remitterPhone`}
                type="text"
                name="remitterPhone"
                value={fields.remitterPhone}
                onChange={handleFieldChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-600 focus:outline-none"
              />
            </div>

            {/* Remitter Branch */}
            <div>
              <label htmlFor={`${formId}-remitterBranch`} className="block font-semibold text-slate-700 mb-1">
                Your Home Branch Name
              </label>
              <input
                id={`${formId}-remitterBranch`}
                type="text"
                name="remitterBranch"
                value={fields.remitterBranch}
                onChange={handleFieldChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-600 focus:outline-none"
              />
            </div>

            {/* Transaction Amount */}
            <div>
              <label htmlFor={`${formId}-txnAmount`} className="block font-semibold text-slate-700 mb-1">
                Amount Transferred (₹)
              </label>
              <input
                id={`${formId}-txnAmount`}
                type="text"
                name="txnAmount"
                value={fields.txnAmount}
                onChange={handleFieldChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-600 focus:outline-none font-semibold text-red-700"
              />
            </div>

            {/* UTR / UPI Reference No */}
            <div>
              <label htmlFor={`${formId}-utrNumber`} className="block font-semibold text-slate-700 mb-1">
                UTR / UPI RRN Reference (12 Digits)
              </label>
              <input
                id={`${formId}-utrNumber`}
                type="text"
                name="utrNumber"
                value={fields.utrNumber}
                onChange={handleFieldChange}
                placeholder="e.g., 430911892341"
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-600 focus:outline-none font-mono"
              />
            </div>

            {/* Transaction Date & Time */}
            <div>
              <label htmlFor={`${formId}-txnDate`} className="block font-semibold text-slate-700 mb-1">
                Date &amp; Time of Transaction
              </label>
              <input
                id={`${formId}-txnDate`}
                type="text"
                name="txnDate"
                value={fields.txnDate}
                onChange={handleFieldChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-600 focus:outline-none"
              />
            </div>

            {/* Transaction Mode */}
            <div>
              <label htmlFor={`${formId}-txnMode`} className="block font-semibold text-slate-700 mb-1">
                Mode of Transfer
              </label>
              <select
                id={`${formId}-txnMode`}
                name="txnMode"
                value={fields.txnMode}
                onChange={handleFieldChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-600 focus:outline-none font-semibold"
              >
                <option value="IMPS (Immediate Payment Service)">IMPS (Immediate Payment)</option>
                <option value="UPI (PhonePe / Google Pay / Paytm / BHIM)">UPI (PhonePe / GPay / Paytm)</option>
                <option value="NEFT (National Electronic Funds Transfer)">NEFT (Batch Settlement)</option>
                <option value="RTGS (Real Time Gross Settlement)">RTGS (High Value Transfer)</option>
                <option value="Intra-Bank Transfer (Same Bank Account)">Intra-Bank (Same Bank)</option>
              </select>
            </div>

            {/* Wrong Account Credited */}
            <div>
              <label htmlFor={`${formId}-wrongAccountNo`} className="block font-semibold text-slate-700 mb-1">
                Wrong Beneficiary Account Number
              </label>
              <input
                id={`${formId}-wrongAccountNo`}
                type="text"
                name="wrongAccountNo"
                value={fields.wrongAccountNo}
                onChange={handleFieldChange}
                className="w-full px-3 py-2 bg-white border border-red-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-600 focus:outline-none font-mono"
              />
            </div>

            {/* Wrong UPI ID */}
            <div>
              <label htmlFor={`${formId}-wrongUpiId`} className="block font-semibold text-slate-700 mb-1">
                Wrong UPI ID / VPA (If UPI Transfer)
              </label>
              <input
                id={`${formId}-wrongUpiId`}
                type="text"
                name="wrongUpiId"
                value={fields.wrongUpiId}
                onChange={handleFieldChange}
                placeholder="e.g., suresh98@okaxis"
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-600 focus:outline-none"
              />
            </div>

            {/* Destination Bank Name */}
            <div>
              <label htmlFor={`${formId}-wrongBankName`} className="block font-semibold text-slate-700 mb-1">
                Wrong Recipient Bank Name
              </label>
              <input
                id={`${formId}-wrongBankName`}
                type="text"
                name="wrongBankName"
                value={fields.wrongBankName}
                onChange={handleFieldChange}
                placeholder="e.g., Punjab National Bank, ICICI"
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-600 focus:outline-none"
              />
            </div>

            {/* Intended Recipient */}
            <div className="md:col-span-2">
              <label htmlFor={`${formId}-intendedAccountOrUpi`} className="block font-semibold text-slate-700 mb-1">
                Intended Recipient (Proof of Clerical Mistake)
              </label>
              <input
                id={`${formId}-intendedAccountOrUpi`}
                type="text"
                name="intendedAccountOrUpi"
                value={fields.intendedAccountOrUpi}
                onChange={handleFieldChange}
                placeholder="Correct Account No. or Correct UPI ID"
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-600 focus:outline-none"
              />
            </div>

            {/* Nature of Error */}
            <div className="md:col-span-1">
              <label htmlFor={`${formId}-clericalErrorType`} className="block font-semibold text-slate-700 mb-1">
                Description of Typing / Selection Error
              </label>
              <input
                id={`${formId}-clericalErrorType`}
                type="text"
                name="clericalErrorType"
                value={fields.clericalErrorType}
                onChange={handleFieldChange}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-red-600 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Tab Selector for Letter Formats */}
        <div id="heading-letter-variants" className="p-4 sm:p-6 bg-slate-100/70 border-b border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-900" />
              Step 2: Select Your Required Application Format
            </h3>
            <span className="text-xs text-slate-500 hidden sm:inline">
              5 Ready Formats Available
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
            {(
              [
                { key: "homeBranch", label: "1. Home Branch", tag: "Urgent (24–48h)" },
                { key: "beneficiaryBank", label: "2. Recipient Bank", tag: "Direct Escalation" },
                { key: "upiDispute", label: "3. UPI Dispute", tag: "NPCI / Apps" },
                { key: "hindiFormat", label: "4. हिन्दी प्रारूप", tag: "देवनागरी आवेदन" },
                { key: "recipientDemand", label: "5. Recipient Notice", tag: "Advocate Demand" },
              ] as const
            ).map((tab) => {
              const isSelected = activeVariant === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveVariant(tab.key)}
                  className={`p-3 rounded-xl text-left transition-all border ${
                    isSelected
                      ? "bg-white border-red-600 shadow-md ring-2 ring-red-600/20"
                      : "bg-white/60 border-slate-200 hover:bg-white text-slate-700 hover:border-slate-300"
                  }`}
                >
                  <span
                    className={`inline-block text-[10px] font-bold px-1.5 py-0.5 rounded uppercase mb-1 ${
                      isSelected
                        ? "bg-red-100 text-red-800"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {tab.tag}
                  </span>
                  <p className="text-xs font-bold text-slate-900 truncate">{tab.label}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Letter Preview Area (Rendered as semantic <article>) */}
        <div className="p-5 sm:p-8 bg-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-slate-200 gap-4">
            <div>
              <span className="inline-block px-2.5 py-1 rounded text-[11px] font-bold tracking-wide uppercase bg-slate-100 text-slate-700 border border-slate-200 mb-1.5">
                {activeLetter.badge}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                {activeLetter.title}
              </h4>
              <p className="text-xs text-slate-500 max-w-2xl mt-0.5">
                {activeLetter.subtitle}
              </p>
            </div>

            {/* Action Buttons: Copy, Word Download, Print */}
            <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
              <button
                type="button"
                onClick={() => handleCopy(activeVariant)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-sm cursor-pointer"
                title="Copy entire application text to clipboard"
              >
                {copiedKey === activeVariant ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy Text</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => handleDownloadDoc(activeVariant)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-blue-700 hover:bg-blue-800 text-white transition-all shadow-sm cursor-pointer"
                title="Download as Word .doc"
              >
                <svg className="w-3.5 h-3.5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Word (.doc)</span>
              </button>

              <button
                type="button"
                onClick={() => handlePrint(activeVariant)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 transition-all cursor-pointer"
                title="Print or Save as PDF"
              >
                <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                <span>Print</span>
              </button>
            </div>
          </div>

          {/* Rendered Letter Article Preview */}
          <article className="border border-slate-200 rounded-xl p-5 sm:p-8 bg-slate-50/50 shadow-inner">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/80 text-[11px] text-slate-500 font-mono">
              <span>DOCUMENT PREVIEW — READY FOR PHYSICAL SUBMISSION OR EMAIL</span>
              <span className="hidden sm:inline">FONT: STANDARD LEGAL FORMAT</span>
            </div>

            <pre className="font-sans text-xs sm:text-sm text-slate-800 whitespace-pre-wrap leading-relaxed select-text font-normal">
              {activeLetter.content}
            </pre>
          </article>

          {/* Submission Instructions Box */}
          <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
            <p className="font-bold flex items-center gap-1.5 mb-1 text-amber-950">
              <svg className="w-4 h-4 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Crucial Physical Submission Tip (Receipt Acknowledgment):
            </p>
            <p>
              Always print <strong>two identical copies</strong> of this application. Submit one copy along with your transaction receipt to the Branch Manager, and insist on receiving an <strong>official rubber stamp, date, and employee signature</strong> on your duplicate copy. That physical receiving stamp is the indispensable evidentiary proof required if you need to escalate to the RBI Ombudsman or Consumer Commission later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
