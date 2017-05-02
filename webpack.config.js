(function () {
  const path = require('path');
  const ExtractTextPlugin = require('extract-text-webpack-plugin');

  module.exports = [{
    entry: [
      __dirname + '/src/main.js'
    ],
    resolve: {
      extensions: [
        '',
        '.js',
        '.jsx'
      ]
    },
    output: {
      path: __dirname + '/dist/',
      filename: 'bundle.js'
    },
    module: {
      loaders: [{
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'stage-0',
            'react'
          ],
          plugins: [
            'syntax-async-functions',
            'transform-async-functions',
            'transform-async-to-generator',
            'transform-async-to-module-method',
            'transform-regenerator',
            'transform-runtime'
          ]
        }
      }]
    },
    devtool: 'source-map'
  }, {
    entry: {style: './src/style-sheets/main.js'},
    output: {
      path: __dirname + '/dist/css/',
      filename: 'styles.css'
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style-loader',
              'css-loader!sass-loader')
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('styles.css')
    ]
  }];
}());
