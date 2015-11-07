'use strict';

angular
  .module('snake')
  .directive('barriers', barriersDirective);

function barriersDirective(snakeByteConfig, snakeState, barriers) {

    return {
        restrict: 'E',
        link: linkFn
    };

    function linkFn($scope, $element) {

        $element.empty();

        angular.forEach(barriers.data, function(coords){
          var el = angular.element("<div class='barrier'></div>");
            el.css({
              width: snakeByteConfig.blockSize,
              height: snakeByteConfig.blockSize,
              left: coords[0] * snakeByteConfig.blockSize,
              top: coords[1] * snakeByteConfig.blockSize,
          });

          $element.append(el);
        });
    }
}