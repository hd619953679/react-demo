const path = require("path");
const Config = require("./config");
const plugin = require("./plugin");
const isProd = process.env.NODE_ENV === "production";
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "autoprefixer-loader", "less-loader"]
        })
      },
      {
        test: /\.module.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "typings-for-css-modules-loader",
              options: {
                modules: true,
                namedExport: true,
                camelCase: true,
                minimize: true,
                localIdentName: "[local]_[hash:base64:5]"
              }
            },
            "autoprefixer-loader",
            "less-loader"
          ]
        })
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader?limit=8192&name=asset/images/[hash:8].[name].[ext]"
      }
    ]
  },
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".js", ".json", ".ts", ".tsx"]
  },
  plugins: plugin
};
