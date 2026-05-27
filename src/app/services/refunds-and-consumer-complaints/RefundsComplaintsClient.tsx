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
  Briefcase,
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
  Receipt,
  FileText,
  Key,
  Coins
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

export default function RefundsComplaintsClient() {
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
    const title = "Recover Stuck Refunds & File Consumer Complaints Legally in India";
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
    { id: "coverage-details", title: "2. What We Help You Recover" },
    { id: "notice-strategy", title: "3. Our 3+1 Notice Strategy" },
    { id: "legal-framework", title: "4. The Indian Statutory Shield" },
    { id: "why-online-templates-fail", title: "5. Why Online Templates Fail" },
    { id: "service-pricing", title: "6. Transparent Flat Pricing" },
    { id: "documentation-needed", title: "7. Evidentiary Checklist" },
    { id: "faqs", title: "8. Frequently Asked Questions" },
    { id: "reviews", title: "9. Client Testimonials" }
  ], []);

  // FAQs List (10 comprehensive, detailed Q&As)
  const faqs: FAQ[] = useMemo(() => [
    {
      id: "faq-1",
      question: "What is the limitation period to file a consumer complaint in India?",
      answer: "Under Section 69 of the Consumer Protection Act, 2019, the limitation period to file a formal consumer complaint is two (2) years from the exact date on which the 'cause of action' arose. This means two years from the date of purchase, date of discovering a defect, date when a service deficiency occurred, or when a refund was explicitly denied. In case the deadline has passed, you can file an application for 'condonation of delay' under Section 69(2) by establishing sufficient cause for not filing within the two-year window, which the Consumer Commission must review and approve."
    },
    {
      id: "faq-2",
      question: "Is it legally mandatory to send a legal notice to a company before filing a consumer complaint?",
      answer: "No, sending a pre-litigation legal notice is not strictly mandatory under the Consumer Protection Act, 2019. However, it is highly recommended as a matter of legal strategy. A formal, advocate-backed notice serves three vital purposes: 1) It provides conclusive proof to the Consumer Commission that you acted in good faith and gave the opposite party a fair chance to resolve the dispute, 2) It clearly documents the dispute details, establishing a precise timeline, and 3) It creates immediate corporate pressure, resolving roughly 75% to 80% of consumer disputes within the notice period (typically 15 to 30 days) without ever needing to step into court."
    },
    {
      id: "faq-3",
      question: "What is the new pecuniary jurisdiction for Consumer Commissions in India?",
      answer: "Following the Consumer Protection Act, 2019 and subsequent central government notifications in late 2021, the pecuniary jurisdictions (the monetary limit of claims a commission can hear) are: 1) District Consumer Commission: Handles disputes where the value of goods or services paid does not exceed ₹50 Lakhs (revised down from ₹1 Crore to prevent overloading local courts), 2) State Consumer Commission: Handles disputes where the value exceeds ₹50 Lakhs but does not exceed ₹2 Crores, and 3) National Consumer Disputes Redressal Commission (NCDRC): Handles disputes where the value exceeds ₹2 Crores. The value is computed strictly on the consideration paid, not the compensation claimed."
    },
    {
      id: "faq-4",
      question: "What is the e-Daakhil portal, and how does it help consumers?",
      answer: "The e-Daakhil portal (edaakhil.nic.in) is an electronic filing platform launched under the Consumer Protection Act, 2019, which enables consumers to file complaints online directly before the District, State, or National Consumer Commissions. It eliminates the physical hassle of visiting the court to submit paperwork. Through e-Daakhil, you can register a profile, draft a complaint, upload digital evidence in PDF format, pay the court fees via online integration, and track status, notice issuance, and upcoming hearing dates in real time from home."
    },
    {
      id: "faq-5",
      question: "What are the court fees for filing a consumer complaint in India?",
      answer: "Under the Consumer Protection Rules, court fees are kept extremely nominal to encourage consumer redressal. For claims (value of consideration paid) up to ₹5 Lakhs, there is absolutely zero court fee. For claims between ₹5 Lakhs and ₹10 Lakhs, the fee is ₹250. For ₹10 Lakhs to ₹20 Lakhs, the fee is ₹500. For ₹20 Lakhs to ₹50 Lakhs, the fee is ₹1,000. For ₹50 Lakhs to ₹1 Crore, the fee is ₹2,000, and for ₹1 Crore to ₹2 Crores, it is ₹2,500. Fees are paid via demand draft or online integration during e-filing."
    },
    {
      id: "faq-6",
      question: "What constitutes 'Unfair Trade Practice' (UTP) under the 2019 Act?",
      answer: "Under Section 2(47) of the Consumer Protection Act, 2019, an Unfair Trade Practice (UTP) includes any trade practice that adopts unfair methods or deceptive practices to promote the sale, use, or supply of goods/services. This covers: 1) Making false representations regarding the standard, quality, grade, or composition of goods, 2) Misrepresenting a second-hand item as brand new, 3) Giving misleading statements regarding warranties, performance guarantees, or pricing, 4) Refusing to issue a valid tax invoice, 5) Unilaterally refusing to take back defective goods or refund money within the period specified in the invoice or within 30 days if not specified, and 6) Disclosing consumer personal data to third parties without consent."
    },
    {
      id: "faq-7",
      question: "How does 'Product Liability' work under the Consumer Protection Act, 2019?",
      answer: "The 2019 Act introduced an exclusive chapter (Chapter VI) on Product Liability. Under these provisions, a product manufacturer, product service provider, or product seller is held strictly liable to compensate a consumer for any harm, personal injury, property damage, or death caused by a defective product or deficient service. To claim product liability, the consumer must prove that the product contained a manufacturing defect, design flaw, inadequate instructions/warnings, or that the service provider failed to provide proper maintenance or instructions. This holds manufacturers directly accountable, even if the item was bought from a retail distributor."
    },
    {
      id: "faq-8",
      question: "Can an e-commerce platform claim they are just an 'intermediary' to escape refund liability?",
      answer: "No. Under the Consumer Protection (E-Commerce) Rules, 2020, e-commerce platforms (marketplaces like Amazon, Flipkart, etc.) cannot hide behind their 'intermediary' status to escape liability for defective goods or unfair practices. They are legally mandated to appoint grievance officers, disclose product origins, establish transparent return/refund policies, and take joint responsibility if they actively host or guarantee the merchant. Unilateral 'no return/no refund' policies on standard retail purchases have been repeatedly held by consumer courts as an unfair trade practice, making the platform liable for immediate restitution."
    },
    {
      id: "faq-9",
      question: "What specific reliefs or remedies can a Consumer Commission grant?",
      answer: "Under Section 39 of the 2019 Act, Consumer Commissions have vast powers to award comprehensive reliefs, including: 1) Ordering the removal of defects pointed out by an expert laboratory, 2) Ordering the direct replacement of the defective product with a new, defect-free unit, 3) Mandating a full refund of the price paid along with reasonable interest (often 9% to 18% p.a.), 4) Directing the payment of adequate compensation for mental agony, harassment, physical injury, or financial loss suffered, 5) Ordering the removal of service deficiencies, 6) Awarding litigation cost, and 7) Directing the withdrawal of hazardous goods from sale."
    },
    {
      id: "faq-10",
      question: "What is the procedure if a company refuses to obey a Consumer Commission's order?",
      answer: "If a company or service provider fails or refuses to comply with an order passed by a Consumer Commission, you can initiate execution proceedings under Section 71 and Section 72 of the Consumer Protection Act, 2019. Under Section 72, the Commission acts as a Judicial Magistrate, having the power to punish the defaulting party with imprisonment for a term ranging from one month up to three years, or a fine ranging from ₹25,000 to ₹1,000,000, or both. This severe criminal penalty ensures that corporate directors comply with consumer commission decrees."
    }
  ], []);

  // Client Reviews List
  const reviews: Review[] = useMemo(() => [
    {
      id: "rev-1",
      name: "Siddharth Malhotra (Product Manager, Bengaluru)",
      rating: 5,
      review: "A premium electronic brand refused to replace my defective ₹1.2 Lakh OLED TV, claiming the panel damage was 'accidental' despite clear delivery proof of a crack. Team LegalRecovery initiated their 3+1 notice pipeline targeting the global executives. Within 8 days, the company delivered a brand-new TV and offered ₹15,000 in shopping vouchers as a gesture."
    },
    {
      id: "rev-2",
      name: "Priyanka Nair (Consultant, Mumbai)",
      rating: 5,
      review: "A leading travel portal refused to issue a refund of ₹48,000 for a flight cancelled due to national lockdowns, offering only useless credit shells. LegalRecovery drafted an advocate notice outlining the Supreme Court directives and state consumer acts. The portal processed a complete cash refund to my credit card in 72 hours."
    },
    {
      id: "rev-3",
      name: "Dr. Sandeep Jha (Physician, New Delhi)",
      rating: 5,
      review: "An health insurance company rejected my father's hospitalization claim of ₹2.4 Lakhs citing a frivolous pre-existing condition clause. LegalRecovery's systematic board-level escalation notice outlined deficiency in service under the Consumer Protection Act. The insurer reversed their rejection and settled the claim in full with interest."
    },
    {
      id: "rev-4",
      name: "Arjun Desouza (E-commerce Retailer, Goa)",
      rating: 5,
      review: "A major logistics provider lost an inventory consignment worth ₹85,000 and pointed to a liability cap of ₹5,000 in their fine print. The pre-litigation warning and police complaint draft prepared by LegalRecovery highlighted gross negligence and breach of contract. They settled the full value within a week of receiving Stage 2 notice."
    }
  ], []);

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Refunds & Consumer Complaints", href: "/services/refunds-and-consumer-complaints" },
  ];

  // Schema structured JSON-LD data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.legalrecovery.in/services/refunds-and-consumer-complaints#article",
        "isPartOf": {
          "@id": "https://www.legalrecovery.in/services/refunds-and-consumer-complaints"
        },
        "headline": "Recover Stuck Refunds & File Consumer Complaints Legally in India",
        "description": "Reclaim stuck refunds, report defective products, fight deficient services, and handle warranty defaults legally in India under the Consumer Protection Act, 2019. 3 progressive notices, 1 police complaint draft, attorney-verified.",
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
        "mainEntityOfPage": "https://www.legalrecovery.in/services/refunds-and-consumer-complaints"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.legalrecovery.in/services/refunds-and-consumer-complaints#faq",
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
        "@id": "https://www.legalrecovery.in/services/refunds-and-consumer-complaints#breadcrumbs",
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
            "name": "Refunds & Consumer Complaints",
            "item": "https://www.legalrecovery.in/services/refunds-and-consumer-complaints"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.legalrecovery.in/services/refunds-and-consumer-complaints#service",
        "name": "Refunds and Consumer Complaints Recovery Service",
        "description": "Professional money recovery for e-commerce refund delays, defective consumer goods, deficient services, warranty disputes, insurance rejections, and travel overcharges using advocate-signed notices.",
        "provider": {
          "@type": "Organization",
          "name": "LegalRecovery",
          "url": "https://www.legalrecovery.in"
        },
        "areaServed": "IN",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "64"
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
              Professional Refunds & Consumer Recovery
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-[50px] font-black tracking-tight text-[#111827] leading-[1.1] mb-6 select-text">
              Refund Delayed? <br />
              Defective Product? <br />
              <span className="text-[#DC2626]">Fight Back Legally.</span>
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#4B5563] font-medium leading-[1.6] mb-6 max-w-xl select-text">
              Reclaim stuck e-commerce refunds, dispute defective electronics, appeal insurance rejections, and penalize deficient services. We deploy 3 practicing advocate legal notices and 1 formal police complaint draft to force corporate compliance.
            </p>

            {/* High-Trust Tagline Banner */}
            <div className="flex items-center gap-2 bg-[#E6F4EA] text-[#137333] border border-[#A3E2AB]/40 rounded-lg px-3.5 py-2 mb-8 select-text">
              <Check className="w-4 h-4 text-[#137333] stroke-[3.5] shrink-0" />
              <span className="text-[12px] sm:text-[13px] font-extrabold tracking-tight">
                No Court Visits. No Commissions. We handle it for you.
              </span>
            </div>

            {/* CTA Anchor button linking to the pricing section */}
            <div className="w-full sm:w-auto mb-6 select-none">
              <a
                href="#service-pricing"
                className="inline-block w-full sm:w-auto text-center px-8 py-4 text-[14px] sm:text-[15px] font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-[12px] shadow-[0_4px_16px_rgba(220,38,38,0.15)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Start My Recovery - ₹999
              </a>
            </div>
          </div>

          {/* Right Image/Dashboard Column */}
          <div className="lg:col-span-6 select-none w-full">
            <div className="w-full bg-[#FFFFFF] rounded-3xl border border-[#E5E7EB] shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-4 sm:p-6 md:p-8 flex flex-col gap-6 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full blur-xl pointer-events-none" />
              
              {/* Active Tab visual header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]/60">
                <div className="flex flex-col">
                  <span className="text-[12px] font-black text-[#111827]">Consumer Dispute Dashboard</span>
                  <span className="text-[9.5px] text-[#9CA3AF] font-bold mt-0.5">Disputed Case: REC-CON-2026</span>
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
                  <span className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider">Unpaid Dues Amount</span>
                  <span className="text-xl font-black text-[#111827] mt-1">₹85,000</span>
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
                  Our system targets corporate compliance teams, executive officers, and directors' mailboxes for maximum corporate pressure.
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
                <h2 id="service-overview">1. Professional Refunds & Consumer Complaints Service</h2>
                <p>
                  As an individual consumer in the modern retail landscape, you face an extreme, systemic power imbalance. Whether buying a physical product from a digital storefront, booking a flight ticket via a global travel portal, or purchasing a health insurance policy for your family, you are forced to agree to extensive, one-sided terms of service. When products prove dangerously defective, services fall grossly short of promises, or companies sit on your refunds for months, standard customer support channels often subject you to endless automated chats, canned responses, and bureaucratic dead-ends.
                </p>
                <p>
                  The LegalRecovery <strong className="font-extrabold text-[#111827]">Refunds and Consumer Complaints Service</strong> is a specialized pre-litigation tech platform engineered to level the playing field. We realize that corporations delay refunds and deny valid claims because they count on you quietly giving up due to the prohibitive cost, stress, and time of formal consumer litigation. We have re-engineered consumer advocacy by deploying an aggressive, attorney-verified, automated multi-stage escalation notice pipeline designed to bypass front-line support staff and reach the personal mailboxes of key corporate decision-makers, general counsels, and executive board directors.
                </p>
                <blockquote>
                  <strong>Our Service Promise:</strong> We provide comprehensive, flat-fee recovery support with absolutely <strong>zero commissions</strong> taken on your recovered money. We draft, validate, and launch progressive legal notices designed to force commercial entities to resolve your dispute.
                </blockquote>
                <p>
                  No commercial enterprise - regardless of its scale, startup status, or institutional backing - can legally withhold your money, deliver defective products, or escape statutory warranties. Let our platform take the burden of writing, executing, and tracking your consumer claims so you can secure a refund, replacement, or compensation swiftly.
                </p>

                {/* 2. What We Help You Recover */}
                <h2 id="coverage-details">2. What We Help You Recover</h2>
                <p>
                  A consumer grievance is rarely limited to the basic transaction price alone. Our legal panel compiles and details every single component of your outstanding claim - including direct considerations paid, statutory interest, and financial losses - to maximize pressure:
                </p>
                
                <h3 id="ecommerce-retail">A. E-Commerce & Retail Marketplace Refunds</h3>
                <p>
                  We recover stuck refunds for returned items, misdirected shipments, and lost packages. If a platform like Amazon, Flipkart, or a direct-to-consumer (D2C) brand refuses to issue your credit, locks your account unilaterally, or delivers a counterfeit product, our notices target their specific liabilities under the E-Commerce Rules, 2020.
                </p>

                <h3 id="defective-electronics">B. Defective Products, Electronics & Appliances</h3>
                <p>
                  If you purchased a laptop, smartphone, smart TV, or home appliance that suffered component failure within the warranty period, and the brand refuses to repair it, delays parts, or falsely claims physical damage, we enforce your <strong className="font-extrabold text-[#111827]">Product Liability</strong> rights to demand a brand-new replacement or a full refund.
                </p>

                <h3 id="travel-hospitality">C. Airline, Travel & Hospitality Cancellations</h3>
                <p>
                  Airlines, railway operators, and online travel agents (OTAs) frequently withhold refunds for cancelled flights, impose illegal cancellation fees, or offer restrictive credit shells. We demand complete cash restitution under DGCA directives, and state laws, targeting their head office compliance desks directly.
                </p>

                <h3 id="insurance-claims">D. Insurance Rejections & Frivolous Banking Charges</h3>
                <p>
                  Insurance companies routinely reject legitimate medical, life, or motor insurance claims by misinterpreting 'pre-existing disease' clauses or policy fine-print. We challenge these rejections by citing IRDAI guidelines and consumer precedents, forcing the insurer's grievance officers to re-evaluate the claim.
                </p>

                <h3 id="edtech-education">E. EdTech Platforms & Course Fee Refunds</h3>
                <p>
                  EdTech giants and coaching institutes frequently utilize high-pressure sales tactics, misleading advertisements, and false employment guarantees to secure upfront annual fees, only to refuse refunds when students withdraw. We target these misrepresentations under the Consumer Protection (E-Commerce) Rules and ASCI guidelines to secure refunds of the unused fee portion.
                </p>

                <h3 id="utility-services">F. Utility Services & Telecom Billing Overcharges</h3>
                <p>
                  Whether it is a telecom operator, internet service provider, gas distributor, or local builder charging arbitrary maintenance dues, we audit the bills, issue a breakdown of overcharges, and demand immediate credit adjustments or refunds for unfair, restrictive billing practices.
                </p>

                {/* 3. Our 3+1 Notice Strategy */}
                <h2 id="notice-strategy">3. Our 3+1 Notice Strategy: Engineered for Maximum Pressure</h2>
                <p>
                  Filing a court case immediately can take months to show progress. Conversely, sending a single basic complaint email is easily ignored by corporate support bots. To overcome this, LegalRecovery utilizes an aggressive <strong className="font-extrabold text-[#111827]">3-stage progressive notice pipeline combined with a criminal police complaint draft</strong> to systematically escalate pressure:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">1</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 1: Advocate Demand Notice</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      We launch a highly authoritative demand notice on a practicing advocate's letterhead. This notice is served via digital pipelines (corporate emails, WhatsApp) and physical registered post, giving the company a strict 15-day window to settle undisputed claims.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">2</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 2: C-Suite & Board Escalation</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      If the first notice is ignored, we escalate directly to the company's C-level executives (CEO, CFO, General Counsel), nodal grievance officers, and board directors. We outline individual director liabilities for hosting unfair trade practices.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">3</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 3: Pre-Litigation Draft Package</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      We deliver a final warning package, including a finalized draft of the District Consumer Commission complaint compiled under the e-Daakhil portal standard, signalling our absolute readiness to initiate formal litigation.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-emerald-600 text-white flex items-center justify-center rounded-full font-black text-xs">+1</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Criminal Police Complaint Draft</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      Simultaneously, we provide you with a meticulously compiled criminal police complaint draft for <strong className="font-extrabold text-[#111827]">Cheating (Section 420 IPC)</strong> and <strong className="font-extrabold text-[#111827]">Criminal Breach of Trust (Section 405/406 IPC)</strong> to be submitted at your local police station in case of blatant fraud.
                    </p>
                  </div>
                </div>
                <p>
                  By moving through these four distinct escalation stages week-by-week, we make it highly expensive, operationally disruptive, and legally risky for the corporate entity to continue withholding your refund or denying your replacement.
                </p>

                {/* 4. The Indian Statutory Shield */}
                <h2 id="legal-framework">4. The Indian Statutory Shield: The Consumer Protection Act, 2019</h2>
                <p>
                  India's legal framework provides consumers with robust, modern statutory protections. The <strong className="font-extrabold text-[#111827]">Consumer Protection Act, 2019</strong> (which replaced the legacy 1986 Act) introduced several groundbreaking provisions that our legal panel leverages to build your case:
                </p>
                <ul>
                  <li><strong className="font-extrabold text-[#111827]">The Right to Redressal (Section 2(9)(v)):</strong> Grants consumers the absolute right to seek legal remedies against unfair trade practices, exploitation, or deficiency in service.</li>
                  <li><strong className="font-extrabold text-[#111827]">Unfair Trade Practices (UTP) (Section 2(47)):</strong> Broadly defines deceptive practices, including refusing to issue a bill, refusing returns/refunds within standard commercial periods, or offering misleading warranties, as severe statutory defaults.</li>
                  <li><strong className="font-extrabold text-[#111827]">Deficiency of Service (Section 2(11)):</strong> Governs any fault, imperfection, shortcoming, or inadequacy in the quality, nature, or manner of performance of a service (e.g., flight cancellations, insurance rejection, edtech failures).</li>
                  <li><strong className="font-extrabold text-[#111827]">Product Liability (Chapter VI):</strong> Holds manufacturers, service providers, and retail sellers strictly liable for any harm or loss caused by a defective product or negligent service, regardless of intermediate distributors.</li>
                  <li><strong className="font-extrabold text-[#111827]">E-Daakhil Portal E-Filing:</strong> Simplifies litigation by enabling consumers to file cases online without physical court visits.</li>
                  <li><strong className="font-extrabold text-[#111827]">Territorial Convenience:</strong> Under the 2019 Act, you can file a complaint in the Consumer Commission located in the district where <strong className="font-extrabold text-[#111827]">you (the complainant)</strong> reside or work, eliminating the need to travel to the company's head office location.</li>
                </ul>

                {/* Compare Pecuniary Jurisdictions Table */}
                <div className="my-8">
                  <h3>Pecuniary Jurisdictions under the Consumer Protection Act</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Consumer Commission Level</th>
                        <th>Old Limit (1986 Act)</th>
                        <th>Revised Limit (2019 Act)</th>
                        <th>Filing Convenience Features</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>District Commission</strong></td>
                        <td>Up to ₹20 Lakhs</td>
                        <td>Up to ₹50 Lakhs (Revised down from ₹1 Cr in 2021)</td>
                        <td>E-filing via e-Daakhil, video hearings, filed at Complainant's residence</td>
                      </tr>
                      <tr>
                        <td><strong>State Commission</strong></td>
                        <td>₹20 Lakhs to ₹1 Crore</td>
                        <td>₹50 Lakhs to ₹2 Crores</td>
                        <td>Appeals against District orders, original complaints for premium claims</td>
                      </tr>
                      <tr>
                        <td><strong>National Commission (NCDRC)</strong></td>
                        <td>Above ₹1 Crore</td>
                        <td>Above ₹2 Crores</td>
                        <td>Located in New Delhi, handles highest value cases, appellate authority</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 5. Why Online Templates Fail */}
                <h2 id="why-online-templates-fail">5. Why Free Online Complaint Templates Fail</h2>
                <p>
                  Many consumers try to download free legal notice templates or complaint forms from basic internet blogs. While tempting, these amateur attempts almost always fail to yield results:
                </p>
                <ul>
                  <li><strong>No Advocate Letterhead or Seal:</strong> Corporations employ large internal legal teams. When they receive a basic printed email without the signature and seal of a registered, practicing advocate, they categorize it as low-risk and ignore it.</li>
                  <li><strong>Outdated Legal Citations:</strong> Most online formats still cite sections of the repealed 1986 Act, incorrect Shop & Establishment clauses, or fail to mention the E-Commerce Rules, 2020, making the notice legally ineffective.</li>
                  <li><strong>Lack of Executive Reach:</strong> Standard online templates are sent to general info@ or support@ email addresses, where they are filtered out by customer service agents rather than reaching corporate directors or legal heads.</li>
                </ul>
                <p>
                  LegalRecovery provides you with attorney-signed, state-customized notice campaigns. We use real-time digital read receipts to track when the HR opened the email, leaving them with absolutely no room to claim they never received the demand.
                </p>

                {/* 6. Transparent Flat Pricing */}
                <h2 id="service-pricing">6. Transparent Flat Pricing</h2>
                <p>
                  Traditional advocates charge thousands of rupees per consultation and demand additional percentages (commissions) on the recovered amount. We believe this is highly exploitative. 
                </p>
                <p>
                  LegalRecovery provides professional, attorney-verified consumer complaint and refund notice campaigns for a single, flat fee of <strong className="font-extrabold text-[#111827]">₹999</strong>. We charge absolutely zero hidden fees and take zero commission on your recovered money.
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
                          <h3 className="text-2xl font-black text-[#111827] mb-4">Complete Consumer Recovery</h3>
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
                            <Shield className="w-5 h-5 text-[#2563EB] shrink-0" />
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
                <h2 id="documentation-needed">7. The Evidentiary Checklist for Consumer Claims</h2>
                <p>
                  To build an airtight case against a corporate merchant or service provider, you must collect standard transaction records. Our advocate panel utilizes these records to back every claim in the notices:
                </p>
                <ul>
                  <li><strong>Tax Invoice / Purchase Bill:</strong> Establishes the transaction date, item description, consideration paid, and merchant's GST details.</li>
                  <li><strong>Proof of Payment:</strong> Bank statement, credit card slip, UPI transaction screenshot, or cash receipt proving successful credit debit.</li>
                  <th>Warranty Card / Policy Document:</th> Confirms the brand's contractual commitment, period of coverage, and terms of service.
                  <li><strong>Defect Proof (Photos/Videos):</strong> High-definition photographs or unboxing/operational videos showing the defect or delivery of damaged goods.</li>
                  <li><strong>Support Communications:</strong> Screenshots of customer support emails, chat transcripts, ticket numbers, and call records demonstrating your attempts to seek resolution.</li>
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
                <p className="text-xs text-gray-500 font-semibold mb-8">Everything you need to know about refunds and consumer disputes in India</p>
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
                    <p className="text-xs text-gray-500 font-semibold">Real experiences of consumers who recovered refunds with us</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0 bg-[#FEF2F2] border border-[#FEE2E2]/60 px-4 py-2.5 rounded-xl w-fit">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className="w-3.5 h-3.5" />
                      ))}
                    </div>
                    <span className="font-black text-xs text-gray-900">4.9 / 5 (64 reviews)</span>
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
                Team LegalRecovery is a dedicated team of legal and financial professionals specializing in statutory money recovery, employee disputes, and corporate compliance across India. We resolve cases through structured, attorney-verified legal campaigns.
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
              <h3 className="text-base font-extrabold mb-3 tracking-tight">Need Urgent Refund Recovery?</h3>
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
