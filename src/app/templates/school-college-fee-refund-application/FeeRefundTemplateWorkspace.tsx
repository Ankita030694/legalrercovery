"use client";

import React, { useState, useId } from "react";

type FormatKey = "college" | "school" | "hostel" | "hindi";

interface FormFields {
  studentName: string;
  parentName: string;
  rollNumber: string;
  courseOrClass: string;
  academicYear: string;
  institutionName: string;
  institutionAddress: string;
  authorityDesignation: string;
  admissionDate: string;
  withdrawalDate: string;
  totalFeePaid: string;
  refundAmountClaimed: string;
  processingDeduction: string;
  withdrawalReason: string;
  bankAccountName: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  city: string;
}

export default function FeeRefundTemplateWorkspace() {
  const formId = useId();
  const [activeFormat, setActiveFormat] = useState<FormatKey>("college");
  const [copied, setCopied] = useState<boolean>(false);

  const [fields, setFields] = useState<FormFields>({
    studentName: "[STUDENT NAME, e.g., Rohan Sharma]",
    parentName: "[PARENT/GUARDIAN NAME, e.g., Mahendra Sharma]",
    rollNumber: "[ROLL / APPLICATION / REGISTRATION NO., e.g., 2026/ENG/BTECH/0412]",
    courseOrClass: "B.Tech Computer Science & Engineering (1st Year)",
    academicYear: "2026–2027",
    institutionName: "[COLLEGE / UNIVERSITY / SCHOOL NAME, e.g., Apex Institute of Technology & Sciences]",
    institutionAddress: "[Campus Address, e.g., Knowledge Park III, Greater Noida, Uttar Pradesh - 201306]",
    authorityDesignation: "The Registrar / Dean of Admissions / Principal",
    admissionDate: "15 July 2026",
    withdrawalDate: "05 August 2026",
    totalFeePaid: "₹1,45,000",
    refundAmountClaimed: "₹1,44,000",
    processingDeduction: "₹1,000 (Maximum Permissible Deduction under UGC Guidelines)",
    withdrawalReason: "Secured admission in a government-allotted institution through centralized counseling / personal family relocation",
    bankAccountName: "[ACCOUNT HOLDER NAME, e.g., Mahendra Sharma]",
    bankName: "[BANK NAME, e.g., State Bank of India]",
    accountNumber: "[BANK ACCOUNT NUMBER, e.g., 308912345678]",
    ifscCode: "[IFSC CODE, e.g., SBIN0001234]",
    city: "New Delhi / Greater Noida",
  });

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const getGeneratedLetter = () => {
    if (activeFormat === "college") {
      return `APPLICATION FOR ADMISSION WITHDRAWAL AND REFUND OF TUITION & ALLIED FEES
[Pursuant to UGC Fee Refund Policy & AICTE Mandatory Admission Regulations]

Date: ${new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })}

To,
${fields.authorityDesignation},
${fields.institutionName},
${fields.institutionAddress}

Subject: Application for cancellation of admission and statutory refund of deposited fees for ${fields.courseOrClass} (Session: ${fields.academicYear}) [Annotation 1]

Reference:
1. Admission Enrollment / Roll Number: ${fields.rollNumber}
2. Fee Receipt Number: [Receipt No. / UTR Ref. Dated ${fields.admissionDate}]
3. Total Fee Deposited: ${fields.totalFeePaid}

Respected Sir / Madam,

1. I was formally admitted to the ${fields.courseOrClass} programme at your esteemed institution on ${fields.admissionDate}, for which a cumulative sum of ${fields.totalFeePaid} was deposited towards first-semester tuition, development, and caution deposit vide official receipt.

2. Owing to unforeseen personal circumstances / securing admission in a government-notified seat via state centralized counseling (${fields.withdrawalReason}), I am unable to continue my studies at your institution. Consequently, I am formally withdrawing my admission with immediate effect from today, ${fields.withdrawalDate}.

3. I wish to draw your immediate attention to the University Grants Commission (UGC) Guidelines on Examination and Fee Refund. Under the statutory 5-tier UGC refund framework:
   (a) A candidate withdrawing admission 15 days or more before the formally notified last date of admission is entitled to a 100% refund of all deposited fees, subject to a maximum processing deduction not exceeding ₹1,000/- [Annotation 2].
   (b) Higher Educational Institutions (HEIs) are statutorily barred from retaining any original educational certificates, mark sheets, or transfer certificates under Paragraph 4 of the UGC Notification [Annotation 3].

4. As my formal withdrawal request is submitted within the prescribed UGC cut-off window, I am entitled to a refund of ${fields.refundAmountClaimed} (Net of maximum allowable processing charges of ${fields.processingDeduction}).

5. Any unilateral forfeiture under an internal 'No Refund' clause constitutes an Unfair Trade Practice under Section 2(47) and Deficiency of Service under Section 2(11) of the Consumer Protection Act, 2019, as repeatedly affirmed by the Hon'ble Supreme Court of India in Islamic Academy of Education v. State of Karnataka [(2003) 6 SCC 697] and the National Consumer Disputes Redressal Commission (NCDRC) [Annotation 4].

6. Kindly credit the refundable amount directly to the following savings bank account via NEFT / RTGS within 15 calendar days of receipt of this communication, in compliance with mandatory regulatory turnaround standards [Annotation 5]:
   - Account Holder Name: ${fields.bankAccountName}
   - Bank Name: ${fields.bankName}
   - Savings Account Number: ${fields.accountNumber}
   - IFSC Code: ${fields.ifscCode}

7. Furthermore, kindly issue the official Admission Cancellation Letter, return all original qualifying certificates deposited during verification, and release my Migration / Character Certificate immediately.

Thanking you.

Yours faithfully,

_____________________________
(Signature of Student)
Student Name: ${fields.studentName}
Roll / Application No: ${fields.rollNumber}
Contact Mobile: [9876543210]
Email ID: [student.email@example.com]

_____________________________
(Signature of Parent / Guardian)
Parent Name: ${fields.parentName}
Contact Mobile: [9811223344]

Enclosures:
1. Copy of Original Admission Fee Payment Receipt / Challan
2. Copy of Provisional Admission Allotment Letter
3. Cancelled Cheque / Bank Passbook Copy for Electronic NEFT Credit
4. Copy of Student Identity Card / Fee Card`;
    }

    if (activeFormat === "school") {
      return `APPLICATION FOR SCHOOL WITHDRAWAL, TRANSFER CERTIFICATE (TC) AND REFUND OF CAUTION MONEY & UNUTILIZED QUARTERLY FEES
[Under State School Education Act & Rules / CBSE Affiliation Bye-Laws]

Date: ${new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })}

To,
The Principal / Head of School,
${fields.institutionName},
${fields.institutionAddress}

Subject: Request for issuance of School Leaving Certificate / Transfer Certificate (TC) and refund of Caution Money Deposit & unutilized term fees for Master / Miss ${fields.studentName} [Annotation 1]

Student Particulars:
- Student Name: ${fields.studentName}
- Admission / Scholar Number: ${fields.rollNumber}
- Class & Section: ${fields.courseOrClass}
- Academic Session: ${fields.academicYear}

Respected Sir / Madam,

1. I am the parent / legal guardian of ${fields.studentName}, who is currently enrolled in ${fields.courseOrClass} at your school. Due to ${fields.withdrawalReason}, our family is relocating / the student is transferring to another school. Hence, we are compelled to withdraw our ward from your institution with effect from ${fields.withdrawalDate}.

2. At the time of initial admission, a refundable Security Deposit / Caution Money sum of [₹15,000 / ₹25,000] was deposited with the school accounts office vide Receipt No. [Receipt Ref Dated ${fields.admissionDate}]. Additionally, tuition and activity fees for the upcoming quarter / term amounting to ${fields.totalFeePaid} were remitted in advance.

3. As per CBSE Affiliation Bye-Laws, the Directorate of Education regulations, and established judicial precedents:
   (a) Caution money / security deposit is purely custodial in nature and must be refunded in full upon student withdrawal and clearance of school library and laboratory dues [Annotation 2].
   (b) Schools cannot charge tuition fees for any period or quarter during which the student has not received classroom instruction subsequent to the submission of the withdrawal application [Annotation 3].
   (c) Withholding a student's Transfer Certificate (TC) or Report Card over disputed future fees is strictly unlawful and violative of the Right to Education and judicial directives [Annotation 4].

4. We have completed all necessary clearance formalities from the school library, sports department, and class teacher. There are no outstanding academic dues against our ward.

5. Accordingly, I request your good office to compute and release the admissible refund of ${fields.refundAmountClaimed} (inclusive of caution money deposit and unserved tuition/transport advance) within 15 working days [Annotation 5] to the following bank account:
   - Account Holder Name: ${fields.bankAccountName}
   - Bank Name: ${fields.bankName}
   - Account Number: ${fields.accountNumber}
   - IFSC Code: ${fields.ifscCode}

6. Kindly also issue the signed Transfer Certificate (TC), Character Certificate, and original Marksheet / Cumulative Record Dossier at the earliest to facilitate admission in the new school without academic disruption.

Thanking you for your past cooperation.

Yours sincerely,

_____________________________
(Signature of Parent / Legal Guardian)
Name: ${fields.parentName}
Father / Mother of: ${fields.studentName}
Residential Address: [Current Residential Address]
Mobile Number: [9876543210]
Email: [parent.email@example.com]

Enclosures:
1. Original School Fee Deposit Receipts for Caution Money and Current Term
2. Duly signed School 'No Dues / Clearance' Slip
3. Cancelled Cheque for NEFT Credit
4. School ID Card surrendered herewith`;
    }

    if (activeFormat === "hostel") {
      return `APPLICATION FOR HOSTEL VACATION, CAUTION DEPOSIT REFUND AND UNCONSUMED MESS CHARGES REVERSAL

Date: ${new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })}

To,
The Chief Warden / Hostel Administrator / Registrar,
${fields.institutionName},
${fields.institutionAddress}

Subject: Vacation of Hostel Room No. [Room No., e.g., B-304], surrender of inventory, and refund of Hostel Security Caution Deposit & unutilized Mess Fee [Annotation 1]

Reference:
- Student Name: ${fields.studentName}
- Enrollment / Hostel Allotment No.: ${fields.rollNumber}
- Course & Semester: ${fields.courseOrClass}
- Hostel Block & Room No.: [Block A / Room 204]

Respected Sir / Madam,

1. I am a resident student in Room [Room No.] of the institute hostel for the academic session ${fields.academicYear}. On account of ${fields.withdrawalReason}, I am vacating the hostel accommodation with effect from ${fields.withdrawalDate}.

2. At the time of hostel room allotment on ${fields.admissionDate}, I deposited:
   (a) Refundable Hostel Caution Money / Security Deposit: [₹15,000 / ₹20,000]
   (b) Advance Hostel Room Rent & Maintenance Fee: [₹45,000]
   (c) Advance Mess Charges for the semester: [₹30,000]
   Total Amount Deposited: ${fields.totalFeePaid} vide Receipt No. [Receipt Ref].

3. As per the statutory Ministry of Education (MoE) Regulatory Guidelines and UGC directives regarding student welfare:
   (a) Hostel security caution money is strictly refundable in full after deducting any verifiable, inventoried physical room damages [Annotation 2].
   (b) Mess charges are service-oriented consumables and cannot be forfeited for unconsumed future months after official room vacation [Annotation 3].
   (c) Room rent cannot be claimed for the remaining term when a student withdraws before or during commencement of the academic session where the seat can be re-allocated [Annotation 4].

4. The physical room inspection has been completed by the Hostel Caretaker / Assistant Warden. The room inventory, keys, and fixtures have been handed over in flawless condition without any damage or breakage. The signed Hostel Clearance Slip is enclosed herewith.

5. I therefore request you to process the net refund of ${fields.refundAmountClaimed} within 10–15 calendar days [Annotation 5] directly to my verified bank account:
   - Account Holder Name: ${fields.bankAccountName}
   - Bank Name: ${fields.bankName}
   - Account Number: ${fields.accountNumber}
   - IFSC Code: ${fields.ifscCode}

Thanking you.

Yours faithfully,

_____________________________
(Signature of Student)
Name: ${fields.studentName}
Contact Mobile: [9876543210]

Countersigned by Parent / Guardian:
_____________________________
Name: ${fields.parentName}

Enclosures:
1. Original Hostel Fee & Caution Deposit Payment Receipt
2. Signed Hostel Room Inventory Vacation & No-Dues Slip
3. Hostel Resident Identity Card (Surrendered)
4. Cancelled Bank Cheque`;
    }

    // Hindi format
    return `कॉलेज / विश्वविद्यालय / स्कूल शुल्क वापसी एवं प्रवेश निरस्तीकरण हेतु प्रार्थना पत्र
[विश्वविद्यालय अनुदान आयोग (UGC) शुल्क वापसी नीति एवं उपभोक्ता संरक्षण अधिनियम, 2019 के अंतर्गत]

दिनांक: ${new Date().toLocaleDateString("hi-IN", { day: "2-digit", month: "long", year: "numeric" })}

सेवा में,
${fields.authorityDesignation},
${fields.institutionName},
${fields.institutionAddress}

विषय: प्रवेश निरस्तीकरण (Admission Cancellation) एवं जमा किए गए शिक्षण शुल्क व धरोहर राशि (Caution Money) की वैधानिक वापसी हेतु आवेदन [टिप्पणी 1]

संदर्भ:
1. छात्र / छात्रा का नाम: ${fields.studentName}
2. अनुक्रमांक / आवेदन संख्या (Roll / Application No.): ${fields.rollNumber}
3. पाठ्यक्रम / कक्षा: ${fields.courseOrClass} (सत्र: ${fields.academicYear})
4. शुल्क रसीद संख्या: [रसीद संख्या / UTR नंबर, दिनांक: ${fields.admissionDate}]
5. कुल जमा शुल्क राशि: ${fields.totalFeePaid}

महोदय / महोदया,

1. सविनय निवेदन है कि प्रार्थी ${fields.studentName} ने आपके प्रतिष्ठित संस्थान में ${fields.courseOrClass} पाठ्यक्रम में दिनांक ${fields.admissionDate} को प्रवेश लिया था तथा कुल शुल्क ${fields.totalFeePaid} रुपये आधिकारिक रसीद के माध्यम से संस्थान के खाते में जमा कराया था।

2. अपरिहार्य पारिवारिक परिस्थितियों / सरकारी काउंसलिंग के माध्यम से अन्य संस्थान में सीट आवंटित हो जाने के कारण (${fields.withdrawalReason}), प्रार्थी इस पाठ्यक्रम को जारी रखने में असमर्थ है। अतः प्रार्थी आज दिनांक ${fields.withdrawalDate} को औपचारिक रूप से अपना प्रवेश निरस्त (Cancel) कर रहा/रही है।

3. इस संदर्भ में विश्वविद्यालय अनुदान आयोग (UGC Fee Refund Policy) तथा भारत सरकार के शिक्षा मंत्रालय के अनिवार्य दिशा-निर्देशों का सादर उल्लेख किया जाता है:
   (क) अधिसूचित अंतिम प्रवेश तिथि (Last Date of Admission) से 15 दिन या उससे पूर्व प्रवेश वापस लेने पर संस्थान द्वारा 100% शुल्क वापस किया जाना अनिवार्य है, जिसमें अधिकतम केवल ₹1,000/- तक की प्रोसेसिंग कटौती अनुमन्य है [टिप्पणी 2]।
   (ख) UGC नियमों के अनुसार कोई भी शिक्षण संस्थान छात्र के मूल शैक्षणिक प्रमाण पत्र (10वीं/12वीं अंकपत्र, टीसी या माइग्रेशन) को जबरन अपने पास रोककर नहीं रख सकता [टिप्पणी 3]।
   (ग) माननीय सर्वोच्च न्यायालय (Islamic Academy of Education v. State of Karnataka) तथा राष्ट्रीय उपभोक्ता आयोग (NCDRC) के स्पष्ट न्यायिक निर्णयों के अनुसार किसी भी संस्थान द्वारा 'शुल्क वापस नहीं होगा' (No Refund) की मनमानी शर्त लगाना उपभोक्ता संरक्षण अधिनियम 2019 की धारा 2(47) के तहत अनुचित व्यापार व्यवहार (Unfair Trade Practice) तथा धारा 2(11) के तहत सेवा में गंभीर कमी (Deficiency in Service) है [टिप्पणी 4]।

4. अतः प्रार्थी निर्धारित समयावधि के भीतर अपने कुल जमा शुल्क में से अधिकतम ₹1,000 की वैधानिक प्रोसेसिंग कटौती घटाकर शेष ${fields.refundAmountClaimed} रुपये की पूर्ण वापसी का वैधानिक हकदार है।

5. कृपया उक्त रिफंड राशि को 15 कार्य दिवसों के भीतर [टिप्पणी 5] निम्नलिखित बैंक खाते में NEFT / RTGS के माध्यम से हस्तांतरित करने की कृपा करें:
   - खाताधारक का नाम: ${fields.bankAccountName}
   - बैंक का नाम: ${fields.bankName}
   - बचत खाता संख्या (Account No.): ${fields.accountNumber}
   - आईएफएससी कोड (IFSC Code): ${fields.ifscCode}

6. इसके साथ ही प्रार्थी के मूल प्रमाण पत्र, स्थानांतरण प्रमाण पत्र (TC), तथा चरित्र प्रमाण पत्र अविलंब प्रदान करने का कष्ट करें।

सधन्यवाद।

भवदीय,

_____________________________
(छात्र / छात्रा के हस्ताक्षर)
नाम: ${fields.studentName}
रोल नंबर: ${fields.rollNumber}
मोबाइल नंबर: [9876543210]
ईमेल: [student.email@example.com]

_____________________________
(अभिभावक / माता-पिता के हस्ताक्षर)
अभिभावक का नाम: ${fields.parentName}
मोबाइल नंबर: [9811223344]

संलग्नक (Enclosures):
1. शुल्क भुगतान रसीद की छायाप्रति
2. संस्थान का प्रोविजनल प्रवेश पत्र
3. बैंक पासबुक / रद्द किए गए चेक की प्रति (Cancelled Cheque)
4. छात्र पहचान पत्र (मूल)`;
  };

  const handleCopy = () => {
    const text = getGeneratedLetter();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownloadDoc = () => {
    const text = getGeneratedLetter();
    const htmlContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'><title>Fee Refund Application</title>
      <style>
        body { font-family: 'Calibri', Arial, sans-serif; font-size: 11pt; line-height: 1.5; margin: 1in; }
        h1 { font-size: 14pt; font-weight: bold; text-align: center; }
        p { margin: 6pt 0; }
      </style>
      </head>
      <body>
        <pre style="font-family: 'Calibri', Arial, sans-serif; white-space: pre-wrap; font-size: 11pt;">${text}</pre>
      </body>
      </html>
    `;
    const blob = new Blob([htmlContent], { type: "application/msword;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `fee-refund-application-${activeFormat}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    const text = getGeneratedLetter();
    const printWindow = window.open("", "_blank", "width=800,height=900");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Fee Refund Application - Print View</title>
            <style>
              body { font-family: Arial, sans-serif; font-size: 12pt; line-height: 1.6; padding: 40px; color: #111; }
              pre { white-space: pre-wrap; font-family: inherit; }
            </style>
          </head>
          <body>
            <pre>${text}</pre>
            <script>
              window.onload = function() { window.print(); window.close(); }
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-sm">
      {/* Format Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-5 border-b border-slate-200">
        <button
          type="button"
          onClick={() => setActiveFormat("college")}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeFormat === "college"
              ? "bg-[#DC2626] text-white shadow-md shadow-red-950/20"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          College Admission (UGC)
        </button>
        <button
          type="button"
          onClick={() => setActiveFormat("school")}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeFormat === "school"
              ? "bg-[#DC2626] text-white shadow-md shadow-red-950/20"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          School TC &amp; Caution Money
        </button>
        <button
          type="button"
          onClick={() => setActiveFormat("hostel")}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeFormat === "hostel"
              ? "bg-[#DC2626] text-white shadow-md shadow-red-950/20"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          Hostel &amp; Mess Advance
        </button>
        <button
          type="button"
          onClick={() => setActiveFormat("hindi")}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeFormat === "hindi"
              ? "bg-[#DC2626] text-white shadow-md shadow-red-950/20"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          हिंदी आवेदन प्रारूप (Hindi)
        </button>
      </div>

      {/* Action Header: Word / Copy / Print */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-5 pb-6">
        <div>
          <span className="text-[11px] font-black uppercase tracking-wider text-red-600 block mb-0.5">
            Archetype P3 • Live-Fill &amp; Annotated Template
          </span>
          <h3 className="text-base sm:text-lg font-black text-slate-900">
            {activeFormat === "college" && "College / University Fee Refund Application (UGC Mandated)"}
            {activeFormat === "school" && "School Fee Refund Letter (TC, Caution Money & Term Advance)"}
            {activeFormat === "hostel" && "Hostel Vacation & Caution Deposit Refund Application"}
            {activeFormat === "hindi" && "कॉलेज / स्कूल शुल्क वापसी प्रार्थना पत्र (हिंदी प्रारूप)"}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center justify-center px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer shadow-sm"
          >
            {copied ? "✓ Copied to Clipboard!" : "Copy Text"}
          </button>
          <button
            type="button"
            onClick={handleDownloadDoc}
            className="inline-flex items-center justify-center px-3.5 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer shadow-sm"
          >
            Download .doc (Word)
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center justify-center px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer border border-slate-300"
          >
            Print
          </button>
        </div>
      </div>

      {/* Interactive Form Fields Grid (Collapsible/Editable) */}
      <details className="mb-6 bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 group">
        <summary className="flex items-center justify-between cursor-pointer list-none text-xs sm:text-sm font-extrabold text-slate-900 select-none">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            Customize Form Placeholders (Click to Edit Names, Amounts &amp; Dates)
          </span>
          <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
        </summary>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-4 text-xs">
          <div>
            <label htmlFor={`${formId}-studentName`} className="block font-bold text-slate-700 mb-1">
              Student Full Name
            </label>
            <input
              id={`${formId}-studentName`}
              type="text"
              name="studentName"
              value={fields.studentName}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-parentName`} className="block font-bold text-slate-700 mb-1">
              Parent / Guardian Name
            </label>
            <input
              id={`${formId}-parentName`}
              type="text"
              name="parentName"
              value={fields.parentName}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-rollNumber`} className="block font-bold text-slate-700 mb-1">
              Roll / Registration Number
            </label>
            <input
              id={`${formId}-rollNumber`}
              type="text"
              name="rollNumber"
              value={fields.rollNumber}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-institutionName`} className="block font-bold text-slate-700 mb-1">
              Institution Name
            </label>
            <input
              id={`${formId}-institutionName`}
              type="text"
              name="institutionName"
              value={fields.institutionName}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-courseOrClass`} className="block font-bold text-slate-700 mb-1">
              Course / Class Enrolled
            </label>
            <input
              id={`${formId}-courseOrClass`}
              type="text"
              name="courseOrClass"
              value={fields.courseOrClass}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-totalFeePaid`} className="block font-bold text-slate-700 mb-1">
              Total Fee Paid (₹)
            </label>
            <input
              id={`${formId}-totalFeePaid`}
              type="text"
              name="totalFeePaid"
              value={fields.totalFeePaid}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-refundAmountClaimed`} className="block font-bold text-slate-700 mb-1">
              Net Refund Amount Claimed (₹)
            </label>
            <input
              id={`${formId}-refundAmountClaimed`}
              type="text"
              name="refundAmountClaimed"
              value={fields.refundAmountClaimed}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-admissionDate`} className="block font-bold text-slate-700 mb-1">
              Admission Date
            </label>
            <input
              id={`${formId}-admissionDate`}
              type="text"
              name="admissionDate"
              value={fields.admissionDate}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-withdrawalDate`} className="block font-bold text-slate-700 mb-1">
              Withdrawal Application Date
            </label>
            <input
              id={`${formId}-withdrawalDate`}
              type="text"
              name="withdrawalDate"
              value={fields.withdrawalDate}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-accountNumber`} className="block font-bold text-slate-700 mb-1">
              Bank Account Number (NEFT)
            </label>
            <input
              id={`${formId}-accountNumber`}
              type="text"
              name="accountNumber"
              value={fields.accountNumber}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-ifscCode`} className="block font-bold text-slate-700 mb-1">
              Bank IFSC Code
            </label>
            <input
              id={`${formId}-ifscCode`}
              type="text"
              name="ifscCode"
              value={fields.ifscCode}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-withdrawalReason`} className="block font-bold text-slate-700 mb-1">
              Reason for Withdrawal
            </label>
            <input
              id={`${formId}-withdrawalReason`}
              type="text"
              name="withdrawalReason"
              value={fields.withdrawalReason}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-red-500"
            />
          </div>
        </div>
      </details>

      {/* Side-by-Side: Document Preview (Left) with Numbered Annotations (Right) — Archetype P3 DOM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Formatted Letter Preview */}
        <div className="lg:col-span-7 xl:col-span-8 bg-slate-900 text-slate-100 p-5 sm:p-7 rounded-2xl font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto shadow-inner border border-slate-800">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400 text-[10px] uppercase tracking-wider font-sans">
            <span>Official Application Text Preview</span>
            <span className="text-red-400">Ready to Print / Dispatch</span>
          </div>
          <pre className="whitespace-pre-wrap font-mono">{getGeneratedLetter()}</pre>
        </div>

        {/* Right Column: Numbered Margin Legal Annotations — Archetype P3 */}
        <div className="lg:col-span-5 xl:col-span-4 bg-red-50/60 border border-red-200/80 rounded-2xl p-5 text-slate-800 space-y-4">
          <div className="border-b border-red-200 pb-2.5">
            <span className="text-[10px] font-black uppercase tracking-wider text-red-700 block">
              Legal Guidance Notes
            </span>
            <h4 className="text-sm font-extrabold text-slate-900">
              Numbered Margin Annotations
            </h4>
          </div>

          <ol className="space-y-3.5 text-xs text-slate-700 list-none">
            <li className="flex items-start gap-2.5">
              <span className="shrink-0 w-6 h-6 rounded-full bg-red-600 text-white font-bold text-[11px] flex items-center justify-center">
                1
              </span>
              <div>
                <strong className="text-slate-900 block font-bold">
                  Statutory Regulatory Citations
                </strong>
                Cite the UGC Fee Refund Policy Notification and AICTE Admission Regulations upfront in the subject line. This alerts the college registrar that you are invoking binding apex regulatory guidelines, not asking for an arbitrary favor.
              </div>
            </li>

            <li className="flex items-start gap-2.5">
              <span className="shrink-0 w-6 h-6 rounded-full bg-red-600 text-white font-bold text-[11px] flex items-center justify-center">
                2
              </span>
              <div>
                <strong className="text-slate-900 block font-bold">
                  ₹1,000 Processing Deduction Ceiling
                </strong>
                Under UGC guidelines, when an admission is cancelled 15 days or more before the cut-off date, the institution cannot deduct more than ₹1,000 as processing charges. Any higher administrative deduction or forfeiture is illegal.
              </div>
            </li>

            <li className="flex items-start gap-2.5">
              <span className="shrink-0 w-6 h-6 rounded-full bg-red-600 text-white font-bold text-[11px] flex items-center justify-center">
                3
              </span>
              <div>
                <strong className="text-slate-900 block font-bold">
                  Prohibition of Original Certificate Retention
                </strong>
                UGC Paragraph 4 explicitly bars colleges from withholding original school leaving, Class 10/12 mark sheets or migration certificates. Doing so invites de-recognition and punitive regulatory sanctions.
              </div>
            </li>

            <li className="flex items-start gap-2.5">
              <span className="shrink-0 w-6 h-6 rounded-full bg-red-600 text-white font-bold text-[11px] flex items-center justify-center">
                4
              </span>
              <div>
                <strong className="text-slate-900 block font-bold">
                  Unconscionable 'No Refund' Clauses Void
                </strong>
                Citing Islamic Academy (2003) and NCDRC precedents confirms that unilateral 'Non-Refundable Fees' stamps in prospectuses are legally void under Section 2(46) and 2(47) of the Consumer Protection Act, 2019.
              </div>
            </li>

            <li className="flex items-start gap-2.5">
              <span className="shrink-0 w-6 h-6 rounded-full bg-red-600 text-white font-bold text-[11px] flex items-center justify-center">
                5
              </span>
              <div>
                <strong className="text-slate-900 block font-bold">
                  Mandatory 15-Day Refund TAT
                </strong>
                Giving bank coordinates (NEFT/RTGS) and demanding refund within 15 days creates the statutory evidentiary paper trail under Section 63 BSA 2023 required before filing a legal notice or e-Jagriti consumer complaint.
              </div>
            </li>
          </ol>

          <div className="pt-2 border-t border-red-200">
            <p className="text-[11px] text-slate-600 leading-snug">
              <strong>Tip:</strong> Always deliver this application via Registered Speed Post or through the college&apos;s official student portal/email to establish an irrefutable proof-of-delivery date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
