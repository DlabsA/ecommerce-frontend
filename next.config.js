const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const withPWA = require("next-pwa")({
  dest: "public",
  skipWaiting: true,
});

const nextConfig = {
  i18n: {
    locales: ["en", "my"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "robohash.org",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...nextConfig,
      turbopack: {},
    };
  }

  return withPWA(nextConfig);
};
