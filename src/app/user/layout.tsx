import { Metadata } from "next";
import UserPortalLayoutClient from "./user-layout-client";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function UserPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UserPortalLayoutClient>{children}</UserPortalLayoutClient>;
}
