import { Metadata } from "next";
import MSMESamadhaanClient from "./MSMESamadhaanClient";

export const metadata: Metadata = {
  title: "Online Dues Recovery via MSME Samadhan Portal | LegalRecovery",
  description: "Struggling to recover B2B delayed payments? Learn how to file a case on the official MSME Samadhan portal (samadhaan.msme.gov.in) step-by-step, upload required documents, and track MSEFC case status.",
  keywords: [
    "MSME Samadhan portal case filing",
    "samadhaan.msme.gov.in delayed payment",
    "MSEFC case online registration",
    "Udyam portal OTP verification",
    "MSME Samadhan status track",
    "affidavit for oral contract MSME",
    "documents required for MSME Samadhan",
    "arbitration conciliation MSEFC",
    "MSEFC case filing timeline",
    "Udyam registration delayed payment portal"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/msme-samadhan',
  },
};

export default function MSMESamadhaanPage() {
  return <MSMESamadhaanClient />;
}
