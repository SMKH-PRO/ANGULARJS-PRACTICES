(() => {
    'use strict'

    angular.module('ngRepeat', [])
        .controller('ngRepeatController', ($scope) => {
            
            $scope.users=[
                {
                    name:' KASHAN ',
                    email:'testing@test.com'
                },
                {
                    name:' UMAR ',
                    email:'UMAR@test.com'
                },
                {
                    name:' AKMAL ',
                    email:'AKMAL@test.com'
                },
                {
                    name:' NOMAN ',
                    email:'NOMAN@test.com'
                },{
                    name:' HASSAN ',
                    email:'HASSAN@test.com'
                },{
                    name:' ALI ',
                    email:'ALI@test.com'
                },{
                    name:' KOMAL ',
                    email:'KOMAL@test.com'
                },
            ]
        })

})();

