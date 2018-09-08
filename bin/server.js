const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const app = express();
const config = require("../webpack.dev.js");
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    writeToDisk: true
  })
);

app.use(webpackHotMiddleware(compiler));

app.listen(9000, function() {
  console.log("app listening on port 9000!\n");
});
