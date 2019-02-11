const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => (
  {
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: __dirname + '/public/index.html'
      })
    ],
    devtool: argv.mode === 'development' ? 'source-map' : 'none',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      port: 3000
    }
  }
);