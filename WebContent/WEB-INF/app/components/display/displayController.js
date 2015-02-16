/**
 * 
 */

var app = angular.module('app.display',[]);

app.controller('displayController',function($scope,userService){
	$scope.users = userService.all();
});