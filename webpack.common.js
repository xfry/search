const webpack   = require('webpack');
const path      = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ['whatwg-fetch', path.join(__dirname, './client','js', 'main.js')],
  output: {
    path: path.join(__dirname, './public'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: path.join(__dirname, './client'),
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: 'babel_cache',
        presets: ['react', 'es2015'],
        "plugins": ["transform-async-to-generator"]
      }
    },{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ['css-loader','sass-loader']
      })
    },{ 
      test: /\.(ttf|eot|woff|svg)$/,
      use: {
        loader: 'url-loader',
        query: 'limit=100000&mimetype=font/svg+xml&name=/[path][name].[ext]'
      }
    },{ 
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        query: {
          limit: 800000,
          mimetype: "image/jpg",
          name:'/[path][name].[ext]'
        }
      }
    }]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: false,
      allChunks: true
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
};
