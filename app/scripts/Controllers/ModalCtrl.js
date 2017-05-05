
(function(){
  function ModalCtrl($scope, $uibModalInstance){
    $scope.newChatRoom = {$value: ''};

    $scope.ok = function() { 
      $uibModalInstance.close($scope.newChatRoom);
    };

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$scope', '$uibModalInstance', ModalCtrl]);
})();
