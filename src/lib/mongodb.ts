import { MongoClient, GridFSBucket } from "mongodb";
import dns from "dns";

// Preserve OS DNS servers if valid, and append IPv6 + IPv4 public DNS fallbacks
try {
  const existingServers = dns.getServers().filter((s) => s !== "127.0.0.1" && s !== "::1");
  dns.setServers([
    ...existingServers,
    "2001:4860:4860::8888", // Google IPv6 DNS (works on IPv6-only mobile hotspots)
    "2606:4700:4700::1111", // Cloudflare IPv6 DNS
    "8.8.8.8",
    "1.1.1.1",
    "8.8.4.4",
  ]);
} catch (e) {
  // Ignore in environments where setting DNS servers is restricted
}

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const rawUri = process.env.MONGODB_URI;

// Options tuned for resilient cloud & serverless operations (Vercel + Atlas M0 Free Tier)
const options = {
  serverSelectionTimeoutMS: 5000, // 5 seconds fail-fast instead of 15s hang
  connectTimeoutMS: 5000,
  socketTimeoutMS: 15000, // 15 seconds to avoid exceeding serverless function limits
  maxPoolSize: 1, // 1 connection per serverless container prevents connection exhaustion
  minPoolSize: 0,
  maxIdleTimeMS: 5000, // Close idle sockets after 5s so thawed containers don't hold zombie sockets
  retryWrites: true,
  retryReads: true,
};

let globalWithMongo = global as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient> | null;
  _mongoClientInstance?: MongoClient | null;
  _resolvedMongoUri?: string | null;
};

/**
 * Resolves a `mongodb+srv://` URI into a standard `mongodb://host1:port,host2:port,host3:port/...` URI
 * using DNS-over-HTTPS (DoH over port 443).
 *
 * Why this is needed:
 * On macOS connected to an IPv6 link-local hotspot (`fe80::...%en0`) or restricted ISP router,
 * Node's c-ares `querySrv` over UDP port 53 fails with `ECONNREFUSED`. Standard `mongodb://` URIs
 * bypass `c-ares` and use OS native `getaddrinfo` (`mDNSResponder`), which works on all networks.
 */
async function resolveMongoSrvViaDoH(srvUri: string): Promise<string> {
  if (!srvUri.startsWith("mongodb+srv://")) {
    return srvUri;
  }

  const parsed = new URL(srvUri);
  const srvHost = parsed.hostname;
  const authPart =
    parsed.username || parsed.password
      ? `${parsed.username}${parsed.password ? `:${parsed.password}` : ""}@`
      : "";
  const pathname = parsed.pathname || "/";
  const searchParams = new URLSearchParams(parsed.search);

  const dohEndpoints = [
    (name: string, type: string) =>
      `https://dns.google/resolve?name=${encodeURIComponent(name)}&type=${encodeURIComponent(type)}`,
    (name: string, type: string) =>
      `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(name)}&type=${encodeURIComponent(type)}`,
  ];

  async function queryDoH(name: string, type: string): Promise<any[]> {
    for (const buildUrl of dohEndpoints) {
      try {
        const res = await fetch(buildUrl(name, type), {
          headers: { accept: "application/dns-json" },
          signal: AbortSignal.timeout(3500),
        });
        if (!res.ok) continue;
        const data = await res.json();
        if (Array.isArray(data?.Answer) && data.Answer.length > 0) {
          return data.Answer;
        }
      } catch {
        // Try next DoH provider
      }
    }
    return [];
  }

  const [srvAnswers, txtAnswers] = await Promise.all([
    queryDoH(`_mongodb._tcp.${srvHost}`, "SRV"),
    queryDoH(srvHost, "TXT"),
  ]);

  const hosts: string[] = [];
  for (const ans of srvAnswers) {
    if (typeof ans?.data === "string") {
      // SRV data format: "priority weight port target."
      const parts = ans.data.trim().split(/\s+/);
      if (parts.length >= 4) {
        const port = parts[2];
        const target = parts[3].replace(/\.$/, "");
        if (target && port) {
          hosts.push(`${target}:${port}`);
        }
      }
    }
  }

  if (hosts.length === 0) {
    throw new Error(`DoH SRV lookup returned no hosts for ${srvHost}`);
  }

  // Merge TXT record options (e.g. authSource=admin&replicaSet=atlas-xxx-shard-0)
  for (const ans of txtAnswers) {
    if (typeof ans?.data === "string") {
      const cleanedTxt = ans.data.replace(/^"|"$/g, "").replace(/"\s*"/g, "");
      const txtParams = new URLSearchParams(cleanedTxt);
      txtParams.forEach((val, key) => {
        if (!searchParams.has(key)) {
          searchParams.set(key, val);
        }
      });
    }
  }

  if (!searchParams.has("ssl") && !searchParams.has("tls")) {
    searchParams.set("tls", "true");
  }
  if (!searchParams.has("authSource")) {
    searchParams.set("authSource", "admin");
  }

  const queryString = searchParams.toString();
  const standardUri = `mongodb://${authPart}${hosts.join(",")}${pathname}${
    queryString ? `?${queryString}` : ""
  }`;
  return standardUri;
}

async function connectWithSrvFallback(): Promise<MongoClient> {
  const initialUri = globalWithMongo._resolvedMongoUri || rawUri;
  const primaryClient = new MongoClient(initialUri, options);

  try {
    return await primaryClient.connect();
  } catch (err: any) {
    try {
      await primaryClient.close();
    } catch {}

    const isSrvDnsError =
      rawUri.startsWith("mongodb+srv://") &&
      (err?.syscall === "querySrv" ||
        err?.syscall === "queryTxt" ||
        String(err?.message || "").includes("querySrv") ||
        String(err?.message || "").includes("ECONNREFUSED") ||
        String(err?.message || "").includes("ETIMEOUT") ||
        String(err?.message || "").includes("ENOTFOUND"));

    if (!isSrvDnsError) {
      throw err;
    }

    console.warn(
      "[MongoDB] Local UDP DNS failed for mongodb+srv:// (querySrv). Falling back to HTTPS DNS-over-HTTPS seedlist resolution..."
    );
    const fallbackUri = await resolveMongoSrvViaDoH(rawUri);
    globalWithMongo._resolvedMongoUri = fallbackUri;

    const fallbackClient = new MongoClient(fallbackUri, options);
    return await fallbackClient.connect();
  }
}

export async function getMongoClient(): Promise<MongoClient> {
  // 1. If we have an existing connected client, verify socket liveness before reusing
  if (globalWithMongo._mongoClientInstance) {
    const client = globalWithMongo._mongoClientInstance;
    try {
      // Lightweight 800ms ping to confirm the thawed socket is not dead/zombie
      await client.db().command({ ping: 1 }, { timeoutMS: 800 });
      return client;
    } catch (err) {
      console.warn("[MongoDB] Cached connection unhealthy or thawed with dead socket. Reconnecting...", err);
      try {
        await client.close();
      } catch (_) {
        // Ignore close error on dead socket
      }
      globalWithMongo._mongoClientInstance = null;
      globalWithMongo._mongoClientPromise = null;
    }
  }

  // 2. Initiate fresh connection if not already connecting
  if (!globalWithMongo._mongoClientPromise) {
    globalWithMongo._mongoClientPromise = connectWithSrvFallback()
      .then((connectedClient) => {
        globalWithMongo._mongoClientInstance = connectedClient;
        return connectedClient;
      })
      .catch((err) => {
        globalWithMongo._mongoClientPromise = null;
        globalWithMongo._mongoClientInstance = null;
        console.error("[MongoDB] Connection error, resetting connection pool cache:", err);
        throw err;
      });
  }

  try {
    const client = await globalWithMongo._mongoClientPromise;
    globalWithMongo._mongoClientInstance = client;
    return client;
  } catch (err) {
    globalWithMongo._mongoClientPromise = null;
    globalWithMongo._mongoClientInstance = null;
    throw err;
  }
}

// Helper function to get database and gridfs bucket with automatic self-healing
export async function getDbAndBucket(bucketName: string = "fs") {
  const client = await getMongoClient();
  const db = client.db();
  const bucket = new GridFSBucket(db, { bucketName });
  return { db, bucket };
}

// Lazy default export function to avoid eager module connection at boot
export default getMongoClient;

