'use strict';

angular.module('snake-byte')
    .factory('levels', levelsProvider);
    
/**
 * LevelConfig
 *  {
 *      name : 'Level Name',
 *      wallClass : 'className', //applied to every wall coord
        walls : [
            [x,y]
        ],
        rewardClass : 'className',
        rewards : [
            [x,y]
        ]
    }
 **/

function levelsProvider(){

    var service = {
        data : [
            //[levelConfigs]
        ],
        add : add
    };
    
    
    return service;
    
    function add(levelConfig){
        
    }
    
    function getLevel(index){
        
    }
    
}