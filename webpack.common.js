var path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: ["./src/index.js", "webpack-hot-middleware/client"]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "docs"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.less/,
        use: ["less-loader"]
      },
      {
        test: /\.sass/,
        use: ["sass-loader"]
      },
      {
        test: /\.scss$/,
        use: ["scss-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HTMLWebpackPlugin({
      title: "五子棋",
      template: path.resolve(__dirname, "src", "index.html")
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          priority: -10
        },
        initial: {
          name: "commons",
          chunks: "initial",
          minChunks: 1,
          priority: -20
        }
      }
    }
  }
};
