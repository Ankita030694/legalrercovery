import { goneResponse } from "@/lib/gone";

// The per-city pages were near-identical apart from the place name and have been removed.
// Every URL under this section now answers 410 Gone; the section index page is unaffected.
export function GET() {
  return goneResponse("GET");
}

export function HEAD() {
  return goneResponse("HEAD");
}
