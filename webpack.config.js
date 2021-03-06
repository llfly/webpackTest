var path = require('path');

var webpack = require('webpack');

var htmlWebpackPlugin = require('html-webpack-plugin');
var openBrowerPlugin = require('open-browser-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');


var config = {
    entry:path.resolve(__dirname,'./src/index.js'),
    output:{
        path:path.resolve(__dirname,'./disc'),
        filename:'bundle.js?[hash:6]'
    },
    devServer:{
        contentBase:'dist',
        inline:true,
        port:8090,
        stats:{
            color:true
        }

    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                //loader:'style-loader!css-loader',
                loader:extractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
                include:path.resolve(__dirname,'src')
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            title:"test",
            template:'./src/index.html'
        }),
        new webpack.BannerPlugin("name:ll\n协议：MIT"),
        new extractTextPlugin("styles.css"),
        new openBrowerPlugin({
            url:'http://localhost:8090'
        }),
    ]
}

module.exports = config;


