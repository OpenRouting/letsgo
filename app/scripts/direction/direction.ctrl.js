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
      },
      poiService: poiService
    };

    function _init(){
      poiService.load();
    }

    $scope.setOriginType = function(originType){
      if ($scope.pm.origin.type !== originType) $scope.pm.origin.type = originType
    };

    _init();

  }]);
