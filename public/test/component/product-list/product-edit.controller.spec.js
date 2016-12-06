/*'use strict';

describe('Controller: productEditCtrl', function() {

  beforeEach(module('module.product.edit.controller'));
  beforeEach(angular.mock.module('module.productService'));
  beforeEach(module('templates'));

  var dataService;
  var productEditCtrl;
  var scope;
  var modalInstance;
  var item;
  var putDeferred;
  var controller;
  // Mock services and spy on methods
  beforeEach(inject(function($q, _Data_){
    dataService = _Data_;
    putDeferred = $q.defer();
  }));
  // Initialize the controller and a mock scope.
  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller;
    modalInstance = {       // Create a mock object using spies
      close: jasmine.createSpy('modalInstance.close'),
      dismiss: jasmine.createSpy('modalInstance.dismiss'),
      result: {
        then: jasmine.createSpy('modalInstance.result.then')
      }
    };
    item = {};
    productEditCtrl = $controller('productEditCtrl', {
      $scope: scope,
      $modalInstance: modalInstance,
      item:item
    });
  }));

  describe('saveProduct', function() {
    it('should call put service method if id is greater than 0', function(){
      var product = {
        id:1
      };
      spyOn(dataService, 'put').and.returnValue(putDeferred.promise);
      scope.saveProduct(product);
      expect(dataService.put).toHaveBeenCalled();
    });

    it('should call post service method if id is less or equal to 0', function(){
      var product = {
        id:0
      };
      spyOn(dataService, 'post').and.returnValue(putDeferred.promise);
      scope.saveProduct(product);
      expect(dataService.post).toHaveBeenCalled();
    });
  });

  it('isClean should return true', function(){
    expect(scope.isClean).toBeTruthy();
  });

  it('Cancel method should called dismiss of modal', function(){
    scope.cancel();
    expect(modalInstance.dismiss).toHaveBeenCalled();
  });

  it('Title of modal should be Add prodcut if product Id is 0', function(){
    item.id = 0;
    expect(scope.title).toBe('Add Product');
  });

  it('Title of modal should be Edit Product if product Id greater than 0', function(){
    item.id = 10;
    productEditCtrl = controller('productEditCtrl', {
      $scope: scope,
      $modalInstance: modalInstance,
      item:item
    });
    expect(scope.title).toBe('Edit Product');
  });

  });
*/