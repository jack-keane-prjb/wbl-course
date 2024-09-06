const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === "development";
const IS_PROD = NODE_ENV === "production";

const webpackConfig = require('./webpack.config');
const config = webpackConfig(NODE_ENV);

function setupDevtool() {
  if (IS_DEV) return "eval";
  if (IS_PROD) return false;
}

function getEntry() {
  if (IS_PROD) {
    return [path.resolve(__dirname, "../src/client/index.jsx")];
  }

  return [
    path.resolve(__dirname, "../src/client/index.jsx"),
    "webpack-hot-middleware/client?path=//localhost:3001/static/__webpack_hmr",
  ]
}

module.exports = {
  target: 'web',
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "react-dom": IS_DEV ? "@hot-loader/react-dom" : "react-dom",
    },
  },
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: getEntry(),
  output: {
    path: path.resolve(__dirname, "../dist/client"),
    filename: "client.js",
    // publicPath: "//localhost:3001/static/",
    publicPath: "//localhost:3000/static/",
  },
  module: {
    rules: [
      config.modules.js,
      config.modules.css,
      config.modules.svg,
      config.modules.fonts,
      config.modules.pics,
      config.modules.globalCSS,
    ],
  },
  devtool: setupDevtool(),

  plugins: IS_DEV
    ? [new CleanWebpackPlugin(), new HotModuleReplacementPlugin()]
    : [],
};
