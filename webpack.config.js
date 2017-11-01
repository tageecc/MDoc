const {resolve} = require('path');
const ROOT_PATH = resolve(__dirname);
const BUILD_PATH = resolve(ROOT_PATH, 'build');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: BUILD_PATH,
        publicPath: BUILD_PATH,
        filename: "js/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }, {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            insertInto: 'body'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]-[hash:base64:5]'
                        }
                    }
                ]
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=/images/[hash:8].[name].[ext]'
            }
        ]
    },
    watch: true,
    target: 'electron-renderer'
};