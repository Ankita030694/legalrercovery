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

export default function FreelancerRecoveryClient() {
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
    const title = "Recover Unpaid Freelancer & Client Payments Legally in India";
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
      question: "What is the limitation period to file a legal suit for recovering unpaid freelancer or client payments in India?",
      answer: "Under the Limitation Act, 1963, the limitation period to file a civil recovery suit (including summary suits under Order 37 of the CPC) for recovering unpaid freelance payments or outstanding client invoices is three (3) years. This three-year clock begins ticking from the exact 'date of default' - which is typically the due date specified on the tax invoice, the date of project delivery, or the date the client formally refused to clear the payment. If a client sends a written email or chat acknowledging the pending debt, the limitation period resets for another three years under Section 18 of the Limitation Act."
    },
    {
      id: "faq-2",
      question: "Are email trails, Slack messages, or WhatsApp chats legally binding contracts for freelancers?",
      answer: "Yes, absolutely. Under Section 10 and Section 10A of the Indian Contract Act, 1872, and the Information Technology Act, 2000, electronic contracts and communications are fully recognized as valid and legally binding agreements. A signed paper contract is not mandatory. If you have an email exchange, a Slack conversation, or a WhatsApp chat where a client explicitly offered a project, defined a price or milestone rate, and you accepted the work and delivered it, it constitutes a binding contract. These electronic records are admissible as primary evidence under Section 65B of the Indian Evidence Act."
    },
    {
      id: "faq-3",
      question: "What is MSME Samadhaan, and can a freelance designer, developer, or consultant use it?",
      answer: "Yes. Freelance professionals, agency owners, and independent consultants can leverage the highly effective MSME Samadhaan portal, provided they have a valid Udyam Registration (which is a free, quick online registration under the Micro, Small, and Medium Enterprises Development Act, 2006). Registered MSMEs are protected under the MSMED Act, which mandates that buyers must clear payments within forty-five (45) days of accepting goods or services. Defaults allow the MSME to file a complaint on the Samadhaan portal to recover the principal amount along with compound interest at three (3) times the RBI bank rate."
    },
    {
      id: "faq-4",
      question: "Can a client legally use my work (designs, code, content) if they refuse to clear my final invoice?",
      answer: "No. Under Section 19 and 19A of the Indian Copyright Act, 1957, the intellectual property rights, copyright, and ownership of any creative work (including software code, website designs, articles, video edits, and graphics) only transfer to the client upon the actual fulfillment of the agreed contract conditions - which includes full payment of the invoice. If a client uses, hosts, or publishes your work without clearing your final bill, they are committing a direct copyright infringement under Section 51, making them liable to civil injunctions, damages, and criminal penalties under Section 63."
    },
    {
      id: "faq-5",
      question: "What is a Summary Suit under Order 37 CPC, and how does it benefit freelancers?",
      answer: "A Summary Suit filed under Order 37 of the Code of Civil Procedure, 1908, is a highly effective, fast-track civil remedy designed specifically for recovering liquidated debts arising from written contracts, signed invoices, bills of exchange, or cheques. Unlike a regular civil suit which can take years, a summary suit prevents the defaulting client from delaying the case. The defendant does not have an automatic right to defend; they must apply for 'leave to defend' within 10 days of the summons, establishing a genuine defense. If the court finds their defense frivolous or a delaying tactic, it passes a recovery decree immediately."
    },
    {
      id: "faq-6",
      question: "What should I do if a client's cheque for milestone payment bounces?",
      answer: "A cheque bounce is a serious criminal offense in India under Section 138 of the Negotiable Instruments Act, 1881. If a client's cheque bounces due to 'insufficient funds' or 'stop payment', you must: 1) Obtain the cheque return memo from your bank, 2) Serve a formal, advocate-backed legal notice demanding payment within fifteen (15) days of receiving the notice, and 3) If they fail to pay within those 15 days, file a criminal complaint before the Metropolitan Magistrate Court within thirty (30) days from the expiry of the notice period. The offense attracts a penalty of up to double the cheque amount, or imprisonment for up to two years, or both."
    },
    {
      id: "faq-7",
      question: "Can I recover payments from international clients based outside India?",
      answer: "Yes, you can recover dues from international clients, though the procedural steps are slightly different. First, we send a formal legal notice via digital channels (registered email with read-tracking, WhatsApp, Slack) and, if possible, physical courier to their overseas office. International businesses are highly sensitive to legal compliance, brand damage, and copyright infringement notices. If they ignore the notice, we can file a complaint with international dispute bodies, report the intellectual property violation to their hosting providers (DMCA takedown), or initiate legal arbitration if your contract contains an international arbitration clause."
    },
    {
      id: "faq-8",
      question: "What is 'Scope Creep', and how do I legally recover payments for unapproved extra work?",
      answer: "Scope creep refers to a situation where a client demands additional features, revisions, or tasks that are beyond the originally agreed Statement of Work (SOW). Legally, you can recover payment for extra work if you have a written trail (emails, chats) where: 1) You notified the client that the requested work was outside the original scope, 2) You provided a price estimate or rate for the extra work, and 3) The client explicitly or implicitly authorized you to proceed. In the absence of an SLA, courts rely on the doctrine of *Quantum Meruit* (as much as earned) under Section 70 of the Contract Act to award reasonable compensation."
    },
    {
      id: "faq-9",
      question: "How long does a legal notice take to show results in client payment disputes?",
      answer: "In approximately 80% of freelancer and client payment disputes, a formal, advocate-signed legal notice yields results within the specified 15-day notice window. Most corporate clients, tech startups, and design agencies prefer to avoid the public exposure, brand damage, and operational disruption of an MSME Samadhaan dispute, a copyright infringement case, or a summary recovery suit. Typically, they initiate a settlement discussion or release the outstanding invoice amount immediately upon receiving the advocate notice."
    },
    {
      id: "faq-10",
      question: "What criminal actions can a freelancer take against a client who fraudulently refuses to pay?",
      answer: "If a client hires a freelancer with the clear, pre-planned fraudulent intention of not paying (e.g., locking you out of servers, deleting communications, or ghosting after downloading files), you can initiate criminal proceedings: 1) File a criminal complaint for Cheating (Section 420 IPC) and Criminal Breach of Trust (Section 405/406 IPC) at your local police station, and 2) File a complaint for dishonest misappropriation of property. We provide a meticulously compiled criminal police complaint draft in our Stage 4 package to create heavy non-bailable pressure on corporate directors."
    }
  ], []);

  // Client Reviews List
  const reviews: Review[] = useMemo(() => [
    {
      id: "rev-1",
      name: "Aman Gupta (Freelance UI/UX Designer, Bengaluru)",
      rating: 5,
      review: "A client refused to clear my final milestone of ₹95,000 for a SaaS dashboard redesign, claiming revisions were pending. LegalRecovery sent an advocate notice outlining the Indian Contract Act and Copyright Act violations. They pointed out that using my designs on production without clearing dues was illegal. The client cleared the full bill within 48 hours."
    },
    {
      id: "rev-2",
      name: "Sneha Nair (Independent Software Consultant, Pune)",
      rating: 5,
      review: "An agency ghosted me on three months of consulting retainers worth ₹3.2 Lakhs. Since I was Udyam registered, Team LegalRecovery deployed their MSME Samadhaan escalation pipeline. They served progressive notices calculation 3x bank rate compound interest. The agency management immediately settled the entire outstanding amount."
    },
    {
      id: "rev-3",
      name: "Rahul & Team (Digital Marketing Agency, New Delhi)",
      rating: 5,
      review: "A startup client terminated our marketing agreement overnight, violating a 30-day notice clause and withholding ₹1.5 Lakhs in retainers. LegalRecovery drafted a highly authoritative notice targeting the startup's co-founders and venture investors. The startup's legal head responded within 3 days, issuing the complete payment."
    },
    {
      id: "rev-4",
      name: "Tanmay Desai (Freelance Video Editor, Mumbai)",
      rating: 5,
      review: "A corporate client used my edited commercials on social media but refused to clear my final dues of ₹65,000, claiming minor aesthetic changes. LegalRecovery's notice package included a DMCA takedown draft and a criminal cheating police complaint. The client cleared the invoice in full and apologized."
    }
  ], []);

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Freelancer & Client Payments", href: "/services/recovery-of-freelancer-and-client-payments" },
  ];

  // Schema structured JSON-LD data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.legalrecovery.in/services/recovery-of-freelancer-and-client-payments#article",
        "isPartOf": {
          "@id": "https://www.legalrecovery.in/services/recovery-of-freelancer-and-client-payments"
        },
        "headline": "Recover Unpaid Freelancer & Client Payments Legally in India",
        "description": "Exhaustive legal guide on recovering unpaid freelance invoices, milestone payouts, monthly retainer defaults, and contract breaches in India under the Indian Contract Act, 1872. 3 progressive notices, 1 police complaint draft, attorney-verified.",
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
        "mainEntityOfPage": "https://www.legalrecovery.in/services/recovery-of-freelancer-and-client-payments"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.legalrecovery.in/services/recovery-of-freelancer-and-client-payments#faq",
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
        "@id": "https://www.legalrecovery.in/services/recovery-of-freelancer-and-client-payments#breadcrumbs",
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
            "name": "Freelancer & Client Payments",
            "item": "https://www.legalrecovery.in/services/recovery-of-freelancer-and-client-payments"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://www.legalrecovery.in/services/recovery-of-freelancer-and-client-payments#service",
        "name": "Freelancer and Client Payments Recovery Service",
        "description": "Professional money recovery for unpaid freelance invoices, milestone delays, monthly retainer defaults, and contract breaches using top-tier advocate-signed notice campaigns.",
        "brand": {
          "@type": "Organization",
          "name": "LegalRecovery",
          "url": "https://www.legalrecovery.in"
        },
        "areaServed": "IN",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "52"
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
              Professional Freelancer & Client Recovery
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-[50px] font-black tracking-tight text-[#111827] leading-[1.1] mb-6 select-text">
              Invoice Stuck? <br />
              Client Ghosted? <br />
              <span className="text-[#DC2626]">Recover It Legally.</span>
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#4B5563] font-medium leading-[1.6] mb-6 max-w-xl select-text">
              Reclaim stuck freelance milestone payments, recover outstanding retainer fees, settle scope creep/revision overcharges, and stop the unauthorized usage of your designs or code. We serve 3 advocate-signed notices and provide 1 formal police complaint draft.
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
                href="/contact"
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
                  <span className="text-[12px] font-black text-[#111827]">Freelance Dispute Dashboard</span>
                  <span className="text-[9.5px] text-[#9CA3AF] font-bold mt-0.5">Disputed Case: REC-FREE-2026</span>
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
                  <span className="text-xl font-black text-[#111827] mt-1">₹95,000</span>
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
                  Our system targets individual owners, agency heads, corporate compliance directors, and executive boardrooms for maximum escalation pressure.
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

            <div className="bg-white p-6 md:p-12 rounded-3xl border border-gray-150 shadow-[0_4px_30px_rgba(0,0,0,0.015)] space-y-12">
              
              {/* Product/Service Copywritten Content */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed tiptap-content">
                
                {/* 1. Service Overview */}
                <h2 id="service-overview">1. Professional Freelancer & Client Payments Recovery Service</h2>
                <p>
                  Freelance consulting, creative design, software development, and professional services form the backbone of the modern digital economy. However, as an independent creator, developer, or agency, you face a chronic, systemic threat: non-payment of invoices. The freelance landscape in India is heavily marked by corporate asymmetry, where clients and middleman agencies count on freelancers quietly absorbing losses due to the high cost, stress, and complexity of traditional legal systems.
                </p>
                <p>
                  Many <strong className="font-extrabold text-[#111827]">freelancers</strong> suffer from "ghosting" - where a client stops responding to emails, Slack threads, or calls once the deliverables have been handed over. In other cases, clients withhold final milestones under the pretext of endless revisions (scope creep), use your unapproved draft assets on production environments without clearing invoices, or abruptly cancel monthly retainer agreements in direct breach of contract terms.
                </p>
                <p>
                  The LegalRecovery <strong className="font-extrabold text-[#111827]">Freelancer and Client Payments Recovery Service</strong> is a specialized pre-litigation pipeline engineered to balance this power dynamic. We have restructured the entire recovery lifecycle into an aggressive, automated, and attorney-verified pre-litigation notice pipeline. Our strategy bypasses junior project coordinators and targets C-suite executives, general counsels, co-founders, and funding partners directly, forcing them to settle your outstanding bills immediately to prevent intellectual property violations and commercial litigation.
                </p>
                <blockquote>
                  <strong>Our Service Promise:</strong> We provide comprehensive, flat-fee recovery support with absolutely <strong>zero commissions</strong> taken on your recovered money. We draft, validate, and serve progressive legal notices designed to reach the highest decision-makers.
                </blockquote>
                <p>
                  No company - regardless of its scale, startup status, or venture funding - can legally use your hard-earned work without paying for it. Let our platform take the burden of writing, executing, and tracking your claims so you can reclaim your outstanding earnings.
                </p>

                {/* 2. What We Help You Recover */}
                <h2 id="coverage-details">2. What We Help You Recover</h2>
                <p>
                  An outstanding gig-economy claim is rarely limited to the basic invoice alone. Our legal panel compiles and details every single component of your outstanding remuneration to maximize the impact of your claim:
                </p>
                
                <h3 id="milestone-payments">A. Milestone & Final Project Payouts</h3>
                <p>
                  We recover outstanding milestone payments and final project balances. If a client has accepted your deliverables (such as software, websites, graphics, or content) and delays the credit indefinitely, we issue a formal demand backed by delivery proofs.
                </p>

                <h3 id="retainer-fees">B. Unpaid Monthly Retainer Fees</h3>
                <p>
                  For ongoing agency contracts and marketing/consulting retainers, we recover unpaid monthly dues and audit contract clauses to enforce payment schedules, late fees, and notice period payouts in case of sudden, unilateral cancellations.
                </p>

                <h3 id="scope-creep">C. Scope Creep & Unauthorized Revisions</h3>
                <p>
                  Clients frequently demand revisions outside the agreed Statement of Work (SOW) without agreeing to extra charges. We leverage the doctrine of *Quantum Meruit* under the Contract Act to demand reasonable, industry-standard compensation for extra hours worked.
                </p>

                <h3 id="contract-breaches">D. Contract Breaches & Premature Terminations</h3>
                <p>
                  If a client terminates a long-term service level agreement (SLA) prematurely without the contractually mandated notice period or without proving gross misconduct, we recover your notice-period pay and severance damages.
                </p>

                <h3 id="unauthorized-work">E. Compensation for Intellectual Property Theft</h3>
                <p>
                  Under Indian law, your creative work is your proprietary asset until paid for. If a client hosts your code, publishes your designs, or runs your ad copy without clearing final bills, we target them under copyright rules, demanding statutory damages for intellectual property infringement.
                </p>

                {/* 3. Our 3+1 Notice Strategy */}
                <h2 id="notice-strategy">3. Our 3+1 Notice Strategy: Engineered for Corporate Pressure</h2>
                <p>
                  Corporate entities ignore single complaint emails, assuming a freelancer will not spend resources pursuing litigation. To counter this, LegalRecovery utilizes an aggressive <strong className="font-extrabold text-[#111827]">3-stage progressive notice pipeline combined with a criminal police complaint draft</strong> to systematically build pressure:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">1</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 1: Advocate Demand Notice</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      We launch a highly authoritative demand notice on a practicing advocate's letterhead. Served via digital pipelines (corporate emails, WhatsApp) and physical registered post, it gives the client a strict 15-day window to settle undisputed invoices.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">2</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 2: Board & Investor Escalation</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      If ignored, we serve Notice 2 directly to the company's Board of Directors, venture capital investors, and major partners. We attach daily interest calculations (up to 18% p.a.) and detail personal director liabilities for willful defaults.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">3</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 3: Pre-Litigation Warning</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      We deliver a final warning package, including finalized drafts of a civil summary recovery suit (Order 37 CPC) or an MSME Samadhaan delayed payment claim, signalling our absolute readiness to initiate formal litigation.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-emerald-600 text-white flex items-center justify-center rounded-full font-black text-xs">+1</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Criminal Police Complaint Draft</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      Simultaneously, we provide you with a meticulously compiled criminal police complaint draft for <strong className="font-extrabold text-[#111827]">Cheating (Section 420 IPC)</strong> and <strong className="font-extrabold text-[#111827]">Criminal Breach of Trust (Section 405/406 IPC)</strong>. Filing this creates immediate, non-bailable pressure.
                    </p>
                  </div>
                </div>
                <p>
                  By moving through these four distinct escalation stages week-by-week, we make it highly expensive, operationally disruptive, and legally risky for the corporate client to continue withholding your money.
                </p>

                {/* 4. The Indian Statutory Shield */}
                <h2 id="legal-framework">4. The Indian Statutory Shield: Know Your Freelancer Rights</h2>
                <p>
                  India's legal framework provides freelance professionals with comprehensive statutory protections. Our advocate panel leverages these specific acts and sections to build an airtight case:
                </p>
                <ul>
                  <li><strong>The Indian Contract Act, 1872:</strong> Explicitly recognizes electronic contracts, email trails, and WhatsApp/Slack chats as legally binding (Sections 10 and 10A). Unilateral non-payment constitutes a severe breach of contract.</li>
                  <li><strong>The Copyright Act, 1597 (Section 19 & 19A):</strong> Dictates that the copyright of any creative work (including software code, designs, video edits, copy) only transfers to the client *after* the contract conditions - specifically the full payment - are cleared. Unauthorized use without paying constitutes copyright infringement.</li>
                  <li><strong>MSMED Act, 2006 & MSME Samadhaan:</strong> If you are Udyam registered (free online process), clients are legally mandated to pay you within 45 days. Delayed payments attract mandatory compound interest calculated at <strong className="font-extrabold text-[#111827]">three times the RBI bank rate</strong> (Section 15/16).</li>
                  <li><strong>Code of Civil Procedure, 1908 (Order 37 Summary Suit):</strong> Provides a summary procedure for fast-track recovery of contractual debts based on written agreements, invoices, or cheque bounce cases.</li>
                  <li><strong>Section 138 of the Negotiable Instruments Act, 1881:</strong> If the client issued a cheque for a milestone payment that subsequently bounced, they face immediate criminal trial, imprisonment, and hefty fines.</li>
                </ul>

                {/* Compare Contract vs IP Protection Table */}
                <div className="my-8">
                  <h3>Contractual Recovery vs. Intellectual Property Protection</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Dispute Category</th>
                        <th>Contractual Claim (Contract Act, 1872)</th>
                        <th>IP & Copyright Claim (Copyright Act, 1957)</th>
                        <th>Optimal Legal Strategy</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Unpaid Milestone Invoice</strong></td>
                        <td>Demand outstanding balance plus late fee interest (p.a.)</td>
                        <td>Demand immediate cessation of hosting, using, or running the asset</td>
                        <td>Advocate Notice citing both Breach of Contract & IP Infringement</td>
                      </tr>
                      <tr>
                        <td><strong>Retainer Termination</strong></td>
                        <td>Recover notice period retainer fees and severance dues</td>
                        <td>Generally not applicable unless creative assets are involved</td>
                        <td>Order 37 CPC Summary Suit or MSME Samadhaan filing</td>
                      </tr>
                      <tr>
                        <td><strong>Scope Creep</strong></td>
                        <td>Demand *Quantum Meruit* compensation for extra hours worked</td>
                        <td>Withhold final delivery of high-res source files until payment is made</td>
                        <td>Email approval logs validation & digital delivery tracking</td>
                      </tr>
                      <tr>
                        <td><strong>Bounced Cheque</strong></td>
                        <td>Recover principal amount plus contractual interest</td>
                        <td>Generally not applicable unless creative assets are involved</td>
                        <td>Section 138 NI Act criminal notice within 30 days of bounce</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 5. Why Online Templates Fail */}
                <h2 id="why-online-templates-fail">5. Why Free Online Freelance Notice Templates Fail</h2>
                <p>
                  Many independent creators try to copy free legal notice formats from online blogs. While this seems cost-effective, it almost always fails to produce results:
                </p>
                <ul>
                  <li><strong>Lack of Attorney Letterhead:</strong> Corporate legal teams immediately recognize home-printed notices as amateur attempts. A formal notice carrying the seal, signature, and letterhead of a registered, practicing advocate establishes a highly real legal threat.</li>
                  <li><strong>Failure to Leverage IP and Copyright Claims:</strong> Free templates usually frame disputes as general money recovery. They fail to outline that using unpaid code or designs is a criminal copyright infringement under Section 63 of the Copyright Act, which is a far more powerful lever to force instant payments.</li>
                  <li><strong>No Digital tracking & Systematic Escalation:</strong> A single speed post letter is easily filed away. LegalRecovery uses real-time digital read-receipt tracking and automated week-by-week escalations to C-suite and investors, building overwhelming pressure.</li>
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
                  LegalRecovery provides professional, attorney-verified freelancer and client payment recovery notice campaigns for a single, flat fee of <strong className="font-extrabold text-[#111827]">₹999</strong>. We charge absolutely zero hidden fees and take zero commission on your recovered money.
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
                          <h3 className="text-2xl font-black text-[#111827] mb-4">Complete Freelancer Recovery</h3>
                          <p className="text-[14px] text-[#4B5563] font-medium leading-[1.6] mb-8">
                            Get full-suite support from expert corporate attorneys. Standardized flat pricing with absolutely zero commission on your recovered amount.
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
                            <Shield className="w-5 h-5 text-[#2563EB] stroke-[3.5] shrink-0" />
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
                <h2 id="documentation-needed">7. The Evidentiary Checklist for Freelancer Recovery</h2>
                <p>
                  To initiate your recovery case on our platform, you must gather simple, standard work records to prove your claim. Our advocates will utilize these records to compile an airtight dispute profile:
                </p>
                <ul>
                  <li><strong>Rent/Service Agreement or statement of Work (SOW):</strong> Outlines the scope of deliverables, agreed pricing, milestones, payment terms, and notice period constraints.</li>
                  <li><strong>Tax Invoices:</strong> Documents the billing date, GST registration details, bank accounts, and payment terms of the disputed transaction.</li>
                  <li><strong>Proof of Work Delivery:</strong> GitHub pull request logs, Figma project links, unboxing/source file download records, or Google Drive folder timestamps showing actual work handover.</li>
                  <li><strong>Email/Chat Conversation history:</strong> Admissible screenshots or PDF logs of emails, Slack threads, or WhatsApp chats proving project approvals and milestone clearances.</li>
                  <li><strong>Bank Account Statement:</strong> Proof of non-payment or partial payment showing the sudden cessation of client transfers.</li>
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
                <p className="text-xs text-gray-500 font-semibold mb-8">Everything you need to know about freelancer and client payment recovery in India</p>
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
                    <p className="text-xs text-gray-500 font-semibold">Real experiences of freelance professionals who recovered payments with us</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0 bg-[#FEF2F2] border border-[#FEE2E2]/60 px-4 py-2.5 rounded-xl w-fit">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className="w-3.5 h-3.5" />
                      ))}
                    </div>
                    <span className="font-black text-xs text-gray-900">4.9 / 5 (52 reviews)</span>
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
              <h3 className="text-base font-extrabold mb-3 tracking-tight">Need Urgent Freelance Recovery?</h3>
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
