const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path=require("path");
const TerserPlugin=require('terser-webpack-plugin');
const { SourceMap } = require('module');
const webpack=require("webpack");


module.exports= merge(common,{
  output:{
    filename:"[name].[contenthash].bundle.js",
    path:path.resolve(__dirname,"dist"),
    clean: true,
  },
  optimization:{
    minimizer:[
      new TerserPlugin({
        // SourceMap:false,
        terserOptions:{
          compress:{
            drop_console:true,
          },
        },
      })
    ]
  },
 
    plugins: [
      new webpack.ProgressPlugin(),
   
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify:{
        collapseInlineTagWhitespace:true,
        
        removeComments:true,
        removeAttributeQuotes:true,
        collapseWhitespace:true,
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash:4].css"
    }),
  ],
  module:{
rules:[
  {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      // "style-loader",  CSS doyalarımın JS e dönüştürülmesini istemiyotrum

      MiniCssExtractPlugin.loader,//Css lerimin ayrı dosyafa tutulmasını istiyotrum
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  },
  {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [[
          '@babel/preset-env',
          {
            targets:{
              esmodules:true
            }
          }
        ]]
      }
    }
  },
]

  },
   
    mode:"production",

});