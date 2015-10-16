'use strict';

angular
  .module('snake')
  .factory('food', foodFactory);

function foodFactory(){
  var service = {

  };

  return service;


  // function checkCollision(event, coords){
  //   var length = service.data.length;
  //   var barrier;
  //
  //   for(var i = 0; i < length; i++){
  //     if(
  //         service.data[i][0] === coords[0] &&
  //         service.data[i][1] === coords[1]
  //       ){
  //         service.onEaten(coords);
  //         return;
  //       }
  //   }
  // }
}
