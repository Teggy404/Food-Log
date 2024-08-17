//SERVER
const app = require('./app')
const dotenv = require('dotenv')

dotenv.config({path: './config.env'})//saves config variables into nodejs enviroment variables

const dataBase = process.env.MONGO.replace('<PASSWORD>', process.env.MONGO_PASS)

mongoose.connect(dataBase, {
    useNewUrlParser: true,
}).then(con => {
    console.log('Database connection succesful!')
})

testUser.save().then(doc => {
    console.log(doc);
}).catch(err => {
    console.log(err);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port: ${port}...`);
});