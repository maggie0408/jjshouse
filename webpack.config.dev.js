var path=require("path");
var webpack=require("webpack");
var htmlWebpackPlugin=require("html-webpack-plugin");

function _path(relative){
  return path.resolve(__dirname,relative);
}

module.exports={
  mode:"development",
  devtool:"cheap-module-eval-source-map",
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
        use:[
          {loader:'style-loader'},
          {loader:'css-loader',options:{sourceMap:true}}
        ]
      }
    ]
  },
  devServer:{
    contentBase:_path("./views"),
    port:8080,
    compress:true,
    inline:true
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
        filename:'index.html',
        template:_path("./public/html/index.html")
    })
  ]
}
