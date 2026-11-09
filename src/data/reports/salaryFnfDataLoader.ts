import fs from "fs";
import path from "path";

export interface SectorWageMetric {
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

export interface DisputeCauseMetric {
  cause: string;
  percentage: number;
  averageDeduction: number;
  legalStatus: string;
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

export interface SalaryFnFReportData {
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
    statutoryTwoDayNonComplianceRate: number;
    arbitraryDeductionsPrevalence: number;
    recoveryWithoutCourtLitigationRate: number;
  };
  sectors: SectorWageMetric[];
  disputeCauses: DisputeCauseMetric[];
  methodology: ReportMethodology;
  sources: ReportSource[];
}

export function getSalaryFnFReportData(): SalaryFnFReportData {
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "reports",
    "salary-fnf-dispute-report-2026.json"
  );

  if (!fs.existsSync(filePath)) {
    throw new Error(`Salary & FnF Report dataset file not found at ${filePath}`);
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as SalaryFnFReportData;
}
