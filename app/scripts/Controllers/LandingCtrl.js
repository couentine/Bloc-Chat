(function(){
  function LandingCtrl(landing){
    this.getRooms = Room.all;
  }

  angular
    .module('blocChat')
    .controller('LandingCtrl', ['Room', HomeCtrl]);
})()
