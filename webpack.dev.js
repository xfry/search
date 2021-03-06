const path    = require('path');
const merge   = require('webpack-merge');
const common  = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    inline: true,
    port: 8080,
  },
});
