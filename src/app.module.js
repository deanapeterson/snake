'use strict';

/**
 * @ngdoc overview
 * @name snakeYoApp
 * @description
 * # snakeYoApp
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngAnimate',
    'ngTouch',
    'ui.router',
    'templates-app',
    'route.home',
    'route.play',
    'snake'
  ]);
