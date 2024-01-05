const express = require('express')
const app = express(); 
const cors = require('cors')


require('dotenv').config();
require('./config/db');

//SIGN IN

const jwt = require('jsonwebtoken')

app.use(express.json())
app.use(cors())

const posts = [
    {
        username: 'ChunLi',
        title: 'Spinning Bird Kick!'
    }, 
    {
        username: 'Zangief',
        title: 'I am invincible!'
    }, 
    {
        username: 'Ryu',
        title: 'Hadouken!'
    }
]

app.get('/posts', authenticateToken, (req, res) => {
 res.json(posts.filter(post => post.username === req.user.name))
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    //If there's an authHeader, then just return the token portion in the array
    const token = authHeader && authHeader.split(' ')[1]
    if (token === null) {
        return res.status(401).send('No token provided');
    }

    jwt.verify(token, process.env.CAN_YOU_KEEP_A_SECRET, (err, user) => {
        if (err) {
            return res.status(403).send('Token is not valid');
        }
        req.user = user;
        next();
    })
}

//Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(require('./Routes'));
app.use('/uploads', express.static('uploads'));

app.listen(3000, ()=> {
    console.log('Server is on,boi');
});