'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import {
  Check,
  Shield,
  IndianRupee,
  AlertCircle,
  Clock,
  Timer,
  Users,
  CheckCircle,
  Lightbulb,
  Upload,
  FileSearch,
  Send,
  Handshake,
  Building2,
  AlertTriangle,
  Receipt,
  FileText,
  Key
} from 'lucide-react';

// FAQs Interface
interface FAQ {
  id: string;
  question: string;
  answer: string;
}

// Review Interface
interface Review {
  id: string;
  name: string;
  rating: number;
  review: string;
}

export default function FriendRecoveryClient() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const toggleFaq = (faqId: string) => {
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const handleShare = (platform: string) => {
    const title = "Recover Money from a Friend Legally in India | LegalRecovery";
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
        break;
      default:
        return;
    }
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  // Table of Contents sections
  const tocSections = useMemo(() => [
    { id: "service-overview", title: "1. Service Overview" },
    { id: "coverage-details", title: "2. Personal Debt Types" },
    { id: "notice-strategy", title: "3. 3+1 Notice Strategy" },
    { id: "legal-framework", title: "4. The Indian Statutory Shield" },
    { id: "written-vs-oral", title: "5. Written vs. Oral Debt" },
    { id: "service-pricing", title: "6. Transparent Flat Pricing" },
    { id: "documentation-needed", title: "7. Evidentiary Checklist" },
    { id: "faqs", title: "8. Frequently Asked Questions" },
    { id: "reviews", title: "9. Client Testimonials" }
  ], []);

  // FAQs List (10 comprehensive, detailed Q&As tailored to personal debts)
  const faqs: FAQ[] = useMemo(() => [
    {
      id: "faq-1",
      question: "What is the legal limitation period to file a civil recovery suit for a personal loan in India?",
      answer: "Under Article 19 of the Limitation Act, 1963, the limitation period to file a civil suit for the recovery of money lent is three (3) years. This period starts counting from the date on which the loan was given, or, if a specific repayment date was agreed upon, from the date of default. If the borrower issues a written acknowledgment of the debt (such as a text, email, or fresh promise to pay) before the three years expire, the limitation period resets for another three years from the date of that acknowledgment under Section 18 of the Limitation Act."
    },
    {
      id: "faq-2",
      question: "Can I legally recover money from a friend if we had no written agreement or contract?",
      answer: "Yes, absolutely. Under Section 10 of the Indian Contract Act, 1872, oral agreements are fully valid and legally binding, provided they fulfill the essential conditions of a contract (offer, acceptance, free consent, and lawful consideration). However, the primary challenge in oral agreements is proving the existence of the loan in court. You can successfully establish the transaction using corroborative evidence such as bank statements or UPI transfer records showing the outflow, WhatsApp or SMS chats where the friend acknowledges the debt, and audio recordings or witness statements."
    },
    {
      id: "faq-3",
      question: "What is a Promissory Note, and is it valid if written on plain paper?",
      answer: "A Promissory Note is a formal, written, unconditional promise by one party (the maker) to pay a specific sum of money to another (the payee) either on demand or at a fixed future date. It is defined under Section 4 of the Negotiable Instruments Act, 1881. A promissory note is legally valid even if written on plain paper, provided it is properly signed, contains clear terms of unconditional promise, and carries the correct value of revenue stamps as mandated by the Indian Stamp Act, 1899 for your state. Unstamped or under-stamped promissory notes are generally inadmissible in evidence under Section 35 of the Indian Stamp Act until the penalty is paid."
    },
    {
      id: "faq-4",
      question: "Is refusing to repay a personal loan a criminal offense in India?",
      answer: "A simple failure to repay a loan is considered a civil dispute (breach of contract). However, it can become a criminal offense under the Indian Penal Code (IPC) under specific conditions: 1) Criminal Breach of Trust (Section 405/406 IPC) if you entrusted funds to them for a specific purpose and they misappropriated it for personal gain, and 2) Cheating (Section 415/420 IPC) if you can prove they had a fraudulent or dishonest intention NOT to repay the money right from the very moment they asked for the loan. Our legal notices systematically outline these criminal implications to build strong pressure."
    },
    {
      id: "faq-5",
      question: "How does a Summary Suit under Order 37 CPC speed up personal money recovery?",
      answer: "An ordinary civil recovery suit can take several years in India. In contrast, a Summary Suit filed under Order 37 of the Code of Civil Procedure, 1908 is a fast-track procedure. It applies strictly to written contracts, cheques, or promissory notes. Under this procedure, the defendant (your friend) does not have an automatic right to defend the suit. Upon being served, they must enter an appearance within 10 days, and subsequently apply for 'leave to defend'. The court will only grant leave if they present a substantial, non-frivolous defense. If they fail to appear or are denied leave, the court immediately decrees the suit in your favor."
    },
    {
      id: "faq-6",
      question: "What happens if a friend issued a cheque for repayment and it bounced?",
      answer: "A bounced cheque is a serious criminal offense under Section 138 of the Negotiable Instruments Act, 1881. If a cheque is dishonored due to 'insufficient funds' or 'stop payment', you must send a formal legal demand notice to the borrower within thirty (30) days of receiving the memo from the bank. If they fail to pay the amount within fifteen (15) days of receiving that notice, you can file a criminal case in the Magistrate's Court within thirty (30) days. The offense is punishable by up to two years of imprisonment, a fine of up to double the cheque amount, or both."
    },
    {
      id: "faq-7",
      question: "Can I recover a friendly loan if the transaction was done in cash rather than bank transfer?",
      answer: "Yes, you can recover it, but it is highly challenging due to the lack of an electronic audit trail. You must prove the transaction through signed cash receipts, witness testimonies, or subsequent written acknowledgments (e.g. WhatsApp messages where they say 'I received the ₹50,000 cash and will return it next month'). Additionally, you should note Section 269SS of the Income Tax Act, 1961, which prohibits accepting cash loans of ₹20,000 or more. While violating this section attracts severe tax penalties for the borrower, it does NOT invalidate the underlying debt, and you are still legally entitled to recover the principal amount."
    },
    {
      id: "faq-8",
      question: "Can I legally claim interest on a personal loan given to a friend?",
      answer: "Yes. If you have a written loan agreement or promissory note specifying an interest rate, you are contractually entitled to claim it. If there was no written agreement, or interest was not mentioned, you can still claim interest by sending a formal demand notice stating that interest will accrue if the debt is not cleared by a certain date (under the Interest Act, 1978). Furthermore, under Section 34 of the CPC, courts have the discretion to award reasonable interest from the date of filing the suit to the date of the actual decree (pendente lite interest) and future interest, typically ranging from 6% to 9% per annum."
    },
    {
      id: "faq-9",
      question: "Does a Splitwise balance or UPI screenshot hold any weight in a legal dispute?",
      answer: "Yes, significant weight. Screenshots of Splitwise balances, group expense logs, and UPI transfer receipts are recognized as secondary electronic evidence in India under Section 65B of the Indian Evidence Act, 1872. They serve as reliable corroborative proof of the financial transaction and the debt acknowledgment. When we draft your legal notice, our advocate panel explicitly cites these electronic records to establish a clear debt trail, making it extremely difficult for the borrower to deny receiving the funds or agreeing to the split."
    },
    {
      id: "faq-10",
      question: "What should I do if a friend has blocked me, moved, or is completely ignoring my calls?",
      answer: "If the borrower has cut off communication, you should: 1) Extract all bank statements showing the transfers and take backups of all chats and emails, 2) Send our advocate-backed 3-stage legal notices served to their last known physical residential address, their current workplace/office address, and all active email IDs, and 3) If they remain unresponsive, file a police complaint for cheating (Section 420 IPC) or initiate a summary civil suit. Serving legal notices to their workplace often yields immediate responses as companies do not want police or court summons served at their offices."
    }
  ], []);

  // Client Reviews List (Tailored to personal debt recovery)
  const reviews: Review[] = useMemo(() => [
    {
      id: "rev-1",
      name: "Vivek Malhotra (Product Manager, Bangalore)",
      rating: 5,
      review: "I lent ₹1.5 Lakhs to a close college friend for a family medical emergency. After a year, he blocked me on WhatsApp and ignored my calls. I didn't want a long court case, so I tried LegalRecovery. Their advocate sent a Stage 1 demand notice to his residential and workplace email. Within 5 days of receiving the notice, his father contacted me, apologized, and transferred the entire principal amount. Highly professional and effective!"
    },
    {
      id: "rev-2",
      name: "Divya Sen (Graphic Designer, Mumbai)",
      rating: 5,
      review: "We went on a group trip and I paid ₹48,000 for hotels and car rentals. My friends agreed to settle via Splitwise but kept delaying for months, eventually ignoring my reminders. LegalRecovery structured my bank statements and Splitwise screenshots into a powerful legal demand notice. Facing formal escalation, the group immediately gathered and cleared my dues. Zero court visits, zero stress!"
    },
    {
      id: "rev-3",
      name: "Anish Mehta (Business Analyst, Gurgaon)",
      rating: 5,
      review: "I gave a cash advance of ₹3.2 Lakhs to a business acquaintance and had him sign a stamped promissory note. When he defaulted, he claimed oral agreements that didn't exist. The Team at LegalRecovery drafted a sharp, statutory notice citing Negotiable Instruments Act and Order 37 CPC clauses. Facing a summary suit threat, he agreed to a structured settlement and paid me back in 3 weekly installments."
    },
    {
      id: "rev-4",
      name: "Priyesh Shah (HR Consultant, Pune)",
      rating: 5,
      review: "I had a post-dated cheque for ₹95,000 from a relative for a personal loan, which bounced due to 'insufficient funds'. He kept making excuses. LegalRecovery launched their NI Act Section 138 notice pipeline with precise timelines. The moment the formal advocate notice warning of criminal prosecution was served, his lawyer reached out and settled the entire amount. Exceptional speed!"
    }
  ], []);

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Friend / Personal Money Recovery", href: "/services/recovery-of-money-from-a-friend" },
  ];

  // Schema structured JSON-LD data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.legalrecovery.in/services/recovery-of-money-from-a-friend#article",
        "isPartOf": {
          "@id": "https://www.legalrecovery.in/services/recovery-of-money-from-a-friend"
        },
        "headline": "Recover Money Lent to a Friend Legally in India | Personal Debt Guide",
        "description": "Exhaustive legal guide and money recovery service for personal loans, cash advances, group expenses, and promissory notes in India. Using CPC Order 37, NI Act Section 138, and IPC criminal provisions.",
        "image": "https://www.legalrecovery.in/blog_money_recovery.png",
        "datePublished": "2026-05-27T00:00:00Z",
        "dateModified": "2026-05-27T00:00:00Z",
        "author": {
          "@type": "Organization",
          "name": "Team LegalRecovery",
          "url": "https://www.legalrecovery.in/about"
        },
        "publisher": {
          "@type": "Organization",
          "name": "LegalRecovery",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.legalrecovery.in/logo.png"
          }
        },
        "mainEntityOfPage": "https://www.legalrecovery.in/services/recovery-of-money-from-a-friend"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.legalrecovery.in/services/recovery-of-money-from-a-friend#faq",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.legalrecovery.in/services/recovery-of-money-from-a-friend#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.legalrecovery.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.legalrecovery.in/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Friend / Personal Money Recovery",
            "item": "https://www.legalrecovery.in/services/recovery-of-money-from-a-friend"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://www.legalrecovery.in/services/recovery-of-money-from-a-friend#service",
        "name": "Friend / Personal Money Recovery Service",
        "description": "Professional money recovery for personal loans, cash advances, Splitwise balances, group expenses, and promissory notes. Utilizing 3 authoritative legal notices and 1 police complaint draft.",
        "brand": {
          "@type": "Organization",
          "name": "LegalRecovery",
          "url": "https://www.legalrecovery.in"
        },
        "areaServed": "IN",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "48"
        },
        "review": reviews.map(rev => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": rev.name
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": String(rev.rating),
            "bestRating": "5"
          },
          "reviewBody": rev.review
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#111827] font-sans antialiased">
      {/* Dynamic JSON-LD injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Ambient Lights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] red-radial-glow -z-10 pointer-events-none rounded-full blur-[100px] opacity-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] red-radial-glow -z-10 pointer-events-none rounded-full blur-[80px] opacity-25" />

      {/* ================= HERO SECTION ================= */}
      <div className="pt-32 pb-12 md:pb-24 px-4 sm:px-6 md:px-16 max-w-8xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-12">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-[13.5px] font-bold text-[#DC2626] uppercase tracking-[0.02em] mb-4 select-text">
              Professional Personal & Friend Money Recovery
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-[50px] font-black tracking-tight text-[#111827] leading-[1.1] mb-6 select-text">
              Money Stuck with a Friend? <br />
              Recover Your Loan <br />
              <span className="text-[#DC2626]">Legally.</span>
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#4B5563] font-medium leading-[1.6] mb-6 max-w-xl select-text">
              Reclaim unpaid personal loans, group expenses, Splitwise balances, cash advances, and stamped promissory notes in India. We launch 3 highly authoritative legal notices and provide 1 formal police complaint draft week-by-week.
            </p>

            {/* High-Trust Tagline Banner */}
            <div className="flex items-center gap-2 bg-[#E6F4EA] text-[#137333] border border-[#A3E2AB]/40 rounded-lg px-3.5 py-2 mb-8 select-text">
              <Check className="w-4 h-4 text-[#137333] stroke-[3.5] shrink-0" />
              <span className="text-[12px] sm:text-[13px] font-extrabold tracking-tight">
                No Court Visits. No Stress. We handle it for you.
              </span>
            </div>

            {/* CTA Anchor button linking to the contact page */}
            <div className="w-full sm:w-auto mb-6 select-none">
              <Link
                href="/contact"
                className="inline-block w-full sm:w-auto text-center px-8 py-4 text-[14px] sm:text-[15px] font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-[12px] shadow-[0_4px_16px_rgba(220,38,38,0.15)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Start My Recovery - ₹999
              </Link>
            </div>
          </div>

          {/* Right Image/Dashboard Column */}
          <div className="lg:col-span-6 select-none w-full">
            <div className="w-full bg-[#FFFFFF] rounded-3xl border border-[#E5E7EB] shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-4 sm:p-6 md:p-8 flex flex-col gap-6 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full blur-xl pointer-events-none" />
              
              {/* Active Tab visual header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]/60">
                <div className="flex flex-col">
                  <span className="text-[12px] font-black text-[#111827]">Personal Recovery Dashboard</span>
                  <span className="text-[9.5px] text-[#9CA3AF] font-bold mt-0.5">Disputed Case: REC-PERS-2026</span>
                </div>
                <span className="px-2.5 py-1 text-[9.5px] font-black text-[#03543F] bg-[#DEF7EC] border border-emerald-200/50 rounded-full uppercase tracking-wider">
                  Active Notice Campaign
                </span>
              </div>

              {/* Recovery Status Tracker */}
              <div className="bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB] p-4 flex flex-col gap-4 relative">
                
                {/* Horizontal status timeline */}
                <div className="relative pt-3 pb-2 flex items-center justify-between">
                  {/* Green progress bar */}
                  <div className="absolute left-3.5 right-3.5 top-[23px] h-[2.5px] bg-[#E5E7EB]">
                    <div className="w-[78%] h-full bg-[#10B981]"></div>
                  </div>

                  {/* Nodes */}
                  <div className="flex flex-col items-center gap-1.5 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-[9px] font-bold text-[#111827]">Submitted</span>
                  </div>

                  <div className="flex flex-col items-center gap-1.5 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-[9px] font-bold text-[#111827]">Notice 1 Sent</span>
                  </div>

                  <div className="flex flex-col items-center gap-1.5 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-[9px] font-bold text-[#111827]">Notice 2 Sent</span>
                  </div>

                  <div className="flex flex-col items-center gap-1.5 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-white border-2 border-[#9CA3AF] text-[#9CA3AF] flex items-center justify-center shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                    </div>
                    <span className="text-[9px] font-bold text-[#4B5563]">Resolution</span>
                  </div>
                </div>

              </div>

              {/* Grid of details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-4 flex flex-col justify-center">
                  <span className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider">Unpaid Loan Amount</span>
                  <span className="text-xl font-black text-[#111827] mt-1">₹2,50,000</span>
                </div>
                <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-4 flex flex-col justify-center">
                  <span className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider">Legal Strategy</span>
                  <span className="text-[12.5px] font-bold text-[#DC2626] mt-1">3 Notice + Police Complaint</span>
                </div>
              </div>

              {/* Trust Badge overlay */}
              <div className="flex items-center gap-3 bg-red-50/50 border border-red-200/50 p-4 rounded-xl">
                <Shield className="w-5 h-5 text-[#DC2626] shrink-0" />
                <p className="text-[11.5px] text-[#4B5563] font-semibold leading-relaxed">
                  Our system targets the defaulter's active personal and professional emails, LinkedIn, and physical residential addresses for maximum pressure.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* ================= BREADCRUMBS CONTAINER ================= */}
        <div className="bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.01)] inline-block mb-12">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* ================= SPLIT PAGE LAYOUT (TOC, Main Content, Sidebar) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_300px] gap-8 items-start relative">
          
          {/* Left Sidebar - Table of Contents (Sticky on Desktop) */}
          <div className="hidden lg:block" style={{ position: 'sticky', top: '96px', alignSelf: 'start' }}>
            <TableOfContents sections={tocSections} orientation="vertical" />
          </div>

          {/* Main Content Area */}
          <div className="min-w-0">
            {/* TOC (Mobile View) */}
            <div className="lg:hidden mb-8">
              <TableOfContents sections={tocSections} />
            </div>

            <div className="bg-white p-6 md:p-12 rounded-3xl border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.015)] space-y-12">
              
              {/* Product/Service Copywritten Content */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed tiptap-content">
                
                {/* 1. Service Overview */}
                <h2 id="service-overview">1. Professional Personal & Friend Money Recovery Service</h2>
                <p>
                  Lending money to a friend, family member, or close acquaintance is often done in good faith, driven by empathy and mutual trust. However, when the borrower defaults, avoids your messages, blocks your number, or repeatedly breaks repayment promises, it creates a unique and painful form of stress known as <strong className="font-extrabold text-[#111827]">social or friendship asymmetry</strong>. The lender is left feeling betrayed, hesitant to take harsh action, yet deeply concerned about their hard-earned money. 
                </p>
                <p>
                  At LegalRecovery, we believe that <strong className="font-extrabold text-[#111827]">personal relationships should not be used as shields for financial defaults</strong>. Friendly loans, cash advances, Splitwise balances, and stamped promissory notes are fully enforceable legal debts under Indian statutory frameworks. Debtors frequently rely on the assumption that you will quietly let the money go because hiring a traditional lawyer, attending court proceedings, and dealing with legal complexities are too expensive and time-consuming.
                </p>
                <p>
                  Our <strong className="font-extrabold text-[#111827]">Friend and Personal Money Recovery Service</strong> is a professional, technology-driven legal campaign designed to break this deadlock. We have restructured the entire recovery lifecycle into an aggressive, systematic, and attorney-verified pre-litigation notice pipeline. We do not demand court visits, and we take <strong className="font-extrabold text-[#111827]">absolutely zero commissions</strong> on your recovered money. By combining formal advocate-backed demand notices with progressive digital tracking and a highly structured criminal complaint draft, we force the borrower to take your claim seriously and enter conciliation immediately.
                </p>
                <blockquote>
                  <strong>Our Service Promise:</strong> We provide a complete, progressive legal notices campaign and a customized police complaint draft prepared by expert civil and criminal lawyers, for a single flat fee of <strong>₹999</strong>. No hidden charges, no commissions, and complete confidentiality.
                </blockquote>
                <p>
                  You do not have to jeopardize your peace of mind or let your hard-earned money slide. Let our platform systematically escalate pressure on the defaulting borrower, delivering formal demand notices directly to their personal inbox, professional mailbox, LinkedIn, and physical home address to achieve a swift resolution.
                </p>

                {/* 2. Personal Debt Types */}
                <h2 id="coverage-details">2. Types of Personal Debts We Recover</h2>
                <p>
                  Personal debts take many forms. Whether your agreement was heavily documented on stamp paper or informal over a cup of coffee, our advocate panel compiles and details every piece of corroborative evidence to build an airtight demand.
                </p>
                
                <h3 id="personal-loans">A. Unsecured Personal Loans & Friendly Advances</h3>
                <p>
                  These are direct financial loans transferred to a friend, colleague, or relative in good faith, often via online banking (IMPS/NEFT/RTGS) or UPI transfers. Even without a formal contract, these outflows constitute an enforceable debt. We track transaction trails and draft authoritative notices demand the return of the principal plus reasonable interest.
                </p>

                <h3 id="group-expenses">B. Unsettled Group Expenses & Shared Balances</h3>
                <p>
                  Roommate rent splits, group vacation bookings, restaurant bills, or concert tickets paid on behalf of others often get tracked on apps like Splitwise. When a group member refuses to settle their share, they are committing a breach of an implied contract. We compile your UPI transaction records and shared digital ledgers into a binding legal claim.
                </p>

                <h3 id="cash-advances">C. Emergency Cash Advances & Medical Outlays</h3>
                <p>
                  Lending cash to someone during emergencies (e.g. hospitalization, urgent travel, bail, or security deposit advances) is extremely common. Even if the transfer was done in cash, subsequent WhatsApp chats, SMS acknowledgments, or verbal agreements witnessed by others are leveraged by our legal team to establish the liability.
                </p>

                <h3 id="promissory-notes">D. Stamped Promissory Notes & Loan Agreements</h3>
                <p>
                  If you took the sensible step of having the borrower sign a Promissory Note (Section 4 NI Act) or a formal Loan Agreement on stamp paper, you possess highly authoritative primary evidence. We deploy fast-track civil summary suit warnings (Order 37 CPC) based on these negotiable instruments to demand immediate repayment.
                </p>

                {/* 3. 3+1 Notice Strategy */}
                <h2 id="notice-strategy">3. Our 3+1 Notice Strategy: Engineered for Maximum Pressure</h2>
                <p>
                  Borrowers who default on friendly loans are usually expert excuse-makers. They ignore gentle reminders because they know there are no immediate consequences. To break this cycle, LegalRecovery uses an aggressive, <strong className="font-extrabold text-[#111827]">4-stage progressive escalation campaign</strong> that builds compounding pressure week-by-week:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">1</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 1: Advocate Demand Notice</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      We launch a highly authoritative formal demand notice on a practicing advocate's letterhead. Served via digital channels (Email, WhatsApp) and physical registered post to their residence, it outlines the exact transaction details and gives a strict 15-day window to repay.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">2</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 2: Professional Escalation</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      If the debtor ignores Stage 1, we serve Notice 2. We deliver this not only to their residence but also to their official corporate/workplace email address and professional LinkedIn profiles. The threat of their employer and HR learning of their fraudulent debt default is a massive catalyst for swift resolution.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">3</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 3: Pre-Litigation Warning</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      We deliver a final warning package containing fully finalized drafts of a civil recovery suit (Order 37 CPC summary suit) and a draft criminal complaint. This demonstrates that we have finalized the legal groundwork to drag them to court, destroying any hope they had that you were bluffing.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-emerald-600 text-white flex items-center justify-center rounded-full font-black text-xs">+1</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Criminal Police Complaint Draft</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      Simultaneously, we provide you with a meticulously compiled criminal police complaint draft for <strong className="font-extrabold text-[#111827]">Criminal Breach of Trust (Section 406 IPC)</strong> and <strong className="font-extrabold text-[#111827]">Cheating (Section 420 IPC)</strong>. Filing this at their local police station is a devastating blow that often forces immediate cash settlements to avoid arrest or FIR registration.
                    </p>
                  </div>
                </div>
                <p>
                  By deploying this systematic, week-by-week campaign, we remove the borrower's ability to procrastinate. They quickly realize that continuing to withhold your funds will lead to professional ruin, family embarrassment, and potential criminal prosecution.
                </p>

                {/* 4. The Indian Statutory Shield */}
                <h2 id="legal-framework">4. The Indian Statutory Shield: Know Your Rights</h2>
                <p>
                  India's legal framework provides strong remedies for lenders, designed to protect individuals from fraudulent defaults. In our legal notices, our advocate panel leverages several critical acts and sections to create a bulletproof claim:
                </p>
                <ul>
                  <li><strong>The Indian Contract Act, 1872 (Section 10 & 25):</strong> Establishes that all agreements - whether written or oral - are legally valid contracts if made by the free consent of competent parties, for a lawful consideration. Even a WhatsApp agreement to return a loan is a contract.</li>
                  <li><strong>Code of Civil Procedure, 1908 (Order 37):</strong> Empower lenders to file <strong className="font-extrabold text-[#111827]">Summary Suits</strong> in civil courts. Unlike standard civil suits that drag on for years, summary suits do not allow the debtor to defend themselves unless they can satisfy the judge that they have a genuine, non-frivolous defense. If they fail, a decree is passed immediately.</li>
                  <li><strong>Negotiable Instruments Act, 1881 (Section 138):</strong> If the friend issued a cheque for repayment and it bounced, it constitutes a criminal offense. Serving a Section 138 notice within 30 days is mandatory and opens the door to immediate criminal prosecution, carry a prison sentence of up to 2 years.</li>
                  <li><strong>Indian Penal Code, 1860 (Section 405 & 406 - Criminal Breach of Trust):</strong> If a borrower takes money for a specific declared purpose (like a medical emergency or property booking) but deliberately uses it for something else (such as online betting or luxury spending), it constitutes a criminal breach of trust.</li>
                  <li><strong>Indian Penal Code, 1860 (Section 415 & 420 - Cheating):</strong> If you can establish that the borrower made false representations or had a dishonest intention to cheat you right from the day they requested the funds, they can be prosecuted for cheating, a non-bailable offense carrying up to 7 years in prison.</li>
                  <li><strong>The Interest Act, 1978 (Section 3):</strong> Allows the lender to charge interest on the outstanding debt from the date a formal written demand notice is served, even if interest was not originally agreed upon.</li>
                </ul>

                {/* 5. Written vs. Oral Debt Agreements */}
                <h2 id="written-vs-oral">5. Written vs. Oral Debt Agreements: A Comparative Analysis</h2>
                <p>
                  Many people assume that without a formal written contract, they have no legal standing to recover their money. This is an incorrect assumption. While written agreements are easier to present in court, oral debts can be proved with equivalent finality using electronic evidence:
                </p>
                
                <table>
                  <thead>
                    <tr>
                      <th>Parameters</th>
                      <th>Written Debt Agreements (Promissory Note / Loan Contract)</th>
                      <th>Oral Debt Agreements (WhatsApp Chats / UPI Transfers)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Primary Evidence</strong></td>
                      <td>Signed Promissory Note, Stamped Loan Agreement, Signed Cheques.</td>
                      <td>Bank statements, UPI transaction receipts, WhatsApp/SMS chats, audio records.</td>
                    </tr>
                    <tr>
                      <td><strong>Fast-Track Suit (Order 37 CPC)</strong></td>
                      <td>Highly Applicable. Summary suits can be filed directly based on the written document.</td>
                      <td>Requires an initial civil suit or establishing an implied written contract through clear electronic acknowledgments.</td>
                    </tr>
                    <tr>
                      <td><strong>Limitation Period</strong></td>
                      <td>3 Years from the repayment date specified in the agreement.</td>
                      <td>3 Years from the date the loan was transferred or when the default occurred.</td>
                    </tr>
                    <tr>
                      <td><strong>Admissibility in Court</strong></td>
                      <td>Admissible immediately. If unstamped, requires payment of stamp duty penalty under the Stamp Act.</td>
                      <td>Fully admissible under Section 65B of the Indian Evidence Act (electronic records certificate).</td>
                    </tr>
                    <tr>
                      <td><strong>Debtor's Denial Rate</strong></td>
                      <td>Extremely Low. Signature verification and stamp paper make denial nearly impossible.</td>
                      <td>Medium-High. Borrowers may claim the money was a gift, or deny the authenticity of the chats.</td>
                    </tr>
                    <tr>
                      <td><strong>Legal Notice Strategy</strong></td>
                      <td>Strict contractual enforcement demanding instant principal and interest.</td>
                      <td>Heavy reliance on extracting written admissions (digital baiting) and criminal cheating warnings.</td>
                    </tr>
                  </tbody>
                </table>
                
                <p>
                  Whether your dispute falls under a heavily stamped promissory note or an informal UPI transfer backed by WhatsApp chats, our advocate panel compiles the specific evidence to draft a highly customized, authoritative demand.
                </p>

                {/* 6. Transparent Flat Pricing */}
                <h2 id="service-pricing">6. Transparent Flat Pricing</h2>
                <p>
                  Traditional advocates charge thousands of rupees per consultation and demand additional percentages (commissions) on the recovered amount. We believe this is highly exploitative. 
                </p>
                <p>
                  LegalRecovery provides professional, attorney-verified personal money recovery campaigns for a single, flat fee of <strong className="font-extrabold text-[#111827]">₹999</strong>. We charge absolutely zero hidden fees and take zero commission on your recovered money.
                </p>

                {/* Pixel-perfect reproduction of the home page unified pricing container */}
                <div className="my-10 select-none">
                  <div className="bg-white rounded-[32px] border-2 border-[#E5E7EB] shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:shadow-[0_24px_60px_rgba(0,0,0,0.05)] text-left">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                      
                      {/* Left Block: Price and Scope details */}
                      <div className="lg:col-span-5 bg-gray-50/50 p-6 sm:p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E5E7EB]">
                        <div>
                          <span className="px-3 py-1 text-[11px] font-extrabold text-[#DC2626] bg-red-50 border border-red-200 rounded-full uppercase tracking-wider mb-6 inline-block">
                            Unified Plan
                          </span>
                          <h3 className="text-2xl font-black text-[#111827] mb-4">Complete Legal Recovery</h3>
                          <p className="text-[14px] text-[#4B5563] font-medium leading-[1.6] mb-8">
                            Get full-suite support from expert attorneys. Standardized flat pricing with absolutely zero commission on your recovered amount.
                          </p>
                        </div>
                        
                        <div className="mt-auto">
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-5xl font-black text-[#111827] tracking-tight">₹999</span>
                            <span className="text-sm text-[#6B7280] font-bold">/ flat fee</span>
                          </div>
                          <p className="text-[12.5px] text-[#DC2626] font-bold leading-[1.5] max-w-sm">
                            *This pricing is only for 1 case which includes sending to 1 opposition and covers 3 notices & 1 police complaint.
                          </p>
                        </div>
                      </div>

                      {/* Right Block: Included features & Call-to-action */}
                      <div className="lg:col-span-7 p-6 sm:p-8 md:p-12 flex flex-col justify-between">
                        <div>
                          <h4 className="text-[13.5px] font-extrabold text-[#111827] uppercase tracking-wider mb-6">What's included in this plan:</h4>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                            <div className="flex items-start gap-3">
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] stroke-[3.5] shrink-0 mt-0.5" />
                              <div className="flex flex-col">
                                <span className="text-[11.5px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">3 Legal Notices</span>
                                <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Progressive legal escalations</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] stroke-[3.5] shrink-0 mt-0.5" />
                              <div className="flex flex-col">
                                <span className="text-[11.5px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">1 Police Complaint</span>
                                <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Expert draft validation</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] stroke-[3.5] shrink-0 mt-0.5" />
                              <div className="flex flex-col">
                                <span className="text-[11.5px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">Attorney Validation</span>
                                <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Verified by top legal experts</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] stroke-[3.5] shrink-0 mt-0.5" />
                              <div className="flex flex-col">
                                <span className="text-[11.5px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">Real-time Tracking</span>
                                <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Live dashboard case updates</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-[#E5E7EB]/85">
                          <Link href="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-3.5 text-[14px] font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl shadow-[0_4px_16px_rgba(220,38,38,0.15)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
                              Get Started Now
                            </button>
                          </Link>
                          <div className="flex items-center gap-2.5 text-left">
                            <Shield className="w-5 h-5 text-[#2563EB] stroke-[2] shrink-0" />
                            <span className="text-[12px] text-[#6B7280] font-bold leading-tight">
                              100% transparent.<br />No commissions, no hidden fees.
                            </span>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>

                {/* 7. Evidentiary Checklist */}
                <h2 id="documentation-needed">7. The Evidentiary Checklist for Personal Debt Recovery</h2>
                <p>
                  To initiate your recovery campaign successfully on our platform, you will need to gather basic, standard records to prove your claim. Our advocate panel will utilize these records to compile an irrefutable legal demand notice:
                </p>
                <ul>
                  <li><strong>Bank Statements / UPI Receipts:</strong> Crucial primary proof of transaction. Highlight the date, time, transaction reference number (UTR/RRN), and amount transferred to the borrower.</li>
                  <li><strong>WhatsApp / SMS Chats:</strong> Exported chat logs or high-quality screenshots showing: 1) The borrower asking for the money, 2) Agreeing to the terms or repayment date, and 3) Acknowledging the debt subsequent to default (e.g. saying 'I will pay you next week' or 'Sorry I can't return the money right now').</li>
                  <li><strong>Signed Promissory Note / Loan Agreement:</strong> If you have one, provide a high-resolution scan of the stamped and signed document showing the repayment terms, interest rates, and witness signatures.</li>
                  <li><strong>Bounced Cheque & Bank Return Memo:</strong> If the debtor issued a cheque that was dishonored, upload a scan of both the cheque and the official 'Cheque Return Memo' showing the reason for dishonor (e.g., Funds Insufficient).</li>
                  <li><strong>Audio Recordings & Call Details:</strong> Call logs or recordings where the debtor promises to repay the outstanding debt. Under Section 65B of the Indian Evidence Act, audio records are admissible as strong corroborative evidence.</li>
                </ul>

              </div>

              {/* Tiptap Custom Styles matching the blog detail screen perfectly */}
              <style jsx global>{`
                .tiptap-content h1 { font-size: 2.25em; font-weight: 900; margin-top: 1.5em; margin-bottom: 0.8em; color: #111827; letter-spacing: -0.02em; }
                .tiptap-content h2 { font-size: 1.75em; font-weight: 800; margin-top: 1.5em; margin-bottom: 0.8em; color: #111827; scroll-margin-top: 100px; border-bottom: 2px solid #F3F4F6; padding-bottom: 0.5rem; }
                .tiptap-content h3 { font-size: 1.4em; font-weight: 800; margin-top: 1.2em; margin-bottom: 0.6em; color: #1f2937; scroll-margin-top: 100px; }
                .tiptap-content p { margin-bottom: 1.2em; line-height: 1.8; color: #374151; font-size: 15px; }
                .tiptap-content ul { list-style-type: disc; padding-left: 1.5em; margin-bottom: 1.2em; }
                .tiptap-content ol { list-style-type: decimal; padding-left: 1.5em; margin-bottom: 1.2em; }
                .tiptap-content li { margin-bottom: 0.5em; color: #374151; font-size: 15px; }
                .tiptap-content blockquote { border-left: 4px solid #DC2626; padding-left: 1em; font-style: italic; color: #4b5563; background: #FEF2F2; padding: 1.25rem; border-radius: 0.75rem; margin: 1.5rem 0; }
                .tiptap-content blockquote ol { padding-left: 1.2em; margin-bottom: 0; }
                .tiptap-content img { border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); margin: 2rem 0; }
                .tiptap-content a { color: #DC2626; text-decoration: underline; font-weight: 600; }
                .tiptap-content table { width: 100%; border-collapse: collapse; margin: 2rem 0; font-size: 13px; }
                .tiptap-content th { background: #F9FAFB; padding: 0.75rem; text-align: left; font-weight: 800; border: 1px solid #E5E7EB; color: #111827; }
                .tiptap-content td { padding: 0.75rem; border: 1px solid #E5E7EB; color: #4B5563; font-weight: 500; }
              `}</style>
              
              {/* Share Section */}
              <div className="border-t border-gray-150 pt-8 mt-8">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-gray-900 text-xs tracking-wider uppercase">Share this service page:</span>
                  <div className="flex space-x-4">
                    <button onClick={() => handleShare('facebook')} className="text-gray-400 hover:text-[#DC2626] transition-colors cursor-pointer">
                      <span className="sr-only">Facebook</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </button>
                    <button onClick={() => handleShare('twitter')} className="text-gray-400 hover:text-[#DC2626] transition-colors cursor-pointer">
                      <span className="sr-only">Twitter</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </button>
                    <button onClick={() => handleShare('linkedin')} className="text-gray-400 hover:text-[#DC2626] transition-colors cursor-pointer">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* FAQs Section */}
              <section id="faqs" className="scroll-mt-32 border-t border-gray-150 pt-12">
                <h2 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Frequently Asked Questions</h2>
                <p className="text-xs text-gray-500 font-semibold mb-8">Everything you need to know about the legal recovery of personal loans in India</p>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.id} className="border border-gray-150 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-gray-300">
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="flex justify-between items-center w-full text-left p-4 font-extrabold text-xs sm:text-[13px] tracking-tight text-gray-900 hover:bg-gray-50/30 focus:outline-none transition-colors"
                      >
                        <span className="flex items-center pr-4">
                          <span className="text-[#DC2626] mr-3 font-black">Q.</span>
                          {faq.question}
                        </span>
                        <span className={`transform transition-transform duration-200 shrink-0 ${expandedFaqs.includes(faq.id) ? 'rotate-180' : ''}`}>
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                        </span>
                      </button>
                      {expandedFaqs.includes(faq.id) && (
                        <div className="px-4 pb-4 pt-0 text-[11.5px] sm:text-xs text-gray-600 leading-relaxed pl-10 border-t border-gray-50 pt-3 bg-gray-50/20">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Reviews Section */}
              <section id="reviews" className="scroll-mt-32 border-t border-gray-150 pt-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-black text-gray-900 mb-1 tracking-tight">Client Testimonials</h2>
                    <p className="text-xs text-gray-500 font-semibold">Real experiences of individuals who recovered their personal loans with us</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0 bg-[#FEF2F2] border border-[#FEE2E2]/60 px-4 py-2.5 rounded-xl w-fit">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className="w-3.5 h-3.5" />
                      ))}
                    </div>
                    <span className="font-black text-xs text-gray-900">4.9 / 5 (48 reviews)</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 relative">
                      <FontAwesomeIcon icon={faQuoteLeft} className="text-4xl text-[#DC2626] opacity-10 absolute top-4 left-4" />
                      <div className="relative z-10">
                        <div className="flex items-center mb-3">
                          <div className="flex text-yellow-400 mr-2">
                            {[...Array(5)].map((_, i) => (
                              <FontAwesomeIcon 
                                key={i} 
                                icon={faStar} 
                                className={i < review.rating ? "text-yellow-400 text-[10px]" : "text-gray-300 text-[10px]"} 
                              />
                            ))}
                          </div>
                          <span className="font-extrabold text-[11px] text-gray-900">{review.rating}.0</span>
                        </div>
                        <p className="text-gray-700 italic mb-4 text-xs leading-relaxed">"{review.review}"</p>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 mr-3 text-xs">
                            <FontAwesomeIcon icon={faUser} />
                          </div>
                          <p className="font-extrabold text-xs text-gray-900">{review.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </div>

          {/* Right Sidebar - Author Card & Contact Box (Sticky on Desktop) */}
          <div className="space-y-8" style={{ position: 'sticky', top: '96px', alignSelf: 'start' }}>
            
            {/* Author Profile */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-50 pb-2">Verified Provider</h3>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border border-gray-100 flex-shrink-0 bg-red-50 flex items-center justify-center">
                  <img 
                    src="/favicon/favicon.ico"
                    alt="Team LegalRecovery"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-xs sm:text-[13px]">Team LegalRecovery</h4>
                  <Link 
                    href="/about"
                    className="text-[10px] text-[#DC2626] font-extrabold hover:underline"
                  >
                    About Our Platform
                  </Link>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed mb-4">
                Team LegalRecovery is a dedicated team of legal and financial professionals specializing in statutory money recovery, personal loan disputes, and compliance across India. We resolve cases through structured, attorney-verified legal campaigns.
              </p>
              <a 
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full border border-[#0077b5] text-[#0077b5] text-center py-2.5 rounded-xl text-xs font-bold hover:bg-[#0077b5] hover:text-white transition-colors"
              >
                Follow LegalRecovery
              </a>
            </div>

            {/* Premium CTA Contact Card */}
            <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
              <h3 className="text-base font-extrabold mb-3 tracking-tight">Need Urgent Debt Recovery?</h3>
              <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                Get an advocate-drafted 3-stage notice pipeline and a customized police complaint draft for a flat fee of ₹999.
              </p>
              <a 
                href="tel:+918700343611" 
                className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-extrabold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
              >
                Call Support: +91-8700343611
              </a>
              <Link 
                href="/contact" 
                className="block w-full border border-gray-700 text-gray-300 text-center py-3 rounded-xl text-xs font-extrabold hover:bg-white hover:text-[#111827] hover:border-white transition-colors"
              >
                Initiate Notice Now
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
