const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path=require("path");
module.exports= merge(common,{
    
    plugins: [new HtmlWebpackPlugin({
      template:"./src/index.html"
    })],
   
    mode:"development",

});