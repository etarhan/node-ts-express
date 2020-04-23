const webpack = require('webpack');
const StartServerPlugin = require('start-server-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const common = require('./webpack.common.js');

module.exports = (_, { mode, watch }) => {
  const config = common;
  if (mode === 'development') {
      config.mode = mode,
      config.devtool = 'inline-source-map';

    if (watch) {
      config.entry =  ['webpack/hot/poll?100', './src/main.ts'],
      config.externals = nodeExternals({ whitelist: ['webpack/hot/poll?100']}),
      config.plugins = [
        new webpack.HotModuleReplacementPlugin(),
        new StartServerPlugin({
          name: 'main.js',
        }),
      ];
    }
  }

  return config;
};
