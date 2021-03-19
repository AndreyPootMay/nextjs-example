const path = require('path');

module.exports = {
    trailingSlash: true,
    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 100,
            aggregateTimeout: 300,
        }

        return config;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    }
}