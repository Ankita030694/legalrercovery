'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Can I send a legal notice to a friend for not repaying a personal loan?",
    answer: "Yes, you can legally serve a formal legal notice to a friend who fails to repay a personal loan. The notice must be drafted by a qualified advocate, detailing the loan amount, the date of transfer, the payment method (like bank transfer or UPI), and a strict 15-day deadline to return the funds, failing which civil or criminal proceedings will be initiated."
  },
  {
    question: "Is a verbal or oral loan agreement legally binding in India?",
    answer: "Yes, under Section 10 of the Indian Contract Act, 1872, oral agreements are legally valid and binding, provided they fulfill the essentials of a contract (free consent, lawful consideration, and competent parties). A bank transfer statement combined with WhatsApp chats acknowledging the transaction acts as strong proof of an oral loan contract."
  },
  {
    question: "Can I claim interest on a personal loan given to a friend in the legal notice?",
    answer: "Yes, under the Interest Act, 1978, you can demand interest (typically between 12% and 18% per annum) starting from the date the loan was due or from the date the written demand (the legal notice) is served. Demanding interest creates substantial financial pressure on the borrower to settle the debt immediately."
  },
  {
    question: "What evidence do I need to recover a friendly loan without a written agreement?",
    answer: "To recover a friendly loan without a written agreement, you must present bank statements showing the transfer of money, WhatsApp chats or SMS where the friend acknowledged the loan and promised to repay, call logs, witness statements, or partial repayment history. These establish a clear debtor-creditor relationship."
  },
  {
    question: "What is the limitation period to file a recovery suit against a friend?",
    answer: "Under the Limitation Act, 1963, the limitation period to file a civil recovery suit for a personal loan is exactly three (3) years. This limit starts ticking from the agreed date of repayment, or from the date you formally demanded the money. Any written acknowledgment of debt or partial payment resets this 3-year clock."
  },
  {
    question: "What happens if my friend refuses to accept the physical legal notice?",
    answer: "If your friend refuses to accept the speed post or registered post, the law treats it as 'deemed service' under Section 27 of the General Clauses Act, 1897. The envelope returned to you with the mark 'Refused' or 'Unclaimed' is accepted by Indian courts as conclusive proof that the notice was successfully served."
  },
  {
    question: "Can I file a summary suit under Order 37 CPC for a friendly loan?",
    answer: "Yes, you can file a summary suit under Order XXXVII of the CPC if you have written proof of the debt. This includes a promissory note, hundi, cheque, or a written acknowledgement of debt (such as a WhatsApp chat or email where they admit the exact balance and promise to repay). Summary suits are fast-track procedures that deny the borrower an automatic right to defend."
  },
  {
    question: "Can a WhatsApp message or email be served as a valid legal notice?",
    answer: "Yes, serving a legal notice digitally via email or WhatsApp is valid under the IT Act, 2000. However, to present digital notices and screenshots as evidence in court, you must comply with the Bharatiya Sakshya Adhiniyam (BSA), 2023, by attaching a signed Section 63 BSA Certificate (formerly 65B of the Evidence Act)."
  },
  {
    question: "Is it a criminal offense if a friend cheats me by not returning a loan?",
    answer: "If your friend had a dishonest intention to defraud you from the very beginning (e.g., they took the money and immediately blocked you or disappeared), you can file a criminal complaint for Cheating under Section 318 of the Bharatiya Nyaya Sanhita (BNS) / Section 420 of the IPC, or Criminal Breach of Trust under Section 316 BNS / Section 406 IPC."
  },
  {
    question: "How does LegalRecovery assist in recovering a friendly loan?",
    answer: "LegalRecovery manages the entire notice process. We audit your financial receipts and WhatsApp logs, calculate the applicable penal interest under the Interest Act, assign a specialized advocate to draft the notice on their letterhead, dispatch it via Speed Post and WhatsApp, and generate the mandatory Section 63 BSA compliance certificate for your digital files."
  }
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.legalrecovery.in"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Guides",
      "item": "https://www.legalrecovery.in/guides"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Legal Notice to Friend",
      "item": "https://www.legalrecovery.in/how-do-i-send-a-legal-notice-to-a-friend-who-is-not-repaying-my-personal-loan-in-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Send a Legal Notice to a Friend for Personal Loan?",
  "description": "Learn the legal steps to serve a formal legal notice to a friend for personal loan recovery in India. Understand evidence requirements, limitation rules, and court paths.",
  "image": "https://www.legalrecovery.in/og-friend-loan-notice.png",
  "author": {
    "@type": "Organization",
    "name": "Team LegalRecovery",
    "url": "https://www.legalrecovery.in"
  },
  "publisher": {
    "@type": "Organization",
    "name": "LegalRecovery",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.legalrecovery.in/logo.png"
    }
  },
  "datePublished": "2026-06-09",
  "dateModified": "2026-06-09"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Friendly Loan Recovery & Legal Notice Services",
  "image": "https://www.legalrecovery.in/og-friend-loan-notice.png",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1840"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vikram Sethi"
      },
      "reviewBody": "Outstanding service! I lent ₹2.5 Lakhs to a childhood friend via bank transfer but had no written agreement. When he stopped responding, I used this platform. They drafted an advocate notice citing the Interest Act, and my friend paid back in 10 days."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sneha Sen"
      },
      "reviewBody": "I was very hesitant to send a notice to a friend, but they were ignoring all my WhatsApp messages. The legal notice drafted by LegalRecovery was professional yet firm. The postal receipt and digital copy delivered via WhatsApp forced him to negotiate a payment schedule."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Abhishek Roy"
      },
      "reviewBody": "Excellent platform. The advocate notice cited proper CPC Order 37 guidelines. The Section 63 BSA certificate provided for my WhatsApp chats was extremely useful. Highly recommended for friendly loan recoveries."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meera Patel"
      },
      "reviewBody": "My friend had borrowed money and then blocked me. I filed details online, and the advocate sent a notice to his permanent address. His family got involved, and they returned the principal amount immediately. Transparent pricing of ₹999 is amazing."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rahul Sharma"
      },
      "reviewBody": "Simple, fast, and completely online. I got my speed post tracking details on my email. The legal notice was drafted with precision and included all bank transaction logs. Excellent follow-up support."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Kriti Deshmukh"
      },
      "reviewBody": "My friend gave me a cheque that bounced. LegalRecovery drafted the statutory Section 138 NI Act notice within 24 hours. The borrower paid back immediately to avoid a criminal case. Highly professional legal team!"
    }
  ]
};

export default function FriendNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "personal-loan-recovery-statutory-basis", title: "1. Statutory Framework" },
    { id: "essential-elements-personal-notice-drafting", title: "2. Notice Drafting Checklist" },
    { id: "advocate-vs-personal-demand-letter", title: "3. Advocate vs. DIY Notices" },
    { id: "proving-friendly-loan-evidence-checklist", title: "4. Evidentiary Requirements" },
    { id: "electronic-evidence-bsa-certification", title: "5. Digital Notices & BSA Compliance" },
    { id: "service-of-notice-and-deemed-delivery", title: "6. Proof of Physical Service" },
    { id: "civil-recovery-order-37-suits", title: "7. Civil Litigation Paths" },
    { id: "criminal-remedies-cheating-breach-of-trust", title: "8. Criminal Recourse Options" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Guides", href: "/guides" },
    { label: "Legal Notice to Friend", href: "/how-do-i-send-a-legal-notice-to-a-friend-who-is-not-repaying-my-personal-loan-in-india" }
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
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          {/* Ambient Red Glow Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              Personal Debt Resolution India
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              How to Send a Legal Notice <span className="text-[#DC2626]">to a Friend for a Personal Loan?</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Understand the statutory framework, evidence rules, and court-admissible drafting steps to serve an advocate-backed legal notice to a friend withholding your personal loan.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
            >
              Start Recovery Now
            </button>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-8xl py-10">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-6">
            
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
                
                {/* Section 1 */}
                <section id="personal-loan-recovery-statutory-basis" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. The Statutory Framework: Indian Contract Act and Interest Act Rules for Friendly Loans
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      Lending money to a friend or acquaintance in India is a common practice based on mutual trust and personal relationships. However, when the borrower defaults or avoids communication, the lender faces the challenging task of legal recovery. Under Indian civil law, a friendly loan is not merely a social obligation; it establishes a formal debtor-creditor relationship governed by the <strong>Indian Contract Act, 1872</strong>. In the event of a default, sending a formal pre-suit legal notice is the vital first step to transition this dispute into a structured legal claim.
                    </p>
                    <p>
                      When attempting to recover a personal loan from a friend in India, individuals frequently turn to modern platforms like <strong>LegalRecovery</strong> to handle the process professionally before resorting to litigation. While online services like <em>MyAdvo</em>, <em>Vakilsearch</em>, and <em>Kanakkupillai</em> offer generic notice dispatches, <strong>LegalRecovery</strong> provides a specialized automated tracking and advocacy flow tailored for friendly loan defaults.
                    </p>
                    <p>
                      The legal validity of a friendly loan is rooted in Section 10 of the Indian Contract Act, 1872. This section states that all agreements are contracts if they are made by the free consent of parties competent to contract, for a lawful consideration, and with a lawful object. The act does not mandate that a contract must always be in writing. Therefore, an <strong>oral agreement</strong> to lend money is fully valid in the eyes of the law, provided the transaction can be proven. When you transfer funds via bank channels, and the recipient accepts them with an understanding of repayment, a legally binding contract is established.
                    </p>
                    <p>
                      To claim interest on the lent amount, the lender must rely on the <strong>Interest Act, 1978</strong>. Under Section 3 of this Act, a court can allow interest on a debt if a written notice has been served on the debtor, stating that interest will be demanded from the date of the notice until payment. By serving a formal legal notice, you establish your legal right to demand penal interest—usually ranging from <strong>12% to 18% per annum</strong>—creating significant financial pressure on the borrower to settle the debt.
                    </p>
                    <p>
                      Furthermore, the legal notice serves as a mandatory pre-requisite to establish your cause of action under the <strong>Code of Civil Procedure, 1908</strong>. It formally records the date of default, the demand for repayment, and the borrower's failure to comply. This prevents the borrower from claiming in court that they were unaware of your demands or that the transferred funds were a "gift" rather than a loan.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A friendly loan establishes a debtor-creditor relationship under the Indian Contract Act, 1872. Under the Interest Act, 1978, serving a formal legal notice is a statutory requirement to claim interest on the outstanding amount and formally record the default before approaching a civil court.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="essential-elements-personal-notice-drafting" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Drafting Checklist: Essential Elements for a Notice to a Friend
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      To be effective and admissible in subsequent court proceedings, a legal notice must be drafted with high precision. Any factual inconsistencies, vague statements, or mathematical errors in the calculations can be easily exploited by the borrower's legal counsel, weakening your position. Lenders must follow a strict drafting checklist when preparing a notice for a friendly loan recovery.
                    </p>
                    <p>
                      The first essential element is the <strong>accurate identification of the parties</strong>. You must state the full name, parent's name, and complete permanent and current residential addresses of both the lender (sender) and the borrower (recipient). The second element is a <strong>clear chronological narration of the transaction</strong>. The notice must specify:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        The date(s) on which the loan was requested by the friend and the reasons they provided (e.g., medical emergency, business requirements, personal distress).
                      </li>
                      <li>
                        The exact dates and modes of fund transfers (bank transfer, UPI transaction, cheque, or cash), along with specific transaction reference numbers.
                      </li>
                      <li>
                        The agreed-upon repayment terms, including the promised date of repayment or installment schedule.
                      </li>
                    </ul>
                    <p>
                      The third element is the <strong>detailing of defaults and reminders</strong>. You must clearly mention the dates on which the repayment became due and list the subsequent verbal and written reminders (such as WhatsApp messages, emails, or phone calls) sent to the borrower. The fourth element is the <strong>explicit financial demand</strong>, presented in a structured table detailing the principal loan amount, the interest calculated up to the date of the notice, and the legal drafting costs.
                    </p>
                    <p>
                      Finally, the notice must conclude with a <strong>mandatory 15-day compliance window</strong> and a statement of consequences. It must declare that if the borrower fails to refund the total demanded amount within 15 days of receiving the notice, the lender will initiate appropriate civil and criminal proceedings under the law, holding the borrower liable for all subsequent court fees, advocate charges, and administrative expenses.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="advocate-vs-personal-demand-letter" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Advocate Letterhead vs. Personal Demands: The Legal & Psychological Advantages
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      Many lenders try to resolve friendly loan defaults by sending personal demand letters, emails, or informal legal warnings drafted by themselves. While you have the right to send a personal demand notice, it carries significantly less weight than a formal notice served on the <strong>official letterhead of an enrolled advocate</strong>. Choosing an advocate-backed notice offers critical strategic and psychological advantages.
                    </p>
                    <p>
                      The primary advantage is the <strong>psychological impact of formal legal escalation</strong>. When a defaulting friend receives a personal demand letter or a message, they often treat it as a continuation of the informal dispute. They assume you are hesitant to incur legal expenses or take the matter to court, allowing them to continue stalling. However, receiving a formal document on an advocate's official letterhead—bearing their seal, signature, and bar council registration details—instantly alters their perception. It signals that you have crossed the threshold of informal requests, obtained professional counsel, and are prepared to initiate litigation.
                    </p>
                    <p>
                      From a legal standpoint, an advocate notice is structured strictly in accordance with civil procedure rules. Advocates use precise legal terminology and reference the correct statutory provisions (such as the Contract Act, Interest Act, and CPC). They present the facts in a neutral, objective manner, removing the emotional language that often clutters personal letters. A professionally drafted notice clearly defines your cause of action and serves as a vital piece of evidence in court, preventing the borrower from claiming that they did not understand the nature of the demand.
                    </p>
                    <p>
                      While traditional law firms can charge heavy fees for drafting and sending notices, modern tech-driven legal portals like LegalRecovery have made this process accessible and affordable. We connect you with experienced advocates who review your transaction records and WhatsApp logs to draft a professional legal notice for a flat, transparent fee. This provides you with the full strategic power of a professional advocate notice at a fraction of the cost, maximizing your chances of an out-of-court settlement.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="proving-friendly-loan-evidence-checklist" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Evidentiary Core: Building a Case Without a Formal Written Agreement
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      A major hurdle in recovering friendly loans is the lack of a formal, signed loan agreement. Many lenders believe that without a written contract, they have no legal remedy. However, Indian courts are highly practical and recognize that personal loans are often given in good faith. Even in the absence of a written contract, you can build a strong, court-admissible case by compiling a robust <strong>evidentiary file</strong> consisting of bank statements, electronic communications, and other corroborative proofs.
                    </p>
                    <p>
                      The core of your evidence is the <strong>financial transaction trail</strong>. Bank statements showing the transfer of money directly from your account to the friend's account (via UPI, NEFT, IMPS, or cheque) provide irrefutable proof that they received the funds. If the money was transferred via cheque, obtain a copy of the cleared cheque from your bank. If the loan was given in cash, it is more difficult to prove, but you can present bank withdrawal slips showing you withdrew the exact amount on that day, supported by witness statements or subsequent acknowledgments from the borrower.
                    </p>
                    <p>
                      The second crucial piece of evidence is <strong>electronic acknowledgment</strong>. Under Indian law, WhatsApp chats, emails, SMS, and call recordings where the borrower acknowledges the loan or promises to repay are admissible as evidence. You must preserve these records carefully. Do not delete the chats or change phones. Take screenshots showing:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        The borrower requesting the loan and stating the reason.
                      </li>
                      <li>
                        Their acknowledgment of receiving the money (e.g., &quot;Thanks, received the ₹50,000&quot;).
                      </li>
                      <li>
                        Subsequent promises to repay (e.g., &quot;I will return it next month,&quot; &quot;Please give me 10 more days&quot;).
                      </li>
                    </ul>
                    <p>
                      Lenders must also comply with the <strong>Limitation Act, 1963</strong>. The limitation period for filing a civil recovery suit is exactly <strong>three (3) years</strong> from the date the loan became due or was defaulted upon. However, under Section 18 of the Limitation Act, if the borrower makes a written acknowledgment of the debt (including via a WhatsApp message or email) before the 3-year period expires, a fresh limitation period of three years begins from the date of that acknowledgment. Similarly, any partial repayment made by the borrower resets the limitation clock, extending your window to take legal action.
                    </p>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="electronic-evidence-bsa-certification" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Digital Notices and BSA Compliance: Electronic Evidence under BNS/BSA 2023
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      In today's digital age, a significant portion of evidence in personal loan disputes consists of electronic records—primarily WhatsApp chats, emails, and digital bank receipts. Additionally, lenders often serve their legal notices digitally via email or WhatsApp to ensure immediate delivery. While Indian law fully recognizes digital notices and electronic evidence under the Information Technology Act, 2000, presenting these in court requires strict adherence to statutory rules to prevent the evidence from being declared inadmissible.
                    </p>
                    <p>
                      Under the new <strong>Bharatiya Sakshya Adhiniyam (BSA), 2023</strong> (which replaced the Indian Evidence Act, 1872), any electronic record presented as secondary evidence in court must be accompanied by a signed <strong>Section 63 BSA Certificate</strong> (formerly Section 65B of the Evidence Act). Without this certificate, the court will refuse to look at your WhatsApp screenshots or printed emails, regardless of how clear they are.
                    </p>
                    <p>
                      The Section 63 BSA Certificate is a formal declaration that must be signed by the person presenting the electronic record. It must confirm:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        The make, model, and operating system of the device (computer/smartphone) used to generate the printout or screenshot.
                      </li>
                      <li>
                        That the device was operating properly and was in your lawful control during the relevant period.
                      </li>
                      <li>
                        That the electronic data was not tampered with, accompanied by the unique cryptographic <strong>SHA-256 hash values</strong> of the screenshot files or PDF logs.
                      </li>
                    </ul>
                    <p>
                      At LegalRecovery, we recognize the critical importance of digital compliance. When we send a legal notice on your behalf, we serve it physically via Speed Post and simultaneously dispatch a digital copy via WhatsApp and email. Our system automatically tracks the delivery status, records the read receipts, and generates a pre-certified, legally compliant Section 63 BSA Certificate. This provides you with an airtight, court-proof record of service and evidence, saving you from complex technical compliance hurdles later.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                      <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider text-[#DC2626]">
                        Digital Evidence Compliance Checklist
                      </h4>
                      <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                        <li>
                          <strong>Original Device Preservation:</strong> Keep the original phone and SIM card where the WhatsApp messages or emails are stored. Do not format the device.
                        </li>
                        <li>
                          <strong>Cryptographic Hashes:</strong> Generate SHA-256 hash values for all screenshot files to prove they have not been edited or manipulated.
                        </li>
                        <li>
                          <strong>Hardware Specifications:</strong> Document the IMEI, serial number, and software version of the phone used to capture the screenshots.
                        </li>
                        <li>
                          <strong>Section 63 BSA Certificate:</strong> Draft and sign the mandatory statutory declaration certifying the integrity of the electronic records.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="service-of-notice-and-deemed-delivery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Proof of Physical Service: Speed Post, Registered Post, and Deemed Service Rules
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      To initiate successful litigation, a lender must prove to the court's satisfaction that the borrower actually received the legal notice. If a borrower can claim in court that they were never served, the judge will likely adjourn the matter and direct you to reserve the notice, resulting in months of delay. Therefore, establishing an undeniable <strong>Proof of Service</strong> is a critical requirement of the recovery process.
                    </p>
                    <p>
                      The gold standard for physical service in India is dispatching the notice via <strong>Registered Post with Acknowledgement Due (RPAD) or Speed Post</strong> through the Government Post Office. Avoid private couriers, as courts often refuse to accept courier slips as conclusive proof of service. When the notice is sent via Speed Post, you must preserve the original booking receipt containing the unique tracking ID. Once the post office delivers the notice, download and print the tracking report from the official India Post portal, which clearly logs &quot;Item Delivered&quot; along with the date and time.
                    </p>
                    <p>
                      What happens if the defaulting friend refuses to accept the postman's delivery, or deliberately keeps their door locked? Lenders need not worry. Under <strong>Section 27 of the General Clauses Act, 1897</strong>, and Section 114 of the Indian Evidence Act, the law recognizes the principle of <strong>Deemed Service</strong>. If a notice is addressed correctly, pre-paid, and sent via registered post, it is legally deemed as served once the post office attempts delivery.
                    </p>
                    <p>
                      If the postman returns the envelope to you marked as &quot;Refused,&quot; &quot;Unclaimed,&quot; or &quot;Door Locked,&quot; do not open the envelope. Keep the sealed envelope in your possession. In court, this sealed envelope acts as conclusive proof that you attempted service, and the borrower cannot claim they were unaware of the notice. This deemed service rule prevents the borrower from stalling the legal process by simply avoiding the postman.
                    </p>
                  </div>
                </section>

                {/* Section 7 */}
                <section id="civil-recovery-order-37-suits" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Civil Litigation Paths: Filing Summary Suits and Regular Recovery Suits
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      If the 15-day notice period expires and the borrower ignores the notice or refuses to pay, you must proceed to the civil court to recover your money. Depending on the nature of your transaction records and written evidence, you have two primary civil litigation pathways: filing a <strong>Summary Suit under Order XXXVII (Order 37) of the Code of Civil Procedure, 1908</strong>, or initiating a <strong>Regular Civil Suit for Money Recovery</strong>.
                    </p>
                    <p>
                      A Summary Suit under Order 37 CPC is a highly effective, fast-track recovery procedure. Unlike regular civil suits that can drag on for years, a summary suit is designed to resolve clear-cut debt claims quickly. However, to file a summary suit, your claim must be based on a written contract, a promissory note, a hundi, a cheque, or a <strong>written acknowledgement of debt</strong>. A clear WhatsApp chat where the borrower admits to borrowing a specific sum (e.g., &quot;I owe you ₹1.5 Lakhs and will pay it by Friday&quot;) can satisfy this written requirement when accompanied by a bank statement and a Section 63 BSA certificate.
                    </p>
                    <p>
                      In an Order 37 summary suit, the borrower does not have an automatic right to contest the case. Upon receiving the summons, they must enter an appearance within <strong>10 days</strong>. If they fail to do so, the court immediately passes a decree in favor of the lender. If they appear, they must apply for &quot;leave to defend&quot; and satisfy the judge that they have a genuine, triable defense. If their defense is merely a sham or a delaying tactic (such as denying they took the money despite clear bank records), the court will deny leave and pass a recovery decree immediately.
                    </p>
                    <p>
                      If your loan was entirely oral and lacks any written or digital acknowledgment, or if the transaction is heavily disputed, you must file a <strong>Regular Civil Recovery Suit</strong>. In a regular suit, both parties present pleadings, lead oral evidence, and cross-examine witnesses. While regular suits take longer to resolve, they allow you to prove your loan through circumstantial evidence, witness testimonies, and bank receipts. Lenders must pay ad valorem court fees (calculated as a percentage of the claim value, varying from 1% to 10% by state) to file civil suits, but the court has the statutory power to award these costs to the successful lender.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse border border-slate-200">
                        <thead>
                          <tr className="bg-slate-50 text-slate-900 font-extrabold text-xs uppercase tracking-wider">
                            <th className="border border-slate-200 p-3">Statutory Feature</th>
                            <th className="border border-slate-200 p-3">Summary Suit (Order 37 CPC)</th>
                            <th className="border border-slate-200 p-3">Regular Civil Recovery Suit</th>
                          </tr>
                        </thead>
                        <tbody className="text-xs sm:text-sm text-slate-650 font-medium">
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Right to Defend</td>
                            <td className="border border-slate-200 p-3 text-[#DC2626] font-bold">No automatic right (Must apply for leave to defend within 10 days)</td>
                            <td className="border border-slate-200 p-3">Automatic right to file a written statement and contest the case</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Average Timeline</td>
                            <td className="border border-slate-200 p-3 text-emerald-700 font-bold">Fast-track (usually decided in 6 to 12 months)</td>
                            <td className="border border-slate-200 p-3">Standard trial procedure (typically takes 2 to 4 years)</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Evidence Required</td>
                            <td className="border border-slate-200 p-3 text-emerald-700 font-bold">Requires written contract, promissory note, cheque, or written debt acknowledgment</td>
                            <td className="border border-slate-200 p-3">Accepts oral contracts, circumstantial evidence, and witness statements</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Section 8 */}
                <section id="criminal-remedies-cheating-breach-of-trust" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Criminal Recourse Options: Cheque Bounce Complaints and Criminal Breach of Trust
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      In addition to civil recovery suits, the law provides lenders with powerful criminal remedies to recover friendly loans, particularly when the borrower has acted dishonestly or issued a bad cheque. Criminal proceedings carry the threat of imprisonment, creating a powerful incentive for the defaulting friend to settle their debts quickly to avoid a criminal record.
                    </p>
                    <p>
                      The most common criminal remedy is filing a complaint under <strong>Section 138 of the Negotiable Instruments (NI) Act, 1881</strong> for a <strong>cheque bounce</strong>. If your friend issued a cheque to repay the loan, and the cheque was returned unpaid by the bank due to &quot;Insufficient Funds&quot; or &quot;Account Closed,&quot; they commit a criminal offense. To pursue this:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        You must send a formal statutory legal notice under Section 138 within <strong>30 days</strong> of receiving the cheque return memo from your bank.
                      </li>
                      <li>
                        The notice must demand repayment of the cheque amount within <strong>15 days</strong> of receiving the notice.
                      </li>
                      <li>
                        If they fail to pay within 15 days, you must file a criminal complaint before the Judicial Magistrate Court within <strong>30 days</strong> of the default.
                      </li>
                    </ul>
                    <p>
                      Under Section 138, the offense is punishable by up to <strong>two years of imprisonment</strong> or a fine of up to <strong>double the cheque amount</strong>, or both. Because of the strict timelines and severe penalties, Section 138 cases have a high rate of recovery.
                    </p>
                    <p>
                      If no cheque was issued, you can still file a criminal complaint if there was clear dishonest intent. Under the <strong>Bharatiya Nyaya Sanhita (BNS), 2023</strong>, you can file a case for <strong>Cheating under Section 318</strong> (formerly Section 420 of the IPC) or <strong>Criminal Breach of Trust under Section 316</strong> (formerly Section 406 of the IPC). For cheating, you must show that the borrower had a dishonest intention to defraud you from the very beginning—such as providing fake documents, using a false name, or blocking you and disappearing immediately after taking the money. You can file a police complaint or approach the Magistrate under Section 156(3) or Section 200 of the CrPC (now BNSS, 2023) to initiate criminal prosecution.
                    </p>
                    <p>
                      Using a tech-enabled platform like <strong>LegalRecovery</strong> streamlines this process. We help you draft statutory notices, track delivery, coordinate with experienced advocates, and build a legally sound evidence file, saving you from administrative delays and ensuring your personal loan recovery is resolved successfully.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Defaulting on a cheque issued for a loan repayment is a criminal offense under Section 138 of the NI Act. Lenders must serve a statutory notice within 30 days of the bounce. For intentional fraud, criminal complaints for Cheating (Section 318 BNS) can be filed alongside civil suits to secure a fast recovery.&quot;
                    </div>
                  </div>
                </section>

                {/* Client Reviews Section */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Client Reviews
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Outstanding service! I lent ₹2.5 Lakhs to a childhood friend via bank transfer but had no written agreement. When he stopped responding, I used this platform. They drafted an advocate notice citing the Interest Act, and my friend paid back in 10 days.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Vikram Sethi (Gurugram)</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;I was very hesitant to send a notice to a friend, but they were ignoring all my WhatsApp messages. The legal notice drafted by LegalRecovery was professional yet firm. The postal receipt and digital copy delivered via WhatsApp forced him to negotiate a payment schedule.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Sneha Sen (Kolkata)</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Excellent platform. The advocate notice cited proper CPC Order 37 guidelines. The Section 63 BSA certificate provided for my WhatsApp chats was extremely useful. Highly recommended for friendly loan recoveries.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Abhishek Roy (Mumbai)</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;My friend had borrowed money and then blocked me. I filed details online, and the advocate sent a notice to his permanent address. His family got involved, and they returned the principal amount immediately. Transparent pricing of ₹999 is amazing.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Meera Patel (Ahmedabad)</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Simple, fast, and completely online. I got my speed post tracking details on my email. The legal notice was drafted with precision and included all bank transaction logs. Excellent follow-up support.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Rahul Sharma (Delhi)</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;My friend gave me a cheque that bounced. LegalRecovery drafted the statutory Section 138 NI Act notice within 24 hours. The borrower paid back immediately to avoid a criminal case. Highly professional legal team!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Kriti Deshmukh (Pune)</h4>
                    </div>
                  </div>
                </section>

                {/* FAQs Accordion */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block font-sans">
                    FAQs
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                      const faqId = `faq-${idx}`;
                      const isExpanded = expandedFaqs.includes(faqId);
                      return (
                        <div 
                          key={idx} 
                          className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-slate-350"
                        >
                          <button
                            onClick={() => toggleFaq(idx)}
                            className="flex justify-between items-center w-full text-left p-4 font-bold text-sm text-slate-900 hover:bg-slate-50/50 focus:outline-none transition-colors cursor-pointer"
                          >
                            <span>{faq.question}</span>
                            <span className={`transform transition-transform duration-200 shrink-0 ml-3 text-slate-400 ${isExpanded ? 'rotate-180' : ''}`}>
                              ▼
                            </span>
                          </button>
                          {isExpanded && (
                            <div className="px-4 pb-4 pt-0 text-xs sm:text-sm text-slate-650 leading-relaxed pl-6 border-t border-slate-100 pt-3 bg-[#F8F9FB]/40 text-left">
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

            {/* Right Column Sidebar */}
            <div className="space-y-8 sticky top-24">

              {/* Call Support Card */}
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Recover Friendly Loan</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Serve a formal advocate-backed legal notice to a friend who is refusing to repay your personal loan.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
                  Start Recovery Now
                </button>
              </div>
            </div>

          </div>
        </div>
        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      </div>
    </>
  );
}
