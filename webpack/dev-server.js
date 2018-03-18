const webpack = require("webpack")
const path = require('path')
const Config = require('./config')
const webpackConfig = require("./webpack.config")
const webpackDevServer = require("webpack-dev-server")

const compiler = webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  stats: {
    contentBase: path.resolve(__dirname, "../build"),
    hot: true,
    inline: true,
    colors: true,
    historyApiFallback: true,
    overrlay: {
      errors: true
    }
  }
});
const server = new webpackDevServer(compiler, devServerOptions);

server.listen(Config.port, "127.0.0.1", () => {
  console.log(`Starting server on http://localhost:${Config.port}`);
});
