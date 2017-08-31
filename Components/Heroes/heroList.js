(function(angular) {
  'use strict';
  function HeroListController($scope, $element, $attrs) {
    var ctrl = this;

    ctrl.list = [
      {
        name: 'Superman',
        location: ''
      },
      {
        name: 'Batman',
        location: 'Wayne Manor'
      },
      {
        name: 'Spiderman',
        location: 'Wayne Manor'
      },
      {
        name: 'Professor X',
        location: 'Wayne Manor'
      },
      {
        name: 'Wolverine',
        location: 'Wayne Manor'
      },
      {
        name: 'Iron Man',
        location: 'Wayne Manor'
      },
      {
        name: 'Thor',
        location: 'Wayne Manor'
      }
    ];
    ctrl.updateHero = function(hero, prop, value) {
      hero[prop] = value;
    };
    ctrl.deleteHero = function(hero) {
      var idx = ctrl.list.indexOf(hero);
      if(idx >= 0) {
        ctrl.list.splice(idex, 1);
      }
    };
  }
  angular.module('heroApp').component('heroList', {
    templateUrl: 'heroList.html',
    controller: HeroListController
  });
})(window.angular);
