'use strict';

angular
	.module('app')
	.config(configRoutes);

function  configRoutes($stateProvider){
	
	$stateProvider.state({
		name : 'home',
		templateUrl : 'home/home.view.html',
		controller : 'HomeController as homeCtrl',
		url : '/home'
	});

	$stateProvider.state({
		name : 'play',
		url : '/play',
		templateUrl : 'play/play.view.html',
		controller : 'PlayController as playCtrl'
	});
}