import crypto from "crypto";
import { Db } from "mongodb";

export interface FunnelWaveConfig {
  wave: 1 | 2 | 3;
  enabled: boolean;
  delayMinutes: number;
  discountPercent: number;
  watiTemplate: string;
}

export interface FunnelSettings {
  _id: string;
  enabled: boolean;
  basePricePerOpposition: number;
  discountExpiryHours: number;
  honorExpiredDiscounts: boolean;
  waves: [FunnelWaveConfig, FunnelWaveConfig, FunnelWaveConfig];
  updatedAt?: Date;
}

export const DEFAULT_FUNNEL_SETTINGS: FunnelSettings = {
  _id: "global",
  enabled: true,
  basePricePerOpposition: 999,
  discountExpiryHours: 48,
  honorExpiredDiscounts: true,
  waves: [
    {
      wave: 1,
      enabled: true,
      delayMinutes: 30,
      discountPercent: 0,
      watiTemplate: "signup_recovery_wave_1",
    },
    {
      wave: 2,
      enabled: true,
      delayMinutes: 360, // 6 hours
      discountPercent: 15,
      watiTemplate: "signup_recovery_discount_wave_2_v2",
    },
    {
      wave: 3,
      enabled: true,
      delayMinutes: 1440, // 24 hours
      discountPercent: 15,
      watiTemplate: "signup_recovery_final_wave_3",
    },
  ],
};

export interface FunnelPricingBreakdown {
  oppositionCount: number;
  discountPercent: number;
  unitOriginalPrice: number;
  unitDiscountedPrice: number;
  totalOriginal: number;
  totalPayable: number;
  totalSavings: number;
}

/**
 * Calculates per-party rounded pricing and multi-party totals.
 * Example at 15% discount on ₹999:
 * - 1 party: ₹999 -> ₹849 (Save ₹150)
 * - 2 parties: ₹1,998 -> ₹1,698 (Save ₹300)
 * - 3 parties: ₹2,997 -> ₹2,547 (Save ₹450)
 */
export function calculateFunnelPricing(
  oppositionCount: number = 1,
  discountPercent: number = 0,
  basePrice: number = 999
): FunnelPricingBreakdown {
  const oppCount = Math.max(1, Math.min(10, Math.floor(Number(oppositionCount) || 1)));
  const pct = Math.max(0, Math.min(90, Number(discountPercent) || 0));
  const unitOriginalPrice = Math.max(1, Math.round(Number(basePrice) || 999));
  const unitDiscountedPrice =
    pct > 0 ? Math.round(unitOriginalPrice * (1 - pct / 100)) : unitOriginalPrice;

  const totalOriginal = oppCount * unitOriginalPrice;
  const totalPayable = oppCount * unitDiscountedPrice;
  const totalSavings = Math.max(0, totalOriginal - totalPayable);

  return {
    oppositionCount: oppCount,
    discountPercent: pct,
    unitOriginalPrice,
    unitDiscountedPrice,
    totalOriginal,
    totalPayable,
    totalSavings,
  };
}

export function generateResumeToken(): string {
  return `tok_${crypto.randomBytes(20).toString("hex")}`;
}

export function normalizePhoneTenDigits(phone: string): string {
  let clean = (phone || "").trim().replace(/\D/g, "");
  if (clean.startsWith("0") && clean.length === 11) {
    clean = clean.slice(1);
  } else if (clean.startsWith("91") && clean.length === 12) {
    clean = clean.slice(2);
  }
  return clean;
}

export function buildMagicResumeUrl(token: string, origin: string = "https://legalrecovery.in"): string {
  let baseOrigin = (origin || "https://legalrecovery.in").replace("http://", "https://").replace(/\/$/, "");
  if (baseOrigin.includes("localhost") || baseOrigin.includes("127.0.0.1")) {
    baseOrigin = "https://legalrecovery.in";
  }
  return `${baseOrigin}/resume/${token}`;
}

export async function getFunnelSettings(db: Db): Promise<FunnelSettings> {
  try {
    const doc = await db.collection<FunnelSettings>("funnel_settings").findOne({ _id: "global" });
    if (!doc) {
      return DEFAULT_FUNNEL_SETTINGS;
    }

    const mergedWaves: [FunnelWaveConfig, FunnelWaveConfig, FunnelWaveConfig] = [
      {
        ...DEFAULT_FUNNEL_SETTINGS.waves[0],
        ...(doc.waves?.[0] || {}),
        wave: 1,
      },
      {
        ...DEFAULT_FUNNEL_SETTINGS.waves[1],
        ...(doc.waves?.[1] || {}),
        wave: 2,
        watiTemplate:
          !doc.waves?.[1]?.watiTemplate || doc.waves?.[1]?.watiTemplate === "signup_recovery_discount_wave_2"
            ? "signup_recovery_discount_wave_2_v2"
            : doc.waves[1].watiTemplate,
      },
      {
        ...DEFAULT_FUNNEL_SETTINGS.waves[2],
        ...(doc.waves?.[2] || {}),
        wave: 3,
      },
    ];

    return {
      _id: "global",
      enabled: typeof doc.enabled === "boolean" ? doc.enabled : DEFAULT_FUNNEL_SETTINGS.enabled,
      basePricePerOpposition: Number(doc.basePricePerOpposition) || DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition,
      discountExpiryHours: Number(doc.discountExpiryHours) || DEFAULT_FUNNEL_SETTINGS.discountExpiryHours,
      honorExpiredDiscounts:
        typeof doc.honorExpiredDiscounts === "boolean"
          ? doc.honorExpiredDiscounts
          : DEFAULT_FUNNEL_SETTINGS.honorExpiredDiscounts,
      waves: mergedWaves,
      updatedAt: doc.updatedAt,
    };
  } catch (err) {
    console.error("[FunnelConfig] Error reading funnel_settings, using defaults:", err);
    return DEFAULT_FUNNEL_SETTINGS;
  }
}

export async function saveFunnelSettings(
  db: Db,
  partial: Partial<FunnelSettings>
): Promise<FunnelSettings> {
  const current = await getFunnelSettings(db);
  const updated: FunnelSettings = {
    ...current,
    ...partial,
    _id: "global",
    waves: partial.waves
      ? [
          { ...current.waves[0], ...(partial.waves[0] || {}), wave: 1 },
          { ...current.waves[1], ...(partial.waves[1] || {}), wave: 2 },
          { ...current.waves[2], ...(partial.waves[2] || {}), wave: 3 },
        ]
      : current.waves,
    updatedAt: new Date(),
  };

  await db.collection<FunnelSettings>("funnel_settings").updateOne(
    { _id: "global" },
    { $set: updated },
    { upsert: true }
  );

  return updated;
}

export function resolveEffectiveDiscount(
  doc: any,
  settings: FunnelSettings
): {
  effectiveDiscountPercent: number;
  rawDiscountPercent: number;
  isExpired: boolean;
  graceApplied: boolean;
  discountExpiresAt: string | null;
} {
  const rawDiscountPercent = Math.max(0, Number(doc?.discountPercent) || 0);
  if (rawDiscountPercent <= 0) {
    return {
      effectiveDiscountPercent: 0,
      rawDiscountPercent: 0,
      isExpired: false,
      graceApplied: false,
      discountExpiresAt: null,
    };
  }

  const expiresAtDate = doc?.discountExpiresAt ? new Date(doc.discountExpiresAt) : null;
  const now = new Date();
  const isExpired = Boolean(expiresAtDate && !isNaN(expiresAtDate.getTime()) && now > expiresAtDate);

  if (isExpired && !settings.honorExpiredDiscounts) {
    return {
      effectiveDiscountPercent: 0,
      rawDiscountPercent,
      isExpired: true,
      graceApplied: false,
      discountExpiresAt: expiresAtDate ? expiresAtDate.toISOString() : null,
    };
  }

  return {
    effectiveDiscountPercent: rawDiscountPercent,
    rawDiscountPercent,
    isExpired,
    graceApplied: isExpired && settings.honorExpiredDiscounts,
    discountExpiresAt: expiresAtDate ? expiresAtDate.toISOString() : null,
  };
}
