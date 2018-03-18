const path = require("path");
const Config = require("./config");
const plugin = require("./plugin");
const isProd = process.env.NODE_ENV === "production";
const entryMain = !isProd
  ? [
      "react-hot-loader/patch",
      "webpack-dev-server/client?http://localhost:" + Config.port,
      "webpack/hot/only-dev-server"
    ]
  : [];
module.exports = {
  entry: entryMain.concat(["entry.ts"]),
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: `[name]_${Config.version}.js`
  },
  devtool: isProd ? "source-map" : "inline-source-map",
  // devServer: {
  //   hot: true,
  //   inline: true,
  //   colors: true,
  //   historyApiFallback: true,
  //   overrlay: {
  //     errors: true
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: [
          // "react-hot-loader/webpack",
          "babel-loader",
          "awesome-typescript-loader"
        ],
        exclude: /node_modules/
      },
      // { test: /\.tsx?$/, loaders: ['react-hot-loader/webpack', 'awesome-typescript-loader'] },
      // { test: /\.ts?$/, loaders: ['ts-loader'] },
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] }
    ]
  },
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".js", ".json", ".ts", ".tsx"]
  },
  plugins: plugin
};
