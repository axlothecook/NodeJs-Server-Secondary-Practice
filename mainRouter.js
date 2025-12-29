const express = require('express');
const main = express();
const path = require ('node:path');
const morgan = require('morgan');

const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');

const navLinks = [
    { 
        href: '/',
        text: 'Home'
    },
    {
        href: 'about',
        text: 'About'
    },
    {
        href: 'products',
        text: 'Products'
    },
];

const footerLinks = [
    { 
        href: '/',
        text: 'Home'
    },
    {
        href: 'about',
        text: 'About'
    },
    {
        href: 'products',
        text: 'Products'
    },
];

const users = ['Rose', 'Cake', 'Biff'];

main.use(morgan('dev'));
main.set('views', path.join(__dirname, 'views'));
main.set('view engine', 'ejs');

const assetsPath = path.join(__dirname, 'public');
main.use(express.static(assetsPath));

main.use('/authors', authorRouter);
main.use('/books', bookRouter);
// main.use('/', indexRouter);

main.get('/', (req, res) => {
    res.render('index', { 
        navLinks: navLinks, 
        users: users, 
        footerLinks: footerLinks
    });
});

main.get('/about', (req, res) => {
    res.render('about', { 
        navLinks: navLinks, 
        users: users, 
        message: 'hello',
        footerLinks: footerLinks 
    });
});

main.get('/products', (req, res) => {
    res.render('products', { 
        navLinks: navLinks, 
        users: users, 
        message: 'it is products',
        footerLinks: footerLinks 
    });
});

main.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});
main.use((req, res) => {
    res.status(404).sendFile('./src/404.html', { root: __dirname });
});

const PORT = 3000;
main.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`My first Express app - listening on port ${PORT}!`);
});