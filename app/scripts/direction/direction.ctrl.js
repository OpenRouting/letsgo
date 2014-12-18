/**
 * @ngdoc function
 * @name letsgo.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the letsgoApp
 */
angular.module('letsgo.direction', [
  'searchdropdown',
  'letsgo.pointofinterest'
])
  .controller('DirectionCtrl', ['$scope', 'poiService', function ($scope, poiService) {
    $scope.pm = {
      origin: {
        text: '',
        type: 'search',
        showResults: false
      },
      destination:{
        text:'',
        showResults: false
      }
    };

    function _init(){
      poiService.load();
    }

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

    $scope.$watch(function(){return poiService.pm.loaded}, function(){
      console.log(poiService.pm.loaded);
      if (poiService.pm.loaded){
        console.log(poiService.pm.poi);
      }
    });

    _init();

  }]);
