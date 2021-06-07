const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = 3000;

module.exports = {
    entry: path.resolve(__dirname, "./src/index.js"),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      limit: 10000,
                    },
                  },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        filename: "bundle.[fullHash].js",
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    devServer: {
        host: 'localhost',
        port: port,
        open: true,
        hot: true,
    },
    devtool: 'inline-source-map',
}