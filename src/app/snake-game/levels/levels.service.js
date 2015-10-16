'use strict';

angular.module('snake')
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
        add : add,
        getLevel : getLevel
    };


    return service;

    function add(levelConfig){
        console.log(levelConfig);
    }

    function getLevel(index){
        console.log(index);
    }

}
