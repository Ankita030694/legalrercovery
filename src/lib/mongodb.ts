import { MongoClient, GridFSBucket } from "mongodb";
import dns from "dns";

// Ensure resilient DNS resolution for MongoDB Atlas SRV/shard hostnames across local/ISP resolvers
try {
  dns.setServers(["8.8.8.8", "1.1.1.1", "8.8.4.4"]);
} catch (e) {
  // Ignore in environments where setting DNS servers is restricted
}

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;

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
};

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
    const client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client
      .connect()
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
