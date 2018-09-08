const webpack = require("webpack");
const devConfig = require("../webpack.dev.js");
const prodConfig = require("../webpack.prod.js");

const config = process.env.NODE_ENV === "development" ? devConfig : prodConfig;

webpack(config, (err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(stats.warnings);
  }
});
