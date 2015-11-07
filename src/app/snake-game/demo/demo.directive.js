'use strict';

angular
	.module('snake')
	.directive('demo', demoDirective);

function demoDirective(){
	return {
		controller : 'DemoController',
		controllerAs : 'sbc'
	};
}