var path=require("path");
var webpack=require("webpack");
var htmlWebpackPlugin=require("html-webpack-plugin");
var ExtractTextPlugin=require('extract-text-webpack-plugin');

function _path(relative){
  return path.resolve(__dirname,relative);
}

module.exports={
  mode:"production",
  entry:{
    home:_path("./src/main.js")
  },
  output:{
    path:_path("./dist"),
    publicPath:'/dist/',
    filename:'js/[name].bundle.js'
  },
  module:{
    rules:[
      {
        test:/\.(png|jpg|gif|svg)$/,
        loader:'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'

      },
      {
        test:/\.css$/,
        loader:ExtractTextPlugin.extract({
          use:['css-loader'],
          fallback:'style-loader'
        })
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
        filename:'html/index.html',
        template:_path("./public/html/index.html")
    }),
    new ExtractTextPlugin({
      filename:"css/style.css"
    })
  ]
}
