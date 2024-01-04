const router = require('express').Router();

//User Route
//http://localhost:3000/api/users
router.use('/users', require('./users'));

//SW Bootleg Action Figure routes
router.use('/action-figures', require('./actionFigures'));

//SW Authentic Action Figure routes
router.use('/action-figures-authentic', require('./authenticactionfigures'));

//http://localhost:3000/api
router.get('/', (req, res) => {
    res.send('app.js api Index Page');
});




module.exports = router;