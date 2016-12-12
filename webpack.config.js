const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: "./js/app.jsx",
  output: {
    path: __dirname + "/js",
    filename: "result.js",
    library: "result"
  },

  watch: NODE_ENV == 'development',
  watchOptions: {
    aggregateTimeout: 200
  },

  devtool: 'source-map',

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-runtime']
        }
      }
    ]
  },

  resolve: {
    root: [
      path.resolve('./js'),
      path.resolve('./js/libs'),
      path.resolve('./node_modules')
    ],
    extensions: ['', '.js', '.jsx'],
  },
};

// module.exports.plugins.push(
//   new webpack.optimize.UglifyJsPlugin({
//     compress: {
//       warnings: false,
//       drop_console: true,
//       unsafe: true
//     }
//   })
// );
