/**
 * 
 */

var app = angular.module('app.display');

app.factory('userService',function(){
	var users = ['zjw1','zjw2','zjw3'];
	
	return{
		all:function(){
			return users;
		},
		first:function(){
			return users[0];
		}
	};
});