const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin} = require('webpack').container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');

module.exports = {
    output: {
        path: path.join(__dirname, "/dist"), 
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
        new ModuleFederationPlugin({
            name: 'client',
            filename: 'remoteEntry.js',
            exposes: {
                './app': './src/App.js',
            }
        }),
        new ExternalTemplateRemotesPlugin(),
    ],
    devServer: {
        port: 3001,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader",
                options: {limit: false},
            }
        ]
    }
}