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
        style: function (feature) {
          return feature.properties && feature.properties.style;
        },
        resetStyleOnMouseout: true,

        // This is where we define symbology for the points
        pointToLayer: function(feature, latlng){
          var icon;

          if (feature.properties.category === 'bathroom'){
            icon = L.circleMarker(latlng, {
              radius: 8,
              fillColor: "#0000FF",
              color: "#000",
              weight: 1,
              opacity: 1,
              fillOpacity: 0.8
            });
          }
          else {
            icon = L.circleMarker(latlng, {
              radius: 8,
              fillColor: "#ff7800",
              color: "#000",
              weight: 1,
              opacity: 1,
              fillOpacity: 0.8
            });
          }

          return icon;
        },
        // This is where we define popups
        onEachFeature: function(feature, layer){
          var popupContent = "<p>I started out as a GeoJSON " +
            feature.geometry.type + ", but now I'm a Leaflet vector!</p>";

          if (feature.properties && feature.properties.popupContent) {
            popupContent += feature.properties.popupContent;
          }
          layer.bindPopup(popupContent);
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

        $scope.pm.geojson.data = {
            "type": "FeatureCollection",
            "features": $scope.poiService.pm.poi
          }

      },
      true

    );
  }]);
