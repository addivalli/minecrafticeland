"use strict";

angular.module('MC_web.login', ['firebase', 'firebase.utils', 'firebase.auth', 'ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {
      controller: 'LoginCtrl',
      templateUrl: 'login/login.html'
    });
  }])

  .controller('LoginCtrl', ['$scope', 'Auth', '$location', '$firebaseObject', 'fbutil', function($scope, Auth, $location, $firebaseObject, fbutil) {
    $scope.email = 'kennari@tskoli.is';
    $scope.password = 'asdf1234';
    $scope.confirm = null;
    $scope.createMode = false;

    $scope.login = function(email, pass) {
      alert("login in");
      $scope.err = null;
      Auth.$authWithPassword({ email: email, password: pass }, {rememberMe: true})
        .then(function(user) {
          alert("login authenticated");
          alert("TODO: setja inn: 'Authenticating...' loadingbar");
          $location.path('/account');
        }, function(err) {
          alert("login not authenticated");
          $scope.err = errMessage(err);
        });
    };

    alert("password: asdf1234");
    
  }]);