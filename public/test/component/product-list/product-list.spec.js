/*'use strict';

describe('Component: productList', function () {

  beforeEach(angular.mock.module('module.product.list'));
  beforeEach(angular.mock.module('myApp'));
  beforeEach(module('templates'));

    var element;
    var scope;
    var $httpBackend;
    var dataSevice;
    var controller;
    var deleteProductDeferred;
    var modalDeferred;
    var compile;
    var productListdeffered;
    var productList;
    var isolateScope;
    beforeEach(inject(function($injector) {
      $httpBackend = $injector.get('$httpBackend');
      $httpBackend.expectGET('app/v1/products').respond('200','');
    }));

    beforeEach(inject(function($rootScope, $compile, _Data_, $q, $componentController){
      productListdeffered = $q.defer();
      deleteProductDeferred = $q.defer();
      modalDeferred = $q.defer();
      compile = $compile;
      dataSevice = _Data_;
      scope = $rootScope.$new();

      jasmine.getJSONFixtures().fixturesPath='base/test/mock';
      productList = getJSONFixture('product-list.json')

      spyOn(dataSevice, 'get').and.returnValue(productListdeffered.promise);
      
      element = angular.element('<product-list></product-list>');
      element = $compile(element)(scope);
      isolateScope = element.isolateScope();
      controller = $componentController('productList', {$scope: scope});
      controller.$routerOnActivate();
      productListdeffered.resolve(productList);
      scope.$apply();
    }));

    it('should render the text', function() {
      var h4 = element.find('h4');
      expect(h4.text()).toBe('Products Management System');
    });

    it('get method of Data service should be called on route activation', function(){
      expect(dataSevice.get).toHaveBeenCalled();
    });

    describe('Method: deleteProduct', function(){
      it('delete service method should get called on calling deleteProduct', function(){
        spyOn(dataSevice, 'deleteObj').and.returnValue(deleteProductDeferred.promise);
        var product = {
          id: 10
        };
        scope.deleteProduct(product);
        expect(dataSevice.deleteObj).toHaveBeenCalled();
      });
    });

    describe('method : navigateToProductDetails', function(){
      it(' should navigate to ProductDetails router', function(){
        var product = {
          id: 10
        };
        scope.$ctrl.$router = {
          navigate : function(){}
        }
        spyOn(scope.$ctrl.$router, 'navigate');
        scope.navigateToProductDetails(product);
        expect(scope.$ctrl.$router.navigate).toHaveBeenCalled();
      });
    });

    describe('DOM testing', function(){

      it('Data should get painted in table', function(){
        expect(element[0].querySelectorAll('.record> tr').length).toEqual(13);
      });

      it('DOM', function(){
        scope = element.isolateScope();
        spyOn(scope,'open');
        var addProductBtn  = element[0].querySelector('button.add-new-product');
        addProductBtn.click();
        expect(scope.open).toHaveBeenCalled();
      });

      it('Filter product list', function(){
        scope = element.isolateScope();
        scope.filterProduct = '50 g';
         var triggerKeyDown = function (element, keyCode) {
          var e = $.Event("keydown");
          e.which = keyCode;
          element.triggerHandler(e);
        };
        triggerKeyDown(element, 13);
        scope.$apply();
        expect(element[0].querySelectorAll('.record> tr').length).toEqual(1);
      });

      it('Click on product should call navigateToProductDetails', function(){
        scope = element.isolateScope();
        spyOn(scope,'navigateToProductDetails');
        var productLink = element[0].querySelector('.record> tr> td');
        productLink.click();
        expect(scope.navigateToProductDetails).toHaveBeenCalled();
      });


      it('Click on delete button should call deleteProduct', function(){
        scope = element.isolateScope();
        spyOn(scope,'deleteProduct');
        var deleetBtn = element[0].querySelector('button.fa-trash-o');
        deleetBtn.click();
        expect(scope.deleteProduct).toHaveBeenCalled();
      });
    });

});
*/