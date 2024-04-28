// webpack.config.js

const webpack = require('webpack');

module.exports = {
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["last 2 versions", "safari >= 7"]
      }
    }]
  ],
  // other webpack configuration options...

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      // specify UglifyJsPlugin options here
      output: {
        comments: false
      },
      mangle: true,
      sourcemap: false,
      debug: false,
      minimize: true,
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      }
    })
  ],
  exports : {
    devtool: 'source-map'
  }
};
