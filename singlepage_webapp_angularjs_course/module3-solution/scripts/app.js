(function () {
    'use-strict'

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('API_ENDPOINT', 'https://davids-restaurant.herokuapp.com/')
        .directive('foundItems', FoundItemsDirective)
        .directive('loader', LoaderDirective)

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var nidCtrl = this;

        nidCtrl.searchTerm = '';
        nidCtrl.isLoading = false;
        nidCtrl.getMatchedMenuItems = function () {
            if (nidCtrl.searchTerm != '') {
                nidCtrl.isLoading = true;

                MenuSearchService.getMatchedMenuItems(nidCtrl.searchTerm)
                    .then(function (result) {
                        nidCtrl.found = result;
                        nidCtrl.isLoading = false;
                    }).catch(function (error) {
                        console.log(error);
                        nidCtrl.isLoading = false;
                    });
            } else {
                nidCtrl.found = [];
            }
        }

        nidCtrl.removeItem = function (index) {
            nidCtrl.found.splice(index, 1);
        }
    }

    MenuSearchService.$inject = ['$http', 'API_ENDPOINT'];
    function MenuSearchService($http, API_ENDPOINT) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                url: API_ENDPOINT + 'menu_items.json'
            }).then(function (result) {
                var menuItems = result.data.menu_items;

                // process result and only keep items that match                
                var foundItems = menuItems.filter(function (item) {
                    return item.description.indexOf(searchTerm) != -1
                })

                // return processed items
                return foundItems;
            });
        }

    }

    function FoundItemsDirective() {
        var ddo = {
            restrict: 'E',
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                onRemove: '&'
            }
        };

        return ddo;
    }

    function LoaderDirective() {
        var ddo = {
            templateUrl: 'loader/itemsloaderindicator.template.html'
        };

        return ddo;
    }
})();