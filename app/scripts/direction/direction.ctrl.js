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
        showResults: true
      },
      destination:{
        text:'',
        showResults: true
      },
      poiService: poiService
    };

    function _init(){
      poiService.load();
    }

    $scope.setOriginType = function(originType){
      if ($scope.pm.origin.type !== originType) $scope.pm.origin.type = originType
    };

    $scope.$watch(function(){return $scope.pm.poiService.pm.loaded}, function(loaded){

    });

    _init();

  }]);
