app.factory("auth", ['$cookies','$state', '$rootScope', 'userService', function($cookies, $state, $rootScope, userService)
{
    return{
        login : function(username, password)
        {
          userService.getAll().success(function(data){
            var users = {};
            angular.forEach(data.results, function(value, key) {
              users[value.username] = value.password;
              if(users[username] == password){
                $cookies.put('username', username);
                $state.go("dashboard");
                $rootScope.$broadcast('authEvent');
              }else $rootScope.$broadcast('authFail');
            });
          });
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
