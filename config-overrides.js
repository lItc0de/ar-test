const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override(config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }

  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'static', 'markers'),
          to: path.resolve(__dirname, 'build', 'static', 'markers'),
        },
      ],
    })
  );

  return config;
};
