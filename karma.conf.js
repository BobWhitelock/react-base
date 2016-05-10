
var webpackConfig = require('./webpack.config')
webpackConfig.devtool = 'inline-source-map'

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    files: [
      'src/__tests__/*.test.js',
      'src/**/__tests__/*.test.js',
    ],
    frameworks: ['chai', 'mocha'],
    plugins: [
      'karma-chrome-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],
    preprocessors: {
      'src/__tests__/*.test.js': [ 'webpack', 'sourcemap' ],
      'src/**/__tests__/*.test.js': [ 'webpack', 'sourcemap' ],
    },
    reporters: [ 'dots' ],
    singleRun: false,
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
  })
}
