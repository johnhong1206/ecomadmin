/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.sanity.io",
      "image.tmdb.org",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "platform-lookaside.fbsbx.com",
      "lh3.googleusercontent.com",
      "thumbs.dreamstime.com",
      "media.wired.com",
      "images.unsplash.com",
      "cdn.vox-cdn.com",
    ],
  },
};

module.exports = nextConfig;
