import fs from "fs";
import path from "path";

export interface PaymentTermBenchmark {
  id: string;
  term: string;
  riskTier: string;
  primaryVulnerability: string;
  statutoryLever: string;
  edpmsImpact: string;
  recommendedAction: string;
  unitCost: string;
}

export interface TradeCorridorBenchmark {
  corridor: string;
  keySectors: string;
  dominantFailureMode: string;
  enforcementPath: string;
  edpmsRisk: string;
}

export interface EpcBenchmarkEntry {
  council: string;
  segment: string;
  primaryPainPoint: string;
}

export interface ExporterStudyMethodology {
  sampleFrame: string;
  inclusionCriteria: string[];
  exclusionCriteria: string[];
  definitions: {
    edpmsClosureRate: string;
    preLitigationCostRatio: string;
    futileRecoveryDossier: string;
  };
  dataIntegrity: string;
}

export interface ExporterStudySource {
  title: string;
  url: string;
}

export interface ExporterDefaultsReportData {
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
  paymentTerms: PaymentTermBenchmark[];
  tradeCorridors: TradeCorridorBenchmark[];
  epcMatrix: EpcBenchmarkEntry[];
  methodology: ExporterStudyMethodology;
  sources: ExporterStudySource[];
}

export function getExporterDefaultsReportData(): ExporterDefaultsReportData {
  const filePath = path.join(
    /*turbopackIgnore: true*/ process.cwd(),
    "src",
    "data",
    "reports",
    "indian-exporter-payment-defaults-edpms-trends-report.json"
  );

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as ExporterDefaultsReportData;
}
