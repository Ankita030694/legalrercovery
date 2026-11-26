import crypto from "crypto";
import { Db } from "mongodb";

/**
 * Fixed-window rate limiting stored in MongoDB, so it holds across serverless instances.
 * Expired windows are removed by a TTL index.
 */

interface RateLimitDoc {
  _id: string;
  count: number;
  expiresAt: Date;
}

const COLLECTION = "rate_limits";
let indexReady: Promise<unknown> | null = null;

function ensureIndex(db: Db) {
  if (!indexReady) {
    indexReady = db
      .collection<RateLimitDoc>(COLLECTION)
      .createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 })
      .catch((error) => {
        indexReady = null;
        console.warn("[RateLimit] Could not create TTL index:", error);
      });
  }
  return indexReady;
}

/** Counts one hit; false once `limit` hits have been used in the current window. */
export async function consumeRateLimit(
  db: Db,
  key: string,
  limit: number,
  windowSeconds: number
): Promise<boolean> {
  await ensureIndex(db);
  const windowMs = windowSeconds * 1000;
  const windowIndex = Math.floor(Date.now() / windowMs);
  const doc = await db.collection<RateLimitDoc>(COLLECTION).findOneAndUpdate(
    { _id: `${key}|${windowSeconds}|${windowIndex}` },
    {
      $inc: { count: 1 },
      $setOnInsert: { expiresAt: new Date((windowIndex + 1) * windowMs + 60_000) },
    },
    { upsert: true, returnDocument: "after" }
  );
  return (doc?.count ?? 1) <= limit;
}

/** Hashed so raw IP addresses are never stored. */
export function hashedClientKey(ip: string): string {
  const salt = process.env.NEXTAUTH_SECRET || "lr-rate-limit";
  return crypto.createHash("sha256").update(`${salt}:${ip}`).digest("hex").slice(0, 32);
}

/** Vercel sets x-real-ip itself; x-forwarded-for is only a fallback for other hosts. */
export function clientIp(headers: Headers): string {
  const realIp = headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return "unknown";
}
