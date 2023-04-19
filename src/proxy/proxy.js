const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors());
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/', createProxyMiddleware({ 
   //Add the url of the api to be accessed (change target - remove the <>)
    target: '<add the url here>', //original url
    changeOrigin: true, 
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {

       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
       
    },
    onProxyReq: function (proxyReq, req, res) {
      // add the JWT token 
       proxyReq.setHeader('Authorization', 'Bearer <add the token here>');

        
     }
}));
app.listen(8585);