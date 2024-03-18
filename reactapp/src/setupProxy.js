const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/mainportfolio",
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7223',
        secure: false
    });

    app.use(appProxy);
};
