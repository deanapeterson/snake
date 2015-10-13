'use strict';

angular
    .module('snake-byte')
    .directive('renderSegment', renderSegmentDirective);



function renderSegmentDirective(snakeByteConfig, snakeState) {

    return {
        restrict: 'E',
        // template : '<div>{{$index}}, {{segment}}, </div>',
        link: linkFn
    };

    function linkFn($scope, $element) {
        var offWatch;

        $element.css({
            width: snakeByteConfig.blockSize,
            height: snakeByteConfig.blockSize,
            left: $scope.segment[0] * snakeByteConfig.blockSize,
            top: $scope.segment[1] * snakeByteConfig.blockSize,
        });

    }
}