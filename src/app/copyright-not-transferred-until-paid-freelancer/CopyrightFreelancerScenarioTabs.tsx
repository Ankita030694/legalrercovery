"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ScenarioTab {
  id: string;
  tabLabel: string;
  title: string;
  cause: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const SCENARIOS: ScenarioTab[] = [
  {
    id: "design-brand-identity",
    tabLabel: "Design & UI/UX Unpaid",
    title: "Client Launched Your Logo, Packaging, or Figma UI Without Paying Final Milestone",
    cause:
      "Designers and studios frequently share exported PNGs, PDFs, or Figma view/edit links during milestone reviews. Once the client gets the visual assets, they ghost on the final 50% milestone invoice, hand the files to an in-house developer or printer, and launch the brand publicly assuming possession of files equals legal ownership.",
    legalBasis:
      "Under Section 17 of the Copyright Act, 1957, logos, original illustrations, typography layouts, and UI wireframes are 'artistic works' whose first owner is the freelance creator (since a freelancer works under a contract FOR service, not employment under s.17(c)). Under Section 19(1) & 19(3), no copyright transfers without a signed written assignment and payment of agreed consideration. Commercial display of unpaid designs violates Section 51.",
    steps: [
      {
        step: "Capture Timestamped Proof of Public Commercial Deployment",
        description:
          "Take full-page screenshots and screen recordings of the client's website, Instagram/LinkedIn posts, app screens, or packaging displaying your unpaid design, alongside your original dated Figma/Illustrator native source layers.",
      },
      {
        step: "Serve a Notice of Licence Revocation & Section 51 Infringement",
        description:
          "Dispatch an advocate legal notice revoking any implied review licence, notifying the client that continued display without clearing the invoice within 7 days constitutes actionable copyright infringement under Sections 51 and 63.",
      },
      {
        step: "Put Hosting, App Store & Social Platforms on Takedown Alert",
        description:
          "Annex a draft Intermediary Takedown Notice (IT Rules 2021 Rule 3(1)(d) / DMCA) to the legal notice. Clients facing imminent removal of their live website or social ad campaigns almost always settle the invoice immediately.",
      },
    ],
    statutoryRule: "Sections 2(c), 17, 19(1), 19(3) & 51 Copyright Act, 1957",
  },
  {
    id: "software-web-code",
    tabLabel: "Code & Website Unpaid",
    title: "Client Deployed Your Source Code, Web App, or Custom Plugin Without Clearing Dues",
    cause:
      "Freelance developers and dev agencies push code to a client's staging repository, GitHub organization, or cloud server (AWS/Vercel) for UAT testing. After deployment goes live, the client revokes repository access and refuses to release the final milestone, claiming minor bugs or 'scope delays'.",
    legalBasis:
      "Under Section 2(o) of the Copyright Act, 1957, computer programs, source code, object code, and technical documentation are protected as 'literary works'. In Pine Labs Pvt. Ltd. v. Gemalto Terminals India Pvt. Ltd. (2011 Del HC DB), the Division Bench ruled that independent software contractors remain the first owner of copyright under Section 17. Deploying unpaid code commercially infringes the developer's exclusive reproduction right under Section 14(b).",
    steps: [
      {
        step: "Export Git Commit Logs, Hash History & Staging Approvals",
        description:
          "Preserve local Git repository clones showing commit timestamps, author emails, pull request approvals, and WhatsApp/Slack messages where the client confirmed UAT sign-off.",
      },
      {
        step: "Serve Dual Copyright + MSME / Contract Demand Notice",
        description:
          "Have an advocate serve a notice combining Section 14(b)/51 software copyright infringement with Section 73 Contract Act damages (and 3x RBI compound interest under Section 16 MSMED Act if you hold Udyam registration).",
      },
      {
        step: "File Repository & Cloud Host Takedown if Default Persists",
        description:
          "If the client ignores the cure period, submit formal copyright takedown notices to GitHub, AWS, Shopify, or Google Play / Apple App Store citing your first ownership under Section 17.",
      },
    ],
    statutoryRule: "Sections 2(o), 14(b), 17 & 19 Copyright Act; Pine Labs (2011) Del HC",
  },
  {
    id: "video-content-copy",
    tabLabel: "Video, Copy & Creators",
    title: "Brand or Agency Running Your Edited Video, Reels, or Copywriting Without Paying",
    cause:
      "Video editors, scriptwriters, photographers, and UGC creators deliver final high-resolution renders or ad scripts to marketing agencies or D2C brands to meet campaign launch dates. The brand runs paid Meta/YouTube ads using the asset while delaying creator payout for 60 to 120 days.",
    legalBasis:
      "Original scripts and articles are literary works, musical scores are musical works, and raw/edited video footage involves dramatic and cinematographic rights. Even where a client claims commissioned ownership under Section 17 Proviso (b), the statute explicitly requires the work to be made 'for valuable consideration'. When a client defaults on paying that consideration, the statutory precondition fails, and Section 57 moral rights also apply.",
    steps: [
      {
        step: "Archive Live Ad Library Links & View Counters",
        description:
          "Save URLs from the Meta Ad Library, YouTube, or brand website showing your video or copy running as a sponsored commercial asset, alongside your raw project files (Premiere/DaVinci timeline).",
      },
      {
        step: "Implead Both the Marketing Agency and End-Client Brand",
        description:
          "If an intermediary agency hired you for a brand campaign and withheld payment, serve the statutory notice jointly on the agency AND the end-brand's marketing/legal head. Brands hate copyright clouds over active ad campaigns.",
      },
      {
        step: "Enforce Payment via Copyright Strike Warning & Legal Notice",
        description:
          "Demand immediate clearance of the invoice within 7 days, failing which formal copyright infringement strikes on YouTube/Instagram and civil recovery proceedings will be initiated.",
      },
    ],
    statutoryRule: "Sections 17(b), 19, 51 & 57 Copyright Act, 1957",
  },
  {
    id: "no-written-contract",
    tabLabel: "No Written Contract",
    title: "No Formal Contract Signed — Work Done on WhatsApp, Email, or Verbal Brief",
    cause:
      "Over 70% of Indian freelance gigs begin without a formal Master Services Agreement. When the client refuses to pay, they often taunt the freelancer by saying: 'You don't even have a signed contract, so you can't do anything.'",
    legalBasis:
      "The absence of a formal signed contract actually HURTS THE CLIENT and PROTECTS THE FREELANCER under copyright law! Why? Because Section 19(1) of the Copyright Act mandates that copyright CANNOT transfer to the client without a written instrument signed by the creator. Meanwhile, for your payment claim, WhatsApp chats, emails, and UPI advance transfers constitute a valid enforceable contract under Section 10 of the Indian Contract Act and Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.",
    steps: [
      {
        step: "Use Section 19(1) as Your Strongest Shield",
        description:
          "Point out in your legal notice that because no written copyright assignment agreement was ever signed under Section 19(1), 100% of the statutory copyright in the delivered work remains vested in you.",
      },
      {
        step: "Establish the Commercial Debt via WhatsApp & Email Trail",
        description:
          "Export the entire WhatsApp chat thread (showing fee quote, scope approval, file delivery, and payment promises) along with GST/proforma invoices under Section 63 BSA, 2023.",
      },
      {
        step: "Claim Quantum Meruit Under Section 70 Contract Act",
        description:
          "Even if exact price milestones were informal, Section 70 of the Indian Contract Act obligates any person who enjoys the benefit of a non-gratuitous act to make full compensation to the creator.",
      },
    ],
    statutoryRule: "Section 19(1) Copyright Act + Sections 10 & 70 Indian Contract Act",
  },
];

export default function CopyrightFreelancerScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const activeScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-100" role="tablist" aria-label="Unpaid Freelancer Copyright Scenarios">
        {SCENARIOS.map((scenario) => (
          <button
            key={scenario.id}
            type="button"
            role="tab"
            aria-selected={activeTab === scenario.id}
            onClick={() => setActiveTab(scenario.id)}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === scenario.id
                ? "bg-[#DC2626] text-white shadow-md shadow-red-900/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {scenario.tabLabel}
          </button>
        ))}
      </div>

      {/* Tab Content Panel */}
      <div className="pt-5 space-y-4" role="tabpanel">
        <div>
          <span className="inline-block px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-black uppercase tracking-wider bg-red-50 text-red-700 border border-red-200 mb-2">
            Statutory Basis: {activeScenario.statutoryRule}
          </span>
          <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900">
            {activeScenario.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
            <strong className="text-slate-900 font-bold block text-xs uppercase tracking-wider">
              How Clients Exploit Creators
            </strong>
            <p className="leading-relaxed">{activeScenario.cause}</p>
          </div>

          <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200/80 space-y-1.5 text-amber-950">
            <strong className="text-amber-900 font-bold block text-xs uppercase tracking-wider">
              Why the Law Is on Your Side
            </strong>
            <p className="leading-relaxed">{activeScenario.legalBasis}</p>
          </div>
        </div>

        {/* Action Steps */}
        <div className="space-y-2.5 pt-2">
          <strong className="text-xs uppercase tracking-wider font-extrabold text-slate-900 block">
            3-Step Copyright Leverage &amp; Recovery Plan:
          </strong>
          <div className="grid grid-cols-1 gap-2.5">
            {activeScenario.steps.map((st, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs"
              >
                <span className="shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{st.step}</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{st.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 text-xs text-slate-500">
          Want to combine copyright takedown leverage with formal debt recovery? Explore all{" "}
          <Link href="/freelancer-payment-recovery-legal-options-india" className="text-blue-700 underline font-semibold">
            freelancer payment recovery legal options in India
          </Link>{" "}
          or check transparent fees on our{" "}
          <Link href="/legal-notice-charges" className="text-blue-700 underline font-semibold">
            legal notice charges
          </Link>{" "}
          page.
        </div>
      </div>
    </div>
  );
}
