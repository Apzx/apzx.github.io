'use strict';

angular.module('landingModule', []);

angular.module('mainModule', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'landingModule'
  ]);

angular.module('mainModule').config(function ($stateProvider, $locationProvider) {
    $stateProvider
      .state('landing', {
        url: '^',
        templateUrl: 'modules/landing/landing.tmpl',
        controller: 'landingController'
      });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  });

angular.module('mainModule').run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      $rootScope.previousState = fromState.name;
      $rootScope.currentState = toState.name;
      fromParams = fromParams; // Fuck you jshint
    });
  }]);