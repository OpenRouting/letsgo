'use strict';

/**
 * @ngdoc function
 * @name letsgo.controller:SidePanelCtrl
 * @description
 * # MapCtrl
 * Controller of the letsgoApp
 */
angular.module('letsgo')
  .controller('SidePanelCtrl', function ($scope) {
    $scope.pm = {
      origin:undefined,
      destination:undefined
    };

    $scope.$watch('pm.origin', function(){console.log('asdf')})
  });
