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

const title = "Employer Deducted TDS & PF But Not Deposited? How to Recover (2026)";
const metaTitle = "Employer Deducted TDS & PF Not Deposited: Recovery Guide";
const metaDescription = "Salary slip shows TDS and EPF deducted, but Form 26AS/AIS and EPFO passbook show Rs 0 deposited? Here is how to legally force your employer to pay up.";
const slug = "employer-deducted-tds-pf-not-deposited-fnf-recovery";
const subtitle = "employer deducted tds and pf but not deposited recovery, company deducted tds not showing in 26as legal notice, employer not depositing pf deducted from salary, income tax notice due to employer not depositing tds, fnf tds deducted but form 16 not given, section 276b income tax act employer tds default, recover unremitted pf and fnf salary, section 205 income tax act cbdt circular, epfigms complaint employer not depositing epf, section 316 bns criminal breach of trust salary deduction";

const localHeroImagePath = "/Users/amalegalsolutions/.gemini/antigravity/brain/22871409-3f98-4596-941e-88ec2135ea04/salary_tds_pf_default_recovery_cover_1793000742589.jpg";
const localInfographicPath = "/Users/amalegalsolutions/.gemini/antigravity/brain/22871409-3f98-4596-941e-88ec2135ea04/legal_recovery_tds_epf_fnf_workflow_infographic_1793000764402.jpg";

console.log("Title length:", title.length);
console.log("MetaTitle length:", metaTitle.length);
console.log("MetaDescription length:", metaDescription.length);
console.log("Slug URL length:", ("https://www.legalrecovery.in/blog/" + slug).length);
