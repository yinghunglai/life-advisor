angular
.module('app')
.controller('truthCtrl', ['$scope', '$rootScope', '$http', '$state', function($scope, $rootScope, $http, $state) {
   var start = Date.parse(new Date());
   $scope.load = function (){
     $http({
      method: 'GET',
      url: 'http://api.acme.international/fortune',
      timeout: 5000
    }).success(function(data, status) {
      $rootScope.programs = data.fortune;
      $state.go('moretruth');
    }).error(function(data, status) {
      if (Math.floor(((Date.parse(new Date()) - start)/1000)%60) < 10){
        $scope.load();
      } 
      $state.go('moretruth');
    });
   }
}]);
