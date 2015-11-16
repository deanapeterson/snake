'use strict';

angular
	.module('snake')
	.controller('DemoController', DemoController);

function DemoController(BaseControllerMixin){
	var ctrl = this;

	BaseControllerMixin.call(ctrl);

	ctrl.init();
ctrl.start();

}
