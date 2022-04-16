// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const path = require("path");

module.exports = {
  entry: "./src/index.js",
 
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./src/index.html"
  //   }),
  //   new MiniCssExtractPlugin({
  //     filename: "[name].[hash:4].css"
  //   }),
  // ],
  module: {
    rules: [
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [
      //     // Creates `style` nodes from JS strings
      //     // "style-loader",  CSS doyalarımın JS e dönüştürülmesini istemiyotrum

      //     MiniCssExtractPlugin.loader,//Css lerimin ayrı dosyafa tutulmasını istiyotrum
      //     // Translates CSS into CommonJS
      //     "css-loader",
      //     // Compiles Sass to CSS
      //     "sass-loader",
      //   ],
      // },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[fullhash].[ext]",
          outputPath: "img",
          publicPath: "img",
        },
      },
    ],
  },


}