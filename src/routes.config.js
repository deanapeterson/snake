'use strict';

angular
	.module('app')
	.config(configRoutes);

function  configRoutes($stateProvider){
	$stateProvider.state({
		name : 'home',
		url : '/home',
		abstract : true,
		templateUrl : 'home/home.view.html',
		controller : 'HomeController as homeCtrl'

	});
	$stateProvider.state({
		name : 'home.index',
		url : ''
	});

	$stateProvider.state({
		name : 'home.play',
		url : '/play',
		templateUrl : 'play/play.view.html',
		controller : 'PlayController as playCtrl'
	});
}
