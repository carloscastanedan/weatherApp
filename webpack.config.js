//Webpack configuration

//Dependencies
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

const PATH =
{
    indexJs: path.join(__dirname, '/src/js/index.js'),
    mainCss: path.join(__dirname, '/src/styles/main.sass'),
    build: path.join(__dirname, '/build/bundle'),
}

module.exports = {
    entry:
    [
        PATH.indexJs,
        PATH.mainCss
    ],
    output:
    {
        path: PATH.build,
        filename: 'bundle.js'
    },
    module:
    {
        rules:
        [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader'}
            },
            {
                test: /\.(sass|scss)$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [{ loader: 'css-loader', options: { minimize: true }}, 'sass-loader'] })
            }
        ]
    },
    plugins:
    [
        new ExtractTextPlugin('bundle.css'),
        new UglifyJsPlugin()

    ]
}
