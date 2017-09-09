(function () {
    'use strict'

    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject= ['response'];
    function ItemsController(response) {
        var itemsCtrl = this;
        itemsCtrl.title = response.data.category.name;
        itemsCtrl.items = response.data.menu_items;
    }

})();
