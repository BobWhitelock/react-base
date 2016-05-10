
var getConfig = require('hjs-webpack')
var path = require('path')

var config = module.exports = getConfig({
  // This seems to be required for Karma to work properly; TODO don't hardcode
  // this.
  isDev: true,

  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
})

config.resolve.root = [
  path.resolve('src'),
]

// Required for Enzyme.
config.externals = {
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true,
}

module.exports = config
