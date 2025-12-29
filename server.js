import { createServer } from 'node:http';
import fs from 'node:fs';
import _ from 'lodash';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {

    // lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    });

    greet();
    greet();

    res.setHeader('Content-type', 'text/html');

    let path = './src/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader("Location", '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.error(err);
            return;
        };
        res.end(data);
    });
});

server.listen(port, hostname, () => {
    console.log(`Sever running at http://${hostname}:${port}/`);
});