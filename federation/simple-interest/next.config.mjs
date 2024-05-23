
import NextFederationPlugin from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "simple_interest",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            home: "home@http://localhost:3000/_next/static/chunks/remoteEntry.js",
          },
          exposes: {
            // "./Test": "./src/components/test.js",
            "./Home": "./src/pages/index.js",
          },
        })
      );
    }
    return config;
  },
};

export default nextConfig;

