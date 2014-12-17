/**
 * Created by christopherfricke on 12/15/14.
 */
angular.module('leaflet', [])
.directive('leaflet', [function() {

  function link(scope, element, attrs) {
    var basemapLayers = [];
    var initialBasemap;
    for (var b in scope.basemaps){
      console.log(b)
      if (b == 0){initialBasemap = scope.basemaps[b].name}
      basemapLayers[scope.basemaps[b].name] = L.tileLayer(scope.basemaps[b].url, {
        attribution: scope.basemaps[b].credits,
        id: scope.basemaps[b].mapboxId
      });
    }

    var map = L.map('map', {
      center: scope.center,
      zoom: scope.zoom,
      layers: [basemapLayers[initialBasemap]]
    });

    L.control.layers(basemapLayers, undefined).addTo(map);


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
