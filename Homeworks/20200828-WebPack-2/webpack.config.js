const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode:"development",
    devtool: 'source-map',
    entry: {
        main: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: './js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: "[name]_[hash].[ext]",
                        outputPath: "./images",
                        publicPath: './images',
                        limit: 100
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: true,
                            import: true,
                            sourceMap: false
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template/index.html',
            filename: 'index.html',
            title: 'WebPack作业2'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './css/[name].css'
        })
    ],
    devServer: {
        hot:true,
        hotOnly: true,
        port: 8080,
    }
};
