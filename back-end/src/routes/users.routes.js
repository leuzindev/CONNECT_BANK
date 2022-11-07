const { Router } = require('express');
const UserController = require('../user/user.controller');


const router = Router();


router.get('/users', UserController.getAllUsers)
router.get('/users/:id', UserController.getUser)


router.delete('/users/:id', UserController.deleteUser)

router.post('/users', UserController.createUser)

router.put('/users/:id', UserController.updateUser)

module.exports = router;