'use strict';

/**
 * @ngdoc function
 * @name letsgo.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the letsgoApp
 */
angular.module('letsgo.map', [])
  .controller('MapCtrl', function ($scope) {
    $scope.pm = {
      center: [-77,10],
      zoom:22,
      layers: []
    };
  });
