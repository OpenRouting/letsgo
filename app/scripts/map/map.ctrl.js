'use strict';

/**
 * @ngdoc function
 * @name letsgo.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the letsgoApp
 */
angular.module('letsgo.map', [
  'leaflet-directive',
  'letsgo.pointofinterest'

])
  .controller('MapCtrl', ['$scope', 'poiService', function ($scope, poiService) {
    $scope.pm = {
      center: {
        lat: 38.929,
        lng: -77.051,
        zoom: 16
      },
      defaults: {
        tileLayer: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
        maxZoom: 14,
        path: {
          weight: 10,
          color: '#800000',
          opacity: 1
        }
      },
      layers: [],

      geojson: {
        data: undefined,
        style: {
          "color": "#ff7800",
          "weight": 5,
          "opacity": 0.65
        }
      },

      basemaps: {
        "baselayers": {
          "osm": {
            "name": "OpenStreetMap",
            "url": "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            "type": "xyz",
            "layerParams": {},
            "layerOptions": {}
          },
          "mapbox_terrain": {
            "name": "Mapbox Terrain",
            "url": "http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}",
            "type": "xyz",
            "layerOptions": {
              "apikey": "pk.eyJ1IjoidG9tYmF0b3NzYWxzIiwiYSI6Imo3MWxyTHMifQ.TjXg_IV7ZYMHX6tqjMikPg",
              "mapid": "tombatossals.jbn2nnon"
            },
            "layerParams": {}
          }
        }
      }
    };

    $scope.poiService = poiService;

    $scope.$watch(
      function(){return $scope.poiService.pm.poi},
      function(){
        angular.extend($scope, {
          geojson: {
            data: {
              "type": "FeatureCollection",
              "features": $scope.poiService.pm.poi
            },
            style: {
              "color": "#ff7800",
              "weight": 5,
              "opacity": 0.65
            },
            resetStyleOnMouseout: true
          }
          }
        );


      },
      true

    );
  }]);
