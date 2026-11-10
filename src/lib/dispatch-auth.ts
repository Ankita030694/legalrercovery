import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

/**
 * Checks if the session user is one of the designated special administrators:
 * '8700343611' or '8130104447'
 */
export async function authorizeSpecialUser(session: any, db: any) {
  if (!session || !session.user || !(session.user as any).id) {
    return { authorized: false, errorResponse: NextResponse.json({ error: "Unauthorized access. Please log in." }, { status: 401 }) };
  }

  const userId = (session.user as any).id;
  const userRole = (session.user as any).role;
  const userEmail = (session.user as any).email;

  // Direct admin bypass
  if (userId === "admin-env-root" || userRole === "admin" || userEmail === "admin@legalrecovery.in") {
    return {
      authorized: true,
      user: {
        _id: "admin-env-root",
        phone: "8700343611",
        name: "Super Administrator",
        email: "admin@legalrecovery.in"
      },
      cleanPhone: "8700343611"
    };
  }

  let user: any;
  try {
    user = await db.collection("users").findOne({ _id: new ObjectId(userId) });
  } catch (e) {
    user = await db.collection("users").findOne({ _id: userId });
  }

  if (!user) {
    return { authorized: false, errorResponse: NextResponse.json({ error: "User profile not found." }, { status: 404 }) };
  }

  const cleanPhone = (user.phone || "").replace(/\D/g, "");
  const isSpecial = cleanPhone.endsWith("8700343611") || cleanPhone.endsWith("8130104447") || user.role === "admin";

  if (!isSpecial) {
    return {
      authorized: false,
      errorResponse: NextResponse.json({
        error: "Access Denied. The Notice Dispatch console is restricted exclusively to authorized administrator accounts."
      }, { status: 403 })
    };
  }

  return { authorized: true, user, cleanPhone };
}
