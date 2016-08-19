var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filname: 'index.html',
    inject: 'body'
})
module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname+ '/dist',
        filename:"index_bundle.js"
    },
    module: {
        loader: [
            {test: /\.js$/, exclude:/node_modules/, loader: "babel-loader"}
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}
