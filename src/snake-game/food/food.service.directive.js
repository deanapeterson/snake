'use strict';

angular
  .module('snake')
  .factory('food', foodFactory)
  .directive('food', foodDirective);

function foodFactory($rootScope){
  var service = {
    data : [
      [10,10],
      [15,15],
      [25,25],
      [30,30],
      [35,35]
    ],
    onEaten : function(){}
  };
  init();
  return service;

  function init(){

    $rootScope.$on('beforeAdvance', checkCollision)

  }

  function checkCollision(event, coords){
    var length = service.data.length;
    var barrier;

    for(var i = 0; i < length; i++){
      if(
          service.data[i][0] === coords[0] &&
          service.data[i][1] === coords[1]
        ){
          service.onEaten(coords);
          return;
        }
    }
  }
}


function foodDirective(snakeByteConfig, snakeState, food) {

    return {
        restrict: 'E',
        link: linkFn
    };

    function linkFn($scope, $element) {
        var offWatch;
        var barrierEls = '';

        $element.empty();


        angular.forEach(food.data, function(coords){
          var el = angular.element("<div class='food'></div>");
            el.attr('food-coords',coords);
            el.css({
              width: snakeByteConfig.blockSize,
              height: snakeByteConfig.blockSize,
              left: coords[0] * snakeByteConfig.blockSize,
              top: coords[1] * snakeByteConfig.blockSize,
          });

          $element.append(el);
        })

        food.onEaten = function(coords){
          console.log(coords);
          $element.find('[food-coords="'+ coords.slice(0,2).toString() +'"]').remove();
        }



    }
}
