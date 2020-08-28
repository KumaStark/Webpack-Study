const path = require("path");

module.exports = {
    mode:"development",
    entry: {
        main: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js'
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
                        publicPath: '../dist/images',
                        limit: 100
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
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
    }
}
