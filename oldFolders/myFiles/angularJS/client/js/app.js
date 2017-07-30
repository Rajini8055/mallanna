//module
var appName = angular.module('myApp', ['ngRoute']);

//custom service
appName.service('nameService',function(){
    var self = this;
    this.name = 'mallanna';
    this.nameLength = function(){
      return self.name.length;
    }
});


//router
appName.config(function($routeProvider) {
  $routeProvider.when('/main', {
                templateUrl: 'pages/main.html',
                controller: 'mainController'
              })
              .when('/second',{
                templateUrl:'pages/second.html',
                controller:'secondController'
              })
              .when('/second/:num',{
                templateUrl:'pages/second.html',
                controller:'secondController'
              })

});
//controller-1
appName.controller('mainController', ["$scope",'nameService',function($scope,nameService) {
      $scope.people =[
        {
          name:'John Doe',
          address:'555, main st',
          city:'New York',
          state: 'NY',
          zip: '1111'
        },
        {
          name:'Kumar',
          address:'555, main st',
          city:'SFO',
          state: 'CA',
          zip: '9438'
        },
        {
          name:'Swamy',
          address:'555, main st',
          city:'New York',
          state: 'NC',
          zip: '28273'
        }
      ];

      $scope.formattedAddress = function(person){
        return person.name +','+person.address+','+person.city+','+person.state+','+ person.zip;
      };
}]);
//controller-1
appName.controller('secondController',['$scope','$routeParams','nameService',function($scope,$routeParams,nameService){

}]);
