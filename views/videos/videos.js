angular.module('MC_web.views.videos', ['firebase', 'firebase.utils', 'firebase.auth', 'ngRoute'])

.controller('VideoCtrl', [ function() {
      
  }])

.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/videos', {
      templateUrl: 'views/videos/videos.html',
      controller: 'VideoCtrl'
    })
  }]);