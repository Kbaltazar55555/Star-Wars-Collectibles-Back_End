const express = require('express')
const app = express(); 

//Middleware
app.use('/api', (req, res, next) => {
    console.log('api middleware');
    next();
})

//Route 
app.get('/', (req, res) => {
    res.send('app.js Index Page')
});

app.get('/api', (req, res) => {
    res.send('app.js API Index Page')
});

app.listen(3000, ()=> {
    console.log('Server is on,boi');
});