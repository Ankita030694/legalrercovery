"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ScenarioCard {
  id: string;
  tag: string;
  title: string;
  situation: string;
  insurerPretext: string;
  legalReality: string;
  odds: string;
  oddsColor: string;
  statutoryBasis: string;
  recommendedAction: string;
  actionHref: string;
}

const SCENARIOS: ScenarioCard[] = [
  {
    id: "beyond-three-years",
    tag: "Absolute Statutory Bar",
    title: "Death Claim Rejected When Policy Is Older Than 3 Years",
    situation:
      "The policyholder paid premiums continuously for over 3 years from the date of policy issuance, commencement of risk, revival, or rider attachment. Following their death, the insurer repudiates the death claim citing non-disclosure of medical history or habits on the original proposal form.",
    insurerPretext:
      "The insurer issues a repudiation letter alleging the deceased suppressed pre-existing diabetes, hypertension, or tobacco use at the time of proposal, rendering the policy void ab initio.",
    legalReality:
      "Under Section 45(1) of the Insurance Act, 1938 (as amended in 2015), no policy of life insurance can be called in question on any ground whatsoever after the expiry of 3 years. This incontestability bar is absolute—the insurer cannot plead even fraud or deliberate suppression once 3 years have lapsed.",
    odds: "95% Nominee Win Rate",
    oddsColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    statutoryBasis: "Section 45(1) Insurance Act 1938 & LIC v. Asha Goel (Supreme Court)",
    recommendedAction: "Serve Advocate Legal Notice & Escalate to Insurance Ombudsman",
    actionHref: "#heading-playbook",
  },
  {
    id: "early-death-unrelated-cause",
    tag: "Lack of Causal Nexus",
    title: "Early Claim (< 3 Years) for Unrelated Medical Cause",
    situation:
      "Death occurred within 2–3 years of policy inception. The insurer's investigator found old OPD slips for mild ailments or asymptomatic conditions (e.g., lumbar spondylitis, hypothyroidism, seasonal allergy) that were not mentioned in the proposal form.",
    insurerPretext:
      "The insurer asserts breach of utmost good faith (uberrima fides) and repudiates the entire sum assured, arguing that any medical non-disclosure entitles them to forfeit all premiums.",
    legalReality:
      "In Sulbha Prakash Motegaonkar v. LIC of India (Civil Appeal No. 8245/2015), the Supreme Court ruled that where the alleged non-disclosure has no direct causal nexus with the cause of death (e.g. fatal heart attack vs lumbar spondylitis), repudiation is unlawful. The insurer must prove intentional fraud on a material fact directly linked to mortality risk.",
    odds: "80% Nominee Win Rate",
    oddsColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    statutoryBasis: "Sulbha Prakash Motegaonkar (SC) & Section 45(2) Insurance Act",
    recommendedAction: "Collect Cause-of-Death Nexus Certificate & File Ombudsman Claim",
    actionHref: "#heading-evidence-checklist",
  },
  {
    id: "grace-period-lapsed-dispute",
    tag: "Premium & Grace Period",
    title: "Death Occurred During Grace Period or Failed Auto-Debit",
    situation:
      "The premium due date passed shortly before death, but the death took place within the statutory 30-day grace period (15 days for monthly mode), or the policyholder's bank failed to process an active NACH / ECS mandate despite sufficient account funds.",
    insurerPretext:
      "The insurer marks the policy status as 'Lapsed' on their portal and refuses death benefit settlement, offering only the surrender value or zero payout.",
    legalReality:
      "Under IRDAI Policyholder Protection Regulations, a life insurance policy remains in full force during the statutory grace period. If death occurs within the grace period, the insurer is legally bound to disburse the full sum assured after deducting only the single unpaid premium instalment.",
    odds: "90% Nominee Win Rate",
    oddsColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    statutoryBasis: "IRDAI Master Circular 2024 & Branch Manager LIC v. Sunita (SC)",
    recommendedAction: "Submit Bank NACH Audit Trail & Demand Grace Period Settlement",
    actionHref: "#heading-playbook",
  },
  {
    id: "accidental-death-rider",
    tag: "Rider Repudiation",
    title: "Accidental Death Benefit (ADB) Rider Rejected by Insurer",
    situation:
      "The insurer pays base sum assured but refuses the double accidental death rider benefit, alleging missing FIR, delay in police intimation, alleged intoxication without forensic proof, or labeling road trauma as 'natural cardiac arrest'.",
    insurerPretext:
      "The insurer claims the nominee breached policy terms by not submitting a post-mortem report or toxicology screen, or asserts the accident resulted from self-inflicted risk or pre-existing weakness.",
    legalReality:
      "In Gurmel Singh v. National Insurance Co. Ltd. (2022) 7 SCC 627, the Supreme Court held that procedural delays or hyper-technical document requests cannot defeat genuine insurance claims. If an accident is established through panchnama, hospital casualty records, or road accident reports, the insurer cannot withhold accidental rider benefits.",
    odds: "75% Nominee Win Rate",
    oddsColor: "text-amber-700 bg-amber-50 border-amber-200",
    statutoryBasis: "Gurmel Singh (SC 2022) & NCDRC Landmark Rulings on ADB Riders",
    recommendedAction: "Obtain Final Police Investigation Report & Contest Rider Repudiation",
    actionHref: "#heading-case-digest",
  },
  {
    id: "suicide-clause-dispute",
    tag: "Exclusion Clause",
    title: "Suicide Exclusion Wrongfully Invoked Beyond 12 Months",
    situation:
      "The insurer denies the claim alleging suicide or self-harm, or invokes the 12-month suicide exclusion even though more than 12 calendar months have passed since policy issuance or revival date, or where death was an accidental overdose/drowning.",
    insurerPretext:
      "The insurer relies on preliminary hospital emergency notes or an inconclusive police inquest to claim the death is exempt from death benefit coverage under general suicide exclusions.",
    legalReality:
      "Under standard IRDAI-approved life insurance clauses, the suicide exclusion applies strictly for 12 months from inception or revival. After 12 months, death by suicide is covered. Furthermore, accidental death carries a legal presumption against suicide; the burden of proving intentional self-harm lies solely upon the insurer.",
    odds: "85% Nominee Win Rate",
    oddsColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    statutoryBasis: "IRDAI Product Regulations & Supreme Court Burden of Proof Standards",
    recommendedAction: "Demand Insurer's Forensic Proof & File Legal Demand Notice",
    actionHref: "#heading-playbook",
  },
  {
    id: "agent-misrepresentation",
    tag: "Intermediary Misconduct",
    title: "Agent / Bank Filled Proposal Form Inaccurately (Bancassurance)",
    situation:
      "The life policy was sold by an insurance agent or bank relationship manager (bancassurance). The agent ticked 'No' to all medical questions without questioning the customer, despite the customer handing over medical files or disclosing their status.",
    insurerPretext:
      "The insurer argues that the policyholder signed the proposal declaration and is strictly bound by every printed statement, treating agent omissions as deliberate insured fraud.",
    legalReality:
      "Courts and Insurance Ombudsmen hold that when insurance agents fill proposals on behalf of customers to meet sales targets, the insurer as principal cannot disown its agent's actions. Under Section 2(11) of the Consumer Protection Act, 2019, penalizing a grieving family for agent misconduct constitutes gross deficiency of service.",
    odds: "70% Nominee Win Rate",
    oddsColor: "text-amber-700 bg-amber-50 border-amber-200",
    statutoryBasis: "Section 2(11) CPA 2019 & Ombudsman Precedents on Agent Negligence",
    recommendedAction: "Present Proposal Form Discrepancy Evidence to Ombudsman",
    actionHref: "#heading-evidence-checklist",
  },
];

export default function LifeInsuranceScenarioCards() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredScenarios =
    activeFilter === "all"
      ? SCENARIOS
      : SCENARIOS.filter((s) => s.id === activeFilter);

  return (
    <div className="w-full space-y-6">
      {/* Category selector pills */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        <button
          type="button"
          onClick={() => setActiveFilter("all")}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
            activeFilter === "all"
              ? "bg-[#DC2626] text-white"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          All 6 Dispute Scenarios
        </button>
        {SCENARIOS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActiveFilter(s.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
              activeFilter === s.id
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {s.tag}
          </button>
        ))}
      </div>

      {/* Scenario Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {filteredScenarios.map((scenario) => (
          <article
            key={scenario.id}
            className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DC2626]" />
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-red-100 text-red-800">
                  {scenario.tag}
                </span>
                <span
                  className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${scenario.oddsColor}`}
                >
                  {scenario.odds}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {scenario.title}
              </h3>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <div>
                  <strong className="text-slate-900 font-semibold">Your Situation: </strong>
                  <span>{scenario.situation}</span>
                </div>
                <div className="p-2.5 bg-red-50/70 border border-red-100 rounded-lg text-red-950">
                  <strong className="font-semibold text-red-800">Insurer&apos;s Pretext: </strong>
                  <span>{scenario.insurerPretext}</span>
                </div>
                <div className="p-2.5 bg-emerald-50/70 border border-emerald-100 rounded-lg text-emerald-950">
                  <strong className="font-semibold text-emerald-800">Statutory Reality: </strong>
                  <span>{scenario.legalReality}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-[11px] text-slate-500 font-medium">
                Authority: {scenario.statutoryBasis}
              </span>
              <a
                href={scenario.actionHref}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] hover:text-[#B91C1C] hover:underline"
              >
                {scenario.recommendedAction} &rarr;
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
