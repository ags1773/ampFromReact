const path = require('path')

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'ampStoryPageBundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
}