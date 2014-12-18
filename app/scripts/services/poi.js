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

    var POI = function(poi){
      this.name = undefined;
      this.category = undefined;
      this.osm_id = undefined;
      this.wikipedia_id = undefined;
      this.geometry = {};

      for (var a in poi){
        if (this.hasOwnProperty(a)) this[a] = poi[a]
      }
      for (var a in poi.properties){
        if (this.hasOwnProperty(a)) this[a] = poi.properties[a]
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
