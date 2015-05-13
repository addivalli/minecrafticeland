angular.module('MC_web.views.modding', ['firebase', 'firebase.utils', 'firebase.auth', 'ngRoute'])

.controller('ModdingCtrl', [ function() {
      
  }])

.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/modding', {
      templateUrl: 'views/modding/modding.html',
      controller: 'ModdingCtrl'
    })
    .when('/modding/forge', {
      templateUrl: 'views/modding/forge/forge.html',
      controller: 'ModdingCtrl'
    })
    .when('/modding/modpacks', {
      templateUrl: 'views/modding/modpacks/modpacks.html',
      controller: 'ModdingCtrl'
    })
    .when('/modding/texturepacks', {
      templateUrl: 'views/modding/texturepacks/texturepacks.html',
      controller: 'ModdingCtrl'
    })
  }]);