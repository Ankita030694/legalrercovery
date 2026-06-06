// Location data for legal-notice-services slug pages
// Re-uses the same cities from legal-recovery-by-city but with unique legal notice content

import { locationData as baseLocationData } from "../legal-recovery-by-city/locationData";

export interface NoticeLocationData {
  slug: string;
  name: string;
  title: string;
  description: string;
}

export const noticeLocationData: NoticeLocationData[] = baseLocationData.map((loc) => ({
  slug: loc.slug,
  name: loc.name,
  title: `Legal Notice Services in ${loc.name}`,
  description: `Send a professional legal notice in ${loc.name} drafted by expert advocates. Legal Recovery offers affordable legal notice services for unpaid dues, property disputes, tenant issues, employment matters & more in ${loc.name}.`,
}));

export function getNoticeLocationBySlug(slug: string): NoticeLocationData | undefined {
  return noticeLocationData.find((loc) => loc.slug === slug);
}
