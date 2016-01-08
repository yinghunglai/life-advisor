angular
.module('app')
.controller('moretruthCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
      if (!$rootScope.programs){
        $rootScope.programs = ['a penny saved is a penny earned'];
      }
      $scope.programs = $rootScope.programs.join(' ').split('―');
      if ($scope.programs[1]){
        $scope.programs[1] = '―'+$scope.programs[1]
      }
}]);
