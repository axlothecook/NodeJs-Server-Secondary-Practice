const express = require('express');

const app = express();


// listen for requests
app.listen(3000);


app.get('/', (req, res) => {
    // res.send('<h1>home page</h1>');
    res.sendFile('./src/index.html', { root: __dirname });
});

app.get('/about{-us}', (req, res) => {
    // res.send('<h3>about page</h3>');
    res.sendFile('./src/about.html', { root: __dirname });
});

// app.get('/:username/messages?sort=date&direction=ascending', (req, res) => {
//     console.log('Params: ', req.params);
//     console.log('Query: ', req.query);
//     res.sendFile('./src/messages.html', { root: __dirname });
// });

app.get('/:username/messages', (req, res) => {
    console.log(req.params);
    res.sendFile('./src/messages.html', { root: __dirname });
});


// redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });


// 404 page
// 1st way  
app.use((req, res) => {
    res.status(404).sendFile('./src/404.html', { root: __dirname });
});

// 2nd way
app.get('/*splat', (req, res) => {
    res.send('<h3>splat</h3>');
});