var express = require('express');
var router = express.Router();
var controller_hou = require('../controllers/controller_hou');

/* GET home page. */


module.exports = function() {

	//indexpage route
	router.route('/').get(controller_hou.index);
	

	return router;
};