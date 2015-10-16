'use strict';

angular.module('snake')
	.factory('eventHandlers', eventHandlersFactory);

function eventHandlersFactory($window, $rootScope, gameState){
	var service = {
		bind : bind
	};
	return service;

	function bind(){
		angular.element($window).on('keyup', onKeyup);
	}

	function onKeyup(event){
		var keyCode = event.keyCode;
		var direction = 'up';

		switch (keyCode) {
			case 38:
				direction = 'up';
				break;
			case 39:
				direction = 'right';
				break;
			case 40:
				direction = 'down';
				break;
			case 37:
				direction = 'left';
				break;
		}

		if (keyCode === 32) {
			$rootScope.$broadcast('togglePause');
			return;
		}

		setNextAdvance(direction);
	}

    function setNextAdvance(direction) {
        var nextAdvance;

        switch (direction) {
            case 'left':
                nextAdvance = [-1, 0, direction];
                break;
            case 'down':
                nextAdvance = [0, 1, direction];
                break;
            case 'right':
                nextAdvance = [1, 0, direction];
                break;
            case 'up':
                nextAdvance = [0, -1, direction];
                break;
        }
        gameState.setNextAdvance(nextAdvance);
    }

}