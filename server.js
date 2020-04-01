const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
let port = 4000;


const pharmacyroutes = require('./app/Routers/pharmacy.router'); // Imports routes for the products
const phirouter = require('./app/Routers/phi.router'); // Imports routes for the products
const utilfunctionsrouter = require('./app/Routers/utilfunctions.router'); // Imports utilfunctions router
const helpforothers = require('./app/Routers/helpforother.route'); // Imports help for others router

// import db
const dbConfig = require('./Config/config.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({extended: false}));


// ------------------------------------------------------------------------
app.use('/pharmacy', pharmacyroutes);
app.use('/phi', phirouter);
app.use('/validate',utilfunctionsrouter );
app.use('/helpforothers',helpforothers );

// ------------------------------------------------------------------------


// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});



