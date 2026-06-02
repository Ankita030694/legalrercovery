// Zoho Mail REST API Integration
// Handles OAuth 2.0 Token Exchange and Sending Emails via HTTP REST API

interface TokenResponse {
  access_token: string;
  expires_in: number;
  api_domain?: string;
  error?: string;
}

let cachedToken: string | null = null;
let tokenExpiryTime = 0;
let apiDomain = "https://mail.zoho.in"; // Default base URL for India region
let cachedAccountId: string | null = null;

// Promises to prevent concurrent race conditions / cache stampedes under high scale loads
let tokenPromise: Promise<{ token: string; domain: string }> | null = null;
let accountIdPromise: Promise<string> | null = null;

/**
 * Exchanges the long-lived Refresh Token for a temporary Access Token.
 * Supports accounts.zoho.in and accounts.zoho.com fallback logic.
 * Employs Promise caching to prevent async race conditions under concurrent dispatches.
 */
export async function getZohoAccessToken(): Promise<{ token: string; domain: string }> {
  // Return cached token if it is still valid (with a 30-second safety window)
  if (cachedToken && Date.now() < tokenExpiryTime - 30000) {
    return { token: cachedToken, domain: apiDomain };
  }

  if (tokenPromise) {
    console.log("[Zoho REST API] Token exchange already in progress, sharing promise...");
    return tokenPromise;
  }

  tokenPromise = (async () => {
    try {
      const clientId = process.env.NOTICE_CLIENT_ID;
      const clientSecret = process.env.NOTICE_CLIENT_SECRET;
      const refreshToken = process.env.NOTICE_REFRESH_TOKEN;

      if (!clientId || !clientSecret || !refreshToken) {
        console.error("Missing Zoho OAuth credentials in environment variables.");
        throw new Error("Missing NOTICE_CLIENT_ID, NOTICE_CLIENT_SECRET, or NOTICE_REFRESH_TOKEN in .env.local");
      }

      // Attempt 1: zoho.in (India Region)
      try {
        console.log("[Zoho REST API] Attempting token exchange via accounts.zoho.in...");
        const response = await fetch("https://accounts.zoho.in/oauth/v2/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            refresh_token: refreshToken,
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: "refresh_token",
          }),
        });

        const data: TokenResponse = await response.json();
        if (response.ok && data.access_token) {
          cachedToken = data.access_token;
          tokenExpiryTime = Date.now() + (data.expires_in || 3600) * 1000;
          apiDomain = "https://mail.zoho.in";
          console.log("[Zoho REST API] Token successfully exchanged via accounts.zoho.in.");
          return { token: cachedToken, domain: apiDomain };
        } else {
          console.warn("[Zoho REST API] accounts.zoho.in exchange response:", data);
        }
      } catch (error) {
        console.error("[Zoho REST API] Error during accounts.zoho.in exchange:", error);
      }

      // Attempt 2: zoho.com (US / Global Region Fallback)
      try {
        console.log("[Zoho REST API] Attempting token exchange via accounts.zoho.com fallback...");
        const response = await fetch("https://accounts.zoho.com/oauth/v2/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            refresh_token: refreshToken,
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: "refresh_token",
          }),
        });

        const data: TokenResponse = await response.json();
        if (response.ok && data.access_token) {
          cachedToken = data.access_token;
          tokenExpiryTime = Date.now() + (data.expires_in || 3600) * 1000;
          apiDomain = "https://mail.zoho.com";
          console.log("[Zoho REST API] Token successfully exchanged via accounts.zoho.com.");
          return { token: cachedToken, domain: apiDomain };
        } else {
          console.error("[Zoho REST API] accounts.zoho.com exchange failed:", data);
          throw new Error(`Zoho token exchange failed on both endpoints. Error: ${data.error || "unknown"}`);
        }
      } catch (error) {
        console.error("[Zoho REST API] Error during accounts.zoho.com fallback exchange:", error);
        throw error;
      }
    } finally {
      // Clear token promise once resolved/rejected so future calls after expiration can refresh
      tokenPromise = null;
    }
  })();

  return tokenPromise;
}

/**
 * Retrieves the numeric account ID associated with the authenticated user mailbox.
 * Uses get-all-accounts API and filters by configured NOTICE_EMAIL, or supports static override.
 * Employs Promise caching to prevent stampedes under high scale loads.
 */
export async function getZohoAccountId(token: string, baseDomain: string): Promise<string> {
  // Check for static override in env first to avoid extra API hits and bypass scope constraints
  const envAccountId = process.env.ZOHO_ACCOUNT_ID || process.env.NOTICE_ZOHO_ACCOUNT_ID;
  if (envAccountId) {
    cachedAccountId = envAccountId;
    console.log(`[Zoho REST API] Using static Zoho accountId from env: ${cachedAccountId}`);
    return cachedAccountId;
  }

  if (cachedAccountId) {
    return cachedAccountId;
  }

  if (accountIdPromise) {
    console.log("[Zoho REST API] Account ID fetch already in progress, sharing promise...");
    return accountIdPromise;
  }

  accountIdPromise = (async () => {
    try {
      const url = `${baseDomain}/api/accounts`;
      console.log(`[Zoho REST API] Fetching accountId from ${url}...`);

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Authorization": `Zoho-oauthtoken ${token}`,
          "Accept": "application/json",
        },
      });

      const body = await response.json();
      if (!response.ok) {
        console.error("[Zoho REST API] Failed to fetch Zoho accounts:", body);
        throw new Error(`Failed to retrieve Zoho accounts list: ${JSON.stringify(body)}`);
      }

      console.log("[Zoho REST API] Get Accounts API Response:", JSON.stringify(body));

      const accountsData = body.data;
      if (!accountsData) {
        throw new Error("No account data found in Zoho accounts response");
      }

      const targetEmail = (process.env.NOTICE_EMAIL || "notice@amalegalsolutions.com").toLowerCase();

      // If data is an array of mailboxes
      if (Array.isArray(accountsData)) {
        const matched = accountsData.find(acc => {
          const mailbox = (acc.mailboxAddress || "").toLowerCase();
          return mailbox === targetEmail;
        });

        if (matched && matched.accountId) {
          cachedAccountId = matched.accountId.toString();
          console.log(`[Zoho REST API] Matched accountId for email ${targetEmail}: ${cachedAccountId}`);
          return cachedAccountId as string;
        }

        // Default to the first account in the array if no exact email match is found
        if (accountsData.length > 0 && accountsData[0].accountId) {
          cachedAccountId = accountsData[0].accountId.toString();
          console.log(`[Zoho REST API] Email ${targetEmail} not matched. Defaulting to first mailbox: ${cachedAccountId}`);
          return cachedAccountId as string;
        }
      } else if (accountsData.accountId) {
        // If it returns a single object
        cachedAccountId = accountsData.accountId.toString();
        console.log(`[Zoho REST API] Retrieved single accountId: ${cachedAccountId}`);
        return cachedAccountId as string;
      }

      throw new Error("Could not parse accountId from Zoho accounts response.");
    } finally {
      accountIdPromise = null;
    }
  })();

  return accountIdPromise;
}

/**
 * Sends an email using the Zoho Mail REST HTTP API.
 * Handles in-memory PDF attachment uploading via raw binary stream.
 */
export async function sendEmailViaZohoAPI(
  toEmail: string,
  subject: string,
  bodyText: string,
  pdfBuffer?: Buffer,
  pdfFilename?: string,
  ccEmail?: string
): Promise<boolean> {
  try {
    console.log(`[Zoho REST API] Initiating email send to: ${toEmail}`);
    const { token, domain } = await getZohoAccessToken();
    const accountId = await getZohoAccountId(token, domain);
    const fromEmail = process.env.NOTICE_EMAIL || "notice@amalegalsolutions.com";

    const attachmentsPayload: any[] = [];

    // Step 1: Handle PDF upload if buffer is provided
    if (pdfBuffer && pdfFilename) {
      console.log(`[Zoho REST API] Uploading raw PDF attachment: ${pdfFilename} (${pdfBuffer.length} bytes)...`);
      const uploadUrl = `${domain}/api/accounts/${accountId}/messages/attachments?fileName=${encodeURIComponent(pdfFilename)}`;
      
      const uploadResponse = await fetch(uploadUrl, {
        method: "POST",
        headers: {
          "Authorization": `Zoho-oauthtoken ${token}`,
          "Content-Type": "application/octet-stream",
        },
        body: pdfBuffer as any,
      });

      const uploadResult = await uploadResponse.json();
      if (!uploadResponse.ok) {
        console.error("[Zoho REST API] PDF Attachment Upload Failed:", uploadResult);
        throw new Error(`Failed to upload attachment: ${JSON.stringify(uploadResult)}`);
      }

      console.log("[Zoho REST API] Attachment Upload Success Response:", JSON.stringify(uploadResult));

      const uploadData = uploadResult.data;
      if (uploadData) {
        if (uploadData.storeName && uploadData.attachmentPath) {
          attachmentsPayload.push({
            storeName: uploadData.storeName,
            attachmentName: uploadData.attachmentName || pdfFilename,
            attachmentPath: uploadData.attachmentPath,
          });
        } else if (Array.isArray(uploadData.attachments) && uploadData.attachments.length > 0) {
          const att = uploadData.attachments[0];
          attachmentsPayload.push({
            storeName: att.storeName || att.attachmentID,
            attachmentName: att.attachmentName || att.fileName || pdfFilename,
            attachmentPath: att.attachmentPath || att.attachmentID,
          });
        } else {
          console.warn("[Zoho REST API] Unexpected attachment structure, pushing raw data:", uploadData);
          attachmentsPayload.push(uploadData);
        }
      } else {
        throw new Error("No data returned from Zoho attachment upload API.");
      }
    }

    // Step 2: Send email with attachments
    const sendUrl = `${domain}/api/accounts/${accountId}/messages`;
    console.log(`[Zoho REST API] Sending email content to: ${toEmail}...`);

    // Determine content format: HTML vs Plaintext
    const trimmedBody = bodyText.trim();
    const isHtml = trimmedBody.startsWith("<") && trimmedBody.includes(">");

    const payload: any = {
      fromAddress: fromEmail,
      toAddress: toEmail,
      subject: subject,
      content: bodyText,
      mailFormat: isHtml ? "html" : "plaintext",
    };

    if (ccEmail) {
      payload.ccAddress = ccEmail;
    }

    if (attachmentsPayload.length > 0) {
      payload.attachments = attachmentsPayload;
    }

    const sendResponse = await fetch(sendUrl, {
      method: "POST",
      headers: {
        "Authorization": `Zoho-oauthtoken ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const sendResult = await sendResponse.json();
    if (!sendResponse.ok) {
      console.error("[Zoho REST API] Send Mail API Failed:", sendResult);
      return false;
    }

    console.log("[Zoho REST API] Send Mail API Success:", JSON.stringify(sendResult));
    return true;
  } catch (error) {
    console.error("[Zoho REST API] Error during sendEmailViaZohoAPI execution:", error);
    return false;
  }
}
