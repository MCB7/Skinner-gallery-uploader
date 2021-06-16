const  createProxyMiddleware  = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    ["/api", "/auth"],
    createProxyMiddleware({
      target: "http://localhost:3001",
    })
  );
};
// Create a setupProxy.js file in the client/src/ directory. 
//There is no need to import this file anywhere, 
//CRA looks for a file by this name and loads it.
