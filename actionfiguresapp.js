//Authentication app.js

const express = require('express')
const app = express(); 
require('dotenv').config();
require('./config/db');

//SIGN IN

const jwt = require('jsonwebtoken')

app.use(express.json())

app.get('/posts', authenticateToken, (req, res) => {
 res.json(posts.filter(post => post.username === req.user.name))
})

let refreshTokens = []

app.post('/token', (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    if(refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.CAN_YOU_KEEP_A_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = generateAccessToken({ name: user.name })
    res.json({ accessToken: accessToken})
    })
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
 
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


app.delete('/logout', (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204)
})


app.post('/login', (req, res) => {

    const username = req.body.username
    const user = {name: username}

   const accessToken = generateAccessToken(user)
   const refreshToken = jwt.sign(user, process.env.CAN_YOU_KEEP_A_SECRET)
    refreshTokens.push(refreshToken)
    res.json({ accessToken: accessToken, refreshToken: refreshToken })
})

function generateAccessToken(user) {
    return jwt.sign(user, process.env.CAN_YOU_KEEP_A_SECRET, { expiresIn: '10m'})
}


app.listen(3001, ()=> {
    console.log('Second Server is on,boi');
});