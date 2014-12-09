'use strict';

/**
 * @ngdoc service
 * @name letsgoApp.configuration.factory
 * @description
 * # configuration
 * Factory in the letsgoApp.
 */
angular.module('letsgoApp.configuration.factory', [])
  .factory('configuration', function () {
    // Service logic
    // ...
    var config = {};

    config.apiRoot = 'http://routingservice-bmoregeoweb.rhcloud.com/api/v1/';
    config.map = {
      center: [],
      zoom: 20,
      layers:{
        name: {info:'info'}
      }
    };

    return config;
  });
