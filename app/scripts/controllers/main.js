'use strict';

/**
 * @ngdoc function
 * @name letsgoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the letsgoApp
 */
angular.module('letsgoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
