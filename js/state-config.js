angular
  .module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    // if url not landing or display, show landing page
    $urlRouterProvider.otherwise('/truth');
    $stateProvider
        // Initial view for taking starting points and destination  ========================================
        .state('truth', {
            url: '/truth',
            templateUrl: 'truth.html',
            controller: 'truthCtrl'
        })
        .state('moretruth', {
            url: '/moretruth',
            templateUrl: 'moretruth.html',
            controller: 'moretruthCtrl'
        })
  });
