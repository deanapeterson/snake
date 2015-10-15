'use strict';

angular
    .module('snake')
    .factory('gameState', GameStateFactory);

function GameStateFactory($rootScope) {
    var service = {
        state: {},
        levelIndex : 0,
        level : null,
        start: start,
        pause: pause,
        resume: resume,
        crash: crash,
        setNextAdvance: setNextAdvance,
        getNextAdvance: getNextAdvance
    };

    var defaultState = {
        interval: 500, //ms
        started: false,
        paused: false,
        crashed: false,
        lastAdvance : [0, 0,'up'],
        nextAdvance: [0, -1, 'up'] //x, y, direction
    };

    return service;

    function start() {
        angular.extend(service.state, defaultState);
        $rootScope.$broadcast('start');
        service.state.started = true;
    }

    function pause() {
        $rootScope.$broadcast('pause');
        service.state.paused = true;
    }

    function resume() {
        $rootScope.$broadcast('resume');
        service.state.paused = false;
    }

    function crash() {
        $rootScope.$broadcast('crash');
        service.state.crashed = true;
    }

    function setNextAdvance(nextAdvance) {
        // service.state.lastAdvance = angular.copy(service.state.nextAdvance);
        service.state.nextAdvance = nextAdvance;
    }
    function getNextAdvance() {
        service.state.lastAdvance = angular.copy(service.state.nextAdvance);
        return service.state.nextAdvance;
        
    }
}