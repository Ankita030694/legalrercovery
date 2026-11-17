"use client";

import React, { useState } from "react";

interface Scenario {
  id: string;
  tabLabel: string;
  title: string;
  badge: string;
  triggerEvent: string;
  statutoryBasis: string;
  courtForum: string;
  evidentiaryAnchor: string;
  legalRemedy: string;
  tacticalGuidance: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "storyboard-execution",
    tabLabel: "Campaign Storyboard Theft",
    title: "Brand Rejects Ad Concept, Shoots Identical TVC / Digital Ad via Cheap Production House",
    badge: "Copyright Act s.51 + Breach of Confidence",
    triggerEvent:
      "Agency pitches a 4-scene narrative storyboard with specific character arcs, tagline, and camera angles. Brand emails 'management decided not to proceed', but releases an ad 60 days later with 85% scene-by-scene overlap using an in-house crew.",
    statutoryBasis:
      "Substantial reproduction of artistic and literary work under Section 14 & 51, Copyright Act 1957. Breach of equitable obligation under Zee Telefilms v. Sundial Communications (2003) & Saltman Engineering.",
    courtForum:
      "Commercial Division of High Court (Section 62 Copyright Act allows agency to sue where it carries on business, bypassing debtor's jurisdiction).",
    evidentiaryAnchor:
      "Pitch deck PDF with timestamped email metadata, Watermarked animatic/Figma file, meeting minutes, frame-by-frame visual side-by-side comparison chart.",
    legalRemedy:
      "Ex-parte ad-interim injunction restraining broadcast on TV/YouTube/Meta; Order 39 Rule 7 local commissioner appointment; rendition of accounts of profits earned.",
    tacticalGuidance:
      "Do not rely solely on 'concept theft'. Present an unmistakable frame-by-frame comparison showing copied camera compositions, dialogue cadence, and lighting motifs to meet R.G. Anand's 'lay observer' test.",
  },
  {
    id: "packaging-identity",
    tabLabel: "Packaging & Brand Identity Theft",
    title: "Branding Studio Mockup Rejected, Brand Files Trademark & Launches Packaging with In-House Tweaks",
    badge: "Artistic Copyright Infringement",
    triggerEvent:
      "Studio delivers 3 FMCG packaging route proposals with bespoke typography, custom mascots, and color hierarchies. Brand ceases contact, then launches the product using Route B with a 5% minor color shift and claims 'independent creation'.",
    statutoryBasis:
      "Section 2(c) (Artistic Work) & Section 51, Copyright Act 1957. Springboard doctrine preventing unfair head-start from confidential disclosures (Terrapin Ltd v. Builders' Supply Co).",
    courtForum:
      "Commercial District Court or High Court Original Side; concurrent Copyright & Trademark Registry opposition under s.11/s.18.",
    evidentiaryAnchor:
      "Vector source files (.ai, .fig) with creation timestamps, font licensing records, client NDA/RFP confirmation emails, BSA 2023 s.63 electronic hash certs.",
    legalRemedy:
      "Mandatory delivery-up of all printed packaging, cartons, and labels for destruction; permanent injunction; punitive damages for deliberate piracy.",
    tacticalGuidance:
      "Immediately issue a Cease & Desist placing the brand's distributors and retail super-stockists on notice. Under Section 51(b), knowingly distributing infringing packaging triggers third-party commercial liability.",
  },
  {
    id: "ui-ux-design",
    tabLabel: "UI/UX & App Wireframe Theft",
    title: "SaaS Enterprise Solicits Full Product UI/UX Pitch, Rejects Studio, Ships Architecture via Offshore Coders",
    badge: "Breach of Confidence + Springboard Doctrine",
    triggerEvent:
      "UI/UX agency submits an exhaustive 45-screen design system, user onboarding flow, and interaction prototype for an enterprise dashboard. Prospect cuts communication and delivers the exact wireframe and component tree 90 days later.",
    statutoryBasis:
      "Equitable doctrine of confidential information (Coco v. A.N. Clark) and unjust enrichment. Breach of implied non-disclosure obligation established during RFP negotiations.",
    courtForum:
      "Commercial Division of High Court (Commercial Courts Act 2015, Commercial Dispute under s.2(1)(c)(xvii) intellectual property / trade secrets).",
    evidentiaryAnchor:
      "Figma version logs showing client guest viewer timestamps, pixel-level component library parity, design tokens export, RFP submission receipt.",
    legalRemedy:
      "Interim injunction halting app launch / enterprise SaaS deployment; reasonable royalty valuation based on industry standard agency rate-card; damages for lost pitch fee.",
    tacticalGuidance:
      "Extract Figma audit analytics showing the prospect's product managers inspecting layers and CSS tokens right before the internal build commenced. This completely rebuts their defense of 'independent development'.",
  },
  {
    id: "event-spatial-theft",
    tabLabel: "Event & Exhibition Spatial Theft",
    title: "Experiential Agency Recreates 3D Stall Architecture and Show Flow for Auto/Tech Expo via Local Fabricator",
    badge: "Architectural & 3D Copyright Infringement",
    triggerEvent:
      "Agency submits detailed 3D AutoCAD/Blender renders, lighting rig schematics, and interactive experiential zone layouts for an annual tech summit. Client awards execution to a cheap local stall fabricator at 30% price using agency's CAD drawings.",
    statutoryBasis:
      "Infringement of architectural and artistic works under s.14(c)(i) (reproducing the work in any material form including depiction in three dimensions). Joint tortfeasorship against client and fabricator.",
    courtForum:
      "Commercial Court having territorial jurisdiction where the exhibition or summit is hosted, or where agency registered office is located under s.62.",
    evidentiaryAnchor:
      "Render project files, CAD dwg hashes, vendor communication leaks, pre-event venue walkthrough photos matching render perspective angles.",
    legalRemedy:
      "Immediate ex-parte interim injunction prior to expo setup date; appointment of Court Commissioner to inspect and seize fabricator blueprints; pitch fee recovery notice.",
    tacticalGuidance:
      "Serve the venue authority and expo organizers as pro-forma respondents. Event organizers will refuse entry to stalls facing an active High Court intellectual property stay.",
  },
];

export default function PitchTheftScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const scenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab navigation */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3">
        {SCENARIOS.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Scenario Detail Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider text-red-700 bg-red-100 border border-red-200">
            {scenario.badge}
          </span>
          <span className="text-xs text-slate-500 font-medium">Creditor Escalation Playbook</span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 leading-snug">
          {scenario.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-1">
              Factual Trigger & Commercial Modus
            </p>
            <p className="text-xs text-slate-700 leading-relaxed">{scenario.triggerEvent}</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-1">
              Statutory Basis & Legal Hooks
            </p>
            <p className="text-xs text-slate-700 leading-relaxed">{scenario.statutoryBasis}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-slate-200 rounded-xl p-3.5">
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
              Jurisdiction & Forum
            </span>
            <span className="text-xs font-semibold text-slate-900 leading-snug block">
              {scenario.courtForum}
            </span>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-3.5">
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
              Primary Evidentiary Anchor
            </span>
            <span className="text-xs font-semibold text-slate-900 leading-snug block">
              {scenario.evidentiaryAnchor}
            </span>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-3.5">
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
              High Court Relief Sought
            </span>
            <span className="text-xs font-semibold text-emerald-700 leading-snug block">
              {scenario.legalRemedy}
            </span>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl">
          <span className="text-[11px] uppercase font-bold text-red-800 tracking-wider block mb-1">
            Senior Counsel Tactical Note
          </span>
          <p className="text-xs text-red-900 leading-relaxed">{scenario.tacticalGuidance}</p>
        </div>
      </div>
    </div>
  );
}
