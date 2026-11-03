import HomeClient from "./HomeClient";
import LatestBlogPosts from "@/components/LatestBlogPosts";

// Regenerated hourly, and on demand when a post is published (see /api/revalidate).
export const revalidate = 3600;

export default function Home() {
  return <HomeClient latestPosts={<LatestBlogPosts />} />;
}
