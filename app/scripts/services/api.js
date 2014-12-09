'use strict';

/**
 * @ngdoc service
 * @name letsgoApp.api.factory
 * @description
 *
 * This houses all of the calls to the navigator API
 */
angular.module('letsgoApp.api.factory')
  .factory('api', [
    '$http',

    function($http) {
      'use strict';

    // Public API here
    return {
      /**
       * Get list of all available tables
       * @returns {HttpPromise}
       */
      tables: function () {
        var url = config.apiRoot + "/geo";
        return $http.get(url);
      },
      /**
       * Get results for a single table
       * @param table: Table name
       * @returns {HttpPromise}
       */
      table: function (table) {
        var url = config.apiRoot + "/geo/" + table;
        return $http.get(url);
      },
      /**
       * Solve a route
       * @returns {HttpPromise}
       */
      route: function () {
        var url = config.apiRoot + "/route";
        return $http.get(url);
      }
    };
  }]);
