const { MongoClient, GridFSBucket, ObjectId } = require("mongodb");
const fs = require("fs");
const path = require("path");
const { Readable } = require("stream");
const { spawn } = require("child_process");
const { submitLegalRecoverySitemaps } = require("../scripts/submit_sitemap_to_gsc");

// 1. Load .env.local from lr root
const envPath = path.resolve(__dirname, "../.env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  envContent.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx > -1) {
      const key = trimmed.slice(0, eqIdx).trim();
      let val = trimmed.slice(eqIdx + 1).trim();
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1);
      }
      process.env[key] = val.replace(/\\n/g, "\n");
    }
  });
}

// Helper: Count syllables in a word for Flesch Reading Ease calculation
function countSyllables(word) {
  word = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!word) return 0;
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "");
  word = word.replace(/^y/, "");
  const matches = word.match(/[aeiouy]{1,2}/g);
  return matches ? matches.length : 1;
}

// Helper: Compute Flesch Reading Ease on HTML content
function computeFleschReadingEase(html) {
  const normalized = html
    .replace(/<\/(h1|h2|h3|h4|p|li|td|th|blockquote)>/gi, ". ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-zA-Z0-9#]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const sentences = normalized
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 2);
  const words = normalized
    .split(/\s+/)
    .map((w) => w.replace(/[^a-zA-Z0-9]/g, ""))
    .filter((w) => w.length > 0);
  const totalSentences = Math.max(1, sentences.length);
  const totalWords = Math.max(1, words.length);
  const totalSyllables = words.reduce((acc, w) => acc + countSyllables(w), 0);

  const asl = totalWords / totalSentences;
  const asw = totalSyllables / totalWords;
  const score = 206.835 - 1.015 * asl - 84.6 * asw;
  return {
    score: Number(score.toFixed(1)),
    totalWords,
    totalSentences,
    avgSentenceLength: Number(asl.toFixed(1)),
    avgSyllablesPerWord: Number(asw.toFixed(2)),
  };
}

// Strict Screaming Frog SEO + Scope + Readability Validation Gate
function validatePayload(payload) {
  const errors = [];
  const requiredFields = [
    "title",
    "subtitle",
    "description",
    "metaTitle",
    "metaDescription",
    "slug",
    "faqs",
    "reviews",
    "popularSearches",
  ];

  for (const field of requiredFields) {
    if (!payload[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  }
  if (errors.length > 0) return { valid: false, errors };

  // 1. Title & MetaTitle checks
  if (payload.title.length < 28 || payload.title.length > 72) {
    errors.push(
      `H1 title length (${payload.title.length}) must be between 28 and 72 chars: "${payload.title}"`
    );
  }
  if (payload.metaTitle.length < 45 || payload.metaTitle.length > 66) {
    errors.push(
      `metaTitle length (${payload.metaTitle.length}) must be between 45 and 66 chars: "${payload.metaTitle}"`
    );
  }
  if (payload.title.trim().toLowerCase() === payload.metaTitle.trim().toLowerCase()) {
    errors.push(
      `H1 title and metaTitle must be distinct! Currently identical: "${payload.title}"`
    );
  }

  // Banned robotic title suffixes check
  if (
    /:\s*(A\s+)?(Complete|Comprehensive|Ultimate)\s+(Guide|Overview)|Legal\s+Solutions|Everything\s+You\s+Need\s+to\s+Know/i.test(
      payload.title
    )
  ) {
    errors.push(
      `H1 title contains banned generic suffix ("Complete Guide", "Legal Solutions", etc.): "${payload.title}"`
    );
  }

  // 2. MetaDescription check
  if (payload.metaDescription.length < 135 || payload.metaDescription.length > 162) {
    errors.push(
      `metaDescription length (${payload.metaDescription.length}) must be between 135 and 162 chars: "${payload.metaDescription}"`
    );
  }

  // 3. Slug & URL length check
  const fullUrl = `https://www.legalrecovery.in/blog/${payload.slug}`;
  if (fullUrl.length > 115) {
    errors.push(`Full URL length (${fullUrl.length}) exceeds 115 chars: ${fullUrl}`);
  }

  // 4. Em-dash / En-dash ban across metadata & body
  if (
    /[—–]/.test(
      payload.title +
        payload.metaTitle +
        payload.metaDescription +
        payload.subtitle +
        payload.description
    )
  ) {
    errors.push(
      `Em-dash (—) or En-dash (–) detected. Replace all em/en-dashes with standard hyphens (-), colons (:), or commas.`
    );
  }

  // 5. Out-of-scope bank/NPA debt settlement check
  const outOfScopeRegex =
    /\b(bank\s+loan\s+settlement|npa\s+settlement|one\s+time\s+settlement\s+with\s+bank|ots\s+settlement|emi\s+waiver|debt\s+restructuring|sarfaesi\s+act\s+settlement|credit\s+card\s+settlement|wilful\s+defaulter\s+settlement)\b/i;
  if (outOfScopeRegex.test(payload.title + " " + payload.description)) {
    errors.push(
      `Article contains out-of-scope borrower debt/NPA settlement terms. LegalRecovery strictly covers creditor/claimant money recovery, FNF/salary recovery, consumer/flight refunds, friendly loans, B2B/MSME invoices, and rental/builder deposits.`
    );
  }

  // 6. H2/H3 heading checks inside HTML description
  const h2Matches = Array.from(payload.description.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi));
  if (h2Matches.length < 6) {
    errors.push(
      `HTML description must contain at least 6 <h2> section headings (found ${h2Matches.length}).`
    );
  }

  const headingRegex = /<h([23])[^>]*>([\s\S]*?)<\/h\1>/gi;
  let match;
  const seenHeadings = new Set();
  while ((match = headingRegex.exec(payload.description)) !== null) {
    const rawHeading = match[2]
      .replace(/<[^>]+>/g, "")
      .replace(/&amp;/g, "&")
      .trim();
    if (rawHeading.length > 78) {
      errors.push(
        `H${match[1]} heading exceeds 78 chars (${rawHeading.length}): "${rawHeading}"`
      );
    }
    const lowerH = rawHeading.toLowerCase();
    if (seenHeadings.has(lowerH)) {
      errors.push(`Duplicate heading detected in HTML: "${rawHeading}"`);
    }
    seenHeadings.add(lowerH);
  }

  // 7. Mandatory HTML tables check (1 to 2 bespoke tables)
  const tableMatches = payload.description.match(/<table[\s>]/gi) || [];
  if (tableMatches.length < 2) {
    errors.push(
      `HTML description must contain at least 2 bespoke HTML <table> matrices (found ${tableMatches.length}).`
    );
  }

  // 8. Internal links check (6 to 12 internal links)
  const internalLinkMatches =
    payload.description.match(
      /href=["'](\/[^"']+|https?:\/\/(www\.)?legalrecovery\.in\/[^"']*)["']/gi
    ) || [];
  if (internalLinkMatches.length < 6) {
    errors.push(
      `HTML description must contain at least 6 contextual internal links to legalrecovery.in routes (found ${internalLinkMatches.length}).`
    );
  }

  // 9. FAQs, Reviews, Popular Searches checks
  if (!Array.isArray(payload.faqs) || payload.faqs.length < 8) {
    errors.push(
      `faqs array must have at least 8 topic-specific Q&A items (found ${payload.faqs?.length || 0}).`
    );
  }
  if (!Array.isArray(payload.reviews) || payload.reviews.length < 4) {
    errors.push(
      `reviews array must have at least 4 realistic review items (found ${payload.reviews?.length || 0}).`
    );
  }
  if (!Array.isArray(payload.popularSearches) || payload.popularSearches.length < 12) {
    errors.push(
      `popularSearches array must have at least 12 long-tail search queries (found ${payload.popularSearches?.length || 0}).`
    );
  }

  // 10. Readability & Word Count check
  const readability = computeFleschReadingEase(payload.description);
  if (readability.totalWords < 2100) {
    errors.push(
      `Article body word count (${readability.totalWords}) is below the 2,100-word minimum threshold (target 2,500 words of focused, user-useful content).`
    );
  }
  if (readability.score < 48.0) {
    errors.push(
      `Flesch Reading Ease score (${readability.score}) is too low (avg sentence length: ${readability.avgSentenceLength} words). Use clear, plain-English 12-18 word sentences to hit >= 50-60.`
    );
  }

  return {
    valid: errors.length === 0,
    errors,
    readability,
  };
}

// Upload a local image file to MongoDB GridFS (`fs` bucket)
async function uploadLocalImageToGridFS(bucket, localFilePath, customFilename) {
  if (!localFilePath || !fs.existsSync(localFilePath)) {
    throw new Error(`Image file not found at ${localFilePath}`);
  }
  const buffer = fs.readFileSync(localFilePath);
  const ext = path.extname(localFilePath).toLowerCase();
  const contentType =
    ext === ".jpg" || ext === ".jpeg"
      ? "image/jpeg"
      : ext === ".webp"
      ? "image/webp"
      : "image/png";
  const filename = customFilename || path.basename(localFilePath);

  const uploadStream = bucket.openUploadStream(filename, {
    metadata: {
      contentType,
      uploadedAt: new Date(),
      uploadedBy: "legalrecovery-seo-automation",
    },
  });

  const readableStream = new Readable({
    read() {
      this.push(buffer);
      this.push(null);
    },
  });

  return new Promise((resolve, reject) => {
    readableStream
      .pipe(uploadStream)
      .on("error", (err) => reject(err))
      .on("finish", () => {
        resolve({
          gridFsId: uploadStream.id.toString(),
          filename,
          contentType,
        });
      });
  });
}

// Auto-generate an image buffer if a local file path is not provided
async function generateImageToLocalFile(promptText, targetFilePath) {
  fs.mkdirSync(path.dirname(targetFilePath), { recursive: true });
  const apiKey = process.env.HELLO_DROP_CHOO;
  if (apiKey) {
    try {
      const openAiRes = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-image-1",
          prompt: promptText,
          n: 1,
          size: "1024x1024",
        }),
      });
      if (openAiRes.ok) {
        const data = await openAiRes.json();
        const first = data?.data?.[0];
        if (first?.b64_json) {
          fs.writeFileSync(targetFilePath, Buffer.from(first.b64_json, "base64"));
          return targetFilePath;
        } else if (first?.url) {
          const imgRes = await fetch(first.url);
          if (imgRes.ok) {
            const arrBuf = await imgRes.arrayBuffer();
            fs.writeFileSync(targetFilePath, Buffer.from(arrBuf));
            return targetFilePath;
          }
        }
      }
    } catch (e) {
      console.warn("⚠️ OpenAI image generation fallback triggered:", e.message);
    }
  }

  // Fallback to Pollinations AI FLUX 16:9 high-res image generation
  const encoded = encodeURIComponent(promptText);
  const pollUrl = `https://image.pollinations.ai/prompt/${encoded}?width=1280&height=720&nologo=true&seed=${Math.floor(
    Math.random() * 1000000
  )}`;
  const res = await fetch(pollUrl);
  if (!res.ok) {
    throw new Error(`Failed to fetch fallback generated image (${res.status})`);
  }
  const arrBuf = await res.arrayBuffer();
  fs.writeFileSync(targetFilePath, Buffer.from(arrBuf));
  return targetFilePath;
}

async function publishLegalRecoveryBlog() {
  const defaultCurrent = path.resolve(__dirname, "current_blog_payload.json");
  const defaultDaily = path.resolve(__dirname, "legalrecovery_daily_blog_payload.json");
  const payloadPath =
    process.argv[2] ||
    (fs.existsSync(defaultCurrent) ? defaultCurrent : defaultDaily);
  if (!payloadPath || !fs.existsSync(payloadPath)) {
    console.error(
      "Usage: node scratch/publish_legalrecovery_blog.js [path-to-payload.json]"
    );
    process.exit(1);
  }

  const rawPayload = JSON.parse(fs.readFileSync(payloadPath, "utf8"));

  // Auto-sanitize any accidental em-dashes or en-dashes before validation
  const sanitizeStr = (s) =>
    typeof s === "string"
      ? s.replace(/—/g, " - ").replace(/–/g, "-").replace(/\s{2,}/g, " ")
      : s;
  const rawSubtitle = rawPayload.subtitle || rawPayload.subtitleKeywords || "";
  const rawDescription = rawPayload.description || rawPayload.content || "";
  const rawReviews = rawPayload.reviews || rawPayload.reviewSnippets || [];

  const payload = {
    ...rawPayload,
    dayNumber: rawPayload.dayNumber || rawPayload.day,
    title: sanitizeStr(rawPayload.title),
    subtitle: sanitizeStr(rawSubtitle),
    metaTitle: sanitizeStr(rawPayload.metaTitle),
    metaDescription: sanitizeStr(rawPayload.metaDescription),
    description:
      typeof rawDescription === "string"
        ? rawDescription.replace(/—/g, " - ").replace(/–/g, "-")
        : "",
    faqs: Array.isArray(rawPayload.faqs)
      ? rawPayload.faqs.map((f) => ({
          question: sanitizeStr(f.question),
          answer: sanitizeStr(f.answer),
        }))
      : [],
    reviews: Array.isArray(rawReviews)
      ? rawReviews.map((r) => ({
          reviewerName: sanitizeStr(r.reviewerName || r.name || "Verified Client"),
          rating: Number(r.rating) || 5,
          reviewText: sanitizeStr(r.reviewText || r.review || r.comment || ""),
          reviewDate:
            r.reviewDate || new Date().toLocaleDateString("en-GB"),
        }))
      : [],
    popularSearches: Array.isArray(rawPayload.popularSearches)
      ? rawPayload.popularSearches.map((p) => sanitizeStr(String(p).trim()))
      : [],
  };

  console.log("🔍 Running Screaming Frog SEO, Scope & Flesch Readability Validation Gate...");
  const validation = validatePayload(payload);
  if (!validation.valid) {
    console.error("❌ SEO / Readability Validation Failed:");
    validation.errors.forEach((e) => console.error("   -", e));
    process.exit(1);
  }

  console.log(`✅ Passed SEO & Readability Gate!`);
  console.log(`   - Words: ${validation.readability.totalWords}`);
  console.log(
    `   - Flesch Reading Ease Score: ${validation.readability.score} (Avg Sentence Length: ${validation.readability.avgSentenceLength} words)`
  );
  console.log(`   - H1 Title (${payload.title.length} chars): ${payload.title}`);
  console.log(`   - Meta Title (${payload.metaTitle.length} chars): ${payload.metaTitle}`);
  console.log(
    `   - Meta Description (${payload.metaDescription.length} chars): ${payload.metaDescription}`
  );
  console.log(`   - Slug (${payload.slug.length} chars): ${payload.slug}`);

  if (!process.env.MONGODB_URI) {
    console.error("❌ MONGODB_URI is not set in .env.local!");
    process.exit(1);
  }

  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();
  const bucket = new GridFSBucket(db, { bucketName: "fs" });

  try {
    // Ensure indexes on `blogs` collection
    await db.collection("blogs").createIndex({ slug: 1 }, { unique: true }).catch(() => {});
    await db.collection("blogs").createIndex({ publishedAt: -1 }).catch(() => {});

    // 1. Upload Cover Image & Infographic Image to MongoDB GridFS (`fs`)
    let coverImageObj = payload.coverImage || null;
    let heroPath = payload.localHeroImagePath;
    if ((!heroPath || !fs.existsSync(heroPath)) && payload.coverImagePrompt && !coverImageObj?.gridFsId) {
      heroPath = path.resolve(__dirname, `images/${payload.slug}-cover.png`);
      if (!fs.existsSync(heroPath)) {
        console.log(`🎨 Generating Cover Image from coverImagePrompt...`);
        await generateImageToLocalFile(payload.coverImagePrompt, heroPath);
      }
    }
    if (heroPath && fs.existsSync(heroPath)) {
      console.log(
        `📤 Uploading Featured Cover Image (${heroPath}) to MongoDB GridFS...`
      );
      coverImageObj = await uploadLocalImageToGridFS(
        bucket,
        heroPath,
        `${payload.slug}-cover${path.extname(heroPath) || ".png"}`
      );
      console.log(`✅ Cover Image GridFS ID: ${coverImageObj.gridFsId} (/api/blog/image/${coverImageObj.gridFsId})`);
    } else if (!coverImageObj?.gridFsId) {
      throw new Error(
        "Missing localHeroImagePath or coverImagePrompt or coverImage.gridFsId in payload! Every blog must have a dedicated cover image."
      );
    }

    let infographicImageObj = payload.infographicImage || null;
    let infoPath = payload.localInfographicPath;
    if ((!infoPath || !fs.existsSync(infoPath)) && payload.infographicPrompt && !infographicImageObj?.gridFsId) {
      infoPath = path.resolve(__dirname, `images/${payload.slug}-infographic.png`);
      if (!fs.existsSync(infoPath)) {
        console.log(`🎨 Generating Infographic Image from infographicPrompt...`);
        await generateImageToLocalFile(payload.infographicPrompt, infoPath);
      }
    }
    if (infoPath && fs.existsSync(infoPath)) {
      console.log(
        `📤 Uploading Topic Process Infographic (${infoPath}) to MongoDB GridFS...`
      );
      infographicImageObj = await uploadLocalImageToGridFS(
        bucket,
        infoPath,
        `${payload.slug}-infographic${path.extname(infoPath) || ".png"}`
      );
      console.log(
        `✅ Infographic GridFS ID: ${infographicImageObj.gridFsId} (/api/blog/image/${infographicImageObj.gridFsId})`
      );
    } else if (!infographicImageObj?.gridFsId) {
      throw new Error(
        "Missing localInfographicPath or infographicPrompt or infographicImage.gridFsId in payload! Every blog must have a dedicated infographic image."
      );
    }

    // 2. Compute IST Date (YYYY-MM-DD)
    const istFormatter = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const todayIST = istFormatter.format(new Date());
    const nowIso = new Date().toISOString();

    const cleanSlug = payload.slug
      .toLowerCase()
      .replace(/[^a-z0-9_-]/g, "-")
      .replace(/-+/g, "-");

    // 3. Build MongoDB Blog Document matching /api/blog/route.ts & /blog/[slug]/page.tsx
    const blogDoc = {
      title: payload.title.trim(),
      slug: cleanSlug,
      subtitleKeywords: payload.subtitle.trim(),
      metaTitle: payload.metaTitle.trim(),
      metaDescription: payload.metaDescription.trim(),
      publishedAt: payload.publishedAt || `${todayIST}T00:00:00.000Z`,
      author: payload.author || "Team LegalRecovery",
      coverImage: coverImageObj,
      infographicImage: infographicImageObj,
      popularSearches: payload.popularSearches,
      faqs: payload.faqs.map((f) => ({
        question: f.question.trim(),
        answer: f.answer.trim(),
      })),
      reviewSnippets: payload.reviews.map((r) => ({
        reviewerName: r.reviewerName.trim(),
        rating: Number(r.rating) || 5,
        reviewText: r.reviewText.trim(),
        reviewDate: r.reviewDate,
      })),
      content: payload.description.trim(),
      updatedAt: nowIso,
    };

    // 4. Idempotent Upsert into MongoDB `blogs` collection
    console.log(
      `📝 Upserting blog into MongoDB 'blogs' collection (slug: ${cleanSlug})...`
    );
    const existing = await db.collection("blogs").findOne({ slug: cleanSlug });
    let mongoId;
    if (existing) {
      await db
        .collection("blogs")
        .updateOne({ _id: existing._id }, { $set: blogDoc });
      mongoId = existing._id.toString();
      console.log(`✅ Updated existing MongoDB blog document ID: ${mongoId}`);
    } else {
      const insertRes = await db.collection("blogs").insertOne({
        ...blogDoc,
        createdAt: nowIso,
      });
      mongoId = insertRes.insertedId.toString();
      console.log(`✅ Inserted new MongoDB blog document ID: ${mongoId}`);
    }

    const liveUrl = `https://www.legalrecovery.in/blog/${cleanSlug}`;

    // 5. Update legalrecovery_30_day_plan.json
    const planPath = path.resolve(__dirname, "legalrecovery_30_day_plan.json");
    let plan = null;
    if (fs.existsSync(planPath)) {
      plan = JSON.parse(fs.readFileSync(planPath, "utf8"));
      const dayEntry = plan.days.find(
        (d) => d.day === payload.dayNumber || d.slug === cleanSlug
      );
      if (dayEntry) {
        dayEntry.status = "published";
        dayEntry.publishedDate = todayIST;
        dayEntry.publishedAt = nowIso;
        dayEntry.mongoId = mongoId;
        dayEntry.liveUrl = liveUrl;
        dayEntry.coverImageUrl = `/api/blog/image/${coverImageObj.gridFsId}`;
        dayEntry.infographicImageUrl = `/api/blog/image/${infographicImageObj.gridFsId}`;
        dayEntry.wordCount = validation.readability.totalWords;
        dayEntry.fleschReadingEase = validation.readability.score;
        fs.writeFileSync(planPath, JSON.stringify(plan, null, 2));
        console.log(
          `✅ Updated Day ${dayEntry.day} status to 'published' in legalrecovery_30_day_plan.json`
        );
      }
    }

    // 6. Warm live URL, /blog hub, and /sitemap.xml & Submit Sitemap to Google Search Console
    try {
      console.log(`🌐 Warming live URL (${liveUrl}), /blog hub, and /sitemap.xml...`);
      await fetch(liveUrl).catch(() => {});
      await fetch("https://www.legalrecovery.in/blog").catch(() => {});
      await fetch("https://www.legalrecovery.in/sitemap.xml").catch(() => {});
      await submitLegalRecoverySitemaps(liveUrl);
    } catch (gscErr) {
      console.warn(
        "⚠️ Non-fatal warning during URL warming / GSC sitemap submission:",
        gscErr.message
      );
    }

    console.log(`\n🎉 BLOG PUBLISHED LIVE AT: ${liveUrl}`);

    // 7. Automatic Catch-Up Engine (If an earlier day was missed because the laptop was asleep/off)
    if (plan && Array.isArray(plan.days)) {
      const overduePendingDays = plan.days.filter(
        (d) => d.status === "pending" && (d.scheduledDate || d.date) <= todayIST
      );

      if (
        overduePendingDays.length > 0 &&
        process.env.SKIP_CATCHUP_SPAWN !== "1"
      ) {
        const nextCatchupDay = overduePendingDays[0];
        console.log(
          `\n⚡ CATCH-UP ENGINE: Detected ${overduePendingDays.length} remaining overdue pending day(s) for <= ${todayIST} (Next up: Day ${nextCatchupDay.day} - "${nextCatchupDay.title}").`
        );
        console.log(
          `🚀 Spawning a fresh isolated Gemini 4 Argon (Pro) conversation to publish Day ${nextCatchupDay.day} automatically...`
        );

        const sidecarPath =
          "/Users/amalegalsolutions/.gemini/config/sidecars/legalrecovery-daily-blog-publisher/sidecar.json";
        if (fs.existsSync(sidecarPath)) {
          const sidecarConfig = JSON.parse(fs.readFileSync(sidecarPath, "utf8"));
          const promptText =
            sidecarConfig.prompt ||
            (Array.isArray(sidecarConfig.args)
              ? sidecarConfig.args[sidecarConfig.args.length - 1]
              : "");
          const logDir = "/Users/amalegalsolutions/.gemini/antigravity/logs";
          fs.mkdirSync(logDir, { recursive: true });
          const outFd = fs.openSync(
            path.join(logDir, "legalrecovery-daily-blog-catchup.out.log"),
            "a"
          );
          const errFd = fs.openSync(
            path.join(logDir, "legalrecovery-daily-blog-catchup.err.log"),
            "a"
          );

          const child = spawn(
            "/Users/amalegalsolutions/.antigravity/antigravity/bin/agentapi",
            ["new-conversation", "--model=pro", "--", promptText],
            {
              cwd: "/Users/amalegalsolutions/Desktop/AMAWORK/legalrecovery/lr",
              detached: true,
              stdio: ["ignore", outFd, errFd],
            }
          );
          child.unref();
          console.log(
            `✅ Spawned catch-up process (PID: ${child.pid}) for Day ${nextCatchupDay.day}.`
          );
        }
      } else if (overduePendingDays.length === 0) {
        console.log(
          `✅ All scheduled blogs up through ${todayIST} are 100% caught up!`
        );
      }
    }
  } finally {
    await client.close();
  }

  process.exit(0);
}

publishLegalRecoveryBlog().catch((err) => {
  console.error("❌ Fatal error in publish_legalrecovery_blog.js:", err);
  process.exit(1);
});
