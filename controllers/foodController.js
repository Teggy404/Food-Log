const food = require('./../models/foodModel');

exports.getAllFood = async (req, res) =>{
    try{
        const allFood = await food.find();
        return res.status(200).json({
            status:"success",
            allFood: allFood
        })
    }
    catch(error){
        return res.status(500).json({
            status:"error",
            error:error.message
        });
    }
};

exports.addFood = async (req, res) => {
    try{
        const {name, carbs, protein, fat, calories} = req.body;
        console.log(`${name} ${carbs} ${protein} ${fat} ${calories}`);
        const savedFood = await food.create({
            name: name,
            carbs: carbs,
            protein: protein,
            fat: fat,
            calories: calories
        });
        return res.status(200).json({
            status:"success",
            savedfood: savedFood
        });
    }
    catch(error){
        return res.status(500).json({
            status: 'Error',
            error: error.message
        });
    }
};

exports.getFood = async (req, res) => {
    try{
        const foodName = req.params.name;
        console.log(foodName)
        const foodItem = await food.findOne({name:foodName});
        return res.status(200).json({
            status:"success",
            foodItem:foodItem
        });
    }
    catch(error){
        return res.status(500).json({
            status:"error",
            error: error.message
        });
    }
};

exports.updateFood = async (req, res) => {
    console.log('This is working!');
    try{
        const foodId = req.params.id;
        const updates = req.body;
        const foodUpdate = await food.findByIdAndUpdate(foodId, updates, {
            new: true,
            runValidators: true
        });
        if(!foodUpdate){
            return res.status(404).json({
                status:'error',
                error:'Food item not found'
            });
        }
        return res.status(200).json({
            status:'success',
            foodUpdate:foodUpdate
        });
    }
    catch(error){
        return res.status(500).json({
            status:'error',
            error:error.message
        });
    }
};

exports.deleteFood = async (req, res) => {
    console.log('This might be working');
    try{
        const foodId = req.params.id;
        const deletedFood = await food.findByIdAndDelete(foodId);
        if(!deletedFood){
            return res.status(404).json({
                status:'error',
                error:'Food item not found'
            });
        }
        return res.status(200).json({
            status:'success',
            deletedFood:deletedFood
        });
    }
    catch(error){
        return res.status(500).json({
            status:'success',
            error:error.message
        });
    }
};