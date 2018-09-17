var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/db_project");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

var nameSchema = new mongoose.Schema({
 nombre: String,
 email: String,
 contraseña: String
});

var User = mongoose.model("User", nameSchema);

// Database Name
const dbName = 'db_project';

const url ="mongodb://localhost:27017";

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('users');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}
function getData(callback) {
  MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  findDocuments(db,(data) =>{
      callback(data);
      client.close();
  });

});
}



const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'ususarios';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});


/* GET home page. */
<<<<<<< HEAD
router.get("/getData", function(req, res) {
=======
router.get('/getData', function(req, res) {
>>>>>>> 5730736c1a78222832b304ad24f8c45c7073a3b6
    getData((data) => 
  res.send(data)
  );

});


<<<<<<< HEAD
router.post("/login", (req, res) => {
var myData = new User(req.body);
 myData.save()
 .then(item => {
 res.send("item saved to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
});


module.exports = router;
=======
router.post("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log("Postiando ando");
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});


module.exports = router;
>>>>>>> 5730736c1a78222832b304ad24f8c45c7073a3b6
