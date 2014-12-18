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
    };

    return POI;
  })

  .service('poiService', ['$q', 'poiFactory', 'api', function ($q, POI, api) {
    // Calls api service and returns a point of interest objects

    var self = this;
    var poiTableName = 'planet_osm_point';
    self.loaded = false;
    self.poi = [];
    self.selectedPOI = {};

    self.loadPOI = function(){
      self.poi = [];

      var d = $q.defer();
      console.log(api);
      api.table(poiTableName).then(
        function(response) {
          // Good Response
          console.log(response);

          for (var item in response.data){
            var p = new POI(response.data[item]);
            self.poi.push(p);
          }
          self.loaded = true;
          d.resolve();
        },
        function(err) {
          // Bad Response
          console.log(err);
          d.reject(err.data);
        });

      return d.promise;
    };

    self.loadPOI();

  }]);
