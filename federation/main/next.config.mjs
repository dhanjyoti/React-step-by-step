import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "home",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            weather:
              "weather@http://localhost:3001/_next/static/chunks/remoteEntry.js",
            simple_interest:
              "simple_interest@http://localhost:3002/_next/static/chunks/remoteEntry.js",
            show_input:
              "show_input@http://localhost:3003/_next/static/chunks/remoteEntry.js",
          },
          exposes: {},
          shared: {},
        })
      );
    }

    return config;
  },
};

export default nextConfig;
