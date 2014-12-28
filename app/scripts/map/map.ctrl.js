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
    var icons = {
      direction: {
        type: 'div',
        iconSize: [20, 20],
        className: 'direction',
        iconAnchor:  [5, 5]
      },
      poi: {
        type: 'div',
        iconSize: [20, 20],
        className: 'poi',
        iconAnchor:  [5, 5]
      }
    };

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

      layers: {
        baselayers: {
          osm: {
            name: "OpenStreetMap",
            url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            type: "xyz",
            layerParams: {},
            layerOptions: {}
          },
          mapbox_terrain: {
            name: "Mapbox Terrain",
            url: "http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}",
            type: "xyz",
            layerOptions: {
              apikey: "pk.eyJ1IjoidG9tYmF0b3NzYWxzIiwiYSI6Imo3MWxyTHMifQ.TjXg_IV7ZYMHX6tqjMikPg",
              mapid: "tombatossals.jbn2nnon"
            },
            layerParams: {}
          }
        },
        overlays: {
          directions: {
            name: "Directions",
            type: "group",
            visible: true,
            layerParams: {},
            layerOptions: {}
          },
          poi: {
            name: "Points of Interest",
            type: "group",
            visible: true,
            layerParams: {},
            layerOptions: {}
          }
        }
      },
      markers: {}
    };

    $scope.poiService = poiService;

    // Pull this from directions service
    $scope.pm.markers = {
      n0: {
        lng: -77.0555411,
        lat: 38.930106,
        message: 'asdf',
        layer: 'directions',
        icon: icons.direction
      },
      n1: {
        lng: -77.0555168,
        lat: 38.929875,
        message: '2',
        layer: 'directions',
        icon: icons.direction
      }
    };




    $scope.$watch(
      function(){
        return $scope.poiService.pm.poi
      },
      function(){
        $scope.pm.geojson.data = {
            "type": "FeatureCollection",
            "features": $scope.poiService.pm.poi
          }
      },
      true

    );
  }]);
