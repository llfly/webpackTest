

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

}
*/


/*
react
1. npm install react react-dom --save
2. npm install babel-preset-react
3. .babelrc add "react" preset
4. mkdir compontents & mkdir containers & touch Footer & touch Header & touch App
5. vim index.html & index.js

*/


/*
1. npm install style-loader css-loader --save-dev
2. {
 test:/\.css$/,
 loader:'style-loader!css-loader',
 include:path.resolve(__dirname,'src')
 }


style-loader 通过<style>引入


//css-module

//npm install less-loader less --save-dev
//npm install sass-loader sass --save-dev

*/


/*
karma
mocha
npm install karma karma-chrome-launcher mocha karma-mocha --save-dev
./node_modules/.bin/karma init
mocha
no
Chrome
test/**\/*.spec.js

karma.conf.js
mkdir test & cd test/ & touch index.spec.js
package.json "test":"karma start"

*/


/*
npm install chai karma-chai --save-dev
karma.conf.js frameworks add chai
index.spce.js
*/

/*
esLint
npm install eslint --save-dev
./node_modules/.bin/eslint --init
./node_modules/.bin/eslint src
 ./node_modules/.bin/eslint src --fix
*/

/*
webpack之后自动打开浏览器
npm install open-browser-webpack-plugin --save-dev

webpack.config.js

 var openBrowerPlugin = require('open-browser-webpack-plugin');
 new openBrowerPlugin({
 url:'http://localhost:8090'
 })

*/

/*
js代码压缩
cp webpack.config.js webpack.config.prod.js
var uglifyPlugin = webpack.optimize.UglifyJsPlugin;
new uglifyPlugin({
    compress:false
})

webpack --config webpack.config.prod.js

*/


/*
文件加banner信息
webpack.config.js
new webpack.BannerPlugin("name:ll\n协议：MIT")
npm run build
*/

/*
提取文本插件
npm install extract-text-webpack-plugin --save-dev
webpack.config.js
var extractTextPlugin = require('extract-text-webpack-plugin');
loader:extractTextPlugin.extract("style-loader","css-loader"),
new extractTextPlugin("styles.css"),
*/


/*
hash 文件指纹
hash
chunkhash
contenthash

webpack.config.js
filename:
'bundle.[hash:6].js'
'bundle.js?[hash:6]'
*/