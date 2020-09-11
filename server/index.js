const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;
require('newrelic');
const axios = require('axios');
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use('/:id', express.static(path.join(__dirname, '../public')));

app.use('/residences/:id', createProxyMiddleware({ target: 'http://35.168.8.22', changeOrigin: true }));
app.use('/api/images/:id', createProxyMiddleware({ target: 'http://3.15.189.69:4001', changeOrigin: true }));
app.use('/api/reviews/:id', createProxyMiddleware({ target: 'http://3.135.189.4:3000', changeOrigin: true }));
app.use('/api/booking/:id', createProxyMiddleware({ target: 'http://13.56.164.217', changeOrigin: true }));

app.use('/:id/fonts/', express.static('./fonts'))

app.listen(PORT, () => console.log('Proxy Server listening on port ', PORT));
