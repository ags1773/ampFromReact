const path = require('path')

const clientAppConfig = {
  mode: "development",
  entry: './clientApp/src/index.js',
  output: {
    filename: 'clientAppBundle.js',
    path: path.resolve(__dirname, 'clientApp/dist'),
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
  }
}

module.exports = [clientAppConfig]