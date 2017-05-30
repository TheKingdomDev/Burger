var orm = require("../config/orm.js");


var burgers = {
	selectAll: function(cb){
		orm.selectAll('burgers', function(res){
			cb(res);
		});
	},
	create: function(col, vals, cb){
		orm.create('burgers', col, vals, function(res){
			cb(res);
		});
	},
	update: function(objColVals, condition, cb){
		orm.update('burgers', objColVals, condition, function(res){
			cb(res);
		});
	}
};

module.exports = burgers;