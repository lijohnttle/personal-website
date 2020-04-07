const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/server/index.js',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.mjs', '.js', '.vue', '.json', '.gql', '.graphql']
    },
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        publicPath: '/',
        filename: 'index.js'
    },
    target: 'node',
    node: {
        fs: 'empty',
        net: 'empty'
    }
};