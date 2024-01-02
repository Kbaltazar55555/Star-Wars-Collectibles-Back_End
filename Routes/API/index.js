const router = require('express').Router();

//Route
router.get('/', (req, res) => {
    res.send('app.js api Index Page');
});


module.exports = router;