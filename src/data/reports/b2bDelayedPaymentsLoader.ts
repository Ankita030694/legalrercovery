import reportData from "./b2bDelayedPaymentsReport.json";

export interface IndustryBenchmark {
  code: string;
  sector: string;
  cluster: string;
  statutoryCreditWindow: string;
  dsoRiskTier: string;
  primaryStatute: string;
  secondaryRemedy: string;
  keyEvidence: string;
  cureTrigger: string;
}

export interface ForumBenchmark {
  forum: string;
  pecuniaryFloor: string;
  statutoryWindow: string;
  costProfile: string;
  primaryAdvantage: string;
}

export interface ReportSource {
  title: string;
  url: string;
}

export interface B2BDelayedPaymentsReportData {
  id: string;
  title: string;
  h1: string;
  metaDescription: string;
  lastUpdated: string;
  temporalCoverage: string;
  methodology: {
    scope: string;
    dataBoundary: string;
    rbiBankRate: number;
    msmeCompoundRate: number;
  };
  industries: IndustryBenchmark[];
  forumBenchmarks: ForumBenchmark[];
  sources: ReportSource[];
}

export function getB2BDelayedPaymentsReportData(): B2BDelayedPaymentsReportData {
  return reportData as B2BDelayedPaymentsReportData;
}
