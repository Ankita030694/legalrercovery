"use client";

import React, { useState } from "react";

interface TemplateVariant {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  text: string;
  annotations: {
    marker: string;
    title: string;
    explanation: string;
    statuteRef: string;
  }[];
}

const TEMPLATES: TemplateVariant[] = [
  {
    id: "general-recovery",
    title: "Civil & Commercial Recovery Reply",
    subtitle: "For disputed invoices, contract claims, friendly loans, or alleged debt recovery",
    badge: "Most Common",
    annotations: [
      {
        marker: "①",
        title: "Proof of Notice Receipt & Timely Reply Clause",
        explanation: "Records the exact date and mode of service. Establishing that you responded within the notice window (e.g. 15 or 30 days) defeats any claim that you accepted the demand by silence.",
        statuteRef: "Section 27 General Clauses Act, 1897",
      },
      {
        marker: "②",
        title: "Without Prejudice Reservation",
        explanation: "Protects your legal standing. Ensures that offers or explanations given in this reply cannot be misconstrued as an admission of liability in a future court proceeding.",
        statuteRef: "Section 23 Indian Evidence Act / Section 63 BSA 2023",
      },
      {
        marker: "③",
        title: "Preliminary Objections & Lack of Cause of Action",
        explanation: "Challenges the legal validity of the sender's claim upfront (e.g. limitation barred, lack of privity, wrong jurisdiction, failure to deliver agreed goods/services).",
        statuteRef: "Order VII Rule 11 & Order VIII Rule 2 CPC, 1908",
      },
      {
        marker: "④",
        title: "Paragraph-by-Paragraph Specific Denials",
        explanation: "Under Indian procedural law, every statement not specifically denied is deemed admitted. You must explicitly rebut each paragraph and allege the true factual matrix.",
        statuteRef: "Order VIII Rule 5 Code of Civil Procedure, 1908",
      },
      {
        marker: "⑤",
        title: "Counter-Demand & Damages for Mental Harassment",
        explanation: "Puts the sender on the defensive by reserving your statutory right to claim costs, damages for reputation injury, and legal notice expenses if vexatious litigation is initiated.",
        statuteRef: "Section 35A CPC & Section 209 BNS, 2023",
      },
      {
        marker: "⑥",
        title: "Formal Call to Withdraw Notice Within 7 Days",
        explanation: "Demands the immediate withdrawal of the frivolous notice in writing, creating grounds to seek compensatory costs against the sender if they proceed to court.",
        statuteRef: "Supreme Court in Gian Chand v. Rattan Lal (2013)",
      },
    ],
    text: `REPLY TO LEGAL NOTICE DATED [DATE OF NOTICE RECEIVED]

REGISTERED SPEED POST WITH A.D. & ELECTRONIC TRANSMISSION

To,
[ADVOCATE NAME / SENDER COUNSEL]
Advocate, [Enrollment No.]
[Advocate Office Address]
[City, State, PIN]
Email: [advocate@email.com]

Under Instructions from and on behalf of my client:
[YOUR NAME / ENTITY NAME], [Son/Daughter/Authorized Officer of _____],
Residing at / Having registered office at: [YOUR COMPLETE ADDRESS]
(hereinafter referred to as "My Client")

Sir / Madam,

Under instructions from and on behalf of My Client above-named, I hereby serve upon you and your client [NAME OF SENDER] (hereinafter referred to as "Your Client"), this formal Reply to the Legal Notice dated [DATE OF NOTICE], received by My Client on [DATE OF RECEIPT] ①, in the following terms:

PRELIMINARY OBJECTIONS:
1. WITHOUT PREJUDICE: This reply is issued strictly without prejudice to all rights, titles, interests, remedies, counter-claims, and defenses available to My Client under the law in force ②.
2. ABSENCE OF CAUSE OF ACTION: The notice under reply is completely frivolous, vexatious, misconceived, and legally unmaintainable. Your Client has suppressed material facts and concocted a false narrative solely to exert unlawful financial duress upon My Client ③.
3. BARRED BY LIMITATION / NON-PERFORMANCE: The monetary claim of Rs. [AMOUNT] raised by Your Client is untenable as Your Client fundamentally failed to execute the underlying contractual obligations [OR the alleged claim is hopelessly barred by limitation under the Limitation Act, 1963].

PARAGRAPH-WISE SPECIFIC REBUTTAL:
1. That the contents of Paragraph 1 of the Notice are matter of record to the extent that [MENTION KNOWN TRUTH, e.g., the parties entered into a purchase order on DATE]. However, the assertion that My Client was in default is vehemently and specifically denied ④.
2. That the contents of Paragraph 2 and 3 of the Notice are false, baseless, and emphatically denied. It is specifically denied that any sum of Rs. [AMOUNT] remains due or payable by My Client. On the contrary, Your Client supplied defective goods / deficient services on [DATE], which were formally rejected vide email dated [DATE OF REJECTION EMAIL].
3. That the contents of Paragraph 4 of the Notice are incorrect and denied. My Client never undertook or agreed to pay [DISPUTED SUM]. The accounts between the parties stand fully reconciled, and no liability exists on the part of My Client.
4. That the allegations in Paragraph 5 regarding breach of trust or legal non-compliance are scandalous and unsubstantiated. My Client reserves the right to present complete documentary proof before the competent judicial forum.

COUNTER-DEMAND & NOTICE TO WITHDRAW:
In view of the premises set forth above, My Client hereby calls upon Your Client through you:
a) To unconditionally withdraw the illegal Notice dated [DATE OF NOTICE] in writing within 7 (seven) days of receipt hereof ⑥;
b) To refrain from initiating any frivolous or vexatious legal proceedings, failing which Your Client shall be held solely liable for all costs, consequences, and damages for malicious harassment ⑤;
c) To pay a sum of Rs. 15,000/- (Rupees Fifteen Thousand only) towards the cost of drafting and dispatching this formal reply.

A copy of this Reply is retained in my office for future legal reference and production in court.

Dated: [CURRENT DATE]
Place: [YOUR CITY]

[NAME OF ADVOCATE]
Advocate & Legal Counsel for My Client
Bar Council Enrolment No.: [ENROLMENT NO.]
[Office Address & Phone Number]`,
  },
  {
    id: "cheque-bounce",
    title: "Section 138 NI Act (Cheque Dishonour) Reply",
    subtitle: "For security cheques misused, stop-payment issued for valid cause, or lack of consideration",
    badge: "High Statutory Stakes",
    annotations: [
      {
        marker: "①",
        title: "15-Day Time Limit Tracking & Receipt Acknowledgment",
        explanation: "Under Section 138(c) of the NI Act, the drawer has 15 days from notice delivery to respond or clear legitimate dues. Acknowledging the exact service date fixes the limitation clock.",
        statuteRef: "Section 138(c) Negotiable Instruments Act, 1881",
      },
      {
        marker: "②",
        title: "Absence of Legally Enforceable Debt",
        explanation: "The bedrock of Section 138 is that the cheque must be issued for a 'legally enforceable debt or liability'. Stating that the cheque was given solely as security or advance rebuts this statutory presumption.",
        statuteRef: "Section 138 explanation & Section 139 NI Act",
      },
      {
        marker: "③",
        title: "Rebuttal of Section 139 Presumption (Basalingappa Doctrine)",
        explanation: "By setting out the probable defense in your reply (e.g. goods never delivered, contract cancelled, full cash/online settlement already done), you establish pre-trial rebuttal evidence.",
        statuteRef: "Supreme Court in Basalingappa v. Mudibasappa (2019)",
      },
      {
        marker: "④",
        title: "Misuse of Blank Signed Security Cheque",
        explanation: "Expressly detailing when and why the cheque was handed over as an undated security instrument, and citing earlier written demands for its return, establishes bad faith by the payee.",
        statuteRef: "Supreme Court in Dashrathbhai Trikambhai Patel (2022)",
      },
      {
        marker: "⑤",
        title: "Criminal Counter-Liability Warning (BNS 316/318)",
        explanation: "Warns the sender of criminal prosecution for cheating and dishonest misappropriation if they present an unauthorized security instrument after obligations ended.",
        statuteRef: "Sections 316 & 318 Bharatiya Nyaya Sanhita, 2023",
      },
      {
        marker: "⑥",
        title: "Demand for Return of Instrument",
        explanation: "Demands the immediate return of the dishonoured cheque and cancellation of any promissory documents within 7 days.",
        statuteRef: "Section 138 & 142 NI Act Defense Strategy",
      },
    ],
    text: `REPLY TO STATUTORY DEMAND NOTICE UNDER SECTION 138 OF THE NEGOTIABLE INSTRUMENTS ACT, 1881

DISPATCHED VIA REGISTERED SPEED POST & EMAIL

To,
[ADVOCATE NAME / COMPLAINANT ADVOCATE]
Advocate, [Enrollment No.]
[Advocate Chambers Address]
Email: [counsel@email.com]

Re: Reply on behalf of [YOUR NAME], residing at [YOUR ADDRESS] to your Statutory Notice dated [NOTICE DATE], received on [DATE OF RECEIPT] ①.

Sir / Madam,

Under instructions from and on behalf of my client [YOUR NAME] ("My Client"), I hereby reply to your notice under Section 138 of the Negotiable Instruments Act, 1881 ("NI Act") as under:

1. DENIAL OF LEGALLY ENFORCEABLE DEBT:
At the very outset, My Client specifically and unequivocally denies that Cheque No. [CHEQUE NO.] dated [CHEQUE DATE] for Rs. [AMOUNT] drawn on [BANK NAME] was issued towards any subsisting, legally enforceable debt or liability ②.

2. FACTUAL MATRIX & REBUTTAL OF SECTION 139 PRESUMPTION:
a) In the month of [MONTH, YEAR], My Client and Your Client entered into an understanding for [PURPOSE OF AGREEMENT].
b) As a condition precedent, Your Client insisted on receiving a BLANK SIGNED UNDATED CHEQUE bearing No. [CHEQUE NO.] solely by way of "SECURITY" pending final performance and reconciliation of accounts ④.
c) Your Client failed to perform the contractual obligation / delivered defective supplies [SPECIFY EXACT REASON], whereupon My Client cancelled the arrangement vide written communication dated [DATE].
d) Despite multiple demands, Your Client deliberately withheld the security cheque and has now fraudulently filled in fictitious amounts and presented it without authority, with the mala fide intention of extorting money ③.

3. PARAGRAPH-WISE DENIALS:
- Contents of Paragraph 1 and 2 are denied save and except the issuance of the blank instrument purely as a conditional security instrument.
- Contents of Paragraph 3 and 4 regarding dishonour for "Funds Insufficient / Payment Stopped" are noted. The stop-payment instruction was issued for valid and justified legal reasons due to Your Client's fraudulent breach.
- Contents of Paragraph 5 and 6 demanding Rs. [AMOUNT] within 15 days are baseless and rejected in toto.

4. DEMAND TO RETURN INSTRUMENT & CRIMINAL WARNING:
Your Client's act of filling an undated security cheque and presenting it without an existing debt constitutes criminal breach of trust and cheating under Sections 316 and 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS) ⑤.

My Client hereby calls upon Your Client to:
1. Forthwith return Cheque No. [CHEQUE NO.] in original along with the bank return memo within 7 days of receipt hereof ⑥;
2. Desist from filing any false complaint under Section 138 NI Act, failing which My Client shall initiate criminal proceedings for perjury and fabrication of evidence.

Dated: [CURRENT DATE]
Place: [YOUR CITY]

[NAME OF ADVOCATE]
Counsel for the Drawer / Accused`,
  },
  {
    id: "consumer-service",
    title: "Consumer Dispute & Service Provider Reply",
    subtitle: "For businesses or professionals replying to consumer legal notices alleging defect or refund",
    badge: "Consumer Protection Act",
    annotations: [
      {
        marker: "①",
        title: "Reference to Consumer Grievance Logs",
        explanation: "Connects the reply to internal CRM tickets, terms of service, and official resolution logs, proving that the enterprise acted diligently and without deficiency.",
        statuteRef: "Section 2(11) Consumer Protection Act, 2019",
      },
      {
        marker: "②",
        title: "Binding Terms of Service & Warranty Policy",
        explanation: "Cites the explicit clauses agreed to at the time of purchase (e.g. return window, inspection procedure, non-refundable components, third-party misuse).",
        statuteRef: "Section 2(47) CPA 2019 (Fair Trade Practice)",
      },
      {
        marker: "③",
        title: "Specific Denial of Negligence & Deficiency",
        explanation: "Rebuts the claim of deficiency in service under Section 2(11) by placing on record documented proof of repair offers, replacements, or customer non-cooperation.",
        statuteRef: "Supreme Court in SGS India v. Dolphin International (2021)",
      },
      {
        marker: "④",
        title: "Burden of Proof on the Complainant",
        explanation: "Affirms that under consumer law, the complainant bears the legal burden of establishing a defect through expert analysis or tangible evidence under Section 38(2)(c).",
        statuteRef: "Section 38(2)(c) Consumer Protection Act, 2019",
      },
      {
        marker: "⑤",
        title: "Fair Settlement or Final Repudiation Position",
        explanation: "Sets out an honest, legally defensible stance (e.g. offering standard warranty repair or standing firm on policy grounds) to present to the Consumer Commission.",
        statuteRef: "Section 37 CPA 2019 (Pre-Trial Mediation)",
      },
      {
        marker: "⑥",
        title: "Reservation of Legal Costs & Vexatious Claim Defense",
        explanation: "Notifies the consumer that if an unsubstantiated e-Jagriti complaint is lodged, the respondent will apply for dismissal with costs up to Rs. 50,000 under Section 35(7).",
        statuteRef: "Section 35(7) Consumer Protection Act, 2019",
      },
    ],
    text: `REPLY TO CONSUMER LEGAL NOTICE DATED [NOTICE DATE]

SENT VIA REGISTERED POST & EMAIL

To,
[ADVOCATE NAME / CONSUMER COUNSEL]
Advocate, [Address of Advocate]
Email: [advocate@email.com]

On behalf of:
[COMPANY / ENTERPRISE NAME], Having registered office at [REGISTERED ADDRESS]
(hereinafter "Our Client / Company")

Sir / Madam,

Under instructions from Our Client, this formal Reply is submitted in response to your Legal Notice dated [NOTICE DATE], received at Our Client's office on [DATE OF RECEIPT] ①:

1. COMPLIANCE WITH CONSUMER PROTECTION NORMS:
Our Client is a reputed organization operating in strict adherence to the Consumer Protection Act, 2019 and the Consumer Protection (E-Commerce) Rules, 2020. Our Client maintains zero tolerance for service deficiencies and maintains robust grievance redressal mechanisms.

2. PRELIMINARY FACTS & TERMS OF ENGAGEMENT:
a) Your client purchased [PRODUCT/SERVICE] on [DATE] under Invoice No. [INVOICE NO.] subject to standard Terms & Conditions accepted by your client ②.
b) As per Clause [CLAUSE NO.], warranty and replacement cover manufacturing defects but explicitly exclude user-induced physical damage, electrical surge, or unauthorized tampering.
c) Upon receipt of your client's complaint on [DATE], Our Client dispatched an authorized technician on [VISIT DATE], who noted that the reported issue arose from [EXPLAIN USER MISUSE / UNAUTHORIZED MODIFICATION], as documented in Service Job Sheet No. [JOB SHEET NO.].

3. DENIAL OF SERVICE DEFICIENCY (SECTION 2(11) CPA):
Under Section 2(11) of the Consumer Protection Act, 2019, deficiency requires an act of negligence, willful omission, or short-coming in service standard ③. The burden of proving a manufacturing defect rests strictly on your client as held by the Hon'ble Supreme Court in SGS India Ltd. v. Dolphin International Ltd. (2021) ④. No technical report has been produced by your client.

4. GOOD FAITH OFFER / FINAL POSITION:
Notwithstanding the absence of any legal liability, and purely as a commercial gesture of goodwill, Our Client remains prepared to [OFFER STANDARD WARRANTY REPAIR / PROVIDE DISCOUNTED REPLACEMENT PART] upon your client presenting the unit at the authorized service center within 14 days ⑤.

5. NOTICE OF DEFENSE & LITIGATION COSTS:
Should your client choose to reject this reasonable resolution and file a frivolous complaint before the District Consumer Disputes Redressal Commission on e-Jagriti, Our Client shall vigorously defend the matter and seek exemplary costs of up to Rs. 50,000/- for vexatious litigation under Section 35(7) of the Consumer Protection Act, 2019 ⑥.

Yours faithfully,

Dated: [DATE]
Place: [CITY]

[NAME OF ADVOCATE]
Legal Counsel for the Company`,
  },
];

export default function LegalNoticeReplyWorkspace() {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateVariant>(TEMPLATES[0]);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(selectedTemplate.text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadWord = () => {
    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
      "xmlns:w='urn:schemas-microsoft-com:office:word' "+
      "xmlns='http://www.w3.org/TR/REC-html40'>"+
      "<head><meta charset='utf-8'><title>" + selectedTemplate.title + "</title></head><body><pre style='font-family: Arial, sans-serif; white-space: pre-wrap;'>";
    const footer = "</pre></body></html>";
    const sourceHTML = header + selectedTemplate.text + footer;
    const blob = new Blob(['\ufeff', sourceHTML], {
      type: 'application/msword'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedTemplate.id}-reply-format.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full space-y-6">
      {/* Template Variant Selector Tabs */}
      <div className="flex flex-wrap gap-2.5 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        {TEMPLATES.map((t) => {
          const isSelected = selectedTemplate.id === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setSelectedTemplate(t)}
              className={`flex-1 min-w-[200px] text-left px-4 py-3 rounded-xl transition-all ${
                isSelected
                  ? "bg-white text-slate-900 shadow-md border border-slate-200/80"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="font-extrabold text-xs sm:text-sm tracking-tight">
                  {t.title}
                </span>
                <span
                  className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${
                    isSelected
                      ? "bg-red-50 text-[#DC2626] border border-red-200"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {t.badge}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 line-clamp-1 leading-snug">
                {t.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs sm:text-sm font-bold text-slate-800">
            Selected Format: <span className="text-[#DC2626]">{selectedTemplate.title}</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs"
          >
            {copySuccess ? "✓ Copied!" : "📋 Copy Template"}
          </button>
          <button
            type="button"
            onClick={handleDownloadWord}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-300"
          >
            📥 Download .doc
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-300"
          >
            🖨️ Print / PDF
          </button>
        </div>
      </div>

      {/* Side-by-Side Annotated Layout (Archetype P3) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Sample Document Draft (7 cols on lg) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-slate-900 text-white px-4 sm:px-6 py-3 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
              Statutory Legal Draft Preview
            </span>
            <span className="text-[10px] bg-red-950 text-red-400 font-bold px-2 py-0.5 rounded-md border border-red-800">
              Annotated Footnotes ①–⑥
            </span>
          </div>
          <div className="p-4 sm:p-6 bg-slate-50/50">
            <pre className="font-mono text-xs sm:text-[13px] text-slate-800 whitespace-pre-wrap leading-relaxed select-all bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-inner overflow-x-auto max-h-[700px] overflow-y-auto">
              {selectedTemplate.text}
            </pre>
          </div>
          <div className="px-4 py-3 bg-slate-100 border-t border-slate-200 text-slate-500 text-[11px] flex items-center justify-between">
            <span>Replace uppercase text in [BRACKETS] with your details.</span>
            <span className="font-semibold text-slate-700">Format: Standard Legal Notice Reply</span>
          </div>
        </div>

        {/* Right Column: Numbered Margin Annotations Breakdown (5 cols on lg) */}
        <div className="lg:col-span-5 space-y-3.5">
          <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 shadow-sm">
            <h3 className="text-sm font-extrabold tracking-tight">
              Numbered Margin Annotations Guide
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Why each numbered section is mandatory under Indian procedural law and evidence rules:
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
