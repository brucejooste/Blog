module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },

        { test: path.join( __dirname, 'src', 'js' ), loader: 'babel' },
        { test: path.join( __dirname, 'src', 'css' ), loader: 'style!css' },
        { test: path.join( __dirname, 'assets' ), loader: 'url' },
        { test: require.resolve( 'jquery' ), loader: 'expose?jQuery!expose?$' },
        { test: /\.(woff|woff2)$/,  loader: 'url?mimetype=application/font-woff' },
        { test: /\.ttf$/, loader: 'url' },
        { test: /\.eot$/, loader: 'url' },
        { test: /\.svg$/, loader: 'url' }

    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
