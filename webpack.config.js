
var getConfig = require('hjs-webpack')
var path = require('path')

var config = module.exports = getConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
})

config.resolve.root = [
  path.resolve('src'),
]

module.exports = config
