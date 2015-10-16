'use strict';

angular.module('snake').directive('gameboard', gameBoardDirective);

function gameBoardDirective($timeout, snakeByteConfig) {

    return {
        restrict: 'EA',
        link: linkFn
    };

    function linkFn($scope, $element) {
        var pxWidth = snakeByteConfig.gridWidth * snakeByteConfig.blockSize;
        var pxHeight = snakeByteConfig.gridHeight * snakeByteConfig.blockSize;

        $timeout(setSize, 0);
        function setSize() {

            $element.css({
                width: pxWidth,
                height: pxHeight
            });
        }
    }
}
//# sourceMappingURL=game-board.directive.es5.js.map
