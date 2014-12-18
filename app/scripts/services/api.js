'use strict';

/**
 * @ngdoc service
 * @name letsgo.api
 * @description
 *
 * This houses all of the calls to the navigator API
 */
angular.module('letsgo.api', ['letsgo.configuration'])

  .factory('api', [
    '$http',
    'configuration',

    function($http,config) {

    // Public API here
    return {
      /**
       * Get list of all available tables
       * @returns {HttpPromise}
       */
      tables: function () {
        var url = config.apiRoot + '/geo';
        return $http.get(url);
      },
      /**
       * Get results for a single table
       * @param table: Table name
       * @returns {HttpPromise}
       */
      table: function (table) {
        //var url = config.apiRoot + '/geo/' + table;
        var url = 'scripts/services/fakePoi.json';
        return $http.get(url);
      },
      /**
       * Solve a route
       * @returns {HttpPromise}
       */
      route: function () {
        var url = config.apiRoot + '/route';
        return $http.get(url);
      }
    };
  }]);
