'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";
import { CheckCircle, FileText } from "lucide-react";

// Content arrays
const sections = [
  {
    id: "understanding-friendly-loan",
    title: "1. Understanding Friendly Loans & Legal Validity",
    content: `
      <p class="text-sm md:text-base leading-relaxed">A "friendly loan" is a sum of money advanced by an individual to a friend, relative, or acquaintance, typically without the strict formalities, high interest rates, or extensive documentation that accompany institutional loans from banks or NBFCs. However, despite the casual nature of the transaction, friendly loans are legally recognized and recoverable under Indian law, provided certain conditions are met and proper evidence exists. The foundation of recovering a friendly loan lies in establishing that a legally enforceable debt exists and that the transaction was indeed a loan meant to be repaid, not a gift.</p>
      <p class="text-sm md:text-base leading-relaxed">The legal framework governing the recovery of friendly loans in India is primarily based on the Indian Contract Act, 1872, the Code of Civil Procedure, 1908 (CPC), and the Negotiable Instruments Act, 1881 (if cheques or promissory notes are involved). Under Section 10 of the Indian Contract Act, oral agreements are perfectly valid and enforceable, provided they fulfill the essentials of a contract (offer, acceptance, consideration, and intention to create legal relations). Therefore, even if you lent money to a friend based solely on a verbal promise, the law provides mechanisms for recovery, although proving an oral contract demands substantial circumstantial evidence such as bank statements, witness testimonies, or WhatsApp messages.</p>
      <p class="text-sm md:text-base leading-relaxed">One of the critical distinctions in friendly loan recovery is proving the "intention to repay." Courts often scrutinize transactions between close relatives or friends to determine if the money was a loan or an advancement/gift. To solidify your claim, the existence of a Promissory Note (under Section 4 of the Negotiable Instruments Act) or a written Loan Agreement is invaluable. Even informal written acknowledgments, such as an email detailing the loan amount and repayment terms, or a WhatsApp chat where the borrower explicitly promises to return the money by a certain date, can act as powerful evidence under the Indian Evidence Act, 1872 (read with the Information Technology Act, 2000 for electronic evidence). </p>
      <p class="text-sm md:text-base leading-relaxed">Furthermore, it is crucial to understand the limitation period for recovering a friendly loan. According to Article 21 of the Limitation Act, 1963, a suit for the recovery of a loan must be filed within three years from the date the loan was made, or from the date when the repayment was due as per the agreement. If the loan is payable on demand, the three-year period starts from the date of the loan. However, Section 18 of the Limitation Act provides a lifeline: if the borrower makes a written acknowledgment of the debt (even in a chat or email) or makes a partial payment before the expiration of the original three-year period, a fresh period of limitation of three years begins from the date of that acknowledgment or payment. Therefore, preserving every piece of communication and banking transaction is paramount.</p>
      <p class="text-sm md:text-base leading-relaxed">In cases where cash loans are involved, the Income Tax Act, 1961 also comes into play. Section 269SS of the IT Act restricts accepting or taking loans in cash exceeding ₹20,000. Violating this provision can attract a penalty equal to the loan amount under Section 271D. While lending cash above ₹20,000 does not strictly render the loan unrecoverable in a civil court, it severely complicates the evidence and invites unwanted scrutiny from tax authorities. Thus, courts strongly prefer transactions made via banking channels (NEFT, RTGS, IMPS, cheques), as they provide an undeniable, timestamped trail of the money transfer, shifting the burden of proof onto the borrower to explain why the money was received if not as a loan.</p>
      <p class="text-sm md:text-base leading-relaxed">When the relationship sours and the borrower defaults or evades repayment, the first and most critical step is to issue a formal Legal Notice for Recovery of Money. This notice serves multiple purposes: it formally communicates your demand, establishes a timeline of default, warns the borrower of impending legal action, and often acts as a catalyst for out-of-court settlement, as most individuals wish to avoid the time, expense, and public record of a court case. The legal notice sets the stage for any subsequent litigation, whether it be a Summary Suit under Order 37 CPC, an ordinary Civil Suit, or a criminal complaint under Section 138 of the NI Act if a cheque has bounced.</p>
    `,
  },
  {
    id: "evidence-documentation",
    title: "2. Crucial Evidence & Documentation Needed",
    content: `
      <p class="text-sm md:text-base leading-relaxed">The success of recovering a friendly loan hinges almost entirely on the quality and admissibility of your evidence. In the eyes of the law, an assertion without proof is merely an allegation. Therefore, gathering, organizing, and preserving documentation is the bedrock of your legal strategy. The courts require clear, cogent proof that money was advanced, that it was a loan and not a gift, and that the borrower has failed to repay it within the agreed timeline.</p>
      <p class="text-sm md:text-base leading-relaxed"><strong>Primary Documentary Evidence:</strong> The most potent forms of evidence are formal, written documents executed at the time of the loan. A signed <strong>Loan Agreement</strong> on non-judicial stamp paper, clearly detailing the loan amount, interest rate (if any), repayment schedule, and consequences of default, is the gold standard. Similarly, a <strong>Promissory Note</strong>, which is an unconditional written undertaking signed by the borrower to pay a certain sum of money on demand or at a fixed future date, provides an unassailable foundation for a Summary Suit under Order 37 CPC. A post-dated cheque (PDC) handed over by the borrower at the time of taking the loan acts both as an acknowledgment of debt and a powerful recovery tool via the Negotiable Instruments Act.</p>
      <p class="text-sm md:text-base leading-relaxed"><strong>Banking and Financial Records:</strong> In the absence of a formal agreement, the transaction trail becomes your primary weapon. <strong>Bank Statements</strong> showing the exact transfer of funds (NEFT, RTGS, IMPS, UPI) from your account to the borrower’s account are irrefutable proof that money changed hands. It is advisable to use clear narration in bank transfers, such as "Friendly Loan to [Name]". If you have issued a cheque, keep a copy of the cleared cheque image from your bank. If the borrower has made any partial repayments, those bank entries act as an implicit acknowledgment of the remaining debt, significantly strengthening your case and potentially extending the limitation period.</p>
      <p class="text-sm md:text-base leading-relaxed"><strong>Electronic and Digital Evidence:</strong> Recognizing modern communication methods, Indian courts widely accept electronic evidence, provided it meets the requirements of Section 65B of the Indian Evidence Act, 1872. <strong>WhatsApp chats, SMS text messages, and Emails</strong> are crucial. A WhatsApp conversation where the borrower asks for a loan, acknowledges receipt of the funds, or makes promises to repay ("I will return the money next month," "Sorry for the delay, will send it by Friday") serves as an admission of liability. You must ensure that the phone numbers are identifiable, the chats are not selectively deleted, and you obtain a Section 65B certificate (an affidavit affirming the authenticity of the electronic record) when presenting this evidence in court. Call recordings can also be used, provided they clearly capture the borrower admitting the debt and they are legally admissible in your specific jurisdiction.</p>
      <p class="text-sm md:text-base leading-relaxed"><strong>Secondary Evidence and Witnesses:</strong> If the loan was given entirely in cash (which is highly discouraged and capped at ₹20,000 for legal safety) or without any written trail, you must rely on secondary evidence. This includes the testimony of independent witnesses who were present when the money was handed over or when the borrower acknowledged the debt. <strong>Affidavits from witnesses</strong> can support an oral agreement, though courts evaluate such testimonies with high scrutiny to rule out bias. Any letters, notices, or handwritten notes by the borrower apologizing for the delay or requesting more time are also potent pieces of evidence.</p>
      <p class="text-sm md:text-base leading-relaxed"><strong>Drafting the Ledger/Statement of Account:</strong> Even for a friendly loan, maintaining a simple ledger or statement of account is beneficial. If the loan involved multiple tranches or partial repayments, a clear spreadsheet detailing the date, amount advanced, amount repaid, and the outstanding balance helps clarify the exact claim amount. This structured financial summary must be attached to the legal notice and the subsequent court plaint to provide the judge with a clear, mathematical overview of the dispute.</p>
      <p class="text-sm md:text-base leading-relaxed">Compiling all this evidence before drafting the legal notice ensures that your lawyer can frame a strong, fact-based demand. The notice should specifically reference the dates of transfer, the bank account details, and any written acknowledgments (like WhatsApp dates) to make the borrower realize that your claim is backed by undeniable proof, thereby increasing the chances of an immediate settlement.</p>
    `,
  },
  {
    id: "drafting-legal-notice",
    title: "3. Step-by-Step Guide to Drafting & Sending the Notice",
    content: `
      <p class="text-sm md:text-base leading-relaxed">A Legal Notice for the recovery of a friendly loan is a formal communication sent by you (or your advocate) to the borrower, demanding the return of the outstanding money within a stipulated timeframe, failing which legal proceedings will be initiated. The drafting of this notice must be meticulous, accurate, and authoritative. It is not merely a threat; it is the foundation upon which your entire legal case will be built. If the notice is flawed, vague, or omits crucial details, it can weaken your position in court.</p>
      <p class="text-sm md:text-base leading-relaxed"><strong>Step 1: Establishing the Relationship and Transaction:</strong> The notice must begin by clearly defining the relationship between the parties to establish the context of the "friendly" loan. It should then detail the exact date, time, and circumstances under which the loan was requested and granted. You must state the exact principal amount, the mode of transfer (e.g., "via NEFT transaction bearing UTR No. XYZ on Date from Account No. ABC"), and the agreed-upon terms of repayment, even if they were oral. If there was an agreement regarding interest, this must also be explicitly stated with the agreed percentage.</p>
      <p class="text-sm md:text-base leading-relaxed"><strong>Step 2: Chronicling the Default and Evasions:</strong> The notice should sequentially list the events following the loan disbursal. It must detail the date when the repayment became due and how the borrower failed to honor that commitment. It is highly effective to chronologically list your efforts to recover the money prior to the legal notice—mentioning dates of phone calls, personal visits, WhatsApp reminders, and the borrower’s corresponding excuses, false promises, or evasive behavior. This establishes the borrower's mala fide (bad faith) intent and your genuine efforts to resolve the matter amicably.</p>
      <p class="text-sm md:text-base leading-relaxed"><strong>Step 3: The Formal Demand and Ultimatum:</strong> The core of the legal notice is the unequivocal demand for the total outstanding amount. This section should clearly calculate the principal amount due, any agreed-upon interest calculated up to the date of the notice, and the cost of the legal notice itself. You must provide a strict deadline for the borrower to clear the dues—typically 15 to 30 days from the receipt of the notice. The language must be firm: demanding payment via a specific mode (like a Demand Draft or direct bank transfer to a specified account) within the given timeline.</p>
      <p class="text-sm md:text-base leading-relaxed"><strong>Step 4: Warning of Legal Consequences:</strong> The notice concludes with a stern warning outlining the specific legal actions that will be taken if the borrower fails to comply. Depending on the evidence, the lawyer will invoke relevant statutes: threatening a Civil Suit for Recovery under the Indian Contract Act, a Summary Suit under Order 37 of the CPC (if based on a promissory note or written agreement), or criminal proceedings for cheating and criminal breach of trust under the Bharatiya Nyaya Sanhita (BNS) / Indian Penal Code (IPC) if there is evidence of fraudulent intent from the inception of the loan. This section is designed to compel the borrower to calculate the risks of litigation, including the costs, court appearances, and potential attachment of their property.</p>
      <p class="text-sm md:text-base leading-relaxed"><strong>Step 5: Dispatch and Tracking:</strong> How the notice is sent is as important as what it contains. A legal notice must be sent via Registered Post with Acknowledgment Due (RPAD) or Speed Post through India Post. This generates a legally valid tracking receipt and delivery confirmation. While sending a copy via email or WhatsApp (with blue tick read receipts) is a highly recommended supplementary measure for immediate impact, the postal receipt is the primary proof of service required by courts. The notice should be sent to the borrower’s residential address, and if known, their official workplace address to maximize pressure.</p>
      <p class="text-sm md:text-base leading-relaxed"><strong>The Waiting Period:</strong> Once the notice is delivered, you must wait for the stipulated notice period (e.g., 15 days) to expire before filing a court case. During this time, the borrower may reply to the notice, denying the claims, or reach out for a settlement. Any reply received must be carefully analyzed by your lawyer, as it often reveals the borrower's intended defense, allowing you to prepare counter-arguments for the eventual lawsuit.</p>
    `,
  },
  {
    id: "legal-recourse-options",
    title: "4. Legal Remedies: Summary Suit, Section 138, and Civil Action",
    content: `
      <p class="text-sm md:text-base leading-relaxed">If the borrower ignores the legal notice or sends a frivolous reply refusing to pay, you must escalate the matter to the courts. Indian law provides several avenues for the recovery of a friendly loan, and the choice of remedy depends entirely on the nature of your documentary evidence and the specific circumstances of the default. Your lawyer will evaluate your "paper trail" to determine the fastest and most effective legal strategy.</p>
      <p class="text-sm md:text-base leading-relaxed"><strong>1. Summary Suit under Order 37 of CPC:</strong> If your friendly loan is backed by a formal written contract, a Promissory Note, a Hundi, or a Bill of Exchange, you are eligible to file a Summary Suit. This is the most potent weapon in civil recovery. Under Order 37, the standard civil procedure is bypassed. The defendant (borrower) is not automatically entitled to defend the suit. They must apply to the court within 10 days of receiving the summons, seeking "leave to defend," and they must prove to the judge via an affidavit that they have a substantial and triable defense (e.g., proving they already paid, or the document is forged). If the judge finds their defense weak, vague, or purely delaying tactics, leave to defend is denied, and a decree is immediately passed in your favor. This drastically reduces the timeline of recovery from years to potentially months.</p>
      <p class="text-sm md:text-base leading-relaxed"><strong>2. Criminal Proceedings under Section 138 NI Act:</strong> If the borrower provided a post-dated cheque for repayment, and that cheque bounces upon presentation due to "Insufficient Funds," "Account Closed," or "Payment Stopped," you have a highly effective criminal remedy. Under Section 138 of the Negotiable Instruments Act, cheque bouncing is a criminal offense. You must send a specific statutory demand notice within 30 days of the cheque return memo. If payment is not made within 15 days of the notice, you file a criminal complaint in the Magistrate's court within the next 30 days. The threat of imprisonment (up to 2 years) and a fine (up to double the cheque amount) exerts immense pressure on the borrower, leading to swift settlements in a majority of cases. However, the strict timelines of the NI Act must be adhered to flawlessly.</p>
      <p class="text-sm md:text-base leading-relaxed"><strong>3. Ordinary Civil Suit for Recovery:</strong> If your loan was advanced without a promissory note or cheque—relying only on bank transfers, oral promises, and WhatsApp chats—you cannot file a Summary Suit. You must file an Ordinary Civil Suit under the CPC. While effective, this process is lengthy and procedural. It involves filing a plaint, the defendant filing a written statement, framing of issues, prolonged evidence recording (cross-examination of witnesses), and final arguments. Because the burden is on you to prove the oral contract and the loan's existence, the electronic evidence (Section 65B certificates) and witness testimonies become the focal point of the trial. A civil suit also allows you to claim pendente lite (pending litigation) and future interest on the loan amount.</p>
      <p class="text-sm md:text-base leading-relaxed"><strong>4. Criminal Complaint for Cheating and Breach of Trust:</strong> In specific scenarios where you can prove that the borrower had no intention of repaying the money from the very beginning, you can file an FIR or a criminal complaint for Cheating (Section 318 BNS / Section 420 IPC) and Criminal Breach of Trust (Section 316 BNS / Section 406 IPC). For instance, if the borrower took the loan claiming a medical emergency but immediately used the funds to purchase a luxury vehicle, it demonstrates fraudulent intent. While courts generally discourage giving civil recovery disputes a "criminal color," establishing blatant deception from the inception of the transaction can warrant police intervention, which dramatically shifts the power dynamic in your favor.</p>
      <p class="text-sm md:text-base leading-relaxed"><strong>Execution of Decree:</strong> Winning a civil suit or summary suit results in a "Decree" from the court ordering the borrower to pay. If they still refuse, you must file an Execution Petition. The court has vast powers during execution: it can order the attachment and auction of the borrower’s movable properties (cars, bank accounts) and immovable properties (house, land), garnish their salary, or even order civil imprisonment if willful evasion is proven. Understanding that obtaining the decree is only the first half of the battle, and execution is the second, is crucial for setting realistic expectations for the recovery process.</p>
    `,
  },
];

const faqs = [
  {
    question: "Can I send a legal notice for a loan given in cash?",
    answer: "Yes, you can send a legal notice for a cash loan. However, under the Income Tax Act (Section 269SS), cash loans exceeding ₹20,000 are discouraged and can attract penalties. In court, proving a cash loan is significantly harder without a written agreement, promissory note, or credible witnesses. You will have to rely heavily on circumstantial evidence like WhatsApp admissions or partial repayments made via bank transfer later."
  },
  {
    question: "What happens if there is no written agreement for the friendly loan?",
    answer: "An oral agreement is valid under the Indian Contract Act. If you don't have a formal written agreement, you can use alternative evidence to prove the loan. This includes bank statements showing the transfer, WhatsApp or SMS chats acknowledging the debt, email correspondence, or audio recordings. A legal notice based on these digital footprints is perfectly valid and enforceable in a standard civil suit."
  },
  {
    question: "What is the time limit (limitation period) to recover a friendly loan?",
    answer: "Under the Limitation Act, 1963, you have exactly 3 years to file a civil suit for recovery. This 3-year period begins from the date the loan was advanced, or from the specific date agreed upon for repayment. If the borrower acknowledges the debt in writing (even via chat) or makes a partial payment within these 3 years, the limitation period resets, granting you a fresh 3 years from the date of that acknowledgment."
  },
  {
    question: "What should I do if the borrower ignores the legal notice?",
    answer: "If the borrower fails to reply or repay within the stipulated notice period (usually 15-30 days), your next step is to initiate legal proceedings. Depending on your evidence, your lawyer will advise filing a Summary Suit (Order 37 CPC) if you have written proof, a Section 138 NI Act case if a cheque bounced, or a regular Civil Suit for recovery. The legal notice acts as the prerequisite proof of demand for these court cases."
  },
  {
    question: "Can I file a police complaint for an unpaid friendly loan?",
    answer: "Generally, non-payment of a loan is considered a civil dispute, and police will advise you to approach a civil court. However, if you can prove that the borrower had a fraudulent intention to cheat you from the very beginning (e.g., they gave fake reasons for the loan or absconded immediately), you can file a criminal complaint for Cheating (Sec 420 IPC / Sec 318 BNS). Mere inability to repay does not constitute criminal cheating."
  },
  {
    question: "Are WhatsApp messages valid evidence in court for a loan?",
    answer: "Yes, WhatsApp messages are admissible as electronic evidence under Section 65B of the Indian Evidence Act. If the chats clearly show the borrower asking for money, acknowledging receipt, or promising repayment, they form strong evidence. You will need to submit a printed copy of the chats along with a sworn Section 65B certificate verifying their authenticity and stating that the phone was in your regular control."
  },
  {
    question: "How does a Summary Suit (Order 37 CPC) work for friendly loans?",
    answer: "A Summary Suit is a fast-track civil case applicable only when the debt is based on a written contract, promissory note, or bounced cheque. Unlike normal cases, the defendant cannot automatically fight the case. They must ask the court for permission ('leave to defend') by proving they have a genuine defense. If the judge rejects their defense, you win the case immediately, saving years of litigation."
  },
  {
    question: "What if the borrower has moved to another city or state?",
    answer: "You can send the legal notice to their last known address, current residential address, and official workplace. Even if they have moved, sending the notice via registered post to these addresses fulfills your legal obligation. If you file a case, you generally file it in the jurisdiction where the money was transferred from, where the borrower resides, or where the cause of action arose."
  },
  {
    question: "Can I claim interest on the friendly loan if it wasn't pre-decided?",
    answer: "If there is a written agreement specifying an interest rate, you can claim that rate. If there was no agreement on interest, you can still claim 'pendente lite' (during the trial) and future interest at a rate deemed reasonable by the court, often matching prevailing commercial bank rates. The legal notice should explicitly state the demand for interest from the date of default."
  },
  {
    question: "What if the borrower gives a cheque and it bounces?",
    answer: "A bounced cheque is the strongest scenario for recovery. Under Section 138 of the Negotiable Instruments Act, you must send a specific legal notice within 30 days of the cheque bouncing. If they don't pay within 15 days, you can file a criminal case. The threat of criminal charges and potential jail time usually forces the borrower to settle the friendly loan quickly."
  }
];

const reviews = [
  {
    name: "Vikram S.",
    rating: 5,
    datePublished: "2024-02-18",
    review: "I lent 5 lakhs to a friend who stopped taking my calls. The lawyers drafted a very strict legal notice quoting my WhatsApp chats and bank transfers. He settled within 10 days of receiving the notice. Exceptional service."
  },
  {
    name: "Anjali M.",
    rating: 5,
    datePublished: "2024-01-25",
    review: "Had a bounced cheque from a relative for a friendly loan. They guided me through the Section 138 NI Act process perfectly. The legal notice created immediate pressure and we recovered the full amount."
  },
  {
    name: "Rajesh K.",
    rating: 4,
    datePublished: "2023-12-10",
    review: "I didn't have a written agreement, just NEFT records and some texts. The advocate explained how civil recovery works and sent a powerful demand notice. It forced the borrower to negotiate."
  },
  {
    name: "Neha P.",
    rating: 5,
    datePublished: "2023-11-22",
    review: "Very professional and fast. They drafted the Order 37 summary suit notice based on my promissory note. The borrower realized they had no defense and paid up before we even filed the case."
  },
  {
    name: "Suresh D.",
    rating: 5,
    datePublished: "2023-10-05",
    review: "Clear guidance on how to use WhatsApp evidence with a 65B certificate. The legal notice was comprehensive and highlighted all the borrower's false promises chronologically."
  },
  {
    name: "Pooja T.",
    rating: 5,
    datePublished: "2023-09-15",
    review: "Highly transparent process. They assessed my evidence realistically, drafted a stern notice demanding my money, and helped me avoid a lengthy court battle by triggering an out-of-court settlement."
  }
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.legalrecovery.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.legalrecovery.in/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Friendly Loan Recovery",
      item: "https://www.legalrecovery.in/legal-notice-to-recovery-my-loan-from-friend",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Legal Notice for Recovery of Friendly Loan in India",
  description: "A comprehensive legal guide on recovering a friendly or personal loan from a friend or relative in India, covering Order 37 CPC, Promissory Notes, Section 138 NI Act, and WhatsApp evidence.",
  author: {
    "@type": "Organization",
    name: "Legal Recovery India",
  },
  publisher: {
    "@type": "Organization",
    name: "Legal Recovery India",
    logo: {
      "@type": "ImageObject",
      url: "https://www.legalrecovery.in/logo.png",
    },
  },
  datePublished: "2024-03-01",
  dateModified: new Date().toISOString().split("T")[0],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Friendly Loan Legal Notice & Recovery Service",
  provider: {
    "@type": "Organization",
    name: "Legal Recovery India",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "135",
    bestRating: "5",
    worstRating: "1",
  },
  review: reviews.map(rev => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(rev.rating)
    },
    author: {
      "@type": "Person",
      name: rev.name
    },
    reviewBody: rev.review
  }))
};

export default function FriendlyLoanRecoveryClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "understanding-friendly-loan", title: "1. Understanding Friendly Loans & Legal Validity" },
    { id: "evidence-documentation", title: "2. Crucial Evidence & Documentation Needed" },
    { id: "drafting-legal-notice", title: "3. Step-by-Step Guide to Drafting & Sending the Notice" },
    { id: "legal-recourse-options", title: "4. Legal Remedies: Summary Suit, Section 138, and Civil Action" },
    { id: "success-stories-reviews", title: "5. Success Stories & Client Reviews" },
    { id: "faqs", title: "6. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Friendly Loan Recovery", href: "/legal-notice-to-recovery-my-loan-from-friend" }
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">
        
        {/* Expanded Hero Section */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          {/* Ambient Red Glow Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              Legal Recovery Services India
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover Friendly Loans via <span className="text-[#DC2626]">Legal Notice</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Don't let relationships cost you your hard-earned money. Send a powerful, lawyer-drafted legal notice utilizing evidence like WhatsApp chats, bank statements, and promissory notes to force repayment.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Recovery Now
            </button>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-300 font-medium z-20 relative">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Valid for Oral & Written Loans</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>WhatsApp & Bank Proof Accepted</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Order 37 & Sec 138 NI Act Expertise</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-10">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">
            
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10 scale-90 origin-top">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
                
                {sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                      {section.title}
                    </h2>
                    <div
                      className="prose prose-base max-w-none text-slate-650 space-y-6"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </section>
                ))}

                {/* 5. Success Stories & Client Reviews */}
                <section id="success-stories-reviews" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">5. Success Stories &amp; Reviews</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      We have helped hundreds of individuals recover personal loans from defaulting friends and relatives. Below are representative success stories:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      {reviews.map((r, i) => (
                        <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                          <p className="text-sm text-slate-700 italic mb-4">&quot;{r.review}&quot;</p>
                          <h4 className="font-extrabold text-xs text-slate-900">— {r.name}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* 6. FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">6. FAQs</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                      const faqId = `faq-${idx}`;
                      const isExpanded = expandedFaqs.includes(faqId);
                      return (
                        <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-slate-350">
                          <button
                            onClick={() => toggleFaq(idx)}
                            className="flex justify-between items-center w-full text-left p-4 font-bold text-sm text-slate-900 hover:bg-slate-50/50 focus:outline-none transition-colors cursor-pointer"
                          >
                            <span>{faq.question}</span>
                            <span className={`transform transition-transform duration-205 shrink-0 ml-3 text-slate-400 ${isExpanded ? 'rotate-180' : ''}`}>▼</span>
                          </button>
                          {isExpanded && (
                            <div className="px-4 pb-4 pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pl-6 border-t border-slate-100 bg-[#F8F9FB]/40">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-6 sticky top-24">
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#DC2626] opacity-5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="text-lg font-black text-slate-900 mb-2">Ready to Recover?</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Let expert advocates draft a powerful legal notice to force repayment immediately.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-3.5 px-4 rounded-xl transition-all shadow-md text-sm mb-4 cursor-pointer"
                >
                  Start Recovery Now
                </button>
                <div className="flex flex-col gap-2 text-left mt-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-600 font-medium">Drafted by Senior Advocates</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-600 font-medium">Sent via Registered Speed Post</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-600 font-medium">Digital Copies for WhatsApp tracking</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-slate-100 p-2 rounded-lg">
                    <FileText className="w-5 h-5 text-slate-700" />
                  </div>
                  <h3 className="text-base font-black text-slate-900">Keep Ready</h3>
                </div>
                <ul className="space-y-3 text-xs text-slate-600 font-medium">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Bank statements
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> WhatsApp/SMS chats
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Promissory Note (if any)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Bounced Cheque (if any)
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />
    </>
  );
}
