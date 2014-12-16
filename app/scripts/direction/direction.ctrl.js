/**
 * @ngdoc function
 * @name letsgo.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the letsgoApp
 */
angular.module('letsgo.direction', [
  'searchdropdown'
])
  .controller('DirectionCtrl', function ($scope) {
    $scope.pm = {
      origin: {
        text: '',
        type: 'search',
        showResults: true,
        results: [
          '1','2','3'
        ]
      },
      destination:{
        text:'',
        showResults: true,
        results: [
          '1','2','3'
        ]
      }
    };

    $scope.setOriginType = function(originType){
      if ($scope.pm.origin.type !== originType) $scope.pm.origin.type = originType
    }
  });
