app.controller('NavBarController', ['$scope','$cookies', 'auth', function($scope, $cookies, auth) {
  $scope.notLogin = {
    left: [],
    rigth: [
      {
        name: "Regístrate",
        icon: "fa fa-pencil",
        link: "register"
      },
      {
        name: "Entrar",
        icon: "fa fa-sign-in",
        link: "login"
      }]
	};
  $scope.login = {
    left: [],
    rigth: []
	};

  $scope.setCurr = function(){
    if(typeof $cookies.get('username') == 'undefined') return $scope.notLogin;
    else{
      $scope.login.username = $cookies.get('username');
      return $scope.login;
    }
  };

  $scope.curr = $scope.setCurr();

  $scope.$on('authEvent', function() {
    $scope.curr = $scope.setCurr();
  });

  $scope.logout = function()
  {
      auth.logout();
  };

}]);
