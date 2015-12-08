app.factory("projectService", ['$http', function($http)
{
  var element = "projects/";
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
    getByUrl: function(url){
      return $http.get(url)
        .success(function(data) {
          return data;
        })
        .error(function(err) {
          return null;
      });
    },
    getCategories: function(){
      return $http.get(apiRestUrl.concat('categories/'))
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
    delete: function(id){
    return $http.delete(apiRestUrl.concat(element,id,"/"))
      .success(function(data) {
        return true;
      })
      .error(function(err) {
        return false;
      });
    },
    deleteByUrl: function(url){
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
