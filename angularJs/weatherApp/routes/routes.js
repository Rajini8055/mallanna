		angular.module('weatherApp')
				.config(function($routeProvider){
					$routeProvider
					.when('/home',{
						templateUrl: 'pages/homePage.html',
						controller: 'homeController'
					})
					.when('/forecast',{
						templateUrl: 'pages/forecastPage.html',
						controller: 'forecastController'
					});
				});