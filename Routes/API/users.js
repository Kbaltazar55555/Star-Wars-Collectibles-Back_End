const router = require('express').Router();
const users_ctr = require('../../Controllers/users');
//Route

//http://localhost:3000/api/users
router.get('/', users_ctr.index);
router.get('/List', users_ctr.listAll);

module.exports = router;