app.controller('projectFormController', ['$scope', '$cookies', '$stateParams', '$state', 'projectService', function($scope, $cookies, $stateParams, $state, projectService) {

  $scope.user = {
		name: $cookies.get("username"),
		id: $cookies.get("id")
	};

  $scope.project = {
  };

  $scope.categories = {
  };

  projectService.getCategories().success(function(data){
    $scope.categories = data.results;
  });

  $scope.save = function(){
    $scope.project.start_date= moment($('#datetimepicker1 input').val(), "DD/MM/YYYY").format("YYYY-DD-MM");
    $scope.project.end_date= moment($('#datetimepicker2 input').val(), "DD/MM/YYYY").format("YYYY-DD-MM");
    if($scope.project.risk_line == null) project.risk_line = 10;
    if($scope.project.url == null){
      projectService.post($scope.project).success(function(){
        console.log("Proyecto añadido");
        $state.go('dashboard', {}, {reload: true, inherit: false, notify: true});
      });
    }
    else projectService.put($scope.project.url, $scope.project).success(function(){
      console.log("Proyecto modificado");
      $state.go('dashboard', {}, {reload: true, inherit: false, notify: true});
    });
  };

  $scope.areDatesSet = function() {
    return ($('#datetimepicker1 input').val() !== "" && $('#datetimepicker2 input').val() !== "");
  };

  $scope.init = function () {
    if($stateParams.projectUrl !== null){
      projectService.getByUrl($stateParams.projectUrl).success(function(data){
        $scope.project = data;
        startParse = moment($scope.project.start_date).format("DD/MM/YYYY");
        endParse = moment($scope.project.end_date).format("DD/MM/YYYY");
        $('#title input').val($scope.project.title);
        $('#descripcion textarea').val($scope.project.descripcion);
        $('#category input').val($scope.project.category);
        $('#datetimepicker1 input').val(startParse);
        $('#datetimepicker2 input').val(endParse);
      });
    }else{
      $scope.project.id_owner = $scope.user.id;
      $scope.project.members = [];
    }
};

$scope.init();

}]);
