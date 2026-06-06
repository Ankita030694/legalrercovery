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
    question: "What is the official URL for the MSME Samadhan portal?",
    answer: "The only official website of the MSME Samadhan portal is https://samadhaan.msme.gov.in. Exporters and B2B vendors must avoid unofficial websites that charge fee for registration."
  },
  {
    question: "How do I log in to the MSME Samadhan portal?",
    answer: "You log in using your valid Udyam Registration Number. The portal uses mobile OTP authentication linked to your Udyam profile or the Aadhaar card of the authorized representative."
  },
  {
    question: "What documents must I upload when filing an MSME Samadhan application?",
    answer: "You must upload PDF files (under 1MB each) containing your Udyam Certificate, Purchase/Work Orders, Invoices, bank ledger statements, payment reminders, and a stamp paper affidavit if the agreement was oral."
  },
  {
    question: "Is there a limit on the number of invoices I can upload in a single case?",
    answer: "The portal has fields for individual invoice uploads. Typically, you can enter up to 3 or 5 invoices in a single application. If you have more, you must combine them into a single consolidated PDF file and enter the aggregate details."
  },
  {
    question: "What should I upload if I do not have a written Purchase Order?",
    answer: "If you served the client based on oral instructions, you must draft and sign an affidavit on stamp paper declaring the oral agreement, work description, delivery, and payment terms, and upload it as a PDF."
  },
  {
    question: "How can I track the status of my Samadhan application?",
    answer: "You can track your case by clicking 'Check Case Status' on the homepage. Enter your Udyam Registration Number or the unique Application/Case Number received upon submission."
  },
  {
    question: "What does 'Case Admitted' status mean on the portal?",
    answer: "It means the regional MSEFC has scrutinized your documents and accepted your application for formal conciliation proceedings, issuing a notice to the buyer."
  },
  {
    question: "How long does it take for a case to be resolved on the portal?",
    answer: "Under Section 18(5) of the MSMED Act, the council is mandated to resolve the dispute (conciliation and arbitration) within ninety (90) days from the reference date."
  },
  {
    question: "Can the buyer ignore the notice sent by the MSME Samadhan portal?",
    answer: "If the buyer ignores the 15-day notice or fails to respond, the case is automatically escalated to conciliation and subsequently to statutory arbitration, where the MSEFC can pass an ex-parte award."
  },
  {
    question: "What is the fee for filing an application on the Samadhan portal?",
    answer: "There is no fee for filing a case on the government portal. However, if the dispute is referred to an institutional arbitration center, nominal administrative or arbitrator fees may apply."
  },
  {
    question: "Can I edit my application after final submission on the portal?",
    answer: "No, once submitted, the application cannot be edited. If there are critical errors or missing documents, you must withdraw the application and file a fresh one."
  },
  {
    question: "What happens if the buyer goes into liquidation during the Samadhan proceedings?",
    answer: "Under the Insolvency and Bankruptcy Code (IBC), a moratorium under Section 14 is placed on all recovery actions. The MSEFC proceedings are stayed, and the supplier must file a claim with the Resolution Professional."
  },
  {
    question: "Does the portal allow filing against individual consumers or retail buyers?",
    answer: "No, the MSMED Act delayed payment protection is strictly B2B. You can only file against a buyer who is a business entity, corporate firm, government department, or PSU."
  },
  {
    question: "What is the role of the Conciliation Officer on the portal?",
    answer: "The Conciliation Officer or regional MSME official reviews the online case, schedules mediation meetings, facilitates negotiation, and records the settlement deed."
  },
  {
    question: "How does the Section 19 pre-deposit rule protect the MSEFC award?",
    answer: "It requires the buyer to deposit 75% of the total awarded award in court before they can challenge or appeal the award, deterring buyers from using courts to delay payment."
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
      "name": "Recovery",
      "item": "https://www.legalrecovery.in/recovery"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "MSME Samadhan Portal Recovery",
      "item": "https://www.legalrecovery.in/recovery/msme-samadhan"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "MSME Samadhan Portal Online Filing Guide | Delayed Payments Recovery",
  "description": "Comprehensive step-by-step guide on filing B2B payment recovery cases on the MSME Samadhan portal. Learn about Udyam login, document checklist, and MSEFC status workflow.",
  "image": "https://www.legalrecovery.in/og-msme-samadhan.png",
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
  "datePublished": "2026-06-06",
  "dateModified": "2026-06-06"
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
  "name": "MSME Samadhan Portal Support Services",
  "image": "https://www.legalrecovery.in/og-msme-samadhan.png",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "description": "Advocate-backed legal assistance for filing, tracking, and representing cases on the MSME Samadhan Portal (samadhaan.msme.gov.in) in India.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "580"
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
        "name": "Deepak Sharma"
      },
      "reviewBody": "We were struggling to recover ₹9,40,000 from a manufacturing buyer for over 5 months. LegalRecovery guided us on how to format our invoices, verified our Udyam details, and filed the case on the MSME Samadhan portal. Within 12 days of receiving the automated notice, the buyer settled our dues. Highly effective support!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rajesh Nair"
      },
      "reviewBody": "Our consulting firm had a milestone payment of ₹6,20,000 stuck with a client who raised fake delivery disputes. LegalRecovery helped us compile our emails, draft an affidavit, and file on the portal. The regional MSEFC conciliation summoned their board directors, who agreed to pay immediately. Truly professional service!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Anil Jain"
      },
      "reviewBody": "A large brand delayed payments for our plastic molds shipment by 8 months. LegalRecovery drafted a notice citing the MSME Samadhan threat, and calculated our compound interest. The brand paid our principal and interest before we even completed portal submission. Excellent legal leverage!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sanjay Mehta"
      },
      "reviewBody": "We were facing payment defaults from a public sector buyer. LegalRecovery filed our petition on samadhaan.msme.gov.in. The official conciliation meetings under the MSEFC panel resolved our issues, clearing our ₹14,50,000 pending payments. Very satisfied!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Radhika Sen"
      },
      "reviewBody": "Our advertising firm won an MSEFC award, but the buyer challenged it in court. LegalRecovery enforced the Section 19 provision, making them deposit 75% of the total amount. The buyer agreed to settle our dues immediately rather than block their funds. Brilliant result!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vinay Singhal"
      },
      "reviewBody": "A buyer raised a fake quality dispute to withhold payments. LegalRecovery’s panel advocates successfully contested the quality claims in the arbitration phase by presenting our pre-dispatch reports. The arbitrator ordered the buyer to clear all dues with penal interest. High quality support!"
    }
  ]
};

export default function MSMESamadhaanClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "msme-samadhan-portal-overview", title: "1. MSME Samadhan Portal Overview & Digital System" },
    { id: "step-by-step-filing-document-requirements", title: "2. Step-by-Step Filing Procedure & Document Requirements" },
    { id: "msefc-scrutiny-case-status-workflow", title: "3. MSEFC Scrutiny & Case Status Workflow" },
    { id: "conciliation-arbitration-award-execution", title: "4. Conciliation, Arbitration, and Award Execution" },
    { id: "msme-advocate-notices-samadhan-strategy", title: "5. Advocate Notices & Samadhan Strategy" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "MSME Samadhan Portal", href: "/recovery/msme-samadhan" },
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
              MSME Samadhan Support Portal
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Online Dues Recovery via <span className="text-[#DC2626]">MSME Samadhan</span> Portal
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Struggling to recover B2B delayed payments? Learn how to file a case on the official MSME Samadhan portal (samadhaan.msme.gov.in) step-by-step, upload required documents, and track MSEFC case status.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Samadhan Filing
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
                
                {/* Section 1: MSME Samadhan Portal Overview & Digital System */}
                <section id="msme-samadhan-portal-overview" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">1. MSME Samadhan Portal Overview &amp; Digital System</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The MSME Samadhan Portal, accessible at the official government website <strong>samadhaan.msme.gov.in</strong>, is a specialized digital platform launched by the Ministry of Micro, Small and Medium Enterprises (MSME) to facilitate B2B dispute resolution in India. Before the introduction of this portal, small business owners, manufacturers, and service vendors had to rely on traditional civil courts to recover outstanding debts. This was a process that could take years, draining the working capital and resources of the enterprise. The Samadhan portal was created to bridge this gap, acting as a digital gateway that allows micro and small enterprises (MSEs) to file claims online and seek relief under the delayed payment provisions of Chapter V of the MSMED Act, 2006.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      It is critical to distinguish the MSME Samadhan portal from other statutory dispute resolution platforms in India, such as the Real Estate Regulatory Authority (RERA) portal, the state Labour Commissioner's conciliation portals (like SAMADHAN for industrial disputes), or the Debt Recovery Tribunal (DRT) e-filing systems. RERA is designed to protect homebuyers from builder defaults, labor portals conciliate employment disputes, and DRT handles recovery suits by banks. The MSME Samadhan portal, by contrast, is a B2B commercial debt recovery system. It is designed specifically for registered micro and small suppliers to claim unpaid invoices from commercial buyers, including private limited companies, MNCs, and public sector undertakings (PSUs). It is a specialized, advocate-backed digital system that tracks transactions, flags defaulting buyers, and coordinates with state-level facilitation councils.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The digital system operates as a transparent monitoring database. Every application filed on the portal is visible on a public dashboard, displaying the names of defaulting buyers, the outstanding amounts, and the progress of the cases. This transparency acts as a powerful reputational check. Large corporate houses and listed companies are highly sensitive to having their names listed on a government portal for payment defaults, as it affects their ESG scores, credit ratings, and corporate standing. The portal links the supplier, the buyer, the regional Micro and Small Enterprise Facilitation Council (MSEFC), and the Ministry of MSME, ensuring administrative oversight. This integrated network helps speed up the process, allowing for faster tracking and resolution of cases.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, the portal serves as a central data source for policy decisions. The Ministry of MSME uses the outstanding dues data to identify sectors with high default rates and implement corrective measures. It also helps AD Category-I banks monitor FEMA compliance, ensuring that delayed payment entries do not lead to caution-listing on the EDPMS portal. For small business owners, the portal provides a user-friendly, paperless mechanism to raise complaints and secure their payments without incurring heavy litigation expenses.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel specializes in helping small businesses utilize the MSME Samadhan portal to recover their outstanding dues. We analyze your commercial records, verify your Udyam credentials, and draft the required portal petitions. We help you present a documented history of your transactions and navigate the MSEFC conciliation and arbitration stages. We help you assert your rights, ensuring that defaulting corporate buyers are held accountable under the law.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;The MSME Samadhan portal is a powerful digital enforcement tool. Leveraging this platform allows micro and small businesses to recover commercial debts quickly under the protective provisions of the MSMED Act.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Step-by-Step Filing Procedure & Document Requirements */}
                <section id="step-by-step-filing-document-requirements" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">2. Step-by-Step Filing Procedure &amp; Document Requirements</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Filing a case on the MSME Samadhan portal requires careful preparation and strict compliance with the portal's technical and legal requirements. The filing process begins with a verification of eligibility. To file an application, the supplier must be registered as a Micro or Small Enterprise (MSE) and hold a valid <strong>Udyam Registration Certificate</strong> (medium enterprises are excluded from this mechanism). The supplier must log in to the portal using their Udyam Registration Number and enter the mobile number linked to the registration. The system verifies these details using data from the Udyam database, sending a one-time password (OTP) to the registered mobile number. Once authenticated, the user is redirected to the main application dashboard to enter the transaction and invoice details.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The application form requires entering detailed information about both the supplier and the buyer. The supplier must enter the buyer's corporate identity number (CIN), name, registered office address, email address, and contact numbers. Accurate buyer details are essential, as the portal uses these details to send automated notices and official summons. The supplier must also enter the details of the outstanding invoices, including invoice numbers, dates, principal amounts, and the dates the goods or services were delivered and accepted. Crucially, the application must include the compound interest due under Section 16 of the MSMED Act. This interest is calculated at three times (3x) the RBI bank rate, compounded monthly, from the day following the statutory due date (usually 45 days from delivery).
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The supporting documents must be uploaded in PDF format, with a strict size limit of 1 megabyte (1MB) per document. The required documents include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Udyam Registration Certificate:</strong> confirming the supplier's registration status.</li>
                      <li><strong>Purchase Orders (PO) or Work Orders:</strong> proving the contractual agreement.</li>
                      <li><strong>Commercial Invoices:</strong> detailing the disputed amounts.</li>
                      <li><strong>Delivery Proof:</strong> such as signed delivery challans, lorry receipts (LR), or email acknowledgments.</li>
                      <li><strong>Payment Reminders:</strong> copies of email trails, letters, or WhatsApp messages requesting payment.</li>
                      <li><strong>Stamp Paper Affidavit:</strong> if the agreement was oral, the supplier must upload an affidavit declaring the terms of the transaction, which must be executed on appropriate stamp paper and notarized.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Because the portal limits individual uploads, exporters and vendors often combine multiple invoices or purchase orders into a single consolidated PDF file. If you have several outstanding bills against the same buyer, you should enter the aggregate details on the form and attach the combined PDF. This consolidation makes it easier for the council to review the transaction trail, preventing administrative delays.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Exporters and vendors must avoid common errors that can lead to the rejection of their applications. A frequent mistake is filing before the statutory 45-day window has expired. The portal will reject applications if the invoice is not overdue by at least 45 days from acceptance. Another error is uploading poor-quality or illegible PDFs, which can cause the council to reject the case during scrutiny. Additionally, the Udyam Certificate must be kept current, reflecting any updates to business address or classification. Our legal team assists suppliers in auditing their documentation, preparing notarized oral agreement affidavits, and filing their cases on the portal, ensuring compliance with all requirements.
                    </p>
                  </div>
                </section>

                {/* Section 3: MSEFC Scrutiny & Case Status Workflow */}
                <section id="msefc-scrutiny-case-status-workflow" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">3. MSEFC Scrutiny &amp; Case Status Workflow</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Once an application is submitted on the MSME Samadhan portal, it enters a structured administrative and legal workflow. The case status is updated dynamically, allowing both the supplier and the buyer to track the progress online using the unique application or case number. The first stage is <strong>MSEFC Scrutiny</strong>. The regional council, composed of representatives from industry associations, banking institutions, and government officials, reviews the application. They verify the supplier's Udyam registration, check the dates of the invoices against the registration date to ensure the contract was entered into post-registration, and examine the proof of delivery. If the documents are incomplete or the dispute falls outside the council's jurisdiction, the application is rejected, and the supplier must file a fresh case.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the application passes scrutiny, the case status changes to <strong>Case Admitted</strong>, and a formal <strong>Notice to Buyer</strong> is issued. The portal sends an automated notification to the buyer's email address, and the council dispatches a physical notice to their registered corporate office. The notice informs the buyer that a case has been filed, detailing the outstanding principal and compound interest, and gives them a <strong>15-day notice period</strong> to respond. The buyer must either pay the dues directly to the supplier or file a detailed reply showing a genuine dispute. If the buyer pays the outstanding amount, the supplier updates the portal, and the case status changes to <strong>Mutual Settlement</strong>, closing the file.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the buyer refuses to pay or fails to respond within 15 days, the case is referred for formal conciliation, and the status changes to <strong>Referred to Conciliation</strong>. The MSEFC schedules joint mediation sessions, summoning both parties to appear. If conciliation fails due to the buyer's non-cooperation or lack of a settlement, the status changes to <strong>Referred to Arbitration</strong>. The council then initiates statutory arbitration under Section 18(3) of the Act. Once the arbitration is concluded, the council passes a final award, and the status changes to <strong>Case Disposed</strong>, allowing the supplier to execute the award in court.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Understanding the meaning of each case status is essential to manage the recovery process effectively. For instance, if the status remains in &quot;Pending Scrutiny&quot; for more than 30 days, it indicates that the regional council is facing a backlog or requires additional documents. Suppliers must be proactive in responding to clarification requests, uploading supplementary files if required to avoid rejection.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our legal team helps you monitor your case status, respond to council queries, and prepare for hearings. We interface with the regional MSME council officials, ensuring that your application is processed efficiently and moved through the workflow without unnecessary administrative delays.
                    </p>
                  </div>
                </section>

                {/* Section 4: Conciliation, Arbitration, and Award Execution */}
                <section id="conciliation-arbitration-award-execution" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">4. Conciliation, Arbitration, and Award Execution</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The dispute resolution process under the MSMED Act, 2006 is structured as a two-stage mechanism, designed to encourage mutual settlements before moving to binding arbitration. The first stage is the <strong>Conciliation Phase</strong> under Section 18(2) of the Act. The MSEFC acts as a conciliation body, summoning both the supplier and the buyer to appear before a Conciliation Officer or a designated panel. The council's role is to facilitate negotiations and help the parties reach an amicable settlement. If a settlement is reached, a formal <strong>Settlement Deed</strong> is signed, which has the same legal weight as an arbitral award. If the buyer defaults on the settlement terms, the supplier can execute the deed directly in court.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the buyer fails to attend the conciliation meetings, or if the negotiations fail, the council terminates the conciliation phase and refers the dispute to the <strong>Arbitration Phase</strong> under Section 18(3). The MSEFC can choose to arbitrate the dispute itself or refer it to an institutional arbitration center (such as the Delhi International Arbitration Centre - DIAC or the Mumbai Centre for International Arbitration - MCIA). The council acts as an arbitral tribunal under the Arbitration and Conciliation Act, 1996, conducting formal hearings, examining witness statements, and reviewing arguments. Exporters and B2B vendors are advised to be represented by qualified advocates during this phase to present their evidence and counter the buyer's objections.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Upon concluding the hearings, the tribunal passes a final binding <strong>Arbitration Award</strong>. If the buyer refuses to comply, the award can be enforced in the local civil court as a decree. A major protection for the supplier is the <strong>Section 19 Pre-Deposit Rule</strong>. If the buyer wishes to challenge or appeal the award, they must <strong>deposit seventy-five percent (75%) of the awarded amount</strong> (including the principal and the accrued compound interest) with the court before the appeal can be heard. This requirement prevents buyers from filing frivolous appeals to delay payment. Once the court receives the deposit, it can release a portion to the supplier during the appeal, providing critical financial support.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Once the arbitration award is passed, it represents a valid debt certificate. The supplier can file an execution petition in the District Court where the buyer's assets or bank accounts are located. The court can issue attachment orders, freezing the buyer's bank accounts, appointing receivers to manage their property, or directing the sale of their assets to satisfy the award, providing a highly effective enforcement path.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our legal team represents suppliers during these hearings, defends awards against challenges, and handles the court execution process to recover the dues. We ensure that your case is argued strongly, protecting your right to receive both the principal amount and the statutory compound interest.
                    </p>
                  </div>
                </section>

                {/* Section 5: Advocate Notices & Samadhan Strategy */}
                <section id="msme-advocate-notices-samadhan-strategy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">5. Advocate Notices &amp; Samadhan Strategy</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A successful recovery strategy using the MSME Samadhan portal begins before the online application is filed, utilizing pre-litigation advocate notices to pressure the buyer. Many corporate buyers ignore standard email reminders or demand letters from small suppliers. However, receiving a formal <strong>Advocate-Signed Legal Notice</strong> on a law firm's letterhead, outlining the details of a planned Samadhan portal filing, is far more effective. The notice cites Section 15 and 16 of the MSMED Act, warns of the 3x RBI compound interest penalty, and highlights the reputational impact of having the company's name listed on a public government database.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The notice also emphasizes the tax consequences under Section 23 of the Act. Because interest paid on delayed MSME payments is <strong>not tax-deductible</strong>, buyers face a substantial financial penalty. Corporate legal departments are highly sensitive to this rule, and when they receive a notice outlining the tax implications, they often advise their management to settle the outstanding amount immediately during the notice period. The notice also warns of parallel legal actions, such as summary suits under Order 37 CPC, insolvency petitions under the IBC, or cheque bounce cases under Section 138 NI Act, raising the stakes for the buyer.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel drafts custom notices tailored to your specific transaction. We include detailed interest calculations and reference your Udyam Certificate, leaving no room for the buyer to claim ignorance. We send the notice via Registered Speed Post with Acknowledgment Due (AD) to the company's registered corporate office, and send copies to the personal residential addresses of the directors. Piercing the corporate veil in this manner ensures that the directors are personally aware of the dispute, which often prompts the company's legal team to propose a settlement to protect their management from litigation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Additionally, we leverage notifications to trade bodies and chambers of commerce to impact the buyer's business reputation. This can prompt them to resolve the dispute to protect their creditworthiness. If the buyer responds with a settlement offer, we help you negotiate the terms and draft a binding settlement deed. This deed includes clear milestone dates, payment channels (wire transfers with SWIFT details), and a default clause that automatically activates the full original claim in case of default. By combining pre-litigation notices with the threat of portal filing, we help you recover your dues quickly and protect your business from cash-flow crises.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Most corporate entities prefer to clear outstanding invoices rather than face public listing on a government portal. By setting out a clear timeline for portal filing and outlining the legal consequences of non-compliance, our notices provide the leverage needed to secure a prompt settlement, helping you avoid lengthy litigation and protect your cash flow.
                    </p>
                  </div>
                </section>

                {/* Reviews Section */}
                <section id="reviews-section" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-6">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviewSchema.review.map((rev, idx) => (
                      <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <p className="text-slate-650 text-xs sm:text-sm italic mb-4 leading-relaxed">
                          &quot;{rev.reviewBody}&quot;
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="font-extrabold text-slate-800 text-xs sm:text-sm">{rev.author.name}</span>
                          <div className="flex items-center gap-0.5 text-amber-500">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQs Section */}
                <section id="faqs-section" className="scroll-mt-32 border-t border-slate-100 pt-10">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => {
                      const isOpen = expandedFaqs.includes(`faq-${index}`);
                      return (
                        <div key={index} className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all bg-white hover:border-slate-300">
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-5 text-left font-extrabold text-slate-900 hover:text-[#DC2626] transition-colors focus:outline-none text-xs sm:text-base"
                          >
                            <span>{faq.question}</span>
                            <span className="ml-4 flex-shrink-0 text-slate-400">
                              {isOpen ? (
                                <svg className="w-5 h-5 text-[#DC2626]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                </svg>
                              ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                </svg>
                              )}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5 pt-1 text-slate-650 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
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

            {/* Right Sidebar - CTA Cards */}
            <div className="hidden lg:block sticky top-24 space-y-6">
              
              {/* Quick Summary Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-left">
                <h3 className="text-sm font-black text-slate-900 mb-4 tracking-tight uppercase border-b border-slate-100 pb-2">
                  Recovery Summary
                </h3>
                <ul className="space-y-3.5 text-xs font-bold text-slate-500">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Portal: samadhaan.msme.gov.in
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Upload Limit: PDF format under 1MB
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Validation: Mobile OTP via Udyam
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Scrutiny: Council review of invoices
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Workflow: Filed &rarr; Admitted &rarr; Conciliated
                  </li>
                </ul>
              </div>

              {/* Legal Consultation Card */}
              <div className="bg-gradient-to-br from-[#111827] to-[#020617] text-white p-6 rounded-2xl shadow-md relative overflow-hidden border border-slate-900 text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#DC2626] opacity-15 rounded-full blur-2xl pointer-events-none" />
                <h3 className="text-sm font-black mb-2 uppercase tracking-wide text-white">
                  Need Expert Help?
                </h3>
                <p className="text-[11px] text-slate-400 font-semibold mb-4 leading-relaxed">
                  Our corporate and MSME advocates specialize in MSEFC filings, Samadhan portal cases, and fast-track debt recovery. Let us handle your legal notices and arbitration.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-3 px-4 rounded-xl text-xs transition-colors cursor-pointer text-center block"
                >
                  Consult Advocate Now
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Modal form */}
        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />

      </div>
    </>
  );
}
