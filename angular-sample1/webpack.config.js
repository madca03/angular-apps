var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./public/javascripts/scripts.js",
  output: {
    path: __dirname + "/public/javascripts",
    filename: "scripts.min.js"
  },
  plugins: debug ? [
    new webpack.OldWatchingPlugin(),
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  watch: true,
};
