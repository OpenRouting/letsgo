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
        showResults: false,
        results: [
          '1','2','3'
        ]
      },
      destination:{
        text:'',
        showResults: false,
        results: [
          '1','2','3'
        ]
      }
    };

    $scope.setOriginType = function(originType){
      if ($scope.pm.origin.type !== originType) $scope.pm.origin.type = originType
    };

    $scope.$watch('pm.destination.results', function(){
      if ($scope.pm.destination.results.length > 0){
        $scope.pm.destination.showResults = false;
      } else {
        $scope.pm.destination.showResults = true;
      }
    });
    $scope.$watch('pm.origin.results', function(){
      if ($scope.pm.origin.results.length > 0){
        $scope.pm.origin.showResults = false;
      } else {
        $scope.pm.origin.showResults = true;
      }
    });
  });
