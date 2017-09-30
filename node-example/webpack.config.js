var path = require( 'path' );

var config = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve( __dirname, 'dist' )
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            }
        ]
    }
};

module.exports = config;