const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require("path")

const browserConfig = {
  mode: "development",
  entry: "./src/browser/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'production'`
      }
    }),
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: true
          }
        }
      ]},
    ]
  }
}

const serverConfig = {
  mode: "development",
  entry: "./src/server/index.js",
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  target: 'node',
  externals: nodeExternals(),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'production'`
      }
    }),
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: true
          }
        }
      ]},
    ]
  }
}

module.exports = [browserConfig, serverConfig]
