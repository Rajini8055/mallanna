		  angular.module('weatherApp')
				.controller('forecastController', ['$scope','$resource','cityService',forecastController]);


			function forecastController($scope, $resource,cityService){
				$scope.city = cityService.city;
				$scope.days = 2;
				 var url = 'http://api.openweathermap.org/data/2.5/forecast/daily'+
                    '?appid=ebf612919bc64a4f97f1fe995b2c3b8d';
          $scope.weatherAPI = $resource(url,
           {jsonpCallbackParam: 'cb'}, { get: { method: "JSONP" }});


          $scope.weatherAPI.get({q:$scope.city,cnt:$scope.days})
                           .$promise.then(function(data)  {
                             $scope.weatherResult = data;
                             console.log(data);
                           },function(err){
                           });
			}