app.factory("userService", ['$http', function($http)
{
  var element = "users/";
  return {

    getAll: function(){
      return $http.get(apiRestUrl.concat(element))
        .success(function(data) {
          return data;
        })
        .error(function(err) {
          return null;
      });
    },
    get: function(id){
      return $http.get(apiRestUrl.concat(element,id,"/"))
        .success(function(data) {
          return data;
        })
        .error(function(err) {
          return null;
      });
    },
    post: function(data){
      return $http.post(apiRestUrl.concat(element), data)
        .success(function(data) {
          return true;
        })
        .error(function(err) {
          return false;
      });
    },
    put: function(data){
      return $http.put(apiRestUrl.concat(element), data)
        .success(function(data) {
          return true;
        })
        .error(function(err) {
          return false;
      });
    }
  };

}]);
