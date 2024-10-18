//EXPRESS
const express = require("express");
const app = express();
const path = require('path')
const userRouter = require('./routes/userRoutes')
const foodRouter = require('./routes/foodRoutes')

//MIDDLEWARE
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//ROUTES
app.use('/api/v1/users', userRouter);
app.use('/api/v1/food', foodRouter);

module.exports = app;
