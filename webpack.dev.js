const WebpackMerge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path')

module.exports = WebpackMerge.merge(common, {
  mode: 'development',
  entry: path.resolve(__dirname, `src/index.js`),
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash:8].js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 8000
  }
})