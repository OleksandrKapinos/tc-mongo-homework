const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const api = require('./routes');
const app = express();


const mongoose = require('mongoose');
// const dev_db_url = 'mongodb://localhost/tc-mongo-homework';
const dev_db_url = 'mongodb+srv://oleksandr:1z2x3c4v@cluster0.otley.mongodb.net/tc-mongo-homework';
const mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, {useNewUrlParser: true,  useUnifiedTopology: true});
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', api);



const port = 4040;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});



// {
//     "title": "How to find a JOB;",
//     "subtitle": "It's gor you too)",
//     "description": "bla bla",
//     "category": "sport",
//     "owner": "5f6857bacfbbc812a7b91fb1"
// }
