import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // If authenticated, allow them to proceed
    return NextResponse.next();
  },
  {
    callbacks: {
      // Ensure only users with role "admin" are authorized
      authorized: ({ token }) => {
        return token?.role === "admin";
      },
    },
    pages: {
      signIn: "/nullify",
    },
    secret: process.env.NEXTAUTH_SECRET || "tumsabkimaachod_dijaygibehenkelundo",
  }
);

// Match all administrative routes
export const config = {
  matcher: ["/authority/:path*"],
};
