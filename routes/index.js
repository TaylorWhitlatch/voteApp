var express = require('express');
var router = express.Router();
var config = require('../config/config');
var request = require('request');
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var connection = mysql.createConnection(config.db);
connection.connect((error)=>{
	console.log(error);
});



module.exports = router;
