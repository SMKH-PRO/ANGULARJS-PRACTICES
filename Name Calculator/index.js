
(() => {
    'use strict'

    angular.module('NameCalculator', [])
        .controller('NameCalculatorController', ($scope) => {
            $scope.name = ""
            $scope.totalValue = 0
            $scope.displayNumeric = () => {
               // alert($scope.name)
                var totalNameValue = calculateNumericForString($scope.name) || 0
                $scope.totalValue = totalNameValue
                console.log("totalNameValue ",totalNameValue)
            }

            const calculateNumericForString = (string) => {
                var totalStringValue = 0;
                for (var i = 0; i < string?.length; i++) {
                  totalStringValue+=string.charCodeAt(i)
                }
                return totalStringValue
            }
        })
})();