import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getDbAndBucket } from "./mongodb";
import crypto from "crypto";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: { label: "Phone", type: "text" },
        otp: { label: "OTP", type: "text" },
        email: { label: "Email", type: "email", placeholder: "admin@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // --- 1. User Login via Phone OTP ---
        if (credentials?.phone && credentials?.otp) {
          const inputPhone = credentials.phone.trim().replace(/\D/g, "");
          const inputOtp = credentials.otp.trim();

          if (inputPhone.length !== 10 || inputOtp.length !== 6) {
            return null;
          }

          try {
            const { db } = await getDbAndBucket("fs");
            const user = await db.collection("users").findOne({ phone: inputPhone });

            if (user) {
              const otpMatch = user.loginOtp && inputOtp.length === 6 && user.loginOtp.length === 6 && crypto.timingSafeEqual(
                Buffer.from(user.loginOtp),
                Buffer.from(inputOtp)
              );

              if (
                otpMatch &&
                user.loginOtpExpires &&
                new Date() < new Date(user.loginOtpExpires)
              ) {
                // Clear the OTP to prevent replay attacks and update last login timestamp
                await db.collection("users").updateOne(
                  { _id: user._id },
                  { 
                    $unset: { loginOtp: "", loginOtpExpires: "" },
                    $set: { lastLoginAt: new Date() }
                  }
                );

                return {
                  id: user._id.toString(),
                  email: user.email,
                  name: user.name || "User",
                  role: "user",
                };
              }
            }
          } catch (dbError) {
            console.error("NextAuth OTP login MongoDB query error:", dbError);
          }
          return null;
        }

        // --- 2. Admin Login via Email/Password ---
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const inputEmail = credentials.email.toLowerCase().trim();
        const inputPassword = credentials.password;

        // 1. Verify against environmental variables (no hardcoded fallbacks allowed in production)
        const envEmail = process.env.ADMIN_EMAIL ? process.env.ADMIN_EMAIL.toLowerCase().trim() : null;
        const envPassword = process.env.ADMIN_PASSWORD;

        if (envEmail && envPassword && inputEmail === envEmail) {
          const hash1 = crypto.createHash("sha256").update(inputPassword).digest("hex");
          const hash2 = crypto.createHash("sha256").update(envPassword).digest("hex");
          if (crypto.timingSafeEqual(Buffer.from(hash1, "hex"), Buffer.from(hash2, "hex"))) {
            return {
              id: "admin-env-root",
              email: envEmail,
              name: "Super Administrator",
              role: "admin",
            };
          }
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

            const hashMatch = admin.passwordHash && hashedInput.length === 64 && admin.passwordHash.length === 64 && crypto.timingSafeEqual(
              Buffer.from(admin.passwordHash),
              Buffer.from(hashedInput)
            );

            if (hashMatch) {
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
        token.role = (user as any).role || "user";
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
    maxAge: 7 * 24 * 60 * 60, // 1 week (7 days) session active
  },
  secret: process.env.NEXTAUTH_SECRET,
};

import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function verifyAuth(request: any) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return { error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) };
  }
  return { session };
}

