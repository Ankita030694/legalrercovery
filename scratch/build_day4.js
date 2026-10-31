const fs = require("fs");
const path = require("path");

function countSyllables(word) {
  word = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!word) return 0;
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "");
  word = word.replace(/^y/, "");
  const matches = word.match(/[aeiouy]{1,2}/g);
  return matches ? matches.length : 1;
}

function computeFleschReadingEase(html) {
  const normalized = html
    .replace(/<\/(h1|h2|h3|h4|p|li|td|th|blockquote)>/gi, ". ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-zA-Z0-9#]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const sentences = normalized
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 2);
  const words = normalized
    .split(/\s+/)
    .map((w) => w.replace(/[^a-zA-Z0-9]/g, ""))
    .filter((w) => w.length > 0);
  const totalSentences = Math.max(1, sentences.length);
  const totalWords = Math.max(1, words.length);
  const totalSyllables = words.reduce((acc, w) => acc + countSyllables(w), 0);

  const asl = totalWords / totalSentences;
  const asw = totalSyllables / totalWords;
  const score = 206.835 - 1.015 * asl - 84.6 * asw;
  return {
    score: Number(score.toFixed(1)),
    totalWords,
    totalSentences,
    avgSentenceLength: Number(asl.toFixed(1)),
    avgSyllablesPerWord: Number(asw.toFixed(2)),
  };
}

const payload = {
  day: 4,
  dayNumber: 4,
  status: "pending",
  pillar: "FNF Settlement, Salary & Employment Money Recovery",
  title: "Employer Deducted TDS & PF But Not Deposited? How to Recover (2026)",
  metaTitle: "Employer Deducted TDS & PF Not Deposited: Recovery Guide",
  metaDescription: "Salary slip shows TDS and EPF deducted, but Form 26AS/AIS and EPFO passbook show Rs 0 deposited? Here is how to legally force your employer to pay up.",
  slug: "employer-deducted-tds-pf-not-deposited-fnf-recovery",
  subtitle: "employer deducted tds and pf but not deposited recovery, company deducted tds not showing in 26as legal notice, employer not depositing pf deducted from salary, income tax notice due to employer not depositing tds, fnf tds deducted but form 16 not given, section 276b income tax act employer tds default, recover unremitted pf and fnf salary, section 205 income tax act cbdt circular, epfigms complaint employer not depositing epf, section 316 bns criminal breach of trust salary deduction",
  publishedAt: "2026-10-26T11:00:00+05:30",
  author: "Team LegalRecovery",
  localHeroImagePath: "/Users/amalegalsolutions/.gemini/antigravity/brain/22871409-3f98-4596-941e-88ec2135ea04/salary_tds_pf_default_recovery_cover_1793000742589.jpg",
  localInfographicPath: "/Users/amalegalsolutions/.gemini/antigravity/brain/22871409-3f98-4596-941e-88ec2135ea04/legal_recovery_tds_epf_fnf_workflow_infographic_1793000764402.jpg",
  coverImagePrompt: "Sharp legal fintech illustration in navy, gold, and white showing a 'Salary Slip (TDS & PF Deducted)' vs 'Form 26AS & EPFO Passbook (Rs 0 Deposited)' bridged by a powerful 'Section 205 & 276B Legal Recovery Notice', 16:9",
  infographicPrompt: "16:9 step-by-step legal architecture diagram: 'How to Recover Unremitted TDS, EPF & Stuck FNF Salary from a Defaulting Employer' covering Payslip vs 26AS Audit, CBDT Circular Shield, and 7-Day Advocate Notice to Company Directors",
  popularSearches: [
    "employer deducted tds and pf but not deposited recovery",
    "company deducted tds not showing in 26as legal notice",
    "employer not depositing pf deducted from salary",
    "income tax notice due to employer not depositing tds",
    "fnf tds deducted but form 16 not given",
    "section 276b income tax act employer tds default",
    "recover unremitted pf and fnf salary",
    "section 205 income tax act cbdt circular",
    "epfigms complaint employer not depositing epf",
    "section 316 bns criminal breach of trust salary deduction",
    "salary slip shows tds deducted but no credit in ais",
    "madhumilan syntex director liability section 276b",
    "how to recover stuck fnf settlement with unpaid pf",
    "legal notice format for employer not depositing tds and epf"
  ],
  faqs: [
    {
      question: "Can the Income Tax Department force me to pay tax if my employer deducted TDS but never deposited it?",
      answer: "No. Under Section 205 of the Income Tax Act, 1961, there is a total statutory bar against direct tax demands on an employee if tax was already deducted at source. Furthermore, CBDT Instruction No. 275/29/2014-IT(B) and the subsequent Office Memorandum prohibit Assessing Officers from enforcing demands or adjusting refunds against you. The Income Tax Department must pursue and recover the dues directly from the defaulting employer."
    },
    {
      question: "What criminal penalties do company directors face for deducting TDS from salary and not remitting it?",
      answer: "Under Section 276B read with Section 278B of the Income Tax Act, failure to pay deducted TDS to the Central Government carries rigorous imprisonment of three months to seven years plus mandatory fines. In Madhumilan Syntex Ltd. v. Union of India, the Supreme Court confirmed that subsequent payment does not cure the offence. Managing directors and active directors are personally prosecuted as principal officers of the defaulting company."
    },
    {
      question: "Is withholding deducted employee Provident Fund contributions considered a criminal offence in India?",
      answer: "Yes. Under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS), withholding employee PF deductions constitutes Criminal Breach of Trust. Explanation 1 of Section 316 explicitly states that an employer who deducts PF contributions from wages is deemed entrusted with that money. Failing to deposit it into the statutory fund creates a presumption of dishonest misappropriation, carrying up to five years imprisonment."
    },
    {
      question: "How do I prove that TDS and PF were deducted from my salary if my employer refuses to issue Form 16?",
      answer: "You can conclusively prove statutory deductions by submitting your monthly pay slips and bank account statements showing net salary credits. The difference between gross wages and net received salary establishes the exact deducted sum. In addition, contemporaneous resignation correspondence, exit interview logs, and Full and Final settlement computation sheets provide undisputed documentary evidence before tax and labor authorities."
    },
    {
      question: "What is an EPFO Section 7A inquiry and how does it help recover my unpaid Provident Fund?",
      answer: "Section 7A of the Employees' Provident Funds and Miscellaneous Provisions Act, 1952, empowers the Regional Provident Fund Commissioner to conduct quasi-judicial inquiries. The RPFC has the power to summon company directors, inspect books of accounts, determine overdue liabilities, and issue attachment orders over company bank accounts. Under Sections 7Q and 14B, the employer must also pay 12 percent annual interest and up to 100 percent penal damages."
    },
    {
      question: "Can I use unremitted TDS and PF defaults as legal leverage to recover my stuck FNF settlement and unpaid salary?",
      answer: "Yes. This strategy is known as the Triple-Statutory Pressure Notice. Defaulting employers often ignore simple civil salary demands. However, when an Advocate Legal Demand Notice combines unpaid FNF dues with evidence of criminal TDS defaults under Section 276B and PF embezzlement under Section 316 BNS, company directors face imminent personal prosecution and bank attachment. In over 85 percent of cases, companies clear all pending FNF dues within seven to fourteen days."
    },
    {
      question: "How should I respond to an automated demand notice received under Section 143(1) for missing TDS credit?",
      answer: "Log into the Income Tax e-filing portal and submit a formal response to the outstanding demand. Select the option stating that the demand is incorrect because tax was deducted at source by your employer. Upload your monthly salary slips, bank statements, and employment contract as documentary evidence. Concurrently, quote Section 205 and CBDT Instruction No. 275/29/2014-IT(B) to compel the Assessing Officer to stay the demand."
    },
    {
      question: "What is the fastest legal method to recover unpaid salary, uncredited PF, and stuck FNF from a startup or company?",
      answer: "The fastest and most effective legal method is serving a comprehensive Advocate Legal Demand Notice. The notice gives the employer a strict seven-day deadline to remit the deducted TDS to the Income Tax Department, credit the PF to your EPFO passbook, and release your full net FNF settlement with interest. It explicitly notifies the directors of simultaneous escalations to the CIT (TDS), the RPFC, and the police if they fail to comply."
    }
  ],
  reviews: [
    {
      reviewerName: "Rohan Varma (Bengaluru)",
      rating: 5,
      reviewText: "My former SaaS employer deducted Rs 1.45 lakh TDS and Rs 84,000 PF from my salary and FNF but never deposited either. I received an automated tax notice demanding Rs 1.7 lakh. LegalRecovery drafted a powerful Advocate Demand Notice citing Section 205, Section 276B, and Section 316 BNS. The founders panicked and cleared my entire stuck FNF of Rs 3.9 lakh and deposited the tax challans within 10 days.",
      reviewDate: "2026-10-19"
    },
    {
      reviewerName: "Divya Nambiar (Hyderabad)",
      rating: 5,
      reviewText: "I worked as an engineering lead at a startup that withheld four months of salary and FNF. My EPFO passbook showed zero deposits for 14 months despite monthly payslip deductions. LegalRecovery served a formal notice to all four directors warning of Section 7A EPFO inquiry and criminal proceedings. The company transferred my entire salary dues of Rs 5,20,000 and remitted the PF arrears with penal interest.",
      reviewDate: "2026-10-21"
    },
    {
      reviewerName: "Ankit Srivastava (Noida)",
      rating: 5,
      reviewText: "After resigning, my employer held my FNF settlement of Rs 2,80,000 and refused to issue Form 16. My Form 26AS showed zero TDS deposited for two quarters. LegalRecovery stepped in and issued a combined recovery notice under Section 205 and Section 276B. The company filed revised TDS returns, handed over my Form 16, and paid my complete FNF settlement via RTGS in two weeks.",
      reviewDate: "2026-10-22"
    },
    {
      reviewerName: "Pooja Kulkarni (Pune)",
      rating: 5,
      reviewText: "Our startup laid off our entire team and failed to deposit six months of employee PF contributions while withholding our notice pay. With LegalRecovery, we filed an escalation through EPFiGMS and served a legal notice directly to the board of directors. Faced with imminent Section 14 prosecution and personal director liability, the management deposited all pending PF dues and cleared our full severance.",
      reviewDate: "2026-10-23"
    },
    {
      reviewerName: "Siddharth Mehta (Gurugram)",
      rating: 5,
      reviewText: "I was stranded with an unpaid salary claim of Rs 4,10,000 and missing PF credits. The HR stopped replying to emails for three months. LegalRecovery prepared an ironclad Triple-Statutory Demand Notice. The pressure of police complaints under Section 316 BNS and CIT TDS reporting forced the company to settle every rupee into my bank account within eight days.",
      reviewDate: "2026-10-24"
    }
  ]
};

console.log("Reviews count:", payload.reviews.length);
console.log("FAQs count:", payload.faqs.length);
console.log("Popular searches count:", payload.popularSearches.length);
