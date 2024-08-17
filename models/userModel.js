const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ //Schema for User document
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    carbGoal: {
        type: Number,
        default: 0
    },
    proteinGoal: {
        type: Number,
        default: 0
    },
    fatGoal: {
        type: Number,
        default: 0
    },
    carb: {
        type: Number,
        default: 0
    },
    protein: {
        type: Number,
        default: 0
    },
    fat: {
        type: Number,
        default: 0
    }
    
});

const User = mongoose.model('User', userSchema);//Model for user using the previously defined shema

module.exports = User;