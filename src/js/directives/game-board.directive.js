'use strict';

angular
    .module('snake-byte')
    .directive('gameboard', gameBoardDirective);

function gameBoardDirective($timeout, snakeByteConfig) {

    return {
        restrict: 'EA',
        link: linkFn
    };

    function linkFn($scope, $element, $attrs) {
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