'use strict';

angular.module('route.home', [])
.controller('HomeController', HomeController);

function HomeController($state){
	var homeCtrl = this;

	homeCtrl.play = $state.go('play');
}