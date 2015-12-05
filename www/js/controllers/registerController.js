app.controller('registerController', ['$scope', 'auth', 'userService', function($scope, auth, userService) {
  $scope.reg = {};
  $scope.user = {};

  userService.getAll().success(function(data){
    var users = [];
    angular.forEach(data.results, function(value, key) {
      users.push(value.username);
    });
    $scope.users = users;
  });

  $scope.register = function(){
    $scope.user.username = $scope.reg.username;
    $scope.user.password = $scope.reg.password;
    userService.post($scope.user).success(function(){
      auth.login($scope.reg.username, $scope.reg.password);
    });
  };
}]);
