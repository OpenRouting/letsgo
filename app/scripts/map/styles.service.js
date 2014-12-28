/**
 * Created by christopherfricke on 12/28/14.
 */
'use strict';

/**
 * @ngdoc service
 * @name letsgoApp.poi
 * @description
 * # poi
 * Service in the letsgoApp.
 */
angular.module('letsgo.map.styles', [])
.service('mapStyles', [function () {
    this.markers = {
      direction: {
        type: 'div',
        iconSize: [20, 20],
        className: 'direction',
        iconAnchor: [5, 5]
      },
      poi: {
        type: 'div',
        iconSize: [20, 20],
        className: 'poi',
        iconAnchor: [5, 5]
      }
    }
    }]);

