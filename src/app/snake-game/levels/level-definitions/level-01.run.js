'use strict';

angular.module('snake')
    .run(addLevelOne);

function addLevelOne(levels) {

    levels.add({
        name: 'Level One',
        wallClass: 'wall-green',
        walls: [
            [30, 20],
            [29, 20],
            [28, 20],
            [27, 20],
            [26, 20],
            [25, 20],
            [24, 20],
            [23, 20],
            [22, 20],
            [21, 20],
            [20, 20],
            [19, 20],
            [18, 20],
            [17, 20],
            [16, 20],
            [15, 20],
            [14, 20],
            [13, 20],
            [12, 20],
            [11, 20],
            [10, 20]
        ],
        foodClass: 'food-orange',
        food: [
            [10, 10],
            [15, 15],
            [25, 25],
            [30, 30],
            [35, 35]
        ]
    });



}
