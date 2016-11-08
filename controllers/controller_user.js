var Q= require('q');
var request = require('request');

module.exports = {

	login : function(req, res, next) {
		res.render('user/login', {
			title: '登录-房直租'
		});
	},

	regist : function(req, res, next) {
		res.render('user/regist', {
			title: '注册-房直租'
		});
	},

	usercenter : function(req, res, next) {
		res.render('user/usercenter', {
			title: '用户中心-房直租'
		});
	}
}