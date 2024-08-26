const express = require('express');
const router = express.Router();
const foodController = require('./../controllers/foodController')

//routes
router
    .route('/')//this applies to all foods listed in the custom food section
    .get(foodController.getAllFood)//gets all submitted custom food item
    .post(foodController.addFood);//add a new custom food item

router
    .route('/:name')//route for specific custom food item
    .get(foodController.getFood);//get custom food item

router
    .route('/:id')
    .patch(foodController.updateFood)//Update custom food Item
    .delete(foodController.deleteFood);//deletes specifies custom food item

module.exports = router