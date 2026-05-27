import { Metadata } from "next";
import FriendRecoveryClient from "./FriendRecoveryClient";

export const metadata: Metadata = {
  title: "Recover Money From a Friend Legally in India | LegalRecovery",
  description: "Exhaustive legal guide on recovering personal loans, cash advances, group expenses, and promissory notes in India. Learn legal notice formats, summary suits (Order 37 CPC), and criminal cheating options.",
  openGraph: {
    title: "Recover Money From a Friend Legally in India | LegalRecovery",
    description: "Exhaustive legal guide on recovering personal loans, cash advances, group expenses, and promissory notes in India. Learn legal notice formats, summary suits (Order 37 CPC), and criminal cheating options.",
    type: "article",
    url: "/services/recovery-of-money-from-a-friend",
    images: [
      {
        url: "/blog_money_recovery.png",
        width: 1200,
        height: 630,
        alt: "Personal Money Recovery India"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Recover Money From a Friend Legally in India | LegalRecovery",
    description: "Exhaustive legal guide on recovering personal loans, cash advances, group expenses, and promissory notes in India.",
    images: ["/blog_money_recovery.png"]
  }
};

export default function FriendRecoveryPage() {
  return <FriendRecoveryClient />;
}
