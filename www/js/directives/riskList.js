app.directive('riskList', function($compile) {

  return {
    restrict: 'E',
    scope: {
      info: '=',
      projecturl: '=',
      delete: '&',
    },
    templateUrl: 'js/directives/riskList.html',
  };
});
