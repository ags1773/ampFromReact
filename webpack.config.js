const path = require('path')

const ampLibraryConfig = {
  mode: "development",
  target: 'node',
  entry: './ampLibrary/src/index.js',
  output: {
    filename: 'ampBundle.js',
    path: path.resolve(__dirname, 'ampLibrary/dist'),
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

module.exports = [ampLibraryConfig, clientAppConfig]