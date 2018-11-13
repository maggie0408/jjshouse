var path = require('path');
var webpack=require('webpack');

module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {},
    plugins: []
}