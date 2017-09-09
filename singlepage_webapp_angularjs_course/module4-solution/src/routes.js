(function () {
    'use strict'

    angular.module('MenuApp')
        .config(ConfigRoutes);

    ConfigRoutes.$inject = ['$urlRouterProvider', '$stateProvider'];
    function ConfigRoutes($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/templates/home.template.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/templates/categories.template.html',
                controller: 'CategoriesController as categoriesCtrl',
                resolve: {
                    response: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories()
                    }]
                }
            })
            .state('items', {
                url: '/items/{categoryId}',
                templateUrl: 'src/templates/items.template.html',
                controller: 'ItemsController as itemsCtrl',
                resolve: {
                    response: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryId)
                    }]
                }
            });
    }

})();