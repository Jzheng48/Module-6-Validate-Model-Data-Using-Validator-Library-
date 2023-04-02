const app = require('./app');
const dotenv = require("dotenv")
dotenv.config({ path: './config.env' });
const port=process.env.PORT
const database=process.env.DATABASE.replace('<password>', process.env.DB_PASSWORD);

//const bodyParser= require('body-parser')
//app.use(bodyParser.json())





//app.get('/', (req, res) => res.send('Hello World'));

//app.get('/grade', (req, res) => res.send('Hello World from student grade'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const mongoose = require('mongoose')

mongoose.connect(database, {useNewUrlParser:true})  //useCreateIndex: true}
    .then(() => console.log(`The Database connection was successful with ${process.env.DATABASE}`))
    .catch((err) => console.error(err));
    