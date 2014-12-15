/**
 * Created by christopherfricke on 12/14/14.
 */
'use strict';

angular.module('letsgo')
  .controller('DirectionsCtrl', function ($scope) {
    $scope.pm = {
      origin: undefined,
      destination: undefined,

      directions: [
        {text:'Start at origin'},
        {text:'Go forward'},
        {text:'End at destination'}

      ]
    };
  });
