app.controller('dashboardController', ['$scope', '$cookies', 'projectService', function($scope, $cookies, projectService) {

	$scope.pene = projectService.getAll();
	$scope.projects =[{
		id: 1,
		title: 'Proyecto 1',
		descripcion: 'Este es el proyecto 1',
		owner: 1
	},
	{
		id: 2,
		title: 'Proyecto 2',
		descripcion: 'Este es el proyecto 2',
		owner: 1
	},
	{
		id: 3,
		title: 'Proyecto 3',
		descripcion: 'Este es el proyecto 3',
		owner: 2
	},
	{
		id: 4,
		title: 'Proyecto 4',
		descripcion: 'Este es el proyecto 4',
		owner: 2
	},
	{
		id: 5,
		title: 'Proyecto 5',
		descripcion: 'Este es el proyecto 5',
		owner: 1
	},
	{
		id: 6,
		title: 'Proyecto 6',
		descripcion: 'Este es el proyecto 6',
		owner: 2
	},
	{
		id: 7,
		title: 'Proyecto 7',
		descripcion: 'Este es el proyecto 7',
		owner: 1
	}];

	$scope.user = {
		name: $cookies.get("username"),
		id: 1
	};

	$scope.getOwnerProjectsLength = function(){
		var i = 0;
		angular.forEach($scope.projects, function(value, key) {
  		if(value.owner == $scope.user.id)i++;
		});
		return i;
	};

}]);
