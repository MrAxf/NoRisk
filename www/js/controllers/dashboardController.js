app.controller('dashboardController', ['$scope', '$cookies','$state', 'projectService', function($scope, $cookies, $state, projectService) {

	$scope.projects = [];

	$scope.user = {
		name: $cookies.get("username"),
		id: $cookies.get("id")
	};

	projectService.getAll().success(function(data){
		angular.forEach(data.results, function(value, key) {
  		if(value.id_owner == $scope.user.id || $.inArray(parseInt($scope.user.id) ,value.members) != -1){
				$scope.projects.push(value);
			}
		});
	});

	$scope.delete = function(url){
		projectService.deleteByUrl(url).success(function(){
			$state.reload();
		});
	};

	$scope.getOwnerProjectsLength = function(){
		var i = 0;
		angular.forEach($scope.projects, function(value, key) {
  		if(value.id_owner == $scope.user.id)i++;
		});
		return i;
	};

}]);
