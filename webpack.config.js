const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './App.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  optimization: {
    // We no not want to minimize our code.
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html.tpl',
      filename: './index.html'
    })
  ]
};
