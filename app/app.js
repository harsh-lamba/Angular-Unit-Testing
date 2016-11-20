require('./externals/angular.min');
var myApp = angular.module("myApp", []);
myApp.controller("controller", function($scope) {
	$scope.title = "Angular Unit Testing";
	$scope.message = "sample angular project set-up using GULP & BROWSERIFY";
});