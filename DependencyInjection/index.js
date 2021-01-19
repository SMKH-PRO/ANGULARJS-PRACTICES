(() => {
    'use strict'

    const DIController = ( $filter,$scope) => {
        $scope.name = "Kashan"
        $scope.upper = ()=>{
            var upcase= $filter('uppercase')
            $scope.name = upcase($scope.name)
            
        }
        
    }

   

    angular.module('DIApp', [])
    .controller('DIController',DIController)

})();

