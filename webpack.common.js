const path = require('path')
module.exports = {
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
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