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

  $scope.noMembers = [{
    id: 5,
    username: '5'
  },
  {
    id: 6,
    username: '6'
  },
  {
    id: 7,
    username: '7'
  },
  {
    id: 8,
    username: '8'
  }];

  $scope.risks = [{
    id: 1,
    name: "Baja laboral",
    category: "Recursos humanos",
    probability: 5,
    impact: "Despreciable",
    description: "Baja de alguno de los componentes del proyecto",
    factors: "Carga de trabajo de los miembros del proyecto",
    reduction: "Revalanceo de la carga de trabajo",
    supervision: "Cosas nasis (No se que poner para el ej)"
  },
  {
    id: 2,
    name: "Baja laboral 2",
    category: "Recursos humanos",
    probability: 5,
    impact: "Despreciable",
    description: "Baja de alguno de los componentes del proyecto",
    factors: "Carga de trabajo de los miembros del proyecto",
    reduction: "Revalanceo de la carga de trabajo",
    supervision: "Cosas nasis (No se que poner para el ej)"
  },
  {
    id: 3,
    name: "Baja laboral 3",
    category: "Recursos humanos",
    probability: 5,
    impact: "Despreciable",
    description: "Baja de alguno de los componentes del proyecto",
    factors: "Carga de trabajo de los miembros del proyecto",
    reduction: "Revalanceo de la carga de trabajo",
    supervision: "Cosas nasis (No se que poner para el ej)"
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
