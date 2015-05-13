'use strict';

//Upphafsskilgreining á Vefsíðunni:

angular.module ('MC_web', [
	'MC_web.config',
	'MC_web.security',
	'MC_web.views.account',
	'MC_web.login',
	'MC_web.views.minecraft',
	'MC_web.views.history',
	'MC_web.views.modding',
	'MC_web.views.videos',
	'MC_web.views.items',
	'firebase',
	'firebase.utils',
	'firebase.auth',
	])

	//Þegar síðan ræsir sér athugar hún hvort við erum loggaðir eða ekki til að sjá <nav> efnið. (sjá index.html)
	.run(['$rootScope', 'Auth', function($rootScope, Auth) {
    	// Athuga auðþekkingu á LoggedIn
    	Auth.$onAuth(function(user) {
      	$rootScope.LoggedIn = !!user;
    	});
	}])

//MainControllerinn á index.html
.controller('MainCtrl', ['$scope', function ($scope) {
    	//alert('MainController alert');
  }]);