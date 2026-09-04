import { Metadata } from "next";
import VakilOnlineClient from "./VakilOnlineClient";

export const metadata: Metadata = {
  title: "Vakil Online: Advocate Consultation & Legal Tech Portal",
  description: "Consult qualified advocates online in India. Understand BCI rules on digital practice, digital Vakalatnama execution, and e-courts filing procedures.",
  keywords: [
    "vakil online",
    "online advocate consultation",
    "digital vakalatnama signature",
    "bar council of india digital rules",
    "hire lawyer online india",
    "legal tech advisor",
    "virtual legal consultation",
    "e-courts advocate filing"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/vakil-online',
  },
};

export default function VakilOnlinePage() {
  return <VakilOnlineClient />;
}
