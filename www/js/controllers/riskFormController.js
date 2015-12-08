app.controller('riskFormController', ['$scope', '$cookies', '$stateParams','$state', '$filter', 'riskService', 'riskProjectService', function($scope, $cookies, $stateParams, $state, $filter, riskService, riskProjectService) {

  $scope.user = {
		name: $cookies.get("username"),
		id: $cookies.get("id")
	};

  $scope.risks = {};
  $scope.risk = {};
  $scope.projectRisks = {};
  $scope.projectRisk = {};
  $scope.suggestions = {};

  $scope.save = function(){
    if($scope.projectRisk.url == null){
      riskProjectService.post($scope.projectRisk).success(function(){
        console.log("Riesgo añadido a proyecto");
        $state.go('project', {projectUrl: $stateParams.projectUrl}, {reload: true, inherit: false, notify: true});
      });
    }
    else riskProjectService.put($scope.projectRisk.url, $scope.projectRisk).success(function(){
      console.log("Riesgo de proyecto modificado");
      $state.go('project', {projectUrl: $stateParams.projectUrl}, {reload: true, inherit: false, notify: true});
    });
  };

  $scope.saveRisk = function(){
    riskService.post($scope.risk).success(function(){
      console.log("Riesgo añadido");

      $state.reload();
    });
  };

  $scope.feedback = function(){
    var media = 0;
    var count = 0;
    angular.forEach($scope.projectRisks, function(value, key) {
      if(value.id_risk == $scope.projectRisk.id_risk){
        media += parseInt(value.probability);
        count++;
        $scope.suggestions.factors = value.factors;
        $scope.suggestions.supervision = value.supervision;
        $scope.suggestions.reduction  = value.reduction;
      }
    });
    if(count !== 0){
      $scope.suggestions.media = media/count;
      $('#probabilidad').attr("placeholder", "La media de probabilidad es del ".concat($scope.suggestions.media, "%"));
      $('#factors').attr("placeholder", "Otros usuarios pusieron ".concat($scope.suggestions.factors));
      $('#supervision').attr("placeholder", "Otros usuarios pusieron ".concat($scope.suggestions.supervision));
      $('#reduction').attr("placeholder", "Otros usuarios pusieron ".concat($scope.suggestions.reduction));
    }else{
      $('#probabilidad').attr("placeholder", "Obligatorio");
      $('#factors').attr("placeholder", "Obligatorio");
      $('#supervision').attr("placeholder", "Obligatorio");
      $('#reduction').attr("placeholder", "Obligatorio");
    }
  };

  $scope.init = function () {
    if($stateParams.projectId !== null){
      $scope.projectRisk.id_project = $stateParams.projectId;
      riskService.getAll().success(function(data){
        $scope.risks = data.results;
      });
      riskProjectService.getAll().success(function(data){
        $scope.projectRisks = data.results;
      });
      if($stateParams.riskUrl !== null){
        riskProjectService.get($stateParams.riskUrl).success(function(data){
          $scope.projectRisk = data;
          delete $scope.projectRisk.risk;
          $scope.projectRisk.probability = parseInt($scope.projectRisk.probability);
        });
      }
    }else $state.go("dashboard");
};

$scope.init();

}]);
