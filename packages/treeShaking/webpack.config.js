const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  // mode: "development",
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env']
          // }
        }
      }
    ]
  },
  plugins: [
    new htmlPlugin({
      title: 'tree-shaking',
      filename: 'index.html'
    })
  ]
};