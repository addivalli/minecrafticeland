angular.module('MC_web.views.history', ['firebase', 'firebase.utils', 'firebase.auth', 'ngRoute'])

.controller('HistoryCtrl', [ function() {
      
  }])

.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/history', {
      templateUrl: 'views/history/history.html',
      controller: 'HistoryCtrl'
    })
  }]);