var apiRestUrl = "http://umkkefcc7456.mraxf.koding.io/";
var app = angular.module('NoRisk', ['ui.router', 'ngCookies']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
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
        projectUrl: null,
      },
      templateUrl: "views/projectForm.html",
      controller: "projectFormController"
    }).state('project', {
      url: "/dashboard/project",
      params: {
        projectUrl: null,
      },
      templateUrl: "views/project.html",
      controller: "projectController"
    }).state('riskForm', {
      url: "/dashboard/project/riskForm",
      params: {
        projectUrl: null,
      },
      templateUrl: "views/riskForm.html",
      controller: "riskFormController"
    });
});

app.run(function($rootScope, auth)
{
    //al cambiar de rutas
    $rootScope.$on('$stateChangeSuccess', function()
    {
        auth.checkStatus();
    });
});
