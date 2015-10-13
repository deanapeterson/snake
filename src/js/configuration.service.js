'use strict';

angular.module('snake-byte')
    .factory('snakeByteConfig', function(){
        var service = {
            blockSize : 8,
            gridWidth : 40,
            gridHeight : 40,
            getPxWidth : getPxWidth,
            getPxHeight : getPxHeight,
            getStartPos : getStartPos
        };
        
        return service;
        
        function getPxWidth(){
            return service.gridWidth * service.blockSize;
        }
        function getPxHeight(){
            return service.gridHeight * service.blockSize;
        }
        
        function getStartPos(){
            return [Math.floor(service.gridWidth / 2), (service.gridHeight - 1), 'up'];
        }
        
    });
