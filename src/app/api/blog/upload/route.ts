import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { Readable } from "stream";

export async function POST(req: NextRequest) {
  // Validate NextAuth session
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Get DB and GridFS Bucket
    const { bucket } = await getDbAndBucket("fs");

    // Create an upload stream
    const uploadStream = bucket.openUploadStream(file.name, {
      metadata: {
        contentType: file.type,
        uploadedAt: new Date(),
        uploadedBy: (session.user as any).id || "admin-env",
      },
    });

    // Convert Buffer to Node stream and pipe to GridFS
    const readableStream = new Readable({
      read() {
        this.push(buffer);
        this.push(null);
      },
    });

    return new Promise<NextResponse>((resolve) => {
      readableStream
        .pipe(uploadStream)
        .on("error", (error) => {
          console.error("GridFS Upload Error:", error);
          resolve(NextResponse.json({ error: "Upload failed" }, { status: 500 }));
        })
        .on("finish", () => {
          resolve(
            NextResponse.json({
              success: true,
              gridFsId: uploadStream.id.toString(),
              filename: file.name,
              contentType: file.type,
            })
          );
        });
    });
  } catch (error: any) {
    console.error("Upload Route Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
