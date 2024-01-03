const express = require('express')
const app = express(); 
require('dotenv').config();
require('./config/db');


//Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(require('./Routes'));


app.listen(3000, ()=> {
    console.log('Server is on,boi');
});