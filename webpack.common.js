const path = require('path')
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require('html-webpack-plugin');
console.log(htmlWebpackPlugin.options)
console.log('1212---------')
module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/common.css"
    }),
    new htmlWebpackPlugin({
      title: 'react练习',
      template: path.resolve(__dirname,'public/index.html'),
      filename: path.resolve(__dirname, 'dist/index.html'),
      hash: true
    })
  ],
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {loader: "css-loader"}
        ]
      },
      {
        test: /\.scss$/,
        use: [
           MiniCssExtractPlugin.loader,{
             loader: "css-loader"
           },
          {loader: 'sass-loader'}
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'static/images/[name][hash:7].[ext]',
            context: path.resolve(__dirname, 'images'),
            publicPath: '../',
          }
        }]
      },
    ]
  }
}