import fs from "fs";
import path from "path";

export interface ConsumerAwardEntry {
  id: string;
  month: string;
  sector: "E-Commerce" | "Airlines & Travel" | "Banking & Fintech" | "Real Estate & Housing";
  company: string;
  forum: string;
  caseNumber: string;
  orderDate: string;
  disputeSubject: string;
  claimedAmount: number;
  refundOrdered: number;
  compensationAwarded: number;
  punitiveCosts: number;
  totalRelief: number;
  interestRate: string;
  keyHolding: string;
  orderUrl: string;
}

export interface TrackerSummaryMetrics {
  totalOrdersTracked: number;
  totalCompensationAwarded: number;
  medianDaysToOrder: number;
  averageInterestRateAwarded: number;
  topSectors: { sector: string; count: number; totalAmount: number }[];
  lastUpdated: string;
}

export interface ConsumerAwardsTrackerData {
  reportId: string;
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lastUpdated: string;
  reportingPeriod?: string;
  cadence: string;
  status?: "compiling" | "published";
  hasData?: boolean;
  metrics: TrackerSummaryMetrics | null;
  awards: ConsumerAwardEntry[];
  methodology: {
    dataSources: string[];
    selectionCriteria: string[];
    verificationMethod: string;
    exclusionCriteria: string[];
  };
}

export function getConsumerAwardsTrackerData(): ConsumerAwardsTrackerData | null {
  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "data",
      "reports",
      "consumer-commission-awards-tracker.json"
    );

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as ConsumerAwardsTrackerData;
  } catch (error) {
    console.error("Error loading consumer awards tracker data:", error);
    return null;
  }
}
