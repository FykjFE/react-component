const { merge } = require("webpack-merge");
const common = require("./webpack.common.config");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
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
    host: "0.0.0.0",
    disableHostCheck: true,
  },
  devtool: "source-map",
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ["http://localhost:3000"],
      },
      clearConsole: true,
    }),
  ],
});
