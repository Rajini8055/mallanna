		angular.module('weatherApp')
				.service('cityService',cityService);


			function cityService(){
				this.city = "New York, NY";
			}