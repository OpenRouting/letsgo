'use strict';

/**
 * @ngdoc function
 * @name letsgo.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the letsgoApp
 */
angular.module('letsgo.map', [
  'leaflet'
])
  .controller('MapCtrl', function ($scope) {
    $scope.pm = {
      center: [38.929,-77.051],
      zoom:16,
      layers: [],
      basemaps:[
        {
          name: 'MapBox Demo',
          url: 'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png',
          credits: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="http://mapbox.com">Mapbox</a>',
          mapboxId: 'examples.map-i875mjb7'

        }
      ]
    };
  });
