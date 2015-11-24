app.controller('loginController', ['$scope','auth', function($scope, auth) {
  $scope.login = function()
  {
    auth.login($scope.user.username, $scope.user.password);
    $scope.$broadcast('authEvent');
  };
}]);
