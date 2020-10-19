const path = require("path");
const { merge } = require("webpack-merge");
const base = require("./webpack.common.config");

module.exports = merge(base, {
  mode: "production",
  devtool: false,
  entry: path.resolve(__dirname, "../components/index.tsx"),
  output: {
    path: path.resolve(__dirname, "../lib/"),
    filename: "index.js",
    libraryTarget: "umd",
  },
  externals: ["react", "react-dom"],
});
