const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'wwwroot'),
        hot: true
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    target: 'web',
    plugins: [],
    module: {
        rules: [
            { test: /\.js$/, loaders: ['babel-loader'], exclude: path.join(__dirname, 'node_modules')  },
            { test: /\.scss$/, loaders: ['css-loader', 'style-loader', 'sass-loader'] },
            { test: /\.json$/, loaders: ['json-loader'] }
        ]
    }
};