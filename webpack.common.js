module.exports = {
  module: {
    rules: [
    {
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
        test: /\.scss$/,
        use: [
          'style-loader','css-loader','postcss-loader','sass-loader'
        ]
      }
    ]
  }
}