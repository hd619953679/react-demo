const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const uglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const isProd = process.env.NODE_ENV === "production";

const basePlugin = [
  new cleanWebpackPlugin("build", { root: path.resolve(__dirname, "../") }),
  new htmlWebpackPlugin({
    template: "index.tpl.html",
    filename: "index.html",
    minify: {
      removeComments: true
    }
  })
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
