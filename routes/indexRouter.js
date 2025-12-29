const { Router } = require('express');
const indexRouter = Router();

indexRouter.get('/', (req, res) => res.send('Index route'));

indexRouter.get('/about', (req, res) => {
    res.sendFile('../src/about.html', { root: __dirname });
});

indexRouter.get('/contact', (req, res) => res.send('Contact page'));

indexRouter.post('/contact', (req, res) => res.send('Response was sent!'));

module.exports = indexRouter;