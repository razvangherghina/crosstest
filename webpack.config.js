var webpack = require('webpack');
var path = require('path');
process.env.NODE_ENV = 'production';
module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://192.168.1.177:8080/',
        'webpack/hot/only-dev-server',
        './src'
    ],
    output: {        
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
        }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};