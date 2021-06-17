const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
__webpack_base_uri__ = 'http://localhost:9000';
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: "auto"
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000,
    },
    plugins: [new HtmlWebpackPlugin()],
};