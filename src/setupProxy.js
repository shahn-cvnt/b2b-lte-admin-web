const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/v2/nms/account/*",
    createProxyMiddleware({
      target: "https://iot-service-test.uasis.com:7443",
      changeOrigin: true,
    })
  );

  app.use(
    "/api/v2/nms/monitor/*",
    createProxyMiddleware({
      target: "https://iot-service-test.uasis.com:7443",
      changeOrigin: true,
    })
  );

};
