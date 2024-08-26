//SERVER
const app = require('./app')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config({path: './config.env'})//saves config variables into nodejs enviroment variables

const dataBase = process.env.MONGO.replace('<PASSWORD>', process.env.MONGO_PASS)

mongoose.connect(dataBase, {
    useNewUrlParser: true,
}).then(con => {
    console.log('Database connection succesful!')
})

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port: ${port}...`);
});