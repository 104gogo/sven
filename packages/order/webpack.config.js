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
    new htmlPlugin({
      title: 'webpack order test',
      filename: 'index.html'
    })
  ]
};