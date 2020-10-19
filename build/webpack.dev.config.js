const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.config");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devServer: {
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
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "../examples/index.html"),
      template: path.resolve(__dirname, "../examples/index.html"),
      cache: false,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ["http://localhost:3000"],
      },
      clearConsole: true,
    }),
  ],
});
