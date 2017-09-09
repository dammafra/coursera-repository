(function () {
    'use strict'

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getToBuyItems();

        toBuy.buyItem = function (index) {
            ShoppingListCheckOffService.buyItem(index);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;

        alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyItems = [
            {
                name: 'Cookies',
                quantity: 10
            },
            {
                name: 'Chips',
                quantity: 30
            },
            {
                name: 'Cola',
                quantity: 5
            },
            {
                name: 'Cake',
                quantity: 1
            },
            {
                name: 'candles',
                quantity: 23
            },

        ]
        var boughtItems = [];

        this.getToBuyItems = function () {
            return toBuyItems;
        }

        this.getBoughtItems = function () {
            return boughtItems;
        }

        this.buyItem = function (index) {
            var item = toBuyItems.splice(index, 1)[0];
            boughtItems.push(item);
        }
    }
})();