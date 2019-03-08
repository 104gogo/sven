const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  plugins: [
    new htmlPlugin({
      title: 'webpack order test',
      filename: 'index.html'
    })
  ]
};