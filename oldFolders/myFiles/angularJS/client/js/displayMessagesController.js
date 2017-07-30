appName.controller('displayController', ['$scope','$http',function($scope,$http){
    $scope.getMessages = getMessages;
    $scope.getMessages();
    function getMessages(){
      $http.get('/messages')
            .success(function(result){
              $scope.rules = result;
            })
            .error(function(data,status){
              console.log(data);
            });
    }

}]);
