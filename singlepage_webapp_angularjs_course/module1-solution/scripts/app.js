(function () {
    'use strict'

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.dishesString = '';
        $scope.message = '';

        $scope.checkIfTooMuch = function () {
            var dishes = stringToArray($scope.dishesString);

            if (dishes.length === 0) {
                $scope.message = 'Please enter data first';
            } else if (dishes.length <= 3) {
                $scope.message = 'Enjoy!';
            } else if (dishes.length > 3) {
                $scope.message = 'Too much!';
            }
        }

        function stringToArray(string) {
            return string
                .split(',')
                .filter(elem => elem !== '' && elem !== ' ');
        }
    }
})();