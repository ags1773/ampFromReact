const path = require('path')

module.exports = {
  mode: "development",
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'ampStoryPageBundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
    library: 'amp'
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