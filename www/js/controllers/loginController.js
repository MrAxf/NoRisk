app.controller('loginController', ['$scope','auth', function($scope, auth) {
  $scope.fail = null;
  $scope.login = function()
  {
    auth.login($scope.user.username, $scope.user.password);
    $scope.$broadcast('authEvent');
  };
  $scope.$on('authFail', function(){
    $scope.fail = true;
    $scope.user={};
  });
}]);
