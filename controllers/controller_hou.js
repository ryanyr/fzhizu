var Q= require('q');
var request = require('request');

module.exports = {

	index : function(req, res, next) {
		res.render('hou/index', {
			title: '首页-房直租'
		});

	}

}