app.directive('projectList', function($compile) {

  return {
    restrict: 'E',
    scope: {
      info: '=',
      user: '=',
      delete: '&'
    },
    templateUrl: 'js/directives/projectList.html',
  };
});
