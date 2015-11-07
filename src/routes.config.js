'use strict';

angular
	.module('app')
	.config(configRoutes);

function  configRoutes($stateProvider){

	$stateProvider.state({
		name : 'home',
		url : '/home',
		templateUrl : 'home/home.view.html',
	});

	$stateProvider.state({
		name : 'home.play',
		url : '/play',
		templateUrl : 'play/play.view.html',
		controller : 'PlayController as playCtrl'
	});
}
