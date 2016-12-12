'use strict';

describe('Component: productList', function () {
  var controller;
  var productAPI;
  var scope;

  beforeEach(module('module.productService'));
  beforeEach(module('myApp'));
  beforeEach(module('templates'));
  beforeEach(inject(function(_$rootScope_, _$componentController_, _productAPI_) {
    var $rootScope = _$rootScope_;
    scope = $rootScope.$new();
    productAPI = _productAPI_;
    var $componentController = _$componentController_;
    controller = $componentController('productList', {$scope: scope});
  }));

  describe('Function should be defined', function() {
    it('function: routerOnActivate', function() {
      expect(controller.$routerOnActivate).toBeDefined();      
    });
    it('function: navigateToProductDetails', function() {
      expect(controller.navigateToProductDetails).toBeDefined();      
    });
    it('function: deleteProduct', function() {
      expect(controller.deleteProduct).toBeDefined();      
    });
    it('function: open', function() {
      expect(controller.open).toBeDefined();      
    });
  });

  describe('Function: routerOnActivate', function() {
    var productsData;
    var productList;
    beforeEach(inject(function(_$q_) {
      var $q = _$q_;
      var deferred = $q.defer();
      jasmine.getJSONFixtures().fixturesPath='base/test/unit/mock';
      productList = getJSONFixture('product-list.json')
      productsData = productList.products;
      spyOn(productAPI, 'get').and.returnValue(deferred.promise);
      controller.$routerOnActivate();
      deferred.resolve(productsData);
      scope.$apply();
    }));
    
    it('ProductAPI get() to have been called', function() {
      expect(productAPI.get).toHaveBeenCalled();
      expect(productAPI.get).toHaveBeenCalledWith('products');
    });

    it('Product List should be populated', function() {
      expect(controller.products).toBeDefined();
    });

    describe('DOM Testing', function() {
      var element;
      var isolateScope;
      beforeEach(inject(function(_$compile_) {
        var $compile = _$compile_;        
        element = angular.element('<product-list></product-list>');
        element = $compile(element)(scope);
        scope.$apply();
        isolateScope = element.isolateScope();
        isolateScope.$ctrl = controller;
        isolateScope.$apply();
        spyOn(isolateScope.$ctrl, 'open').and.returnValue(true);
        spyOn(isolateScope.$ctrl, 'deleteProduct').and.returnValue(true);
      }));

      it('Element should be compiled into a template function', function() {
        expect(element.html()).toExist();        
      });

      it('DOM should be populated with the product records', function() {        
        expect(element[0].querySelectorAll('.record> tr').length).toEqual(17);
      });

      it('Click on delete button should call deleteProduct function', function() {
        var deleetBtn = element[0].querySelector('button.fa-trash-o');
        deleetBtn.click();
        expect(isolateScope.$ctrl.deleteProduct).toHaveBeenCalled();
      });

      it('Click on add/edit button should call open function', function() {
        var addButton = element[0].querySelector('button.add-new-product');
        addButton.click();
        expect(isolateScope.$ctrl.open).toHaveBeenCalled();
      });
    });
  });
});
