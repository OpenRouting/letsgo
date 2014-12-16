'use strict';

/**
 * @ngdoc overview
 * @name Lets Go
 * @description
 * # letsgo
 *
 * Main module of the application.
 */
angular
  .module('letsgo', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'letsgo.main'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/main/main.tpl.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

