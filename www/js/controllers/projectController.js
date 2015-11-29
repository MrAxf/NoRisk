app.controller('projectController', ['$scope', '$cookies', '$stateParams', '$state', function($scope, $cookies, $stateParams, $state) {

  $scope.user = {
		name: $cookies.get("username"),
		id: 1
	};

  $scope.project = {
  };

  $scope.members = [{
    id: 2,
    username: '1'
  },
  {
    id: 3,
    username: '2'
  },
  {
    id: 4,
    username: '3'
  }];

  $scope.users = [{
    id: 2,
    username: '1'
  },
  {
    id: 3,
    username: '2'
  },
  {
    id: 4,
    username: '3'
  },
  {
    id: 5,
    username: '4'
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
