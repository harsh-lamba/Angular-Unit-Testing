'use strict';
(function() {
    var module = angular.module('module.product.list', ['module.productService','module.product.edit.controller']);
    productListControllerFunction.$inject = ['$scope', '$modal', '$filter', 'productAPI'];

    function productListControllerFunction($scope, $modal, $filter, productAPI) {
        var self = this;
        this.$routerOnActivate = function(next) {
            productAPI.get('products').then(function(data) {
                $scope.products = data;
            });
        }
        $scope.navigateToProductDetails = function(product) {
            this.$ctrl.$router.navigate(['ProductDetail', {
                id: product.id
            }]);
        }
        $scope.product = {};

        $scope.deleteProduct = function(product) {
            productAPI.deleteObj("products/" + product.id).then(function(result) {
                $scope.products = _.without($scope.products, _.findWhere($scope.products, {
                    id: product.id
                }));
            });
        };

        // create a seperate directive  to launch modal pop-up
        $scope.open = function(p, action) {
            // Find maximum id
            if(action == 'add'){
                var maxId = (_.max($scope.products, function(item){
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
                    $scope.products.push(selectedObject);
                    $scope.products = $filter('orderBy')($scope.products, 'id', 'reverse');
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