'use strict';

/**
 * @ngdoc function
 * @name app.controller:AppController
 * @description
 * # AppController
 * Controller of the app
 */
angular
  .module('app')
  .controller('AppController', AppController);

function AppController($state){
	$state.go('home');
}
