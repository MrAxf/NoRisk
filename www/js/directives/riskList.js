app.directive('riskList', function($compile) {

  return {
    restrict: 'E',
    scope: {
      info: '=',
    },
    templateUrl: 'js/directives/riskList.html',
    link: function(scope, element, attrs) {
        $compile(element.contents())(scope.$new());
    }
  };
});
