const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
    mode: 'production',
    // devtool: 'inline-source-map',
    entry: './src/js/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'media/[name][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./src/media/images/icon", to: "./media/icon" },
                { from: "./src/media/images/screenshots", to: "./media/screenshots" },
                { from: "./src/media/images/guides", to: "./media/guides" },
                { from: "./src/index.html", to: "./" },
                { from: "./src/guides.html", to: "./" },
                { from: "./src/manifest.json", to: "./" },
            ],
        }),
        new InjectManifest({
            swSrc: './src/js/src-sw.js',
            swDest: './sw.js',
            maximumFileSizeToCacheInBytes: 10485760,

        })
    ]
};