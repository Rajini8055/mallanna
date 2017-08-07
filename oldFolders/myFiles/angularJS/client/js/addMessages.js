appName.controller('addController', ['$scope','$http',function($scope,$http){
    $scope.addMessage = addMessage;
    // $scope.addMessage();
    function addMessage(event){
      event.preventDefault();
      var data = {
        name : $scope.name,
        message:$scope.message,
        when:$scope.when
      }

      $http.post('/message',data)
            .success(function(){
              alert('success');
            })
            .error(function(data,status){
              console.log(data);
            });
    }

}]);
