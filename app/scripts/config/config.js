/**
 * Created by christopherfricke on 12/8/14.
 */
"use strict";
var config = new function() {
  this.apiRoot = 'http://routingservice-bmoregeoweb.rhcloud.com/api/v1/';
  this.map = {
    center: [],
    zoom: 20,
    layers:{
      name: {info:'info'}
    }
  }
};
