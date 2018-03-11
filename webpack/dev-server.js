const webpack = require("webpack");
const Config = require('./config');
const webpackConfig = require("./webpack.config");
const webpackDevServer = require("webpack-dev-server");

const compiler = webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  stats: {
    hot: true,
    inline: true,
    colors: true,
    historyApiFallback: true
  }
});
const server = new webpackDevServer(compiler, devServerOptions);

server.listen(Config.port, "127.0.0.1", () => {
  console.log(`Starting server on http://localhost:${Config.port}`);
});
