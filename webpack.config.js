const path = require('path')
var webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    mainApp: './assets/main.js',
    absencesApp: './assets/absences.js',
  },
  resolve: {
    extensions: ['.js', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist/js')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../style/[name].css',
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
}
