const router = require('express').Router();
const users_ctr = require('../../Controllers/users');
//Route
//http://localhost:3000/api/users
//CREATE
router.post('/', users_ctr.createUser);

//READ
router.get('/', users_ctr.index);
router.get('/List', users_ctr.listAll);

//UPDATE
router.put('/', users_ctr.index);

//DELETE
router.delete('/', users_ctr.index);

module.exports = router;