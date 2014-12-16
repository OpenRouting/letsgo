'use strict';

/**
 * @ngdoc function
 * @name letsgo.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the letsgoApp
 */
angular.module('letsgo')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.pm = {
      title: 'Let\'s Go!',
      subtitle: '',

      currentYear: new Date().getFullYear()
    }

  });
