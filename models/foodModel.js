const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    carbs:{
        type: Number,
        required: true
    },
    protein:{
        type: Number,
        required: true
    },
    fat:{
        type: Number,
        required: true
    },
    calories:{
        type: Number,
        required: true
    }
})

const Food = mongoose.model('Food', foodSchema);

module.exports = Food
