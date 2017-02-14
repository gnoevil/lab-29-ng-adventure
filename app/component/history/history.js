'use strict';

const angular = require('angular');

angular.module('resloveAdventureApp')
.component('history', {
  template: require('./history.html'),
  controllerAs: 'historyCtrl',
  controller: ['$log', 'playerService', function($log, playerService) {
    this.$onInit = () => {
      this.player = playerService;
      $log.log('history component loaded');
    };
  }],
});
