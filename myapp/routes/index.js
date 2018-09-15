var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'db_project';

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
// Use connect method to connect to the server




/* GET home page. */
router.get('/getData', function(req, res) {
	  getData((data) => 
  res.send(data)
  );

});

module.exports = router;
