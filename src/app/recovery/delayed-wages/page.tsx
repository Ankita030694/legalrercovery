import { Metadata } from "next";
import DelayedWagesClient from "./DelayedWagesClient";

export const metadata: Metadata = {
  title: "Salary Delay Law in India: Legal Action for Late Salary Payment (7th–10th Rule)",
  description: "Why is your salary late this month? Under India's Payment of Wages Act & Code on Wages, employers must pay by the 7th–10th. Claim delayed salary + up to 10x penalty via Legal Notice.",
  keywords: [
    "salary delay",
    "late salary payment law india",
    "why salary is late this month",
    "delayed salary",
    "salary delayed legal action",
    "delayed wages recovery India",
    "late salary payment legal notice",
    "interest on delayed wages",
    "payment of wages act timelines",
    "employer delayed salary penalty",
    "Section 15 Payment of Wages Act claim"
  ],
  alternates: {
    canonical: 'https://www.legalrecovery.in/recovery/delayed-wages',
  },
  openGraph: {
    title: "Salary Delay Law in India: Legal Action for Late Salary Payment (7th–10th Rule)",
    description: "Salary delayed again this month? Under India's Payment of Wages Act, employers must pay by the 7th–10th. Claim delayed salary via Advocate Legal Notice.",
    url: "https://www.legalrecovery.in/recovery/delayed-wages",
    type: "article",
  },
};

export default function DelayedWagesPage() {
  return <DelayedWagesClient />;
}
