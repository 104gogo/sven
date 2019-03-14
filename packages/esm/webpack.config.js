const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');

const cwd = process.cwd();

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: path.join(cwd, 'node_modules'),
        // include: path.join(cwd, 'src'),
        include: [path.join(cwd, 'src'), path.join(cwd, 'node_modules/swiper')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  // resolve: {
  //   mainFields: ['main'],
  // },
  plugins: [
    new htmlPlugin({
      title: 'webpack import test',
      filename: 'index.html'
    })
  ]
};