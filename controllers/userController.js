const User = require('./../models/userModel');

exports.getAllUsers = async (req, res) => {
  try{
    const allUsers = await User.find();
    return res.status(200).json({
      status:'success',
      allUsers:allUsers
    });
  }
  catch(error){
    return res.status(500).json({
      status:'error',
      error:error.message
    });
  }
};
  
exports.getUser = async (req, res) => {
  try{
    const userId = req.params.id;
    const foundUser = await User.findById(userId).populate('foods');
    if(!foundUser){
      return res.status(404).json({
        status:'error',
        error:'User not found'
      });
    }
    return res.status(200).render('mainPage', {foundUser});
  }
  catch(error){
    return res.status(500).json({
      status:'error',
      error:error.message
    });
  }
};
  
exports.updateUser = async (req, res) => {
  try{
    const userId = req.params.id;
    const updates = {
      ...req.body,
      $push: { foods: req.body.foodId}
    };
    console.log(req.body.foodId);
    const updatedUser = await User.findByIdAndUpdate(userId, updates, {
      new:true,
      runValidators:true
    });
    if(!updatedUser){
      return res.status(404).json({
        status:'success',
        error:'User not found'
      });
    }
    return res.status(200).json({
      status:'success',
      user:updatedUser
    });
  }
  catch(error){
    return res.status(500).json({
      status:'error',
      error:error.message
    });
  }
};
  
exports.deleteUser = (req, res) => {
    //used to eventually delete a specific user
    res.status(204).json({
      status: "success",
    });
  };
  
exports.addUser = async (req, res) => {
    //add a new user
    try{
      const {userName, carbGoal, proteinGoal, fatGoal} = req.body;
      const savedUser = await User.create({
        userName: userName,
        carbGoal: carbGoal,
        proteinGoal: proteinGoal,
        fatGoal: fatGoal
      });
      return res.status(200).json({
        status:"success",
        savedUser: savedUser
      });
    }
    catch(error){
      return res.status(500).json({
        status: 'Error',
        error: error.message
      })
    }
};