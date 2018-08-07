const path = require('path');

const { VueLoaderPlugin } = require('vue-loader');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = {
    entry: './src/main.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index.js',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: [".js", ".css", ".less", ".vue", ".ts"],
        alias: {
            'vue': path.resolve('node_modules/vue/dist/vue.esm.js')
        }
    },
    // devtool: "source-map",
    target: "web",
    stats: "errors-only",
    devServer: {
        contentBase: path.resolve('dist'),
        compress: true,
        port: 8080,
        host: '192.168.2.129',
        open: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commoms: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'commons',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new VueLoaderPlugin,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve('src', 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css'
        }),
        new OptimizeCssAssetsPlugin({})
    ],
    mode: 'development'
}

module.exports = config;