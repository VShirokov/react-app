const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy('/api/hello',{
        target: 'http://localhost:3636',
        hangeOrigin: true,
    })
  );
};
