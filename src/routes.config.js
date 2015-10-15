'use strict';

angular
	.module('app')
	.config(configRoutes);

function  configRoutes($stateProvider){
	$stateProvider.state({
		name : 'home',
		url : '/'
	});
}