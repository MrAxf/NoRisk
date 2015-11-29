app.controller('projectController', ['$scope', '$cookies', '$stateParams', '$state', function($scope, $cookies, $stateParams, $state) {

  $scope.user = {
		name: $cookies.get("username"),
		id: 1
	};

  $scope.project = {
  };

  $scope.menbers = [{
    id: 2,
    name: '1'
  },
  {
    id: 3,
    name: '2'
  },
  {
    id: 4,
    name: '3'
  }];

  $scope.users = [{
    id: 2,
    name: '1'
  },
  {
    id: 3,
    name: '2'
  },
  {
    id: 4,
    name: '3'
  },
  {
    id: 5,
    name: '4'
  }];

  $scope.risk = [{
    
  }];

  $scope.init = function () {
    if($stateParams.projectId !== null){
      $scope.project = {
        id: $stateParams.projectId,
        title: "Proyecto dummy",
        descripcion: "Esto es un dummy",
        category: "3",
        start_date: "01/01/2015",
        end_date: "01/02/2015",
        owner: 5
      };
    }else $state.go("dashboard");
  };

  $scope.init();

}]);
