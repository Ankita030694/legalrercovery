import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Validate ObjectId structure
    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid image ID" }, { status: 400 });
    }

    const { db, bucket } = await getDbAndBucket("fs");
    const objectId = new ObjectId(id);

    // Verify metadata first to get content type
    const file = await db.collection("fs.files").findOne({ _id: objectId });
    if (!file) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    // Open GridFS download stream
    const nodeStream = bucket.openDownloadStream(objectId);

    // Convert Node Readable to Web ReadableStream for high compatibility
    const webStream = new ReadableStream({
      start(controller) {
        nodeStream.on("data", (chunk) => controller.enqueue(chunk));
        nodeStream.on("end", () => controller.close());
        nodeStream.on("error", (err) => controller.error(err));
      },
      cancel() {
        nodeStream.destroy();
      },
    });

    // Return image binary directly with long-lived browser caching
    return new Response(webStream, {
      headers: {
        "Content-Type": file.metadata?.contentType || file.contentType || "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error: any) {
    console.error("Serve Image API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
