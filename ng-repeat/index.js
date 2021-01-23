(() => {
    'use strict'
    let users = [
        {
            name: ' KASHAN ',
            email: 'testing@test.com'
        },
        {
            name: ' UMAR ',
            email: 'UMAR@test.com'
        },
        {
            name: ' AKMAL ',
            email: 'AKMAL@test.com'
        },
        {
            name: ' NOMAN ',
            email: 'NOMAN@test.com'
        }, {
            name: ' HASSAN ',
            email: 'HASSAN@test.com'
        }, {
            name: ' ALI ',
            email: 'ALI@test.com'
        }, {
            name: ' KOMAL ',
            email: 'KOMAL@test.com'
        },
    ]
    let trimLowerCase=(str)=>(
        str?.toLowerCase()?.trim()
    )
    let compareStrings=(str1,str2)=>(
        trimLowerCase(str1) === trimLowerCase(str2)
    )
    angular.module('ngRepeat', [])
        .controller('ngRepeatController', ($scope) => {

            $scope.users = users
            $scope.userName = ''
            $scope.userEmail = ''
            $scope.errorMsg = ''


            $scope.addUser = () => {
                let previousUsers = $scope.users || []


                if (!$scope.userName || !$scope.userEmail) {
                    let hasName = Boolean($scope.userName)
                    $scope.errorMsg = hasName ? "Please write user email" : "Please write user's name."
                    return
                }
                let emailAlreadyExist = previousUsers.find(user => compareStrings(user?.email, $scope.userEmail))
                if (emailAlreadyExist) {
                    $scope.errorMsg = "user with this email already exist, please use another email"

                } else {
                  $scope.users.push({ name: $scope.userName, email: $scope.userEmail })
                }

            }

            $scope.deleteUser = (email) => {
                let previousUsers = $scope.users || []
                $scope.users = previousUsers.filter(user=> !compareStrings(user?.email, $scope.userEmail) )
            }
        })

})();

