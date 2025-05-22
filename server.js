//SERVER
const app = require('./app')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config({path: './config.env'})//saves config variables into nodejs enviroment variables

const dataBase = process.env.MONGO.replace('<PASSWORD>', process.env.MONGO_PASS)
console.log("Attempting to connect to MongoDB...")

mongoose.connect(dataBase, {
    useNewUrlParser: true,
}).then(con => {
    console.log('Database connection successful!')
}).catch(err => {
    console.error('MongoDB connection error:', err.message);
    console.error('Please check your connection string, network, or MongoDB Atlas status');
});

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port: ${port}...`);
});