var app = angular.module('NoRisk', ['ui.router', 'ngCookies']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/home.html"
    })
    .state('login', {
      url: "/login",
      templateUrl: "views/login.html",
      controller: "loginController"
    })
    .state('register', {
      url: "/register",
      templateUrl: "views/register.html",
      controller: "registerController"
    })
    .state('dashboard', {
      url: "/dashboard",
      templateUrl: "views/dashboard.html",
      controller: "dashboardController"
    }).state('projectForm', {
      url: "/dashboard/projectForm",
      params: {
        projectId: null,
      },
      templateUrl: "views/projectForm.html",
      controller: "projectFormController"
    }).state('project', {
      url: "/dashboard/project",
      params: {
        projectId: null,
      },
      templateUrl: "views/project.html",
      controller: "projectController"
    }).state('riskForm', {
      url: "/dashboard/project/riskForm",
      params: {
        projectId: null,
      },
      templateUrl: "views/riskForm.html",
      controller: "riskFormController"
    });
});

app.factory("auth", ['$cookies','$state', '$rootScope', function($cookies, $state, $rootScope)
{
    return{
        login : function(username, password)
        {
          $cookies.put('username', username);
          $state.go("dashboard");
          $rootScope.$broadcast('authEvent');
        },
        logout : function()
        {
          $cookies.remove("username");
          $state.go("home");
          $rootScope.$broadcast('authEvent');
        },
        checkStatus : function()
        {
            var estadosLogin = ["dashboard", "project", "projectForm"];
            var estadosUnLogin = ["home", "login", "register"];
            if(this.in_array($state.current.name, estadosLogin) && (typeof $cookies.get("username") == 'undefined'))
            {
              $state.go("home");
            }
            else if(this.in_array($state.current.name, estadosUnLogin) && (typeof $cookies.get("username") != 'undefined'))
            {
              $state.go("dashboard");
            }
        },
        in_array : function(needle, haystack)
        {
            var key = '';
            for(key in haystack)
            {
                if(haystack[key] == needle)
                {
                    return true;
                }
            }
            return false;
        }
    };
}]);

app.run(function($rootScope, auth)
{
    //al cambiar de rutas
    $rootScope.$on('$stateChangeSuccess', function()
    {
        auth.checkStatus();
    });
});
