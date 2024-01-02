const router = require('express').Router();

//Route
//http://localhost:3000/api/users
router.use('/users', require('./users'));

//http://localhost:3000/api
router.get('/', (req, res) => {
    res.send('app.js api Index Page');
});


module.exports = router;