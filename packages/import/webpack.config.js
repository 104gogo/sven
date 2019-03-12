const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  devtool: false, // 去掉eval, 方便查看打包后的代码
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /(node_modules|bower_components)/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: ['@babel/preset-env']
  //         }
  //       }
  //     }
  //   ]
  // },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.TYPE': JSON.stringify('mobile'),
    }),
    new htmlPlugin({
      title: 'webpack import test',
      filename: 'index.html'
    })
  ]
};