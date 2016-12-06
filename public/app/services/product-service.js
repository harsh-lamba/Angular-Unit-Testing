'use strict';
(function(){
    angular.module('module.productService', [])
    .factory('productAPI', serviceFunction);

    function serviceFunction($http, $q) {
        var serviceBase = '/';
        var service = {
            get : get,
            post : post,
            put : put,
            deleteObj : deleteObj,
            getProduct : getProduct
        };
        return service;

        function get(q) {
            return $http.get(serviceBase + q).then(function (results) {
                return results.data;
            },
            function(error) {
                return $q.reject(error.status);
            });
        };

        function post(q, object) {
            return $http.post(serviceBase + q, object).then(function (results) {
                return results.data;
            },
            function(error) {
                return $q.reject(error.status);
            });
        };

        function put(q, object) {
            return $http.put(serviceBase + q, object).then(function (results) {
                return results.data;
            },
            function(error) {
                return $q.reject(error.status);
            });
        };

        function deleteObj(q) {
            return $http.delete(serviceBase + q).then(function (results) {
                return results.data;
            },
            function(error) {
                return $q.reject(error.status);
            });
        };

        function getProduct(productid) {
            return $http.get(serviceBase + productid).then(function (results) {
                return results.data;
            },
            function(error) {
                return $q.reject(error.status);
            });
        }
    }
})();
