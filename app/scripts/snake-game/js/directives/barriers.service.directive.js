

angular.module('snake-byte')
.factory('barriers', barriersFactory)
.directive('barriers', barriersDirective);

function barriersFactory($rootScope){
  var service = {
    data : [
      [30,20],
      [29,20],
      [28,20],
      [27,20],
      [26,20],
      [25,20],
      [24,20],
      [23,20],
      [22,20],
      [21,20],
      [20,20],
      [19,20],
      [18,20],
      [17,20],
      [16,20],
      [15,20],
      [14,20],
      [13,20],
      [12,20],
      [11,20],
      [10,20]
    ]
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
          event.preventDefault();
        }
    }
  }
}


function barriersDirective(snakeByteConfig, snakeState, barriers) {

    return {
        restrict: 'E',
        link: linkFn
    };

    function linkFn($scope, $element) {
        var offWatch;
        var barrierEls = '';

        $element.empty();
        
        
        angular.forEach(barriers.data, function(coords){
          var el = angular.element("<div class='barrier'></div>");
          console.log(el);
            el.css({
              width: snakeByteConfig.blockSize,
              height: snakeByteConfig.blockSize,
              left: coords[0] * snakeByteConfig.blockSize,
              top: coords[1] * snakeByteConfig.blockSize,
          });
          
          $element.append(el);
        })
        
        



    }
}