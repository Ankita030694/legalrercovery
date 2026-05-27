import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getDbAndBucket } from "./mongodb";
import crypto from "crypto";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const inputEmail = credentials.email.toLowerCase().trim();
        const inputPassword = credentials.password;

        // 1. Verify against environmental variables (no hardcoded fallbacks allowed in production)
        const envEmail = process.env.ADMIN_EMAIL ? process.env.ADMIN_EMAIL.toLowerCase().trim() : null;
        const envPassword = process.env.ADMIN_PASSWORD;

        if (envEmail && envPassword && inputEmail === envEmail && inputPassword === envPassword) {
          return {
            id: "admin-env-root",
            email: envEmail,
            name: "Super Administrator",
            role: "admin",
          };
        }

        // 2. Fallback to verification against the MongoDB 'admins' collection
        try {
          const { db } = await getDbAndBucket("fs");
          const admin = await db.collection("admins").findOne({ email: inputEmail });

          if (admin) {
            // SHA-256 secure hash to check password without external binary dependencies
            const hashedInput = crypto
              .createHash("sha256")
              .update(inputPassword)
              .digest("hex");

            if (admin.passwordHash === hashedInput) {
              return {
                id: admin._id.toString(),
                email: admin.email,
                name: admin.name || "Administrator",
                role: admin.role || "admin",
              };
            }
          }
        } catch (dbError) {
          console.error("NextAuth authorize MongoDB database query error:", dbError);
        }

        // Authentication failed
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role || "admin";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id as string;
        (session.user as any).role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/nullify",
    error: "/nullify",
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours session active
  },
  secret: process.env.NEXTAUTH_SECRET || "tumsabkimaachod_dijaygibehenkelundo",
};
