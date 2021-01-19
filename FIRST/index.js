(() => {
    'use strict'

    angular.module('myFirstApp', [])
        .controller('MyFirstController', ($scope) => {
            $scope.name = "yakov"
            $scope.sayHello = () => {
                return "HELLO WORLD"
            }
        })

})();

