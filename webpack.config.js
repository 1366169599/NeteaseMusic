const path = require('path')
function resolve(pathname) {
    path.resolve(__dirname, pathname);
}
const {
    VueLoaderPlugin
} = require('vue-loader');

module.exports = {
    entry: {
        'music': "./music.js",
        'web': "./web.js",
    },
    output: {
        //生产的文件夹为当前目录下的dist文件夹
        path: path.resolve(__dirname,'dist'),
        publicPath: '/dist',
        filename: "[name].min.js"
    },
    mode: 'development',
    devtool: '#source-map',
    module: {
        rules: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
            { test: /\.vue$/, loader: "vue-loader",
                options: {
                    loaders: {
                        css:'vue-style-loader!css-loader',
                        js: 'babel-loader'
                    }
                }
            },
            { test: /\.js$/, loader: "babel-loader" },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'file-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue': 'vue/dist/vue.esm.js',
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
