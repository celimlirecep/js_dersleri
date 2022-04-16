const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path=require("path");
module.exports= merge(common,{
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,

  },
    plugins: [ 
       new HtmlWebpackPlugin({
      template: "./src/index.html",
     
    }),
  ],
  module:{
    rules:[{
      test: /\.s[ac]ss$/i,
      use:[
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    },
  ],
  },
   
    mode:"development",

});