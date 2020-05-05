const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const multer = require('multer')
const upload = multer({ dest: 'uploads/profilepic/' })
const http = require("http");

const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
let port = 4000;



const pharmacyroutes = require('./app/Routers/pharmacy.router'); // Imports routes for the products
const phirouter = require('./app/Routers/phi.router'); // Imports routes for the products
const utilfunctionsrouter = require('./app/Routers/utilfunctions.router'); // Imports utilfunctions router
const helpforothers = require('./app/Routers/helpforother.route'); // Imports help for others router
const testimage = require('./app/Routers/testimage.router'); // Imports image  upload

// import db
const dbConfig = require('./Config/config.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/uploads', express.static('uploads'))
mongoose.set('useCreateIndex', true);

// app.use(bodyParser.urlencoded({extended: false}));


// ------------------------------------------------------------------------
app.use('/pharmacy', pharmacyroutes);
app.use('/phi', phirouter);
app.use('/validate', utilfunctionsrouter);
app.use('/helpforothers', helpforothers);
app.use('/art', testimage);

// ------------------------------------------------------------------------

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404
    next(error);

});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });

});






// // addd mongo clieew
// const uri = "mongodb+srv://padulaguruge:Default123@cluster0-aa0hd.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {

//     const collection = client.db("test").collection("devices");
//     if (err) {
//         console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
//     }
//     console.log('Connected...');
//     // perform actions on the collection object
//     client.close();
// })


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



