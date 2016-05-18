module.exports = {
  entry: "./lib/index.js",
  output: {
    library: 'attachArgsToClass',
    path: './dist/'
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }

}
