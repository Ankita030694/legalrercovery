import { Metadata } from "next";
import UserPortalLayoutClient from "./user-layout-client";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function UserPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  let initialProfile = { name: "", email: "", hasUnlimitedCases: false };

  if (session && (session.user as any).id) {
    const userId = (session.user as any).id;
    try {
      const { db } = await getDbAndBucket("fs");
      if (userId === "admin-env-root") {
        initialProfile = {
          name: "Super Administrator",
          email: (session.user as any)?.email || "admin@legalrecovery.in",
          hasUnlimitedCases: true
        };
      } else {
        const user = await db.collection("users").findOne({ _id: new ObjectId(userId) });
        if (user) {
          initialProfile = {
            name: user.name || "",
            email: user.email || "",
            hasUnlimitedCases: user.hasUnlimitedCases || false
          };
        }
      }
    } catch (e) {
      console.error("Failed to fetch initial profile for layout", e);
    }
  }

  return (
    <UserPortalLayoutClient initialProfile={initialProfile}>
      {children}
    </UserPortalLayoutClient>
  );
}
