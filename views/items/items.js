angular.module('MC_web.views.items', ['firebase', 'firebase.utils', 'firebase.auth', 'ngRoute'])

.controller('VideoCtrl', [ function() {
      
  }])

.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/items', {
      templateUrl: 'views/items/items.html',
      controller: 'VideoCtrl'
    })
  }]);