const router = require('express').Router();
const users_ctr = require('../../controllers/users');
//Route
//http://localhost:3000/api/users
//CREATE
router.post('/', users_ctr.createUser);

//READ
router.get('/', users_ctr.listAll);
router.get('/:id', users_ctr.singleUser);

//UPDATE
router.put('/:id', users_ctr.updateUser);

//DELETE
router.delete('/', users_ctr.deleteUser);

module.exports = router;