var path = require('path');

var webpack = require('webpack');

var htmlWebpackPlugin = require('html-webpack-plugin');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var config = {
    entry:path.resolve(__dirname,'./src/index.js'),
    output:{
        path:path.resolve(__dirname,'./disc'),
        filename:'bundle.js'
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
                loader:'style-loader!css-loader',
                include:path.resolve(__dirname,'src')
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            title:"test",
            template:'./src/index.html'
        }),
        new uglifyJsPlugin({
            compress:false
        })
    ]
}

module.exports = config;


