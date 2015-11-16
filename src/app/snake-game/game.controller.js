'use strict';

angular
  .module('snake')
  .controller('GameController', GameController);

function GameController($attrs, $stateParams) {
    // var sbc = this;
    // var intervalPromise;

    // sbc.segments = snakeState.segments;
    // sbc.barriers = barriers.data;
    // sbc.state = gameState.state;

    // sbc.start = start;
    // sbc.stop = stop;
    // sbc.togglePause = togglePause;
    // sbc.pause = pause;
    // sbc.resume = resume;

    // $rootScope.$on('crash', stop);

    console.log($stateParams);

    activate();

    function activate(){

        console.log($attrs);


    }




    // function start() {
    //     gameState.start();
    //     snakeState.init();
    //     startInterval();
    // }

    // function stop() {
    //     $interval.cancel(intervalPromise);
    // }

    // function pause() {
    //     stop();
    //     gameState.pause();
    // }

    // function resume() {
    //     startInterval();
    // }

    // function startInterval(){
    //     intervalPromise = $interval(function() {
    //         snakeState.advance(gameState.state.nextAdvance);
    //     }, 100);
    // }

    // function togglePause() {
    //     // if (gameState.state.crashed) {
    //     //     gameState.start();
    //     //     return;
    //     // }


    //     if (gameState.state.paused) {
    //         startInterval();
    //         gameState.pause();
    //         return;
    //     }

    //     $interval.cancel(intervalPromise);
    // }
}
