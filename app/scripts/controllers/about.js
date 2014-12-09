'use strict';

/**
 * @ngdoc function
 * @name letsgoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the letsgoApp
 */
angular.module('letsgoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
