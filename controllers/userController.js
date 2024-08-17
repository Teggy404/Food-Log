const User = require('./../models/userModel');

exports.getAllUsers = (req, res) => {
    //used to get all users
    res.status(200).json({
      status: "success",
    });
  };
  
exports.getUser = (req, res) => {
    //used to get a specific user
    res.status(200).json({
      status: "success",
    });
  };
  
exports.updateUser = (req, res) => {
    //used to eventually update a specific user
    res.status(200).json({
      status: "success",
    });
  };
  
exports.deleteUser = (req, res) => {
    //used to eventually delete a specific user
    res.status(204).json({
      status: "success",
    });
  };
  
exports.addUser = (req, res) => {
    //add a new user
    res.status(201).json({
      status: "success",
    }
  );
};