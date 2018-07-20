const path = require('path')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: [/\.yaml$/, /\.yml$/],
        loader: require.resolve('messageformat-yaml-loader'),
        options: {
          biDiSupport: false,
          defaultLocale: 'en',
          includeLocales: null,
          pluralVariable: 'count',
          verbose: false
        }
      }
    ]
  }
}
