const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.config");

module.exports = merge(common, {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "../examples/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "../examples/"),
    filename: `bundle.js`,
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../examples/"),
    hot: true,
    hotOnly: true,
    open: false,
    port: 3000,
    overlay: true,
    inline: true,
    historyApiFallback: true,
    clientLogLevel: "silent",
    quiet: true,
    noInfo: true,
    stats: "errors-only",
    host: "localhost",
    disableHostCheck: true,
  },
  devtool: "source-map",
  plugins: [],
});
