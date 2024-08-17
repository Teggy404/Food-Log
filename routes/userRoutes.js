const express = require('express');
const router = express.Router();//Mount the router
const userController = require('./../controllers/userController')
  

//routes
router
  .route("/")//route for all users
  .get(userController.getAllUsers)//route handler for getting all users
  .post(userController.addUser);//route handler for adding a new user

router
  .route("/:id")//Route for one user (id)
  .get(userController.getUser)//route handler for getting user
  .patch(userController.updateUser)//route handler for updating user info 
  .delete(userController.deleteUser);//route handler for deleting user

  module.exports = router;

  //3BjzT361rXFq4Dhk