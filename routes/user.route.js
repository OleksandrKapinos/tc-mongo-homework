const express = require('express');
const router = express.Router();
const ValidateMiddleware = require('../service/validateMiddleware');
const Validate = require('../validators');

const userController = require('../controllers/user');

//Create new user
router.post('/', ValidateMiddleware('body', Validate.User), userController.createUser);

//Edit user by id
router.put('/:userId',  ValidateMiddleware('body', Validate.User), userController.editUser);

//Get user by id
router.get('/:userId', userController.getUser);

//Remove user by id
router.delete('/:userId', userController.deleteUser);

//Get users articles by id
router.get('/:userId/articles', userController.getUserArticles);

// //Get all users
// router.get('/', userController.getUsers);


module.exports = router;
