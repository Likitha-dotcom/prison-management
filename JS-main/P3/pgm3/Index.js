const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const bookRoute = require('./routes/book');

const app = express();

const PORT = 8000;

const MongoDBUrl ="mongodb+srv://admin:admin@cluster0.4ogh0.mongodb.net/pgm3?retryWrites=true&w=majority";
app.use(bodyParser.json());

app.use(cors());

app.use('/book', bookRoute);

mongoose.connect(MongoDBUrl, () => {  
  app.listen(PORT, () => {
    console.log('Server started on port number 8000');
  });
})