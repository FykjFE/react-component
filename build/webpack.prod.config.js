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
    libraryExport: "default",
  },
  externals: {
    // 定义外部依赖，避免把react和react-dom打包进去
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
    },
  },
});
