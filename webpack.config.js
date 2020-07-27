const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    "mode": "development",
    "entry": __dirname + "/src/scripts/index.tsx",
    "output": {
        "path": __dirname + '/dist',
        "filename": "js/[name].[chunkhash:8].bundle.js"
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    "module": {
        "rules": [
            {
                "test": /\.tsx?$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "ts-loader",
                    "options": {
                        "transpileOnly": true
                    }
                }
            },
            {
                "test": /\.scss$/,
                "use": [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ],
            }
        ]
    },
    "plugins": [
        new PrettierPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            {
                template: "src/index.html"
            }
        ),
        new MiniCssExtractPlugin(
            {
                filename: "[name]-[contenthash:8].css"
            }
        )
    ]
}