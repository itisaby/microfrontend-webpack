const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: "./src/pages/index.js",
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3000,
    hot: true,
  },
  output: {
    publicPath:
      "https://3000-itisaby-microfrontendwe-eux7dklcpn0.ws-us95.gitpod.io/",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "my_microfrontend",
      filename: "static/chunks/[name].[contenthash].js",
      remotes: {},
      exposes: {
        "./Page": "./src/pages/Page.js",
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: "^17.0.2",
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: "^17.0.2",
        },
      },
    }),
  ],
};
