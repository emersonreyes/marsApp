var marsApp = angular.module("marsApp", []);

marsApp.controller("homeController", ["$scope", function($scope) {
	$scope.page = "home";
	console.log($scope.page);
}]);