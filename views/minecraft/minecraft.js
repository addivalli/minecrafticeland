angular.module('MC_web.views.minecraft', ['firebase', 'firebase.utils', 'firebase.auth', 'ngRoute'])

.controller('McCtrl', [ function() {
      
  }])

.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/minecraft', {
      templateUrl: 'views/minecraft/minecraft.html',
      controller: 'McCtrl'
    })
  }]);