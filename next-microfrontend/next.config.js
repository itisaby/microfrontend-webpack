/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: (config, { isServer, webpack }) => {
    // Expose a component to be consumed by other federated modules
    config.plugins.push(
      new ModuleFederationPlugin({
        name: "myapp",
        library: { type: "var", name: "myapp" },
        filename: "remoteEntry.js",
        exposes: {
          "./MyComponent": "./src/pages/Page.js",
        },
      })
    );

    return config;
  },
};


// module.exports = nextConfig
