var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader']
        }),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};
