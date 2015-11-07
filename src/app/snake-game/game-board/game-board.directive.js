'use strict';

angular
    .module('snake')
    .directive('gameBoard', gameBoardDirective);

function gameBoardDirective($timeout, snakeByteConfig) {

    return {
        restrict: 'EA',
        templateUrl : 'snake-game/game-board/game-board.view.html',
        link: linkFn
    };

    function linkFn($scope, $element) {
        var pxWidth = (snakeByteConfig.gridWidth * snakeByteConfig.blockSize);
        var pxHeight = (snakeByteConfig.gridHeight * snakeByteConfig.blockSize);

        $timeout(setSize, 0);
        function setSize() {

            $element.css({
                width: pxWidth,
                height: pxHeight
            });
        }

    }
}
