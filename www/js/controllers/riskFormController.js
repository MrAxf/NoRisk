app.controller('projectFormController', ['$scope', '$cookies', '$stateParams', function($scope, $cookies, $stateParams) {

  $scope.user = {
		name: $cookies.get("username"),
		id: 1
	};

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
