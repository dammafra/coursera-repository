(function () {
    'use strict'

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['response'];
    function CategoriesController(response) {
        var categoriesCtrl = this;
        categoriesCtrl.categories = response.data;
    }

})();
