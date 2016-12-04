const HTMLWebpack = require('html-webpack-plugin')
const ExtractText = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

const debug = process.env.NODE_ENV !== 'production'
const localIdentName = debug ? 'localIdentName=[name]__[local]___[hash:base64:5]' : 'localIdentName=[hash:base64:5]'

const config = {
  entry: {
    main: ['babel-polyfill', './src']
  },
  output: {
    path: './build',
    filename: '[name].js',
    publicPath: process.env.PUBLIC_PATH || '/'
  },
  devtool: debug ? '#source-map' : null,
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json' },
      { test: /\.scss$/, loader: ExtractText.extract('style', `css?sourceMap&${localIdentName}!postcss!sass`) },
      { test: /\.sass$/, loader: ExtractText.extract('style', `css?sourceMap&${localIdentName}!postcss!sass?indentedSyntax=true`) },
      { test: /\.css$/, loader: ExtractText.extract('style', `css?sourceMap&${localIdentName}!postcss`) },
      { test: /\.(png|jpg|woff2?|ttf|eot|svg)(\?|$)/, loader: 'file' }
    ]
  },
  postcss () {
    return [autoprefixer]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  babel: {
    presets: ['es2015', 'react', 'stage-0'],
    plugins: ['transform-decorators-legacy']
  },
  plugins: [
    new ExtractText('bundle.css', { disable: debug, allChunks: true }),
    new HTMLWebpack({
      inject: true,
      template: 'src/assets/index.html'
    }),
    new webpack.DefinePlugin({
      __DEV__: debug,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  devServer: {
    historyApiFallback: true
  }
}

if (debug) {
  config.babel.plugins.push(
    ['react-transform', {
      'transforms': [{
        'transform': 'react-transform-hmr',
        'imports': ['react'],
        'locals': ['module']
      }, {
        'transform': 'react-transform-catch-errors',
        'imports': ['react', 'redbox-react']
      }]
    }]
  )
} else {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin())
  config.plugins.push(new webpack.optimize.OccurenceOrderPlugin(true))
}

module.exports = config
