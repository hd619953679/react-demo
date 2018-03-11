const path = require("path");
const Config = require("./config");
const plugin = require("./plugin");
const isProd = process.env.NODE_ENV === "production";
const entryMain = !isProd
  ? [ 
      "webpack-dev-server/client?http://localhost:" + Config.port,
      "webpack/hot/only-dev-server",
      // "react-hot-loader/patch",
    ]
  : [];
module.exports = {
  entry: entryMain.concat(["entry.ts"]),
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: `[name]_${Config.version}.js`
  },
  devtool: isProd ? "source-map" : "inline-source-map", 
  devServer:{
    contentBase: path.resolve(__dirname, "../build")
  },
  module: {
    rules: [
      { test: /\.tsx|ts$/, use: "ts-loader" },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
    ]
  },
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".js", ".json", "./ts", ".tsx"]
  },
  plugins: plugin
};
