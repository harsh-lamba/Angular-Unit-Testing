'use strict';
(function() {
    var module = angular.module('module.product.detail', ['module.productService']);
    productDetailsControllerFunction.$inject = ['$scope', 'productAPI'];

    function productDetailsControllerFunction($scope, productAPI) {
        var self = this;
        this.$routerOnActivate = function(next) {
            productAPI.getProduct('products/' + next.params.id).then(function(product) {
              if (product) {
                $scope.product = product;
              }
            });
        }

        $scope.navigateToProductList = function(product) {
            this.$ctrl.$router.navigate(['ProductList']);
        }
    }

    var componentConfig = {
        templateUrl: 'app/component/product-details/productDetails.html',
        bindings: { $router: '<' },
        controller: productDetailsControllerFunction
    };
    module.component('productDetail', componentConfig);
})();