require('./externals/angular.min');
var myApp = angular.module("myApp", []);
myApp.controller("controller", function($scope) {
	$scope.title = "Angular Unit Testing";
	$scope.message = "Added few gulp tasks for - JsLinting/Watcher/LiveReload";
});