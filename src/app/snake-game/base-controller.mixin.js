'use strict';

angular
  .module('snake')
  .factory('BaseControllerMixin', BaseControllerMixinFactory);

function BaseControllerMixinFactory(gameState, snakeState, $interval){
  //jshint validthis:true
  return function(){
    this.intervalPromise = null;

    this.segments = snakeState.segments;
    // this.barriers = barriers.data;
    this.state = gameState.state;

    this.init = init;

    this.start = start;
    this.stop = stop;
    this.pause = pause;
    this.resume = resume;
    this.startInterval = startInterval;
    this.togglePause = togglePause;
  };

  function init(){

  }

  function start() {
      gameState.start();
      snakeState.init();
      startInterval();
  }

  function stop() {
      $interval.cancel(this.intervalPromise);
  }

  function pause() {
      stop();
      gameState.pause();
  }

  function resume() {
      startInterval();
  }

  function startInterval(){
      this.intervalPromise = $interval(function() {
          snakeState.advance(gameState.state.nextAdvance);
      }, 100);
  }

  function togglePause() {
      // if (gameState.state.crashed) {
      //     gameState.start();
      //     return;
      // }


      if (gameState.state.paused) {
          startInterval();
          gameState.pause();
          return;
      }

      $interval.cancel(this.intervalPromise);
  }
}
