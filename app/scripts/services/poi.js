'use strict';

/**
 * @ngdoc service
 * @name letsgoApp.poi
 * @description
 * # poi
 * Service in the letsgoApp.
 */
angular.module('letsgo.pointofinterest', [
  'letsgo.api',
  'letsgo.map.styles'
])
  .factory('poiFactory', ['mapStyles', function(mapStyles){
    // Creates a point of interest object
    var POI = function(poi){
      var self = this;
      self.id = undefined;
      self.lng = undefined;
      self.lat = undefined;
      self.message = undefined;
      self.layer = "poi";
      self.icon = undefined;

      var attributeCrosswalk = {
        osm_id: 'id'
      };

      if (poi.hasOwnProperty('geometry')){
        self.lat = poi.geometry.coordinates[1];
        self.lng = poi.geometry.coordinates[0];
      }

      angular.forEach(poi.properties, function(value, key){
        if (poi.properties.hasOwnProperty(key) && self.hasOwnProperty(attributeCrosswalk[key])){
          self[attributeCrosswalk[key]] = value;
        };
      });

      this.icon = mapStyles.markers.direction;
    };

    return POI;
  }])

  .service('poiService', ['$q', 'poiFactory', 'api', function ($q, POI, api) {
    // Calls api service and returns a point of interest objects

    var self = this;
    var poiTableName = 'planet_osm_point';
    self.pm = {
      loaded: false,
      poi: [],
      selectedPOI: {}
    };

    self.load = function(){
      self.pm.poi = {};

      var d = $q.defer();
      api.table(poiTableName).then(
        function(response) {
          // Good Response
          for (var item in response.data.features){
            var p = new POI(response.data.features[item]);
            self.pm.poi[p.id] = p
          }
          self.pm.loaded = true;
          d.resolve();
        },
        function(err) {
          // Bad Response
          d.reject(err.data);
        });
      return d.promise;
    };



  }]);
