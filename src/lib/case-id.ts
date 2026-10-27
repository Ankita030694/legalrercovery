import { Db } from "mongodb";

/**
 * Monotonic, atomic case sequence.
 *
 * Previously case IDs were generated from `countDocuments() + 1`, which reuses numbers
 * after deletions and races under concurrent creation. This counter only ever increases.
 * The ID format is unchanged: LR-<seq padded to 4>-<day><month><yy>.
 */
const COUNTER_COLLECTION = "counters";
const COUNTER_ID = "caseSeq";

interface CounterDoc {
  _id: string;
  seq: number;
}

function parseSeq(caseId: any): number {
  const m = typeof caseId === "string" ? caseId.match(/^LR-(\d{4,})-/) : null;
  return m ? parseInt(m[1], 10) : 0;
}

async function computeMaxExistingSeq(db: Db): Promise<number> {
  const [cases, users] = await Promise.all([
    db.collection("cases").find({ caseId: { $regex: /^LR-\d{4,}-/ } }, { projection: { caseId: 1 } }).toArray(),
    db.collection("users").find({ caseId: { $regex: /^LR-\d{4,}-/ } }, { projection: { caseId: 1 } }).toArray(),
  ]);
  let max = 0;
  for (const d of [...cases, ...users]) max = Math.max(max, parseSeq((d as any).caseId));
  return max;
}

async function ensureCounter(db: Db): Promise<void> {
  const counters = db.collection<CounterDoc>(COUNTER_COLLECTION);
  const existing = await counters.findOne({ _id: COUNTER_ID });
  if (existing) return;
  const max = await computeMaxExistingSeq(db);
  // $max makes concurrent first-time initialisation safe.
  await counters.updateOne({ _id: COUNTER_ID }, { $max: { seq: max } }, { upsert: true });
}

/** Atomically reserves `count` consecutive sequence numbers and returns the first one. */
export async function reserveCaseSequence(db: Db, count = 1): Promise<number> {
  await ensureCounter(db);
  const counters = db.collection<CounterDoc>(COUNTER_COLLECTION);
  const doc = await counters.findOneAndUpdate(
    { _id: COUNTER_ID },
    { $inc: { seq: count } },
    { upsert: true, returnDocument: "after" }
  );
  const end = (doc as any)?.seq ?? (doc as any)?.value?.seq;
  if (typeof end !== "number") throw new Error("Failed to reserve case sequence");
  return end - count + 1;
}

export function formatCaseId(seq: number, date: Date = new Date()): string {
  const nextNum = String(seq).padStart(4, "0");
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const yearSuffix = date.getFullYear().toString().slice(-2);
  return `LR-${nextNum}-${day}${month}${yearSuffix}`;
}

/** Generates one new unique case ID. */
export async function generateCaseId(db: Db, date: Date = new Date()): Promise<string> {
  const seq = await reserveCaseSequence(db, 1);
  return formatCaseId(seq, date);
}

/** Preview of the next case ID without reserving it (display only). */
export async function peekNextCaseId(db: Db, date: Date = new Date()): Promise<string> {
  await ensureCounter(db);
  const doc = await db.collection<CounterDoc>(COUNTER_COLLECTION).findOne({ _id: COUNTER_ID });
  return formatCaseId((doc?.seq || 0) + 1, date);
}
