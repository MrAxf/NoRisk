app.controller('projectFormController', ['$scope', '$cookies', '$stateParams', function($scope, $cookies, $stateParams) {

  $scope.user = {
		name: $cookies.get("username"),
		id: 1
	};

  $scope.project = {
  };

  $scope.save = function(){
    $scope.project.start_date= $('#datetimepicker1 input').val();
    $scope.project.start_end= $('#datetimepicker2 input').val();
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
      $('#title input').val($scope.project.title);
      $('#descripcion textarea').val($scope.project.descripcion);
      $('#category input').val($scope.project.category);
      $('#datetimepicker1 input').val($scope.project.start_date);
      $('#datetimepicker2 input').val($scope.project.end_date);
    }
};

$scope.init();

}]);
