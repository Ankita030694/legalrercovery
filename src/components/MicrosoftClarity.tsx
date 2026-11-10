"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

/**
 * Microsoft Clarity (heatmaps + session recordings).
 * Initialised once on the client; Clarity tracks App Router
 * (client-side) navigations automatically.
 * Renders nothing, and is a no-op until NEXT_PUBLIC_CLARITY_PROJECT_ID is set.
 */
export default function MicrosoftClarity() {
  useEffect(() => {
    if (!CLARITY_PROJECT_ID) return;
    Clarity.init(CLARITY_PROJECT_ID);
  }, []);

  return null;
}
