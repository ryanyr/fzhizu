var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// 定义用户表，用户对象模型
var userSchema = new Schema({
		
	email: {			//注册邮箱，唯一
		type:String,
		trim:true
	},
	password: {			//密码段
		type:String,
		trim:true
	},
	nickn: {			//昵称
		type:String,
		trim:true
	},
	image: {
		type: String,
		default: '../images/write.jpg'
		},		//用户头像
	selfintro: {		//自我介绍
		type: String,
		default: '闲来无事不从容'
	},  
	mood: {				//近期心情
		type: String,
		default: '平静'
	},
	autograph: {		//用户签名
		type: String,
		default: '暂时沉默中'
	},
	postArticles: {		//保存日记
		type: Schema.Types.ObjectId,
		ref: 'posts'
	},
	followernum: {			//被关注，粉丝数
		type: Number,
		default: 0
	},	
	followernum: {			//关注数
		type: Number,
		default: 0
	},	
	location: {			//所在地
		type: String,
		default: 'CN'
	},
	create_at: {			
		type: Date,
		default: Date.now
	},
	messages: [   //单页留言数据
		{
			uuid:Schema.Types.ObjectId,
			uuname:String,			
			uuself:String,
			content:String
		}
	]
});

module.exports = mongoose.model('user', userSchema);//创造model模型
