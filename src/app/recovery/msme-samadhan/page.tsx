import { Metadata } from "next";
import MSMESamadhaanClient from "./MSMESamadhaanClient";

export const metadata: Metadata = {
  title: "Recovery via MSME Samadhan Portal | LegalRecovery",
  description: "Learn how to file a case on the MSME Samadhan portal for delayed B2B payments, upload required documents, and track MSEFC case status step by step.",
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
