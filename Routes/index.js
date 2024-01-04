
//const { Router } = require('express');

//const router = require('express').Router();

const express = require('express');
const router = express.Router();

//Route
router.use('/api',require('./API'));


router.get('/', (req, res) => {
    res.send('app.js Index Page');
});

module.exports = router;

