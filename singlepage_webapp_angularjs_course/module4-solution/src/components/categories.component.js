(function () {
    'use strict'

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'src/templates/categories.component.template.html',
            controller: 'CategoriesComponentController',
            bindings: {
                categories: '<'
            }
        });
})();