
/*angular.module('productModule', [])*/

'use strict';
(function() {
	angular.module('module.product.container', ['module.productService'])
    .component('productContainer', {
    	template: '<ng-outlet></ng-outlet>',
	    $routeConfig: [
	      {path:'/',    name: 'ProductList',   component: 'productList', useAsDefault: true},
	      {path:'/:id', name: 'ProductDetail', component: 'productDetail'}
	    ]
    });
})();
