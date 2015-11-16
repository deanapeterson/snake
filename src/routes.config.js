'use strict';

angular
	.module('app')
	.config(configRoutes);

function  configRoutes($stateProvider){

	$stateProvider.state({
		name : 'home',
		url : '/home',
		templateUrl : 'home/home.view.html',
		controller : 'HomeController',
		controllerAs : 'home'
	});

	$stateProvider.state({
		name : 'play',
		url : '/play/:level',
		templateUrl : 'play/play.view.html',
		controller : 'PlayController',
		controllerAs : 'play'
	});
}
