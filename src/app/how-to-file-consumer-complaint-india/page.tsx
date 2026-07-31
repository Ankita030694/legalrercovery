import { Metadata } from "next";
import ConsumerComplaintClient from "./ConsumerComplaintClient";

export const metadata: Metadata = {
  title: "How to File a Consumer Complaint in India: Online (e-Daakhil) & Offline Guide",
  description: "Learn how to file a consumer complaint in India online via e-Daakhil and offline. Master pecuniary jurisdiction limits, fee calculations, and legal notice requirements under the Consumer Protection Act, 2019.",
  keywords: [
    "how to file consumer complaint online india",
    "e daakhil filing procedure",
    "consumer court complaint process",
    "consumer commission jurisdiction limits",
    "fee to file consumer case"
  ],
  alternates: {
    canonical: "https://www.legalrecovery.in/how-to-file-consumer-complaint-india",
  },
};

export default function ConsumerComplaintPage() {
  return <ConsumerComplaintClient />;
}
