const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const Data = require('./data');
const axios = require('axios');
const API_PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(bodyParser());
const router = express.Router();

const path = require("path");

//connects mongo db
mongoose
  .connect('mongodb://kunj:kunj123@ds041188.mlab.com:41188/heroku_k6t11mxt', { useNewUrlParser: true })
  .catch(e => {
    console.error('Connection error', e.message)
  })

let db = mongoose.connection;

module.exports = db

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



// append /api for our http requests
app.use('/api', router);


//have the server connect the client
app.use(express.static(path.join(__dirname, "../client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));