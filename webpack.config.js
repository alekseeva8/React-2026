const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    clean: true
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};