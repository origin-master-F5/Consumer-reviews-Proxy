const path = require('path');
const express = require('express');
const http = require('http')
    // const proxy = require('express-http-proxy')
const port = 3000;

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));

// app.get('/get_image', (req, res) => {


// });
// console.log(proxy)
// app.get('/reviews/:id', (req, res) => {
//         console.log('working!!')
//         let options = {
//             host: 'http://127.0.0.1',
//             port: 3003,
//             path: '/reviews/:id',
//             method: 'GET',
//             headers: req.headers
//         };
//         http.request('http://127.0.0.1:3003', function(error, response, body) {
//             if (!error && response.statusCode === 200) {
//                 console.log(body);
//                 res.send(body);
//             }
//         });
//     })
// req = http.request(options, res => {
//     res.setEncoding('utf8');
//     res.writeHead(pres.statusCode);
//     res.on('data', chunk => {
//         res.write(chunk);
//     });
//     res.on('close', () => {
//         res.end();
//     });


// })

// app.get('/:sku', (req, res) => {
//     console.log('working!!')
// })
// app.get('/help/:sku', (req, res) => {
//     console.log('working!!')
// })
// app.get('/recent/:sku', (req, res) => {
//     console.log('working!!')
// })
// app.get('/oldest/:sku', (req, res) => {
//     console.log('working!!')
// })
// app.get('/highestRating/:sku', (req, res) => {
//     console.log('working!!')
// })
// app.get('/lowestRating/:sku', (req, res) => {
//     console.log('working!!')
// })





app.listen(port, () => {
    console.log(`Proxy Listening on port: ${port}`);
});