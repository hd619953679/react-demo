const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const Config = require('./config.js');
const uglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const isProd = process.env.NODE_ENV === "production";

const basePlugin = [
  new cleanWebpackPlugin("build", { root: path.resolve(__dirname, "../") }),
  new htmlWebpackPlugin({
    template: "index.tpl.html",
    filename: "index.html",
    minify: {
      removeComments: true
    }
  }),
  new ExtractTextPlugin(`main_${Config.version}.css`)
];
let addPlugin;
if (!isProd) {
  addPlugin = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ];
} else {
  addPlugin = [new uglifyjsWebpackPlugin()];
}

module.exports = basePlugin.concat(addPlugin);
