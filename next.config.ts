import type { NextConfig } from "next";

// Static export runs Clerk during prerender; it requires a non-empty publishable key.
// Use a harmless placeholder when unset (Docker/CI without secrets). For production,
// set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY to your real key (e.g. docker build --build-arg).
const rawKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.trim();
const clerkPublishableKey =
  rawKey ||
  "pk_test_Y2xlcmsuY2xlcmsuZGV2JA";

const nextConfig: NextConfig = {
  output: "export", // This exports static HTML/JS files
  images: {
    unoptimized: true, // Required for static export
  },
  env: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: clerkPublishableKey,
  },
};

export default nextConfig;