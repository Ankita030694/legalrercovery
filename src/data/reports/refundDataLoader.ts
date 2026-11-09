import * as fs from "fs";
import * as path from "path";

export interface SectorMetric {
  id: string;
  name: string;
  sampleCount: number;
  medianPreNoticeDays: number;
  medianPostNoticeDays: number;
  noticeResolutionRate: number;
  primaryCause: string;
  regulator: string;
  statutoryLimit: string;
}

export interface CompanyBenchmark {
  company: string;
  sector: string;
  sampleSize: number;
  medianPreNoticeDays: number;
  medianPostNoticeDays: number;
  resolutionRate: number;
  primaryDisputeReason: string;
  commonEscalationNoticeTarget: string;
}

export interface ReportMethodology {
  sampleFrame: string;
  inclusionCriteria: string[];
  exclusionCriteria: string[];
  definitions: {
    preNoticeDelay: string;
    postNoticeResolution: string;
    noticeResolutionRate: string;
  };
  dataIntegrity: string;
}

export interface ReportSource {
  title: string;
  url: string;
}

export interface RefundDelayReportData {
  reportId: string;
  slug: string;
  edition: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lastUpdated: string;
  reportingPeriod: string;
  metrics: {
    totalClaimsAnalyzed: number;
    medianDaysPreNotice: number;
    medianDaysPostNotice: number;
    overallResolutionRate: number;
    averageDisputedAmount: number;
    statutoryPenaltyEntitlementRate: number;
  };
  sectors: SectorMetric[];
  companyBenchmarks: CompanyBenchmark[];
  methodology: ReportMethodology;
  sources: ReportSource[];
}

export function getRefundDelayReportData(): RefundDelayReportData {
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "reports",
    "refund-delay-index-india.json"
  );

  if (!fs.existsSync(filePath)) {
    throw new Error(`Report dataset file not found at ${filePath}`);
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as RefundDelayReportData;
}
