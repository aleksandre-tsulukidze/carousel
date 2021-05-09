const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    assetModuleFilename: 'images/[name][contenthash][ext]'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      { test: /\.(png|jpg|svg)$/i, type: 'asset/resource' }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash].css' }),
    new CleanWebpackPlugin()
  ]
});
