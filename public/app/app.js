'use strict';

// Require external libraries
window.angular = require('angular');
require('../js/angular-animate.min.js');
require('../js/ui-bootstrap-tpls-0.11.2.min.js');
window._ = require('underscore');

// Require internal modules
require('./services').name;
require('./component/product-container').name;
require('./component/product-list').name;
require('./component/product-details').name;
require('./directives').name;


var app = angular.module('myApp', [ 'ngComponentRouter', 
	'ui.bootstrap',
	'module.productService',
	'module.product.container',
	'module.product.detail',
	'module.product.list',
	'module.directive'
	]);

app.value('$routerRootComponent', 'coltApp');

app.component('coltApp', {
  template:
    '<ng-outlet></ng-outlet>\n',
  $routeConfig: [
    {path: '/...', name: 'ProductContainer', component: 'productContainer', useAsDefault: true}
  ]
});
