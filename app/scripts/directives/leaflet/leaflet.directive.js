/**
 * Created by christopherfricke on 12/15/14.
 */
angular.module('leaflet', [])
.directive('leaflet', [function() {

  function link(scope, element, attrs) {
    var map = L.map('map', {
      center: scope.center,
      zoom: scope.zoom
    });


    L.tileLayer(scope.basemaps[0].url, {
      attribution: scope.basemaps[0].credits,
      id: scope.basemaps[0].mapboxId
    }).addTo(map);

  }

  return {
    restrict: 'E',
    transclude: true,
    scope: {
      center: '=',
      zoom: '=',
      layers: '=',
      basemaps: '='
    },
    templateUrl: 'scripts/directives/leaflet/leaflet.tpl.html',
    link: link
  };
}]);
