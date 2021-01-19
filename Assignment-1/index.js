(() => {
    'use strict'

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', ($scope) => {
            $scope.items = '';
            $scope.msg = '';
            $scope.msgStyle = '';
            $scope.inputStyle = '';

            $scope.btnClick = () => {
                let numberOfItems = $scope?.items?.split(',')?.filter(Boolean)?.length;
                let isGreater = numberOfItems > 3;

                if (numberOfItems) {
                    $scope.msg = isGreater ? 'Too much' : 'Enjoy!';
                    $scope.msgStyle =  'color:green'
                    $scope.inputStyle ='border:2px solid green';



                } else {
                    $scope.msg = 'Please enter data first';
                    $scope.msgStyle = 'color:red';
                    $scope.inputStyle ='border:2px solid red';
                }
            }

        })

})();

