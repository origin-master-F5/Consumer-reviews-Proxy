const path = require('path');
const express = require('express');
const httpProxy = require('http-proxy')
const apiProxy = httpProxy.createProxyServer();
const reviews = "http://127.0.0.1:3003"
const port = 3000;

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));

app.all('/reviews/*', (req, res) => {
    apiProxy.web(req, res, { target: reviews });
})

app.listen(port, () => {
    console.log(`Proxy Listening on port: ${port}`);
});