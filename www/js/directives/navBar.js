app.directive('navBar', function($compile) {

  return {
    restrict: 'E',
    scope: {
      info: '=',
      logout: '&'
    },
    templateUrl: 'js/directives/navBar.html',
    link: function(scope, element, attrs) {
        $compile(element.contents())(scope.$new());
    }
  };
});
