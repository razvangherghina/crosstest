var webpack = require('webpack');
var path = require('path');
process.env.NODE_ENV = 'production';
module.exports = {
    devtool: 'inline-source-map',
    entry: [       
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
            loaders: ['babel?presets[]=react,presets[]=es2015']
        }
        ]
    },
    plugins: [       
        new webpack.NoErrorsPlugin()
    ]
};