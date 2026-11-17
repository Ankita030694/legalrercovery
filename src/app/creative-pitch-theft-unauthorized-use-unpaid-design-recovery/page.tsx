import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import PitchTheftTableOfContents from "./PitchTheftTableOfContents";
import PitchTheftScenarioTabs from "./PitchTheftScenarioTabs";
import PitchTheftNoticeCTA from "./PitchTheftNoticeCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Brand Stole Your Creative Pitch? Indian Copyright & Breach Law",
  description:
    "Did a brand reject your advertising pitch deck and execute your campaign? Enforce Copyright Act s.51 & Breach of Confidence under Zee Telefilms precedents.",
  alternates: {
    canonical: `${SITE_URL}/creative-pitch-theft-unauthorized-use-unpaid-design-recovery`,
  },
  openGraph: {
    title:
      "Brand Rejected Your Pitch—Then Launched Your Exact Campaign? Law",
    description:
      "Invited 6 agencies for an unpaid RFP pitch, emailed 'not selected', and launched your exact storyboard/packaging via an in-house team? Sue under Copyright & Breach of Confidence!",
    url: `${SITE_URL}/creative-pitch-theft-unauthorized-use-unpaid-design-recovery`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Pitch Theft in Indian Advertising & Design: Legal Recovery Mechanism",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Rejected Your Pitch—Then Launched Your Exact Campaign? Law",
    description:
      "Invited 6 agencies for an unpaid pitch and launched your storyboard in-house? Enforce Copyright Act s.51 & Breach of Confidence under Zee Telefilms precedents.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PitchTheftRecoveryPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Pitch Theft in Indian Advertising & Design: Enforcing Breach of Confidence & Copyright Infringement When a Brand Executes Your 'Rejected' Pitch",
    description:
      "Comprehensive legal analysis for Indian advertising, branding, UI/UX, and event agencies on prosecuting creative pitch theft under Section 51 of the Copyright Act, 1957, and the equitable breach of confidence doctrine established in Zee Telefilms v. Sundial Communications.",
    author: {
      "@type": "Organization",
      name: "LegalRecovery.in Editorial Board",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished: "2026-11-17T09:00:00+05:30",
    dateModified: "2026-11-17T09:00:00+05:30",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/creative-pitch-theft-unauthorized-use-unpaid-design-recovery`,
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can an agency sue a brand if no formal NDA was signed prior to the pitch presentation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Under Indian law and the landmark Bombay High Court ruling in Zee Telefilms Ltd v. Sundial Communications Pvt Ltd (2003), an equitable duty of confidentiality arises by operation of law whenever proprietary information is imparted in circumstances where a reasonable person would realize the material is shared in confidence for a limited evaluative purpose. Express contractual NDAs strengthen the evidentiary record, but their absence does not bar an equitable action for breach of confidence or copyright infringement under Section 51.",
        },
      },
      {
        "@type": "Question",
        name: "How does the Supreme Court's 'Idea vs. Expression' test in R.G. Anand apply to pitch decks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In R.G. Anand v. Delux Films (1978), the Supreme Court ruled that while bare, broad concepts or abstract themes cannot be monopolized under copyright, the specific tangible arrangement, literary dialogue, storyboard scenes, graphic layouts, color palettes, and sequential expression are vigorously protected. Furthermore, the Breach of Confidence doctrine bridges the gap where copyright ends: even if an idea is not yet fully fixed in code or cinematography, communicating that commercial concept in confidence prevents the recipient from using it as a springboard without authorization.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Springboard Doctrine in agency RFP disputes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Springboard Doctrine, adopted from English law in Terrapin Ltd v. Builders' Supply Co and confirmed in Indian commercial jurisprudence, dictates that a party who receives confidential designs, creative treatments, or technical architectures cannot use that information as a springboard to jumpstart their own execution—even if they later alter cosmetic elements. They must either license the work or remain handicapped by the time and expense it would take an independent creator to originate the work from scratch.",
        },
      },
      {
        "@type": "Question",
        name: "Can an agency file a suit in its own home city if the brand is headquartered elsewhere?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Unlike ordinary commercial suits under Section 20 of the Code of Civil Procedure which require suing where the defendant resides or where the cause of action arose, Section 62(2) of the Copyright Act, 1957 creates an extraordinary statutory exception. A copyright owner or exclusive licensee can institute infringement proceedings in the District Court or High Court having territorial jurisdiction over the place where the plaintiff actually and voluntarily resides, carries on business, or personally works for gain.",
        },
      },
      {
        "@type": "Question",
        name: "What damages can an advertising agency recover if the brand has already broadcasted the stolen ad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The agency can pray for dual remedies under Section 55 of the Copyright Act: (1) An account of profits earned by the brand attributable to the unauthorized campaign, or compensatory damages reflecting the full agency rate-card pitch fee plus execution markup; and (2) Additional statutory or exemplary damages for deliberate and flagrant infringement. In addition, the agency can seek mandatory delivery-up of all raw project files, print collateral, and master video files for destruction.",
        },
      },
      {
        "@type": "Question",
        name: "What is the evidentiary requirement for electronic pitch decks under Bharatiya Sakshya Adhiniyam, 2023?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA, replacing Section 65B of the Indian Evidence Act), electronic pitch decks, Figma version logs, emails, and cloud storage shares must be tendered with a signed electronic certificate identifying the device, verifying the regular custody and hash integrity of the file, and demonstrating that the computer output was produced without unauthorized tampering.",
        },
      },
    ],
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Advertising, Media & Creative Recovery",
        item: `${SITE_URL}/industries/advertising-marketing-media-event-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Pitch Theft & Unpaid Design Recovery",
        item: `${SITE_URL}/creative-pitch-theft-unauthorized-use-unpaid-design-recovery`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>Copyright Act, 1957 §51</span>
            <span className="text-slate-500">•</span>
            <span>Breach of Confidence</span>
            <span className="text-slate-500">•</span>
            <span>Commercial Courts Act §2(1)(c)</span>
          </div>

          {/* Single H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            Pitch Theft in Indian Advertising & Design: Enforcing Breach of Confidence & Copyright Infringement When a Brand Executes Your &apos;Rejected&apos; Pitch
          </h1>

          {/* Executive Statutory Summary Box */}
          <div
            id="heading-statutory-summary"
            className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
          >
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary &amp; Creditor Standing
            </span>
            When an Indian brand invites creative agencies for an unpaid RFP pitch, marks the agency &apos;not selected&apos;, and launches an identical campaign or packaging identity via an in-house crew or cut-rate vendor, agencies hold enforceable statutory remedies under{" "}
            <strong className="text-white">Section 51 of the Copyright Act, 1957</strong> and equitable claims for{" "}
            <strong className="text-white">Breach of Confidence</strong> established in{" "}
            <em className="text-red-300">Zee Telefilms v. Sundial Communications</em>. For complete multi-spoke remedies across the communications ecosystem, consult our parent{" "}
            <Link
              href="/industries/advertising-marketing-media-event-recovery"
              className="text-red-400 hover:text-red-300 underline font-semibold"
            >
              Advertising, Marketing, Media &amp; Event Recovery Hub
            </Link>
            .
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Jurisdiction Forum
              </p>
              <p className="text-sm sm:text-base md:text-lg font-bold text-slate-100 mt-1">
                Agency Home Court
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">Copyright Act s.62(2)</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Interim Relief
              </p>
              <p className="text-sm sm:text-base md:text-lg font-bold text-emerald-400 mt-1">
                Ex-Parte Injunction
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">CPC Order 39 R.1 &amp; R.2</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Equitable Shield
              </p>
              <p className="text-sm sm:text-base md:text-lg font-bold text-amber-400 mt-1">
                Springboard Rule
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">No Unfair Head-Start</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Limitation Period
              </p>
              <p className="text-sm sm:text-base md:text-lg font-bold text-red-400 mt-1">
                3 Years From Release
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">Limitation Act Art. 88</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Advertising & Media Recovery",
                href: "/industries/advertising-marketing-media-event-recovery",
              },
              {
                label: "Creative Pitch Theft & Unpaid Design Recovery",
                href: "/creative-pitch-theft-unauthorized-use-unpaid-design-recovery",
              },
            ]}
          />
        </div>

        {/* 2-Column Split */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Column Sticky TOC */}
          <PitchTheftTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* SECTION 1: Idea vs Expression Dichotomy (R.G. Anand) */}
            <section
              id="heading-idea-expression-dichotomy"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  01
                </span>
                <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                  Statutory Foundation &amp; Jurisprudence
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 tracking-tight">
                The Idea-Expression Dichotomy in Indian Pitch Thefts: Navigating R.G. Anand v. Delux Films
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                The central defense invariably raised by brand counsel when accused of executing an unpaid agency pitch deck is the venerable copyright doctrine: <em>&ldquo;There is no copyright in an idea.&rdquo;</em> Corporate procurement heads falsely believe that because they did not sign an employment contract, retainership agreement, or vendor agreement with the creative agency, they are at liberty to take the &ldquo;core concept&rdquo; presented in the pitch deck and commission an in-house digital team, an offshore production house, or a local design vendor to execute it.
              </p>

              <div className="border-l-4 border-[#DC2626] bg-slate-50 p-4 sm:p-5 rounded-r-xl mb-6">
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  Landmark Precedent: R.G. Anand v. Delux Films, (1978) 4 SCC 118
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  The Supreme Court of India laid down definitive tests to determine whether an unauthorized adaptation constitutes unlawful copyright infringement or permissible inspiration:
                </p>
                <ul className="text-xs text-slate-700 space-y-2 list-disc list-inside">
                  <li>
                    <strong>The Lay Observer Test:</strong> Infringement occurs if a reasonable viewer or consumer, after seeing both works, gets the unmistakable impression that the defendant&apos;s work is a transparent copy of the plaintiff&apos;s original expression.
                  </li>
                  <li>
                    <strong>Degree of Substantial Similarity:</strong> Where the theme is common, but is presented and treated differently with distinct sub-plots, scenes, and characters, no infringement arises; however, when the sequence of events, visual motifs, dialogue cadence, and character treatments match, substantial copying is established under Section 51.
                  </li>
                  <li>
                    <strong>Colorable Imitation:</strong> A defendant cannot escape liability merely by introducing superficial modifications, varying background colors, or hiring a different voice actor to bypass original expression.
                  </li>
                </ul>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                When an advertising agency prepares a multi-slide presentation featuring specific visual mockups, packaging dielines, UI wireframes, copy headlines, and storyboard frames, it has moved well beyond abstract ideas into the realm of fixed artistic and literary works under{" "}
                <strong>Section 13(1)(a) of the Copyright Act, 1957</strong>. The unauthorized reproduction of that specific expression constitutes direct infringement under Section 51. Where independent freelance designers assisted your agency, ensure your rights are airtight by reviewing our guide on{" "}
                <Link
                  href="/copyright-not-transferred-until-paid-freelancer"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  copyright non-transfer for unpaid design deliverables
                </Link>
                .
              </p>
            </section>

            {/* SECTION 2: Breach of Confidence (Zee Telefilms) */}
            <section
              id="heading-breach-of-confidence"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  02
                </span>
                <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                  The Agency&apos;s Strongest Shield
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 tracking-tight">
                Equitable Action for Breach of Confidence: Zee Telefilms v. Sundial Communications
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                What happens if a brand cunningly alters the surface visual expression just enough to argue before a judge that the lay observer might perceive stylistic differences, but the commercial architecture, narrative conceit, and strategic campaign positioning were unequivocally lifted from your pitch deck?
              </p>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                This is where creative agencies hold an overwhelming legal weapon that corporate legal departments routinely fail to foresee:{" "}
                <strong>The Equitable Action for Breach of Confidence</strong>. In India, confidence operates independently of copyright and does not require fixation or formal copyright registration.
              </p>

              {/* Precedent Deep-Dive Card */}
              <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 mb-6">
                <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
                    Bombay High Court Division Bench
                  </span>
                  <span className="text-[11px] text-slate-400">2003 (5) BomCR 404</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  Zee Telefilms Ltd. &amp; Anr. v. Sundial Communications Pvt. Ltd. &amp; Ors.
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Sundial Communications developed a television serial concept titled <em>&ldquo;Kanhaiya&rdquo;</em> and pitched it to Zee Telefilms under confidential discussions. Zee rejected the proposal, but shortly thereafter commenced production of an identical serial titled <em>&ldquo;Krish Kanhaiya&rdquo;</em>. Sundial sought an injunction. Zee argued that Sundial had no copyright in the religious mythology or broad concept of Lord Krishna visiting a modern family.
                </p>
                <div className="bg-slate-800/80 border-l-4 border-red-500 p-3.5 rounded-r-lg text-xs text-slate-200 leading-relaxed">
                  <strong>The High Court Ruling:</strong> The Court granted an ad-interim injunction against Zee, establishing that breach of confidence is broader than copyright. The Court affirmed the tripartite test formulated by Megarry J. in <em>Coco v. A.N. Clark (Engineers) Ltd</em>:
                  <ol className="list-decimal list-inside mt-2 space-y-1 text-slate-300">
                    <li>The information itself must possess the necessary quality of confidence.</li>
                    <li>The information must have been imparted in circumstances importing an obligation of confidence.</li>
                    <li>There must be an unauthorized use of that information to the detriment of the party communicating it.</li>
                  </ol>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 sm:p-5 text-emerald-900 text-xs sm:text-sm leading-relaxed">
                <strong className="font-bold text-emerald-800 block mb-1">
                  Why Zee Telefilms Eliminates the Need for a Signed NDA:
                </strong>
                The Bombay High Court held that an obligation of confidence does not depend exclusively on a formal written contract. Whenever a business pitch, RFP proposal, or creative deck is delivered to an enterprise for evaluation, the recipient is bound by an implied equitable duty not to exploit or disclose the information without compensating the originator.
              </div>
            </section>

            {/* SECTION 3: Springboard Doctrine */}
            <section
              id="heading-springboard-doctrine"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  03
                </span>
                <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                  Unfair Commercial Acceleration
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 tracking-tight">
                The Springboard Doctrine: Stripping the Brand of Its Head-Start
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                When a brand evaluates six competing agency pitches, it absorbs hundreds of hours of collective market research, consumer personas, tagline architectures, and visual treatments. Even if the brand claims it subsequently told its in-house marketing manager to &ldquo;come up with something fresh&rdquo;, the manager invariably builds upon the blueprint provided by the rejected pitch.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                    Terrapin Ltd v. Builders&apos; Supply Co (1960) RPC 128
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Adopted in Indian commercial law, Roxburgh J. held that a recipient of confidential information must not be allowed to use it as a &ldquo;springboard&rdquo; for activities detrimental to the person who gave the information. Even if the information could theoretically be reverse-engineered later, the unauthorized user must be restrained for the entire duration it would have taken to build it independently.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                    Saltman Engineering Co Ltd v. Campbell Engineering (1948)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lord Greene M.R. affirmed that maintenance of confidence is an equitable duty. If two parties enter commercial negotiations and one party imparts secret materials, drawings, or blueprints, the recipient cannot place themselves in a superior market position by using those materials without paying the agreed fee.
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                In practical litigation, the Springboard Doctrine prevents the brand from arguing that its launch was independent. If the agency proves submission of the pitch deck on June 1st and the brand launched an uncanny variant on August 15th, the impossible turnaround time creates an evidentiary presumption of unauthorized springboard utilization. When past invoices for creative sprints remain unpaid alongside the stolen deck, agencies should immediately initiate formal{" "}
                <Link
                  href="/recovery/pending-project-payment"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  pending project payment recovery proceedings
                </Link>
                .
              </p>
            </section>

            {/* SECTION 4: Statutory Remedy Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  04
                </span>
                <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                  Comparative Statutory Forums
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 tracking-tight">
                Pitch Theft Statutory Matrix: Copyright Act vs Breach of Confidence vs Commercial Courts
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                Creative agencies have multiple concurrent statutory tracks to penalize brand pitch theft. The following matrix illustrates forum selection, limitation stops, court fees, and available judicial remedies.
              </p>

              {/* Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Statutory / Legal Hook</th>
                      <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Governing Section</th>
                      <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Forum &amp; Jurisdiction</th>
                      <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Limitation Period</th>
                      <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Primary Relief Available</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Artistic &amp; Literary Infringement
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">Copyright Act 1957, s.51 &amp; s.55</td>
                      <td className="p-3 sm:p-4 text-slate-700 font-medium text-emerald-700">
                        Agency Home District Court / High Court (s.62(2))
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">3 Years from Date of Infringing Broadcast</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Injunction, Rendition of Accounts, Delivery-up of Assets
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Equitable Breach of Confidence
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">Common Law Equity / Specific Relief Act s.38</td>
                      <td className="p-3 sm:p-4 text-slate-700">Commercial Court / High Court Original Side</td>
                      <td className="p-3 sm:p-4 text-slate-700">3 Years from Date of Knowledge</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Springboard Injunction, Restitutionary Damages
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Summary Money Recovery (Pitch Fee / Kill Fee)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">CPC 1908, Order 37 Rule 1 &amp; 2</td>
                      <td className="p-3 sm:p-4 text-slate-700">Commercial Civil Court where RFP was tendered</td>
                      <td className="p-3 sm:p-4 text-slate-700">3 Years from Invoice Due Date</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Immediate Summary Money Decree without trial (unless leave to defend granted)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Criminal Copyright Piracy &amp; Cheating
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">Copyright Act s.63 &amp; BNS 2023 s.318(4)</td>
                      <td className="p-3 sm:p-4 text-slate-700">Chief Judicial Magistrate / Police Cyber Cell</td>
                      <td className="p-3 sm:p-4 text-slate-700">3 Years under BNSS s.468</td>
                      <td className="p-3 sm:p-4 text-slate-700 text-red-600 font-semibold">
                        Search &amp; Seizure of Master Files; Imprisonment 6 mos to 3 yrs
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: Interactive Scenarios */}
            <section
              id="heading-interactive-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  05
                </span>
                <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                  Interactive Agency Playbooks
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 tracking-tight">
                Pitch Theft Commercial Scenarios: Select Your Agency Domain
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Explore real-world commercial failure modes across ad campaigns, packaging identities, UI/UX systems, and experiential expo designs.
              </p>

              <PitchTheftScenarioTabs />
            </section>

            {/* SECTION 6: Worked Damage Assessment */}
            <section
              id="heading-worked-damage-assessment"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  06
                </span>
                <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                  Quantifying Agency Damages
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 tracking-tight">
                Financial Calculation: Assessing Damages for Pitch Deck Piracy
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                In copyright and breach of confidence litigation, Indian Commercial Courts calculate compensation through either (a) The License Fee / Reasonable Royalty Approach, or (b) The Account of Profits Approach under Section 55 of the Copyright Act. Below is an illustrative worked damage ledger for an agency whose packaging and launch storyboard were pirated by a retail FMCG brand.
              </p>

              <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-md mb-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
                    Damage Quantification Ledger • FMCG Campaign Piracy
                  </span>
                  <span className="text-xs text-slate-400">Commercial Suit Valuation</span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      1. Baseline Creative Strategy &amp; Identity Retainer (Industry Standard Rate)
                    </span>
                    <span className="font-mono text-slate-100 font-bold">₹18,00,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      2. Campaign Execution Fee (4 TVC Storyboards &amp; 12 Packaging Variants)
                    </span>
                    <span className="font-mono text-slate-100 font-bold">₹24,50,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      3. Unjust Enrichment / Head-Start Benefit Saved by Debtor Brand
                    </span>
                    <span className="font-mono text-slate-100 font-bold">₹12,00,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800 text-emerald-400">
                    <span>
                      4. Rendition of Attributable Net Profits (Quarterly Product Launch Revenue @ 3.5%)
                    </span>
                    <span className="font-mono font-bold">₹38,50,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800 text-amber-400">
                    <span>5. Exemplary &amp; Punitive Damages for Deliberate Breach of Confidence</span>
                    <span className="font-mono font-bold">₹15,00,000</span>
                  </div>
                  <div className="flex justify-between pt-3 text-base sm:text-lg font-black text-white">
                    <span>Total Claim Value (Commercial Division High Court)</span>
                    <span className="font-mono text-red-400">₹1,08,00,000</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                When filing before a Commercial Court, securing this claim amount allows the agency to seek an ad-interim pre-judgment security order under{" "}
                <strong>Order 38 Rule 5 of the Code of Civil Procedure</strong>, requiring the brand to deposit security in court or risk attachment of its marketing bank accounts. If your firm needs to serve a formal demand before initiating this suit, utilize our advocate-backed{" "}
                <Link
                  href="/send-a-legal-notice/for-business-to-recover-their-unpaid-dues"
                  className="text-[#DC2626] hover:underline font-semibold"
                >
                  B2B commercial unpaid dues notice format
                </Link>
                .
              </p>
            </section>

            {/* SECTION 7: Evidence & BSA Section 63 Checklist */}
            <section
              id="heading-evidence-bsa-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  07
                </span>
                <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                  Evidentiary Architecture
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 tracking-tight">
                Pitch Theft Evidence Dossier &amp; BSA 2023 Section 63 Compliance
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                In digital copyright and breach of confidence suits, the brand will argue that their team independently conceptualized the work or that the agency&apos;s deck was merely casual exploratory chatter. You must assemble an unimpeachable electronic chain of custody under{" "}
                <strong>Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                    1. Pitch Submission Chain &amp; RFP Record
                  </h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>Original RFP invitation email from brand procurement or CMO.</li>
                    <li>Timestamped outbound email delivering the PDF / Keynote deck.</li>
                    <li>Signed visitor logbook or calendar invite confirmation of pitch meeting.</li>
                    <li>Audio recordings / meeting minutes verifying attendees&apos; identity.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                    2. Native Creation Timestamps (.AI, .FIG, .PRPROJ)
                  </h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>Original Adobe Illustrator / Photoshop vector files with creation metadata.</li>
                    <li>Figma version history logs showing user IDs and exact creation timestamps.</li>
                    <li>Font licenses, stock footage receipts, and model release agreements.</li>
                    <li>Cryptographic SHA-256 hash checksum generated on the date of submission.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                    3. Frame-by-Frame Comparative Infringement Chart
                  </h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>Split-screen visual juxtaposition: Agency Storyboard vs Brand Broadcast.</li>
                    <li>Color hex-code comparison chart proving packaging palette duplication.</li>
                    <li>Tagline and copy cadence analysis highlighting identical syntax.</li>
                    <li>Affidavit of an independent creative director attesting to substantial copying.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                    4. Statutory Certificate under BSA 2023 s.63
                  </h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>Affidavit by Agency IT Head / System Administrator.</li>
                    <li>Identification of server, computer terminals, and cloud storage instances.</li>
                    <li>Certification that the digital output was produced during regular operations.</li>
                    <li>Assertion that no tampering or manipulation occurred during storage.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 8: Debtor Defense Pre-Emption Table */}
            <section
              id="heading-debtor-defense-preemption"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  08
                </span>
                <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                  Litigation Pre-Emption
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 tracking-tight">
                Debtor Defense Pre-Emption Table: How Indian Brands Deflect Pitch Theft
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                Corporate brand legal teams utilize a predictable playbook of defenses when served with an infringement notice. Here is how senior commercial counsel dismantles each defense.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Brand&apos;s Stated Defense</th>
                      <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Underlying Debtor Argument</th>
                      <th className="p-3 sm:p-4 font-bold border-b border-slate-800">Senior Counsel Rebuttal &amp; Precedent</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        &ldquo;No Contract / No Signed NDA&rdquo;
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        The agency participated voluntarily in an unpaid RFP; since no formal NDA was executed, all pitched concepts entered the public domain.
                      </td>
                      <td className="p-3 sm:p-4 text-slate-800">
                        <strong className="text-red-700">Rebutted by Zee Telefilms (2003):</strong> An equitable duty of confidence arises automatically from the confidential nature of RFP evaluations, requiring no written contractual instrument.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        &ldquo;Independent Development&rdquo;
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        The brand claims its in-house creative team arrived at the exact same concept independently without viewing the agency&apos;s deck.
                      </td>
                      <td className="p-3 sm:p-4 text-slate-800">
                        <strong className="text-red-700">Rebutted by Substantial Similarity &amp; Timing:</strong> Production turnaround within weeks of viewing the pitch destroys the probability of coincidence; court orders production of in-house draft logs.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        &ldquo;Scènes à Faire / Common Industry Motif&rdquo;
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        The visual elements (e.g., family breakfast, festive shopping) are generic industry clichés that cannot be monopolized by any agency.
                      </td>
                      <td className="p-3 sm:p-4 text-slate-800">
                        <strong className="text-red-700">Rebutted by R.G. Anand (1978):</strong> While generic themes are free, the idiosyncratic juxtaposition of characters, specific dialogue, and layout hierarchy is protected artistic expression.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        &ldquo;Copyright Belongs to the Client under Work-for-Hire&rdquo;
                      </td>
                      <td className="p-3 sm:p-4 text-slate-600">
                        Brand argues that soliciting the pitch makes them the commissioning author under Section 17(c) of the Copyright Act.
                      </td>
                      <td className="p-3 sm:p-4 text-slate-800">
                        <strong className="text-red-700">Rebutted by Section 17 &amp; s.19:</strong> Commissioning ownership requires valuable consideration (payment). Unpaid pitch submissions remain the exclusive copyright of the agency.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Notice Callout CTA */}
            <PitchTheftNoticeCTA />

            {/* SECTION 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  09
                </span>
                <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                  Practitioner Knowledge Base
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 tracking-tight">
                Frequently Asked Questions on Pitch Theft &amp; Design Recovery
              </h2>

              <div className="space-y-4">
                <details className="group border border-slate-200 rounded-xl p-4 sm:p-5 [&_summary::-webkit-details-marker]:hidden bg-slate-50/50">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-xs sm:text-sm">
                    <span>Can an agency sue a brand if no formal NDA was signed prior to the pitch presentation?</span>
                    <span className="ml-4 shrink-0 transition-transform group-open:rotate-180 text-slate-400">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Yes. Under Indian law and the landmark Bombay High Court ruling in{" "}
                    <em>Zee Telefilms Ltd v. Sundial Communications Pvt Ltd (2003)</em>, an equitable duty of confidentiality arises by operation of law whenever proprietary information is imparted in circumstances where a reasonable person would realize the material is shared in confidence for a limited evaluative purpose. Express contractual NDAs strengthen the evidentiary record, but their absence does not bar an equitable action for breach of confidence or copyright infringement under Section 51.
                  </p>
                </details>

                <details className="group border border-slate-200 rounded-xl p-4 sm:p-5 [&_summary::-webkit-details-marker]:hidden bg-slate-50/50">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-xs sm:text-sm">
                    <span>How does the Supreme Court&apos;s &apos;Idea vs. Expression&apos; test in R.G. Anand apply to pitch decks?</span>
                    <span className="ml-4 shrink-0 transition-transform group-open:rotate-180 text-slate-400">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    In <em>R.G. Anand v. Delux Films (1978)</em>, the Supreme Court ruled that while bare, broad concepts or abstract themes cannot be monopolized under copyright, the specific tangible arrangement, literary dialogue, storyboard scenes, graphic layouts, color palettes, and sequential expression are vigorously protected. Furthermore, the Breach of Confidence doctrine bridges the gap where copyright ends: even if an idea is not yet fully fixed in code or cinematography, communicating that commercial concept in confidence prevents the recipient from using it as a springboard without authorization.
                  </p>
                </details>

                <details className="group border border-slate-200 rounded-xl p-4 sm:p-5 [&_summary::-webkit-details-marker]:hidden bg-slate-50/50">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-xs sm:text-sm">
                    <span>What is the Springboard Doctrine in agency RFP disputes?</span>
                    <span className="ml-4 shrink-0 transition-transform group-open:rotate-180 text-slate-400">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The Springboard Doctrine, adopted from English law in <em>Terrapin Ltd v. Builders&apos; Supply Co</em> and confirmed in Indian commercial jurisprudence, dictates that a party who receives confidential designs, creative treatments, or technical architectures cannot use that information as a springboard to jumpstart their own execution—even if they later alter cosmetic elements. They must either license the work or remain handicapped by the time and expense it would take an independent creator to originate the work from scratch.
                  </p>
                </details>

                <details className="group border border-slate-200 rounded-xl p-4 sm:p-5 [&_summary::-webkit-details-marker]:hidden bg-slate-50/50">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-xs sm:text-sm">
                    <span>Can an agency file a suit in its own home city if the brand is headquartered elsewhere?</span>
                    <span className="ml-4 shrink-0 transition-transform group-open:rotate-180 text-slate-400">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Yes. Unlike ordinary commercial suits under Section 20 of the Code of Civil Procedure which require suing where the defendant resides or where the cause of action arose, <strong>Section 62(2) of the Copyright Act, 1957</strong> creates an extraordinary statutory exception. A copyright owner or exclusive licensee can institute infringement proceedings in the District Court or High Court having territorial jurisdiction over the place where the plaintiff actually and voluntarily resides, carries on business, or personally works for gain.
                  </p>
                </details>

                <details className="group border border-slate-200 rounded-xl p-4 sm:p-5 [&_summary::-webkit-details-marker]:hidden bg-slate-50/50">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-xs sm:text-sm">
                    <span>What damages can an advertising agency recover if the brand has already broadcasted the stolen ad?</span>
                    <span className="ml-4 shrink-0 transition-transform group-open:rotate-180 text-slate-400">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The agency can pray for dual remedies under Section 55 of the Copyright Act: (1) An account of profits earned by the brand attributable to the unauthorized campaign, or compensatory damages reflecting the full agency rate-card pitch fee plus execution markup; and (2) Additional statutory or exemplary damages for deliberate and flagrant infringement. In addition, the agency can seek mandatory delivery-up of all raw project files, print collateral, and master video files for destruction.
                  </p>
                </details>

                <details className="group border border-slate-200 rounded-xl p-4 sm:p-5 [&_summary::-webkit-details-marker]:hidden bg-slate-50/50">
                  <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-xs sm:text-sm">
                    <span>What is the evidentiary requirement for electronic pitch decks under Bharatiya Sakshya Adhiniyam, 2023?</span>
                    <span className="ml-4 shrink-0 transition-transform group-open:rotate-180 text-slate-400">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA, replacing Section 65B of the Indian Evidence Act), electronic pitch decks, Figma version logs, emails, and cloud storage shares must be tendered with a signed electronic certificate identifying the device, verifying the regular custody and hash integrity of the file, and demonstrating that the computer output was produced without unauthorized tampering.
                  </p>
                </details>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
