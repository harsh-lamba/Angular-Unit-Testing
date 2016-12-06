'use strict';
(function() {
    angular.module('module.product.edit.controller', ['module.productService'])
    .controller('productEditCtrl', ['$scope', '$modalInstance', 'item', 'productAPI', function($scope, $modalInstance, item, productAPI) {
        $scope.product = angular.copy(item);

        $scope.cancel = function() {
            $modalInstance.dismiss('Close');
        };
        $scope.title = (item.id > 0) ? 'Edit Product' : 'Add Product';
        $scope.buttonText = (item.id > 0) ? 'Update Product' : 'Add New Product';
        $scope.productId = (item.maxId != null) ? item.maxId : item.id;

        var original = item;
        $scope.isClean = function() {
            return angular.equals(original, $scope.product);
        };
        $scope.saveProduct = function(product) {
            product.uid = $scope.uid;
            if (product.id > 0) {
                productAPI.put('products/' + product.id, product).then(function(result) {
                    if (result.status != 'error') {
                        var obj = angular.copy(product);
                        obj.save = 'update';
                        $modalInstance.close(obj);
                    } else {
                        console.log(result);
                    }
                });
            } else {
                product.status = 'Active';
                product.id = product.maxId;
                delete product.maxId;
                productAPI.post('products', product).then(function(result) {
                    if (result.status != 'error') {
                        var obj = angular.copy(product);
                        obj.save = 'insert';
                        $modalInstance.close(obj);
                    } else {
                        console.log(result); 
                    }
                });
            }
        };        
    }]);
})();


