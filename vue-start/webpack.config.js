/**
 * Created by sofia on 2017/3/16.
 */
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry:'./src/main.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:"/dist/"
    },
    module:{
        rules:[
            {test:/\.js/, exclude:"/node_modules/", loader:"babel-loader"},
            {test: /\.vue$/,loader: 'vue-loader'},
        ]
    },
    resolve: {
        extensions: ['.js', '.less', '.vue', '*', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'components': path.join(__dirname, 'src/components'),   // 定义文件路径， 加速打包过程中webpack路径查找过程
            'lib': path.join(__dirname, 'src/lib'),
            'less': path.join(__dirname, 'src/less')
        },
    }
};