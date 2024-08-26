//EXPRESS
const express = require("express");
const app = express();
const userRouter = require('./routes/userRoutes')
const foodRouter = require('./routes/foodRoutes')
app.use(express.json());

//ROUTES
app.use('/api/v1/users', userRouter);
app.use('/api/v1/food', foodRouter);

module.exports = app;
