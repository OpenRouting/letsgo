'use strict';

/**
 * @ngdoc function
 * @name letsgoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the letsgoApp
 */
angular.module('letsgoApp', ['letsgoApp.configuration.factory', 'letsgoApp.api.factory'])
  .controller('AboutCtrl', ['configuration', '$scope', function (configuration, $scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log('asdf');
    console.log(configuration.apiRoot);
  }]);
