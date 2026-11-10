import { Db } from "mongodb";

/** Used until an admin saves a different address from the dispatch consoles. */
export const DEFAULT_DISPATCHER_EMAIL = "activepost46@gmail.com";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidDispatcherEmail(value: unknown): value is string {
  return typeof value === "string" && EMAIL_PATTERN.test(value.trim());
}

export async function getDispatcherEmail(db: Db): Promise<string> {
  const doc = await db.collection<{ _id: string; dispatcherEmail?: string }>("dispatch_settings").findOne({ _id: "global" });
  return doc?.dispatcherEmail || DEFAULT_DISPATCHER_EMAIL;
}

export async function saveDispatcherEmail(db: Db, email: string, updatedBy: string): Promise<string> {
  const dispatcherEmail = email.trim().toLowerCase();
  await db.collection<{ _id: string }>("dispatch_settings").updateOne(
    { _id: "global" },
    { $set: { dispatcherEmail, updatedBy, updatedAt: new Date() } },
    { upsert: true }
  );
  return dispatcherEmail;
}
