'use strict';
var request=require('request');
exports.get=function(callback){
	request('http://localhost:8000/badges',function(err,response,data){
		callback(err,JSON.parse(data));
	});
};