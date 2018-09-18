//"use strict";    //--code-review

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
var projectSchema = new mongoose.Schema({
 projectNumber: Number,
 titulo: String,
 reviews: Number,
 descripcion: String,
 dinero: Number,
 vacantes: Number,
 imagen: String,
 comentario: String
});

var User = mongoose.model("User", nameSchema);

var Project = mongoose.model("Project", projectSchema);

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
const findProjects = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('projects');
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
function getProjects(callback) {
  MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  findProjects(db,(data) =>{
      callback(data);
      client.close();
  });

});
}






// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});


/* GET home page. */
router.get('/getData', function(req, res) {
    getData((data) => 
  res.send(data)
  );

});


router.get('/getProjects', function(req, res) {
    getProjects((data) => 
  res.send(data)
  );

});


router.post("/login", (req, res) => {
var myData = new User({
  _id: new mongoose.Types.ObjectId(),
  nombre: req.body.nombre,
  email: req.body.email,
  contraseña: req.body.contraseña
  });
 myData.save()
 .then(item => {
 res.json(myData);
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
});

router.post("/project", (req, res) => {
var myData = new Project(req.body);
 myData.save()
 .then(item => {
 res.json(myData);
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
});


module.exports = router;

