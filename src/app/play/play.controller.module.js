'use strict';

angular.module('route.play', [])
.controller('PlayController', PlayController);

function PlayController(){
	var play = this;

	play.test = 'hello';
}
