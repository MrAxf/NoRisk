app.factory("riskProjectService", ['$http', function($http)
{
  var element = "riskprojects/";
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
    get: function(url){
      return $http.get(url)
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
    put: function(url, data){
      return $http.put(url, data)
        .success(function(data) {
          return true;
        })
        .error(function(err) {
          return false;
      });
    },
    delete: function(url){
    return $http.delete(url)
      .success(function(data) {
        return true;
      })
      .error(function(err) {
        return false;
      });
    }
  };

}]);
