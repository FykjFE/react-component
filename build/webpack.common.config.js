const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");
const isDev = process.env.NODE_ENV === "development";

const scssRegex = /\.(scss)$/;
const scssModuleRegex = /\.module\.(scss)$/;

module.exports = {
  entry: {
    index: path.resolve(__dirname, "../examples/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "../lib"),
    filename: `bundle.js`,
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.ts|tsx|js$/,
        exclude: /node_modules/,
        use: ["thread-loader", "babel-loader"],
        // include: path.resolve(__dirname, "../src"),
      },
      {
        test: scssModuleRegex,
        include: path.resolve(__dirname, "../src"),
        use: [
          {
            loader: isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                exportLocalsConvention: "camelCaseOnly",
              },
              sourceMap: isDev,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: scssRegex,
        exclude: scssModuleRegex,
        include: path.resolve(__dirname, "../src"),
        use: [
          {
            loader: isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: false,
              sourceMap: isDev,
            },
          },
          { loader: "sass-loader", options: { sourceMap: isDev } },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false,
              outputPath: "assets/images",
              name: "[name]-[hash:8].[ext]",
              limit: 8192,
              fallback: require.resolve("file-loader"),
            },
          },
        ],
      },
    ],
  },
  plugins: [],
  resolve: {
    extensions: [".tsx", "scss", ".ts", ".js"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      }),
    ],
  },
  optimization: {},
  externals: {},
};
