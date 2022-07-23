var webpack = require('webpack')
module.exports = {
  entry: './test.js',
  output: {
    filename: './test.bundle.js',
  },
  node: {
    fs: 'empty',
  }
}
