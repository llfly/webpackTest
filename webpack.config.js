var path = require('path');

var webpack = require('webpack');

var htmlWebpackPlugin = require('html-webpack-plugin');


var config = {
    entry:path.resolve(__dirname,'./src/index.js'),
    output:{
        path:path.resolve(__dirname,'./disc'),
        filename:'bundle.js'
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
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            title:"test",
            template:'./src/index.html'
        })
    ]
}

module.exports = config;




/*
自动产出html

1. 自动产出html
npm install html-webpack-plugin --save-dev
2. webpack.config.js

plugins:[
    new htmlWebpackPlugin({
    title:"test",
    template:'./src/index.html'
    })
]
3. src/index.html
 <%= htmlWebpackPlugin.options.title %>

* */




/*
本地起服务
1. npm install webpack-dev-server --save-dev 基于express的小型服务
2. package.json
"dev":"webpack-dev-server --progress --port 8090 --content-base dist --hot"

or

devServer:{
    contentBase:'dist',
    inline:true,
    port:8090,
    stats:{
        color:true
    }

},





*/