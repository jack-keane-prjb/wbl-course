const path = require("path");
const nodeExternals = require("webpack-node-externals");
const NODE_ENV = process.env.NODE_ENV;

const webpackConfig = require('./webpack.config');
const config = webpackConfig(NODE_ENV);

module.exports = {
  target: "node",
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: path.resolve(__dirname, "../src/server/server.js"),
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "server.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      config.modules.js,
      config.modules.svg,
      config.modules.fonts,
      config.modules.pics,
      config.modules.cssServer,
    ],
  },
  optimization: {
    minimize: false,
  },
};
