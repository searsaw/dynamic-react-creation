const { readdirSync } = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve, basename } = require('path');
const webpack = require('webpack');

const getComponentPaths = () =>
  readdirSync(resolve(__dirname, 'src', 'components'))
    .map(dir => resolve(__dirname, 'src', 'components', dir));

const getComponentNames = () =>
  getComponentPaths()
    .reduce((red, dirPath) =>
      Object.assign({}, red, { [basename(dirPath)]: dirPath }), {});

module.exports = [
  {
    devtool: 'eval-source-map',
    entry: getComponentNames(),
    output: {
      filename: 'KrogerComponents.[name].js',
      path: resolve(__dirname, 'dist'),
      library: ['KrogerComponents', '[name]'],
      libraryTarget: 'window',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader'],
        },
      ],
    },
  },
  {
    devtool: 'eval-source-map',
    entry: {
      app: resolve(__dirname, 'src', 'app.js'),
      vendor: ['react', 'react-dom'],
    },
    output: {
      filename: '[name].[hash].js',
      path: resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve(__dirname, 'src', 'index.html'),
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunk: Infinity,
      }),
    ],
  },
];
