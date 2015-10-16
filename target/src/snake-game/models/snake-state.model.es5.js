'use strict';
angular.module('snake-byte').factory('snakeState', snakeStateFactory);

function snakeStateFactory($rootScope, gameState, snakeByteConfig) {
  var service = {
    segments: [], //x,y,direction, corner (bool)
    increaseAmt: 5,
    advanceInterceptors: [hitEdge, hitSegment],
    length: 10,
    init: init,
    getCornerClass: getCornerClass,
    increaseLength: increaseLength,
    removeLast: removeLast,
    advance: advance
  };

  return service;

  function init() {
    var startPos = snakeByteConfig.getStartPos();

    service.segments.length = 0;

    startPos[3] = '';
    service.segments.push(startPos);
  }

  function increaseLength() {
    service.length = service.length + service.increaseAmt;
  }

  function removeLast() {
    if (service.segments.length >= service.length) {
      service.segments.pop();
    }
  }

  function advance() {
    var currentCoords = service.segments[0];
    var nextAdvance = gameState.getNextAdvance();
    var nextCoords = [];
    var event;

    nextCoords[0] = currentCoords[0] + nextAdvance[0]; //x
    nextCoords[1] = currentCoords[1] + nextAdvance[1]; //Y
    nextCoords[2] = nextAdvance[2]; //direction string
    nextCoords[3] = 'head'; //corner class

    event = $rootScope.$broadcast('beforeAdvance', nextCoords);

    if (event.defaultPrevented) {
      gameState.crash();
      return;
    }

    service.getCornerClass(nextCoords[2]);

    service.segments.unshift(nextCoords);

    service.removeLast();
  }

  function getCornerClass(nextPos) {

    if (nextPos !== service.segments[0][2]) {
      service.segments[0][3] = 'corner ' + service.segments[0][2] + '-' + nextPos;
    } else {
      service.segments[0][3] = '';
    }
  }

  // function beforeAdvance(nextX, nextY) {
  //   var length = service.advanceInterceptors.length;
  //   var result;
  //
  //   for (var i = 0; i < length; i = i + 1) {
  //     result = service.advanceInterceptors[i](nextX, nextY);
  //
  //     if (result === false) {
  //       return false; //crash
  //     }
  //   }
  // }

  function hitEdge(nextX, nextY) {
    if (nextX < 0 || nextX > snakeByteConfig.gridWidth - 1) {
      return false;
    }

    if (nextY < 0 || nextY > snakeByteConfig.gridHeight - 1) {
      return false;
    }
  }

  function hitSegment(nextX, nextY) {
    var length = service.segments.length;

    for (var i = 0; i < length; i = i + 1) {
      if (service.segments[i][0] === nextX && service.segments[i][1] === nextY) {
        return false;
      }
    }
  }
}
//# sourceMappingURL=snake-state.model.es5.js.map
