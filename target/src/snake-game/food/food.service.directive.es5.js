'use strict';

angular.module('snake').directive('food', foodDirective);

function foodDirective(snakeByteConfig, snakeState, food) {

    return {
        restrict: 'E',
        link: linkFn
    };

    function linkFn($scope, $element) {
        $element.empty();
        angular.forEach(food.data, function (coords) {
            var el = angular.element("<div class='food'></div>");
            el.attr('food-coords', coords);
            el.css({
                width: snakeByteConfig.blockSize,
                height: snakeByteConfig.blockSize,
                left: coords[0] * snakeByteConfig.blockSize,
                top: coords[1] * snakeByteConfig.blockSize
            });

            $element.append(el);
        });

        food.onEaten = function (coords) {
            $element.find('[food-coords="' + coords.slice(0, 2).toString() + '"]').remove();
        };
    }
}
//# sourceMappingURL=food.service.directive.es5.js.map
