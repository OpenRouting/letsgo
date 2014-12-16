/**
 * @ngdoc function
 * @name letsgo.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the letsgoApp
 */
angular.module('letsgo.direction', [])
  .controller('DirectionCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.pm = {
      originType: 'search' // search, gps
    };

    $scope.setOriginType = function(originType){$scope.pm.originType = originType}
  });
