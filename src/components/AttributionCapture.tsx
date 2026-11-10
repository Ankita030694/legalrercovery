"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";

/** Records where the visitor came from when they land on any page. Renders nothing. */
export default function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);

  return null;
}
