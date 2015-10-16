'use strict';

angular.module('snake').directive('gameController', gameControllerDirective);

function gameControllerDirective(gameState) {

    return {
        controller: 'SnakeByteController',
        require: 'gameControls',
        controllerAs: 'sbc',
        link: link
    };

    function link($scope, $element, $attrs, sbc) {
        $element.on('keyup', onKeyup);

        function onKeyup(event) {
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
                sbc.togglePause();
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
}
//# sourceMappingURL=game-controller.directive.es5.js.map
