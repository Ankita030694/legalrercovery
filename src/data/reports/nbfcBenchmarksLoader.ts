import fs from "fs";
import path from "path";

export interface DpdBucketBenchmark {
  id: string;
  bucket: string;
  triggerEvent: string;
  primaryStatute: string;
  recommendedWave: string;
  statutoryCureWindow: string;
  unitCostPerAccount: string;
  escalationPath: string;
}

export interface ChannelBenchmark {
  channel: string;
  legalBasis: string;
  deliverySpeed: string;
  evidentiaryRole: string;
  costStructure: string;
  operationalStrength: string;
}

export interface StudyMethodology {
  sampleFrame: string;
  inclusionCriteria: string[];
  exclusionCriteria: string[];
  definitions: {
    cureRate: string;
    costPerRupeeRecovered: string;
    triChannelWave: string;
  };
  dataIntegrity: string;
}

export interface StudySource {
  title: string;
  url: string;
}

export interface NbfcBenchmarksData {
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
  dpdBuckets: DpdBucketBenchmark[];
  channelBenchmarks: ChannelBenchmark[];
  methodology: StudyMethodology;
  sources: StudySource[];
}

export function getNbfcBenchmarksData(): NbfcBenchmarksData {
  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "reports",
    "nbfc-digital-lending-legal-recovery-benchmarks-india.json"
  );

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as NbfcBenchmarksData;
}
