const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy1 = createProxyMiddleware('/api', {
  target: 'http://www.facebook.com',
  changeOrigin: true,
});

const proxy2 = createProxyMiddleware('/api2', {
  target: 'http://www.spotify.com',
  changeOrigin: true,
});

const proxy3 = createProxyMiddleware('/api3', {
  target: 'http://www.instagram.com',
  changeOrigin: true,
});

module.exports = function (app) {
  app.use(proxy1);
  app.use(proxy2);
  app.use(proxy3);
};
