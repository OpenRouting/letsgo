'use strict';

/**
 * @ngdoc service
 * @name letsgoApp.poi
 * @description
 * # poi
 * Service in the letsgoApp.
 */
angular.module('letsgo.pointofinterest', [
  'letsgo.api'
])
  .factory('poiFactory', function(){
    // Creates a point of interest object

    var attributeCrosswalk = {
      osm_id: 'id'
    };

    var POI = function(poi){
      this.type = undefined;
      this.geometry = undefined;
      this.properties = {
        id: undefined,
        name: undefined,
        category: undefined,
        osm_id: undefined,
        wikipedia_id: undefined
      };

      // Non geo-json stuff
      for (var a in poi){
        if (a !== 'properties' && this.hasOwnProperty(a)) this[a] = poi[a]
      }

      // Geo-Json attributes
      if (poi.hasOwnProperty('properties')) {

        for (var a in poi.properties) {
          if (this.properties.hasOwnProperty(a)) this.properties[a] = poi.properties[a]
        }

        for (var a in attributeCrosswalk) {
          if (this.properties.hasOwnProperty(attributeCrosswalk[a]) && poi.properties.hasOwnProperty(a)) {
            this.properties[attributeCrosswalk[a]] = poi.properties[a]
          }
        }
      }

    };

    return POI;
  })

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
      self.pm.poi = [];

      var d = $q.defer();
      api.table(poiTableName).then(
        function(response) {
          // Good Response
          for (var item in response.data.features){
            var p = new POI(response.data.features[item]);
            self.pm.poi.push(p);
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
