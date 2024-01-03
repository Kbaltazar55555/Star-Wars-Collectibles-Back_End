const router = require('express').Router();

//User Route
//http://localhost:3000/api/users
router.use('/users', require('./users'));

//SW Action Figure routes
router.use('/action-figures', require('./actionFigures'));

//http://localhost:3000/api
router.get('/', (req, res) => {
    res.send('app.js api Index Page');
});




module.exports = router;