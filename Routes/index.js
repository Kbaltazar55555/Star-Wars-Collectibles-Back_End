const express = require('express');
const router = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/ '});

//Route
router.use('/api',require('./API'));


router.get('/', (req, res) => {
    res.send('app.js Index Page');
});

module.exports = router;

