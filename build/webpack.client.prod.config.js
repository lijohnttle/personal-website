const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/client/index.jsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, '../dist/public'),
        publicPath: '/',
        filename: 'bundle.js'
    }
};