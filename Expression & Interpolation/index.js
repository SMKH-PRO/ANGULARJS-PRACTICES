(() => {
    'use strict'

    angular.module('Interpolation', [])
        .controller('msgController', ($scope) => {
            $scope.name = "KASHAN"
            $scope.isTurnedOn =true

            $scope.getMessage = () => {
                return `HELLO, please turn ${$scope.isTurnedOn?'Off':'On'} The Bulb!`
            }
            $scope.toggleBulbOn=()=>{
                $scope.isTurnedOn = !$scope.isTurnedOn 
            }
        })

})();

