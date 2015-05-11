'use strict';

//Upphafsskilgreining á Vefsíðunni:

angular.module ('MC_web', [
	'MC_web.config',
	'MC_web.security',
	'MC_web.account',
	'MC_web.login',
	'firebase',
	'firebase.utils',
	'firebase.auth',
	])


  .run(['$rootScope', 'Auth', function($rootScope, Auth) {
    // track status of authentication
    Auth.$onAuth(function(user) {
      $rootScope.LoggedIn = !!user;
    });
}])

.controller('HomeCtrl', ['$scope', function ($scope) {
    
  }]);