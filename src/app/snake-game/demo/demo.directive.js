'use strict';

angular
	.module('snake')
	.directive('snakeDemo', demoDirective);

function demoDirective(){
	return {
		controller : 'DemoController',
		controllerAs : 'sbc',
		templateUrl : 'snake-game/demo/demo.view.html'
	};
}
