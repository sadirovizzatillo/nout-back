const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");


router.get('/', userController.getUsers);

router.get('/:id', userController.getOneUser);

router.post('/', userController.createUser);

router.post('/login', userController.login);

// router.post('/phone/verify', userController.phoneVerifyUser);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);


module.exports = router
