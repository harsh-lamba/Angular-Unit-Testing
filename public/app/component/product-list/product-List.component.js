'use strict';
(function() {
    var module = angular.module('module.product.list', ['module.productService','module.product.edit.controller']);
    productListControllerFunction.$inject = ['$scope', '$modal', '$filter', 'productAPI'];

    function productListControllerFunction($scope, $modal, $filter, productAPI) {
        var self = this;
        this.$routerOnActivate = function(next) {
            productAPI.get('products').then(function(data) {
                self.products = data;
            });
        }
        this.navigateToProductDetails = function(product) {
            this.$router.navigate(['ProductDetail', {
                id: product.id
            }]);
        }
        $scope.product = {};

        this.deleteProduct = function(product) {
            productAPI.deleteObj("products/" + product.id).then(function(result) {
                self.products = _.without(self.products, _.findWhere(self.products, {
                    id: product.id
                }));
            });
        };

        // create a seperate directive  to launch modal pop-up
        this.open = function(p, action) {
            // Find maximum id
            if(action == 'add'){
                var maxId = (_.max(self.products, function(item){
                    return item.id;
                })).id;
                p.maxId = ++maxId;
            }
            
            this.modalInstance = $modal.open({
                templateUrl: 'app/component/product-list/productEdit.html',
                controller: 'productEditCtrl',
                resolve: {
                    item: function() {
                        return p;
                    }
                }
            });
            this.modalInstance.result.then(function(selectedObject) {
                if (selectedObject.save == "insert") {
                    self.products.push(selectedObject);
                    self.products = $filter('orderBy')(self.products, 'id', 'reverse');
                } else if (selectedObject.save == "update") {
                    p.description = selectedObject.description;
                    p.price = selectedObject.price;
                    p.stock = selectedObject.stock;
                    p.packing = selectedObject.packing;
                }
            });
        };
    }

    var componentConfig = {
        templateUrl: 'app/component/product-list/products.html',
        bindings: { $router: '<' },
        controller: productListControllerFunction
    };
    module.component('productList', componentConfig);
})();