const path = require('path');

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