// modules
var marsApp = angular.module("marsApp", ["ngRoute",]);

// routes
marsApp.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "pages/home.html",
		controller: "homeController",
	})
});

// controllers
marsApp.controller("homeController", ["$scope", function($scope) {
	$scope.page = "home";
	console.log($scope.page);
}]);