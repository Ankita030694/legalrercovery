import * as fs from "fs";
import * as path from "path";

export interface PayerSegmentBenchmark {
  id: string;
  payerCategory: string;
  medianDsoDays: number;
  interquartileRange: string;
  statutoryTargetDays: string;
  averageDeductionRate: string;
  primaryDisputeTypes: string;
  statutoryRemedy: string;
  recoveryEfficiency: string;
}

export interface BedCapacityBenchmark {
  category: string;
  medianDsoDays: number;
  workingCapitalLockedPercent: string;
  badDebtWriteOffRate: string;
  primaryBottleneck: string;
}

export interface HealthcareStudyMethodology {
  sampleFrame: string;
  inclusionCriteria: string[];
  exclusionCriteria: string[];
  definitions: {
    dso: string;
    tpaShortSettlementRate: string;
    statutoryPenalInterest: string;
    dischargeUndertaking: string;
  };
  dataIntegrity: string;
}

export interface HealthcareStudySource {
  title: string;
  url: string;
}

export interface HealthcareTpaReportData {
  reportId: string;
  slug: string;
  edition: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lastUpdated: string;
  reportingPeriod: string;
  status: "compiling" | "published";
  hasData: boolean;
  payerSegments: PayerSegmentBenchmark[];
  benchmarksByBedCapacity: BedCapacityBenchmark[];
  methodology: HealthcareStudyMethodology;
  sources: HealthcareStudySource[];
}

export function getHealthcareTpaReportData(): HealthcareTpaReportData {
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "reports",
    "healthcare-tpa-settlement-delay-hospital-receivables-india.json"
  );

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as HealthcareTpaReportData;
}
