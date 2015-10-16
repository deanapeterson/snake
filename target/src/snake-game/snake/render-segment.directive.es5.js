'use strict';

angular.module('snake').directive('renderSegment', renderSegmentDirective);

function renderSegmentDirective(snakeByteConfig) {

    return {
        restrict: 'E',
        link: linkFn
    };

    function linkFn($scope, $element) {

        $element.css({
            width: snakeByteConfig.blockSize,
            height: snakeByteConfig.blockSize,
            left: $scope.segment[0] * snakeByteConfig.blockSize,
            top: $scope.segment[1] * snakeByteConfig.blockSize
        });
    }
}
//# sourceMappingURL=render-segment.directive.es5.js.map
