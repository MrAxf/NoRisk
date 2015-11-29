app.directive('projectList', function($compile) {

  return {
    restrict: 'E',
    scope: {
      info: '=',
      user: '='
    },
    templateUrl: 'js/directives/projectList.html',
    link: function(scope, element, attrs) {
        $compile(element.contents())(scope.$new());
    }
  };
});
