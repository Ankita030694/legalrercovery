import { revalidatePath } from "next/cache";

/**
 * Marks every page that lists blog posts as stale so the next request renders fresh:
 * the sitemap (so Google sees new URLs), the homepage "Latest Recovery Guides" block,
 * the /blog listing, and the post itself.
 */
export function revalidateBlogSurfaces(slugs: Array<string | null | undefined> = []) {
  revalidatePath("/sitemap.xml");
  revalidatePath("/");
  revalidatePath("/blog");
  for (const slug of slugs) {
    if (slug) revalidatePath(`/blog/${slug}`);
  }
}
