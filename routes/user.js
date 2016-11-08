var express = require('express');
var router = express.Router();
var controller_user = require('../controllers/controller_user');

/* GET home page. */


module.exports = function() {

	//indexpage route

	router.route('/login').get(controller_user.login);

	router.route('/registe').get(controller_user.regist);

	router.route('/usercenter').get(controller_user.usercenter);

	return router;
};