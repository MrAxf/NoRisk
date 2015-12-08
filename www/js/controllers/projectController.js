app.controller('projectController', ['$scope', '$cookies', '$stateParams', '$state', 'projectService', 'userService', function($scope, $cookies, $stateParams, $state, projectService, userService) {

  $scope.user = {
		name: $cookies.get("username"),
		id: $cookies.get("id")
	};

  $scope.project = {};

  $scope.users = [];

  $scope.members = [];

  $scope.isOwner = false;

  $scope.member = null;

  $scope.addMembers = function (idMember) {
    $scope.project.members.push(parseInt(idMember));
    projectService.put($scope.project.url, $scope.project).success(function(){
      $state.reload();
    });
  };

  $scope.deleteMember = function (idMember) {
    index = $scope.project.members.indexOf(parseInt(idMember));
    $scope.project.members.splice(index, 1);
    projectService.put($scope.project.url, $scope.project).success(function(){
      $state.reload();
    });
  };

  $scope.init = function () {
    if($stateParams.projectUrl !== null){
      projectService.getByUrl($stateParams.projectUrl).success(function(data){
        $scope.project = data;
        userService.getAll().success(function(data){
          angular.forEach(data.results, function(value, key) {
        		if(value.id != $scope.user.id && $.inArray(value.id ,$scope.project.members) == -1){
              $scope.users.push({id: value.id, username: value.username});
            }
            if($.inArray(value.id ,$scope.project.members) != -1) $scope.members.push({id: value.id, username: value.username});
      		});
        });
        if($scope.user.id == $scope.project.id_owner) $scope.isOwner = true;
      });
    }else $state.go("dashboard");
  };

  $scope.init();

}]);
