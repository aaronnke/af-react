var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var spread = require('babel-plugin-transform-object-rest-spread');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'app')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [spread],
          },
        },
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'app/css')],
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
    }),
  ],
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx', '.json'],
  },
};
