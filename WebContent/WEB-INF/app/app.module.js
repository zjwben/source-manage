/**
 * app.module.js
 */
var app = angular.module('myApp', []);

app.directive('header',function(){
	 var directive = {};
	
	 directive.restrict = 'E';
	 
	 directive.templateUrl = "app/shared/header.html";

	 return directive;
	
});
