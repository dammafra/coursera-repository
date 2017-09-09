(function () {
    'use strict'

    angular.module('data')
        .constant('API_ENDPOINT', 'https://davids-restaurant.herokuapp.com/')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$injet = ['API_ENDPOINT', '$http'];
    function MenuDataService(API_ENDPOINT, $http) {
        var service = this;

        service.getAllCategories = function () {
            return $http({
                url: API_ENDPOINT + 'categories.json'
            });
        }

        service.getItemsForCategory = function (categoryShortName) {
            return $http({
                url: API_ENDPOINT + 'menu_items.json?category=' + categoryShortName
            })
        }
    }

})();