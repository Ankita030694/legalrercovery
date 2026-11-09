import fs from "fs";
import path from "path";

export interface DisputeSegment {
  id: string;
  name: string;
  sampleCount?: number;
  settlement15Days?: number;
  settlement30Days?: number;
  settlement60Days?: number;
  totalSettledRate?: number;
  medianDays?: number;
  medianClaim?: number;
  primaryLeverage: string;
  commonDebtorResponse: string;
  escalationForum: string;
}

export interface TimeframeComparison {
  window: string;
  percentage?: number;
  cumulativePercentage?: number;
  driver: string;
}

export interface StudyMethodology {
  sampleFrame: string;
  inclusionCriteria: string[];
  exclusionCriteria: string[];
  definitions: {
    settlement: string;
    cureWindow: string;
    escalationRate: string;
  };
  dataIntegrity: string;
}

export interface StudySource {
  title: string;
  url: string;
}

export interface LegalNoticeOutcomesStudyData {
  reportId: string;
  slug: string;
  edition: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lastUpdated: string;
  reportingPeriod: string;
  status?: "compiling" | "published";
  hasData?: boolean;
  metrics: {
    totalNoticesTracked: number;
    overallSettlementRate: number;
    settlementWithin15Days: number;
    settlementWithin30Days: number;
    settlementWithin60Days: number;
    escalatedToLitigation: number;
    medianDaysToSettlement: number;
    averageClaimAmount: number;
    preLitigationCostSavingsRatio: number;
  } | null;
  disputeSegments: DisputeSegment[];
  timeframeComparison: TimeframeComparison[];
  methodology: StudyMethodology;
  sources: StudySource[];
}

export function getLegalNoticeOutcomesStudyData(): LegalNoticeOutcomesStudyData {
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "reports",
    "legal-notice-outcomes-study.json"
  );

  if (!fs.existsSync(filePath)) {
    throw new Error(`Report dataset file not found at ${filePath}`);
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as LegalNoticeOutcomesStudyData;
}
