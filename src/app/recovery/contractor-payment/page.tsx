import { Metadata } from "next";
import ContractorPaymentClient from "./ContractorPaymentClient";

export const metadata: Metadata = {
  title: "Recover Contractor Payments & Unpaid B2B Dues | LegalRecovery",
  description: "Struggling to recover contractor payments, unpaid B2B project dues, or vendor fees in India? Learn about MSME Samadhaan, Order 37 CPC summary suits, and legal notices.",
  keywords: [
    "recover contractor payment India",
    "unpaid B2B dues legal notice",
    "MSME Samadhaan contractor recovery",
    "breach of contract contractor pay",
    "work order payment delay India",
    "summary suit for contractor dues",
    "Section 138 NI Act bounced cheque contractor",
    "Operational Creditor NCLT contractor",
    "Interest on delayed B2B payments",
    "independent contractor legal rights India"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/contractor-payment',
  },
};

export default function ContractorPaymentPage() {
  return <ContractorPaymentClient />;
}
