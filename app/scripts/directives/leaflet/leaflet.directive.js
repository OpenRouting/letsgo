/**
 * Created by christopherfricke on 12/15/14.
 */
angular.module('leaflet', [])
.directive('leaflet', [function() {

  function link(scope, element, attrs) {

  }

  return {
    restrict: 'E',
    transclude: true,
    scope: {
      center: '=',
      zoom: '=',
      layers: '='
    },
    templateUrl: 'scripts/directives/leaflet/leaflet.tpl.html',
    link: link
  };
}]);
